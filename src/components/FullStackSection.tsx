"use client";

import { motion } from "framer-motion";
import Terminal from "@/components/Terminal";

const stacks = [
  {
    lang: "Java", sub: "Enterprise Grade",
    desc: "Enterprise REST APIs, microservices, JWT security, and containerized CI/CD — the backbone of corporate systems.",
    tags: ["Spring Boot", "Hibernate", "React.js", "Docker", "PostgreSQL"],
    product: "Enterprise Resource Planning Suite",
  },
  {
    lang: "Python", sub: "Data-Driven",
    desc: "Rapid development of data-driven apps with AI/ML integration and automated deployment pipelines.",
    tags: ["Django", "FastAPI", "Flask", "Vue.js", "MongoDB"],
    product: "AI-Powered Analytics Dashboard",
  },
  {
    lang: "PHP", sub: "Rapid Deployment",
    desc: "Fast CMS and portal development with secure session management and role-based dashboards.",
    tags: ["Laravel", "MySQL", "Vue.js", "Tailwind", "Bootstrap"],
    product: "Corporate Portal & CMS",
  },
];

export default function FullStackSection() {
  return (
    <section id="fullstack" className="py-20 md:py-28 bg-[#EEF2FF] dark:bg-[#0F172A] relative overflow-hidden">
      <div className="absolute inset-0 noise pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-[rgba(107,33,168,0.06)] rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[rgba(0,212,255,0.04)] rounded-full blur-[100px]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(107,33,168,0.04),transparent_60%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[rgba(107,33,168,0.08)] text-[#6B21A8] text-xs font-semibold tracking-wider uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#6B21A8]" />
            Full-Stack Engineering
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#0F172A] dark:text-[#F1F5F9] mb-4 text-balance">
            Production-ready systems, <span className="gradient-text">top to bottom</span>.
          </h2>
          <p className="text-slate-400 dark:text-slate-500 leading-relaxed">
            End-to-end applications with three primary language tracks tailored to each project&apos;s demands.
          </p>
        </motion.div>

        {/* Terminal */}
        <Terminal />

        {/* Stack cards */}
        <div className="grid md:grid-cols-3 gap-5">
          {stacks.map((s, i) => (
            <motion.div
              key={s.lang}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="group card-border-accent p-6 sm:p-7 rounded-2xl card-glass flex flex-col"
            >
              {/* Language title */}
              <p className="font-heading text-3xl font-bold gradient-text-blue mb-0.5">{s.lang}</p>
              <p className="text-[10px] tracking-widest uppercase text-slate-500 dark:text-slate-400 font-medium mb-4">{s.sub}</p>
              <p className="text-slate-400 dark:text-slate-500 text-sm leading-relaxed mb-5">{s.desc}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {s.tags.map((t) => (
                  <span key={t} className="px-2.5 py-1 rounded-full bg-[rgba(107,33,168,0.06)] dark:bg-[rgba(107,33,168,0.12)] border border-[rgba(107,33,168,0.1)] dark:border-[rgba(255,255,255,0.08)] text-slate-500 dark:text-slate-400 text-xs hover:border-[#6B21A8]/30 transition-colors duration-200">
                    {t}
                  </span>
                ))}
              </div>

              {/* Featured project callout — pinned to bottom */}
              <div className="mt-auto p-3.5 rounded-xl bg-gradient-to-r from-[rgba(107,33,168,0.06)] to-[rgba(0,212,255,0.04)] dark:from-[rgba(107,33,168,0.15)] dark:to-[rgba(0,212,255,0.08)] border border-[rgba(107,33,168,0.1)] dark:border-[rgba(255,255,255,0.08)] group-hover:border-[rgba(107,33,168,0.18)] dark:group-hover:border-[rgba(255,255,255,0.12)] transition-colors duration-300">
                <p className="text-[10px] tracking-widest uppercase text-[#6B21A8] font-semibold mb-1">Featured Project</p>
                <p className="font-heading text-sm font-medium text-[#0F172A] dark:text-[#F1F5F9]">{s.product}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}