import { Reveal } from "@/components/reveal";

export function Kicker({ children, dark = false }: { children: string; dark?: boolean }) {
  return (
    <p
      className={`flex items-center gap-2.5 text-[0.72rem] font-extrabold uppercase tracking-[0.24em] ${
        dark ? "text-accent" : "text-accent-deep"
      }`}
    >
      <span className="inline-block h-[2px] w-7 bg-accent" aria-hidden="true" />
      {children}
    </p>
  );
}

export function SectionHeading({
  kicker,
  title,
  accentTitle,
  copy,
  dark = false,
  align = "left",
  className = "",
}: {
  kicker: string;
  title: string;
  accentTitle?: string;
  copy?: string;
  dark?: boolean;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <Reveal className={`${align === "center" ? "text-center" : ""} ${className}`}>
      <div className={align === "center" ? "flex justify-center" : ""}>
        <Kicker dark={dark}>{kicker}</Kicker>
      </div>
      <h2
        className={`mt-4 max-w-3xl font-display text-4xl font-bold leading-[1.06] tracking-tight md:text-5xl ${
          dark ? "text-bone" : "text-ink"
        } ${align === "center" ? "mx-auto" : ""}`}
      >
        {title}{" "}
        {accentTitle ? (
          <span className="font-serif italic font-normal text-accent">{accentTitle}</span>
        ) : null}
      </h2>
      {copy ? (
        <p className={`mt-5 max-w-2xl text-[1.05rem] leading-relaxed ${dark ? "text-bone/60" : "text-smoke"} ${align === "center" ? "mx-auto" : ""}`}>
          {copy}
        </p>
      ) : null}
    </Reveal>
  );
}
