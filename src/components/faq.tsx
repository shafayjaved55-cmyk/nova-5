"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import type { Faq } from "@/data/services";

export function FaqAccordion({ items, dark = false }: { items: Faq[]; dark?: boolean }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className={`divide-y rounded-3xl border ${dark ? "divide-white/10 border-white/10" : "divide-line border-line bg-white"}`}>
      {items.map((f, i) => {
        const isOpen = open === i;
        return (
          <div key={i}>
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left md:px-8"
              aria-expanded={isOpen}
            >
              <span className={`font-display text-[1.02rem] font-bold ${dark ? "text-bone" : "text-ink"}`}>{f.q}</span>
              <span
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                  isOpen
                    ? "rotate-45 border-accent bg-accent text-white"
                    : dark
                      ? "border-white/20 text-bone/70"
                      : "border-line text-ink"
                }`}
              >
                <Plus className="h-4 w-4" />
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p className={`px-6 pb-6 text-[0.95rem] leading-relaxed md:px-8 ${dark ? "text-bone/60" : "text-smoke"}`}>
                    {f.a}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
