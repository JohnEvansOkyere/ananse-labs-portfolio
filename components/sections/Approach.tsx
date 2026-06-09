"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, PhoneCall, FileSearch, Zap, PackageCheck } from "lucide-react";
import { processSteps, siteConfig } from "@/config/site";

const stepMeta = [
  { color: "#E74C3C", Icon: PhoneCall },
  { color: "#818cf8", Icon: FileSearch },
  { color: "#34d399", Icon: Zap },
  { color: "#fbbf24", Icon: PackageCheck },
];

export default function Approach() {
  const [active, setActive] = useState(0);
  const [hovered, setHovered] = useState<number | null>(null);
  const [ctaOpen, setCtaOpen] = useState(false);
  const ctaRef = useRef<HTMLDivElement>(null);
  const n = processSteps.length;

  useEffect(() => {
    const id = setInterval(() => setActive((p) => (p + 1) % n), 2800);
    return () => clearInterval(id);
  }, [n]);

  useEffect(() => {
    if (!ctaOpen) return;
    const handler = (e: MouseEvent) => {
      if (ctaRef.current && !ctaRef.current.contains(e.target as Node)) {
        setCtaOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [ctaOpen]);

  return (
    <section className="relative bg-[#F7F4EF] section-space" id="approach">
      <div className="site-container">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-20 max-w-4xl text-center"
        >
          <span className="section-kicker justify-center text-black/40">Our process</span>
          <h2 className="mt-6 text-balance font-[var(--font-syne)] text-4xl font-bold leading-[1.08] tracking-[-0.04em] text-black sm:text-5xl lg:text-6xl">
            Clear from the first call to the final handoff.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-black/55 sm:text-lg">
            We work as an extension of your team, with short feedback loops,
            visible progress, and ownership from architecture to deployment.
          </p>
        </motion.div>

        {/* ── PIPELINE ── */}
        <div className="mt-4">

          {/* Desktop pipeline connector row — sits above cards */}
          <div className="relative mb-0 hidden lg:grid lg:grid-cols-4 lg:gap-4">
            {processSteps.map((_, i) => {
              const { color } = stepMeta[i];
              const isActive = active === i;
              const isPast = i < active;
              return (
                <div key={i} className="relative flex items-center justify-center py-5">
                  {/* left segment */}
                  {i > 0 && (
                    <motion.div
                      className="absolute left-0 right-1/2 top-1/2 h-[2px] -translate-y-1/2"
                      animate={{
                        backgroundColor: isPast || isActive
                          ? stepMeta[i - 1].color
                          : "rgba(0,0,0,0.1)",
                      }}
                      transition={{ duration: 0.5 }}
                    />
                  )}
                  {/* right segment */}
                  {i < n - 1 && (
                    <motion.div
                      className="absolute left-1/2 right-0 top-1/2 h-[2px] -translate-y-1/2"
                      animate={{
                        backgroundColor: isPast
                          ? color
                          : "rgba(0,0,0,0.1)",
                      }}
                      transition={{ duration: 0.5 }}
                    />
                  )}

                  {/* Node circle */}
                  <button
                    onClick={() => setActive(i)}
                    className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border-2 transition-all duration-500"
                    style={{
                      backgroundColor: isActive || isPast ? color : "#e0ddd7",
                      borderColor: isActive || isPast ? color : "transparent",
                      boxShadow: isActive ? `0 0 0 6px ${color}25` : "none",
                    }}
                  >
                    <span className="font-[var(--font-syne)] text-xs font-black text-white">
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    {/* Pulse ring on active node */}
                    {isActive && (
                      <motion.span
                        className="absolute inset-0 rounded-full"
                        style={{ backgroundColor: color }}
                        animate={{ scale: [1, 2.2], opacity: [0.45, 0] }}
                        transition={{ duration: 1.4, repeat: Infinity, ease: "easeOut" }}
                      />
                    )}
                  </button>
                </div>
              );
            })}
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, i) => {
              const { color, Icon } = stepMeta[i];
              const isActive = active === i;
              const isPast = i < active;

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.55, delay: i * 0.1 }}
                  animate={{ y: isActive ? -8 : 0 }}
                  onClick={() => setActive(i)}
                  className="group relative cursor-pointer overflow-hidden rounded-3xl bg-[#0d0d0d] p-6 transition-all duration-500 sm:p-8 lg:rounded-t-none lg:rounded-b-3xl"
                  style={{
                    boxShadow: isActive
                      ? `0 28px 64px rgba(0,0,0,0.35), 0 0 0 1px ${color}45`
                      : "0 4px 20px rgba(0,0,0,0.14)",
                  }}
                >
                  {/* top accent bar */}
                  <div
                    className="absolute inset-x-0 top-0 h-[3px] transition-all duration-500"
                    style={{
                      backgroundColor: color,
                      opacity: isActive ? 1 : isPast ? 0.4 : 0.15,
                    }}
                  />

                  {/* background watermark number */}
                  <span
                    className="pointer-events-none absolute -right-2 -top-3 font-[var(--font-syne)] text-[6rem] font-black leading-none transition-opacity duration-500"
                    style={{
                      color,
                      opacity: isActive ? 0.18 : 0.05,
                    }}
                  >
                    {step.number}
                  </span>

                  {/* Mobile step indicator */}
                  <div className="mb-6 flex items-center gap-3 lg:hidden">
                    <div
                      className="flex h-8 w-8 items-center justify-center rounded-full text-white"
                      style={{ backgroundColor: color }}
                    >
                      <span className="font-mono text-[10px] font-bold">{step.number}</span>
                    </div>
                    <div
                      className="h-px flex-1"
                      style={{ backgroundColor: `${color}30` }}
                    />
                  </div>

                  {/* Icon */}
                  <div
                    className="mb-7 flex h-12 w-12 items-center justify-center rounded-2xl transition-all duration-500"
                    style={{
                      backgroundColor: isActive ? `${color}22` : "rgba(255,255,255,0.05)",
                      color: isActive ? color : "rgba(255,255,255,0.25)",
                      boxShadow: isActive ? `0 0 20px ${color}30` : "none",
                    }}
                  >
                    <Icon size={22} />
                  </div>

                  {/* Title */}
                  <h3
                    className="font-[var(--font-syne)] text-xl font-bold leading-[1.2] transition-all duration-500"
                    style={{ color: isActive ? "#ffffff" : "rgba(255,255,255,0.45)" }}
                  >
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="mt-4 text-sm leading-7 transition-colors duration-500"
                    style={{
                      color: isActive
                        ? "rgba(255,255,255,0.68)"
                        : "rgba(255,255,255,0.25)",
                    }}
                  >
                    {step.description}
                  </p>

                  {/* Bottom accent line on active */}
                  <motion.div
                    className="absolute bottom-0 left-0 h-[2px] rounded-full"
                    style={{ backgroundColor: color }}
                    animate={{ width: isActive ? "100%" : "0%" }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-14 flex justify-center lg:mt-16"
        >
          <div ref={ctaRef} className="relative">
            <button
              onClick={() => setCtaOpen((o) => !o)}
              id="approach-cta"
              className="pill-btn pill-btn-solid"
            >
              <span className="pill-label">Schedule your call</span>
              <span className="pill-arrow">
                <ArrowUpRight size={14} />
              </span>
            </button>

            <AnimatePresence>
              {ctaOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.96 }}
                  transition={{ duration: 0.18 }}
                  className="absolute left-1/2 top-full z-50 mt-3 -translate-x-1/2 flex gap-3 rounded-2xl border border-white/10 bg-[#111] p-3 shadow-[0_20px_60px_rgba(0,0,0,0.6)]"
                >
                  {/* Gmail */}
                  <a
                    href="mailto:johnevansokyere@gmail.com"
                    title="Send email"
                    className="flex h-24 w-24 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05] transition-all hover:border-[#EA4335]/40 hover:bg-[#EA4335]/15 hover:scale-105"
                  >
                    <svg viewBox="0 0 48 48" width="48" height="48">
                      <path fill="#EA4335" d="M6 40h8V22L4 14v22c0 2.2 1.8 4 4 4z"/>
                      <path fill="#34A853" d="M34 40h8c2.2 0 4-1.8 4-4V14l-10 8z"/>
                      <path fill="#FBBC05" d="M34 10v12l10-8V12c0-4.9-5.6-7.7-9.5-4.8z"/>
                      <path fill="#4285F4" d="M14 22V10l10 8 10-8v12L24 30z"/>
                      <path fill="#C5221F" d="M4 12v2l10 8V10L9.5 7.2C5.6 4.3 4 7.1 4 12z"/>
                    </svg>
                  </a>

                  {/* WhatsApp */}
                  <a
                    href="https://wa.me/23354494643"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="WhatsApp"
                    className="flex h-24 w-24 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05] transition-all hover:border-[#25D366]/40 hover:bg-[#25D366]/15 hover:scale-105"
                  >
                    <svg viewBox="0 0 48 48" width="48" height="48" fill="none">
                      <circle cx="24" cy="24" r="22" fill="#25D366"/>
                      <path fill="#fff" d="M34.5 13.5A14.5 14.5 0 0 0 9.5 28.3L8 40l11.9-3.1A14.5 14.5 0 1 0 34.5 13.5zm-10.5 22a12 12 0 0 1-6.1-1.7l-.4-.3-6.7 1.8 1.8-6.5-.3-.4A12 12 0 1 1 24 35.5zm6.6-9c-.4-.2-2.1-1-2.4-1.1-.3-.1-.6-.2-.8.2s-.9 1.1-1.1 1.4c-.2.2-.4.2-.8 0-.4-.2-1.6-.6-3-1.8a11 11 0 0 1-2.1-2.5c-.2-.4 0-.6.2-.8l.5-.6.3-.5v-.5l-1.1-2.6c-.3-.6-.6-.5-.8-.5h-.7a1.4 1.4 0 0 0-1 .5 4.2 4.2 0 0 0-1.3 3.1 7.3 7.3 0 0 0 1.5 3.9c.2.2 2.7 4.1 6.5 5.7 3.9 1.6 3.9 1 4.5 1a3.8 3.8 0 0 0 2.5-1.8 3 3 0 0 0 .2-1.8c0-.1-.3-.3-.6-.4z"/>
                    </svg>
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
