import { BadgeCheck } from "lucide-react";
import { Marquee } from "@/components/marquee";

const partners = [
  { name: "Google Partner", detail: "Premier certified" },
  { name: "Meta Business Partner", detail: "Performance verified" },
  { name: "Microsoft Solutions Partner", detail: "Modern work & cloud" },
  { name: "AWS Partner Network", detail: "Select tier services" },
  { name: "Shopify Partners", detail: "Plus specialists" },
  { name: "HubSpot Solutions Partner", detail: "Growth stack" },
];

export function PartnerBadges({ dark = false }: { dark?: boolean }) {
  return (
    <Marquee slow className="[mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
      {partners.map((p) => (
        <div
          key={p.name}
          className={`mx-3 flex shrink-0 items-center gap-3 rounded-2xl border px-6 py-4 ${
            dark
              ? "border-white/12 bg-white/[0.04]"
              : "border-line bg-white shadow-[0_2px_14px_-8px_rgba(16,16,20,0.25)]"
          }`}
        >
          <span
            className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${
              dark ? "bg-accent/15 text-accent" : "bg-accent-soft text-accent"
            }`}
          >
            <BadgeCheck className="h-5 w-5" />
          </span>
          <span>
            <span className={`block font-display text-[0.92rem] font-bold leading-tight ${dark ? "text-bone" : "text-ink"}`}>
              {p.name}
            </span>
            <span className={`block text-[0.72rem] font-semibold uppercase tracking-[0.14em] ${dark ? "text-bone/45" : "text-fog"}`}>
              {p.detail}
            </span>
          </span>
        </div>
      ))}
    </Marquee>
  );
}
