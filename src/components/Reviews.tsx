"use client";

import { motion } from "framer-motion";
import { useT } from "@/i18n/context";

export function Reviews() {
  const t = useT();

  return (
    <section id="reviews" className="relative py-32 overflow-hidden border-y border-white/5">
      <div className="mx-auto max-w-7xl px-6 sm:px-12 md:px-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-16"
        >
          <span className="h-2 w-2 rounded-full bg-accent" />
          <span className="text-xs uppercase tracking-[0.3em] text-white/40">{t.reviews.badge}</span>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-1"
          >
            <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-bold leading-[0.95] tracking-tighter uppercase">
              {t.reviews.title1}
              <br />
              <span className="text-accent">{t.reviews.title2}</span>
            </h2>
            <p className="mt-6 text-sm leading-relaxed text-white/30 max-w-sm">
              {t.reviews.subtitle}
            </p>
          </motion.div>

          <div className="lg:col-span-2 space-y-4">
            {t.reviews.items.map((review, i) => (
              <motion.div
                key={review.name}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="group relative rounded-2xl border border-white/5 bg-[#050505] p-8 transition-colors hover:bg-[#0a0a0a] sm:p-10"
              >
                <div className="flex items-start gap-6">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-accent/20 bg-accent/5 text-lg font-bold text-accent">
                    {review.initial}
                  </div>

                  <div className="flex-1">
                    <p className="text-[15px] leading-relaxed text-white/50">
                      &ldquo;{review.text}&rdquo;
                    </p>
                    <div className="mt-4 flex items-center gap-3">
                      <span className="text-sm font-medium">{review.name}</span>
                      <span className="h-1 w-1 rounded-full bg-white/20" />
                      <span className="text-xs text-white/30">{review.role}</span>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/0 to-transparent transition-all group-hover:via-accent/30" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
