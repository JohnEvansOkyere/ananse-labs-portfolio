import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { game } from "@/config/site";

export default function Play() {
  return (
    <section className="border-t border-white/10 py-16 sm:py-24" id="play">
      <div className="site-container grid gap-8 lg:grid-cols-12 lg:gap-12">
        <h2 className="section-kicker self-start text-[#F7F4EF]/50 lg:col-span-3">
          Play
        </h2>

        {/* Phones: art on top, text and a full-width button below. sm+: art beside the text. */}
        <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#0a0a0a] sm:grid sm:grid-cols-[1fr_1.1fr] lg:col-span-9">
          <a
            href={game.href}
            tabIndex={-1}
            aria-hidden
            className="relative block aspect-[16/10] sm:aspect-auto sm:min-h-[20rem]"
          >
            <Image
              src="/chale-city-preview.jpg"
              alt=""
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 45vw, 35vw"
              className="object-cover"
            />
          </a>

          <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
            <h3 className="font-[var(--font-syne)] text-3xl font-bold leading-[1.05] tracking-[-0.04em] text-[#F7F4EF] sm:text-4xl">
              {game.title}
            </h3>
            <p className="mt-4 text-base leading-7 text-[#F7F4EF]/60">
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
    </section>
  );
}
