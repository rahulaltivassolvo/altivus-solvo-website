"use client";

import { motion } from "framer-motion";
import { Brain, Cloud, Cpu, BarChart3, MessageSquare, Database, Container, GitBranch, Monitor, Server, Network, Workflow } from "lucide-react";

const aiItems = [
  { icon: Brain, label: "TensorFlow", desc: "Deep learning models" },
  { icon: Cpu, label: "PyTorch", desc: "Neural network training" },
  { icon: MessageSquare, label: "LLM APIs", desc: "GPT, Claude, Gemini" },
  { icon: BarChart3, label: "Analytics", desc: "Predictive insights" },
  { icon: Database, label: "FastAPI", desc: "ML model serving" },
  { icon: Workflow, label: "Chatbots", desc: "Conversational AI" },
];

const devopsItems = [
  { icon: Container, label: "Docker", desc: "Container runtime" },
  { icon: Network, label: "Kubernetes", desc: "Orchestration" },
  { icon: Cloud, label: "AWS", desc: "Cloud infrastructure" },
  { icon: GitBranch, label: "CI/CD", desc: "Automated pipelines" },
  { icon: Monitor, label: "Nginx", desc: "Reverse proxy" },
  { icon: Server, label: "Railway", desc: "Managed hosting" },
];

function TechGrid({
  items,
  gradient,
}: {
  items: typeof aiItems;
  gradient: string;
}) {
  return (
    <div className="grid grid-cols-3 gap-2.5">
      {items.map((item) => {
        const Icon = item.icon;
        return (
          <motion.div
            key={item.label}
            whileHover={{ y: -3, scale: 1.02 }}
            className="group relative flex flex-col items-center gap-2 p-4 rounded-xl card-glass cursor-default"
          >
            <Icon size={20} className="text-[#6B21A8] group-hover:text-[#0F172A] dark:group-hover:text-[#F1F5F9] transition-colors duration-200" />
            <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 group-hover:text-[#0F172A] dark:group-hover:text-[#F1F5F9] transition-colors duration-200">
              {item.label}
            </span>
            {/* Tooltip on hover */}
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-md bg-white dark:bg-[#1E293B] border border-[rgba(107,33,168,0.12)] dark:border-[rgba(255,255,255,0.12)] text-[10px] text-slate-500 dark:text-slate-400 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
              {item.desc}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

export default function AIDevopsSection() {
  return (
    <section id="aidevops" className="py-20 md:py-28 bg-[#F0F4FF] dark:bg-[#0B1326] relative overflow-hidden">
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
            Intelligence & Infrastructure
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#0F172A] mb-4 text-balance">
            AI and DevOps, <span className="gradient-text">in harmony</span>.
          </h2>
          <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
            Machine-learning intelligence and modern infrastructure practices in a single, reliable delivery model.
          </p>
        </motion.div>

        {/* Two columns */}
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { title: "AI Development", subtitle: "Intelligence", desc: "Custom models, agents, predictive analytics, and recommendation systems powered by Python and LLMs.", items: aiItems },
            { title: "DevOps & Cloud", subtitle: "Infrastructure", desc: "CI/CD pipelines, container orchestration, and scalable cloud infrastructure for uptime and velocity.", items: devopsItems },
          ].map((section, i) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="card-border-accent p-7 sm:p-9 rounded-2xl card-glass"
            >
              <h3 className="font-heading text-2xl font-bold text-[#0F172A] dark:text-[#F1F5F9] mb-1">
                {section.title.split(" ")[0]}{" "}
                <span className="gradient-text italic font-medium">
                  {section.title.split(" ").slice(1).join(" ")}
                </span>
              </h3>
              <p className="text-slate-400 dark:text-slate-500 text-sm leading-relaxed mb-6 max-w-lg">
                {section.desc}
              </p>
              <TechGrid items={section.items} gradient={i === 0 ? "from-blue-500 to-cyan-400" : "from-purple-500 to-pink-500"} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}