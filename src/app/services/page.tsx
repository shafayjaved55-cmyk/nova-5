import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { CtaBanner } from "@/components/cta";
import { PartnerBadges } from "@/components/partners";
import { Reveal, WordReveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { ServiceIcon } from "@/components/service-icon";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Services — Web, Mobile, Design, Marketing, E-commerce & Cloud",
  description:
    "Six integrated services, one accountable team. Web development, mobile apps, UI/UX design, digital marketing, e-commerce and cloud — engineered to pay for themselves.",
};

const engagementModels = [
  {
    name: "Fixed-scope project",
    best: "Best for launches & rebuilds",
    desc: "A defined scope, timeline and price agreed before we start. You always know what you're paying and what you're getting.",
    points: ["Fixed quote, no hourly creep", "Week-by-week delivery plan", "Typical range: $5k – $60k"],
  },
  {
    name: "Dedicated squad",
    best: "Best for ongoing products",
    desc: "A senior team embedded in your roadmap — engineers, a designer and a PM who work only on your product, month after month.",
    points: ["Monthly retainer, cancel monthly", "Scales up or down with your roadmap", "Your tools, your standups"],
  },
  {
    name: "Growth partnership",
    best: "Best for revenue targets",
    desc: "Build + marketing under one roof: we build the funnel, run the traffic and report on revenue — one team, one number.",
    points: ["Revenue dashboard you can watch", "CRO, paid & SEO included", "Quarterly strategy offsites"],
  },
];

export default function ServicesPage() {
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
              <span className="inline-block h-[2px] w-7 bg-accent" /> Services
            </p>
          </Reveal>
          <h1 className="mt-5 font-display text-5xl font-extrabold leading-[1.03] tracking-tight text-ink md:text-7xl">
            <WordReveal text="Everything you need to" />{" "}
            <span className="font-serif italic font-normal text-accent">
              <WordReveal text="win online." delay={0.3} />
            </span>
          </h1>
          <Reveal delay={0.45}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-smoke">
              Six services that cover the full journey — from the first pixel of your brand to the infrastructure that
              keeps it live at 3 a.m. Hire one, or hire the whole team.
            </p>
          </Reveal>
        </div>
      </section>

      {/* service list — alternating rows */}
      <section className="pb-24 md:pb-32">
        <div className="container-x space-y-6">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={0.05}>
              <Link
                href={`/services/${s.slug}`}
                className={`group grid overflow-hidden rounded-[2rem] border border-line bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_40px_80px_-40px_rgba(16,16,20,0.45)] lg:grid-cols-2 ${
                  i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div className="relative min-h-[17rem] overflow-hidden lg:min-h-[22rem]">
                  <Image
                    src={s.heroImage}
                    alt={s.heroImageAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/30 to-transparent" />
                </div>
                <div className="flex flex-col justify-center p-8 md:p-12">
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-bone text-ink transition-colors duration-300 group-hover:bg-accent group-hover:text-white">
                      <ServiceIcon name={s.icon} className="h-5 w-5" />
                    </span>
                    <span className="font-display text-sm font-extrabold text-fog">0{i + 1}</span>
                  </div>
                  <h2 className="mt-5 font-display text-2xl font-bold text-ink md:text-3xl">{s.name}</h2>
                  <p className="mt-3 max-w-md text-[1rem] leading-relaxed text-smoke">{s.tagline}</p>
                  <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                    {s.outcomes.map((o) => (
                      <li key={o.label} className="flex items-center gap-2 text-[0.85rem] font-semibold text-ink/80">
                        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-accent-soft">
                          <Check className="h-3 w-3 text-accent-deep" />
                        </span>
                        {o.value} {o.label.toLowerCase()}
                      </li>
                    ))}
                  </ul>
                  <span className="mt-7 inline-flex w-fit items-center gap-2 rounded-full bg-ink px-6 py-3 font-display text-sm font-bold text-bone transition-colors group-hover:bg-accent">
                    View {s.shortName}
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* engagement models */}
      <section className="bg-cream py-24 md:py-32">
        <div className="container-x">
          <SectionHeading
            align="center"
            kicker="How we work together"
            title="Three ways to hire us —"
            accentTitle="all month-to-month after kickoff."
            copy="Whether you need one rebuild or a full product team, the commercials stay simple and transparent."
          />
          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {engagementModels.map((m, i) => (
              <Reveal key={m.name} delay={i * 0.1}>
                <div className="flex h-full flex-col rounded-3xl border border-line bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_60px_-30px_rgba(16,16,20,0.35)]">
                  <p className="text-[0.72rem] font-extrabold uppercase tracking-[0.18em] text-accent-deep">{m.best}</p>
                  <h3 className="mt-3 font-display text-2xl font-bold text-ink">{m.name}</h3>
                  <p className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-smoke">{m.desc}</p>
                  <ul className="mt-6 space-y-2.5 border-t border-line pt-5">
                    {m.points.map((p) => (
                      <li key={p} className="flex items-center gap-2.5 text-[0.9rem] font-semibold text-ink/80">
                        <Check className="h-4 w-4 shrink-0 text-mint" /> {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2} className="mt-16">
            <div className="flex flex-col items-center gap-6 rounded-[2rem] border border-line bg-white p-8 text-center md:p-12">
              <div className="w-full max-w-3xl">
                <PartnerBadges />
              </div>
              <p className="max-w-xl text-[0.95rem] leading-relaxed text-smoke">
                Certified across the platforms we build on — so your project is built by people the platforms
                themselves have vetted.
              </p>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 font-display text-base font-bold text-white transition-colors hover:bg-accent-deep"
              >
                Get a fixed quote for your project
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBanner
        title="Not sure which service you need?"
        accent="We'll tell you honestly."
        copy="Book a free 30-minute call. If another route is better for you — including not hiring us at all — we'll say exactly that."
      />
    </>
  );
}
