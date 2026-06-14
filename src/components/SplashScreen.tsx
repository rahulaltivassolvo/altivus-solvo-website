"use client";

import { useEffect, useState } from "react";

export default function SplashScreen() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHidden(true), 4000);
    return () => clearTimeout(timer);
  }, []);

  if (hidden) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white dark:bg-[#0F172A]"
      style={{
        opacity: hidden ? 0 : 1,
        visibility: hidden ? "hidden" : "visible",
        transition: "opacity 0.6s ease, visibility 0.6s ease, transform 0.6s cubic-bezier(0.16,1,0.3,1)",
        transform: hidden ? "scale(1.04)" : "scale(1)",
      }}
    >
      {/* Animated gradient background */}
      <div
        className="absolute inset-0 pointer-events-none transition-all duration-[3s]"
        style={{
          background: "radial-gradient(ellipse 60% 50% at 30% 30%, rgba(107,33,168,0.08), transparent 70%), radial-gradient(ellipse 50% 40% at 70% 70%, rgba(0,212,255,0.06), transparent 70%)",
        }}
      />
      {/* Noise overlay */}
      <div className="absolute inset-0 noise pointer-events-none" />

      <svg className="w-32 h-32 md:w-36 md:h-36 relative" viewBox="0 0 140 140" fill="none">
        <defs>
          <linearGradient id="splashG" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6B21A8" />
            <stop offset="50%" stopColor="#00D4FF" />
            <stop offset="100%" stopColor="#6B21A8" />
          </linearGradient>
        </defs>

        {/* Center logo */}
        <image
          href="/4.png"
          x="10" y="10"
          width="120" height="120"
          preserveAspectRatio="xMidYMid meet"
          style={{
            opacity: 0,
            animation: `fadeUp 0.6s ease 0.6s forwards`,
          }}
        />
      </svg>

      <p
        className="font-heading text-[#6B21A8] text-lg mt-7 opacity-0"
        style={{
          animation: "fadeUp 0.8s cubic-bezier(0.16,1,0.3,1) 1.4s forwards",
          letterSpacing: "0.4em",
          animationDelay: "1.4s",
        }}
      >
        ALTIVUS SOLVO
      </p>
      <p
        className="text-xs text-slate-500 dark:text-slate-400 uppercase mt-2 opacity-0"
        style={{
          animation: "fadeUp 0.8s cubic-bezier(0.16,1,0.3,1) 1.6s forwards",
          letterSpacing: "0.35em",
          animationDelay: "1.6s",
        }}
      >
        Elevate Your Possibilities
      </p>

      <div
         className="w-36 h-0.5 bg-[rgba(107,33,168,0.1)] rounded overflow-hidden mt-6 opacity-0"
        style={{ animation: "fadeUp 0.6s cubic-bezier(0.16,1,0.3,1) 1.8s forwards" }}
      >
        <div
          className="h-full w-0 rounded"
          style={{
            background: "linear-gradient(90deg, #6B21A8, #00D4FF, #6B21A8)",
            backgroundSize: "200% 100%",
            animation: "bar 1.4s cubic-bezier(0.16,1,0.3,1) 1.8s forwards, shimmer 2s linear 3.2s infinite",
          }}
        />
      </div>
    </div>
  );
}