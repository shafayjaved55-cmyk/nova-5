import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, BookOpen, Coffee, HeartPulse, Laptop, Plane, Trophy } from "lucide-react";
import { CountUp } from "@/components/count-up";
import { CtaBanner } from "@/components/cta";
import { Reveal, Stagger, StaggerItem, WordReveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { openPositions } from "@/data/team";

export const metadata: Metadata = {
  title: "Life at Nova — Culture, perks & open roles",
  description:
    "What it's actually like to work at Nova Solution: senior teams, real ownership, a learning budget that gets used, and a culture that runs on systems instead of heroes.",
};

const perks = [
  {
    icon: Trophy,
    title: "Senior-only teams",
    desc: "You'll never be thrown at a client project to 'figure it out'. Squads are senior, small and fully accountable.",
  },
  {
    icon: BookOpen,
    title: "$1,500 learning budget",
    desc: "Courses, conferences, books — budget per person per year, and people actually use it. Learning days are on the calendar.",
  },
  {
    icon: Laptop,
    title: "Remote-friendly setup",
    desc: "Work from the Lahore or Dubai office, from home, or from the mountains — as long as your squad's core hours overlap.",
  },
  {
    icon: HeartPulse,
    title: "Full health coverage",
    desc: "Comprehensive health insurance for you and your family, because sick people shouldn't be worried about invoices.",
  },
  {
    icon: Plane,
    title: "Team retreats",
    desc: "Twice a year the whole company goes somewhere with good food and bad Wi-Fi. Last year: Hunza. Before that: Skardu.",
  },
  {
    icon: Coffee,
    title: "No hero culture",
    desc: "We run on systems, checklists and honest planning. If you're regularly saving fires, we fix the process — not praise the firefighter.",
  },
];

const gallery = [
  { src: "/images/life/team-desk.jpg", alt: "The engineering squad focused at their desks", span: "md:col-span-2" },
  { src: "/images/life/sticky-notes.jpg", alt: "A product workshop with sticky notes on glass", span: "" },
  { src: "/images/life/women-team.jpg", alt: "Designers reviewing work together", span: "" },
  { src: "/images/life/pair-code.jpg", alt: "Pair programming on a client build", span: "" },
  { src: "/images/life/presentation.jpg", alt: "Monthly all-hands presentation", span: "md:col-span-2" },
  { src: "/images/life/sticky-notes-2.jpg", alt: "Planning sprint work on the glass wall", span: "" },
  { src: "/images/life/office-coworkers.jpg", alt: "Casual collaboration between squads", span: "" },
  { src: "/images/life/pair-code-2.jpg", alt: "Deep focus during a build sprint", span: "" },
];

export default function LifePage() {
  return (
    <>
      {/* hero */}
      <section className="dot-grid relative overflow-hidden py-20 md:py-28">
        <div
          className="absolute -right-40 top-0 h-[26rem] w-[26rem] rounded-full bg-accent/10 blur-[130px]"
          aria-hidden="true"
        />
        <div className="container-x relative grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <Reveal>
              <p className="flex items-center gap-2.5 text-[0.72rem] font-extrabold uppercase tracking-[0.24em] text-accent-deep">
                <span className="inline-block h-[2px] w-7 bg-accent" /> Life at Nova
              </p>
            </Reveal>
            <h1 className="mt-5 font-display text-5xl font-extrabold leading-[1.03] tracking-tight text-ink md:text-6xl">
              <WordReveal text="Serious work." />{" "}
              <span className="font-serif italic font-normal text-accent">
                <WordReveal text="Zero drama." delay={0.22} />
              </span>
            </h1>
            <Reveal delay={0.35}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-smoke">
                Fifty-three people who take the craft seriously and themselves lightly. Here&apos;s what that looks
                like day to day — the real office, the real rituals, and the roles we&apos;re hiring for.
              </p>
            </Reveal>
            <Reveal delay={0.45}>
              <div className="mt-9 grid max-w-md grid-cols-3 gap-6 border-t border-line pt-7">
                <div>
                  <p className="font-display text-2xl font-extrabold text-ink md:text-3xl">
                    <CountUp end={53} />
                  </p>
                  <p className="mt-1 text-[0.72rem] font-bold uppercase tracking-[0.12em] text-smoke">Team members</p>
                </div>
                <div>
                  <p className="font-display text-2xl font-extrabold text-ink md:text-3xl">
                    4<span className="text-accent">.</span>2 yrs
                  </p>
                  <p className="mt-1 text-[0.72rem] font-bold uppercase tracking-[0.12em] text-smoke">Avg. tenure</p>
                </div>
                <div>
                  <p className="font-display text-2xl font-extrabold text-ink md:text-3xl">
                    <CountUp end={2} suffix="/yr" />
                  </p>
                  <p className="mt-1 text-[0.72rem] font-bold uppercase tracking-[0.12em] text-smoke">Retreats</p>
                </div>
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.25}>
            <div className="grid grid-cols-2 gap-4">
              <div className="overflow-hidden rounded-3xl">
                <Image
                  src="/images/life/office-bright.jpg"
                  alt="Team members discussing ideas in the Nova office"
                  width={640}
                  height={800}
                  className="h-72 w-full object-cover md:h-80"
                />
              </div>
              <div className="mt-10 overflow-hidden rounded-3xl">
                <Image
                  src="/images/life/discussion.jpg"
                  alt="A working session between engineering and product"
                  width={640}
                  height={800}
                  className="h-72 w-full object-cover md:h-80"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* gallery */}
      <section className="bg-cream py-20 md:py-28">
        <div className="container-x">
          <SectionHeading
            kicker="Around the office"
            title="No stock photos. Just"
            accentTitle="our people."
            copy="Sprints, workshops, all-hands and the occasional chai-fueled launch night. This is where the work happens."
          />
          <div className="mt-14 grid auto-rows-[13rem] grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
            {gallery.map((g, i) => (
              <Reveal key={g.src + i} delay={(i % 4) * 0.07} className={`${g.span} row-span-1`}>
                <div className="group relative h-full overflow-hidden rounded-3xl">
                  <Image
                    src={g.src}
                    alt={g.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <p className="absolute bottom-4 left-4 right-4 translate-y-2 text-[0.85rem] font-semibold text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    {g.alt}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* perks */}
      <section className="py-20 md:py-28">
        <div className="container-x">
          <SectionHeading
            align="center"
            kicker="Perks & principles"
            title="Why people stay an average of"
            accentTitle="4+ years."
          />
          <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {perks.map((p) => (
              <StaggerItem
                key={p.title}
                className="rounded-3xl border border-line bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_60px_-30px_rgba(16,16,20,0.35)]"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-bone text-ink transition-colors duration-300 group-hover:bg-accent">
                  <p.icon className="h-6 w-6" strokeWidth={1.8} />
                </span>
                <h3 className="mt-5 font-display text-lg font-bold text-ink">{p.title}</h3>
                <p className="mt-2 text-[0.92rem] leading-relaxed text-smoke">{p.desc}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* open roles */}
      <section className="noise relative overflow-hidden bg-night py-20 text-bone md:py-28">
        <div className="dot-grid-light absolute inset-0 opacity-40" aria-hidden="true" />
        <div className="container-x relative">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              dark
              kicker="Open roles"
              title="Four seats open right"
              accentTitle="now."
              copy="Every application gets a human answer within a week — including the ones we decline."
            />
            <Reveal delay={0.15}>
              <Link
                href="/team"
                className="group inline-flex shrink-0 items-center gap-2 rounded-full border border-white/20 px-6 py-3.5 font-display text-sm font-bold text-bone transition-colors hover:border-accent hover:text-accent"
              >
                Who you&apos;d work with
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Reveal>
          </div>
          <Stagger className="mt-12 space-y-4">
            {openPositions.map((r) => (
              <StaggerItem key={r.title}>
                <Link
                  href={`/contact?role=${encodeURIComponent(r.title)}`}
                  className="group flex flex-col justify-between gap-4 rounded-3xl border border-white/10 bg-white/[0.045] p-6 transition-all duration-300 hover:border-accent/50 hover:bg-white/[0.07] md:flex-row md:items-center md:p-7"
                >
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="font-display text-xl font-bold">{r.title}</h3>
                      <span className="rounded-full bg-accent/15 px-3 py-1 text-[0.68rem] font-extrabold uppercase tracking-[0.12em] text-accent">
                        {r.team}
                      </span>
                    </div>
                    <p className="mt-1.5 text-[0.85rem] font-semibold text-bone/45">{r.type}</p>
                    <p className="mt-2 max-w-xl text-[0.92rem] leading-relaxed text-bone/60">{r.blurb}</p>
                  </div>
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/20 transition-all duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-white">
                    <ArrowUpRight className="h-5 w-5" />
                  </span>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <CtaBanner
        title="Could see yourself here?"
        accent="Say hello."
        copy="Send us a note about what you'd bring — even if the right role isn't listed yet. The best hires we've made were people we created a seat for."
      />
    </>
  );
}
