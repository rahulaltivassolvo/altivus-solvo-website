"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import HeroCanvas from "@/components/HeroCanvas";
import HeroGradientMesh from "@/components/HeroGradientMesh";

const headlineWords = ["Elevate", "your", "possibilities."];

const wordVariants = {
  hidden: { opacity: 0, y: 40, rotateX: -10 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      delay: 0.3 + i * 0.12,
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  }),
};

export default function HeroSection() {
  const scroll = (href: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-[#F0F4FF] dark:bg-[#0B1326]">
      {/* Animated gradient mesh background */}
      <HeroGradientMesh />

      {/* Particle network */}
      <HeroCanvas />

      {/* Subtle dot grid overlay */}
      <div className="absolute inset-0 dot-grid-dense opacity-40 pointer-events-none z-[1]" />

      {/* Radial mask to fade grid at edges + purple glow */}
      <div className="absolute inset-0 z-[1] pointer-events-none" style={{
        background: "radial-gradient(ellipse 70% 70% at 50% 50%, transparent 30%, var(--color-bg-primary-value) 100%), radial-gradient(ellipse at center, rgba(107,33,168,0.06) 0%, transparent 70%)",
      }} />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-[#6B21A8] text-xs font-medium tracking-wider uppercase mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-[#6B21A8]" style={{ animation: "glow-pulse 2s ease-in-out infinite" }} />
          Full-Stack IT Studio
        </motion.div>

        {/* Headline with word-by-word animation */}
          <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.95] text-[#0F172A] dark:text-[#F1F5F9] mb-6">
          <span className="block mb-5">
            {headlineWords.slice(0, 2).map((word, i) => (
              <motion.span
                key={word}
                className="inline-block mr-[0.2em]"
                custom={i}
                variants={wordVariants}
                initial="hidden"
                animate="visible"
              >
                {word}
              </motion.span>
            ))}
          </span>
          <motion.span
            className="block gradient-text italic font-medium"
            custom={2}
            variants={wordVariants}
            initial="hidden"
            animate="visible"
          >
            {headlineWords[2]}
          </motion.span>
        </h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="text-slate-500 dark:text-slate-400 text-base sm:text-lg md:text-xl max-w-xl mx-auto mb-10 leading-[1.7]"
        >
          We engineer production-grade software for ambitious clients full-stack applications, AI systems, and cloud infrastructure.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#services"
            onClick={scroll("#services")}
            className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-[#6B21A8] to-[#00D4FF] hover:from-[#581C87] hover:to-[#4DE3FF] shadow-lg shadow-[rgba(107,33,168,0.2)] hover:shadow-xl hover:shadow-[rgba(107,33,168,0.35)] hover:-translate-y-0.5 transition-all duration-300"
          >
            Explore Services
            <ArrowRight size={16} className="group-hover:translate-x-1 group-hover:-rotate-12 transition-all duration-300" />
          </a>
          <a
            href="#contact"
            onClick={scroll("#contact")}
            className="px-7 py-3.5 rounded-full text-sm font-medium border border-[#6B21A8] text-[#6B21A8] hover:text-[#6B21A8] hover:bg-[rgba(107,33,168,0.04)] hover:shadow-[0_0_20px_rgba(107,33,168,0.08)] transition-all duration-300"
          >
            Get a Quote
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        onClick={() => document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3 text-slate-400 dark:text-slate-500 font-heading text-[10px] tracking-[0.35em] uppercase"
      >
        <svg width="20" height="32" viewBox="0 0 20 32" fill="none" className="opacity-60">
          <rect x="1.5" y="1.5" width="17" height="29" rx="8.5" stroke="currentColor" strokeWidth="1.5" />
          <motion.circle
            cx="10"
            cy="10"
            r="2"
            fill="#6B21A8"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </svg>
        <span>Scroll</span>
      </motion.button>
    </section>
  );
}