"use client";

import { motion } from "framer-motion";
import { Shield, Zap, Lightbulb, Headphones } from "lucide-react";

const steps = [
  { num: "01", title: "Discovery", desc: "Understanding your business, users, and technical landscape." },
  { num: "02", title: "Design", desc: "Architecture blueprints and refined interface design." },
  { num: "03", title: "Development", desc: "Agile sprints with continuous integration and review." },
  { num: "04", title: "Deployment", desc: "Launch with monitoring, testing, and optimisation." },
  { num: "05", title: "Support", desc: "Ongoing maintenance, scaling, and expert guidance." },
];

const whys = [
  { icon: Zap, title: "Scalable Architecture", desc: "Built to grow with your business, from day one to global scale." },
  { icon: Shield, title: "Security-First", desc: "JWT, OAuth2, and audit-ready systems by default." },
  { icon: Lightbulb, title: "Modern Stack", desc: "Latest frameworks and industry best practices throughout." },
  { icon: Headphones, title: "Dedicated Support", desc: "24/7 availability with a senior engineering team." },
];

export default function ProcessSection() {
  return (
    <section id="process" className="py-20 md:py-28 bg-[#F0F4FF] dark:bg-[#0B1326] relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 noise pointer-events-none" />
      <div className="absolute inset-0 dot-grid pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(107,33,168,0.04),transparent_60%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[rgba(107,33,168,0.08)] text-[#6B21A8] text-xs font-semibold tracking-wider uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#6B21A8]" />
            Our Process
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#0F172A] dark:text-[#F1F5F9] mb-4 text-balance">
            Why teams choose <span className="gradient-text">Altivus Solvo</span>.
          </h2>
          <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
            A transparent methodology that takes your idea from discovery through production — with craftsmanship at every stage.
          </p>
        </motion.div>

        {/* Process steps */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-16 relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-9 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-[rgba(107,33,168,0.1)] to-transparent dark:via-[rgba(255,255,255,0.06)]" />
          <motion.div
            className="hidden md:block absolute top-9 left-[10%] h-px bg-gradient-to-r from-[#6B21A8] via-[#00D4FF] to-[#6B21A8]"
            initial={{ width: 0 }}
            whileInView={{ width: "80%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          />

          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="text-center group"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#6B21A8] to-[#00D4FF] flex items-center justify-center font-heading font-bold text-white text-lg shadow-lg shadow-[rgba(107,33,168,0.2)] relative z-10 transition-all duration-300 group-hover:shadow-xl group-hover:shadow-[rgba(107,33,168,0.3)] group-hover:scale-105">
                {step.num}
              </div>
              <h4 className="font-heading font-semibold text-[#0F172A] dark:text-[#F1F5F9] text-sm mb-1">{step.title}</h4>
              <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed max-w-[140px] mx-auto">{step.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Why us cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {whys.map((w, i) => {
            const Icon = w.icon;
            return (
              <motion.div
                key={w.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="card-border-accent p-6 rounded-2xl card-glass"
              >
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#6B21A8] to-[#00D4FF] flex items-center justify-center text-white mb-4 shadow-lg shadow-[rgba(107,33,168,0.2)] group-hover:scale-110 transition-transform duration-300">
                  <Icon size={20} />
                </div>
                <h5 className="font-heading font-semibold text-[#0F172A] dark:text-[#F1F5F9] text-sm mb-1">{w.title}</h5>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{w.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}