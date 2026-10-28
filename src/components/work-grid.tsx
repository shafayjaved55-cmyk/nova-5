"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { caseStudies, type CaseStudy } from "@/data/work";

const categories = ["All", "Web", "Mobile", "Design", "E-commerce", "Marketing", "Cloud"] as const;

export function WorkGrid() {
  const [active, setActive] = useState<(typeof categories)[number]>("All");
  const filtered = active === "All" ? caseStudies : caseStudies.filter((c) => c.category === active);

  return (
    <div>
      <div className="mb-10 flex flex-wrap gap-2">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setActive(c)}
            className={`rounded-full border px-5 py-2.5 text-[0.85rem] font-bold transition-all ${
              active === c
                ? "border-ink bg-ink text-bone"
                : "border-line bg-white text-smoke hover:border-ink hover:text-ink"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <motion.div layout className="grid gap-6 md:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {filtered.map((c) => (
            <motion.article
              layout
              key={c.title}
              initial={{ opacity: 0, scale: 0.96, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 24 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="group relative overflow-hidden rounded-3xl border border-line bg-white"
            >
              <CaseCardInner c={c} />
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

function CaseCardInner({ c }: { c: CaseStudy }) {
  return (
    <>
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={c.image}
          alt={c.imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
        <div className="absolute left-5 top-5 flex gap-2">
          <span className="rounded-full bg-white/90 px-3.5 py-1.5 text-[0.7rem] font-extrabold uppercase tracking-[0.14em] text-ink backdrop-blur">
            {c.category}
          </span>
          <span className="rounded-full bg-accent px-3.5 py-1.5 text-[0.7rem] font-extrabold uppercase tracking-[0.14em] text-white">
            {c.year}
          </span>
        </div>
        <p className="absolute bottom-5 left-5 right-5 font-display text-xl font-bold leading-snug text-white md:text-2xl">
          {c.title}
        </p>
      </div>
      <div className="p-6 md:p-7">
        <div className="flex items-center justify-between">
          <p className="text-[0.8rem] font-bold uppercase tracking-[0.16em] text-fog">
            {c.client} · {c.industry}
          </p>
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-line transition-all duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-white">
            <ArrowUpRight className="h-4 w-4" />
          </span>
        </div>
        <p className="mt-3 text-[0.95rem] leading-relaxed text-smoke">{c.summary}</p>
        <div className="mt-5 grid grid-cols-3 gap-3 border-t border-line pt-5">
          {c.metrics.map((m) => (
            <div key={m.label}>
              <p className="font-display text-lg font-extrabold text-accent md:text-xl">{m.value}</p>
              <p className="mt-0.5 text-[0.72rem] font-semibold leading-snug text-smoke">{m.label}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
