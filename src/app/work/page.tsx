import type { Metadata } from "next";
import { CountUp } from "@/components/count-up";
import { CtaBanner } from "@/components/cta";
import { Reveal, WordReveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { TestimonialMarquee } from "@/components/testimonials";
import { WorkGrid } from "@/components/work-grid";
import { testimonials } from "@/data/testimonials";

export const metadata: Metadata = {
  title: "Our Work — Case studies with real numbers",
  description:
    "Fintech apps with 2M downloads, storefronts with +41% conversion, cloud bills cut in half. Real projects, real metrics, clients you can call.",
};

export default function WorkPage() {
  return (
    <>
      {/* hero */}
      <section className="dot-grid relative overflow-hidden py-20 md:py-28">
        <div
          className="absolute -right-40 top-0 h-[26rem] w-[26rem] rounded-full bg-accent/10 blur-[130px]"
          aria-hidden="true"
        />
        <div className="container-x relative max-w-3xl">
          <Reveal>
            <p className="flex items-center gap-2.5 text-[0.72rem] font-extrabold uppercase tracking-[0.24em] text-accent-deep">
              <span className="inline-block h-[2px] w-7 bg-accent" /> Our work
            </p>
          </Reveal>
          <h1 className="mt-5 font-display text-5xl font-extrabold leading-[1.03] tracking-tight text-ink md:text-7xl">
            <WordReveal text="Numbers, not" />{" "}
            <span className="font-serif italic font-normal text-accent">
              <WordReveal text="screenshots." delay={0.25} />
            </span>
          </h1>
          <Reveal delay={0.4}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-smoke">
              Anyone can show pretty pages. Every case study below carries the metric the client hired us to move —
              and we&apos;ll happily connect you with the client so you can verify it.
            </p>
          </Reveal>
          <Reveal delay={0.5}>
            <div className="mt-10 grid max-w-lg grid-cols-3 gap-6 border-t border-line pt-7">
              {[
                { end: 320, suffix: "+", label: "Projects" },
                { end: 12, suffix: "", label: "Countries" },
                { end: 98, suffix: "%", label: "Retention" },
              ].map((s) => (
                <div key={s.label}>
                  <p className="font-display text-3xl font-extrabold text-ink">
                    <CountUp end={s.end} suffix={s.suffix} />
                  </p>
                  <p className="mt-1 text-[0.75rem] font-bold uppercase tracking-[0.14em] text-smoke">{s.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* grid */}
      <section className="pb-24 md:pb-32">
        <div className="container-x">
          <WorkGrid />
        </div>
      </section>

      {/* reviews band */}
      <section className="noise relative overflow-hidden bg-night py-20 text-bone md:py-28">
        <div className="container-x relative">
          <SectionHeading
            dark
            align="center"
            kicker="Behind the numbers"
            title="The clients behind"
            accentTitle="the metrics."
          />
        </div>
        <div className="relative mt-14">
          <TestimonialMarquee items={testimonials} dark />
        </div>
      </section>

      <CtaBanner
        title="Want numbers like these?"
        accent="Let's make them."
        copy="Bring us your hardest problem. We'll tell you in one call whether we're the right team to solve it — and exactly what it would take."
      />
    </>
  );
}
