"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section className="relative py-24 lg:py-32" id="about">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Text Column */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
            >
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-[#F5A623] mb-4 block">
                About
              </span>
              <h2 className="font-[var(--font-syne)] text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 leading-[1.1]">
                Evans <span className="gradient-text">IS</span> Ananse AI Labs
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="space-y-6"
            >
              <p className="text-base lg:text-lg text-[#888] leading-relaxed">
                John Evans Okyere is an AI/ML Engineer and the technical force
                behind Ananse AI Labs. Based in Accra, Ghana, Evans has built
                production-grade AI systems — from multi-tenant SaaS platforms
                and pharmacy POS systems to WhatsApp ordering bots and AI
                accounting agents — for clients in Ghana, the US, and beyond.
              </p>
              <p className="text-base lg:text-lg text-[#888] leading-relaxed">
                When you work with Ananse AI Labs, you work directly with the
                person building your system. No middlemen. No handoffs. Just
                sharp, opinionated technical execution.
              </p>
            </motion.div>

            {/* Tech stack pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-wrap gap-2 mt-8"
            >
              {[
                "Python",
                "TypeScript",
                "FastAPI",
                "Next.js",
                "React",
                "Supabase",
                "PostgreSQL",
                "n8n",
                "Docker",
                "Claude",
                "GPT",
                "Gemini",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 text-xs font-medium text-white/40 border border-white/[0.06] rounded-full hover:text-[#F5A623] hover:border-[#F5A623]/20 transition-all duration-300 cursor-default"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Photo Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 order-1 lg:order-2"
          >
            <div className="relative">
              {/* Decorative frame */}
              <div className="absolute -inset-2 bg-gradient-to-br from-[#F5A623]/20 via-transparent to-[#F5A623]/10 rounded-2xl blur-sm" />
              <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02]">
                <Image
                  src="/John.jpg"
                  alt="John Evans Okyere — Founder of Ananse AI Labs"
                  width={500}
                  height={600}
                  className="w-full h-auto object-cover aspect-[4/5] grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                  priority
                />
                {/* Photo overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/60 via-transparent to-transparent" />
                {/* Name tag */}
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="font-[var(--font-syne)] text-sm font-semibold text-white">
                    John Evans Okyere
                  </p>
                  <p className="text-xs text-white/50 mt-0.5">
                    AI/ML Engineer · Accra, Ghana
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
