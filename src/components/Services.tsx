"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useT } from "@/i18n/context";

export function Services() {
  const t = useT();
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="services" className="relative py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 sm:px-12 md:px-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-16"
        >
          <span className="h-2 w-2 rounded-full bg-accent" />
          <span className="text-xs uppercase tracking-[0.3em] text-white/40">{t.services.badge}</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-[clamp(2.5rem,6vw,5.5rem)] font-bold leading-[0.95] tracking-tighter uppercase mb-20"
        >
          {t.services.title1}
          <br />
          <span className="text-accent">{t.services.title2}</span>
        </motion.h2>

        <div className="space-y-px">
          {t.services.items.map((s, i) => (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
              className="group relative border-t border-white/5 cursor-pointer transition-colors hover:bg-white/[0.02]"
            >
              <div className="flex items-start gap-6 py-10 sm:py-12 sm:items-center">
                <span className="font-mono text-xs text-accent/40 pt-1 sm:pt-0">{s.id}</span>

                <div className="flex-1 grid gap-4 sm:grid-cols-[1fr_1fr] sm:items-center lg:grid-cols-[2fr_3fr_1fr]">
                  <h3 className="text-2xl font-bold leading-tight tracking-tight whitespace-pre-line sm:text-3xl lg:text-4xl">
                    {s.title}
                  </h3>

                  <motion.div
                    initial={false}
                    animate={{ opacity: active === i ? 1 : 0.4 }}
                    className="space-y-3"
                  >
                    <p className="text-sm leading-relaxed text-white/40 max-w-md">
                      {s.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {s.tags.map((tag) => (
                        <span key={tag} className="rounded-full border border-white/10 px-3 py-1 text-[10px] uppercase tracking-widest text-white/30">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>

                  <div className="hidden lg:flex justify-end">
                    <span className="text-6xl font-bold tracking-tighter text-white/[0.03] transition-colors group-hover:text-accent/10">
                      {s.short}
                    </span>
                  </div>
                </div>

                <div className="hidden sm:block">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/20 transition-all group-hover:border-accent/50 group-hover:text-accent">
                    →
                  </span>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/0 to-transparent transition-all group-hover:via-accent/30" />
            </motion.div>
          ))}
          <div className="border-t border-white/5" />
        </div>
      </div>
    </section>
  );
}
