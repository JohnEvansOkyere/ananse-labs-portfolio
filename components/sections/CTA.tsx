"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Zap } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function CTA() {
  const [ctaOpen, setCtaOpen] = useState(false);
  const ctaRef = useRef<HTMLDivElement>(null);

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
    <section className="relative overflow-hidden bg-[#F7F4EF] pb-24 lg:pb-36">
      <div className="site-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-[1.5rem] bg-black px-4 py-14 text-center shadow-[0_40px_120px_rgba(0,0,0,0.22)] sm:rounded-[2rem] sm:px-10 sm:py-16 lg:py-28"
        >
          {/* animated shimmer border */}
          <div className="pointer-events-none absolute inset-0 rounded-[2rem] cta-shimmer-border" />

          {/* glow orbs */}
          <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#E74C3C]/25 blur-[120px]" />
          <div className="absolute bottom-0 left-0 h-64 w-64 -translate-x-1/2 translate-y-1/2 rounded-full bg-indigo-600/15 blur-[100px]" />
          <div className="absolute bottom-0 right-0 h-64 w-64 translate-x-1/2 translate-y-1/2 rounded-full bg-purple-600/12 blur-[100px]" />

          <div className="relative mx-auto flex max-w-4xl flex-col items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#E74C3C]/30 bg-[#E74C3C]/10 px-4 py-2"
            >
              <Zap size={12} className="text-[#E74C3C]" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#E74C3C]">
                Start a project
              </span>
            </motion.div>

            <h2 className="mt-3 text-balance font-[var(--font-syne)] text-3xl font-bold leading-[1.08] tracking-[-0.04em] text-[#F7F4EF] min-[380px]:text-4xl sm:text-5xl lg:text-6xl">
              Ready to turn a good idea<br className="hidden lg:block" /> into a working system?
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-[#F7F4EF]/50 sm:text-lg">
              {siteConfig.ctaSubtext}
            </p>

            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
              <div ref={ctaRef} className="relative">
                <button
                  onClick={() => setCtaOpen((o) => !o)}
                  id="cta-pill"
                  className="pill-btn pill-btn-hero"
                >
                  <span className="pill-label">{siteConfig.ctaText}</span>
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
                      className="absolute left-1/2 top-full z-50 mt-3 -translate-x-1/2 flex gap-3 rounded-2xl border border-white/10 bg-[#111] p-3 shadow-[0_20px_60px_rgba(0,0,0,0.6)] max-w-[calc(100vw-2rem)]"
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
            </div>

            <p className="mt-6 flex max-w-[15rem] items-start gap-2 text-left text-xs leading-5 text-[#F7F4EF]/35 sm:max-w-none sm:items-center sm:text-center">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.6)]" />
              {siteConfig.ctaAvailability}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
