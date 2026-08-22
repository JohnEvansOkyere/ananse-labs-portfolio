"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

interface Testimonial {
  quote: string;
  name: string;
  /** Omitted where the person's title isn't confirmed. */
  role?: string;
  company: string;
  /** Real headshot, added only with the person's permission. */
  avatar?: string;
  /** Monogram tint used until a headshot exists. */
  accent: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "One thing I love about you is you get the job done.",
    name: "Nana Agyeman",
    company: "IT Support Ghana",
    accent: "#E74C3C",
  },
  {
    quote: "So what problem can't you solve?",
    name: "Adeolu Deborah",
    role: "Co-founder",
    company: "Veloxa Technology Ltd",
    accent: "#6C5CE7",
  },
  {
    quote:
      "Evans made me understand AI and automation like it was never difficult.",
    name: "Stanley Ametepe",
    role: "Mentee",
    company: "AI & Automation Mentorship",
    accent: "#5DE2C5",
  },
  {
    quote: "VenariQ helped me get more clients than all my past years.",
    name: "Akua Doris",
    company: "B2B Cleaning Service",
    accent: "#F4C95D",
  },
  {
    quote:
      "Through VeloxaHire, I got a job. God bless the team at Veloxa led by John.",
    name: "Erica Agyeiwaa",
    company: "VeloxaHire",
    accent: "#B8F500",
  },
];

function initials(name: string) {
  return name
    .split(" ")
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

/** Headshot when we have one, monogram when we don't — never a stock stand-in. */
function Avatar({
  person,
  size,
}: {
  person: Testimonial;
  size: "lg" | "sm";
}) {
  const box =
    size === "lg" ? "h-12 w-12 text-sm ring-2" : "h-8 w-8 text-[0.65rem] ring-1";

  if (person.avatar) {
    return (
      <div
        className={`relative flex-shrink-0 overflow-hidden rounded-full ring-white/10 ${box}`}
      >
        <Image
          src={person.avatar}
          alt={person.name}
          fill
          sizes={size === "lg" ? "48px" : "32px"}
          className="object-cover"
        />
      </div>
    );
  }

  return (
    <div
      className={`flex flex-shrink-0 items-center justify-center rounded-full font-bold tracking-[0.02em] ring-white/10 ${box}`}
      style={{
        backgroundColor: `${person.accent}1f`,
        color: person.accent,
      }}
      aria-hidden="true"
    >
      {initials(person.name)}
    </div>
  );
}

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => {
    setDirection(1);
    setActive((p) => (p + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setActive((p) => (p - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, 5200);
    return () => clearInterval(id);
  }, [next, paused]);

  const variants = {
    enter: (d: number) => ({ opacity: 0, x: d * 60, scale: 0.97 }),
    center: { opacity: 1, x: 0, scale: 1 },
    exit: (d: number) => ({ opacity: 0, x: d * -60, scale: 0.97 }),
  };

  return (
    <section
      className="relative overflow-hidden bg-[#050505] section-space"
      id="testimonials"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* ambient glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[900px] -translate-x-1/2 -translate-y-1/3 rounded-full bg-[#E74C3C]/[0.06] blur-[120px]" />

      <div className="site-container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mb-16 grid gap-6 lg:grid-cols-12 lg:items-end lg:gap-8"
        >
          <div className="lg:col-span-3">
            <span className="section-kicker text-[#F7F4EF]/35">
              Client voices
            </span>
          </div>
          <h2 className="text-balance font-[var(--font-syne)] text-4xl font-bold leading-[1.02] tracking-[-0.045em] text-[#F7F4EF] sm:text-5xl lg:col-span-6 lg:text-7xl">
            Real results, real clients.
          </h2>
          <p className="max-w-md text-base leading-8 text-[#F7F4EF]/50 sm:text-lg lg:col-span-3">
            Don&apos;t take our word for it — here&apos;s what the people who hired us have to say.
          </p>
        </motion.div>

        {/* Main testimonial card */}
        <div className="relative mx-auto max-w-4xl">
          <div className="overflow-hidden rounded-[2rem] border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm">
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={active}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="p-5 sm:p-12 lg:p-16"
              >
                <div className="flex flex-col gap-8 lg:flex-row lg:gap-12">
                  {/* Quote */}
                  <div className="flex flex-1 flex-col gap-6">
                    <Quote
                      size={32}
                      className="text-[#E74C3C] opacity-80"
                      strokeWidth={1.5}
                    />
                    <p className="font-[var(--font-syne)] text-lg font-medium leading-[1.6] tracking-[-0.015em] text-[#F7F4EF] sm:text-balance sm:text-2xl lg:text-3xl">
                      &ldquo;{testimonials[active].quote}&rdquo;
                    </p>
                    <div className="mt-auto flex flex-wrap items-center gap-3 border-t border-white/[0.07] pt-4 sm:flex-nowrap sm:gap-4">
                      <Avatar person={testimonials[active]} size="lg" />
                      <div className="flex flex-1 flex-col gap-0.5">
                        <p className="text-sm font-semibold text-[#F7F4EF]">
                          {testimonials[active].name}
                        </p>
                        <p className="text-xs text-[#F7F4EF]/45">
                          {testimonials[active].role && (
                            <>{testimonials[active].role} · </>
                          )}
                          <span className="text-[#F7F4EF]/60">
                            {testimonials[active].company}
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="mt-8 flex items-center justify-between">
            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDirection(i > active ? 1 : -1);
                    setActive(i);
                  }}
                  aria-label={`Testimonial ${i + 1}`}
                  className="group flex h-11 w-8 items-center justify-center"
                >
                  <span
                    className={`block h-1.5 rounded-full transition-all duration-400 ${
                      i === active
                        ? "w-8 bg-[#E74C3C]"
                        : "w-1.5 bg-white/20 group-hover:bg-white/40"
                    }`}
                  />
                </button>
              ))}
            </div>

            {/* Arrows */}
            <div className="flex items-center gap-2">
              <button
                onClick={prev}
                aria-label="Previous testimonial"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-[#F7F4EF]/50 transition-all duration-300 hover:border-white/25 hover:text-[#F7F4EF]"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={next}
                aria-label="Next testimonial"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-[#F7F4EF]/50 transition-all duration-300 hover:border-white/25 hover:text-[#F7F4EF]"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom preview strip — other testimonials */}
        <div className="mt-10 grid grid-cols-1 gap-3 min-[420px]:grid-cols-2 sm:mt-12 sm:gap-4 lg:grid-cols-5">
          {testimonials.map((t, i) => (
            <motion.button
              key={t.name}
              onClick={() => {
                setDirection(i > active ? 1 : -1);
                setActive(i);
              }}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              className={`group relative rounded-2xl border p-4 text-left transition-all duration-300 ${
                i === active
                  ? "border-[#E74C3C]/40 bg-[#E74C3C]/[0.07]"
                  : "border-white/[0.06] bg-white/[0.02] hover:border-white/15 hover:bg-white/[0.04]"
              }`}
            >
              <div className="flex items-center gap-3">
                <Avatar person={t} size="sm" />
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-[#F7F4EF]/90">
                    {t.name.split(" ")[0]}
                  </p>
                  <p className="truncate text-xs text-[#F7F4EF]/55">{t.company}</p>
                </div>
              </div>
              <p className="mt-3 line-clamp-2 text-xs leading-relaxed text-[#F7F4EF]/55">
                &ldquo;{t.quote}&rdquo;
              </p>
              {i === active && (
                <motion.div
                  layoutId="active-indicator"
                  className="absolute bottom-0 left-0 right-0 h-[2px] rounded-full bg-[#E74C3C]"
                />
              )}
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
