"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
import { mentorship, siteConfig } from "@/config/site";

const fadeUp = {
  initial: { opacity: 0, y: 26 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
};

export default function Mentorship() {
  return (
    <section className="relative bg-black section-space" id="mentorship">
      <div className="site-container">
        {/* header */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.7 }}
          className="grid gap-4 sm:gap-6 lg:grid-cols-12 lg:items-end lg:gap-8"
        >
          <div className="lg:col-span-3">
            <span className="section-kicker text-[#F7F4EF]/35">
              {mentorship.kicker}
            </span>
          </div>
          <h2 className="text-balance font-[var(--font-syne)] text-4xl font-bold leading-[1.02] tracking-[-0.045em] text-[#F7F4EF] sm:text-5xl lg:col-span-6 lg:text-7xl">
            {mentorship.headline}
          </h2>
          <p className="max-w-md text-base leading-7 text-[#F7F4EF]/50 sm:text-lg sm:leading-8 lg:col-span-3">
            {mentorship.format}
          </p>
        </motion.div>

        <motion.div
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mt-9 rounded-[1.5rem] border border-white/10 bg-[#0a0a0a] p-6 lg:hidden"
        >
          <div className="flex items-center gap-4">
            <span className="font-[var(--font-syne)] text-5xl font-bold leading-none text-[#E74C3C]">
              {mentorship.seats}
            </span>
            <span className="max-w-[12rem] text-xs font-semibold uppercase leading-5 tracking-[0.12em] text-white/50">
              personal mentorship seats
            </span>
          </div>
          <p className="mt-5 text-base leading-7 text-white/65">
            Weekly, practical coaching on the AI or automation system you are
            actually building—not a generic course.
          </p>
          <a
            href={siteConfig.calendly}
            id="mentorship-mobile-cta"
            className="mt-6 flex min-h-12 w-full items-center justify-center gap-2 rounded-2xl bg-[#E74C3C] px-5 text-sm font-bold text-white"
          >
            {mentorship.ctaText}
            <ArrowUpRight size={15} />
          </a>
        </motion.div>

        <div className="mt-14 hidden gap-4 lg:mt-20 lg:grid lg:grid-cols-12">
          {/* seat counter */}
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-between rounded-[1.75rem] bg-[#E74C3C] p-7 lg:col-span-4 lg:p-9"
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs tracking-[0.14em] text-white/60">
                CURRENT COHORT
              </span>
              <span className="flex h-2.5 w-2.5 items-center justify-center">
                <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-white/80" />
              </span>
            </div>

            <div className="mt-16 lg:mt-24">
              <div className="font-[var(--font-syne)] text-[7rem] font-bold leading-[0.85] tracking-[-0.06em] text-white lg:text-[9rem]">
                {mentorship.seats}
              </div>
              <p className="mt-6 max-w-[15rem] text-sm uppercase leading-6 tracking-[0.14em] text-white/70">
                {mentorship.seatsLabel}
              </p>
            </div>
          </motion.div>

          {/* intro + pillars */}
          <div className="lg:col-span-8">
            <motion.p
              {...fadeUp}
              transition={{ duration: 0.6, delay: 0.06 }}
              className="max-w-2xl text-lg leading-[1.8] text-[#F7F4EF]/70 lg:text-xl"
            >
              {mentorship.intro}
            </motion.p>

            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {mentorship.pillars.map((pillar, i) => (
                <motion.div
                  key={pillar.title}
                  {...fadeUp}
                  transition={{ duration: 0.5, delay: i * 0.07 }}
                  className="rounded-2xl border border-[#F7F4EF]/[0.09] bg-[#0a0a0a] p-6 transition-colors duration-300 hover:border-[#F7F4EF]/20"
                >
                  <span className="font-mono text-[0.7rem] tracking-[0.14em] text-[#F7F4EF]/30">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 font-[var(--font-syne)] text-lg font-bold leading-snug tracking-[-0.02em] text-[#F7F4EF]">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 text-sm leading-[1.75] text-[#F7F4EF]/50">
                    {pillar.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* who it's for + CTA */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-4 hidden gap-8 rounded-[1.75rem] border border-[#F7F4EF]/[0.09] p-7 lg:grid lg:grid-cols-12 lg:items-center lg:gap-10 lg:p-10"
        >
          <div className="lg:col-span-7">
            <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-[#F7F4EF]/40">
              Who it&apos;s for
            </h3>
            <ul className="mt-5 space-y-3">
              {mentorship.who.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check
                    size={16}
                    className="mt-1 flex-shrink-0 text-[#E74C3C]"
                  />
                  <span className="text-base leading-7 text-[#F7F4EF]/75">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col items-start gap-4 lg:col-span-5 lg:items-end lg:text-right">
            <p className="max-w-xs text-sm leading-6 text-[#F7F4EF]/45">
              {mentorship.ctaNote}
            </p>
            <a
              href={siteConfig.calendly}
              id="mentorship-cta"
              className="pill-btn pill-btn-light"
            >
              <span className="pill-label">{mentorship.ctaText}</span>
              <span className="pill-arrow">
                <ArrowUpRight size={14} />
              </span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
