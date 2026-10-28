import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, MapPin, ShieldCheck, Star } from "lucide-react";
import { CountUp } from "@/components/count-up";
import { CtaBanner } from "@/components/cta";
import { PartnerBadges } from "@/components/partners";
import { Reveal, Stagger, StaggerItem, WordReveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { ServiceIcon } from "@/components/service-icon";
import { TestimonialMarquee } from "@/components/testimonials";
import { caseStudies } from "@/data/work";
import { services } from "@/data/services";
import { testimonials } from "@/data/testimonials";

export default function HomePage() {
  return (
    <>
      {/* ===================== HERO ===================== */}
      <section className="dot-grid relative overflow-hidden">
        <div
          className="absolute -left-40 top-10 h-[28rem] w-[28rem] rounded-full bg-accent/10 blur-[130px]"
          aria-hidden="true"
        />
        <div className="container-x relative grid items-center gap-14 pb-16 pt-14 md:pt-20 lg:grid-cols-[1.05fr_0.95fr] lg:pb-24">
          <div>
            <Reveal>
              <div className="inline-flex items-center gap-2.5 rounded-full border border-line bg-white py-2 pl-3 pr-5 shadow-sm">
                <span className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </span>
                <span className="text-[0.8rem] font-bold text-ink">4.9/5 from 120+ clients</span>
                <span className="text-[0.8rem] font-semibold text-fog">on Clutch & Google</span>
              </div>
            </Reveal>

            <h1 className="mt-7 font-display text-[2.9rem] font-extrabold leading-[1.02] tracking-tight text-ink sm:text-6xl lg:text-[4.4rem]">
              <WordReveal text="Digital products that" />
              <br />
              <WordReveal text="move business" delay={0.18} />{" "}
              <span className="font-serif italic font-normal text-accent">
                <WordReveal text="forward." delay={0.34} />
              </span>
            </h1>

            <Reveal delay={0.5}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-smoke">
                Nova Solution designs and builds the websites, apps and growth systems behind ambitious companies —
                320+ projects shipped, measured in revenue, not deliverables.
              </p>
            </Reveal>

            <Reveal delay={0.62}>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 font-display text-base font-bold text-white shadow-[0_16px_40px_-14px_rgba(255,77,36,0.6)] transition-all hover:bg-accent-deep"
                >
                  Start your project
                  <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
                <Link
                  href="/work"
                  className="group inline-flex items-center gap-2 rounded-full border border-ink/15 bg-white px-8 py-4 font-display text-base font-bold text-ink transition-colors hover:border-ink"
                >
                  See our work
                  <ArrowRight className="h-4.5 w-4.5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.72}>
              <p className="mt-8 flex items-center gap-2 text-[0.85rem] font-semibold text-smoke">
                <ShieldCheck className="h-4 w-4 text-mint" />
                Free consultation · Fixed quotes · Reply within 4 business hours
              </p>
            </Reveal>
          </div>

          {/* hero visual */}
          <Reveal delay={0.3} className="relative hidden lg:block">
            <div className="relative">
              <div className="relative overflow-hidden rounded-[2rem] shadow-[0_40px_90px_-40px_rgba(16,16,20,0.5)]">
                <Image
                  src="/images/life/group-work.jpg"
                  alt="Nova Solution team collaborating on a client build"
                  width={1280}
                  height={800}
                  priority
                  className="h-[30rem] w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/45 via-transparent to-transparent" />
              </div>

              {/* floating rating chip */}
              <div className="absolute -left-8 top-10 animate-float rounded-2xl border border-line bg-white p-4 shadow-[0_20px_50px_-20px_rgba(16,16,20,0.4)]">
                <p className="font-display text-2xl font-extrabold text-ink">
                  <CountUp end={98} suffix="%" />
                </p>
                <p className="text-[0.72rem] font-bold uppercase tracking-[0.12em] text-smoke">Client retention</p>
              </div>

              {/* floating project chip */}
              <div className="absolute -bottom-6 -left-10 animate-float rounded-2xl bg-ink p-4 text-bone shadow-2xl [animation-delay:1.4s]">
                <p className="font-display text-2xl font-extrabold text-accent">
                  <CountUp end={320} suffix="+" />
                </p>
                <p className="text-[0.72rem] font-bold uppercase tracking-[0.12em] text-bone/60">Projects shipped</p>
              </div>

              {/* rotating badge */}
              <div className="absolute -right-7 -top-7 flex h-28 w-28 items-center justify-center">
                <svg viewBox="0 0 100 100" className="h-full w-full animate-spin-slow">
                  <defs>
                    <path id="circlePath" d="M 50,50 m -38,0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0" />
                  </defs>
                  <text className="fill-ink text-[9.5px] font-bold uppercase tracking-[0.22em]">
                    <textPath href="#circlePath">Nova Solution · Since 2016 ·</textPath>
                  </text>
                </svg>
                <span className="absolute flex h-12 w-12 items-center justify-center rounded-full bg-accent font-display text-lg font-extrabold text-white">
                  N
                </span>
              </div>
            </div>
          </Reveal>
        </div>

        {/* stats strip */}
        <div className="border-t border-line bg-white/60">
          <div className="container-x grid grid-cols-2 divide-x divide-line lg:grid-cols-4">
            {[
              { end: 320, suffix: "+", label: "Projects delivered" },
              { end: 120, suffix: "+", label: "Clients worldwide" },
              { end: 12, suffix: "", label: "Countries served" },
              { end: 98, suffix: "%", label: "Client retention" },
            ].map((s) => (
              <div key={s.label} className="flex flex-col items-center gap-1 px-4 py-7 text-center">
                <p className="font-display text-3xl font-extrabold text-ink md:text-4xl">
                  <CountUp end={s.end} suffix={s.suffix} />
                </p>
                <p className="text-[0.78rem] font-bold uppercase tracking-[0.14em] text-smoke">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== PARTNER BADGES ===================== */}
      <section className="border-b border-line py-12">
        <div className="container-x">
          <Reveal>
            <p className="mb-8 text-center text-[0.72rem] font-extrabold uppercase tracking-[0.26em] text-fog">
              Official partners & certifications — our teams are certified, not just experienced
            </p>
          </Reveal>
          <PartnerBadges />
        </div>
      </section>

      {/* ===================== SERVICES ===================== */}
      <section className="py-24 md:py-32">
        <div className="container-x">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              kicker="What we do"
              title="Six services. One accountable"
              accentTitle="team."
              copy="No hand-offs between departments, no 'that's not my screen'. The team that scopes your project is the team that ships it."
            />
            <Reveal delay={0.2}>
              <Link
                href="/services"
                className="group inline-flex shrink-0 items-center gap-2 rounded-full border border-ink/15 bg-white px-6 py-3.5 font-display text-sm font-bold text-ink transition-colors hover:border-ink"
              >
                All services
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Reveal>
          </div>

          <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3" gap={0.08}>
            {services.map((s, i) => (
              <StaggerItem key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className="group flex h-full flex-col rounded-3xl border border-line bg-white p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-ink hover:shadow-[0_30px_60px_-30px_rgba(16,16,20,0.4)]"
                >
                  <div className="flex items-start justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-bone text-ink transition-colors duration-300 group-hover:bg-accent group-hover:text-white">
                      <ServiceIcon name={s.icon} />
                    </span>
                    <span className="font-display text-sm font-extrabold text-fog">0{i + 1}</span>
                  </div>
                  <h3 className="mt-6 font-display text-xl font-bold text-ink">{s.name}</h3>
                  <p className="mt-2.5 flex-1 text-[0.93rem] leading-relaxed text-smoke">{s.cardBlurb}</p>
                  <span className="mt-6 inline-flex items-center gap-1.5 text-[0.85rem] font-bold text-accent-deep">
                    Explore
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ===================== FEATURED WORK ===================== */}
      <section className="bg-cream py-24 md:py-32">
        <div className="container-x">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              kicker="Selected work"
              title="Results our clients"
              accentTitle="brag about."
              copy="Every number below is pulled from a live dashboard the client can still log into today."
            />
            <Reveal delay={0.2}>
              <Link
                href="/work"
                className="group inline-flex shrink-0 items-center gap-2 rounded-full border border-ink/15 bg-white px-6 py-3.5 font-display text-sm font-bold text-ink transition-colors hover:border-ink"
              >
                All case studies
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {caseStudies.slice(0, 3).map((c, i) => (
              <Reveal key={c.title} delay={i * 0.12}>
                <Link href="/work" className="group block overflow-hidden rounded-3xl bg-white">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={c.image}
                      alt={c.imageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                    />
                    <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3.5 py-1.5 text-[0.68rem] font-extrabold uppercase tracking-[0.14em] text-ink backdrop-blur">
                      {c.category}
                    </span>
                  </div>
                  <div className="p-6">
                    <p className="text-[0.75rem] font-bold uppercase tracking-[0.16em] text-fog">
                      {c.client} · {c.industry}
                    </p>
                    <h3 className="mt-2 font-display text-lg font-bold leading-snug text-ink">{c.title}</h3>
                    <div className="mt-4 flex gap-4 border-t border-line pt-4">
                      {c.metrics.slice(0, 2).map((m) => (
                        <div key={m.label}>
                          <p className="font-display text-base font-extrabold text-accent">{m.value}</p>
                          <p className="text-[0.7rem] font-semibold text-smoke">{m.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== CLIENT WORDMARKS ===================== */}
      <section className="noise relative overflow-hidden bg-night py-16">
        <div className="container-x relative">
          <p className="mb-8 text-center text-[0.72rem] font-extrabold uppercase tracking-[0.26em] text-bone/40">
            Trusted by teams at
          </p>
        </div>
        <MarqueeLogos />
      </section>

      {/* ===================== WHY NOVA ===================== */}
      <section className="noise relative overflow-hidden bg-night py-24 text-bone md:py-32">
        <div className="dot-grid-light absolute inset-0 opacity-40" aria-hidden="true" />
        <div className="container-x relative grid gap-16 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <SectionHeading
              dark
              kicker="Why Nova"
              title="Agencies sell hours. We sell"
              accentTitle="outcomes."
              copy="Anyone can ship a website. We ship the version that pays for itself — and we've been doing it for 320+ projects since 2016."
            />
            <Reveal delay={0.3}>
              <div className="mt-10 rounded-3xl border border-white/10 bg-white/[0.04] p-7">
                <div className="flex items-center gap-4">
                  <Image
                    src="/images/team/ceo.jpg"
                    alt="Hassan Raza, Founder & CEO of Nova Solution"
                    width={56}
                    height={56}
                    className="h-14 w-14 rounded-full border-2 border-accent object-cover"
                  />
                  <div>
                    <p className="font-display font-bold">Hassan Raza</p>
                    <p className="text-sm text-bone/50">Founder & CEO, Nova Solution</p>
                  </div>
                </div>
                <blockquote className="mt-5 font-serif text-xl italic leading-relaxed text-bone/85">
                  &ldquo;Our rule is simple: never ship anything we wouldn&apos;t put our own name on. That&apos;s why
                  98% of clients stay with us after the first project.&rdquo;
                </blockquote>
                <Link
                  href="/team"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-accent hover:text-accent-deep"
                >
                  Meet the full team <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>
          </div>

          <Stagger className="grid content-center gap-4 sm:grid-cols-2">
            {[
              {
                stat: "4.2x",
                label: "Average return our clients see",
                desc: "Median blended return across active growth accounts last year.",
              },
              {
                stat: "9 yrs",
                label: "Average senior team experience",
                desc: "No juniors learning on your budget — seniors lead every squad.",
              },
              {
                stat: "4 hrs",
                label: "Average reply time",
                desc: "Real humans, in your timezone, on a shared Slack channel.",
              },
              {
                stat: "100%",
                label: "Code & IP ownership",
                desc: "You own everything we build. No lock-in, no hostage hosting.",
              },
            ].map((v) => (
              <StaggerItem
                key={v.label}
                className="rounded-3xl border border-white/10 bg-white/[0.045] p-7 transition-colors hover:border-accent/40"
              >
                <p className="font-display text-4xl font-extrabold text-accent">{v.stat}</p>
                <p className="mt-3 font-display text-[0.95rem] font-bold">{v.label}</p>
                <p className="mt-1.5 text-[0.85rem] leading-relaxed text-bone/50">{v.desc}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ===================== TESTIMONIALS ===================== */}
      <section className="overflow-hidden py-24 md:py-32">
        <div className="container-x">
          <SectionHeading
            align="center"
            kicker="Client reviews"
            title="Don't take our word for it. Take"
            accentTitle="theirs."
            copy="Unedited reviews from founders, CTOs and marketing leads we work with every day."
          />
        </div>
        <div className="mt-14 space-y-6">
          <TestimonialMarquee items={testimonials.slice(0, 5)} />
          <TestimonialMarquee items={testimonials.slice(5)} reverse />
        </div>
      </section>

      {/* ===================== OFFICE STRIP / CTA ===================== */}
      <section className="container-x pb-24 md:pb-32">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem]">
            <Image
              src="/images/life/office-bright.jpg"
              alt="Inside the Nova Solution office in Lahore"
              width={1280}
              height={720}
              className="h-[26rem] w-full object-cover md:h-[30rem]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/55 to-ink/10" />
            <div className="absolute inset-0 flex flex-col justify-center p-8 md:p-16">
              <p className="flex items-center gap-2 text-[0.72rem] font-extrabold uppercase tracking-[0.24em] text-accent">
                <MapPin className="h-4 w-4" /> Lahore · Dubai · Remote
              </p>
              <h2 className="mt-4 max-w-lg font-display text-3xl font-bold leading-tight text-white md:text-5xl">
                Come see where the work happens.
              </h2>
              <p className="mt-4 max-w-md text-[1.02rem] leading-relaxed text-white/70">
                Fifty-three engineers, designers and strategists — one floor, one Slack, zero account managers
                translating your vision for someone else.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  href="/life"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 font-display text-sm font-bold text-ink transition-colors hover:bg-accent hover:text-white"
                >
                  Life at Nova <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/team"
                  className="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3.5 font-display text-sm font-bold text-white transition-colors hover:border-accent hover:text-accent"
                >
                  Meet the team
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <CtaBanner />
    </>
  );
}

function MarqueeLogos() {
  const logos = [...clientLogosStatic, ...clientLogosStatic];
  return (
    <div className="marquee-hover relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <div className="marquee-track flex w-max items-center animate-marquee">
        {logos.map((name, i) => (
          <span key={i} className="mx-10 shrink-0 font-display text-2xl font-bold text-bone/35 transition-colors hover:text-bone md:text-3xl">
            {name}
          </span>
        ))}
      </div>
    </div>
  );
}

const clientLogosStatic = [
  "Velvet Apparel",
  "PayNest",
  "Ledgerly",
  "Meridian Properties",
  "CarePoint Health",
  "Falcon Foods",
  "Karkhana Logistics",
  "TrailGear Co.",
  "Bazaar.co",
  "Glow Republic",
];
