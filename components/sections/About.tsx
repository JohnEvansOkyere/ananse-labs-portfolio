"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const techStack = [
  { name: "Python", color: "#60A5FA" },
  { name: "TypeScript", color: "#818CF8" },
  { name: "FastAPI", color: "#2DD4BF" },
  { name: "Next.js", color: "#F7F4EF" },
  { name: "React", color: "#22D3EE" },
  { name: "Supabase", color: "#34D399" },
  { name: "PostgreSQL", color: "#38BDF8" },
  { name: "n8n", color: "#FB923C" },
  { name: "Docker", color: "#93C5FD" },
  { name: "Claude", color: "#C4B5FD" },
  { name: "GPT", color: "#6EE7B7" },
  { name: "Gemini", color: "#F9A8D4" },
];

const advantages = [
  {
    title: "Direct collaboration",
    text: "You work directly with the engineer shaping the architecture and shipping the product.",
    accent: "#E74C3C",
  },
  {
    title: "Fast, visible progress",
    text: "Short delivery cycles, working software, and decisions made with evidence.",
    accent: "#818cf8",
  },
  {
    title: "Production thinking",
    text: "Security, reliability, deployment, and maintainability are designed in from day one.",
    accent: "#34d399",
  },
  {
    title: "Full ownership",
    text: "Your team receives the code, documentation, training, and a clean handoff.",
    accent: "#fbbf24",
  },
];

export default function About() {
  return (
    <section className="relative bg-[#F7F4EF] section-space" id="about">
      <div className="site-container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-14 grid gap-6 border-b border-black/10 pb-12 lg:grid-cols-12 lg:items-end lg:gap-8 lg:pb-16"
        >
          <div className="lg:col-span-3">
            <span className="section-kicker text-black/45">About me</span>
          </div>
          <h2 className="text-balance font-[var(--font-syne)] text-4xl font-bold leading-[1.02] tracking-[-0.045em] text-black sm:text-5xl lg:col-span-6 lg:text-7xl">
            Engineering useful AI, not demos.
          </h2>
          <p className="max-w-md text-base leading-8 text-black/55 sm:text-lg lg:col-span-3">
            Founder-led product engineering from Accra, working with teams that
            need practical systems they can operate and own.
          </p>
        </motion.div>

        <div className="mt-10 grid grid-cols-1 gap-5 lg:mt-16 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-4"
          >
            <div className="group relative h-full min-h-[440px] overflow-hidden rounded-[1.5rem] bg-black shadow-[0_32px_80px_rgba(0,0,0,0.22)] ring-1 ring-black/10 sm:min-h-[520px] sm:rounded-[2rem]">
              <Image
                src="/John.jpg"
                alt="John Evans Okyere — Founder of Ananse AI Labs"
                fill
                sizes="(max-width: 1024px) 100vw, 34vw"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                priority
              />
              {/* light vignette — just bottom dark for text legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent" />
              {/* subtle left accent stripe */}
              <div className="absolute bottom-0 left-0 top-0 w-[3px] bg-[#E74C3C]" />
              <div className="absolute inset-x-0 bottom-0 px-7 pb-7 pt-16 lg:px-9 lg:pb-9">
                <p className="font-[var(--font-syne)] text-2xl font-bold text-white drop-shadow-lg">
                  John Evans Okyere
                </p>
                <p className="mt-1.5 text-sm leading-relaxed text-white/75">
                  Founder &amp; AI/ML Engineer · Accra, Ghana
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex flex-col justify-between rounded-[2rem] bg-[#E8E3DA] p-7 sm:p-9 lg:col-span-5 lg:p-11"
          >
            <div>
              <p className="max-w-3xl font-[var(--font-syne)] text-2xl font-semibold leading-[1.35] tracking-[-0.025em] text-black sm:text-3xl">
                I build AI products with the discipline of a software engineer
                and the urgency of a product team.
              </p>
              <div className="mt-8 space-y-5 text-base leading-8 text-black/65">
                <p>
                  Ananse AI Labs designs production systems across automation,
                  conversational commerce, operations, recruitment, and data.
                  The work spans Ghana, the US, and globally distributed teams.
                </p>
                <p>
                  Every engagement stays close to the business problem. We
                  prototype quickly, test the risky assumptions, then engineer
                  the version that can survive real users and real operations.
                </p>
              </div>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-x-6 border-t border-black/10 pt-7">
              <div>
                <p className="font-[var(--font-syne)] text-3xl font-bold text-black">10+</p>
                <p className="mt-1 text-sm uppercase tracking-[0.12em] text-black/55">Systems shipped</p>
              </div>
              <div>
                <p className="font-[var(--font-syne)] text-3xl font-bold text-black">5+</p>
                <p className="mt-1 text-sm uppercase tracking-[0.12em] text-black/55">Client markets</p>
              </div>
            </div>
          </motion.div>

          <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="flex flex-col rounded-[1.5rem] bg-[#101010] p-5 text-white sm:rounded-[2rem] sm:p-9 lg:col-span-3"
            >
              <div className="flex items-end justify-between gap-4">
                <p className="font-[var(--font-syne)] text-2xl font-bold tracking-[-0.03em] sm:text-3xl">
                  Core stack
                </p>
                <span className="text-xs uppercase tracking-[0.16em] text-white/50">
                  Production tools
                </span>
              </div>
              <div className="mt-6 grid flex-1 grid-cols-2 content-center gap-2 sm:mt-8 sm:gap-2.5">
                {techStack.map((tech, i) => (
                  <motion.span
                    key={tech.name}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: i * 0.035 }}
                    whileHover={{ x: 3 }}
                    className="flex min-w-0 items-center gap-2 rounded-xl border border-white/15 bg-white/[0.07] px-3 py-3 text-sm font-semibold text-white/90 transition-colors hover:border-white/30 hover:bg-white/[0.12] sm:gap-2.5 sm:px-3.5 sm:py-3"
                  >
                    <span
                      className="h-2 w-2 flex-shrink-0 rounded-full shadow-[0_0_12px_currentColor]"
                      style={{ backgroundColor: tech.color, color: tech.color }}
                    />
                    {tech.name}
                  </motion.span>
                ))}
              </div>
          </motion.div>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {advantages.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.09 }}
              whileHover={{ y: -8 }}
              className="group relative flex min-h-[220px] flex-col justify-between overflow-hidden rounded-2xl bg-[#0d0d0d] p-5 transition-all duration-500 sm:min-h-[260px] sm:p-7"
              style={{
                boxShadow: "0 2px 24px rgba(0,0,0,0.18)",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.boxShadow = `0 20px 60px rgba(0,0,0,0.35), 0 0 0 1px ${item.accent}30`;
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 24px rgba(0,0,0,0.18)";
              }}
            >
              {/* oversized faded number in background */}
              <span
                className="pointer-events-none absolute -right-3 -top-4 font-[var(--font-syne)] text-[7rem] font-black leading-none opacity-[0.12] transition-opacity duration-500 group-hover:opacity-50"
                style={{ color: item.accent }}
              >
                0{i + 1}
              </span>

              {/* top accent dot */}
              <div className="flex items-center gap-2.5">
                <span
                  className="h-2.5 w-2.5 rounded-full transition-all duration-300 group-hover:shadow-[0_0_14px_currentColor]"
                  style={{ backgroundColor: item.accent, color: item.accent }}
                />
                <span className="font-mono text-xs tracking-[0.14em] text-white/25">
                  0{i + 1}
                </span>
              </div>

              <div>
                <h3 className="font-[var(--font-syne)] text-xl font-bold leading-[1.2] text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-white/50 transition-colors duration-300 group-hover:text-white/70">
                  {item.text}
                </p>
              </div>

              {/* bottom accent line grows on hover */}
              <div
                className="absolute bottom-0 left-0 h-[2px] w-0 rounded-full transition-all duration-500 group-hover:w-full"
                style={{ backgroundColor: item.accent }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
