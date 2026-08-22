"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Bot,
  BrainCircuit,
  DatabaseZap,
  GraduationCap,
  Layers3,
  UserRound,
  Workflow,
} from "lucide-react";
import { services } from "@/config/site";

const serviceStyles = [
  { bg: "#E74C3C", text: "#FFFFFF", muted: "rgba(255,255,255,.72)", Icon: Workflow },
  { bg: "#B8F500", text: "#101010", muted: "rgba(16,16,16,.62)", Icon: Bot },
  { bg: "#6C5CE7", text: "#FFFFFF", muted: "rgba(255,255,255,.7)", Icon: Layers3 },
  { bg: "#F4C95D", text: "#101010", muted: "rgba(16,16,16,.62)", Icon: BrainCircuit },
  { bg: "#5DE2C5", text: "#101010", muted: "rgba(16,16,16,.62)", Icon: GraduationCap },
  { bg: "#F7F4EF", text: "#101010", muted: "rgba(16,16,16,.58)", Icon: DatabaseZap },
  { bg: "#101010", text: "#F7F4EF", muted: "rgba(247,244,239,.55)", Icon: UserRound },
];

export default function Services() {
  return (
    <section className="relative bg-[#0a0a0a] section-space" id="services">
      <div className="site-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-16 grid gap-6 lg:grid-cols-12 lg:items-end lg:gap-8 lg:mb-20"
        >
          <div className="lg:col-span-3">
            <span className="section-kicker text-[#F7F4EF]/35">What we build</span>
          </div>
          <h2 className="text-balance font-[var(--font-syne)] text-4xl font-bold leading-[1.02] tracking-[-0.045em] text-[#F7F4EF] sm:text-5xl lg:col-span-6 lg:text-7xl">
            Practical AI systems with personality.
          </h2>
          <p className="max-w-md text-base leading-8 text-[#F7F4EF]/50 sm:text-lg lg:col-span-3">
            Strategy, product design, engineering, and deployment brought
            together in one accountable delivery team.
          </p>
        </motion.div>

        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:mt-16 lg:grid-cols-3">
            {services.map((service, i) => {
              const style = serviceStyles[i % serviceStyles.length];
              const Icon = style.Icon;
              /* A trailing odd card fills the row instead of stranding it. */
              const spansRow =
                i === services.length - 1 && services.length % 3 === 1;
              return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                whileHover={{ y: -8, scale: 1.01 }}
                className={`surface-card group relative flex min-h-[300px] flex-col justify-between overflow-hidden rounded-[1.5rem] p-6 sm:min-h-[340px] sm:rounded-[2rem] sm:p-7 lg:p-9 ${
                  spansRow
                    ? "border border-[#F7F4EF]/10 sm:col-span-2 lg:col-span-3 lg:min-h-[300px]"
                    : ""
                }`}
                style={{
                  backgroundColor: style.bg,
                  color: style.text,
                  boxShadow: "0 4px 24px rgba(0,0,0,0.12)",
                }}
                id={`service-${i}`}
              >
                {/* hover glow */}
                <div
                  className="pointer-events-none absolute inset-0 rounded-[2rem] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    boxShadow: `0 0 60px 10px ${style.bg}55, inset 0 0 40px 0 ${style.bg}22`,
                  }}
                />
                <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full border-[35px] border-current opacity-[0.08] transition-transform duration-700 group-hover:scale-125" />
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono tracking-[0.12em] opacity-60">
                    0{i + 1}
                  </span>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-current border-opacity-20 transition-all duration-300 group-hover:rotate-6 group-hover:scale-105">
                    <ArrowUpRight size={16} />
                  </div>
                </div>

                <div
                  className={`relative ${
                    spansRow
                      ? "flex flex-col gap-6 lg:flex-row lg:items-end lg:gap-12"
                      : ""
                  }`}
                >
                  <div className={spansRow ? "lg:flex-1" : ""}>
                    <Icon size={38} strokeWidth={1.6} className="mb-8 opacity-75" />
                    <h3
                      className={`font-[var(--font-syne)] text-2xl font-bold leading-[1.08] tracking-[-0.03em] lg:text-3xl ${
                        spansRow ? "max-w-lg" : "mb-4 max-w-xs"
                      }`}
                    >
                      {service.title}
                    </h3>
                  </div>
                  <p
                    className={`text-sm leading-[1.75] ${
                      spansRow ? "lg:max-w-md lg:flex-1" : "max-w-sm"
                    }`}
                    style={{ color: style.muted }}
                  >
                    {service.description}
                  </p>
                </div>
              </motion.div>
            )})}
        </div>
      </div>
    </section>
  );
}
