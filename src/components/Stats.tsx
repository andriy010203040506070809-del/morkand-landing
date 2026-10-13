"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect, type ReactNode } from "react";
import { useT } from "@/i18n/context";

function AnimatedNumber({ target, suffix = "" }: { target: number; suffix?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [isInView, target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

const icons: ReactNode[] = [
  <svg key="0" viewBox="0 0 60 60" fill="none" className="h-16 w-16 text-accent/30">
    <rect x="10" y="15" width="40" height="30" rx="4" stroke="currentColor" strokeWidth="1" />
    <line x1="10" y1="25" x2="50" y2="25" stroke="currentColor" strokeWidth="1" />
    <circle cx="16" cy="20" r="2" fill="currentColor" />
    <circle cx="22" cy="20" r="2" fill="currentColor" />
  </svg>,
  <svg key="1" viewBox="0 0 60 60" fill="none" className="h-16 w-16 text-accent/30">
    <circle cx="30" cy="30" r="20" stroke="currentColor" strokeWidth="1" />
    <path d="M30 15 L30 30 L40 35" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>,
  <svg key="2" viewBox="0 0 60 60" fill="none" className="h-16 w-16 text-accent/30">
    <path d="M10 45 L20 30 L30 35 L42 15 L50 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="50" cy="22" r="4" stroke="currentColor" strokeWidth="1" />
  </svg>,
  <svg key="3" viewBox="0 0 60 60" fill="none" className="h-16 w-16 text-accent/30">
    <circle cx="22" cy="22" r="8" stroke="currentColor" strokeWidth="1" />
    <circle cx="38" cy="22" r="8" stroke="currentColor" strokeWidth="1" />
    <path d="M10 45 C10 35, 20 30, 30 35 C40 30, 50 35, 50 45" stroke="currentColor" strokeWidth="1" />
  </svg>,
];

export function Stats() {
  const t = useT();

  return (
    <section className="relative border-y border-white/5 py-24 dot-grid">
      <div className="mx-auto max-w-7xl px-6 sm:px-12 md:px-20">
        <div className="grid grid-cols-2 gap-px bg-white/5 overflow-hidden rounded-2xl border border-white/5 lg:grid-cols-4">
          {t.stats.items.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="group relative bg-[#050505] p-8 transition-colors hover:bg-[#0a0a0a] sm:p-10"
            >
              <div className="absolute top-6 right-6 opacity-0 transition-opacity group-hover:opacity-100">
                {icons[i]}
              </div>
              <div className="text-4xl font-bold tracking-tight sm:text-5xl">
                <AnimatedNumber target={stat.value} suffix={stat.suffix} />
              </div>
              <div className="mt-3 text-sm text-white/30">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
