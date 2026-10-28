import Link from "next/link";

export function LogoMark({ size = 38 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <rect width="40" height="40" rx="11" className="fill-ink" />
      <path
        d="M20 6.5 L23.6 16.4 L33.5 20 L23.6 23.6 L20 33.5 L16.4 23.6 L6.5 20 L16.4 16.4 Z"
        className="fill-accent"
      />
      <circle cx="29.5" cy="10.5" r="2.2" className="fill-bone" />
    </svg>
  );
}

export function Logo({ dark = false, compact = false }: { dark?: boolean; compact?: boolean }) {
  return (
    <Link href="/" className="group inline-flex items-center gap-2.5" aria-label="Nova Solution — home">
      <LogoMark />
      {compact ? null : (
        <span
          className={`font-display text-[1.15rem] leading-none tracking-tight ${
            dark ? "text-bone" : "text-ink"
          }`}
        >
          nova<span className="text-accent">.</span>
          <span className={dark ? "text-bone/60" : "text-smoke"}>solution</span>
        </span>
      )}
    </Link>
  );
}
