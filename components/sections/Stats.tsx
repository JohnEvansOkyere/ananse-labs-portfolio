"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { stats } from "@/config/site";

// Each stat gets a unique background color for visual variety.
// Indexed with a modulo so adding a stat can never yield an undefined class.
const statColors = [
  "bg-[#F7F4EF]", // cream (default)
  "bg-[#E74C3C]", // warm red (accent)
  "bg-[#F7F4EF]", // cream
  "bg-[#F7F4EF]", // cream
  "bg-[#101010]", // ink
];

const statTextColors = [
  "text-black",
  "text-white",
  "text-black",
  "text-black",
  "text-[#F7F4EF]",
];

const statSubColors = [
  "text-black/40",
  "text-white/60",
  "text-black/40",
  "text-black/40",
  "text-[#F7F4EF]/50",
];

function AnimatedNumber({ value }: { value: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    if (!isInView) return;

    const numericPart = parseInt(value.replace(/[^0-9]/g, ""));
    const suffix = value.replace(/[0-9]/g, "");
    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += numericPart / steps;
      if (current >= numericPart) {
        current = numericPart;
        clearInterval(timer);
      }
      setDisplayValue(Math.floor(current) + suffix);
    }, stepDuration);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return <span ref={ref}>{displayValue}</span>;
}

export default function Stats() {
  return (
    <section className="relative bg-[#F7F4EF] section-space">
      <div className="site-container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="mx-auto mb-9 max-w-3xl text-center sm:mb-14 lg:mb-16"
        >
          <span className="section-kicker justify-center text-black/40">
            Track record
          </span>
          <h2 className="mt-5 text-balance font-[var(--font-syne)] text-4xl font-bold leading-[1.08] tracking-[-0.04em] text-black sm:mt-6 sm:text-5xl">
            Proof, at a glance.
          </h2>
        </motion.div>

        <div className="-mx-4 flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 pb-3 sm:mx-0 sm:grid sm:grid-cols-2 sm:gap-4 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-5">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6, scale: 1.01 }}
              className={`surface-card flex min-h-[165px] min-w-[72vw] snap-center flex-col items-center justify-center rounded-3xl border border-black/[0.06] p-6 text-center sm:min-h-[240px] sm:min-w-0 sm:p-8 lg:p-8 ${statColors[i % statColors.length]}`}
            >
              <div className={`font-[var(--font-syne)] text-5xl sm:text-6xl lg:text-[3.75rem] font-bold ${statTextColors[i % statTextColors.length]} leading-none`}>
                <AnimatedNumber value={stat.value} />
              </div>
              <p className={`mt-4 max-w-[14rem] text-xs uppercase leading-5 tracking-[0.13em] sm:mt-6 sm:leading-6 ${statSubColors[i % statSubColors.length]}`}>
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
