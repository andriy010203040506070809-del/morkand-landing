"use client";

import { motion } from "framer-motion";
import { useT } from "@/i18n/context";

const techRows = [
  ["Next.js", "React", "WordPress", "Figma", "Tailwind CSS", "TypeScript"],
  ["Google Ads", "Google Analytics", "Tag Manager", "Search Console", "Ahrefs", "Semrush"],
];

export function Technologies() {
  const t = useT();
  return (
    <section className="relative py-24 overflow-hidden border-y border-white/5">
      <div className="mx-auto max-w-7xl px-6 sm:px-12 md:px-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-between mb-12"
        >
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-accent" />
            <span className="text-xs uppercase tracking-[0.3em] text-white/40">{t.technologies.badge}</span>
          </div>
          <span className="text-xs uppercase tracking-[0.3em] text-white/20 hidden sm:block">{t.technologies.subtitle}</span>
        </motion.div>

        <div className="space-y-4">
          {techRows.map((row, ri) => (
            <motion.div
              key={ri}
              initial={{ opacity: 0, x: ri % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: ri * 0.15, duration: 0.6 }}
              className="flex flex-wrap gap-3"
            >
              {row.map((tech) => (
                <span
                  key={tech}
                  className="rounded-xl border border-white/5 bg-[#050505] px-5 py-3 text-sm font-medium text-white/30 transition-all hover:border-accent/20 hover:text-white/60"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
