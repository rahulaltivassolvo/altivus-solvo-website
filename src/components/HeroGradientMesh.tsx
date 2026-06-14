"use client";

import { useEffect, useRef } from "react";

export default function HeroGradientMesh() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = 0, h = 0;
    let time = 0;
    let raf: number;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      w = canvas.offsetWidth;
      h = canvas.offsetHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      time += 0.003;
      ctx.clearRect(0, 0, w, h);

      // Three flowing gradient blobs with sinusoidal motion
      const blobs = [
        {
          cx: w * (0.3 + 0.15 * Math.sin(time * 0.7)),
          cy: h * (0.25 + 0.1 * Math.sin(time * 0.5 + 1)),
          rx: w * 0.35,
          ry: h * 0.3,
          color: "rgba(107, 33, 168, 0.06)",
        },
        {
          cx: w * (0.7 + 0.12 * Math.sin(time * 0.6 + 2)),
          cy: h * (0.65 + 0.08 * Math.sin(time * 0.4 + 3)),
          rx: w * 0.3,
          ry: h * 0.25,
          color: "rgba(0, 212, 255, 0.05)",
        },
        {
          cx: w * (0.5 + 0.18 * Math.sin(time * 0.4 + 4)),
          cy: h * (0.45 + 0.12 * Math.sin(time * 0.6 + 5)),
          rx: w * 0.25,
          ry: h * 0.2,
          color: "rgba(107, 33, 168, 0.04)",
        },
      ];

      blobs.forEach((b) => {
        const g = ctx.createRadialGradient(b.cx, b.cy, 0, b.cx, b.cy, Math.max(b.rx, b.ry));
        g.addColorStop(0, b.color);
        g.addColorStop(0.4, b.color.replace(/[\d.]+\)$/, "0.05)"));
        g.addColorStop(1, "rgba(7, 11, 26, 0)");
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.ellipse(b.cx, b.cy, b.rx, b.ry, 0, 0, Math.PI * 2);
        ctx.fill();
      });

      raf = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={ref} className="absolute inset-0 z-0 pointer-events-none" />;
}