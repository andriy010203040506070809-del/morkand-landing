"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { useT } from "@/i18n/context";

const socials = [
  { name: "Instagram", icon: "IG" },
  { name: "Telegram", icon: "TG" },
  { name: "LinkedIn", icon: "IN" },
];

export function Footer() {
  const t = useT();
  const [year, setYear] = useState(2026);
  useEffect(() => { setYear(new Date().getFullYear()); }, []);

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });

  const lineWidth = useTransform(scrollYProgress, [0, 0.5], ["0%", "100%"]);
  const textY = useTransform(scrollYProgress, [0.1, 0.6], [80, 0]);
  const textOpacity = useTransform(scrollYProgress, [0.1, 0.5], [0, 1]);

  return (
    <footer ref={ref} className="relative overflow-hidden bg-[#030303]">
      {/* Animated glowing separator */}
      <div className="relative h-[1px] overflow-hidden">
        <motion.div
          className="h-full"
          style={{
            width: lineWidth,
            background: "linear-gradient(90deg, transparent, #a855f7, #6366f1, #a855f7, transparent)",
            margin: "0 auto",
          }}
        />
      </div>

      {/* Giant MORKAND text — outline style */}
      <div className="relative pt-20 pb-8 overflow-hidden">
        <motion.div
          className="flex justify-center select-none"
          style={{ y: textY, opacity: textOpacity }}
        >
          <h2
            className="text-[clamp(4rem,15vw,14rem)] font-bold tracking-[-0.06em] uppercase leading-none whitespace-nowrap"
            style={{
              WebkitTextStroke: "1.5px rgba(168, 85, 247, 0.25)",
              color: "transparent",
            }}
          >
            MOR
            <span
              style={{
                WebkitTextStroke: "1.5px rgba(168, 85, 247, 0.5)",
                color: "transparent",
              }}
            >
              KAND
            </span>
          </h2>
        </motion.div>

        {/* Glow behind text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[200px] rounded-full bg-purple-500/[0.04] blur-[100px] pointer-events-none" />
      </div>

      {/* Main footer content */}
      <div className="relative mx-auto max-w-7xl px-6 sm:px-12 md:px-20 pb-20">
        <div className="grid gap-16 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          {/* Brand column */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-2xl font-bold tracking-tighter uppercase">
              MOR<span className="text-accent">KAND</span>
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/25">
              {t.footer.description}
            </p>

            {/* Social icons */}
            <div className="mt-8 flex gap-3">
              {socials.map((s, i) => (
                <motion.a
                  key={s.name}
                  href="#"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="group flex h-10 w-10 items-center justify-center rounded-lg border border-white/[0.06] bg-white/[0.02] text-[10px] font-bold tracking-wider text-white/30 transition-all hover:border-accent/30 hover:bg-accent/10 hover:text-accent"
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <h4 className="text-[10px] font-semibold uppercase tracking-[0.35em] text-white/30 mb-6">
              {t.footer.navTitle}
            </h4>
            <ul className="space-y-3">
              {t.footer.navLinks.map((link, i) => (
                <motion.li
                  key={link.label}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.06 }}
                >
                  <a
                    href={link.href}
                    className="group flex items-center gap-2 text-sm text-white/25 transition-colors hover:text-white/60"
                  >
                    <span className="h-[1px] w-0 bg-accent transition-all group-hover:w-3" />
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h4 className="text-[10px] font-semibold uppercase tracking-[0.35em] text-white/30 mb-6">
              {t.footer.servicesTitle}
            </h4>
            <ul className="space-y-3">
              {t.footer.services.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.35 + i * 0.06 }}
                >
                  <a
                    href="#services"
                    className="group flex items-center gap-2 text-sm text-white/25 transition-colors hover:text-white/60"
                  >
                    <span className="h-[1px] w-0 bg-accent transition-all group-hover:w-3" />
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h4 className="text-[10px] font-semibold uppercase tracking-[0.35em] text-white/30 mb-6">
              {t.footer.contactTitle}
            </h4>
            <ul className="space-y-4 text-sm text-white/25">
              <li>
                <a href="tel:+380XXXXXXXXX" className="transition-colors hover:text-white/60">
                  +380 XX XXX XX XX
                </a>
              </li>
              <li>
                <a href="mailto:hello@morkand.com" className="transition-colors hover:text-white/60">
                  hello@morkand.com
                </a>
              </li>
              <li className="text-white/15">{t.footer.country}</li>
            </ul>

            {/* CTA mini */}
            <motion.a
              href="#contact"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="mt-8 inline-flex items-center gap-2 rounded-lg border border-accent/20 bg-accent/5 px-5 py-2.5 text-xs font-medium uppercase tracking-wider text-accent/70 transition-all hover:border-accent/40 hover:bg-accent/10 hover:text-accent"
            >
              <span>→</span>
              {t.footer.ctaButton}
            </motion.a>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <div className="mt-20 h-[1px] w-full bg-gradient-to-r from-transparent via-white/[0.04] to-transparent" />

          <div className="mt-6 flex flex-col items-center justify-between gap-4 sm:flex-row">
            <span className="text-[11px] text-white/15 tracking-wider">
              &copy; {year} MORKAND. {t.footer.copyright}
            </span>
            <div className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-green-500/50 animate-pulse" />
              <span className="text-[11px] text-white/15 tracking-wider">
                {t.footer.status}
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
