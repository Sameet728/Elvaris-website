"use client";

import { useEffect, useRef } from "react";

export function PipelineBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    function createPipelineBackground(canvas: HTMLCanvasElement) {
      const ctx = canvas.getContext("2d", { alpha: false }); // alpha: false for better performance
      if (!ctx) return () => {};
      
      const reduce = matchMedia("(prefers-reduced-motion: reduce)");
      let W = 0,
        H = 0,
        dpr = 1,
        paths: any[] = [],
        rails: any[] = [],
        F = { x: 0, y: 0 },
        raf = 0,
        last = 0,
        T = 0,
        mobile = false,
        off: HTMLCanvasElement | null = null;
        
      const rnd = (a: number, b: number) => a + Math.random() * (b - a);
      const sm = (a: number, b: number, x: number) => {
        x = Math.min(1, Math.max(0, (x - a) / (b - a)));
        return x * x * (3 - 2 * x);
      };
      const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

      function bez(p0: number[], p1: number[], p2: number[], p3: number[], n: number) {
        const o: number[][] = [];
        for (let i = 0; i <= n; i++) {
          const t = i / n, u = 1 - t;
          o.push([
            u * u * u * p0[0] + 3 * u * u * t * p1[0] + 3 * u * t * t * p2[0] + t * t * t * p3[0],
            u * u * u * p0[1] + 3 * u * u * t * p1[1] + 3 * u * t * t * p2[1] + t * t * t * p3[1],
          ]);
        }
        return o;
      }
      
      function resample(pl: number[][], step: number) {
        const xs = [pl[0][0]], ys = [pl[0][1]];
        let carry = 0;
        for (let i = 1; i < pl.length; i++) {
          let [ax, ay] = pl[i - 1];
          const [bx, by] = pl[i];
          let d = Math.hypot(bx - ax, by - ay);
          while (carry + d >= step) {
            const k = (step - carry) / d;
            ax += (bx - ax) * k;
            ay += (by - ay) * k;
            xs.push(ax);
            ys.push(ay);
            d = Math.hypot(bx - ax, by - ay);
            carry = 0;
          }
          carry += d;
        }
        return { xs, ys };
      }

      function build() {
        mobile = W < 700;
        // Premium adjust: push focus slightly off-center for better composition
        F = { x: W * (mobile ? 0.5 : 0.65), y: H * (mobile ? 0.45 : 0.5) };
        const offs = [-12, 0, 12];
        rails = offs.map((o, i) => ({ y: F.y + o, slope: 0.001 * (i + 1), main: i === 1 }));
        
        // Performance: Reduce paths for a cleaner, less cluttered premium look
        const major = mobile ? 8 : 20, minor = mobile ? 5 : 12, step = 5;
        paths = [];
        
        for (let i = 0; i < major + minor; i++) {
          const isMajor = i < major,
            idx = isMajor ? i : i - major,
            cnt = isMajor ? major : minor;
          const side = idx / (cnt - 1) - 0.5,
            depth = isMajor ? rnd(0.5, 1) : rnd(0.1, 0.4);
          
          const x0 = -W * rnd(0.05, 0.15),
            y0 = F.y + side * H * (isMajor ? 1.4 : 1.8) + rnd(-H * 0.05, H * 0.05);
            
          const ri = (Math.random() * 3) | 0, ry = rails[ri].y, dx = F.x - x0;
          const k = rnd(0.8, 1.25);
          
          const left = bez(
            [x0, y0],
            [x0 + dx * 0.45 * k, lerp(y0, ry, 0.15)],
            [F.x - dx * 0.35 * k, ry + (y0 - ry) * 0.05 * rnd(0.8, 1.2)],
            [F.x, ry],
            100 // Reduced segments
          );
          
          const x1 = W + 100,
            rail = [[F.x, ry], [x1, ry + rails[ri].slope * (x1 - F.x)]];
            
          const pts = resample(left.concat(rail.slice(1)), step);
          let iF = 0;
          while (iF < pts.xs.length && pts.xs[iF] < F.x - 1) iF++;
          
          paths.push({
            ...pts,
            n: pts.xs.length,
            iF,
            depth,
            ri,
            period: rnd(mobile ? 10 : 8, mobile ? 18 : 14), // Smoother speed
            dur: rnd(4.0, 7.0),
            off: rnd(0, 30),
            len: rnd(15, 30) * (mobile ? 0.7 : 1),
          });
        }
        drawStatic();
      }

      function drawStatic() {
        off = document.createElement("canvas");
        off.width = canvas.width;
        off.height = canvas.height;
        const g = off.getContext("2d");
        if (!g) return;
        
        g.scale(dpr, dpr);
        // Paint deep dark background
        g.fillStyle = "#020203";
        g.fillRect(0, 0, W, H);
        
        g.lineCap = "round";
        g.lineJoin = "round";
        
        // Draw static paths
        paths.forEach((p) => {
          g.beginPath();
          for (let i = 0; i <= p.iF; i++) i ? g.lineTo(p.xs[i], p.ys[i]) : g.moveTo(p.xs[0], p.ys[0]);
          const al = 0.02 + p.depth * 0.06; // Subtler static lines
          const fg = g.createLinearGradient(p.xs[0], 0, F.x, 0);
          fg.addColorStop(0, "rgba(255,255,255,0)");
          fg.addColorStop(0.5, `rgba(255,255,255,${al})`);
          fg.addColorStop(1, `rgba(255,255,255,${al * 1.5})`);
          g.strokeStyle = fg;
          g.lineWidth = 0.5 + p.depth * 0.5;
          g.stroke();
        });
        
        // Draw rails
        rails.forEach((r) => {
          const gr = g.createLinearGradient(F.x, 0, W, 0);
          const a = r.main ? 0.8 : 0.3;
          gr.addColorStop(0, `rgba(255,255,255,${0.05 * a})`);
          gr.addColorStop(0.5, `rgba(255,255,255,${0.2 * a})`);
          gr.addColorStop(1, `rgba(255,255,255,${0.1 * a})`);
          g.strokeStyle = gr;
          g.lineWidth = r.main ? 1 : 0.5;
          g.beginPath();
          g.moveTo(F.x, r.y);
          g.lineTo(W + 100, r.y + r.slope * (W + 100 - F.x));
          g.stroke();
        });
      }

      function resize() {
        const r = canvas.getBoundingClientRect();
        if (!r.width || !r.height) return;
        // Cap DPR to 1.5 for performance on Retina displays
        dpr = Math.min(devicePixelRatio || 1, 1.5);
        W = r.width;
        H = r.height;
        canvas.width = Math.round(W * dpr);
        canvas.height = Math.round(H * dpr);
        build();
        if (reduce.matches || !raf) render(0);
      }

      function render(dt: number) {
        if (!ctx) return;
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        
        // Draw static base (which includes the dark background now)
        if (off) {
          ctx.globalCompositeOperation = "source-over";
          ctx.drawImage(off, 0, 0, W, H);
        }
        
        if (reduce.matches) return;
        T += dt;
        
        // Premium glow effect setting
        ctx.globalCompositeOperation = "screen";
        ctx.lineCap = "round";
        
        paths.forEach((p) => {
          const ph = ((T + p.off) % p.period) / p.dur;
          if (ph > 1) return;
          const u = ph,
            s = Math.pow(u, 1.2) * (p.n - 1),
            env = sm(0, 0.15, u) * (1 - sm(0.85, 1, u)) * (0.4 + p.depth * 0.6);
          const len = p.len;
          
          // Performance: Reduced K from 4 to 2 strokes for smoother UI rendering
          const K = 2; 
          for (let k = 0; k < K; k++) {
            const a = s - len * k / K, b = s - len * (k + 1) / K;
            if (b < 0) break;
            
            const ia = Math.floor(a), ib = Math.floor(b), fa = a - ia, fb = b - ib;
            const ax = lerp(p.xs[ia], p.xs[Math.min(ia + 1, p.n - 1)], fa),
                  ay = lerp(p.ys[ia], p.ys[Math.min(ia + 1, p.n - 1)], fa);
            const bx = lerp(p.xs[ib], p.xs[Math.min(ib + 1, p.n - 1)], fb),
                  by = lerp(p.ys[ib], p.ys[Math.min(ib + 1, p.n - 1)], fb);
            
            const near = 1 + 0.4 * Math.exp(-Math.abs(ax - F.x) / (W * 0.15));
            // Premium color: slight blue/indigo tint to the pure white
            const al = env * near * Math.pow(1 - k / K, 1.5) * 0.85;
            
            ctx.strokeStyle = `rgba(235,245,255,${al})`;
            ctx.lineWidth = 0.5 + 1.2 * (1 - k / K);
            ctx.beginPath();
            ctx.moveTo(bx, by);
            ctx.lineTo(ax, ay);
            ctx.stroke();
          }
        });
        
        // Animated rail highlights
        rails.forEach((r, ri) => {
          const span = W - F.x + 480;
          const x = F.x - 240 + (((T * (30 + ri * 6) + (ri * span) / 3) % span) + span) % span;
          const hw = 140;
          const x0 = Math.max(F.x, x - hw), x1 = Math.min(W, x + hw);
          
          if (x1 > x0) {
            const gr = ctx.createLinearGradient(x - hw, 0, x + hw, 0);
            gr.addColorStop(0, "rgba(235,245,255,0)");
            gr.addColorStop(0.5, `rgba(235,245,255,${r.main ? 0.25 : 0.15})`);
            gr.addColorStop(1, "rgba(235,245,255,0)");
            ctx.strokeStyle = gr;
            ctx.lineWidth = r.main ? 1.5 : 1;
            ctx.beginPath();
            ctx.moveTo(x0, r.y + r.slope * (x0 - F.x));
            ctx.lineTo(x1, r.y + r.slope * (x1 - F.x));
            ctx.stroke();
          }
        });
      }

      function loop(now: number) {
        if (!W) resize();
        // Cap dt to prevent huge jumps if tab was inactive
        const dt = Math.min(0.04, (now - last) / 1000 || 0);
        last = now;
        render(dt);
        raf = requestAnimationFrame(loop);
      }

      function start() {
        if (raf || reduce.matches || document.hidden) return;
        last = performance.now();
        raf = requestAnimationFrame(loop);
      }
      
      function stop() {
        cancelAnimationFrame(raf);
        raf = 0;
      }

      const vis = () => (document.hidden ? stop() : start());
      const mq = () => { stop(); reduce.matches ? render(0) : start(); };
      
      const ro = new ResizeObserver(() => resize());
      ro.observe(canvas);
      addEventListener("resize", resize);
      document.addEventListener("visibilitychange", vis);
      reduce.addEventListener("change", mq);
      
      resize();
      start();
      
      return () => {
        stop();
        ro.disconnect();
        document.removeEventListener("visibilitychange", vis);
        reduce.removeEventListener("change", mq);
        removeEventListener("resize", resize);
      };
    }

    const cleanup = createPipelineBackground(canvasRef.current);
    return cleanup;
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        overflow: "hidden",
        backgroundColor: "#020203", // Premium dark baseline
        zIndex: 0,
        pointerEvents: "none",
      }}
    >
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          display: "block",
          pointerEvents: "none",
        }}
      />
      {/* Premium subtle gradients overlapping the edges */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          background: `
            linear-gradient(to bottom, rgba(2,2,3,0.9) 0%, rgba(2,2,3,0) 15%, rgba(2,2,3,0) 80%, rgba(2,2,3,0.95) 100%),
            radial-gradient(circle at 65% 50%, transparent 35%, rgba(0,0,0,0.6) 100%)
          `,
        }}
      />
      {/* Optimized static noise layer instead of expensive animated SVG turbulence */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          opacity: 0.03, // Slightly reduced grain opacity for no-blend rendering
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")',
          backgroundRepeat: "repeat",
        }}
      />
    </div>
  );
}
