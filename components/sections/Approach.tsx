"use client";

import { motion } from "framer-motion";
import { processSteps } from "@/config/site";

export default function Approach() {
  return (
    <section className="relative py-24 lg:py-32" id="approach">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.01] to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-16 lg:mb-20"
        >
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-[#F5A623] mb-4 block">
            Process
          </span>
          <h2 className="font-[var(--font-syne)] text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.1]">
            How We Work
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {processSteps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group relative p-8 lg:p-12 border border-white/[0.04] hover:bg-white/[0.02] transition-all duration-500"
              id={`approach-step-${step.number}`}
            >
              {/* Step number */}
              <span className="font-[var(--font-syne)] text-6xl lg:text-7xl font-bold text-white/[0.04] group-hover:text-[#F5A623]/10 transition-colors duration-500 absolute top-6 right-8">
                {step.number}
              </span>

              <div className="relative">
                {/* Number badge */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-10 h-10 rounded-full border border-[#F5A623]/20 flex items-center justify-center">
                    <span className="text-xs font-bold text-[#F5A623] font-[var(--font-syne)]">
                      {step.number}
                    </span>
                  </div>
                  <div className="h-[1px] flex-1 bg-gradient-to-r from-[#F5A623]/20 to-transparent" />
                </div>

                <h3 className="font-[var(--font-syne)] text-xl lg:text-2xl font-bold text-white mb-4 group-hover:text-[#F5A623] transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-sm lg:text-base text-[#888] leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
