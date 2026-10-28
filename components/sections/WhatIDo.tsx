import { whatIDo, stack } from "@/config/site";

export default function WhatIDo() {
  return (
    <section className="border-t border-white/10 py-16 sm:py-24" id="what-i-do">
      <div className="site-container grid gap-8 lg:grid-cols-12 lg:gap-12">
        <h2 className="section-kicker self-start text-[#F7F4EF]/50 lg:col-span-3">
          What I do
        </h2>

        <div className="lg:col-span-9">
          <ul className="grid gap-x-12 gap-y-10 sm:grid-cols-2">
            {whatIDo.map((item, i) => (
              <li key={item.title}>
                <span className="font-mono text-xs tracking-[0.14em] text-[#F7F4EF]/30">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-[var(--font-syne)] text-2xl font-bold leading-tight tracking-[-0.03em] text-[#F7F4EF]">
                  {item.title}
                </h3>
                <p className="mt-3 max-w-md text-base leading-7 text-[#F7F4EF]/60">
                  {item.description}
                </p>
              </li>
            ))}
          </ul>

          <p className="mt-14 text-sm leading-7 text-[#F7F4EF]/50">
            <span className="font-semibold text-[#F7F4EF]/80">Tools</span>
            {" — "}
            {stack.join(" · ")}
          </p>
        </div>
      </div>
    </section>
  );
}
