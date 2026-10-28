import { ArrowUpRight } from "lucide-react";
import { siteConfig, contactLinks } from "@/config/site";
import LocalTime from "./LocalTime";

export default function Contact() {
  return (
    <section className="border-t border-white/10 py-16 sm:py-24" id="contact">
      <div className="site-container grid gap-8 lg:grid-cols-12 lg:gap-12">
        <h2 className="section-kicker self-start text-[#F7F4EF]/50 lg:col-span-3">
          Contact
        </h2>

        <div className="lg:col-span-9">
          <p className="text-lg text-[#F7F4EF]/60">
            Got a project or a question? Email me.
          </p>
          <a
            href={`mailto:${siteConfig.email}`}
            id="contact-email"
            className="mt-4 block break-words font-[var(--font-syne)] text-[clamp(1.2rem,5.4vw,3.75rem)] font-bold leading-[1.1] tracking-[-0.04em] text-[#F7F4EF] underline decoration-white/20 underline-offset-[0.2em] transition-colors hover:decoration-[#E74C3C]"
          >
            {siteConfig.email}
          </a>

          {/* Phones: full-width call button, then a 2-column grid of thumb-sized links. sm+: one row. */}
          <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-8 sm:gap-y-4">
            <a
              href={siteConfig.calendly}
              target="_blank"
              rel="noopener noreferrer"
              id="contact-book-call"
              className="pill-btn pill-btn-cream w-full justify-between sm:w-auto sm:justify-start"
            >
              <span className="pill-label">Book a call</span>
              <span className="pill-arrow">
                <ArrowUpRight size={16} />
              </span>
            </a>

            <div className="grid grid-cols-2 gap-3 sm:contents">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex min-h-12 items-center justify-between gap-1.5 rounded-xl border border-white/10 px-4 text-base font-medium text-[#F7F4EF]/80 transition-colors hover:border-white/25 hover:text-[#F7F4EF] sm:inline-flex sm:min-h-0 sm:justify-start sm:rounded-none sm:border-0 sm:px-0 sm:text-[#F7F4EF]/70"
                >
                  {link.label}
                  <ArrowUpRight
                    size={15}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>
              ))}
            </div>
          </div>

          <p className="mt-12 text-sm text-[#F7F4EF]/45">
            {siteConfig.location} · <LocalTime /> local time
          </p>
        </div>
      </div>
    </section>
  );
}
