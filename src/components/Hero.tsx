"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { usePreloaderDone } from "./Preloader";
import { useT } from "@/i18n/context";

export function Hero() {
  const ready = usePreloaderDone();
  const t = useT();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen overflow-hidden dot-grid">
      {/* Diagonal light rays */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 h-[150%] w-[2px] rotate-[35deg] bg-gradient-to-b from-transparent via-purple-500/20 to-transparent" />
        <div className="absolute -top-20 left-[20%] h-[150%] w-[1px] rotate-[35deg] bg-gradient-to-b from-transparent via-purple-500/10 to-transparent" />
        <div className="absolute -top-20 left-[60%] h-[150%] w-[2px] rotate-[35deg] bg-gradient-to-b from-transparent via-purple-500/15 to-transparent" />
        <div className="absolute -top-20 right-[10%] h-[150%] w-[1px] rotate-[35deg] bg-gradient-to-b from-transparent via-purple-500/10 to-transparent" />
      </div>

      {/* 3D floating element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-float3d" style={{ perspective: "1000px" }}>
        <div className="relative h-64 w-64 opacity-20 sm:h-80 sm:w-80 md:h-[420px] md:w-[420px]">
          <svg viewBox="0 0 400 400" fill="none" className="h-full w-full">
            <rect x="50" y="50" width="300" height="300" rx="30" stroke="url(#grad1)" strokeWidth="1" />
            <rect x="80" y="80" width="240" height="240" rx="20" stroke="url(#grad1)" strokeWidth="0.5" strokeDasharray="8 4" />
            <circle cx="200" cy="200" r="80" stroke="url(#grad1)" strokeWidth="0.5" />
            <circle cx="200" cy="200" r="120" stroke="url(#grad1)" strokeWidth="0.3" strokeDasharray="4 8" />
            <path d="M200 80 L200 320 M80 200 L320 200" stroke="url(#grad1)" strokeWidth="0.3" />
            <circle cx="200" cy="200" r="6" fill="#a855f7" opacity="0.6" />
            <circle cx="200" cy="120" r="3" fill="#a855f7" opacity="0.4" />
            <circle cx="280" cy="200" r="3" fill="#a855f7" opacity="0.4" />
            <circle cx="200" cy="280" r="3" fill="#a855f7" opacity="0.4" />
            <circle cx="120" cy="200" r="3" fill="#a855f7" opacity="0.4" />
            {/* Circuit lines */}
            <path d="M140 140 L110 110 L110 70" stroke="#a855f7" strokeWidth="0.5" opacity="0.3" />
            <path d="M260 140 L290 110 L330 110" stroke="#a855f7" strokeWidth="0.5" opacity="0.3" />
            <path d="M260 260 L290 290 L290 330" stroke="#a855f7" strokeWidth="0.5" opacity="0.3" />
            <path d="M140 260 L110 290 L70 290" stroke="#a855f7" strokeWidth="0.5" opacity="0.3" />
            <defs>
              <linearGradient id="grad1" x1="0" y1="0" x2="400" y2="400">
                <stop offset="0%" stopColor="#a855f7" />
                <stop offset="100%" stopColor="#6366f1" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      <motion.div style={{ y, opacity }} className="relative z-10 flex min-h-screen flex-col justify-between px-6 pt-28 pb-12 sm:px-12 md:px-20">
        {/* Top badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.3 }}
          className="flex items-center gap-3"
        >
          <span className="flex h-2 w-2">
            <span className="absolute inline-flex h-2 w-2 animate-ping rounded-full bg-purple-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-purple-400" />
          </span>
          <span className="text-xs uppercase tracking-[0.3em] text-white/40">{t.hero.badge}</span>
        </motion.div>

        {/* Giant typography - scattered layout */}
        <div className="relative my-auto -mx-2 sm:-mx-6">
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 80 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="text-[clamp(3rem,10vw,9rem)] font-bold leading-[0.9] tracking-tighter uppercase">
              <span className="block">{t.hero.title1}</span>
              <span className="block text-accent">{t.hero.title2}</span>
              <div className="flex items-end gap-4 sm:gap-8 flex-wrap">
                <span className="block">{t.hero.title3}</span>
                <span className="block text-stroke text-[clamp(3rem,10vw,9rem)]">{t.hero.title4}</span>
              </div>
            </h1>
          </motion.div>

          {/* Description positioned to the side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={ready ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-8 max-w-md ml-auto mr-0 sm:absolute sm:right-0 sm:top-4 sm:mt-0"
          >
            <p className="text-sm leading-relaxed text-white/40 sm:text-base">
              <span className="text-accent mr-4">→</span>
              {t.hero.description}
            </p>
          </motion.div>
        </div>

        {/* Bottom row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 1.2 }}
          className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between"
        >
          <p className="max-w-sm text-sm leading-relaxed text-white/30">
            {t.hero.about}
          </p>
          <a
            href="#contact"
            className="group flex items-center gap-3 rounded-lg border border-accent/50 bg-accent/10 px-8 py-4 text-sm font-medium uppercase tracking-wider text-white transition-all hover:bg-accent hover:shadow-[0_0_40px_rgba(168,85,247,0.3)]"
          >
            <span className="text-accent group-hover:text-white transition-colors">→</span>
            {t.hero.ctaButton}
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
