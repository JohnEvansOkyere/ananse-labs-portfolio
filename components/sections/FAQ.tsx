"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { faqItems, siteConfig } from "@/config/site";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="relative bg-[#0a0a0a] section-space">
      <div className="site-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-14 max-w-3xl text-center lg:mb-16"
        >
          <span className="section-kicker justify-center text-[#F7F4EF]/40">
            FAQ
          </span>
          <h2 className="mt-6 text-balance font-[var(--font-syne)] text-4xl font-bold leading-[1.08] tracking-[-0.04em] text-[#F7F4EF] sm:text-5xl lg:text-6xl">
            Questions, answered clearly.
          </h2>
        </motion.div>

        <div className="mx-auto max-w-4xl">
            <div className="h-[1px] bg-[#F7F4EF]/[0.07]" />

            {faqItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group border-b border-[#F7F4EF]/[0.07] transition-colors hover:border-[#F7F4EF]/20"
                id={`faq-${i}`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="flex w-full items-start justify-between gap-6 py-7 text-left lg:py-9"
                  aria-expanded={openIndex === i}
                >
                  <span className="pr-4 font-[var(--font-syne)] text-lg font-semibold text-[#F7F4EF] transition-colors duration-300 group-hover:text-white sm:text-xl lg:text-2xl">
                    {item.question}
                  </span>
                  <span className="flex-shrink-0 w-10 h-10 rounded-full border border-[#F7F4EF]/[0.1] flex items-center justify-center mt-0.5 text-[#F7F4EF]/30 group-hover:text-[#F7F4EF] group-hover:border-[#F7F4EF]/25 transition-all duration-300">
                    {openIndex === i ? (
                      <Minus size={16} />
                    ) : (
                      <Plus size={16} />
                    )}
                  </span>
                </button>

                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="text-base lg:text-lg text-[#F7F4EF]/65 leading-[1.8] pb-8 lg:pb-10 pr-16">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
                  className="mt-12 text-center text-base text-[#F7F4EF]/50"
            >
              Still have questions?{" "}
              <a
                href={siteConfig.calendly}
                className="text-[#F7F4EF]/50 underline underline-offset-4 hover:text-[#F7F4EF] transition-colors duration-300"
              >
                Schedule your call
              </a>
              — no commitment.
            </motion.p>
        </div>
      </div>
    </section>
  );
}
