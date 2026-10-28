import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Compass, HeartHandshake, ShieldCheck, Target } from "lucide-react";
import { CountUp } from "@/components/count-up";
import { CtaBanner } from "@/components/cta";
import { PartnerBadges } from "@/components/partners";
import { Reveal, Stagger, StaggerItem, WordReveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { team } from "@/data/team";

export const metadata: Metadata = {
  title: "About Us — Built by engineers, run like a product team",
  description:
    "Nova Solution started in 2016 with two laptops and one rule: never ship anything you wouldn't put your name on. Meet the people and principles behind 320+ projects.",
};

const values = [
  {
    icon: Target,
    title: "Outcomes over output",
    desc: "We don't bill for deliverables. Every project starts with the business number it needs to move — and ends when it moves.",
  },
  {
    icon: ShieldCheck,
    title: "Radical transparency",
    desc: "Live dashboards, shared Slack channels and honest timelines. If a launch is slipping, you hear it from us first.",
  },
  {
    icon: Compass,
    title: "Senior judgment",
    desc: "Nine years is the average experience on our team. You get people who've made the mistakes before, so you don't pay for them.",
  },
  {
    icon: HeartHandshake,
    title: "Partners, not vendors",
    desc: "We've talked clients out of projects that weren't right for them. Long-term trust beats short-term invoices.",
  },
];

const milestones = [
  { year: "2016", title: "Two laptops, one rule", desc: "Hassan Raza founds Nova in a shared office in Lahore with a single principle: never ship anything you wouldn't sign." },
  { year: "2017", title: "First ten clients", desc: "Word of mouth does the marketing. Ten local businesses, ten referrals — the retention rate that still defines us is set here." },
  { year: "2019", title: "The design studio opens", desc: "Research-led product design becomes a core discipline. Ayesha joins to build the studio and its critique culture." },
  { year: "2021", title: "Dubai & the GCC", desc: "Faisal opens the Dubai office. Fintech and healthcare clients put Nova's work in six new markets." },
  { year: "2023", title: "Project 200 & the growth team", desc: "The marketing practice formalizes — build and growth under one roof, reporting to one revenue dashboard." },
  { year: "2025", title: "53 people, 12 countries", desc: "A fully senior team across Lahore and Dubai, still holding the rule from 2016. The best is genuinely ahead." },
];

export default function AboutPage() {
  return (
    <>
      {/* hero */}
      <section className="dot-grid relative overflow-hidden py-20 md:py-28">
        <div
          className="absolute -left-40 bottom-0 h-[24rem] w-[24rem] rounded-full bg-accent/10 blur-[130px]"
          aria-hidden="true"
        />
        <div className="container-x relative grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <Reveal>
              <p className="flex items-center gap-2.5 text-[0.72rem] font-extrabold uppercase tracking-[0.24em] text-accent-deep">
                <span className="inline-block h-[2px] w-7 bg-accent" /> About Nova Solution
              </p>
            </Reveal>
            <h1 className="mt-5 font-display text-5xl font-extrabold leading-[1.03] tracking-tight text-ink md:text-6xl">
              <WordReveal text="A product team that" />{" "}
              <span className="font-serif italic font-normal text-accent">
                <WordReveal text="happens to be" delay={0.25} />{" "}
                <WordReveal text="an agency." delay={0.4} />
              </span>
            </h1>
            <Reveal delay={0.5}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-smoke">
                We started in 2016 with two laptops and one rule — never ship anything you wouldn&apos;t put your own
                name on. Nine years and 320+ projects later, that rule is still the business plan.
              </p>
            </Reveal>
            <Reveal delay={0.6}>
              <div className="mt-9 grid grid-cols-3 gap-6 border-t border-line pt-7">
                {[
                  { end: 320, suffix: "+", label: "Projects shipped" },
                  { end: 53, suffix: "", label: "People on the team" },
                  { end: 98, suffix: "%", label: "Client retention" },
                ].map((s) => (
                  <div key={s.label}>
                    <p className="font-display text-3xl font-extrabold text-ink md:text-4xl">
                      <CountUp end={s.end} suffix={s.suffix} />
                    </p>
                    <p className="mt-1 text-[0.75rem] font-bold uppercase tracking-[0.14em] text-smoke">{s.label}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.25}>
            <div className="grid grid-cols-2 gap-4">
              <div className="overflow-hidden rounded-3xl">
                <Image
                  src="/images/life/office-desk.jpg"
                  alt="The Nova team working at the Lahore office"
                  width={640}
                  height={800}
                  className="h-72 w-full object-cover md:h-80"
                />
              </div>
              <div className="mt-10 overflow-hidden rounded-3xl">
                <Image
                  src="/images/life/brainstorm.jpg"
                  alt="Nova team members in a strategy session"
                  width={640}
                  height={800}
                  className="h-72 w-full object-cover md:h-80"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* story */}
      <section className="bg-cream py-24 md:py-32">
        <div className="container-x grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading
            kicker="Our story"
            title="Nine years of saying"
            accentTitle="what needs to be said."
            copy="The story isn't the offices or the headcount. It's the decision, made 320 times, to tell clients the truth instead of what they want to hear."
          />
          <div className="space-y-6 text-[1.05rem] leading-relaxed text-ink/80">
            <Reveal>
              <p>
                In 2016, Hassan Raza was a systems lead watching agencies overpromise and underdeliver — scope crept,
                juniors learned on client budgets, and &ldquo;done&rdquo; meant something different to everyone. He
                started Nova with a simple bet: a small team of genuinely senior people, honest timelines and code
                clients fully own would win more work than any pitch deck.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p>
                The bet paid. Our first ten clients came entirely from referrals, and nine of them still work with us
                today. That 98% retention rate isn&apos;t a marketing line — it&apos;s the compounding interest on
                telling a founder their idea needs rethinking before we invoice them for building it.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p>
                Today we&apos;re 53 engineers, designers, researchers and strategists across Lahore and Dubai. We&apos;ve
                shipped fintech apps with two million downloads, rebuilt storefronts that doubled conversion, and cut
                cloud bills in half. What we haven&apos;t done is ship anything we wouldn&apos;t sign.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* values */}
      <section className="py-24 md:py-32">
        <div className="container-x">
          <SectionHeading
            align="center"
            kicker="What we believe"
            title="Four principles that decide"
            accentTitle="everything."
          />
          <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <StaggerItem
                key={v.title}
                className="group rounded-3xl border border-line bg-white p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_30px_60px_-30px_rgba(16,16,20,0.35)]"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-bone text-ink transition-colors duration-300 group-hover:bg-accent group-hover:text-white">
                  <v.icon className="h-6 w-6" strokeWidth={1.8} />
                </span>
                <h3 className="mt-6 font-display text-lg font-bold text-ink">{v.title}</h3>
                <p className="mt-2.5 text-[0.92rem] leading-relaxed text-smoke">{v.desc}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* timeline */}
      <section className="noise relative overflow-hidden bg-night py-24 text-bone md:py-32">
        <div className="dot-grid-light absolute inset-0 opacity-40" aria-hidden="true" />
        <div className="container-x relative">
          <SectionHeading
            dark
            kicker="The journey"
            title="From two laptops to"
            accentTitle="twelve countries."
          />
          <div className="mt-16 grid gap-x-10 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
            {milestones.map((m, i) => (
              <Reveal key={m.year} delay={i * 0.08}>
                <div className="relative border-l-2 border-accent/40 pl-7">
                  <span className="absolute -left-[7px] top-1.5 h-3 w-3 rounded-full bg-accent" />
                  <p className="font-display text-sm font-extrabold tracking-[0.2em] text-accent">{m.year}</p>
                  <h3 className="mt-2 font-display text-xl font-bold">{m.title}</h3>
                  <p className="mt-2 text-[0.92rem] leading-relaxed text-bone/55">{m.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* leadership preview */}
      <section className="py-24 md:py-32">
        <div className="container-x">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              kicker="Leadership"
              title="The people who set"
              accentTitle="the bar."
            />
            <Reveal delay={0.2}>
              <Link
                href="/team"
                className="group inline-flex shrink-0 items-center gap-2 rounded-full border border-ink/15 bg-white px-6 py-3.5 font-display text-sm font-bold text-ink transition-colors hover:border-ink"
              >
                Meet everyone
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Reveal>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {team.slice(0, 4).map((m, i) => (
              <Reveal key={m.name} delay={i * 0.08}>
                <div className="group overflow-hidden rounded-3xl border border-line bg-white">
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <Image
                      src={m.photo}
                      alt={`${m.name}, ${m.role} at Nova Solution`}
                      fill
                      sizes="(max-width: 768px) 100vw, 25vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                    />
                  </div>
                  <div className="p-5">
                    <p className="font-display font-bold text-ink">{m.name}</p>
                    <p className="text-[0.85rem] font-semibold text-accent-deep">{m.role}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* partners */}
      <section className="border-y border-line bg-cream py-16">
        <div className="container-x">
          <Reveal>
            <p className="mb-8 text-center text-[0.72rem] font-extrabold uppercase tracking-[0.26em] text-fog">
              Certifications our teams hold
            </p>
          </Reveal>
          <PartnerBadges />
        </div>
      </section>

      <CtaBanner
        title="Like how we think?"
        accent="Work with us."
        copy="Whether you need a product built or a career that matters, the door's open. We reply to every message within 4 business hours."
      />
    </>
  );
}
