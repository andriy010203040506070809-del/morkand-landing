"use client";

import { motion } from "framer-motion";
import { useT } from "@/i18n/context";

export function Problems() {
  const t = useT();
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 sm:px-12 md:px-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-16"
        >
          <span className="h-2 w-2 rounded-full bg-accent" />
          <span className="text-xs uppercase tracking-[0.3em] text-white/40">{t.problems.badge}</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-[clamp(2.5rem,6vw,5.5rem)] font-bold leading-[0.95] tracking-tighter uppercase mb-20"
        >
          {t.problems.title1}
          <br />
          <span className="text-accent">{t.problems.title2}</span>
        </motion.h2>

        <div className="grid gap-px bg-white/5 rounded-2xl overflow-hidden border border-white/5 sm:grid-cols-2 lg:grid-cols-4">
          {t.problems.items.map((p, i) => (
            <motion.div
              key={p.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="group relative bg-[#050505] p-8 transition-all hover:bg-[#0a0a0a] sm:p-10"
            >
              <span className="font-mono text-xs text-accent/50">{p.number}</span>
              <h3 className="mt-4 text-2xl font-bold leading-tight tracking-tight whitespace-pre-line sm:text-3xl">
                {p.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-white/30">
                {p.description}
              </p>
              {/* Hover glow */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/0 to-transparent transition-all group-hover:via-accent/40" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
