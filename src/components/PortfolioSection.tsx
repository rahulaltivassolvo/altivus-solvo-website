"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    cat: "fullstack",
    title: "Enterprise Resource Planning Suite",
    stack: "Spring Boot · React.js · PostgreSQL",
    impact: "Centralized operations, reduced overhead",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
  },
  {
    cat: "fullstack",
    title: "Corporate CRM System",
    stack: "Spring Boot · PostgreSQL · React.js",
    impact: "Sales efficiency improved by 40%",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
  },
  {
    cat: "web",
    title: "E-commerce Platform",
    stack: "React.js · Node.js · Stripe",
    impact: "Increased engagement & conversions",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80",
  },
  {
    cat: "ai",
    title: "AI-Powered Analytics Dashboard",
    stack: "Django · React.js · MongoDB",
    impact: "Real-time predictive insights",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80",
  },
  {
    cat: "web",
    title: "Mobile Banking API",
    stack: "Spring Boot · GraphQL · WebSockets",
    impact: "Real-time balance updates",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80",
  },
  {
    cat: "fullstack",
    title: "HR Management System",
    stack: "Spring Boot · React.js · JWT",
    impact: "Streamlined HR workflows",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80",
  },
  {
    cat: "devops",
    title: "Automated Deployment Pipeline",
    stack: "GitHub Actions · Docker · AWS",
    impact: "Faster release cycles, fewer errors",
    image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&q=80",
  },
  {
    cat: "devops",
    title: "Cloud Infrastructure Setup",
    stack: "AWS · Docker · Nginx",
    impact: "Improved uptime under peak load",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&q=80",
  },
  {
    cat: "ai",
    title: "AI Customer Support Assistant",
    stack: "Python · FastAPI · LLM",
    impact: "24/7 automated query handling",
    image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80",
  },
];

const tabs = [
  { key: "all", label: "All" },
  { key: "web", label: "Web" },
  { key: "fullstack", label: "Full-Stack" },
  { key: "ai", label: "AI" },
  { key: "devops", label: "DevOps" },
];

const tabGradients: Record<string, string> = {
  all: "from-[#6B21A8] to-[#00D4FF]",
  web: "from-[#6B21A8] to-[#00D4FF]",
  fullstack: "from-[#6B21A8] to-[#00D4FF]",
  ai: "from-[#6B21A8] to-[#A855F7]",
  devops: "from-[#6B21A8] to-[#00D4FF]",
};

const catColors: Record<string, string> = {
  fullstack: "bg-[rgba(107,33,168,0.08)] text-[#6B21A8] border-[rgba(107,33,168,0.15)]",
  web: "bg-[rgba(107,33,168,0.08)] text-[#6B21A8] border-[rgba(107,33,168,0.15)]",
  ai: "bg-[rgba(107,33,168,0.08)] text-[#6B21A8] border-[rgba(107,33,168,0.15)]",
  devops: "bg-[rgba(107,33,168,0.08)] text-[#6B21A8] border-[rgba(107,33,168,0.15)]",
};

export default function PortfolioSection() {
  const [filter, setFilter] = useState("all");

  const filtered = filter === "all" ? projects : projects.filter((p) => p.cat === filter);

  return (
    <section id="portfolio" className="py-20 md:py-28 bg-[#EEF2FF] dark:bg-[#0F172A] relative overflow-hidden">
      <div className="absolute inset-0 noise pointer-events-none" />
      <div className="absolute inset-0 dot-grid-dense pointer-events-none opacity-40" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(107,33,168,0.1)] to-transparent dark:via-[rgba(255,255,255,0.06)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-2xl mx-auto mb-10"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[rgba(107,33,168,0.08)] text-[#6B21A8] text-xs font-semibold tracking-wider uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#6B21A8]" />
            Selected Work
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#0F172A] dark:text-[#F1F5F9] mb-4 text-balance">
            Flagship <span className="gradient-text">solutions</span> we&apos;ve shipped.
          </h2>
          <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
            Production-grade applications delivered for corporate clients across finance, retail, HR, and enterprise operations.
          </p>
        </motion.div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-4">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setFilter(tab.key)}
              className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                filter === tab.key
                  ? "text-white"
                  : "text-slate-500 hover:text-[#6B21A8] hover:bg-[rgba(107,33,168,0.04)] dark:text-slate-400 dark:hover:text-[#00D4FF] dark:hover:bg-[rgba(0,212,255,0.06)]"
              }`}
            >
              {filter === tab.key && (
                <motion.div
                  layoutId="activeTab"
                  className={`absolute inset-0 rounded-lg bg-gradient-to-r ${tabGradients[tab.key]} shadow-lg`}
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Count */}
        <p className="text-center text-xs text-slate-400 dark:text-slate-500 font-mono mb-6">
          Showing {filtered.length} of {projects.length} projects
        </p>

        {/* Grid */}
        <AnimatePresence mode="popLayout">
          <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((p) => (
              <motion.div
                key={p.title}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="group rounded-xl overflow-hidden card-glass hover:translate-y-[-4px] transition-transform duration-300 flex flex-col"
              >
                {/* Image */}
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent dark:from-[#1E293B]/80" />
                </div>

                {/* Content */}
                <div className="p-5 border-t border-[rgba(107,33,168,0.06)] dark:border-[rgba(255,255,255,0.06)] flex flex-col flex-1">
                  <span className={`inline-block px-2.5 py-0.5 rounded-full border text-[11px] font-semibold uppercase tracking-wider mb-2 w-fit ${catColors[p.cat]}`}>
                    {p.cat}
                  </span>
                  <h4 className="font-heading font-semibold text-[#0F172A] dark:text-[#F1F5F9] mb-1 group-hover:text-[#6B21A8] dark:group-hover:text-[#00D4FF] transition-colors duration-300">
                    {p.title}
                  </h4>
                  <p className="text-xs text-slate-400 dark:text-slate-500 font-mono mb-3">{p.stack}</p>
                  <div className="mt-auto flex items-center gap-2 pt-3 border-t border-[rgba(107,33,168,0.06)] dark:border-[rgba(255,255,255,0.06)] text-sm text-slate-500 dark:text-slate-400 font-medium">
                    <svg className="w-4 h-4 text-[#6B21A8] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <polyline points="18 15 12 9 6 15" />
                    </svg>
                    {p.impact}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {filtered.length === 0 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-slate-500 dark:text-slate-400 py-16"
          >
            No projects in this category yet.
          </motion.p>
        )}
      </div>
    </section>
  );
}