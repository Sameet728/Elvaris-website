'use client';

import { useEffect, useRef, useMemo } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  opacity: number;
  pulseSpeed: number;
  pulsePhase: number;
}

interface DataPoint {
  x: number;
  baseY: number;
  amplitude: number;
  phase: number;
  speed: number;
}

export default function HeroVisualization() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);
  const particlesRef = useRef<Particle[]>([]);
  const dataPointsRef = useRef<DataPoint[]>([]);

  const colors = useMemo(() => ({
    accent: 'rgba(124, 92, 252,',
    secondary: 'rgba(79, 140, 255,',
    success: 'rgba(52, 211, 153,',
    grid: 'rgba(255, 255, 255, 0.03)',
    gridLine: 'rgba(255, 255, 255, 0.015)',
  }), []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener('resize', resize);

    // Initialize particles
    const rect = canvas.getBoundingClientRect();
    particlesRef.current = Array.from({ length: 40 }, () => ({
      x: Math.random() * rect.width,
      y: Math.random() * rect.height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      radius: Math.random() * 1.5 + 0.5,
      opacity: Math.random() * 0.4 + 0.1,
      pulseSpeed: Math.random() * 0.02 + 0.01,
      pulsePhase: Math.random() * Math.PI * 2,
    }));

    // Initialize data points for the research curve
    const numPoints = 60;
    dataPointsRef.current = Array.from({ length: numPoints }, (_, i) => ({
      x: (i / numPoints) * rect.width,
      baseY: rect.height * 0.5,
      amplitude: Math.random() * 40 + 20,
      phase: Math.random() * Math.PI * 2,
      speed: Math.random() * 0.01 + 0.005,
    }));

    let time = 0;

    const animate = () => {
      const rect = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, rect.width, rect.height);
      time += 1;

      // Draw grid
      const gridSize = 60;
      ctx.strokeStyle = colors.gridLine;
      ctx.lineWidth = 0.5;
      for (let x = 0; x < rect.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, rect.height);
        ctx.stroke();
      }
      for (let y = 0; y < rect.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(rect.width, y);
        ctx.stroke();
      }

      // Draw probability curve
      const points = dataPointsRef.current;
      ctx.beginPath();
      ctx.strokeStyle = `${colors.accent} 0.3)`;
      ctx.lineWidth = 1.5;
      points.forEach((p, i) => {
        const y = p.baseY + Math.sin(time * p.speed + p.phase) * p.amplitude;
        if (i === 0) ctx.moveTo(p.x, y);
        else {
          const prev = points[i - 1];
          const prevY = prev.baseY + Math.sin(time * prev.speed + prev.phase) * prev.amplitude;
          const cpx = (p.x + prev.x) / 2;
          ctx.quadraticCurveTo(prev.x, prevY, cpx, (y + prevY) / 2);
        }
      });
      ctx.stroke();

      // Draw secondary curve
      ctx.beginPath();
      ctx.strokeStyle = `${colors.secondary} 0.2)`;
      ctx.lineWidth = 1;
      points.forEach((p, i) => {
        const y = p.baseY + Math.sin(time * p.speed * 0.7 + p.phase + 1) * p.amplitude * 0.6 + 30;
        if (i === 0) ctx.moveTo(p.x, y);
        else {
          const prev = points[i - 1];
          const prevY = prev.baseY + Math.sin(time * prev.speed * 0.7 + prev.phase + 1) * prev.amplitude * 0.6 + 30;
          const cpx = (p.x + prev.x) / 2;
          ctx.quadraticCurveTo(prev.x, prevY, cpx, (y + prevY) / 2);
        }
      });
      ctx.stroke();

      // Draw gradient fill under curve
      ctx.beginPath();
      points.forEach((p, i) => {
        const y = p.baseY + Math.sin(time * p.speed + p.phase) * p.amplitude;
        if (i === 0) ctx.moveTo(p.x, y);
        else {
          const prev = points[i - 1];
          const prevY = prev.baseY + Math.sin(time * prev.speed + prev.phase) * prev.amplitude;
          const cpx = (p.x + prev.x) / 2;
          ctx.quadraticCurveTo(prev.x, prevY, cpx, (y + prevY) / 2);
        }
      });
      ctx.lineTo(rect.width, rect.height);
      ctx.lineTo(0, rect.height);
      ctx.closePath();
      const gradient = ctx.createLinearGradient(0, rect.height * 0.3, 0, rect.height);
      gradient.addColorStop(0, `${colors.accent} 0.06)`);
      gradient.addColorStop(1, `${colors.accent} 0)`);
      ctx.fillStyle = gradient;
      ctx.fill();

      // Draw data nodes at intervals
      points.forEach((p, i) => {
        if (i % 8 !== 0) return;
        const y = p.baseY + Math.sin(time * p.speed + p.phase) * p.amplitude;
        const pulse = Math.sin(time * 0.03 + i) * 0.3 + 0.7;

        // Outer glow
        ctx.beginPath();
        ctx.arc(p.x, y, 6, 0, Math.PI * 2);
        ctx.fillStyle = `${colors.accent} ${0.1 * pulse})`;
        ctx.fill();

        // Inner dot
        ctx.beginPath();
        ctx.arc(p.x, y, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = `${colors.accent} ${0.6 * pulse})`;
        ctx.fill();
      });

      // Draw candlestick-like abstract bars
      for (let i = 0; i < 20; i++) {
        const x = (i / 20) * rect.width + rect.width * 0.05;
        const baseY = rect.height * 0.35;
        const height = Math.sin(time * 0.008 + i * 0.5) * 30 + 40;
        const isUp = Math.sin(time * 0.005 + i * 0.7) > 0;

        ctx.fillStyle = isUp ? `${colors.success} 0.12)` : `${colors.accent} 0.1)`;
        ctx.fillRect(x, baseY - (isUp ? height : 0), 4, height);

        // Wick
        ctx.fillStyle = isUp ? `${colors.success} 0.08)` : `${colors.accent} 0.06)`;
        ctx.fillRect(x + 1.5, baseY - height - 10, 1, height + 20);
      }

      // Draw and update particles
      particlesRef.current.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = rect.width;
        if (p.x > rect.width) p.x = 0;
        if (p.y < 0) p.y = rect.height;
        if (p.y > rect.height) p.y = 0;

        const pulse = Math.sin(time * p.pulseSpeed + p.pulsePhase) * 0.3 + 0.7;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${colors.accent} ${p.opacity * pulse})`;
        ctx.fill();
      });

      // Draw connections between nearby particles
      particlesRef.current.forEach((p1, i) => {
        particlesRef.current.slice(i + 1).forEach(p2 => {
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `${colors.accent} ${0.04 * (1 - dist / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener('resize', resize);
    };
  }, [colors]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      aria-hidden="true"
    />
  );
}
