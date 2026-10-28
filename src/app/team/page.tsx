import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Briefcase, MapPin, Sparkles } from "lucide-react";
import { CtaBanner } from "@/components/cta";
import { Reveal, Stagger, StaggerItem, WordReveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { team } from "@/data/team";

export const metadata: Metadata = {
  title: "Meet the Team — 53 senior engineers, designers & strategists",
  description:
    "The people behind Nova Solution — who they are, what they own, and the standards they hold. Nine years average experience, zero account-manager telephone games.",
};

export default function TeamPage() {
  const leadership = team.filter((m) => m.department === "Leadership");
  const everyoneElse = team.filter((m) => m.department !== "Leadership");

  return (
    <>
      {/* hero */}
      <section className="dot-grid relative overflow-hidden py-20 md:py-28">
        <div
          className="absolute -left-40 top-0 h-[24rem] w-[24rem] rounded-full bg-accent/10 blur-[130px]"
          aria-hidden="true"
        />
        <div className="container-x relative max-w-3xl">
          <Reveal>
            <p className="flex items-center gap-2.5 text-[0.72rem] font-extrabold uppercase tracking-[0.24em] text-accent-deep">
              <span className="inline-block h-[2px] w-7 bg-accent" /> The team
            </p>
          </Reveal>
          <h1 className="mt-5 font-display text-5xl font-extrabold leading-[1.03] tracking-tight text-ink md:text-7xl">
            <WordReveal text="The people behind" />{" "}
            <span className="font-serif italic font-normal text-accent">
              <WordReveal text="the pixels." delay={0.25} />
            </span>
          </h1>
          <Reveal delay={0.4}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-smoke">
              No account managers translating your vision for someone else. The people below are who you&apos;ll meet
              on day one — and who you&apos;ll message on launch day.
            </p>
          </Reveal>
        </div>
      </section>

      {/* leadership */}
      <section className="pb-16">
        <div className="container-x">
          <SectionHeading kicker="Leadership" title="The ones who set" accentTitle="the standard." />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {leadership.map((m, i) => (
              <Reveal key={m.name} delay={i * 0.1}>
                <div className="group overflow-hidden rounded-[2rem] border border-line bg-white transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_40px_70px_-35px_rgba(16,16,20,0.45)]">
                  <div className="relative aspect-[4/4.2] overflow-hidden">
                    <Image
                      src={m.photo}
                      alt={`${m.name}, ${m.role} at Nova Solution`}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
                    <div className="absolute bottom-0 p-6">
                      <p className="font-display text-2xl font-bold text-white">{m.name}</p>
                      <p className="text-[0.85rem] font-bold uppercase tracking-[0.14em] text-accent">{m.role}</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-[0.93rem] leading-relaxed text-smoke">{m.bio}</p>
                    <div className="mt-5 flex items-start gap-2.5 rounded-2xl bg-bone p-4">
                      <Briefcase className="mt-0.5 h-4 w-4 shrink-0 text-accent-deep" />
                      <p className="text-[0.85rem] font-semibold leading-relaxed text-ink/80">{m.focus}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* everyone else */}
      <section className="bg-cream py-20 md:py-28">
        <div className="container-x">
          <SectionHeading
            kicker="The squad"
            title="Specialists who ship —"
            accentTitle="and stick around."
            copy="Average tenure at Nova is 4.2 years. That continuity is why the second project always goes smoother than the first."
          />
          <Stagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4" gap={0.07}>
            {everyoneElse.map((m) => (
              <StaggerItem key={m.name}>
                <div className="group h-full overflow-hidden rounded-3xl border border-line bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_60px_-30px_rgba(16,16,20,0.4)]">
                  <div className="relative aspect-[4/4.4] overflow-hidden">
                    <Image
                      src={m.photo}
                      alt={`${m.name}, ${m.role} at Nova Solution`}
                      fill
                      sizes="(max-width: 768px) 100vw, 25vw"
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.05]"
                    />
                    <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[0.65rem] font-extrabold uppercase tracking-[0.12em] text-ink backdrop-blur">
                      {m.department}
                    </span>
                  </div>
                  <div className="p-5">
                    <p className="font-display text-lg font-bold text-ink">{m.name}</p>
                    <p className="text-[0.82rem] font-bold text-accent-deep">{m.role}</p>
                    <p className="mt-2 flex items-center gap-1.5 text-[0.75rem] font-semibold text-fog">
                      <MapPin className="h-3.5 w-3.5" /> {m.location}
                    </p>
                    <p className="mt-3 line-clamp-3 text-[0.86rem] leading-relaxed text-smoke">{m.bio}</p>
                    <div className="mt-4 flex items-start gap-2 border-t border-line pt-4">
                      <Sparkles className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent" />
                      <p className="text-[0.78rem] font-medium italic leading-relaxed text-ink/70">{m.funFact}</p>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* join strip */}
      <section className="py-20 md:py-28">
        <div className="container-x">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2.5rem] bg-ink px-8 py-14 text-center text-bone md:py-20">
              <div className="dot-grid-light absolute inset-0 opacity-40" aria-hidden="true" />
              <div className="relative">
                <p className="text-[0.72rem] font-extrabold uppercase tracking-[0.24em] text-accent">We&apos;re hiring</p>
                <h2 className="mx-auto mt-4 max-w-2xl font-display text-3xl font-bold leading-tight md:text-5xl">
                  Good work needs good people.{" "}
                  <span className="font-serif italic font-normal text-accent">Maybe that&apos;s you.</span>
                </h2>
                <p className="mx-auto mt-5 max-w-xl text-[1.02rem] leading-relaxed text-bone/60">
                  Senior teams, real ownership, no hero culture. See what life here is actually like — then look at the
                  open roles.
                </p>
                <div className="mt-8 flex flex-wrap justify-center gap-4">
                  <Link
                    href="/life"
                    className="group inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 font-display text-sm font-bold text-white transition-colors hover:bg-accent-deep"
                  >
                    Life at Nova
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-full border border-white/25 px-7 py-3.5 font-display text-sm font-bold text-bone transition-colors hover:border-accent hover:text-accent"
                  >
                    Introduce yourself
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBanner
        title="Want this team on your project?"
        accent="They're one call away."
        copy="Book a free consultation and you'll speak directly with the people who'd lead your build — not a sales layer."
      />
    </>
  );
}
