"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/config/site";

/* ─────────────────────────────────────────────
   ASCII GRID with mouse-following radial glow
   ───────────────────────────────────────────── */
function AsciiGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const rafRef = useRef<number | null>(null);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    mouseRef.current = { x: e.clientX, y: e.clientY };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const chars = ["+", "·", "*", "#", "%", ":", "×", "○", "◆", "+"];
    const cellSize = 28;
    let cols = 0;
    let rows = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      cols = Math.ceil(canvas.width / cellSize) + 1;
      rows = Math.ceil(canvas.height / cellSize) + 1;
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;
      const glowRadius = 200;

      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const x = col * cellSize + cellSize / 2;
          const y = row * cellSize + cellSize / 2;

          const dx = x - mx;
          const dy = y - my;
          const dist = Math.sqrt(dx * dx + dy * dy);

          let opacity = 0.06;
          if (dist < glowRadius) {
            const factor = 1 - dist / glowRadius;
            opacity = 0.06 + factor * 0.55;
          }

          const charIndex = (row * cols + col) % chars.length;
          const char = chars[charIndex];

          ctx.font = "11px 'Inter', monospace";
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";
          ctx.fillStyle = `rgba(247, 244, 239, ${opacity})`;
          ctx.fillText(char, x, y);
        }
      }

    };

    const requestDraw = () => {
      if (rafRef.current !== null) return;
      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = null;
        draw();
      });
    };

    const handleResize = () => {
      resize();
      requestDraw();
    };

    const handlePointerMove = (event: MouseEvent) => {
      handleMouseMove(event);
      requestDraw();
    };

    handleResize();
    draw();

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handlePointerMove);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handlePointerMove);
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, [handleMouseMove]);

  return (
    <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />
  );
}

const disciplines = [
  "AI Automation",
  "Custom Agents",
  "Full-Stack AI",
  "LLM Integration",
  "AI Training",
  "Data Pipelines",
];

/* ─────────────────────────────────────────────
   HERO SECTION
   ───────────────────────────────────────────── */
export default function Hero() {
  const [time, setTime] = useState("");
  const [talkOpen, setTalkOpen] = useState(false);
  const talkRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!talkOpen) return;
    const handler = (e: MouseEvent) => {
      if (talkRef.current && !talkRef.current.contains(e.target as Node)) {
        setTalkOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [talkOpen]);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date().toLocaleTimeString("en-US", {
        timeZone: "Africa/Accra",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      });
      setTime(now);
    };
    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative flex min-h-screen flex-col overflow-hidden section-black" id="hero">
      {/* Aurora gradient orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="aurora-orb aurora-orb-1" />
        <div className="aurora-orb aurora-orb-2" />
        <div className="aurora-orb aurora-orb-3" />
      </div>

      <AsciiGrid />

      <div className="site-container relative z-10 flex flex-1 items-center justify-center pb-16 pt-32 sm:pt-36">
        <div className="mx-auto flex w-full max-w-5xl flex-col items-center text-center">

          {/* Founder badge */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.2 }}
            className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 backdrop-blur-sm"
          >
            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_14px_rgba(52,211,153,0.7)]" />
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[#F7F4EF]/70 sm:hidden">
              John Evans Okyere · Accra
            </span>
            <span className="hidden text-xs font-semibold uppercase tracking-[0.16em] text-[#F7F4EF]/70 sm:inline">
              John Evans Okyere · Founder, Ananse AI Labs · Accra, Ghana
            </span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.3 }}
            className="max-w-5xl text-balance font-[var(--font-syne)] text-[clamp(2.6rem,11vw,6.75rem)] font-bold leading-[0.97] tracking-[-0.055em] text-[#F7F4EF]"
          >
            You talk for 15 minutes.
            <br />
            <span className="text-[#F7F4EF]/40">We carry</span>
            <br />
            the heavy load.
          </motion.h1>

          {/* Sub paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.55 }}
            className="mt-7 max-w-2xl text-balance text-base leading-8 text-[#F7F4EF]/60 sm:text-lg"
          >
            Tell us your problem. We come back with a working solution —
            automations, AI agents, and full-stack systems built for your
            business, not a template.
          </motion.p>

          {/* JFK quote */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="my-8 flex flex-wrap items-center justify-center gap-2 sm:my-10 sm:gap-3"
          >
            <span className="hidden h-px w-8 bg-[#E74C3C]/50 sm:block" />
            <span className="text-center font-[var(--font-syne)] text-xs font-bold text-[#F7F4EF]/80 sm:text-sm">
              &ldquo;Not because it is easy, but because it is hard.&rdquo;
            </span>
            <span className="text-xs font-semibold text-[#F7F4EF]/50">— JFK</span>
            <span className="hidden h-px w-8 bg-[#E74C3C]/50 sm:block" />
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.85 }}
            className="mt-10 flex flex-col items-center gap-4 sm:mt-14 sm:flex-row"
          >
            <a href="#work" id="hero-cta-work" className="pill-btn pill-btn-hero">
              <span className="pill-label">See the work</span>
              <span className="pill-arrow">
                <ArrowUpRight size={16} />
              </span>
            </a>
            <div ref={talkRef} className="relative">
              <button
                onClick={() => setTalkOpen((o) => !o)}
                className="group inline-flex min-h-[52px] items-center gap-2 rounded-full border border-white/15 px-6 text-base font-semibold text-[#F7F4EF]/80 transition-all hover:border-white/30 hover:text-[#F7F4EF] sm:min-h-[72px] sm:gap-3 sm:px-10 sm:text-xl sm:font-bold"
              >
                Let&apos;s talk
                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 sm:size-[22px]"
                />
              </button>

              <AnimatePresence>
                {talkOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.96 }}
                    transition={{ duration: 0.18 }}
                    className="absolute right-0 top-full z-50 mt-3 flex gap-3 rounded-2xl border border-white/10 bg-[#111] p-3 shadow-[0_20px_60px_rgba(0,0,0,0.6)]"
                  >
                    {/* Gmail */}
                    <a
                      href={`mailto:${siteConfig.email}`}
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
                      href={siteConfig.whatsapp}
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

          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="mt-8 flex items-center gap-2 text-sm text-[#F7F4EF]/55"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.6)]" />
            {siteConfig.ctaAvailability}
          </motion.span>
        </div>
      </div>

      <motion.div
        initial={false}
        className="site-container relative z-10 grid grid-cols-1 items-end border-t border-white/[0.07] py-5 text-center min-[380px]:grid-cols-2 min-[380px]:text-left lg:grid-cols-3 lg:py-6"
      >
        <p className="text-xs tracking-wide text-[#F7F4EF]/50 sm:text-sm">
          Founder-led AI studio · Ananse AI Labs
        </p>

        <div className="mt-2 hidden flex-col items-end gap-0.5 min-[380px]:mt-0 min-[380px]:flex lg:items-center">
          <p className="text-xs tracking-wide text-[#F7F4EF]/40 sm:text-sm">Global delivery</p>
          <p className="text-xs text-[#F7F4EF]/55 sm:text-sm" suppressHydrationWarning>
            {siteConfig.timeZone}{time}
          </p>
        </div>

        <div className="hidden justify-end gap-2 lg:flex">
          {disciplines.slice(0, 3).map((discipline) => (
            <span
              key={discipline}
              className="rounded-full border border-white/[0.12] px-3 py-1.5 text-xs uppercase tracking-[0.1em] text-[#F7F4EF]/55"
            >
              {discipline}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
