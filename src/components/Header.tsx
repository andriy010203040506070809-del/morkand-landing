"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useT, useLocale } from "@/i18n/context";

export function Header() {
  const t = useT();
  const locale = useLocale();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-[#050505]/80 backdrop-blur-xl border-b border-white/5" : ""
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 sm:px-12 md:px-20">
        <a href="#" className="text-xl font-bold tracking-tighter uppercase sm:text-2xl">
          MOR<span className="text-accent">KAND</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {t.header.nav.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs uppercase tracking-[0.2em] text-white/40 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <a
            href={locale === "uk" ? "/en" : "/"}
            className="flex items-center gap-1 rounded-full border border-white/10 px-3 py-1.5 text-[10px] font-medium uppercase tracking-widest text-white/40 transition-all hover:border-white/20 hover:text-white/70"
          >
            {locale === "uk" ? "EN" : "UA"}
          </a>
          <a
            href="#contact"
            className="group flex items-center gap-2 rounded-full border border-accent/50 bg-accent/10 px-6 py-2.5 text-xs font-medium uppercase tracking-wider text-white transition-all hover:bg-accent hover:shadow-[0_0_30px_rgba(168,85,247,0.3)]"
          >
            <span className="text-accent group-hover:text-white transition-colors">→</span>
            {t.header.cta}
          </a>
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="relative z-50 flex h-10 w-10 items-center justify-center md:hidden"
          aria-label="Menu"
        >
          <div className="flex flex-col gap-1.5">
            <motion.span
              animate={open ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              className="block h-0.5 w-6 bg-white"
            />
            <motion.span
              animate={open ? { opacity: 0 } : { opacity: 1 }}
              className="block h-0.5 w-6 bg-white"
            />
            <motion.span
              animate={open ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              className="block h-0.5 w-6 bg-white"
            />
          </div>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-white/5 bg-[#050505]/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-4 px-6 py-8">
              {t.header.nav.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="text-2xl font-bold uppercase tracking-tight text-white/60 transition-colors hover:text-white"
                >
                  {link.label}
                </motion.a>
              ))}
              <a
                href={locale === "uk" ? "/en" : "/"}
                onClick={() => setOpen(false)}
                className="text-2xl font-bold uppercase tracking-tight text-accent/60 transition-colors hover:text-accent"
              >
                {locale === "uk" ? "English" : "Українська"}
              </a>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-4 flex items-center justify-center gap-2 rounded-xl border border-accent/50 bg-accent/10 py-4 text-sm font-medium uppercase tracking-wider text-white transition-all hover:bg-accent"
              >
                <span className="text-accent">→</span>
                {t.header.ctaMobile}
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
