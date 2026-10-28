"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { services } from "@/data/services";

const budgets = ["Under $5,000", "$5,000 – $15,000", "$15,000 – $40,000", "$40,000 – $100,000", "$100,000+"];

const inputClass =
  "w-full rounded-2xl border border-line bg-bone px-4 py-3.5 text-[0.95rem] text-ink outline-none transition-all placeholder:text-fog focus:border-accent focus:bg-white focus:ring-4 focus:ring-accent/10";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "Something went wrong");
      setStatus("done");
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong");
    }
  }

  if (status === "done") {
    return (
      <div className="flex min-h-[26rem] flex-col items-center justify-center rounded-3xl border border-line bg-white p-10 text-center">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50">
          <CheckCircle2 className="h-8 w-8 text-emerald-500" />
        </span>
        <h3 className="mt-6 font-display text-2xl font-bold text-ink">Message received.</h3>
        <p className="mt-3 max-w-sm text-[0.95rem] leading-relaxed text-smoke">
          Thanks for reaching out — a senior member of our team (not a bot) will get back to you within 4 business hours
          with next steps.
        </p>
        <p className="mt-6 rounded-full bg-bone px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-smoke">
          While you wait — check your inbox for a confirmation
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="rounded-3xl border border-line bg-white p-6 shadow-[0_30px_70px_-40px_rgba(16,16,20,0.35)] md:p-9">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-[0.8rem] font-bold text-ink">
            Full name *
          </label>
          <input id="name" name="name" required placeholder="Sara Ahmed" className={inputClass} />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-[0.8rem] font-bold text-ink">
            Work email *
          </label>
          <input id="email" name="email" type="email" required placeholder="sara@company.com" className={inputClass} />
        </div>
        <div>
          <label htmlFor="company" className="mb-1.5 block text-[0.8rem] font-bold text-ink">
            Company
          </label>
          <input id="company" name="company" placeholder="Company Pvt. Ltd." className={inputClass} />
        </div>
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-[0.8rem] font-bold text-ink">
            Phone (optional)
          </label>
          <input id="phone" name="phone" type="tel" placeholder="+92 3xx xxx xxxx" className={inputClass} />
        </div>
        <div>
          <label htmlFor="service" className="mb-1.5 block text-[0.8rem] font-bold text-ink">
            What do you need? *
          </label>
          <select id="service" name="service" required defaultValue="" className={inputClass}>
            <option value="" disabled>
              Select a service
            </option>
            {services.map((s) => (
              <option key={s.slug} value={s.name}>
                {s.name}
              </option>
            ))}
            <option value="Not sure yet">Not sure yet — advise me</option>
          </select>
        </div>
        <div>
          <label htmlFor="budget" className="mb-1.5 block text-[0.8rem] font-bold text-ink">
            Budget range
          </label>
          <select id="budget" name="budget" defaultValue="" className={inputClass}>
            <option value="" disabled>
              Select a range
            </option>
            {budgets.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="message" className="mb-1.5 block text-[0.8rem] font-bold text-ink">
            Tell us about the project *
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            placeholder="What are you building, what's blocking you, and when do you need it live?"
            className={`${inputClass} resize-none`}
          />
        </div>
      </div>

      {status === "error" && (
        <p className="mt-4 rounded-2xl bg-red-50 px-4 py-3 text-sm font-semibold text-red-600">{errorMsg}</p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-8 py-4 font-display text-base font-bold text-white transition-colors hover:bg-accent-deep disabled:opacity-60"
      >
        {status === "loading" ? (
          <>
            Sending <Loader2 className="h-4 w-4 animate-spin" />
          </>
        ) : (
          <>
            Send message & get a reply within 4 hours
            <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </>
        )}
      </button>
      <p className="mt-4 text-center text-xs text-fog">
        By submitting, you agree to our privacy policy. We never share your details — with anyone, ever.
      </p>
    </form>
  );
}
