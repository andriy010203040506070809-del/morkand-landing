"use client";

import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { useT } from "@/i18n/context";

export function FooterArt() {
  const t = useT();
  const words = t.footerArt.words;
  const ref = useRef(null);
  const [wordIndex, setWordIndex] = useState(0);
  const [inView, setInView] = useState(false);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.3]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.85, 1, 1, 0.95]);

  useEffect(() => {
    if (!inView) return;
    const interval = setInterval(() => {
      setWordIndex((i) => (i + 1) % words.length);
    }, 500);
    return () => clearInterval(interval);
  }, [inView]);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden flex items-center justify-center"
      style={{ height: "100vh", minHeight: 600 }}
    >
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-purple-500/[0.04] blur-[150px]" />

      {/* Dot grid */}
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(rgba(168, 85, 247, 0.06) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
          opacity,
        }}
      />

      {/* SVG geometric animation — same as preloader */}
      <motion.div
        style={{ opacity, scale }}
        onViewportEnter={() => setInView(true)}
        onViewportLeave={() => setInView(false)}
        className="relative"
      >
        <div
          style={{
            width: "min(90vw, 620px)",
            height: "min(90vw, 620px)",
            overflow: "visible",
            position: "relative",
          }}
        >
          <svg
            viewBox="0 0 400 400"
            fill="none"
            overflow="visible"
            style={{ width: "100%", height: "100%", opacity: 0.45 }}
          >
            {/* Outer rotating square */}
            <motion.rect
              x="40" y="40" width="320" height="320" rx="20"
              stroke="url(#footGrad)" strokeWidth="1.5"
              initial={{ pathLength: 0, rotate: 0 }}
              whileInView={{ pathLength: 1, rotate: 360 }}
              viewport={{ once: false }}
              transition={{
                pathLength: { duration: 2, ease: "easeInOut" },
                rotate: { duration: 8, ease: "linear", repeat: Infinity },
              }}
              style={{ originX: "50%", originY: "50%" }}
            />
            {/* Inner rotating square (opposite) */}
            <motion.rect
              x="80" y="80" width="240" height="240" rx="12"
              stroke="url(#footGrad)" strokeWidth="0.8" strokeDasharray="6 4"
              initial={{ pathLength: 0, rotate: 0 }}
              whileInView={{ pathLength: 1, rotate: -360 }}
              viewport={{ once: false }}
              transition={{
                pathLength: { duration: 1.8, ease: "easeInOut", delay: 0.2 },
                rotate: { duration: 12, ease: "linear", repeat: Infinity },
              }}
              style={{ originX: "50%", originY: "50%" }}
            />
            {/* Circle large */}
            <motion.circle
              cx="200" cy="200" r="80"
              stroke="url(#footGrad)" strokeWidth="1.2"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 1.5, ease: "easeInOut", delay: 0.4 }}
            />
            {/* Circle small dashed */}
            <motion.circle
              cx="200" cy="200" r="50"
              stroke="url(#footGrad)" strokeWidth="0.8" strokeDasharray="3 5"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 1.2, ease: "easeInOut", delay: 0.6 }}
            />
            {/* Cross lines */}
            <motion.line x1="200" y1="60" x2="200" y2="340" stroke="#a855f7" strokeWidth="0.6" opacity="0.7" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: false }} transition={{ duration: 1, delay: 0.5 }} />
            <motion.line x1="60" y1="200" x2="340" y2="200" stroke="#a855f7" strokeWidth="0.6" opacity="0.7" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: false }} transition={{ duration: 1, delay: 0.6 }} />
            {/* Diagonal lines */}
            <motion.line x1="100" y1="100" x2="300" y2="300" stroke="#a855f7" strokeWidth="0.5" opacity="0.5" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: false }} transition={{ duration: 0.8, delay: 0.8 }} />
            <motion.line x1="300" y1="100" x2="100" y2="300" stroke="#a855f7" strokeWidth="0.5" opacity="0.5" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: false }} transition={{ duration: 0.8, delay: 0.9 }} />
            {/* Node dots */}
            {[[200,120],[280,200],[200,280],[120,200],[145,145],[255,145],[255,255],[145,255]].map(([cx,cy],i) => (
              <motion.circle
                key={i} cx={cx} cy={cy} r="4" fill="#a855f7"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 0.8, scale: 1 }}
                viewport={{ once: false }}
                transition={{ delay: 0.8 + i * 0.08, duration: 0.3 }}
              />
            ))}
            {/* Center glow dot */}
            <motion.circle
              cx="200" cy="200" r="8" fill="#a855f7"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: [0,1,0.7,1], scale: [0,1.3,0.9,1] }}
              viewport={{ once: false }}
              transition={{ delay: 0.5, duration: 1.5 }}
            />
            {/* Corner circuit lines */}
            {["M140 140 L110 110 L110 60","M260 140 L290 110 L340 110","M260 260 L290 290 L290 340","M140 260 L110 290 L60 290"].map((d,i) => (
              <motion.path
                key={i} d={d} stroke="#a855f7" strokeWidth="1" fill="none" opacity="0.6"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: false }}
                transition={{ delay: 1.2 + i * 0.1, duration: 0.6 }}
              />
            ))}
            <defs>
              <linearGradient id="footGrad" x1="0" y1="0" x2="400" y2="400">
                <stop offset="0%" stopColor="#a855f7" />
                <stop offset="100%" stopColor="#6366f1" />
              </linearGradient>
            </defs>
          </svg>

          {/* Cycling words in the center */}
          <div
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
            style={{ zIndex: 2 }}
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={words[wordIndex]}
                className="font-bold uppercase tracking-tighter text-center"
                style={{
                  fontSize: "clamp(1.8rem, 6vw, 3.5rem)",
                  color: "white",
                  textShadow: "0 0 60px rgba(168, 85, 247, 0.6), 0 0 120px rgba(168, 85, 247, 0.2)",
                  willChange: "transform, opacity",
                }}
                initial={{ opacity: 0, scale: 0.3 }}
                animate={{ opacity: 1, scale: [1.15, 1] }}
                exit={{ opacity: 0, scale: 2 }}
                transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
              >
                {words[wordIndex]}
              </motion.span>
            </AnimatePresence>
          </div>
        </div>
      </motion.div>

      {/* Bottom gradient fade into footer */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#030303] to-transparent" />
      {/* Top gradient fade */}
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-[#030303] to-transparent" />
    </section>
  );
}
