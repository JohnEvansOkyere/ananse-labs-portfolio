import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";
import { getCaseStudy } from "@/data/case-studies";

const rowGrid =
  "grid grid-cols-[1fr_auto] items-start gap-x-4 border-t border-white/10 py-6 sm:grid-cols-[2.5rem_1fr_7rem_1.25rem] sm:gap-x-6 sm:py-7";

function ProjectRow({ project, index }: { project: Project; index: number }) {
  const href = project.slug ? `/work/${project.slug}` : project.url;

  const body = (
    <>
      <span className="hidden pt-1.5 font-mono text-xs text-[#F7F4EF]/30 sm:block">
        {String(index + 1).padStart(2, "0")}
      </span>

      <div className="min-w-0">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
          <h3
            className={`font-[var(--font-syne)] text-xl font-bold leading-tight tracking-[-0.025em] text-[#F7F4EF] sm:text-2xl ${
              href ? "transition-colors group-hover:text-white" : ""
            }`}
          >
            {project.name}
          </h3>
          {project.slug && getCaseStudy(project.slug) && (
            <span className="rounded-full bg-[#E74C3C]/15 px-2.5 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-[#E74C3C]">
              Case study
            </span>
          )}
        </div>
        <p className="mt-2 max-w-2xl text-[0.95rem] leading-7 text-[#F7F4EF]/60">
          {project.description}
        </p>
        <p className="mt-2 text-xs leading-5 text-[#F7F4EF]/45">
          <span className="sm:hidden">
            {[project.status, ...project.tags.slice(0, 3)].join(" · ")}
          </span>
          <span className="hidden sm:inline">{project.tags.join(" · ")}</span>
        </p>
      </div>

      <span className="hidden pt-2 text-sm text-[#F7F4EF]/50 sm:block">
        {project.status}
      </span>

      {href ? (
        <ArrowUpRight
          size={20}
          className="mt-1 text-[#F7F4EF]/40 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#F7F4EF]"
        />
      ) : (
        <span aria-hidden className="hidden sm:block" />
      )}
    </>
  );

  if (project.slug) {
    return (
      <Link
        href={`/work/${project.slug}`}
        className={`group ${rowGrid}`}
        aria-label={`${project.name} — open walkthrough`}
      >
        {body}
      </Link>
    );
  }

  if (project.url) {
    return (
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className={`group ${rowGrid}`}
        aria-label={`${project.name} — visit site`}
      >
        {body}
      </a>
    );
  }

  return <div className={rowGrid}>{body}</div>;
}

export default function ProjectList({ projects }: { projects: Project[] }) {
  return (
    <ul className="border-b border-white/10">
      {projects.map((project, i) => (
        <li key={project.name}>
          <ProjectRow project={project} index={i} />
        </li>
      ))}
    </ul>
  );
}
