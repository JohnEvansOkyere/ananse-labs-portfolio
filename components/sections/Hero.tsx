"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";
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
      <AsciiGrid />

      <div className="site-container relative z-10 flex flex-1 items-center justify-center pb-16 pt-32 sm:pt-36">
        <div className="mx-auto flex w-full max-w-5xl flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.2 }}
            className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 backdrop-blur-sm"
          >
            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_14px_rgba(52,211,153,0.7)]" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#F7F4EF]/60 sm:hidden">
              AI studio · Accra
            </span>
            <span className="hidden text-[11px] font-semibold uppercase tracking-[0.18em] text-[#F7F4EF]/60 sm:inline">
              AI engineering studio · Accra, Ghana
            </span>
          </motion.div>

          <motion.h1
            initial={false}
            className="max-w-5xl text-balance font-[var(--font-syne)] text-[clamp(3.25rem,8vw,7.25rem)] font-bold leading-[0.95] tracking-[-0.055em] text-[#F7F4EF]"
          >
            AI systems built to{" "}
            <span className="text-[#F7F4EF]/45">move your business.</span>
          </motion.h1>

          <motion.p
            initial={false}
            className="mt-7 max-w-2xl text-balance text-base leading-7 text-[#F7F4EF]/55 sm:text-lg sm:leading-8"
          >
            We design, build, and ship production-ready AI products and
            automations with your team, from first workflow to full deployment.
          </motion.p>

          <motion.div
            initial={false}
            className="mt-9 flex flex-col items-center gap-4 sm:flex-row"
          >
            <a href="#work" id="hero-cta-work" className="pill-btn pill-btn-hero">
              <span className="pill-label">Explore our work</span>
              <span className="pill-arrow">
                <ArrowUpRight size={16} />
              </span>
            </a>
            <a
              href="#approach"
              id="hero-cta"
              className="group inline-flex min-h-[52px] items-center gap-2 rounded-full px-5 text-sm font-semibold text-[#F7F4EF]/65 transition-colors hover:text-[#F7F4EF]"
            >
              <span className="pill-label">Learn our approach</span>
              <ArrowUpRight
                size={15}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </motion.div>

          <motion.span
            initial={false}
            className="mt-6 flex items-center gap-2 text-xs text-[#F7F4EF]/35"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            {siteConfig.ctaAvailability}
          </motion.span>
        </div>
      </div>

      <motion.div
        initial={false}
        className="site-container relative z-10 grid grid-cols-2 items-end border-t border-white/[0.07] py-6 lg:grid-cols-3"
      >
        <p className="text-xs tracking-wide text-[#F7F4EF]/30">
          {siteConfig.bottomLine}
        </p>

        <div className="flex flex-col items-end gap-0.5 lg:items-center">
          <p className="text-xs tracking-wide text-[#F7F4EF]/25">Global delivery</p>
          <p className="text-xs text-[#F7F4EF]/40" suppressHydrationWarning>
            {siteConfig.timeZone}{time}
          </p>
        </div>

        <div className="hidden justify-end gap-2 lg:flex">
          {disciplines.slice(0, 3).map((discipline) => (
            <span
              key={discipline}
              className="rounded-full border border-white/[0.07] px-3 py-1.5 text-[10px] uppercase tracking-[0.12em] text-[#F7F4EF]/35"
            >
              {discipline}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
