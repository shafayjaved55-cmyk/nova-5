import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ArrowUpRight, CheckCircle2, Quote, Star } from "lucide-react";
import { CtaBanner } from "@/components/cta";
import { FaqAccordion } from "@/components/faq";
import { Reveal, Stagger, StaggerItem, WordReveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { ServiceIcon } from "@/components/service-icon";
import { TestimonialCard } from "@/components/testimonials";
import { getService, services } from "@/data/services";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: `${service.name} — ${service.tagline}`,
    description: service.cardBlurb,
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const others = services.filter((s) => s.slug !== slug).slice(0, 3);
  const index = services.findIndex((s) => s.slug === slug);

  return (
    <>
      {/* ============ HERO ============ */}
      <section className="dot-grid relative overflow-hidden">
        <div
          className="absolute -right-40 top-0 h-[26rem] w-[26rem] rounded-full bg-accent/10 blur-[130px]"
          aria-hidden="true"
        />
        <div className="container-x relative grid items-center gap-12 py-16 md:py-24 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <Reveal>
              <div className="flex flex-wrap items-center gap-3">
                <Link
                  href="/services"
                  className="rounded-full border border-line bg-white px-4 py-2 text-[0.75rem] font-bold uppercase tracking-[0.14em] text-smoke transition-colors hover:border-ink hover:text-ink"
                >
                  Services
                </Link>
                <span className="text-fog">/</span>
                <span className="text-[0.75rem] font-bold uppercase tracking-[0.14em] text-accent-deep">
                  0{index + 1} — {service.name}
                </span>
              </div>
            </Reveal>
            <h1 className="mt-6 font-display text-[2.7rem] font-extrabold leading-[1.04] tracking-tight text-ink sm:text-5xl lg:text-[3.6rem]">
              <WordReveal text={service.tagline} />
            </h1>
            <Reveal delay={0.35}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-smoke">{service.cardBlurb}</p>
            </Reveal>
            <Reveal delay={0.45}>
              <div className="mt-9 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 font-display text-[0.95rem] font-bold text-white shadow-[0_16px_40px_-14px_rgba(255,77,36,0.6)] transition-colors hover:bg-accent-deep"
                >
                  Get a fixed quote
                  <ArrowUpRight className="h-4.5 w-4.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
                <Link
                  href="/work"
                  className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-white px-7 py-3.5 font-display text-[0.95rem] font-bold text-ink transition-colors hover:border-ink"
                >
                  See related work
                </Link>
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.25}>
            <div className="relative">
              <div className="relative overflow-hidden rounded-[2rem] shadow-[0_40px_80px_-40px_rgba(16,16,20,0.5)]">
                <Image
                  src={service.heroImage}
                  alt={service.heroImageAlt}
                  width={1280}
                  height={800}
                  priority
                  className="h-[24rem] w-full object-cover lg:h-[27rem]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent" />
              </div>
              <div className="absolute -bottom-5 left-6 flex items-center gap-3 rounded-2xl border border-line bg-white px-5 py-3.5 shadow-xl">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent text-white">
                  <ServiceIcon name={service.icon} className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-display text-[0.95rem] font-bold text-ink">{service.name}</p>
                  <p className="text-[0.75rem] font-semibold text-fog">Delivered by senior specialists</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* outcomes band */}
        <div className="border-t border-line bg-white/60">
          <div className="container-x grid divide-y divide-line sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {service.outcomes.map((o) => (
              <div key={o.label} className="flex flex-col items-center gap-1 px-4 py-7 text-center">
                <p className="font-display text-3xl font-extrabold text-ink md:text-4xl">{o.value}</p>
                <p className="text-[0.78rem] font-bold uppercase tracking-[0.14em] text-smoke">{o.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ OVERVIEW + IMAGE ============ */}
      <section className="py-20 md:py-28">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading kicker="The short version" title="Why companies hire us for" accentTitle={`${service.shortName.toLowerCase()}.`} />
            <div className="mt-6 space-y-5">
              {service.overview.map((p, i) => (
                <Reveal key={i} delay={i * 0.1}>
                  <p className="text-[1.02rem] leading-relaxed text-smoke">{p}</p>
                </Reveal>
              ))}
            </div>
            <Reveal delay={0.3}>
              <div className="mt-8 flex flex-wrap gap-2">
                {service.stack.map((t) => (
                  <span key={t} className="rounded-full border border-line bg-white px-4 py-2 text-[0.8rem] font-bold text-ink/75">
                    {t}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <div className="relative overflow-hidden rounded-[2rem]">
              <Image
                src={service.detailImage}
                alt={service.detailImageAlt}
                width={1280}
                height={800}
                className="h-[26rem] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/50 to-transparent" />
              <p className="absolute bottom-5 left-6 right-6 font-serif text-xl italic text-white">
                Senior specialists on every account — no juniors learning on your budget.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ DELIVERABLES ============ */}
      <section className="bg-cream py-20 md:py-28">
        <div className="container-x">
          <SectionHeading
            kicker="What's included"
            title="Everything in"
            accentTitle={`${service.shortName.toLowerCase()},`}
            copy="Scope it once, sleep at night. Every engagement below is delivered by the same senior team that scopes it."
          />
          <Stagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {service.deliverables.map((d, i) => (
              <StaggerItem
                key={d.title}
                className="rounded-3xl border border-line bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_60px_-30px_rgba(16,16,20,0.35)]"
              >
                <div className="flex items-center justify-between">
                  <CheckCircle2 className="h-6 w-6 text-mint" />
                  <span className="font-display text-sm font-extrabold text-fog">0{i + 1}</span>
                </div>
                <h3 className="mt-4 font-display text-lg font-bold text-ink">{d.title}</h3>
                <p className="mt-2 text-[0.92rem] leading-relaxed text-smoke">{d.desc}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ============ IS THIS YOU ============ */}
      <section className="py-20 md:py-28">
        <div className="container-x grid items-center gap-12 lg:grid-cols-[1fr_1fr]">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2rem]">
              <Image
                src="/images/life/presentation.jpg"
                alt="Nova team presenting a project plan to a client"
                width={1280}
                height={800}
                className="h-[24rem] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/45 to-transparent" />
              <p className="absolute bottom-5 left-6 right-6 font-serif text-xl italic text-white">
                If two or more of these sound like your week, let&apos;s talk.
              </p>
            </div>
          </Reveal>
          <div>
            <SectionHeading kicker="Sound familiar?" title="You need this if" accentTitle="any of this is true." />
            <Stagger className="mt-8 space-y-3">
              {service.fit.map((f) => (
                <StaggerItem
                  key={f}
                  className="flex items-start gap-3.5 rounded-2xl border border-line bg-white p-5"
                >
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent-soft">
                    <CheckCircle2 className="h-4 w-4 text-accent-deep" />
                  </span>
                  <p className="text-[0.98rem] font-medium leading-relaxed text-ink/85">{f}</p>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </section>

      {/* ============ SERVICE-SPECIFIC REVIEWS ============ */}
      <section className="noise relative overflow-hidden bg-night py-20 text-bone md:py-28">
        <div className="dot-grid-light absolute inset-0 opacity-40" aria-hidden="true" />
        <div className="container-x relative">
          <SectionHeading
            dark
            kicker="Reviews for this service"
            title="What clients say about our"
            accentTitle={`${service.shortName.toLowerCase()} work.`}
            copy="Every review below is from a client who hired us for exactly this service. Ask us for a reference call — we'll connect you directly."
          />
          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {service.reviews.map((r, i) => (
              <Reveal key={r.name} delay={i * 0.1}>
                <figure className="flex h-full flex-col rounded-3xl border border-white/10 bg-white/[0.045] p-8">
                  <div className="flex items-center justify-between">
                    <div className="flex gap-0.5">
                      {Array.from({ length: 5 }).map((_, j) => (
                        <Star key={j} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <Quote className="h-5 w-5 text-accent/60" />
                  </div>
                  <blockquote className="mt-5 flex-1 text-[0.97rem] leading-relaxed text-bone/80">
                    &ldquo;{r.quote}&rdquo;
                  </blockquote>
                  <div className="mt-6 rounded-2xl bg-accent/10 px-4 py-3">
                    <p className="font-display text-lg font-extrabold text-accent">{r.result}</p>
                  </div>
                  <figcaption className="mt-5 border-t border-white/10 pt-5">
                    <p className="font-display font-bold">{r.name}</p>
                    <p className="text-[0.85rem] text-bone/50">
                      {r.role}, {r.company}
                    </p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section className="py-20 md:py-28">
        <div className="container-x grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <SectionHeading
              kicker="Questions, answered"
              title="The things clients"
              accentTitle="always ask."
            />
            <Reveal delay={0.2}>
              <p className="mt-5 text-[1rem] leading-relaxed text-smoke">
                Something else on your mind? Email us directly at{" "}
                <a href="mailto:hello@novasolution.com" className="font-bold text-accent-deep underline underline-offset-4">
                  hello@novasolution.com
                </a>{" "}
                — a senior team member replies, not a bot.
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.15}>
            <FaqAccordion items={service.faqs} />
          </Reveal>
        </div>
      </section>

      {/* ============ RELATED ============ */}
      <section className="border-t border-line bg-cream py-20">
        <div className="container-x">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading kicker="Keep exploring" title="Pairs well with" accentTitle="this." />
            <Reveal delay={0.15}>
              <Link
                href="/services"
                className="group inline-flex shrink-0 items-center gap-2 rounded-full border border-ink/15 bg-white px-6 py-3.5 font-display text-sm font-bold text-ink transition-colors hover:border-ink"
              >
                All services
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Reveal>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {others.map((s, i) => (
              <Reveal key={s.slug} delay={i * 0.08}>
                <Link
                  href={`/services/${s.slug}`}
                  className="group flex h-full flex-col rounded-3xl border border-line bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-ink hover:shadow-[0_30px_60px_-30px_rgba(16,16,20,0.4)]"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-bone text-ink transition-colors group-hover:bg-accent group-hover:text-white">
                    <ServiceIcon name={s.icon} className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-bold text-ink">{s.name}</h3>
                  <p className="mt-2 flex-1 text-[0.9rem] leading-relaxed text-smoke">{s.cardBlurb}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-[0.85rem] font-bold text-accent-deep">
                    Explore <ArrowUpRight className="h-4 w-4" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title={`Ready to talk ${service.shortName.toLowerCase()}?`}
        accent="We're ready to listen."
        copy="A free 30-minute call with a senior specialist — not a salesperson. You'll leave with a plan whether you hire us or not."
      />
    </>
  );
}
