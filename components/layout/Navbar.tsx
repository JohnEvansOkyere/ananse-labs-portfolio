"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { siteConfig, navLinks } from "@/config/site";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-white/[0.06]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="#"
            className="relative group"
            id="nav-logo"
          >
            <span className="font-[var(--font-syne)] text-xl font-bold tracking-tight text-white">
              Ananse
            </span>
            <span className="font-[var(--font-syne)] text-xl font-bold tracking-tight text-[#F5A623] ml-1">
              AI
            </span>
            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#F5A623] transition-all duration-300 group-hover:w-full" />
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                id={`nav-${link.label.toLowerCase()}`}
                className="relative text-sm font-medium text-[#888] hover:text-white transition-colors duration-300 group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#F5A623] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            <a
              href={siteConfig.calendly}
              id="nav-cta"
              className="px-5 py-2.5 text-sm font-medium bg-[#F5A623] text-[#0a0a0a] rounded-full hover:bg-[#e6991e] transition-all duration-300 hover:shadow-[0_0_20px_rgba(245,166,35,0.3)]"
            >
              {siteConfig.ctaText}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2"
            id="nav-mobile-toggle"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-white/[0.06] overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="text-2xl font-[var(--font-syne)] font-semibold text-white/80 hover:text-[#F5A623] transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href={siteConfig.calendly}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="inline-block w-fit px-6 py-3 text-base font-medium bg-[#F5A623] text-[#0a0a0a] rounded-full mt-2"
              >
                {siteConfig.ctaText}
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
