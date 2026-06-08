"use client";

import { marqueeItems } from "@/config/site";

export default function Marquee() {
  const items = [...marqueeItems, ...marqueeItems];

  return (
    <section className="relative py-6 overflow-hidden border-y border-white/[0.06]">
      {/* Gradient fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10 pointer-events-none" />

      <div className="animate-marquee flex items-center whitespace-nowrap">
        {items.map((item, i) => (
          <span key={i} className="flex items-center">
            <span className="text-sm font-medium text-white/40 mx-6 uppercase tracking-[0.15em]">
              {item}
            </span>
            <span className="text-[#F5A623]/40 text-xs">◆</span>
          </span>
        ))}
      </div>
    </section>
  );
}
