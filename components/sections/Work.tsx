"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";

const statusColors: Record<string, string> = {
  Shipped:       "text-emerald-400 bg-emerald-400/10 border-emerald-400/25",
  Live:          "text-blue-400   bg-blue-400/10   border-blue-400/25",
  "Client Work": "text-purple-400 bg-purple-400/10 border-purple-400/25",
  "Internal Tool":"text-amber-400 bg-amber-400/10 border-amber-400/25",
  Ongoing:       "text-pink-400   bg-pink-400/10   border-pink-400/25",
};

interface ProjectCfg {
  bg: string;
  accent: string;
  image: string;
  tagline: string;
}

const configs: Record<string, ProjectCfg> = {
  "VenariQ": {
    bg: "#0b0a1e", accent: "#818cf8", image: "/projects/automation-system.png",
    tagline: "AI Sales Automation Platform",
  },
  "Pharma-POS-AI": {
    bg: "#04130a", accent: "#34d399", image: "/projects/health-operations.png",
    tagline: "Pharmacy POS + AI Manager",
  },
  "WhatsApp Food Ordering SaaS": {
    bg: "#031408", accent: "#4ade80", image: "/projects/conversational-products.png",
    tagline: "WhatsApp-Native Ordering Bot",
  },
  "Kweli.AI Accounting Agent": {
    bg: "#150e00", accent: "#fbbf24", image: "/projects/automation-system.png",
    tagline: "AI Accounting Intelligence",
  },
  "GlowSalon Telegram Bot": {
    bg: "#0d0818", accent: "#a78bfa", image: "/projects/conversational-products.png",
    tagline: "Telegram Booking Assistant",
  },
  "VenariQ Lead Gen": {
    bg: "#020c1a", accent: "#60a5fa", image: "/projects/automation-system.png",
    tagline: "Automated Lead Generation Pipeline",
  },
  "Hermes Agent": {
    bg: "#120700", accent: "#fb923c", image: "/projects/conversational-products.png",
    tagline: "Internal AI Operations Agent",
  },
  "VeloxaRecruit": {
    bg: "#060818", accent: "#c084fc", image: "/projects/conversational-products.png",
    tagline: "AI Recruitment Automation",
  },
  "VeloxaHire": {
    bg: "#021210", accent: "#2dd4bf", image: "/projects/health-operations.png",
    tagline: "AI-Powered Job Matching",
  },
  "AI Bootcamp / Masterclass": {
    bg: "#160410", accent: "#f472b6", image: "/projects/conversational-products.png",
    tagline: "Hands-On AI Training Program",
  },
};

const fallbackCfg: ProjectCfg = {
  bg: "#0a0a0a", accent: "#6366f1", image: "/projects/automation-system.png",
  tagline: "AI System",
};

export default function Work() {
  return (
    <section className="relative bg-black section-space" id="work">
      <div className="site-container">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-16 grid gap-6 lg:grid-cols-12 lg:items-end lg:gap-8 lg:mb-20"
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

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {projects.map((project, i) => {
            const cfg = configs[project.name] ?? fallbackCfg;
            const featured = i === projects.length - 1;

            return (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.55, delay: (i % 3) * 0.08 }}
                whileHover={{ y: -7 }}
                className={`surface-card group relative overflow-hidden rounded-[1.75rem] border border-white/[0.08] ${
                  featured ? "lg:col-span-3 lg:grid lg:min-h-[430px] lg:grid-cols-[1.35fr_1fr]" : "flex flex-col"
                }`}
                style={{ backgroundColor: cfg.bg }}
                id={`project-${i}`}
              >
                <div className={`relative overflow-hidden ${featured ? "min-h-[300px] lg:min-h-full" : "aspect-[16/10]"}`}>
                  <Image
                    src={cfg.image}
                    alt=""
                    fill
                    sizes={featured ? "(max-width: 1024px) 100vw, 65vw" : "(max-width: 768px) 100vw, 33vw"}
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.045]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
                  <div
                    className="absolute bottom-5 left-5 rounded-full border px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.13em] backdrop-blur-md"
                    style={{
                      borderColor: `${cfg.accent}55`,
                      backgroundColor: `${cfg.bg}bb`,
                      color: cfg.accent,
                    }}
                  >
                    {cfg.tagline}
                  </div>
                </div>

                <div className={`flex flex-1 flex-col p-7 ${featured ? "justify-center lg:p-12" : ""}`}>
                  <div className="mb-5 flex items-center justify-between">
                    <span
                      className={`text-xs font-semibold px-3 py-1.5 rounded-full border ${statusColors[project.status] ?? statusColors["Shipped"]}`}
                    >
                      {project.status}
                    </span>
                    <span className="text-[11px] font-mono text-[#F7F4EF]/20">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3 className={`mb-3 font-[var(--font-syne)] font-bold leading-[1.08] tracking-[-0.025em] text-[#F7F4EF] ${featured ? "text-3xl lg:text-5xl" : "text-2xl"}`}>
                    {project.name}
                  </h3>

                  <p className={`mb-7 flex-1 leading-[1.8] text-[#F7F4EF]/50 transition-colors duration-300 group-hover:text-[#F7F4EF]/70 ${featured ? "max-w-xl text-base" : "text-sm"}`}>
                    {project.description}
                  </p>

                  <div
                    className="flex items-center justify-between gap-4 pt-5 border-t"
                    style={{ borderColor: `${cfg.accent}20` }}
                  >
                    <div className="flex flex-wrap gap-x-3 gap-y-1.5">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="text-xs font-medium text-[#F7F4EF]/30 group-hover:text-[#F7F4EF]/50 transition-colors duration-300"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 3 && (
                        <span className="text-xs text-[#F7F4EF]/20">
                          +{project.tags.length - 3}
                        </span>
                      )}
                    </div>
                    <div
                      className="flex h-9 w-9 flex-shrink-0 translate-y-1 items-center justify-center rounded-full border opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
                      style={{ borderColor: `${cfg.accent}50`, color: cfg.accent }}
                    >
                      <ArrowUpRight
                        size={14}
                        className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
                      />
                    </div>
                  </div>
                </div>

                <div
                  className="absolute left-0 top-0 bottom-0 w-[3px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ backgroundColor: cfg.accent }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
