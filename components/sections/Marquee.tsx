"use client";

import { marqueeItems } from "@/config/site";

const tagColors = [
  "bg-amber-400/10 text-amber-300 border-amber-400/25",
  "bg-emerald-400/10 text-emerald-300 border-emerald-400/25",
  "bg-blue-400/10 text-blue-300 border-blue-400/25",
  "bg-purple-400/10 text-purple-300 border-purple-400/25",
  "bg-green-400/10 text-green-300 border-green-400/25",
  "bg-pink-400/10 text-pink-300 border-pink-400/25",
  "bg-cyan-400/10 text-cyan-300 border-cyan-400/25",
  "bg-orange-400/10 text-orange-300 border-orange-400/25",
  "bg-indigo-400/10 text-indigo-300 border-indigo-400/25",
  "bg-rose-400/10 text-rose-300 border-rose-400/25",
  "bg-teal-400/10 text-teal-300 border-teal-400/25",
  "bg-violet-400/10 text-violet-300 border-violet-400/25",
];

export default function Marquee() {
  const items = [...marqueeItems, ...marqueeItems];

  return (
    <section className="relative overflow-hidden bg-black py-9" aria-label="Capabilities">
      {/* Gradient fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

      <div className="animate-marquee flex items-center whitespace-nowrap" style={{ gap: "12px" }}>
        {items.map((item, i) => (
          <span
            key={i}
            className={`inline-flex items-center px-4 py-2 text-xs font-bold rounded-full border tracking-wide uppercase flex-shrink-0 ${tagColors[i % tagColors.length]}`}
          >
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}
