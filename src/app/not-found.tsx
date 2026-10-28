import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { LogoMark } from "@/components/logo";

export default function NotFound() {
  return (
    <section className="dot-grid flex min-h-[80vh] items-center">
      <div className="container-x py-24 text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center">
          <LogoMark size={64} />
        </div>
        <p className="mt-8 font-display text-[7rem] font-extrabold leading-none tracking-tight text-ink md:text-[10rem]">
          4<span className="text-accent">0</span>4
        </p>
        <h1 className="mt-2 font-display text-2xl font-bold text-ink md:text-3xl">
          This page shipped without a route.
        </h1>
        <p className="mx-auto mt-4 max-w-md text-[1rem] leading-relaxed text-smoke">
          Even the best teams push a bug sometimes. Let&apos;s get you back to something that converts.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 font-display text-base font-bold text-white transition-colors hover:bg-accent-deep"
        >
          <ArrowLeft className="h-5 w-5" /> Back to home
        </Link>
      </div>
    </section>
  );
}
