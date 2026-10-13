"use client";

import { motion } from "framer-motion";
import { useT } from "@/i18n/context";

export function Portfolio() {
  const t = useT();

  return (
    <section id="portfolio" className="relative py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 sm:px-12 md:px-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-16"
        >
          <span className="h-2 w-2 rounded-full bg-accent" />
          <span className="text-xs uppercase tracking-[0.3em] text-white/40">{t.portfolio.badge}</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-[clamp(2.5rem,6vw,5.5rem)] font-bold leading-[0.95] tracking-tighter uppercase mb-20"
        >
          {t.portfolio.title1}
          <br />
          <span className="text-accent">{t.portfolio.title2}</span>
        </motion.h2>

        <div className="grid gap-6 lg:grid-cols-3">
          {t.portfolio.projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.7 }}
              className="group relative overflow-hidden rounded-2xl border border-white/5 bg-[#050505] transition-colors hover:bg-[#0a0a0a]"
            >
              {/* Mock browser */}
              <div className="relative h-48 border-b border-white/5 bg-white/[0.01] p-6 sm:h-56">
                <div className="flex gap-1.5 mb-6">
                  <div className="h-2.5 w-2.5 rounded-full bg-white/10" />
                  <div className="h-2.5 w-2.5 rounded-full bg-white/10" />
                  <div className="h-2.5 w-2.5 rounded-full bg-white/10" />
                </div>
                <div className="space-y-3">
                  <div className="h-3 w-3/4 rounded bg-accent/10" />
                  <div className="h-2 w-full rounded bg-white/5" />
                  <div className="h-2 w-5/6 rounded bg-white/5" />
                  <div className="h-2 w-2/3 rounded bg-white/5" />
                  <div className="mt-4 h-8 w-1/3 rounded bg-accent/10" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#050505] to-transparent" />
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-accent/50">{project.category}</span>
                    <h3 className="mt-2 text-2xl font-bold leading-tight tracking-tight whitespace-pre-line sm:text-3xl">
                      {project.title}
                    </h3>
                  </div>
                  <span className="font-mono text-xs text-white/10">{project.id}</span>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.results.map((result) => (
                    <span key={result} className="rounded-full border border-accent/20 bg-accent/5 px-3 py-1.5 text-xs text-accent/70">
                      {result}
                    </span>
                  ))}
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/0 to-transparent transition-all group-hover:via-accent/30" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
