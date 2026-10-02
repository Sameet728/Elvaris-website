"use client";

import { useEffect } from "react";
import { Navbar } from "../components/navbar";

export default function HomePage() {
  useEffect(() => {
    const RM = window.matchMedia('(prefers-reduced-motion:reduce)').matches;
    const mob = window.innerWidth < 720;
    const cv = document.getElementById('c') as HTMLCanvasElement;
    if (!cv) return;
    const cx = cv.getContext('2d');
    if (!cx) return;
    const track = document.getElementById('track');
    if (!track) return;

    let W = 0, H = 0, dpr = 1, R = 0, hidden = false, T = 0, p = 0, sp = 0;
    let mx = -999, my = -999, smx = -999, smy = -999, ready = false, t0 = 0;

    function size() {
      dpr = Math.min(window.devicePixelRatio || 1, mob ? 1.5 : 2);
      W = cv.clientWidth; H = cv.clientHeight;
      cv.width = W * dpr; cv.height = H * dpr;
      cx!.setTransform(dpr, 0, 0, dpr, 0, 0);
      R = Math.min(W, H) * (mob ? .34 : .3);
    }
    size();
    window.addEventListener('resize', size);

    let N = mob ? 380 : window.innerWidth < 1100 ? 700 : 1100;
    if (RM) N = Math.min(N, 500);
    const K = 7, Math_PI = Math.PI, TAU = 6.2832;
    const sm = (x: number, a: number, b: number) => {
      x = Math.max(0, Math.min(1, (x - a) / (b - a)));
      return x * x * (3 - 2 * x);
    };

    const Q: any[] = [];
    for (let i = 0; i < N; i++) {
      const u = i / N, c = i % K;
      Q.push({
        u, c, s: Math.random(), bx: Math.random(), by: Math.random(), ph: Math.random() * TAU,
        ox: (Math.random() + Math.random() - 1), oy: (Math.random() + Math.random() - 1),
        d: .3 + Math.random() * 4.5, z: .4 + Math.random() * .6, pr: (i + 1 + Math.floor(Math.random() * 5)) % N, x: 0, y: 0, a: 0
      });
    }
    const sv = Q.filter(q => q.s > .93).sort((a, b) => a.u - b.u);
    sv.forEach((q, k) => q.k = k);
    
    const syms = ['XAUUSD', 'EURUSD', 'NQ', 'VOL', 'ATR', 'RSI', 'REGIME', 'CORR', 'ALPHA', 'SKEW'];
    const tel: any[] = [];
    for (let i = 0; i < (mob ? 5 : 13); i++) tel.push({ l: Math.random() * 9, m: 7 + Math.random() * 5, fx: Math.random(), fy: Math.random(), t: '' });
    
    function fmt() {
      const s = syms[Math.floor(Math.random() * syms.length)];
      return s + ' ' + (s === 'XAUUSD' ? (2800 + Math.random() * 90).toFixed(2) : s === 'EURUSD' ? (1 + Math.random() * .1).toFixed(4) : (Math.random() * (s === 'ATR' ? 30 : s === 'RSI' ? 90 : s === 'REGIME' ? 9 : 1)).toFixed(s === 'REGIME' ? 0 : 2).padStart(s === 'REGIME' ? 2 : 0, '0'));
    }
    tel.forEach(t => t.t = fmt());
    
    const onPointerMove = (e: PointerEvent) => {
      mx = e.clientX; my = e.clientY;
      const g = document.getElementById('grid');
      if (g) {
        g.style.setProperty('--mx', mx + 'px');
        g.style.setProperty('--my', my + 'px');
      }
    };
    window.addEventListener('pointermove', onPointerMove as EventListener);
    
    const stages = [
      [.08, '01 / 06 — MARKET DATA', 'Raw price, volume, news and macro inputs enter the system.'],
      [.2, '02 / 06 — FEATURE DISCOVERY', 'Related data begins to cluster into features.'],
      [.4, '03 / 06 — HYPOTHESIS GENERATION', 'Connections form between candidate structures.'],
      [.56, '04 / 06 — STRATEGY SYNTHESIS', 'Structures organise into a single research core.'],
      [.72, '05 / 06 — VALIDATION', 'Weak structures are removed. Robust ones remain.'],
      [.9, '06 / 06 — RESEARCH OUTPUT', 'A small number of validated candidates emerge.']
    ] as const;
    
    const cap = document.getElementById('cap');
    const capB = cap?.querySelector('b');
    const capH = cap?.querySelector('h3');
    const capP = cap?.querySelector('p');
    const hero = document.getElementById('hero');
    const pg = document.getElementById('pg');
    
    let cs = -1;
    function upd() {
      if(!track || !hero || !pg || !cap || !capB || !capH || !capP) return;
      const r = track.getBoundingClientRect();
      const h = r.height - window.innerHeight;
      p = Math.max(0, Math.min(1, -r.top / h));
      hero.style.opacity = (1 - sm(p, .02, .09)).toString();
      hero.style.transform = 'translateY(' + (-sm(p, 0, .09) * 24) + 'px)';
      pg.style.height = (p * 100) + '%';
      
      let s = -1;
      stages.forEach((x, i) => { if (p >= x[0]) s = i; });
      if (s !== cs) {
        cs = s;
        if (s < 0) cap.classList.remove('on');
        else {
          cap.classList.remove('on');
          setTimeout(() => {
            if (cs === s) {
              capB.textContent = stages[s][1];
              capH.textContent = stages[s][1].split('— ')[1];
              capP.textContent = stages[s][2];
              capB.textContent = stages[s][1].split(' —')[0] + ' / STAGE';
              cap.classList.add('on');
            }
          }, 250);
        }
      }
    }
    window.addEventListener('scroll', upd, { passive: true });
    upd();
    
    let last = performance.now();
    let slow = 0;
    let reqId: number;
    
    function frame(now: number) {
      reqId = requestAnimationFrame(frame);
      if (hidden || !ready) return;
      const dt = Math.min((now - last) / 1000, .05);
      last = now;
      T += dt * (RM ? .15 : 1);
      
      if (dt > .027 && ++slow > 50 && Q.length > 300) {
        slow = 0;
        Q.length = Math.floor(Q.length * .85);
      } else if (dt <= .027) {
        slow = Math.max(0, slow - 1);
      }
      
      sp += (p - sp) * .06;
      smx += (mx - smx) * .1;
      smy += (my - smy) * .1;
      
      const cxp = W / 2, cyp = H / 2 + (mob ? -H * .06 : 0);
      const a = sm(sp, .12, .3), b = sm(sp, .52, .68), c = sm(sp, .86, .97), conn = sm(sp, .3, .45) * (1 - .4 * sm(sp, .72, .9)), th = sm(sp, .68, .88) * .93;
      const rot = T * .05;
      
      cx!.clearRect(0, 0, W, H);
      const n = Q.length, em = (T - t0);
      for (let i = 0; i < n; i++) {
        const q = Q[i];
        const chx = (q.bx * W) + Math.sin(T * .12 * q.d + q.ph) * 18, chy = (q.by * H) + Math.cos(T * .1 * q.d + q.ph) * 18;
        const ca = q.c / K * TAU + rot * .5, ccx = cxp + Math.cos(ca) * R * 1.15, ccy = cyp + Math.sin(ca) * R * .85;
        const clx = ccx + q.ox * R * .2, cly = ccy + q.oy * R * .2;
        const th2 = q.u * TAU * 3 + rot, cox = cxp + R * Math.sin(3 * th2 + 1.1) * (1 + .04 * q.ox), coy = cyp + R * .8 * Math.sin(4 * th2) * (1 + .04 * q.oy);
        let x = chx + (clx - chx) * a, y = chy + (cly - chy) * a;
        x += (cox - x) * b; y += (coy - y) * b;
        if (q.k !== undefined && c > 0) {
          const K2 = sv.length, sx = W * (.18 + .64 * q.k / (K2 - 1)), sy = H * .5 + Math.sin(q.k * 1.2) * H * .14;
          x += (sx - x) * c; y += (sy - y) * c;
        }
        const ddx = x - smx, ddy = y - smy, dd = ddx * ddx + ddy * ddy;
        if (dd < 16900) {
          const f = (1 - Math.sqrt(dd) / 130);
          x += ddx / (Math.sqrt(dd) + 1) * f * 9; y += ddy / (Math.sqrt(dd) + 1) * f * 9;
        }
        q.x = x; q.y = y;
        let al = Math.max(0, Math.min(1, (em - q.d * .7) / 2.5));
        al *= Math.max(0, Math.min(1, (q.s - th) * 25 + (q.k !== undefined ? 1 : 0)));
        if (c > 0 && q.k === undefined) al *= 1 - c;
        q.a = al * (.25 + .6 * q.z);
      }
      
      if (conn > .01) {
        cx!.lineWidth = .6; cx!.strokeStyle = 'rgba(255,255,255,' + (.11 * conn).toFixed(3) + ')'; cx!.beginPath();
        for (let i = 0; i < n; i++) {
          const q = Q[i], w = Q[q.pr]; if (q.a < .05 || w.a < .05) continue;
          const dx = q.x - w.x, dy = q.y - w.y; if (dx * dx + dy * dy > (b > .5 ? 9000 : 26000)) continue;
          cx!.moveTo(q.x, q.y); cx!.lineTo(w.x, w.y);
        }
        for (let i = 0; i < n - 1; i++) {
          const q = Q[i], w = Q[i + 1]; if (b < .3 || q.a < .05 || w.a < .05) continue;
          cx!.moveTo(q.x, q.y); cx!.lineTo(w.x, w.y);
        }
        cx!.stroke();
      }
      
      if (c > .2) {
        cx!.strokeStyle = 'rgba(203,184,148,' + (.3 * c).toFixed(3) + ')'; cx!.lineWidth = .7; cx!.beginPath();
        sv.forEach((q, k) => { k ? cx!.lineTo(q.x, q.y) : cx!.moveTo(q.x, q.y) }); cx!.stroke();
      }
      
      cx!.fillStyle = '#fff';
      for (let i = 0; i < n; i++) {
        const q = Q[i]; if (q.a < .02) continue; cx!.globalAlpha = q.a; const s = q.z > .85 ? 1.6 : 1; cx!.fillRect(q.x, q.y, s, s);
      }
      if (c > .1) {
        cx!.fillStyle = '#CBB894'; sv.forEach(q => { cx!.globalAlpha = .8 * c; cx!.fillRect(q.x - 1.5, q.y - 1.5, 3, 3) });
      }
      
      if (b > .3) {
        const pu = 1 + Math.sin(T * .5) * .06, g = cx!.createRadialGradient(cxp, cyp, 0, cxp, cyp, 60 * pu);
        g.addColorStop(0, 'rgba(203,184,148,.35)'); g.addColorStop(1, 'rgba(203,184,148,0)');
        cx!.globalAlpha = b * (1 - c); cx!.fillStyle = g; cx!.fillRect(cxp - 70, cyp - 70, 140, 140);
        cx!.fillStyle = '#fff'; cx!.fillRect(cxp - 1, cyp - 1, 2, 2);
      }
      
      cx!.font = '9px ui-monospace,Menlo,monospace'; cx!.fillStyle = '#fff';
      tel.forEach(t => {
        t.l += dt; if (t.l > t.m) { t.l = 0; t.m = 7 + Math.random() * 5; t.fx = Math.random(); t.fy = Math.random(); t.t = fmt(); }
        cx!.globalAlpha = Math.sin(Math_PI * t.l / t.m) * .22 * Math.max(.3, 1 - sp * 1.2); cx!.fillText(t.t, t.fx * W * .9 + W * .05, t.fy * H * .8 + H * .1);
      });
      cx!.globalAlpha = 1;
    }
    
    reqId = requestAnimationFrame(frame);
    
    const onVisChange = () => { hidden = document.hidden; last = performance.now(); };
    document.addEventListener('visibilitychange', onVisChange);
    
    const ld = document.getElementById('ld');
    let to2: any;
    
    function start() {
      ready = true; t0 = T; ld?.classList.add('off'); document.body.classList.add('go');
    }
    
    if (RM) {
      ld?.remove(); ready = true; document.body.classList.add('go');
    } else {
      const rows = ld?.querySelectorAll('div');
      if (rows) {
        rows.forEach((r: Element, i: number) => {
          setTimeout(() => r.classList.add('on'), i * 170);
        });
      }
      to2 = setTimeout(start, 1500);
    }
    
    return () => {
      window.removeEventListener('resize', size);
      window.removeEventListener('pointermove', onPointerMove as EventListener);
      window.removeEventListener('scroll', upd);
      document.removeEventListener('visibilitychange', onVisChange);
      cancelAnimationFrame(reqId);
      clearTimeout(to2);
      document.body.classList.remove('go');
    };
  }, []);

  return (
    <div className="elvaris-bg-page">
      <style dangerouslySetInnerHTML={{__html: `
        :root { --bg: #000; --panel: #080808; --line: rgba(255,255,255,.08); --t1: #F5F5F5; --t2: rgba(255,255,255,.5); --t3: rgba(255,255,255,.25); --gold: #CBB894; --ease: cubic-bezier(.22,.61,.36,1); --font: Inter, Geist, "Helvetica Neue", Arial, sans-serif; --mono: ui-monospace, "SF Mono", Menlo, monospace; box-sizing: border-box; }
        .elvaris-bg-page { background: #000; color: var(--t1); font: 300 15px/1.6 var(--font); -webkit-font-smoothing: antialiased; }
        .elvaris-bg-page * { box-sizing: border-box; }
        #grid { position: fixed; inset: 0; z-index: 0; pointer-events: none; background-image: linear-gradient(var(--line) 1px, transparent 1px), linear-gradient(90deg, var(--line) 1px, transparent 1px); background-size: 64px 64px; opacity: .5; -webkit-mask-image: radial-gradient(circle 260px at var(--mx,50%) var(--my,50%), #000, transparent); mask-image: radial-gradient(circle 260px at var(--mx,50%) var(--my,50%), #000, transparent); }
        #c { position: fixed; inset: 0; width: 100%; height: 100%; z-index: 1; pointer-events: none; }
        .elvaris-bg-page .btn { display: inline-block; padding: 10px 18px; border: 1px solid rgba(255,255,255,.18); border-radius: 2px; color: var(--t1); transition: border-color .35s, background .35s, transform .35s var(--ease); text-decoration: none; font-size: 11px; letter-spacing: .14em; text-transform: uppercase; cursor: pointer; }
        .elvaris-bg-page .btn:hover { border-color: rgba(203,184,148,.7); background: rgba(255,255,255,.03); transform: translateY(-1px); color: var(--t1); }
        #track { position: relative; height: 700vh; z-index: 2; pointer-events: none; }
        .stick { position: sticky; top: 0; height: 100vh; height: 100svh; overflow: hidden; pointer-events: auto; }
        .hero { position: absolute; left: 5vw; bottom: 14vh; max-width: 90vw; will-change: opacity, transform; pointer-events: none; }
        .eye { font: 400 10px var(--mono); letter-spacing: .3em; color: var(--t3); margin-bottom: 26px; }
        .elvaris-bg-page h1 { font-weight: 200; font-size: clamp(40px, 8.4vw, 128px); line-height: .98; letter-spacing: .01em; margin: 0; }
        .sub { margin-top: 26px; max-width: 430px; color: var(--t2); font-size: 14px; }
        .cap { position: absolute; left: 5vw; bottom: 9vh; opacity: 0; transition: opacity .8s var(--ease); max-width: 380px; }
        .cap.on { opacity: 1; }
        .cap b { display: block; font: 400 10px var(--mono); letter-spacing: .3em; color: var(--gold); margin-bottom: 12px; }
        .cap h3 { font-weight: 300; font-size: clamp(20px, 2.6vw, 32px); letter-spacing: .02em; margin: 0; }
        .cap p { color: var(--t2); font-size: 13px; margin-top: 10px; }
        .prog { position: absolute; right: 5vw; top: 20vh; bottom: 20vh; width: 1px; background: var(--line); }
        .prog i { position: absolute; left: 0; top: 0; width: 1px; height: 0; background: rgba(255,255,255,.6); }
        .end { position: relative; z-index: 3; background: #000; padding: 22vh 5vw 12vh; border-top: 1px solid var(--line); text-align: left; }
        .end h2 { font-weight: 200; font-size: clamp(30px, 5vw, 68px); line-height: 1.05; margin: 0; }
        .end p { color: var(--t2); max-width: 420px; margin: 24px 0 36px; }
        .elvaris-bg-page footer { position: relative; z-index: 3; background: #000; padding: 30px 5vw; border-top: 1px solid var(--line); font: 400 10px var(--mono); letter-spacing: .2em; color: var(--t3); display: flex; justify-content: space-between; flex-wrap: wrap; gap: 8px; }
        .rv { opacity: 0; transform: translateY(18px); transition: opacity 1.2s var(--ease), transform 1.2s var(--ease); transition-delay: calc(var(--i,0)*.12s); }
        body.go .rv { opacity: 1; transform: none; }
        #ld { position: fixed; inset: 0; z-index: 50; background: #000; display: flex; align-items: center; justify-content: center; font: 400 10px/2 var(--mono); letter-spacing: .2em; color: var(--t2); transition: opacity .6s; }
        #ld div { opacity: 0; transition: opacity .3s; white-space: pre; }
        #ld div.on { opacity: 1; }
        #ld em { font-style: normal; color: var(--gold); }
        #ld.off { opacity: 0; pointer-events: none; }
        @media(max-width: 720px) { .prog { display: none; } .hero { bottom: 18vh; } }
        @media(prefers-reduced-motion: reduce) { .rv { transition: none; opacity: 1; transform: none; } }
      `}} />

      <div id="ld">
        <span>
          <div className="on">ELVARIS CAPITAL</div>
          <div>INITIALIZING RESEARCH ENGINE</div>
          <div> </div>
          <div>DATA STREAM ........ <em>CONNECTED</em></div>
          <div>MARKET ENGINE ...... <em>ONLINE</em></div>
          <div>RESEARCH CORE ...... <em>ONLINE</em></div>
          <div>VALIDATION .......... <em>READY</em></div>
        </span>
      </div>
      
      <div id="grid"></div>
      <canvas id="c"></canvas>
      
      <div className="relative z-[60]">
        <Navbar />
      </div>

      <main id="track">
        <div className="stick" id="stick">
          <div className="hero" id="hero">
            <div className="eye rv" style={{ '--i': 0 } as React.CSSProperties}>ELVARIS CAPITAL / QUANTITATIVE RESEARCH SYSTEM</div>
            <h1 className="rv" style={{ '--i': 2 } as React.CSSProperties}>AUTONOMOUS<br/>MARKET<br/>RESEARCH.</h1>
            <p className="sub rv" style={{ '--i': 4 } as React.CSSProperties}>Infrastructure for discovering, testing and validating systematic trading strategies.</p>
          </div>
          <div className="cap" id="cap"><b></b><h3></h3><p></p></div>
          <div className="prog"><i id="pg"></i></div>
        </div>
      </main>

      <section className="end">
        <div className="lg" style={{ color: 'var(--gold)', marginBottom: '22px', font: '400 10px var(--mono)', letterSpacing: '.3em' }}>RESEARCH OUTPUT</div>
        <h2>Validated research.</h2>
        <p>Only structures that survive validation are carried forward.</p>
        <a className="btn" href="#">Enter Platform</a>
      </section>
      
      <footer>
        <span>ELVARIS CAPITAL</span>
        <span>© 2026</span>
      </footer>
    </div>
  );
}
