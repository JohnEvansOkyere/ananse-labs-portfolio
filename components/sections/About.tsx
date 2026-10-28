import { quote } from "@/config/site";

export default function About() {
  return (
    <section className="border-t border-white/10 py-16 sm:py-24" id="about">
      <div className="site-container grid gap-8 lg:grid-cols-12 lg:gap-12">
        <h2 className="section-kicker self-start text-[#F7F4EF]/50 lg:col-span-3">About</h2>

        <div className="lg:col-span-9">
          <p className="max-w-2xl text-balance font-[var(--font-syne)] text-2xl font-semibold leading-[1.4] tracking-[-0.025em] text-[#F7F4EF] sm:text-3xl">
            I build custom software and AI systems for real businesses —
            e-commerce, pharmacy POS, school and church management, hiring
            and HR, factory operations, sales automation — and teach others to do the same.
          </p>
          <p className="mt-6 max-w-2xl text-base leading-7 text-[#F7F4EF]/60">
            I like to get close to the work first. On a recent client project I
            spent a month on site before writing any code.
          </p>

          <blockquote
            id="profile-quote"
            className="mt-12 max-w-2xl border-l-2 border-[#E74C3C] pl-5 sm:mt-14 sm:pl-6"
          >
            <p className="text-lg leading-8 text-[#F7F4EF]/75">
              &ldquo;{quote.text}&rdquo;
            </p>
            <cite className="mt-3 block text-sm not-italic text-[#F7F4EF]/45">
              {quote.author} — my favourite quote
            </cite>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
