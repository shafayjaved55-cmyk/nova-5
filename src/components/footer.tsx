"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "@/components/logo";
import { site } from "@/data/site";
import { services } from "@/data/services";

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.55V9h3.57v11.45z" />
    </svg>
  );
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M18.24 2.25h3.31l-7.23 8.26 8.5 11.24h-6.66l-5.21-6.82-5.97 6.82H1.67l7.73-8.84L1.25 2.25h6.83l4.71 6.23 5.45-6.23zm-1.16 17.52h1.83L7.08 4.13H5.12l11.96 15.64z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} aria-hidden="true">
      <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" />
      <circle cx="12" cy="12" r="4.25" />
      <circle cx="17.4" cy="6.6" r="1.15" fill="currentColor" stroke="none" />
    </svg>
  );
}

function DribbbleIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="9.5" />
      <path d="M19.6 6.9c-2 2.3-5.2 4-9.1 4.2-1.9.1-3.8-.2-5.5-.8M4 15.4c2.6-3.6 6.8-5.4 10.8-4.4 1.9.5 3.5 1.5 4.7 3" />
      <path d="M8.5 3.3c2.6 2.5 4.7 6 5.7 10.2.5 2 .7 4 .6 6" />
    </svg>
  );
}

function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.includes("@")) {
      setStatus("error");
      return;
    }
    setStatus("loading");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error();
      setStatus("done");
    } catch {
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <p className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3.5 text-sm font-semibold text-bone">
        <CheckCircle2 className="h-4 w-4 text-accent" /> You&apos;re on the list. Talk soon.
      </p>
    );
  }

  return (
    <form onSubmit={submit} className="flex overflow-hidden rounded-full border border-white/12 bg-white/[0.05] p-1.5 backdrop-blur">
      <input
        type="email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
          setStatus("idle");
        }}
        placeholder="Your work email"
        className="w-full bg-transparent px-4 text-sm text-bone outline-none placeholder:text-bone/35"
        aria-label="Email address"
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-accent px-4 py-2.5 text-[0.8rem] font-bold text-white transition-colors hover:bg-accent-deep disabled:opacity-60"
      >
        {status === "loading" ? "..." : "Subscribe"}
        <ArrowRight className="h-3.5 w-3.5" />
      </button>
    </form>
  );
}

export function Footer() {
  return (
    <footer className="noise relative overflow-hidden bg-night text-bone">
      <div className="dot-grid-light absolute inset-0 opacity-40" aria-hidden="true" />
      <div className="container-x relative pb-10 pt-20 md:pt-28">
        <div className="grid gap-14 lg:grid-cols-[1.3fr_1fr_1fr_1.2fr]">
          <div>
            <Logo dark />
            <p className="mt-5 max-w-xs text-[0.95rem] leading-relaxed text-bone/55">
              A digital product agency building websites, apps and growth systems that pay for themselves. Founded 2016.
            </p>
            <div className="mt-6 flex gap-2.5">
              {[
                { icon: LinkedInIcon, label: "LinkedIn" },
                { icon: XIcon, label: "X (Twitter)" },
                { icon: InstagramIcon, label: "Instagram" },
                { icon: DribbbleIcon, label: "Dribbble" },
              ].map((s) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/12 text-bone/60 transition-all hover:border-accent hover:bg-accent hover:text-white"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.22em] text-bone/40">Services</h3>
            <ul className="mt-5 space-y-3">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="text-[0.95rem] text-bone/70 transition-colors hover:text-accent">
                    {s.shortName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.22em] text-bone/40">Company</h3>
            <ul className="mt-5 space-y-3">
              {[
                { href: "/about", label: "About us" },
                { href: "/work", label: "Our work" },
                { href: "/team", label: "Meet the team" },
                { href: "/life", label: "Life at Nova" },
                { href: "/contact", label: "Contact" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-[0.95rem] text-bone/70 transition-colors hover:text-accent">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.22em] text-bone/40">Stay in the loop</h3>
            <p className="mb-4 mt-5 text-[0.9rem] text-bone/55">
              One short email a month — launches, lessons and openings. No spam, ever.
            </p>
            <NewsletterForm />
            <ul className="mt-7 space-y-2.5 text-[0.9rem] text-bone/60">
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-accent" /> {site.email}
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-accent" /> {site.phone}
              </li>
              <li className="flex items-center gap-2.5">
                <MapPin className="h-4 w-4 text-accent" /> {site.address}
              </li>
            </ul>
          </div>
        </div>

        <p className="text-stroke mt-16 select-none font-display text-[13vw] font-extrabold leading-none tracking-tight md:text-[9rem]">
          NOVA
        </p>

        <div className="mt-6 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-7 text-[0.82rem] text-bone/40 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Nova Solution (Pvt.) Ltd. All rights reserved.</p>
          <p className="flex items-center gap-2">
            <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            Currently taking on new projects for this quarter
          </p>
        </div>
      </div>
    </footer>
  );
}
