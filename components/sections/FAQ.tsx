"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { faqItems } from "@/config/site";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="relative py-24 lg:py-32">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-[#F5A623] mb-4 block">
            FAQ
          </span>
          <h2 className="font-[var(--font-syne)] text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.1]">
            Common Questions
          </h2>
        </motion.div>

        <div className="space-y-0">
          {faqItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="border-b border-white/[0.06]"
              id={`faq-${i}`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full py-6 lg:py-8 flex items-start justify-between gap-4 text-left group"
                aria-expanded={openIndex === i}
              >
                <span className="font-[var(--font-syne)] text-base lg:text-lg font-semibold text-white group-hover:text-[#F5A623] transition-colors duration-300 pr-4">
                  {item.question}
                </span>
                <span className="flex-shrink-0 w-8 h-8 rounded-full border border-white/[0.08] flex items-center justify-center group-hover:border-[#F5A623]/30 transition-all duration-300 mt-0.5">
                  {openIndex === i ? (
                    <Minus size={14} className="text-[#F5A623]" />
                  ) : (
                    <Plus size={14} className="text-[#888]" />
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
                    <p className="text-sm lg:text-base text-[#888] leading-relaxed pb-6 lg:pb-8 pr-12">
                      {item.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
