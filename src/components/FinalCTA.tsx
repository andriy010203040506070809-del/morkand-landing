"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useT } from "@/i18n/context";

export function FinalCTA() {
  const t = useT();
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" className="relative min-h-screen flex items-center py-32 overflow-hidden dot-grid">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 left-[30%] h-[150%] w-[2px] rotate-[35deg] bg-gradient-to-b from-transparent via-purple-500/15 to-transparent" />
        <div className="absolute -top-20 right-[20%] h-[150%] w-[1px] rotate-[35deg] bg-gradient-to-b from-transparent via-purple-500/10 to-transparent" />
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-purple-500/5 blur-[200px]" />

      <div className="relative mx-auto max-w-7xl w-full px-6 sm:px-12 md:px-20">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-12"
            >
              <span className="flex h-2 w-2">
                <span className="absolute inline-flex h-2 w-2 animate-ping rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              <span className="text-xs uppercase tracking-[0.3em] text-white/40">{t.finalCta.badge}</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-[clamp(2.5rem,6vw,5.5rem)] font-bold leading-[0.95] tracking-tighter uppercase"
            >
              {t.finalCta.title1}
              <br />
              <span className="text-accent">{t.finalCta.title2}</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-8 text-lg leading-relaxed text-white/40 max-w-md"
            >
              {t.finalCta.subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-12 text-[clamp(3rem,8vw,7rem)] font-bold leading-[0.85] tracking-tighter uppercase text-white/[0.03]"
            >
              LET&apos;S
              <br />
              TALK
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center rounded-2xl border border-accent/20 bg-accent/5 p-12 text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", delay: 0.2 }}
                    className="flex h-16 w-16 items-center justify-center rounded-full border border-accent/30 bg-accent/10"
                  >
                    <svg className="h-8 w-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </motion.div>
                  <h3 className="mt-6 text-2xl font-bold">{t.finalCta.successTitle}</h3>
                  <p className="mt-3 text-white/40">
                    {t.finalCta.successText}
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-5 rounded-2xl border border-white/5 bg-[#050505] p-8 sm:p-10"
                >
                  {[
                    { id: "name", label: t.finalCta.formName, type: "text", placeholder: t.finalCta.formNamePlaceholder },
                    { id: "phone", label: t.finalCta.formPhone, type: "tel", placeholder: t.finalCta.formPhonePlaceholder },
                  ].map((field) => (
                    <div key={field.id} className="relative">
                      <label
                        htmlFor={field.id}
                        className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                          focused === field.id
                            ? "-top-2.5 text-xs text-accent bg-[#050505] px-1"
                            : "top-4 text-sm text-white/30"
                        }`}
                      >
                        {field.label}
                      </label>
                      <input
                        id={field.id}
                        name={field.id}
                        type={field.type}
                        required
                        onFocus={() => setFocused(field.id)}
                        onBlur={(e) => !e.target.value && setFocused(null)}
                        className="w-full rounded-xl border border-white/10 bg-transparent px-4 py-4 text-white outline-none transition-all focus:border-accent/50 focus:shadow-[0_0_20px_rgba(168,85,247,0.1)]"
                      />
                    </div>
                  ))}

                  <div className="relative">
                    <label
                      htmlFor="message"
                      className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                        focused === "message"
                          ? "-top-2.5 text-xs text-accent bg-[#050505] px-1"
                          : "top-4 text-sm text-white/30"
                      }`}
                    >
                      {t.finalCta.formMessage}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      onFocus={() => setFocused("message")}
                      onBlur={(e) => !e.target.value && setFocused(null)}
                      className="w-full resize-none rounded-xl border border-white/10 bg-transparent px-4 py-4 text-white outline-none transition-all focus:border-accent/50 focus:shadow-[0_0_20px_rgba(168,85,247,0.1)]"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="group relative w-full overflow-hidden rounded-xl border border-accent/50 bg-accent/10 py-4 text-lg font-semibold uppercase tracking-wider text-white transition-all hover:bg-accent hover:shadow-[0_0_40px_rgba(168,85,247,0.3)]"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-3">
                      <span className="text-accent group-hover:text-white transition-colors">→</span>
                      {t.finalCta.formButton}
                    </span>
                  </motion.button>

                  <p className="text-center text-xs text-white/20">
                    {t.finalCta.formNote}
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
