"use client";

import { useState, useEffect, FormEvent } from "react";
import { motion } from "framer-motion";
import { Send, Loader2, CheckCircle, Mail, Calendar, MapPin, Copy, Check, ChevronDown } from "lucide-react";

const currencies = [
  { code: "USD", symbol: "$" },
  { code: "EUR", symbol: "€" },
  { code: "INR", symbol: "₹" },
  { code: "GBP", symbol: "£" },
];

const getCurrency = (code: string) => currencies.find((c) => c.code === code) ?? currencies[0];

const projectTypes = ["Web Application", "AI / ML System", "Cloud & DevOps", "Mobile App", "Full-Stack Platform", "Other"];

const budgetLabels = ["Under 5K", "5K – 15K", "15K – 50K", "50K – 100K", "100K+"];

const contacts = [
  { icon: Mail, label: "Email", value: "hello@altivussolvo.com", note: "We reply within 24 hours" },
  { icon: Calendar, label: "Book a Call", value: "Schedule a quick chat", href: "#" },
  { icon: MapPin, label: "Location", value: "Based in India · Available IST & EST" },
];

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", projectType: "", currency: "USD", budget: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);


  useEffect(() => {
    const lang = navigator.language;
    let detected = "USD";
    if (/^(en-)?GB/.test(lang)) detected = "GBP";
    else if (/(en|hi)-IN/.test(lang)) detected = "INR";
    else if (/^(de|fr|it|es|pt|nl|el|sv|no|da|fi|pl|cs|hu|ro|sk|sl|hr|bg|lt|lv|et|mt)/.test(lang)) detected = "EUR";
    setForm((s) => ({ ...s, currency: detected }));
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1600));
    setLoading(false);
    setSubmitted(true);
  };

  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("hello@altivussolvo.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#EEF2FF] dark:bg-[#0F172A] relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 noise pointer-events-none" />
      <div className="absolute inset-0 dot-grid pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(107,33,168,0.1)] to-transparent dark:via-[rgba(255,255,255,0.06)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(107,33,168,0.06),transparent_60%),radial-gradient(ellipse_at_top_right,rgba(0,212,255,0.04),transparent_60%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl mb-12"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[rgba(107,33,168,0.08)] text-[#6B21A8] text-xs font-semibold tracking-wider uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#6B21A8]" />
            Get in Touch
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#0F172A] dark:text-[#F1F5F9] mb-4 text-balance">
            Let&apos;s build something <span className="gradient-text italic font-medium">remarkable</span>.
          </h2>
          <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
            Whether you&apos;re scoping a new platform or extending an existing one, we&apos;d love to hear about your project.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-2 space-y-4"
          >
            <h3 className="font-heading text-xl font-semibold text-[#0F172A] dark:text-[#F1F5F9]">Start the conversation</h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
              Reach out with questions, a brief, or simply to explore whether we&apos;re the right fit.
            </p>
            {contacts.map((c) => {
              const Icon = c.icon;
              const Wrapper = c.href ? "a" : "div";
              const wrapperProps = c.href ? { href: "#", onClick: (e: React.MouseEvent) => e.preventDefault() } : {};
              return (
                <Wrapper
                  key={c.label}
                  {...wrapperProps}
                  className={`flex items-center gap-3.5 p-4 rounded-xl card-glass ${c.href ? "cursor-pointer hover:border-[#6B21A8]/30 dark:hover:border-[#00D4FF]/30 transition-all duration-200" : "cursor-default group"}`}
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#6B21A8] to-[#00D4FF] flex items-center justify-center text-white flex-shrink-0 shadow-sm shadow-[rgba(107,33,168,0.2)]">
                    <Icon size={18} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[10px] tracking-widest uppercase text-slate-400 dark:text-slate-500 font-medium">{c.label}</p>
                    <p className="text-sm font-medium text-[#0F172A] dark:text-[#F1F5F9] truncate">{c.value}</p>
                    {c.note && <p className="text-[11px] text-slate-400 dark:text-slate-500 mt-0.5">{c.note}</p>}
                  </div>
                  {c.label === "Email" && (
                    <button
                      onClick={(e) => { e.stopPropagation(); copyEmail(); }}
                      className="p-2 rounded-md text-slate-400 hover:text-[#6B21A8] hover:bg-[rgba(107,33,168,0.08)] dark:hover:text-[#00D4FF] dark:hover:bg-[rgba(0,212,255,0.08)] transition-all duration-200"
                      title="Copy email"
                    >
                      {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                    </button>
                  )}
                </Wrapper>
              );
            })}
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-3"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-8 sm:p-10 rounded-2xl card-glass text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  className="w-14 h-14 mx-auto mb-5 rounded-xl bg-emerald-400/20 flex items-center justify-center"
                >
                  <CheckCircle size={28} className="text-emerald-400" />
                </motion.div>
                <h3 className="font-heading text-xl font-semibold text-[#0F172A] mb-2">Message Sent!</h3>
                <p className="text-slate-400 dark:text-slate-500 text-sm max-w-sm mx-auto">Thank you — we&apos;ll be in touch within 24 hours.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="p-8 sm:p-10 rounded-2xl card-glass">
                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <FormField label="Your Name" value={form.name} onChange={(v) => setForm((s) => ({ ...s, name: v }))} placeholder="Jane Doe" />
                  <FormField label="Email Address" type="email" value={form.email} onChange={(v) => setForm((s) => ({ ...s, email: v }))} placeholder="jane@company.com" />
                </div>
                <div className="grid sm:grid-cols-2 gap-4 mb-5">
                  <SelectField
                    label="Project Type"
                    value={form.projectType}
                    onChange={(v) => setForm((s) => ({ ...s, projectType: v }))}
                    options={projectTypes}
                    placeholder="Select type"
                  />
                  <div>
                    <label className="block text-[11px] tracking-widest uppercase text-slate-400 dark:text-slate-500 font-medium mb-2">Budget</label>
                    <div className="flex gap-2">
                      <div className="w-[90px] shrink-0">
                        <select
                          value={form.currency}
                          onChange={(e) => setForm((s) => ({ ...s, currency: e.target.value }))}
                          className="w-full h-[44px] px-3 rounded-xl bg-white dark:bg-[#1E293B] border border-[rgba(107,33,168,0.12)] dark:border-[rgba(255,255,255,0.1)] text-[#0F172A] dark:text-[#F1F5F9] text-sm font-medium focus:outline-none focus:border-[#6B21A8]/40 transition-all appearance-none cursor-pointer"
                        >
                          {currencies.map((c) => (
                            <option key={c.code} value={c.code}>{c.symbol} {c.code}</option>
                          ))}
                        </select>
                      </div>
                      <div className="flex-1 relative">
                        <select
                          value={form.budget}
                          onChange={(e) => setForm((s) => ({ ...s, budget: e.target.value }))}
                          className="w-full h-[44px] px-4 pr-8 rounded-xl bg-white dark:bg-[#1E293B] border border-[rgba(107,33,168,0.12)] dark:border-[rgba(255,255,255,0.1)] text-[#0F172A] dark:text-[#F1F5F9] text-sm focus:outline-none focus:border-[#6B21A8]/40 transition-all appearance-none cursor-pointer"
                        >
                          <option value="" disabled className="text-slate-400">Select range</option>
                          {budgetLabels.map((l) => (
                            <option key={l} value={l}>{getCurrency(form.currency).symbol}{l}</option>
                          ))}
                        </select>
                        <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mb-5">
                  <label className="block text-[11px] tracking-widest uppercase text-slate-400 dark:text-slate-500 font-medium mb-2">Your Message</label>
                  <textarea
                    value={form.message}
                    onChange={(e) => setForm((s) => ({ ...s, message: e.target.value }))}
                    placeholder="Tell us about your project, timeline, and goals..."
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-[#1E293B] border border-[rgba(107,33,168,0.12)] dark:border-[rgba(255,255,255,0.1)] text-[#0F172A] dark:text-[#F1F5F9] placeholder-slate-400 dark:placeholder-slate-500 text-sm focus:outline-none focus:bg-white dark:focus:bg-[#1E293B] focus:border-[#6B21A8]/40 transition-all resize-none"
                  />
                </div>
                <p className="text-center text-xs text-slate-400 dark:text-slate-500 mb-4">
                  Trusted by <span className="font-semibold text-[#6B21A8]">30+</span> clients worldwide
                </p>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-[#6B21A8] to-[#00D4FF] text-white font-semibold text-sm shadow-lg shadow-[rgba(107,33,168,0.2)] hover:shadow-xl hover:shadow-[rgba(107,33,168,0.35)] hover:-translate-y-0.5 disabled:opacity-80 transition-all duration-300"
                >
                  {loading ? (
                    <><Loader2 size={16} className="animate-spin" /> Sending...</>
                  ) : (
                    <><Send size={16} /> Send Message</>
                  )}
                </button>
                <p className="text-center text-[11px] text-slate-400 dark:text-slate-500 mt-4">
                  We&apos;ll review your brief and schedule a discovery call within 48 hours.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function FormField({
  label, value, onChange, placeholder, type = "text",
}: {
  label: string; value: string; onChange: (v: string) => void; placeholder: string; type?: string;
}) {
  return (
    <div>
      <label className="block text-[11px] tracking-widest uppercase text-slate-400 dark:text-slate-500 font-medium mb-2">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        required
        className="w-full px-4 py-3 rounded-xl bg-white dark:bg-[#1E293B] border border-[rgba(107,33,168,0.12)] dark:border-[rgba(255,255,255,0.1)] text-[#0F172A] dark:text-[#F1F5F9] placeholder-slate-400 dark:placeholder-slate-500 text-sm focus:outline-none focus:bg-white dark:focus:bg-[#1E293B] focus:border-[#6B21A8]/40 transition-all"
      />
    </div>
  );
}

function SelectField({
  label, value, onChange, options, placeholder,
}: {
  label: string; value: string; onChange: (v: string) => void; options: string[]; placeholder: string;
}) {
  return (
    <div>
      <label className="block text-[11px] tracking-widest uppercase text-slate-400 dark:text-slate-500 font-medium mb-2">{label}</label>
      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full px-4 py-3 rounded-xl bg-white dark:bg-[#1E293B] border border-[rgba(107,33,168,0.12)] dark:border-[rgba(255,255,255,0.1)] text-[#0F172A] dark:text-[#F1F5F9] text-sm focus:outline-none focus:border-[#6B21A8]/40 transition-all appearance-none cursor-pointer"
        >
          <option value="" disabled className="text-slate-400">{placeholder}</option>
          {options.map((opt) => (
            <option key={opt} value={opt} className="text-[#0F172A]">{opt}</option>
          ))}
        </select>
        <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
      </div>
    </div>
  );
}