import { Quote, Star } from "lucide-react";
import { Marquee } from "@/components/marquee";
import type { Testimonial } from "@/data/testimonials";

export function Stars() {
  return (
    <div className="flex gap-0.5" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
      ))}
    </div>
  );
}

export function TestimonialCard({ t, dark = false }: { t: Testimonial; dark?: boolean }) {
  return (
    <figure
      className={`mx-3 flex w-[19rem] shrink-0 flex-col justify-between rounded-3xl border p-7 md:w-[22rem] ${
        dark
          ? "border-white/10 bg-white/[0.045] text-bone"
          : "border-line bg-white text-ink shadow-[0_20px_50px_-30px_rgba(16,16,20,0.35)]"
      }`}
    >
      <div>
        <div className="flex items-center justify-between">
          <Stars />
          <Quote className={`h-5 w-5 ${dark ? "text-accent/60" : "text-accent/40"}`} />
        </div>
        <blockquote className={`mt-4 text-[0.95rem] leading-relaxed ${dark ? "text-bone/80" : "text-ink/85"}`}>
          &ldquo;{t.quote}&rdquo;
        </blockquote>
      </div>
      <figcaption
        className={`mt-6 flex items-center justify-between border-t pt-5 ${
          dark ? "border-white/10" : "border-line"
        }`}
      >
        <div>
          <p className="font-display text-[0.95rem] font-bold">{t.name}</p>
          <p className={`text-[0.8rem] ${dark ? "text-bone/50" : "text-smoke"}`}>
            {t.role}, {t.company}
          </p>
        </div>
        <span
          className={`rounded-full px-3 py-1 text-[0.68rem] font-bold uppercase tracking-wide ${
            dark ? "bg-accent/15 text-accent" : "bg-accent-soft text-accent-deep"
          }`}
        >
          {t.service}
        </span>
      </figcaption>
    </figure>
  );
}

export function TestimonialMarquee({
  items,
  dark = false,
  reverse = false,
}: {
  items: Testimonial[];
  dark?: boolean;
  reverse?: boolean;
}) {
  return (
    <Marquee slow reverse={reverse} className="[mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
      {items.map((t) => (
        <TestimonialCard key={t.name + t.company} t={t} dark={dark} />
      ))}
    </Marquee>
  );
}
