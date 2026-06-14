"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp, Mail } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scroll = (href: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0F172A] relative">
      {/* Gradient top border */}
      <div className="h-px bg-gradient-to-r from-transparent via-[rgba(0,212,255,0.15)] via-[rgba(107,33,168,0.1)] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="#hero" onClick={scroll("#hero")} className="flex items-center gap-2.5 mb-4 cursor-pointer">
              <Image src="/4.png" alt="Altivus Solvo" width={0} height={0} sizes="100vw" className="h-10 md:h-11 w-auto object-contain" />
              <span className="font-heading font-bold text-sm tracking-wider text-white">ALTIVUS SOLVO</span>
            </a>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed max-w-xs mb-5">
              Cutting-edge IT solutions provider delivering innovative services that drive business efficiency and growth.
            </p>
          </div>

          {/* Link columns */}
          {[
            { title: "Services", links: [
              { label: "Web Development", href: "#services" },
              { label: "Full-Stack", href: "#fullstack" },
              { label: "AI & DevOps", href: "#aidevops" },
            ]},
            { title: "Company", links: [
              { label: "About", href: "#about" },
              { label: "Portfolio", href: "#portfolio" },
              { label: "Process", href: "#process" },
              { label: "Contact", href: "#contact" },
            ]},
            { title: "Contact", links: [
              { label: "hello@altivussolvo.com", href: "mailto:hello@altivussolvo.com" },
              { label: "service@altivussolvo.com", href: "mailto:service@altivussolvo.com" },
              { label: "+91 8074103655", href: "https://wa.me/918074103655" },
            ]},
          ].map((col) => (
            <div key={col.title}>
              <h5 className="font-heading font-semibold text-white text-xs tracking-wider uppercase mb-4">{col.title}</h5>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={link.href.startsWith("#") ? scroll(link.href) : undefined}
                      className="text-sm text-slate-400 hover:text-[#00D4FF] transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-[rgba(255,255,255,0.06)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <p className="text-sm text-slate-500 dark:text-slate-400">&copy; {new Date().getFullYear()} Altivus Solvo. All rights reserved.</p>
            <div className="flex items-center gap-2 pl-4 border-l border-[rgba(255,255,255,0.06)]">
              <a href="https://wa.me/918074103655" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-[rgba(255,255,255,0.06)] text-slate-400 dark:text-slate-500 flex items-center justify-center hover:bg-[#25D366] hover:text-white hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300" aria-label="WhatsApp">
                <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              </a>
              <a href="mailto:hello@altivussolvo.com" className="w-8 h-8 rounded-full bg-[rgba(255,255,255,0.06)] text-slate-400 dark:text-slate-500 flex items-center justify-center hover:bg-gradient-to-br hover:from-[#EA4335] hover:to-[#34A853] hover:text-white hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300" aria-label="Gmail">
                <Mail size={15} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-[rgba(255,255,255,0.06)] text-slate-400 dark:text-slate-500 flex items-center justify-center hover:bg-[#0A66C2] hover:text-white hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452z"/></svg>
              </a>
            </div>
          </div>
          <p className="text-[11px] text-slate-600 dark:text-slate-500 gradient-text font-medium tracking-wider">Elevate Your Possibilities</p>
        </div>
      </div>

      {/* Back to top */}
      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-40 w-10 h-10 rounded-xl bg-gradient-to-br from-[#6B21A8] to-[#00D4FF] text-white flex items-center justify-center shadow-lg shadow-[rgba(107,33,168,0.25)] hover:shadow-xl hover:shadow-[rgba(107,33,168,0.4)] hover:-translate-y-1 transition-all duration-300"
            aria-label="Back to top"
          >
            <ArrowUp size={18} />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
}