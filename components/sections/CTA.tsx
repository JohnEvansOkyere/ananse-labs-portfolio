"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function CTA() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#F5A623]/[0.02] to-transparent pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#F5A623]/[0.04] rounded-full blur-[150px] pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-[var(--font-syne)] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-6">
            {siteConfig.ctaHeadline.split("something")[0]}
            <span className="gradient-text">something real</span>?
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base lg:text-lg text-[#888] max-w-xl mx-auto mb-10 leading-relaxed"
        >
          {siteConfig.ctaSubtext}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col items-center gap-4"
        >
          <a
            href={siteConfig.calendly}
            id="cta-book-call"
            className="group inline-flex items-center gap-2 px-10 py-5 text-base font-semibold bg-[#F5A623] text-[#0a0a0a] rounded-full hover:bg-[#e6991e] transition-all duration-300 hover:shadow-[0_0_40px_rgba(245,166,35,0.3)] glow"
          >
            {siteConfig.ctaBooking}
            <ArrowUpRight
              size={16}
              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
            />
          </a>
          <p className="text-xs text-[#888] mt-2">
            <span className="text-[#F5A623]">●</span>{" "}
            {siteConfig.ctaAvailability}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
