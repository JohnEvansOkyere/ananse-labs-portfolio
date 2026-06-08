"use client";

import { motion } from "framer-motion";
import Image from "next/image";

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
    text: "You work with the engineer shaping the architecture and shipping the product.",
  },
  {
    title: "Fast, visible progress",
    text: "Short delivery cycles, working software, and decisions made with evidence.",
  },
  {
    title: "Production thinking",
    text: "Security, reliability, deployment, and maintainability are designed in early.",
  },
  {
    title: "Full ownership",
    text: "Your team receives the code, documentation, training, and a clean handoff.",
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
            <div className="group relative h-full min-h-[520px] overflow-hidden rounded-[2rem] bg-black shadow-[0_24px_80px_rgba(0,0,0,0.14)]">
              <Image
                src="/John.jpg"
                alt="John Evans Okyere — Founder of Ananse AI Labs"
                fill
                sizes="(max-width: 1024px) 100vw, 34vw"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.035]"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/5 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-7 lg:p-9">
                <p className="font-[var(--font-syne)] text-2xl font-bold text-white">
                  John Evans Okyere
                </p>
                <p className="mt-1.5 text-sm leading-relaxed text-white/65">
                  Founder and AI/ML Engineer · Accra, Ghana
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
                <p className="mt-1 text-xs uppercase tracking-[0.16em] text-black/45">Systems shipped</p>
              </div>
              <div>
                <p className="font-[var(--font-syne)] text-3xl font-bold text-black">5+</p>
                <p className="mt-1 text-xs uppercase tracking-[0.16em] text-black/45">Client markets</p>
              </div>
            </div>
          </motion.div>

          <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="flex flex-col rounded-[2rem] bg-[#101010] p-7 text-white sm:p-9 lg:col-span-3"
            >
              <div className="flex items-end justify-between gap-4">
                <p className="font-[var(--font-syne)] text-3xl font-bold tracking-[-0.03em]">
                  Core stack
                </p>
                <span className="text-[10px] uppercase tracking-[0.2em] text-white/35">
                  Production tools
                </span>
              </div>
              <div className="mt-8 grid flex-1 grid-cols-2 content-center gap-2.5">
                {techStack.map((tech, i) => (
                  <motion.span
                    key={tech.name}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: i * 0.035 }}
                    whileHover={{ x: 3 }}
                    className="flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/[0.045] px-3 py-3 text-sm font-semibold text-white/80 transition-colors hover:border-white/25 hover:bg-white/[0.08]"
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

        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {advantages.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="rounded-2xl border border-black/10 bg-white/55 p-6"
            >
              <span className="text-[10px] font-mono tracking-[0.16em] text-black/35">
                0{i + 1}
              </span>
              <h3 className="mt-5 font-[var(--font-syne)] text-lg font-bold text-black">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-black/55">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
