"use client";

import { motion } from "framer-motion";
import { Globe, Server, Code2, Database } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Frontend Development",
    desc: "Interactive interfaces, single-page applications, and responsive mobile-first designs built with React, Angular, Vue, and Next.js.",
    tags: ["React.js", "Angular", "Vue.js", "Next.js"],
  },
  {
    icon: Server,
    title: "Backend Development",
    desc: "Enterprise-grade systems with secure authentication, business logic, and microservices using Spring Boot, Django, Laravel, and Node.js.",
    tags: ["Spring Boot", "Django", "Laravel", "Node.js"],
  },
  {
    icon: Code2,
    title: "API Development",
    desc: "Comprehensive RESTful and GraphQL APIs with real-time WebSocket integration, detailed OpenAPI documentation, and third-party service sync.",
    tags: ["RESTful", "GraphQL", "WebSockets", "OpenAPI"],
  },
  {
    icon: Database,
    title: "Database Management",
    desc: "Relational and NoSQL database architecture with high-availability clusters, automated backups, monitoring, and disaster recovery.",
    tags: ["PostgreSQL", "MySQL", "MongoDB"],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30, rotateX: 5 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 md:py-28 bg-[#F0F4FF] dark:bg-[#0B1326] relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 noise pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[rgba(107,33,168,0.04)] rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[rgba(0,212,255,0.03)] rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
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
            Web Development
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#0F172A] dark:text-[#F1F5F9] mb-4 text-balance">
            Crafted web solutions, <span className="gradient-text">end to end</span>.
          </h2>
          <p className="text-slate-400 dark:text-slate-500 leading-relaxed">
            From pixel-perfect frontends to bulletproof backends every layer engineered with the latest frameworks.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="group card-border-accent p-6 sm:p-7 rounded-2xl card-glass"
              >
                {/* Icon */}
                <div className="w-11 h-11 rounded-xl bg-[rgba(107,33,168,0.08)] flex items-center justify-center text-[#6B21A8] mb-4 group-hover:bg-gradient-to-br group-hover:from-[#6B21A8] group-hover:to-[#00D4FF] group-hover:text-white group-hover:shadow-lg group-hover:shadow-[rgba(107,33,168,0.2)] transition-all duration-400">
                  <Icon size={22} />
                </div>

                {/* Title & description */}
                <h3 className="font-heading font-semibold text-lg text-[#0F172A] dark:text-[#F1F5F9] mb-2">{s.title}</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-5">{s.desc}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {s.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-full bg-[rgba(107,33,168,0.06)] dark:bg-[rgba(107,33,168,0.12)] border border-[rgba(107,33,168,0.1)] dark:border-[rgba(255,255,255,0.08)] text-slate-500 dark:text-slate-400 text-xs font-medium hover:border-[#6B21A8]/30 hover:text-[#6B21A8] transition-colors duration-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}