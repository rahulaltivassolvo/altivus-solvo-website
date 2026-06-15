"use client";

import { motion } from "framer-motion";

const steps = [
  ...[
    { text: "# Shipping enterprise software", color: "text-slate-500 italic dark:text-slate-400", delay: 0.0 },
  ],
  ...(() => {
    const chars = ["⠋", "⠙", "⠹", "⠸", "⠼", "⠴"];
    return chars.map((c, i) => ({
      text: `${c} Building modules...`,
      color: "text-blue-400",
      delay: 0.15 + i * 0.06,
      spinner: true,
    }));
  })(),
  { text: "✓ Compiling Java microservices    [OK]", color: "text-emerald-400", delay: 0.9 },
  { text: "✓ Provisioning Python API layer   [OK]", color: "text-emerald-400", delay: 1.2 },
  { text: "  ⚡ Optimizing query performance", color: "text-yellow-400", delay: 1.5 },
  { text: "✓ Bundling React frontend         [OK]", color: "text-emerald-400", delay: 1.9 },
  { text: "✓ Running test suite              [OK]", color: "text-emerald-400", delay: 2.3 },
  { text: "✓ Deploying to production         [OK]", color: "text-emerald-400", delay: 2.7 },
];

export default function Terminal() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="rounded-xl overflow-hidden border border-[rgba(107,33,168,0.1)] bg-white dark:bg-[#1E293B] dark:border-[rgba(255,255,255,0.06)] shadow-2xl mb-10 relative"
    >
      {/* Scanline overlay */}
      <div
        className="absolute inset-0 pointer-events-none z-10 opacity-[0.03]"
        style={{
          backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)",
        }}
      />

      {/* Terminal chrome */}
      <div className="flex items-center gap-1.5 px-4 py-3 bg-[#F8FAFF] dark:bg-[#1A2332] border-b border-[rgba(107,33,168,0.06)] dark:border-[rgba(255,255,255,0.06)]">
        <span className="w-3 h-3 rounded-full bg-red-400/80 shadow-[0_0_4px_rgba(239,68,68,0.2)]" />
        <span className="w-3 h-3 rounded-full bg-yellow-400/80 shadow-[0_0_4px_rgba(234,179,8,0.2)]" />
        <span className="w-3 h-3 rounded-full bg-green-400/80 shadow-[0_0_4px_rgba(34,197,94,0.2)]" />
        <span className="ml-3 text-xs text-slate-400 dark:text-slate-500 font-mono">~/altivus-solvo — deploy.sh</span>
      </div>

      {/* Terminal content */}
      <div className="p-4 sm:p-5 font-mono text-sm leading-loose relative">
        {steps.map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: line.delay, duration: 0.35 }}
          >
            <span className={line.color}>{line.text}</span>
          </motion.div>
        ))}

        {/* Progress bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 2.3 }}
          className="mt-3 mb-2"
        >
          <div className="h-1.5 bg-[rgba(107,33,168,0.06)] dark:bg-[rgba(255,255,255,0.06)] rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ delay: 2.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="h-full rounded-full bg-gradient-to-r from-[#6B21A8] via-[#00D4FF] to-[#6B21A8]"
            />
          </div>
        </motion.div>

        {/* Final prompt */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 3.0 }}
        >
          <span className="text-slate-500 dark:text-slate-400">✓</span>{" "}
          <span className="text-slate-600 dark:text-slate-500">Deploy complete —</span>{" "}
          <span className="text-[#6B21A8]">altivussolvo.com</span>
          <span className="inline-block w-2 h-4 bg-[#6B21A8] ml-1 animate-pulse" />
        </motion.div>
      </div>
    </motion.div>
  );
}