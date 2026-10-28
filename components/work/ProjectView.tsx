import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";
import type { ProjectDetail } from "@/data/project-details";

function Block({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-t border-white/10 py-14 sm:py-20">
      <div className="site-container grid gap-8 lg:grid-cols-12 lg:gap-12">
        <h2 className="section-kicker self-start text-[#F7F4EF]/50 lg:col-span-3">
          {label}
        </h2>
        <div className="lg:col-span-9">{children}</div>
      </div>
    </section>
  );
}

export default function ProjectView({
  project,
  detail,
  next,
}: {
  project: Project;
  detail: ProjectDetail;
  next?: Project;
}) {
  return (
    <>
      <section className="pb-14 pt-32 sm:pb-20 sm:pt-40">
        <div className="site-container">
          <Link
            href="/work"
            className="group inline-flex items-center gap-2 text-sm font-medium text-[#F7F4EF]/50 transition-colors hover:text-[#F7F4EF]"
          >
            <ArrowLeft
              size={15}
              className="transition-transform duration-300 group-hover:-translate-x-1"
            />
            All work
          </Link>

          <div className="mt-10">
            <p className="section-kicker text-[#E74C3C]">{detail.kicker}</p>
          </div>
          <h1 className="rise mt-6 text-balance font-[var(--font-syne)] text-[clamp(2.25rem,6.5vw,4.75rem)] font-bold leading-[1.02] tracking-[-0.045em] text-[#F7F4EF]">
            {project.name}
          </h1>
          <p
            className="rise mt-5 max-w-3xl text-balance text-xl leading-8 text-[#F7F4EF]/65 sm:text-2xl sm:leading-9"
            style={{ animationDelay: "0.1s" }}
          >
            {detail.tagline}
          </p>

          <dl className="mt-10 grid gap-6 border-t border-white/10 pt-8 sm:grid-cols-3 sm:gap-8">
            <div>
              <dt className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-[#F7F4EF]/40">
                My role
              </dt>
              <dd className="mt-2 text-sm leading-6 text-[#F7F4EF]/85">
                {detail.role}
              </dd>
            </div>
            <div>
              <dt className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-[#F7F4EF]/40">
                Status
              </dt>
              <dd className="mt-2 text-sm leading-6 text-[#F7F4EF]/85">
                {project.status}
              </dd>
            </div>
            <div>
              <dt className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-[#F7F4EF]/40">
                Built with
              </dt>
              <dd className="mt-2 text-sm leading-6 text-[#F7F4EF]/85">
                {project.tags.join(" · ")}
              </dd>
            </div>
          </dl>

          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="pill-btn pill-btn-cream mt-10 w-full justify-between sm:w-auto sm:justify-start"
            >
              <span className="pill-label">Visit {project.name}</span>
              <span className="pill-arrow">
                <ArrowUpRight size={16} />
              </span>
            </a>
          )}
        </div>
      </section>

      <Block label="What it is">
        <div className="max-w-2xl space-y-5">
          {detail.summary.map((paragraph) => (
            <p
              key={paragraph}
              className="text-lg leading-8 text-[#F7F4EF]/70 first:text-xl first:text-[#F7F4EF]"
            >
              {paragraph}
            </p>
          ))}
        </div>

        {detail.status && (
          <div className="mt-10 max-w-2xl rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:p-6">
            <p className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.14em] text-[#F7F4EF]/50">
              <span className="h-2 w-2 rounded-full bg-amber-400 shadow-[0_0_10px_rgba(251,191,36,0.6)]" />
              Where it stands
            </p>
            <p className="mt-3 text-base leading-7 text-[#F7F4EF]/75">
              {detail.status}
            </p>
          </div>
        )}
      </Block>

      <Block label="The tour">
        <p className="mb-10 text-lg text-[#F7F4EF]/60">
          Come on in — here&apos;s how it works, start to finish.
        </p>
        <ol>
          {detail.walkthrough.map((step, i) => (
            <li
              key={step.title}
              className="grid grid-cols-[3rem_1fr] gap-x-4 border-t border-white/10 py-7 first:border-t-0 first:pt-0 sm:grid-cols-[4.5rem_1fr] sm:py-9"
            >
              <span className="font-[var(--font-syne)] text-3xl font-bold leading-none tracking-[-0.04em] text-[#E74C3C] sm:text-4xl">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-[var(--font-syne)] text-xl font-bold leading-snug tracking-[-0.025em] text-[#F7F4EF] sm:text-2xl">
                  {step.title}
                </h3>
                <p className="mt-3 max-w-2xl text-base leading-7 text-[#F7F4EF]/60">
                  {step.body}
                </p>
                {step.image && (
                  <Image
                    src={step.image}
                    alt={step.title}
                    width={1200}
                    height={750}
                    className="mt-6 h-auto w-full rounded-2xl ring-1 ring-white/10"
                  />
                )}
              </div>
            </li>
          ))}
        </ol>
      </Block>

      <Block label="Highlights">
        <ul className="grid gap-x-10 gap-y-4 sm:grid-cols-2">
          {detail.highlights.map((highlight) => (
            <li
              key={highlight}
              className="flex gap-3 text-base leading-7 text-[#F7F4EF]/70"
            >
              <span className="mt-[0.7rem] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#E74C3C]" />
              {highlight}
            </li>
          ))}
        </ul>
      </Block>

      <Block label="Your turn">
        <p className="max-w-xl text-balance font-[var(--font-syne)] text-2xl font-bold leading-[1.2] tracking-[-0.03em] text-[#F7F4EF] sm:text-3xl">
          Got something like this in mind? Let&apos;s build it.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
          <Link
            href="/#contact"
            className="pill-btn pill-btn-cream w-full justify-between sm:w-auto sm:justify-start"
          >
            <span className="pill-label">Say hello</span>
            <span className="pill-arrow">
              <ArrowUpRight size={16} />
            </span>
          </Link>
          {next?.slug && (
            <Link
              href={`/work/${next.slug}`}
              className="group inline-flex min-h-12 items-center justify-center gap-1.5 rounded-full border border-white/15 px-5 text-sm font-semibold text-[#F7F4EF]/80 transition-colors hover:border-white/30 hover:text-[#F7F4EF] sm:border-0 sm:px-0 sm:text-[#F7F4EF]/70"
            >
              Next up: {next.name}
              <ArrowUpRight
                size={15}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          )}
        </div>
      </Block>
    </>
  );
}
