"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";
import { siteConfig, navLinks } from "@/config/site";

function GithubIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function LinkedinIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function XIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: GithubIcon, href: siteConfig.github, label: "GitHub" },
    { icon: LinkedinIcon, href: siteConfig.linkedin, label: "LinkedIn" },
    { icon: XIcon, href: siteConfig.twitter, label: "Twitter" },
    { icon: () => <Mail size={16} />, href: `mailto:${siteConfig.email}`, label: "Email" },
  ];

  return (
    <footer className="relative border-t border-white/[0.06]" id="contact">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16">
          {/* Brand Column */}
          <div className="md:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <a href="#" className="inline-block mb-6">
                <span className="font-[var(--font-syne)] text-2xl font-bold tracking-tight text-white">
                  Ananse
                </span>
                <span className="font-[var(--font-syne)] text-2xl font-bold tracking-tight text-[#F5A623] ml-1">
                  AI
                </span>
              </a>
              <p className="text-[#888] text-base leading-relaxed max-w-sm mb-8">
                {siteConfig.tagline}
              </p>
              <div className="flex items-center gap-4">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    aria-label={label}
                    id={`footer-${label.toLowerCase()}`}
                    className="w-10 h-10 rounded-full border border-white/[0.08] flex items-center justify-center text-[#888] hover:text-[#F5A623] hover:border-[#F5A623]/30 transition-all duration-300"
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Nav Column */}
          <div className="md:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h4 className="font-[var(--font-syne)] text-xs font-semibold uppercase tracking-[0.2em] text-[#888] mb-6">
                Navigate
              </h4>
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-sm text-white/60 hover:text-[#F5A623] transition-colors duration-300 flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight
                      size={12}
                      className="opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300"
                    />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Contact Column */}
          <div className="md:col-span-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="font-[var(--font-syne)] text-xs font-semibold uppercase tracking-[0.2em] text-[#888] mb-6">
                Get in Touch
              </h4>
              <div className="flex flex-col gap-4">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-sm text-white/60 hover:text-[#F5A623] transition-colors duration-300"
                  id="footer-email-link"
                >
                  {siteConfig.email}
                </a>
                <p className="text-sm text-white/40">
                  {siteConfig.location}
                </p>
                <a
                  href={siteConfig.calendly}
                  id="footer-cta"
                  className="inline-flex items-center gap-2 mt-2 px-5 py-2.5 text-sm font-medium bg-[#F5A623] text-[#0a0a0a] rounded-full hover:bg-[#e6991e] transition-all duration-300 w-fit hover:shadow-[0_0_20px_rgba(245,166,35,0.3)]"
                >
                  {siteConfig.ctaText}
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            © {currentYear} {siteConfig.name}. All rights reserved.
          </p>
          <p className="text-xs text-white/20">
            Built with precision in Accra, Ghana 🇬🇭
          </p>
        </div>
      </div>
    </footer>
  );
}
