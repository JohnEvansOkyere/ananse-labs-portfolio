import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { siteConfig, facts } from "@/config/site";

export default function Hero() {
  return (
    <section className="pb-14 pt-28 sm:pb-24 sm:pt-40" id="hero">
      <div className="site-container grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7">
          {/* Phones and tablets get a small face crop; the full portrait takes over at lg. */}
          <Image
            src="/John-avatar.jpg"
            alt={`${siteConfig.name}, ${siteConfig.role}`}
            width={112}
            height={112}
            loading="eager"
            className="rise mb-6 h-20 w-20 rounded-full object-cover ring-1 ring-white/15 sm:h-28 sm:w-28 lg:hidden"
          />

          <p
            className="rise inline-flex items-center gap-2.5 text-sm text-[#F7F4EF]/60"
            style={{ animationDelay: "0.05s" }}
          >
            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.7)]" />
            {siteConfig.status}
          </p>

          <h1
            className="rise mt-5 text-balance font-[var(--font-syne)] text-[clamp(2.5rem,7.5vw,5.75rem)] font-bold leading-[1] tracking-[-0.05em] text-[#F7F4EF] sm:mt-6"
            style={{ animationDelay: "0.12s" }}
          >
            {siteConfig.headline}
          </h1>

          <p
            className="rise mt-5 max-w-xl text-base leading-7 text-[#F7F4EF]/60 sm:mt-6 sm:text-lg sm:leading-8"
            style={{ animationDelay: "0.2s" }}
          >
            {siteConfig.intro}
          </p>

          <div
            className="rise mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:items-center"
            style={{ animationDelay: "0.28s" }}
          >
            <a
              href="#work"
              id="hero-cta-work"
              className="pill-btn pill-btn-cream w-full justify-between sm:w-auto sm:justify-start"
            >
              <span className="pill-label">See my work</span>
              <span className="pill-arrow">
                <ArrowUpRight size={16} />
              </span>
            </a>
            <a
              href="#contact"
              id="hero-cta-contact"
              className="flex min-h-12 w-full items-center justify-center rounded-full border border-white/15 text-sm font-semibold text-[#F7F4EF]/80 transition-colors hover:border-white/30 hover:text-[#F7F4EF] sm:w-auto sm:min-h-[46px] sm:border-0 sm:px-5 sm:text-[#F7F4EF]/70"
            >
              Get in touch
            </a>
          </div>
        </div>

        <div
          className="rise hidden lg:col-span-5 lg:block"
          style={{ animationDelay: "0.2s" }}
        >
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[1.75rem] bg-[#0a0a0a] ring-1 ring-white/10">
            <Image
              src="/John.jpg"
              alt={`${siteConfig.name}, ${siteConfig.role}`}
              fill
              sizes="40vw"
              className="object-cover object-[50%_45%]"
            />
          </div>
        </div>
      </div>

      <dl className="site-container mt-14 grid grid-cols-3 gap-4 border-t border-white/10 pt-8 sm:mt-20">
        {facts.map((fact) => (
          <div key={fact.label}>
            <dd className="font-[var(--font-syne)] text-3xl font-bold leading-none tracking-[-0.04em] text-[#F7F4EF] sm:text-5xl">
              {fact.value}
            </dd>
            <dt className="mt-3 text-xs leading-5 text-[#F7F4EF]/50 sm:text-sm">
              {fact.label}
            </dt>
          </div>
        ))}
      </dl>
    </section>
  );
}
