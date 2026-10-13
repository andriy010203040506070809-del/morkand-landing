"use client";

import { motion } from "framer-motion";
import { FadeInUp } from "./Motion";
import { useT } from "@/i18n/context";

export function About() {
  const t = useT();

  return (
    <section className="relative min-h-screen overflow-hidden py-32">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-purple-500/5 blur-[200px]" />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-12 md:px-20">
        <FadeInUp>
          <div className="flex items-center gap-3 mb-12">
            <span className="h-2 w-2 rounded-full bg-accent" />
            <span className="text-xs uppercase tracking-[0.3em] text-white/40">{t.about.badge}</span>
          </div>
        </FadeInUp>

        <FadeInUp delay={0.2}>
          <h2 className="text-[clamp(2rem,5vw,4.5rem)] font-bold leading-[1.1] tracking-tight max-w-5xl">
            {t.about.title}{" "}
            <span className="text-accent">{t.about.titleAccent}</span>{" "}
            {t.about.titleEnd}
          </h2>
        </FadeInUp>

        <div className="circuit-line mt-16" />

        <div className="mt-16 grid gap-16 lg:grid-cols-2">
          <FadeInUp delay={0.3}>
            <p className="text-lg leading-relaxed text-white/40">
              <span className="text-accent mr-3">→</span>
              {t.about.text1}
            </p>
          </FadeInUp>

          <FadeInUp delay={0.4}>
            <p className="text-lg leading-relaxed text-white/40">
              {t.about.text2}
            </p>
          </FadeInUp>
        </div>

        {/* Large floating text */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-32"
        >
          <div className="text-[clamp(3rem,8vw,8rem)] font-bold leading-[0.9] tracking-tighter uppercase text-white/[0.03]">
            RESEARCH
            <br />
            DESIGN
            <br />
            DEVELOP
            <br />
            GROW
          </div>
        </motion.div>
      </div>
    </section>
  );
}
