import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  return (
    <section className="border-t border-white/10 py-16 sm:py-24" id="testimonials">
      <div className="site-container grid gap-8 lg:grid-cols-12 lg:gap-12">
        <h2 className="section-kicker self-start text-[#F7F4EF]/50 lg:col-span-3">
          What people say
        </h2>

        {/* Phones: one swipeable strip so five quotes don't become a long scroll. sm+: grid. */}
        <div className="-mx-4 flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 pb-2 [scrollbar-width:none] sm:mx-0 sm:grid sm:grid-cols-2 sm:gap-4 sm:overflow-visible sm:px-0 sm:pb-0 lg:col-span-9 [&::-webkit-scrollbar]:hidden">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex min-w-[82%] snap-center flex-col justify-between gap-8 rounded-2xl border border-white/10 p-6 sm:min-w-0"
            >
              <blockquote className="font-[var(--font-syne)] text-lg font-medium leading-[1.5] tracking-[-0.015em] text-[#F7F4EF]">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="text-sm text-[#F7F4EF]/50">
                <span className="font-semibold text-[#F7F4EF]/80">{t.name}</span>
                <br />
                {t.role && <>{t.role} · </>}
                {t.company}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
