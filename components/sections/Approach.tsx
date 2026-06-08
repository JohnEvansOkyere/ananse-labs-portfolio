"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { processSteps, siteConfig } from "@/config/site";

export default function Approach() {
  return (
    <section className="relative bg-[#F7F4EF] section-space" id="approach">
      <div className="site-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-16 max-w-4xl text-center lg:mb-20"
        >
          <span className="section-kicker justify-center text-black/40">
            Our process
          </span>
          <h2 className="mt-6 text-balance font-[var(--font-syne)] text-4xl font-bold leading-[1.08] tracking-[-0.04em] text-black sm:text-5xl lg:text-6xl">
            Clear from the first call to the final handoff.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-black/55 sm:text-lg">
            We work as an extension of your team, with short feedback loops,
            visible progress, and ownership from architecture to deployment.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="surface-card group relative flex min-h-[310px] flex-col justify-between overflow-hidden rounded-3xl border border-black/[0.06] bg-[#EBE7E0] p-8 transition-colors duration-500 hover:bg-white lg:p-9"
              id={`approach-step-${step.number}`}
            >
              <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-[#E74C3C] transition-transform duration-500 group-hover:scale-x-100" />
              <div>
                <span className="mb-8 block text-sm font-bold text-black/35">
                  {step.number}
                </span>
                <h3 className="mb-4 font-[var(--font-syne)] text-xl font-bold leading-[1.2] text-black lg:text-2xl">
                  {step.title}
                </h3>
              </div>
              <p className="text-sm leading-[1.75] text-black/60">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Centered CTA below steps like verteal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-14 flex justify-center lg:mt-16"
        >
          <a
            href={siteConfig.calendly}
            id="approach-cta"
            className="pill-btn pill-btn-solid"
          >
            <span className="pill-label">Schedule your call</span>
            <span className="pill-arrow">
              <ArrowUpRight size={14} />
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
