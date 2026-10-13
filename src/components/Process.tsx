"use client";

import { motion } from "framer-motion";
import { useT } from "@/i18n/context";

export function Process() {
  const t = useT();

  return (
    <section id="process" className="relative py-32 overflow-hidden dot-grid">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[600px] w-[600px] rounded-full bg-purple-500/5 blur-[200px]" />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-12 md:px-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-16"
        >
          <span className="h-2 w-2 rounded-full bg-accent" />
          <span className="text-xs uppercase tracking-[0.3em] text-white/40">{t.process.badge}</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-[clamp(2.5rem,6vw,5.5rem)] font-bold leading-[0.95] tracking-tighter uppercase mb-24"
        >
          {t.process.title1}
          <br />
          <span className="text-accent">{t.process.title2}</span>
        </motion.h2>

        <div className="grid gap-0 sm:grid-cols-2 lg:grid-cols-4">
          {t.process.steps.map((step, i) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.7 }}
              className="group relative border-l border-white/5 pl-8 pb-16 sm:pb-0"
            >
              <div className="absolute top-0 left-0 h-3 w-3 -translate-x-[7px] rounded-full border-2 border-accent bg-[#050505] transition-colors group-hover:bg-accent" />

              {i < t.process.steps.length - 1 && (
                <div className="absolute top-3 left-0 bottom-0 w-px bg-gradient-to-b from-accent/20 to-transparent sm:hidden" />
              )}

              <span className="font-mono text-xs text-accent/50">{step.id}</span>

              <h3 className="mt-4 text-2xl font-bold tracking-tight sm:text-3xl">
                {step.title}
              </h3>

              <p className="mt-4 text-sm leading-relaxed text-white/30 max-w-xs">
                {step.description}
              </p>

              <span className="mt-4 inline-block rounded-full border border-white/10 px-3 py-1 text-[10px] uppercase tracking-widest text-white/20">
                {step.duration}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
