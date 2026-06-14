"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  hue: number;
  sat: number;
  bright: boolean;
  phase: number;
}

export default function HeroCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let particles: Particle[] = [];
    let raf: number;
    let mx = -1e3, my = -1e3;
    let w = 0, h = 0;
    let time = 0;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      w = canvas.offsetWidth;
      h = canvas.offsetHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const init = () => {
      resize();
      const count = Math.min(140, Math.floor((w * h) / 18000));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        r: Math.random() * 2.2 + 0.4,
        hue: 260 + Math.random() * 40, // purple (260) to blue-purple (300)
        sat: 50 + Math.random() * 40,
        bright: Math.random() > 0.92,
        phase: Math.random() * Math.PI * 2,
      }));
    };

    init();
    let rt: NodeJS.Timeout;
    const onResize = () => { clearTimeout(rt); rt = setTimeout(() => { resize(); init(); }, 150); };
    window.addEventListener("resize", onResize);

    canvas.addEventListener("mousemove", (e) => {
      const r = canvas.getBoundingClientRect();
      mx = e.clientX - r.left;
      my = e.clientY - r.top;
    });
    canvas.addEventListener("mouseleave", () => { mx = -1e3; my = -1e3; });

    const draw = () => {
      time += 0.005;
      ctx.clearRect(0, 0, w, h);

      particles.forEach((p, i) => {
        // Slow drift
        p.x += p.vx;
        p.y += p.vy;

        // Bright particles have a gentle floating motion
        if (p.bright) {
          p.x += Math.sin(time * 0.8 + p.phase) * 0.08;
          p.y += Math.cos(time * 0.6 + p.phase) * 0.08;
        }

        // Bounce off edges
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;

        // Mouse repulsion (push away from cursor)
        const dx = p.x - mx;
        const dy = p.y - my;
        const dm = Math.sqrt(dx * dx + dy * dy);
        if (dm < 150 && dm > 0) {
          const force = ((150 - dm) / 150) * 0.6;
          p.x += (dx / dm) * force;
          p.y += (dy / dm) * force;
        }

        const alpha = p.bright
          ? 0.6 + 0.3 * Math.sin(time * 1.2 + p.phase)
          : 0.4;

        // Glow effect for bright particles
        if (p.bright) {
          const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 8);
          g.addColorStop(0, `hsla(${p.hue}, ${p.sat}%, 65%, 0.15)`);
          g.addColorStop(1, `hsla(${p.hue}, ${p.sat}%, 65%, 0)`);
          ctx.fillStyle = g;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.r * 8, 0, Math.PI * 2);
          ctx.fill();
        }

        // Particle core
        ctx.fillStyle = `hsla(${p.hue}, ${p.sat}%, 75%, ${alpha})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();

        // Connections
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx2 = p.x - p2.x;
          const dy2 = p.y - p2.y;
          const d = Math.sqrt(dx2 * dx2 + dy2 * dy2);
          if (d < 130) {
            const op = (1 - d / 130) * 0.2;
            const hue = (p.hue + p2.hue) / 2;
            ctx.strokeStyle = `hsla(${hue}, 60%, 65%, ${op})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      });

      raf = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return <canvas ref={ref} className="absolute inset-0 z-0 opacity-70" />;
}