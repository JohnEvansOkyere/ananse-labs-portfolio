"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Quote } from "lucide-react";
import type { CaseStudy } from "@/data/case-studies";
import { siteConfig } from "@/config/site";

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
};

/* ─────────────────────────────────────
   Hero
───────────────────────────────────── */
function Hero({ study }: { study: CaseStudy }) {
  const facts = [
    { label: "Client", value: study.client ?? study.clientDescriptor },
    { label: "Sector", value: study.sector },
    { label: "Location", value: study.location },
    { label: "Engagement", value: study.engagement },
    { label: "Duration", value: study.duration },
    { label: "Status", value: study.status },
  ];

  return (
    <section className="relative bg-black pb-16 pt-32 sm:pt-36 lg:pb-24 lg:pt-44">
      <div className="site-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href="/#work"
            className="group inline-flex items-center gap-2 text-sm font-medium text-[#F7F4EF]/50 transition-colors hover:text-[#F7F4EF]"
          >
            <ArrowLeft
              size={15}
              className="transition-transform duration-300 group-hover:-translate-x-1"
            />
            All work
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.08 }}
          className="mt-10 grid gap-8 lg:grid-cols-12 lg:gap-10"
        >
          <div className="lg:col-span-8">
            <span
              className="section-kicker"
              style={{ color: study.accent }}
            >
              Case study · {study.year}
            </span>
            <h1 className="mt-6 text-balance font-[var(--font-syne)] text-4xl font-bold leading-[1.03] tracking-[-0.045em] text-[#F7F4EF] sm:text-5xl lg:text-[4.25rem]">
              {study.title}
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-[1.75] text-[#F7F4EF]/55 lg:text-xl">
              {study.subtitle}
            </p>
          </div>

          <div className="lg:col-span-4 lg:pt-4">
            <dl className="grid grid-cols-2 gap-x-6 gap-y-7">
              {facts.map((fact) => (
                <div key={fact.label}>
                  <dt className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-[#F7F4EF]/35">
                    {fact.label}
                  </dt>
                  <dd className="mt-2 text-sm leading-6 text-[#F7F4EF]/85">
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </motion.div>
      </div>

      {/* hero image */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.18 }}
        className="site-container mt-14 lg:mt-20"
      >
        <div className="relative aspect-[16/9] overflow-hidden rounded-[1.75rem] bg-[#0a0a0a] sm:aspect-[21/9]">
          <Image
            src={study.image}
            alt={study.title}
            fill
            sizes="100vw"
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
          <div
            className="absolute inset-x-0 bottom-0 h-[3px]"
            style={{ backgroundColor: study.accent }}
          />
        </div>
      </motion.div>
    </section>
  );
}

/* ─────────────────────────────────────
   Thesis + stats
───────────────────────────────────── */
function Thesis({ study }: { study: CaseStudy }) {
  return (
    <section className="relative bg-[#F7F4EF] section-space">
      <div className="site-container">
        <motion.p
          {...fadeUp}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-4xl text-balance text-center font-[var(--font-syne)] text-2xl font-bold leading-[1.28] tracking-[-0.03em] text-black sm:text-3xl lg:text-[2.6rem]"
        >
          {study.thesis}
        </motion.p>

        <div className="mt-16 grid grid-cols-2 gap-4 lg:mt-20 lg:grid-cols-4">
          {study.stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              {...fadeUp}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex min-h-[180px] flex-col justify-between rounded-3xl border border-black/[0.07] bg-white/50 p-6 lg:min-h-[210px] lg:p-8"
            >
              <span className="font-mono text-[0.7rem] tracking-[0.14em] text-black/30">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <div className="font-[var(--font-syne)] text-5xl font-bold leading-none tracking-[-0.04em] text-black lg:text-6xl">
                  {stat.value}
                </div>
                <p className="mt-4 text-xs uppercase leading-5 tracking-[0.13em] text-black/45">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────
   Chapters
───────────────────────────────────── */
function Chapters({ study }: { study: CaseStudy }) {
  return (
    <section className="relative bg-black">
      <div className="site-container">
        {study.chapters.map((chapter, i) => (
          <motion.article
            key={chapter.number}
            {...fadeUp}
            transition={{ duration: 0.7 }}
            className={`grid gap-8 border-t border-[#F7F4EF]/[0.08] py-16 lg:grid-cols-12 lg:gap-12 lg:py-24 ${
              i === 0 ? "border-t-0 pt-20 lg:pt-28" : ""
            }`}
          >
            {/* gutter */}
            <div className="lg:col-span-3">
              <div className="lg:sticky lg:top-32">
                <span
                  className="font-[var(--font-syne)] text-5xl font-bold leading-none tracking-[-0.04em] lg:text-6xl"
                  style={{ color: `${study.accent}45` }}
                >
                  {chapter.number}
                </span>
                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.16em] text-[#F7F4EF]/40">
                  {chapter.kicker}
                </p>
              </div>
            </div>

            {/* body */}
            <div className="lg:col-span-9">
              <h2 className="text-balance font-[var(--font-syne)] text-3xl font-bold leading-[1.1] tracking-[-0.035em] text-[#F7F4EF] sm:text-4xl lg:text-5xl">
                {chapter.title}
              </h2>

              <div className="mt-8 max-w-3xl space-y-6">
                {chapter.body.map((paragraph, j) => (
                  <p
                    key={j}
                    className="text-base leading-[1.85] text-[#F7F4EF]/60 lg:text-[1.0625rem]"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              {chapter.points && (
                <ul className="mt-12 space-y-0 border-t border-[#F7F4EF]/[0.08]">
                  {chapter.points.map((point) => (
                    <li
                      key={point.label}
                      className="group grid gap-2 border-b border-[#F7F4EF]/[0.08] py-6 transition-colors duration-300 hover:bg-white/[0.02] lg:grid-cols-12 lg:gap-8"
                    >
                      <div className="flex items-start gap-3 lg:col-span-4">
                        <span
                          className="mt-[0.55rem] h-[6px] w-[6px] flex-shrink-0 rounded-full"
                          style={{ backgroundColor: study.accent }}
                        />
                        <h3 className="font-[var(--font-syne)] text-lg font-bold leading-snug tracking-[-0.02em] text-[#F7F4EF]">
                          {point.label}
                        </h3>
                      </div>
                      <p className="text-[0.95rem] leading-[1.8] text-[#F7F4EF]/55 lg:col-span-8">
                        {point.detail}
                      </p>
                    </li>
                  ))}
                </ul>
              )}

              {chapter.quote && (
                <figure
                  className="mt-12 rounded-[1.5rem] border p-7 lg:p-10"
                  style={{
                    borderColor: `${study.accent}30`,
                    backgroundColor: `${study.accent}0d`,
                  }}
                >
                  <Quote
                    size={26}
                    strokeWidth={1.6}
                    style={{ color: study.accent }}
                    className="opacity-70"
                  />
                  <blockquote className="mt-5 text-balance font-[var(--font-syne)] text-xl font-bold leading-[1.4] tracking-[-0.025em] text-[#F7F4EF] lg:text-2xl">
                    “{chapter.quote.text}”
                  </blockquote>
                  <figcaption className="mt-5 text-xs uppercase tracking-[0.15em] text-[#F7F4EF]/40">
                    {chapter.quote.attribution}
                  </figcaption>
                </figure>
              )}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

/* ─────────────────────────────────────
   System flow
───────────────────────────────────── */
function SystemFlow({ study }: { study: CaseStudy }) {
  if (!study.systemFlow) return null;
  const { source, outputs } = study.systemFlow;

  return (
    <section className="relative bg-[#F7F4EF] section-space">
      <div className="site-container">
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="section-kicker justify-center text-black/40">
            How it fits together
          </span>
          <h2 className="mt-6 text-balance font-[var(--font-syne)] text-3xl font-bold leading-[1.1] tracking-[-0.04em] text-black sm:text-4xl lg:text-5xl">
            Everything derives from one source.
          </h2>
        </motion.div>

        {/* source node */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto mt-14 max-w-2xl rounded-2xl border-2 border-black bg-black px-7 py-6 text-center lg:mt-16"
        >
          <span className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-[#F7F4EF]/45">
            Source of truth
          </span>
          <p className="mt-2 font-[var(--font-syne)] text-lg font-bold tracking-[-0.02em] text-[#F7F4EF] lg:text-xl">
            {source}
          </p>
        </motion.div>

        {/* connector */}
        <div className="mx-auto flex h-12 w-px justify-center bg-black/15 lg:h-16" aria-hidden />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {outputs.map((output, i) => (
            <motion.div
              key={output.title}
              {...fadeUp}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="surface-card flex min-h-[220px] flex-col justify-between rounded-3xl border border-black/[0.08] bg-white/60 p-6 lg:p-7"
            >
              <div
                className="h-[3px] w-10 rounded-full"
                style={{ backgroundColor: study.accent }}
              />
              <div>
                <h3 className="font-[var(--font-syne)] text-xl font-bold leading-tight tracking-[-0.025em] text-black">
                  {output.title}
                </h3>
                <p className="mt-3 text-sm leading-[1.75] text-black/55">
                  {output.detail}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────
   Stack
───────────────────────────────────── */
function Stack({ study }: { study: CaseStudy }) {
  return (
    <section className="relative bg-[#0a0a0a] section-space">
      <div className="site-container">
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.7 }}
          className="grid gap-6 lg:grid-cols-12 lg:items-end"
        >
          <div className="lg:col-span-4">
            <span className="section-kicker text-[#F7F4EF]/35">Built with</span>
            <h2 className="mt-6 font-[var(--font-syne)] text-3xl font-bold leading-[1.08] tracking-[-0.04em] text-[#F7F4EF] sm:text-4xl">
              The stack.
            </h2>
          </div>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-0 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3">
          {study.stack.map((group, i) => (
            <motion.div
              key={group.group}
              {...fadeUp}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="border-t border-[#F7F4EF]/[0.09] py-6"
            >
              <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-[#F7F4EF]/40">
                {group.group}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-[#F7F4EF]/12 px-3 py-1.5 text-sm text-[#F7F4EF]/75"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────
   Takeaway + CTA
───────────────────────────────────── */
function Takeaway({ study }: { study: CaseStudy }) {
  return (
    <section className="relative bg-[#F7F4EF] section-space">
      <div className="site-container">
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-4xl text-center"
        >
          <span className="section-kicker justify-center text-black/40">
            The takeaway
          </span>
          <p className="mt-8 text-balance font-[var(--font-syne)] text-2xl font-bold leading-[1.3] tracking-[-0.03em] text-black sm:text-3xl lg:text-[2.4rem]">
            {study.takeaway}
          </p>

          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href={siteConfig.calendly} className="pill-btn pill-btn-solid">
              <span className="pill-label">
                Start a project like this
              </span>
              <span className="pill-arrow">
                <ArrowUpRight size={14} />
              </span>
            </a>
            <Link href="/#work" className="pill-btn pill-btn-dark">
              <span className="pill-label">See all work</span>
              <span className="pill-arrow">
                <ArrowUpRight size={14} />
              </span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────
   Page
───────────────────────────────────── */
export default function CaseStudyView({ study }: { study: CaseStudy }) {
  return (
    <>
      <Hero study={study} />
      <Thesis study={study} />
      <Chapters study={study} />
      <SystemFlow study={study} />
      <Stack study={study} />
      <Takeaway study={study} />
    </>
  );
}
