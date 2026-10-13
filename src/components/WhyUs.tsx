"use client";

import { motion } from "framer-motion";
import { useT } from "@/i18n/context";

export function WhyUs() {
  const t = useT();

  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute top-1/2 right-0 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-purple-500/5 blur-[200px]" />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-12 md:px-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-16"
        >
          <span className="h-2 w-2 rounded-full bg-accent" />
          <span className="text-xs uppercase tracking-[0.3em] text-white/40">{t.whyUs.badge}</span>
        </motion.div>

        <div className="grid gap-16 lg:grid-cols-[1fr_1fr] lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:sticky lg:top-32"
          >
            <h2 className="text-[clamp(2.5rem,6vw,5.5rem)] font-bold leading-[0.95] tracking-tighter uppercase">
              {t.whyUs.title1}
              <br />
              <span className="text-accent">{t.whyUs.title2}</span>
            </h2>
            <p className="mt-8 text-lg leading-relaxed text-white/30 max-w-md">
              {t.whyUs.subtitle}
            </p>
          </motion.div>

          <div className="space-y-6">
            {t.whyUs.items.map((reason, i) => (
              <motion.div
                key={reason.id}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.6 }}
                className="group flex gap-6 rounded-2xl border border-white/5 bg-[#050505] p-6 transition-colors hover:bg-[#0a0a0a] sm:p-8"
              >
                <span className="font-mono text-xs text-accent/40 pt-1">{reason.id}</span>
                <div>
                  <h3 className="text-lg font-bold tracking-tight sm:text-xl">{reason.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/30">{reason.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
