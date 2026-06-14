"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Check, TrendingUp, Users, Code2, HeadphonesIcon } from "lucide-react";

const stats = [
  { label: "Projects Delivered", value: 50, suffix: "+", icon: TrendingUp, description: "Successfully launched" },
  { label: "Happy Clients", value: 30, suffix: "+", icon: Users, description: "Worldwide partnerships" },
  { label: "Technologies", value: 40, suffix: "+", icon: Code2, description: "Modern stack expertise" },
  { label: "Support", value: 24, suffix: "/7", icon: HeadphonesIcon, description: "Always available" },
];

const features = [
  { title: "Scalable Architecture", description: "Built to grow with your business needs" },
  { title: "Security-First", description: "Enterprise-grade protection built-in" },
  { title: "Modern Tech Stack", description: "Latest frameworks and best practices" },
  { title: "24/7 Support", description: "Round-the-clock expert assistance" },
];

function AnimatedCounter({
  label, value, suffix, icon: Icon, description, index,
}: {
  label: string; value: number; suffix: string; icon: React.ElementType; description: string; index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { damping: 40, stiffness: 80, mass: 0.5 });
  const rounded = useTransform(springValue, (v) => Math.round(v));
  const done = useRef(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && !done.current) {
          done.current = true;
          setTimeout(() => motionValue.set(value), 200 + index * 100);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [motionValue, value, index]);

  return (
    <motion.div
      ref={ref}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ y: -3 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group relative h-full"
    >
      <div className="relative h-full overflow-hidden rounded-2xl border border-[rgba(107,33,168,0.08)] bg-white dark:bg-[#1E293B] dark:border-[rgba(255,255,255,0.06)] p-5 transition-all duration-500 hover:border-[rgba(107,33,168,0.2)] hover:shadow-2xl hover:shadow-[rgba(107,33,168,0.06)] dark:hover:border-[rgba(255,255,255,0.12)] dark:hover:shadow-[0_8px_40px_rgba(0,0,0,0.3)] flex flex-col justify-between">
        <div className="absolute inset-0 bg-gradient-to-br from-[rgba(107,33,168,0)] to-[rgba(0,212,255,0)] group-hover:from-[rgba(107,33,168,0.06)] group-hover:to-[rgba(0,212,255,0.03)] transition-all duration-500" />

        <motion.div
          animate={{ rotate: isHovered ? 3 : 0 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="relative mb-3"
        >
          <div className="w-9 h-9 rounded-xl bg-[rgba(107,33,168,0.1)] border border-[rgba(107,33,168,0.15)] flex items-center justify-center">
            <Icon size={17} className="text-[#6B21A8]" strokeWidth={1.5} />
          </div>
        </motion.div>

        <div className="relative flex-1 flex flex-col justify-end">
          <p className="text-4xl sm:text-5xl font-bold text-[#0F172A] dark:text-[#F1F5F9] mb-1.5 tracking-tight leading-none">
            <motion.span>{rounded}</motion.span>
            <span className="text-[#6B21A8]">{suffix}</span>
          </p>
          <p className="text-sm font-semibold text-[#0F172A] dark:text-[#F1F5F9] mb-0.5">{label}</p>
          <p className="text-xs text-slate-500 dark:text-slate-400">{description}</p>
        </div>
      </div>
    </motion.div>
  );
}

function FeatureCard({ feature, index }: { feature: (typeof features)[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.4 + index * 0.08, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ x: 3 }}
      className="group flex items-center gap-3 px-4 py-2.5 rounded-xl border border-[rgba(107,33,168,0.08)] bg-white dark:bg-[#1E293B] dark:border-[rgba(255,255,255,0.06)] hover:bg-[#F8FAFF] dark:hover:bg-[#1A2332] hover:border-[rgba(107,33,168,0.15)] dark:hover:border-[rgba(255,255,255,0.1)] transition-all duration-300"
    >
      <div className="flex-shrink-0">
        <div className="w-5 h-5 rounded-md bg-gradient-to-br from-[#6B21A8] to-[#00D4FF] flex items-center justify-center shadow-md shadow-[rgba(107,33,168,0.25)]">
          <Check size={12} className="text-white" strokeWidth={3} />
        </div>
      </div>
      <div className="flex-1 min-w-0">
          <h4 className="text-sm font-semibold text-[#0F172A] dark:text-[#F1F5F9] group-hover:text-[#6B21A8] dark:group-hover:text-[#00D4FF] transition-colors duration-300">
          {feature.title}
        </h4>
        <p className="text-xs text-slate-500 dark:text-slate-400 leading-snug">{feature.description}</p>
      </div>
    </motion.div>
  );
}

export default function AboutSection() {
  return (
    <section id="about" className="relative py-24 md:py-32 overflow-hidden bg-[#EEF2FF] dark:bg-[#0F172A]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[rgba(107,33,168,0.06)] via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-[rgba(0,212,255,0.05)] via-transparent to-transparent" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(107,33,168,0.12)] to-transparent dark:via-[rgba(255,255,255,0.06)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ===== LEFT COLUMN ===== */}
          <div className="flex flex-col">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[rgba(107,33,168,0.08)] border border-[rgba(107,33,168,0.15)] text-[#6B21A8] text-xs font-semibold tracking-wider uppercase mb-5 w-fit"
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#6B21A8] opacity-75" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#6B21A8]" />
              </span>
              About Us
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-[3.2rem] font-bold text-[#0F172A] dark:text-[#F1F5F9] leading-[1.1] mb-5 tracking-tight"
            >
              A modern studio
              <br />
              for{" "}
              <span className="bg-gradient-to-r from-[#6B21A8] to-[#00D4FF] bg-clip-text text-transparent">
                serious
              </span>{" "}
              software.
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-3 mb-6"
            >
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-[15px]">
                Altivus Solvo is a specialist engineering partner for enterprises that demand
                craftsmanship. We design and build robust, scalable systems from elegant
                frontends to AI-driven backends.
              </p>
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-[15px]">
                Our team works across Java, Python, PHP, and modern JavaScript frameworks,
                delivering end-to-end solutions with an obsession for quality.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="grid grid-cols-2 gap-2"
            >
              {features.map((feature, i) => (
                <FeatureCard key={feature.title} feature={feature} index={i} />
              ))}
            </motion.div>
          </div>

          {/* ===== RIGHT COLUMN ===== */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col gap-3"
          >
            <div className="grid grid-cols-2 gap-3">
              {stats.slice(0, 2).map((stat, i) => (
                <AnimatedCounter key={stat.label} {...stat} index={i} />
              ))}
            </div>

            {/* Trust strip */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="relative py-2.5 px-5 rounded-xl border border-[rgba(107,33,168,0.06)] bg-white/[0.6] dark:bg-[#1E293B]/80 dark:border-[rgba(255,255,255,0.06)] flex items-center justify-between gap-4 origin-left"
            >
              <p className="text-xs text-slate-500 dark:text-slate-400 font-medium tracking-wide">
                Trusted by startups & enterprises across 3 continents
              </p>
              <div className="flex -space-x-1.5 flex-shrink-0">
                {["B", "C", "D", "E"].map((l) => (
                  <div key={l} className="w-6 h-6 rounded-full bg-gradient-to-br from-[rgba(107,33,168,0.3)] to-[rgba(0,212,255,0.2)] border border-white/60 dark:border-[rgba(255,255,255,0.15)] flex items-center justify-center text-[9px] font-bold text-[#6B21A8]">
                    {l}
                  </div>
                ))}
              </div>
            </motion.div>

            <div className="grid grid-cols-2 gap-3">
              {stats.slice(2, 4).map((stat, i) => (
                <AnimatedCounter key={stat.label} {...stat} index={i + 2} />
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}