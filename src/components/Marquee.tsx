"use client";

import { useT } from "@/i18n/context";

export function Marquee() {
  const t = useT();
  const items = t.marquee;

  return (
    <div className="relative overflow-hidden border-y border-white/5 py-6">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...items, ...items, ...items, ...items].map((item, i) => (
          <span
            key={i}
            className="mx-8 text-sm font-medium uppercase tracking-[0.3em] text-white/10"
          >
            {item}
            <span className="ml-8 text-accent/30">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
