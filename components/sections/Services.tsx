"use client";

import { motion } from "framer-motion";
import {
  Workflow,
  Bot,
  Layers,
  Brain,
  GraduationCap,
  Database,
} from "lucide-react";
import { services } from "@/config/site";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Workflow,
  Bot,
  Layers,
  Brain,
  GraduationCap,
  Database,
};

export default function Services() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-16 lg:mb-20"
        >
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-[#F5A623] mb-4 block">
            Services
          </span>
          <h2 className="font-[var(--font-syne)] text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.1]">
            What We Build
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.04] rounded-2xl overflow-hidden">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative bg-[#0a0a0a] p-8 lg:p-10 hover:bg-white/[0.02] transition-all duration-500"
                id={`service-${i}`}
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl border border-white/[0.08] bg-white/[0.02] flex items-center justify-center mb-6 group-hover:border-[#F5A623]/30 group-hover:bg-[#F5A623]/[0.05] transition-all duration-500">
                  {Icon && (
                    <Icon
                      size={20}
                      className="text-[#888] group-hover:text-[#F5A623] transition-colors duration-500"
                    />
                  )}
                </div>

                <h3 className="font-[var(--font-syne)] text-lg font-bold text-white mb-3 group-hover:text-[#F5A623] transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-sm text-[#888] leading-relaxed">
                  {service.description}
                </p>

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-[#F5A623]/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-bl-3xl" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
