"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";

/* ── real photos, one per project ── */
const meta: Record<string, { img: string; tagline: string; accent: string }> = {
  "Fabrication Operations Platform": {
    img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1600&auto=format&fit=crop&q=80",
    tagline: "Manufacturing Ops Platform",
    accent: "#5DE2C5",
  },
  "VenariQ": {
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1400&auto=format&fit=crop&q=80",
    tagline: "AI Sales Automation Platform",
    accent: "#818cf8",
  },
  "Pharma-POS-AI": {
    img: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=900&auto=format&fit=crop&q=80",
    tagline: "Pharmacy POS + AI Manager",
    accent: "#34d399",
  },
  "WhatsApp Food Ordering SaaS": {
    img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=900&auto=format&fit=crop&q=80",
    tagline: "WhatsApp-Native Ordering Bot",
    accent: "#4ade80",
  },
  "Kweli.AI Accounting Agent": {
    img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=900&auto=format&fit=crop&q=80",
    tagline: "AI Accounting Intelligence",
    accent: "#fbbf24",
  },
  "GlowSalon Telegram Bot": {
    img: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=900&auto=format&fit=crop&q=80",
    tagline: "Telegram Booking Assistant",
    accent: "#a78bfa",
  },
  "VenariQ Lead Gen": {
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&auto=format&fit=crop&q=80",
    tagline: "Automated Lead Pipeline",
    accent: "#60a5fa",
  },
  "Hermes Agent": {
    img: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=900&auto=format&fit=crop&q=80",
    tagline: "Internal AI Ops Agent",
    accent: "#fb923c",
  },
  "VeloxaRecruit": {
    img: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=900&auto=format&fit=crop&q=80",
    tagline: "AI Recruitment Automation",
    accent: "#c084fc",
  },
  "VeloxaHire": {
    img: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=900&auto=format&fit=crop&q=80",
    tagline: "AI-Powered Job Matching",
    accent: "#2dd4bf",
  },
  "AI Bootcamp / Masterclass": {
    img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1400&auto=format&fit=crop&q=80",
    tagline: "Hands-On AI Training Program",
    accent: "#f472b6",
  },
};

const statusColors: Record<string, string> = {
  Shipped: "text-emerald-400 bg-emerald-400/10 border-emerald-400/30",
  Live: "text-blue-400 bg-blue-400/10 border-blue-400/30",
  "Client Work": "text-purple-400 bg-purple-400/10 border-purple-400/30",
  "Internal Tool": "text-amber-400 bg-amber-400/10 border-amber-400/30",
  Ongoing: "text-pink-400 bg-pink-400/10 border-pink-400/30",
};

const fallback = { img: "", tagline: "AI System", accent: "#6366f1" };

/* ─────────────────────────────────────
   Single card
───────────────────────────────────── */
function ProjectCard({
  project,
  index,
  featured = false,
}: {
  project: (typeof projects)[0];
  index: number;
  featured?: boolean;
}) {
  const m = meta[project.name] ?? fallback;
  const caseStudyHref = project.slug ? `/work/${project.slug}` : null;

  const card = (
    <>
      {/* full-bleed image */}
      <div className="absolute inset-0">
        <Image
          src={m.img}
          alt={project.name}
          fill
          sizes={featured ? "100vw" : "(max-width:768px) 100vw, 25vw"}
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.07]"
          priority={index === 0}
        />
        {/* base gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/10" />
        {/* hover dim */}
        <div className="absolute inset-0 bg-black/25 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </div>

      {/* accent left-border on hover */}
      <div
        className="absolute bottom-0 left-0 top-0 w-[3px] -translate-x-[3px] rounded-r-full opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100"
        style={{ backgroundColor: m.accent }}
      />

      {/* top row */}
      <div className="absolute left-5 right-5 top-5 flex items-start justify-between sm:left-6 sm:right-6 sm:top-6">
        <div className="flex flex-wrap items-center gap-2">
          <span
            className={`rounded-full border px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] backdrop-blur-md ${statusColors[project.status] ?? statusColors["Shipped"]}`}
          >
            {project.status}
          </span>
          {caseStudyHref && (
            <span className="rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-white backdrop-blur-md">
              Case study
            </span>
          )}
        </div>
        <span className="font-mono text-xs text-white/40">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      {/* bottom content */}
      <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 lg:p-8">
        {/* category chip */}
        <div
          className="mb-3 inline-flex items-center rounded-full px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.1em] backdrop-blur-sm"
          style={{
            backgroundColor: `${m.accent}18`,
            color: m.accent,
            border: `1px solid ${m.accent}40`,
          }}
        >
          {m.tagline}
        </div>

        <h3
          className={`font-[var(--font-syne)] font-bold leading-[1.1] tracking-[-0.025em] text-white ${
            featured ? "text-3xl lg:text-5xl" : "text-lg lg:text-xl"
          }`}
        >
          {project.name}
        </h3>

        {/* description — slides in on hover */}
        <div className="overflow-hidden">
          <p
            className={`translate-y-3 text-sm leading-[1.75] text-white/75 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 ${
              featured ? "mt-3 max-w-2xl" : "mt-2"
            }`}
          >
            {project.description}
          </p>
        </div>

        {/* tags + arrow — appear on hover */}
        <div
          className="mt-4 flex items-center justify-between gap-3 border-t pt-4 opacity-0 transition-all duration-500 delay-75 group-hover:opacity-100"
          style={{ borderColor: `${m.accent}25` }}
        >
          {caseStudyHref ? (
            <span
              className="text-xs font-bold uppercase tracking-[0.14em]"
              style={{ color: m.accent }}
            >
              Read the case study
            </span>
          ) : (
            <div className="flex flex-wrap gap-x-3 gap-y-1">
              {project.tags.slice(0, featured ? 4 : 2).map((tag) => (
                <span key={tag} className="text-xs font-medium text-white/65">
                  {tag}
                </span>
              ))}
              {project.tags.length > (featured ? 4 : 2) && (
                <span className="text-xs text-white/40">
                  +{project.tags.length - (featured ? 4 : 2)}
                </span>
              )}
            </div>
          )}

          {project.url && !caseStudyHref ? (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border transition-transform duration-300 hover:scale-110"
              style={{ borderColor: `${m.accent}55`, color: m.accent, backgroundColor: `${m.accent}15` }}
            >
              <ArrowUpRight size={14} />
            </a>
          ) : (
            <div
              className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border transition-transform duration-300 group-hover:scale-110"
              style={{ borderColor: `${m.accent}55`, color: m.accent }}
            >
              <ArrowUpRight size={14} />
            </div>
          )}
        </div>
      </div>
    </>
  );

  const shell = `group relative block overflow-hidden rounded-[1.75rem] bg-[#0a0a0a] ${
    featured ? "min-h-[520px]" : "min-h-[360px]"
  }`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: (index % 4) * 0.08 }}
      id={`project-${index}`}
    >
      {caseStudyHref ? (
        <Link
          href={caseStudyHref}
          className={shell}
          aria-label={`${project.name} — read the case study`}
        >
          {card}
        </Link>
      ) : (
        <div className={shell}>{card}</div>
      )}
    </motion.div>
  );
}

/* ─────────────────────────────────────
   Work section
───────────────────────────────────── */
export default function Work() {
  const [featured, ...rest] = projects;
  /* Two clean rows of four, then whatever is left gets a wider treatment. */
  const grid = rest.slice(0, 8);
  const tail = rest.slice(8);

  return (
    <section className="relative bg-black section-space" id="work">
      <div className="site-container">
        {/* header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-16 grid gap-6 lg:mb-20 lg:grid-cols-12 lg:items-end lg:gap-8"
        >
          <div className="lg:col-span-3">
            <span className="section-kicker text-[#F7F4EF]/35">Selected work</span>
          </div>
          <h2 className="text-balance font-[var(--font-syne)] text-4xl font-bold leading-[1.02] tracking-[-0.045em] text-[#F7F4EF] sm:text-5xl lg:col-span-6 lg:text-7xl">
            Products built for real operations.
          </h2>
          <p className="max-w-md text-base leading-8 text-[#F7F4EF]/50 sm:text-lg lg:col-span-3">
            A cross-section of production platforms, internal tools, AI agents,
            and automation systems delivered across industries.
          </p>
        </motion.div>

        {/* featured */}
        <ProjectCard project={featured} index={0} featured />

        {/* 4-column grid */}
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {grid.map((p, i) => (
            <ProjectCard key={p.name} project={p} index={i + 1} />
          ))}
        </div>

        {/* remainder — never dropped, regardless of project count */}
        {tail.length > 0 && (
          <div
            className={`mt-4 grid grid-cols-1 gap-4 ${
              tail.length > 1 ? "md:grid-cols-2" : ""
            }`}
          >
            {tail.map((p, i) => (
              <ProjectCard
                key={p.name}
                project={p}
                index={grid.length + 1 + i}
                featured
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
