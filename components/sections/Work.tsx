"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";

const statusBadgeClass: Record<string, string> = {
  Shipped: "badge-shipped",
  Live: "badge-live",
  "Client Work": "badge-client",
  "Internal Tool": "badge-internal",
  Ongoing: "badge-ongoing",
};

export default function Work() {
  return (
    <section className="relative py-24 lg:py-32" id="work">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-4 lg:mb-6"
        >
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-[#F5A623] mb-4 block">
            Portfolio
          </span>
          <h2 className="font-[var(--font-syne)] text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.1]">
            Selected Work
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-base text-[#888] mb-16 lg:mb-20 max-w-xl"
        >
          A selection of systems built and shipped — from MVP to production.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/[0.1] transition-all duration-500 overflow-hidden"
              id={`project-${i}`}
            >
              {/* Top gradient line */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#F5A623]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="p-6 lg:p-8">
                {/* Header row */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-[var(--font-syne)] text-lg lg:text-xl font-bold text-white group-hover:text-[#F5A623] transition-colors duration-300">
                        {project.name}
                      </h3>
                      <span
                        className={`px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider rounded-full ${
                          statusBadgeClass[project.status] || "badge-shipped"
                        }`}
                      >
                        {project.status}
                      </span>
                    </div>
                  </div>

                  <div className="w-8 h-8 rounded-full border border-white/[0.08] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 ml-4 flex-shrink-0">
                    <ArrowUpRight
                      size={12}
                      className="text-[#F5A623] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
                    />
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-[#888] leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-[11px] font-medium text-white/30 bg-white/[0.03] rounded-md border border-white/[0.04] group-hover:text-white/50 group-hover:border-white/[0.08] transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
