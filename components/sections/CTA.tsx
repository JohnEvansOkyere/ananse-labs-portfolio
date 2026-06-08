"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-[#F7F4EF] pb-24 lg:pb-36">
      <div className="site-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-[2rem] bg-black px-6 py-16 text-center shadow-[0_30px_100px_rgba(0,0,0,0.18)] sm:px-10 lg:py-24"
        >
          <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#E74C3C]/30 blur-[90px]" />
          <div className="relative mx-auto flex max-w-4xl flex-col items-center">
            <span className="section-kicker justify-center text-[#F7F4EF]/40">
              Start a project
            </span>
            <h2 className="mt-7 text-balance font-[var(--font-syne)] text-4xl font-bold leading-[1.05] tracking-[-0.045em] text-[#F7F4EF] sm:text-5xl lg:text-6xl">
              Ready to turn a good idea into a working system?
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-[#F7F4EF]/50 sm:text-lg">
              {siteConfig.ctaSubtext}
            </p>
            <a
              href={siteConfig.calendly}
              id="cta-pill"
              className="pill-btn pill-btn-hero mt-9"
            >
              <span className="pill-label">{siteConfig.ctaText}</span>
              <span className="pill-arrow">
                <ArrowUpRight size={14} />
              </span>
            </a>
            <p className="mt-5 flex items-center gap-2 text-xs text-[#F7F4EF]/35">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
              {siteConfig.ctaAvailability}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
