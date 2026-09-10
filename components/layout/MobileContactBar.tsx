"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function MobileContactBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const updateVisibility = () => {
      setVisible(window.scrollY > window.innerHeight * 0.72);
    };

    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    return () => window.removeEventListener("scroll", updateVisibility);
  }, []);

  return (
    <div
      className={`fixed inset-x-3 bottom-3 z-40 transition-all duration-300 lg:hidden ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <div className="mx-auto flex max-w-md items-center gap-2 rounded-2xl border border-white/15 bg-black/90 p-2 shadow-[0_18px_55px_rgba(0,0,0,0.45)] backdrop-blur-xl">
        <a
          href="#work"
          className="flex min-h-11 flex-1 items-center justify-center rounded-xl px-3 text-sm font-semibold text-white/70 transition-colors hover:bg-white/10 hover:text-white"
        >
          View work
        </a>
        <a
          href={siteConfig.calendly}
          target="_blank"
          rel="noopener noreferrer"
          id="mobile-sticky-cta"
          className="flex min-h-11 flex-[1.2] items-center justify-center gap-2 rounded-xl bg-[#E74C3C] px-3 text-sm font-bold text-white transition-colors hover:bg-[#f05b4c]"
        >
          Let&apos;s talk
          <ArrowUpRight size={15} />
        </a>
      </div>
    </div>
  );
}
