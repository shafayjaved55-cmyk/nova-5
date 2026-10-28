import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone, ShieldCheck, Timer } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { FaqAccordion } from "@/components/faq";
import { Reveal, WordReveal } from "@/components/reveal";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact — Get a reply within 4 business hours",
  description:
    "Tell us about your project. Free 30-minute consultation with a senior specialist, fixed quotes, and an honest answer — even if the honest answer is 'you don't need us yet'.",
};

const contactFaqs = [
  {
    q: "What happens after I send this form?",
    a: "Within 4 business hours, a senior team member replies to schedule a free 30-minute call. On that call we map your goals, timeline and budget — then send a fixed written quote within 2 business days. No pressure, no follow-up spam.",
  },
  {
    q: "Do you sign NDAs?",
    a: "Yes, happily — especially for early-stage ideas. About a third of our projects start under NDA, and your idea never leaves the room.",
  },
  {
    q: "We're not a big company. Is that okay?",
    a: "Some of our best work is for founders on their first product. What matters to us is that you're serious about the outcome — the budget can start small and grow.",
  },
  {
    q: "Can we meet in person?",
    a: "Absolutely — our Lahore HQ and Dubai office both host client working sessions, or we can come to you. Remote-first doesn't mean remote-only.",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* hero */}
      <section className="dot-grid relative overflow-hidden py-20 md:py-24">
        <div
          className="absolute -right-40 top-0 h-[24rem] w-[24rem] rounded-full bg-accent/10 blur-[130px]"
          aria-hidden="true"
        />
        <div className="container-x relative max-w-3xl">
          <Reveal>
            <p className="flex items-center gap-2.5 text-[0.72rem] font-extrabold uppercase tracking-[0.24em] text-accent-deep">
              <span className="inline-block h-[2px] w-7 bg-accent" /> Contact
            </p>
          </Reveal>
          <h1 className="mt-5 font-display text-5xl font-extrabold leading-[1.03] tracking-tight text-ink md:text-6xl">
            <WordReveal text="Tell us where you're" />{" "}
            <span className="font-serif italic font-normal text-accent">
              <WordReveal text="headed." delay={0.3} />
            </span>
          </h1>
          <Reveal delay={0.4}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-smoke">
              One form, one senior reply, zero sales theater. Most clients hear back within a couple of hours —
              always from someone who&apos;ll actually work on your project.
            </p>
          </Reveal>
        </div>
      </section>

      {/* form + sidebar */}
      <section className="pb-24 md:pb-32">
        <div className="container-x grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <Reveal>
            <ContactForm />
          </Reveal>

          <div className="space-y-5">
            <Reveal delay={0.1}>
              <div className="rounded-3xl border border-line bg-white p-7">
                <h2 className="font-display text-lg font-bold text-ink">Direct lines</h2>
                <ul className="mt-5 space-y-4">
                  <li>
                    <a href={`mailto:${site.email}`} className="group flex items-start gap-3.5">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-bone text-accent-deep transition-colors group-hover:bg-accent group-hover:text-white">
                        <Mail className="h-5 w-5" />
                      </span>
                      <span>
                        <span className="block text-[0.78rem] font-bold uppercase tracking-[0.12em] text-fog">Email us</span>
                        <span className="font-display font-bold text-ink group-hover:text-accent-deep">{site.email}</span>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href={`tel:${site.phoneHref}`} className="group flex items-start gap-3.5">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-bone text-accent-deep transition-colors group-hover:bg-accent group-hover:text-white">
                        <Phone className="h-5 w-5" />
                      </span>
                      <span>
                        <span className="block text-[0.78rem] font-bold uppercase tracking-[0.12em] text-fog">Call us</span>
                        <span className="font-display font-bold text-ink group-hover:text-accent-deep">{site.phone}</span>
                      </span>
                    </a>
                  </li>
                  <li className="flex items-start gap-3.5">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-bone text-accent-deep">
                      <Clock className="h-5 w-5" />
                    </span>
                    <span>
                      <span className="block text-[0.78rem] font-bold uppercase tracking-[0.12em] text-fog">Hours</span>
                      <span className="font-display font-bold text-ink">{site.hours}</span>
                    </span>
                  </li>
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.18}>
              <div className="rounded-3xl border border-line bg-white p-7">
                <h2 className="font-display text-lg font-bold text-ink">Our offices</h2>
                <ul className="mt-5 space-y-5">
                  {site.offices.map((o) => (
                    <li key={o.city} className="flex items-start gap-3.5">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-bone text-accent-deep">
                        <MapPin className="h-5 w-5" />
                      </span>
                      <span>
                        <span className="block font-display font-bold text-ink">
                          {o.city} <span className="text-[0.72rem] font-bold uppercase tracking-[0.1em] text-fog">— {o.label}</span>
                        </span>
                        <span className="mt-0.5 block text-[0.88rem] leading-relaxed text-smoke">{o.detail}</span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.26}>
              <div className="noise relative overflow-hidden rounded-3xl bg-ink p-7 text-bone">
                <div className="dot-grid-light absolute inset-0 opacity-40" aria-hidden="true" />
                <div className="relative space-y-4">
                  <p className="flex items-center gap-2.5">
                    <Timer className="h-5 w-5 text-accent" />
                    <span className="font-display font-bold">Average reply: under 4 business hours</span>
                  </p>
                  <p className="flex items-center gap-2.5">
                    <ShieldCheck className="h-5 w-5 text-accent" />
                    <span className="font-display font-bold">NDAs signed happily</span>
                  </p>
                  <p className="text-[0.88rem] leading-relaxed text-bone/55">
                    Your message goes straight to a shared inbox that the leadership team reads — not a ticketing
                    black hole.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* faq */}
      <section className="border-t border-line bg-cream py-20 md:py-28">
        <div className="container-x grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <Reveal>
              <p className="flex items-center gap-2.5 text-[0.72rem] font-extrabold uppercase tracking-[0.24em] text-accent-deep">
                <span className="inline-block h-[2px] w-7 bg-accent" /> Before you hit send
              </p>
              <h2 className="mt-4 font-display text-4xl font-bold leading-tight tracking-tight text-ink md:text-5xl">
                Quick answers to the{" "}
                <span className="font-serif italic font-normal text-accent">usual questions.</span>
              </h2>
              <p className="mt-5 text-[1rem] leading-relaxed text-smoke">
                Everything else — process, pricing philosophy, references — we&apos;re happy to cover on the call.
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.15}>
            <FaqAccordion items={contactFaqs} />
          </Reveal>
        </div>
      </section>
    </>
  );
}
