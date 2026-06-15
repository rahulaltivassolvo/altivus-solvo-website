"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import Image from "next/image";
import { useTheme } from "@/components/layout/ThemeProvider";

const links = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Process", href: "#process" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 flex items-center transition-all duration-500 ${
          scrolled
            ? "h-14 md:h-16 bg-white/95 backdrop-blur-2xl saturate-[1.2] border-b border-[rgba(107,33,168,0.06)] shadow-[0_1px_20px_rgba(107,33,168,0.08)] dark:bg-[#0F172A]/95 dark:border-b dark:border-[rgba(255,255,255,0.06)] dark:shadow-[0_1px_20px_rgba(0,0,0,0.3)]"
            : "h-16 md:h-20 bg-transparent"
        }`}
      >
        <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <a href="#hero" onClick={(e) => scrollTo(e, "#hero")} className="flex items-center gap-2.5 group cursor-pointer">
            <Image src="/4.png" alt="Altivus Solvo" width={0} height={0} sizes="100vw" className="h-10 md:h-11 w-auto object-contain" />
            <span className="font-heading font-bold text-sm tracking-wider text-[#0F172A] dark:text-white">ALTIVUS SOLVO</span>
          </a>

          <div className="hidden md:flex items-center gap-1">
            <button
              onClick={toggle}
              className="p-2 mr-1 rounded-lg text-slate-500 hover:text-[#6B21A8] hover:bg-[rgba(107,33,168,0.06)] dark:text-slate-400 dark:hover:text-[#00D4FF] dark:hover:bg-[rgba(0,212,255,0.08)] transition-all duration-200"
              aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            >
              {theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
            </button>
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => scrollTo(e, link.href)}
                className="nav-link px-4 py-2 rounded-lg text-sm text-[#64748B] dark:text-slate-400 hover:text-[#6B21A8] dark:hover:text-[#00D4FF] transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => scrollTo(e, "#contact")}
              className="ml-3 px-5 py-2 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-[#6B21A8] to-[#00D4FF] hover:from-[#581C87] hover:to-[#4DE3FF] shadow-lg shadow-[rgba(107,33,168,0.2)] hover:shadow-xl hover:shadow-[rgba(107,33,168,0.3)] hover:-translate-y-0.5 transition-all duration-300"
            >
              Get Started
            </a>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-lg text-slate-500 dark:text-slate-400 hover:text-[#6B21A8] dark:hover:text-[#00D4FF] hover:bg-[rgba(107,33,168,0.06)] dark:hover:bg-[rgba(0,212,255,0.08)] transition-colors"
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 260 }}
            className="fixed inset-0 z-40 md:hidden bg-white/98 backdrop-blur-2xl dark:bg-[#0F172A]/98"
          >
            <div className="flex flex-col items-center justify-center h-full gap-8">
              {[...links, { label: "Contact", href: "#contact" }].map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => scrollTo(e, link.href)}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07, type: "spring", stiffness: 200, damping: 24 }}
                  className="font-heading text-2xl font-semibold text-[#64748B] hover:text-[#6B21A8] dark:text-slate-400 dark:hover:text-[#00D4FF] transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}