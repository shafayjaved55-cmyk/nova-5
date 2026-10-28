import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal, WordReveal } from "@/components/reveal";

export function CtaBanner({
  title = "Have a project in mind?",
  accent = "Let's build it.",
  copy = "Tell us where your business is headed. We'll come back within one business day with honest advice, a clear plan and a fixed quote — no obligation, no sales theater.",
}: {
  title?: string;
  accent?: string;
  copy?: string;
}) {
  return (
    <section className="noise relative overflow-hidden bg-night py-24 text-bone md:py-32">
      <div className="dot-grid-light absolute inset-0 opacity-50" aria-hidden="true" />
      <div
        className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-accent/25 blur-[120px]"
        aria-hidden="true"
      />
      <div className="container-x relative">
        <div className="flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <Reveal>
              <p className="flex items-center gap-2.5 text-[0.72rem] font-extrabold uppercase tracking-[0.24em] text-accent">
                <span className="inline-block h-[2px] w-7 bg-accent" /> Ready when you are
              </p>
            </Reveal>
            <h2 className="mt-5 font-display text-5xl font-bold leading-[1.02] tracking-tight md:text-7xl">
              <WordReveal text={title} />{" "}
              <span className="font-serif italic font-normal text-accent">
                <WordReveal text={accent} delay={0.25} />
              </span>
            </h2>
            <Reveal delay={0.35}>
              <p className="mt-6 max-w-xl text-[1.05rem] leading-relaxed text-bone/60">{copy}</p>
            </Reveal>
          </div>
          <Reveal delay={0.45} className="flex flex-col gap-4 sm:flex-row lg:flex-col">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-accent px-8 py-4 font-display text-base font-bold text-white transition-all hover:bg-accent-deep"
            >
              Book a free consultation
              <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <Link
              href="/work"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-8 py-4 font-display text-base font-bold text-bone transition-colors hover:border-accent hover:text-accent"
            >
              See our results first
            </Link>
            <p className="text-center text-xs text-bone/40 sm:text-left lg:text-center">
              Average reply time: under 4 business hours
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
