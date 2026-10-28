"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Mail, Menu, Phone, X } from "lucide-react";
import { Logo } from "@/components/logo";
import { site } from "@/data/site";

const links = [
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/team", label: "Team" },
  { href: "/life", label: "Life at Nova" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* top info bar */}
      <div className="hidden bg-ink text-bone/80 lg:block">
        <div className="container-x flex h-9 items-center justify-between text-[0.72rem] font-medium tracking-wide">
          <p className="uppercase tracking-[0.18em] text-bone/50">Digital product agency — Lahore · Dubai · Remote</p>
          <div className="flex items-center gap-6">
            <a href={`mailto:${site.email}`} className="inline-flex items-center gap-1.5 transition-colors hover:text-accent">
              <Mail className="h-3.5 w-3.5" /> {site.email}
            </a>
            <a href={`tel:${site.phoneHref}`} className="inline-flex items-center gap-1.5 transition-colors hover:text-accent">
              <Phone className="h-3.5 w-3.5" /> {site.phone}
            </a>
          </div>
        </div>
      </div>

      <header
        className={`sticky top-0 z-50 border-b transition-all duration-500 ${
          scrolled
            ? "border-line bg-bone/85 shadow-[0_10px_40px_-18px_rgba(16,16,20,0.25)] backdrop-blur-xl"
            : "border-transparent bg-bone/0"
        }`}
      >
        <div className="container-x flex h-[4.5rem] items-center justify-between">
          <Logo />

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
            {links.map((l) => {
              const active = pathname === l.href || pathname.startsWith(l.href + "/");
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`rounded-full px-4 py-2 text-[0.86rem] font-semibold transition-colors ${
                    active ? "bg-ink text-bone" : "text-smoke hover:bg-ink/5 hover:text-ink"
                  }`}
                >
                  {l.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="group hidden items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-[0.86rem] font-bold text-white transition-all hover:bg-accent-deep sm:inline-flex"
            >
              Start a project
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <button
              onClick={() => setOpen(true)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line bg-white text-ink lg:hidden"
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      {/* mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] flex flex-col bg-night text-bone"
          >
            <div className="container-x flex h-[4.5rem] items-center justify-between">
              <Logo dark />
              <button
                onClick={() => setOpen(false)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15"
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <nav className="container-x flex flex-1 flex-col justify-center gap-1" aria-label="Mobile">
              {links.map((l, i) => (
                <motion.div
                  key={l.href}
                  initial={{ opacity: 0, x: -28 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 + i * 0.06, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link
                    href={l.href}
                    className={`group flex items-baseline gap-4 border-b border-white/8 py-4 ${
                      pathname === l.href ? "text-accent" : "text-bone"
                    }`}
                  >
                    <span className="text-xs font-bold text-accent">0{i + 1}</span>
                    <span className="font-display text-4xl font-bold tracking-tight transition-transform duration-300 group-hover:translate-x-2">
                      {l.label}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </nav>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              className="container-x pb-10"
            >
              <Link
                href="/contact"
                className="flex w-full items-center justify-center gap-2 rounded-full bg-accent py-4 font-display text-lg font-bold text-white"
              >
                Start a project <ArrowUpRight className="h-5 w-5" />
              </Link>
              <p className="mt-5 text-center text-sm text-bone/50">{site.email} · {site.phone}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
