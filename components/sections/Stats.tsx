"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { stats } from "@/config/site";

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
    <section className="relative py-20 lg:py-24">
      {/* Border lines */}
      <div className="line-separator" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center lg:border-r last:border-r-0 border-white/[0.06]"
            >
              <div className="font-[var(--font-syne)] text-4xl sm:text-5xl lg:text-6xl font-bold gradient-text mb-3">
                <AnimatedNumber value={stat.value} />
              </div>
              <p className="text-xs sm:text-sm text-[#888] uppercase tracking-[0.15em]">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="line-separator" />
    </section>
  );
}
