import { NextResponse } from "next/server";
import { db } from "@/db";
import { leads } from "@/db/schema";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, company, phone, service, budget, message } = body ?? {};

    if (typeof name !== "string" || name.trim().length < 2) {
      return NextResponse.json({ error: "Please enter your full name." }, { status: 400 });
    }
    if (typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
    }
    if (typeof service !== "string" || !service.trim()) {
      return NextResponse.json({ error: "Please select a service." }, { status: 400 });
    }
    if (typeof message !== "string" || message.trim().length < 10) {
      return NextResponse.json({ error: "Tell us a little more about the project (10+ characters)." }, { status: 400 });
    }

    await db.insert(leads).values({
      name: name.trim().slice(0, 120),
      email: email.trim().toLowerCase().slice(0, 200),
      company: typeof company === "string" ? company.trim().slice(0, 160) : null,
      phone: typeof phone === "string" ? phone.trim().slice(0, 60) : null,
      service: service.trim().slice(0, 120),
      budget: typeof budget === "string" ? budget.trim().slice(0, 80) : null,
      message: message.trim().slice(0, 4000),
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("contact:insert failed", err);
    return NextResponse.json(
      { error: "We couldn't save your message. Please email hello@novasolution.com directly." },
      { status: 500 },
    );
  }
}
