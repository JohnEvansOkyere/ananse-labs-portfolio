import { ArrowUpRight } from "lucide-react";
import { mentorship, siteConfig } from "@/config/site";

export default function Mentorship() {
  return (
    <section className="border-t border-white/10 py-16 sm:py-24" id="mentorship">
      <div className="site-container grid gap-8 lg:grid-cols-12 lg:gap-12">
        <h2 className="section-kicker self-start text-[#F7F4EF]/50 lg:col-span-3">
          Mentorship
        </h2>

        <div className="grid gap-8 sm:grid-cols-[auto_1fr] sm:gap-14 lg:col-span-9">
          <div>
            <div className="font-[var(--font-syne)] text-[6rem] font-bold leading-[0.85] tracking-[-0.06em] text-[#E74C3C] sm:text-[8rem]">
              {mentorship.seats}
            </div>
            <p className="mt-4 text-sm text-[#F7F4EF]/60">
              {mentorship.seatsLabel}
            </p>
          </div>

          <div>
            <h3 className="text-balance font-[var(--font-syne)] text-3xl font-bold leading-[1.1] tracking-[-0.035em] text-[#F7F4EF] sm:text-4xl">
              {mentorship.headline}
            </h3>
            <p className="mt-5 max-w-xl text-base leading-7 text-[#F7F4EF]/60">
              {mentorship.intro}
            </p>
            <p className="mt-5 font-mono text-xs tracking-[0.08em] text-[#F7F4EF]/45">
              {mentorship.format}
            </p>

            <ul className="mt-6 space-y-1.5 text-sm text-[#F7F4EF]/70">
              {mentorship.who.map((item) => (
                <li key={item}>— {item}</li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <a
                href={siteConfig.calendly}
                target="_blank"
                rel="noopener noreferrer"
                id="mentorship-cta"
                className="pill-btn pill-btn-light w-full justify-between sm:w-auto sm:justify-start"
              >
                <span className="pill-label">{mentorship.ctaText}</span>
                <span className="pill-arrow">
                  <ArrowUpRight size={16} />
                </span>
              </a>
              <p className="max-w-xs text-xs leading-5 text-[#F7F4EF]/45">
                {mentorship.seatsNote}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
