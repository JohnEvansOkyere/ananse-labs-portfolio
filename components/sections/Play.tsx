import Image from "next/image";
import { ArrowUpRight, Play as PlayIcon } from "lucide-react";
import { game } from "@/config/site";

export default function Play() {
  return (
    <section className="border-t border-white/10 py-16 sm:py-24" id="play">
      <div className="site-container grid gap-8 lg:grid-cols-12 lg:gap-12">
        <h2 className="section-kicker self-start text-[#F7F4EF]/50 lg:col-span-3">
          Play
        </h2>

        <div className="lg:col-span-9">
          <p className="font-mono text-sm tracking-[0.04em] text-[#F5B300]">
            {game.eyebrow}
          </p>
          <h3 className="mt-3 text-balance font-[var(--font-syne)] text-4xl font-bold leading-[1.05] tracking-[-0.045em] text-[#F7F4EF] sm:text-5xl">
            {game.heading}
          </h3>

          {/* Phones: art on top, text and a full-width button below. sm+: art beside the text. */}
          <div className="mt-8 overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#0a0a0a] sm:mt-10 sm:grid sm:grid-cols-[1fr_1.1fr]">
            <a
              href={game.href}
              tabIndex={-1}
              aria-hidden
              className="group relative block aspect-[16/10] overflow-hidden sm:aspect-auto sm:min-h-[20rem]"
            >
              <Image
                src="/chale-city-preview.jpg"
                alt=""
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 45vw, 35vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <span className="wiggle absolute left-4 top-4 rounded-full bg-[#F5B300] px-3 py-1.5 text-xs font-extrabold uppercase tracking-[0.08em] text-black shadow-lg">
                {game.badge}
              </span>
              <span className="absolute inset-0 flex items-center justify-center">
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-[#F7F4EF] text-black shadow-[0_8px_30px_rgba(0,0,0,0.45)] transition-transform duration-300 group-hover:scale-110">
                  <PlayIcon size={24} className="ml-1 fill-current" />
                </span>
              </span>
            </a>

            <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
              <h4 className="font-[var(--font-syne)] text-2xl font-bold leading-[1.1] tracking-[-0.03em] text-[#F7F4EF] sm:text-3xl">
                {game.title}
              </h4>
              <p className="mt-4 text-base leading-7 text-[#F7F4EF]/65">
                {game.description}
              </p>
              <p className="mt-4 font-mono text-xs leading-5 tracking-[0.04em] text-[#F7F4EF]/45">
                <span className="sm:hidden">{game.hintMobile}</span>
                <span className="hidden sm:inline">{game.hint}</span>
              </p>
              <a
                href={game.href}
                id="play-cta"
                className="pill-btn pill-btn-cream mt-6 w-full justify-between sm:mt-8 sm:w-auto sm:justify-start sm:self-start"
              >
                <span className="pill-label">{game.ctaText}</span>
                <span className="pill-arrow">
                  <ArrowUpRight size={16} />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
