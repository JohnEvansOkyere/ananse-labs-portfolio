"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { siteConfig, navLinks } from "@/config/site";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Viewport border frame */}
      <div className="viewport-frame" />

      <nav
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled ? "py-3" : "py-5"
        }`}
        aria-label="Primary navigation"
      >
        <div
          className={`site-container flex items-center justify-between rounded-full border px-4 py-3 transition-all duration-500 sm:px-5 ${
            scrolled
              ? "border-white/10 bg-black/75 shadow-[0_12px_40px_rgba(0,0,0,0.28)] backdrop-blur-xl"
              : "border-white/[0.07] bg-black/25 backdrop-blur-md"
          }`}
        >
          <motion.a
            href="/#hero"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative z-10 font-[var(--font-syne)] text-base font-bold tracking-[-0.03em] text-[#F7F4EF] sm:text-lg"
            aria-label="Ananse AI Labs home"
          >
            ananse<span className="text-[#E74C3C]">.</span>
          </motion.a>

          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 lg:flex"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                id={`nav-${link.label.toLowerCase()}`}
                className="rounded-full px-4 py-2 text-base font-medium text-[#F7F4EF]/70 transition-all duration-300 hover:bg-white/[0.07] hover:text-[#F7F4EF]"
              >
                {link.label}
              </a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden lg:block"
          >
            <a
              href={siteConfig.calendly}
              id="nav-cta"
              className="group inline-flex items-center gap-2 rounded-full bg-[#F7F4EF] px-5 py-2.5 text-base font-semibold text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_10px_28px_rgba(247,244,239,0.14)]"
            >
              <span>{siteConfig.ctaText}</span>
              <ArrowUpRight
                size={14}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </motion.div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="relative z-50 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-[#F7F4EF] transition-colors hover:bg-white/10 lg:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            id="nav-mobile-toggle"
          >
            {mobileOpen ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center overflow-y-auto bg-black px-4 py-24 sm:px-6"
          >
            <div className="flex w-full max-w-sm flex-col items-center gap-3">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="w-full rounded-2xl border border-white/[0.07] px-5 py-3.5 text-center font-[var(--font-syne)] text-xl font-bold text-[#F7F4EF] transition-colors hover:bg-white/[0.06] sm:px-6 sm:py-4 sm:text-2xl"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href={siteConfig.calendly}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="pill-btn pill-btn-hero mt-5"
                onClick={() => setMobileOpen(false)}
              >
                <span className="pill-label">{siteConfig.ctaText}</span>
                <span className="pill-arrow">
                  <ArrowUpRight size={14} />
                </span>
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
