import { NextResponse } from "next/server";
import { db } from "@/db";
import { subscribers } from "@/db/schema";

export async function POST(req: Request) {
  try {
    const { email } = await req.json();
    if (typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Please enter a valid email." }, { status: 400 });
    }
    await db
      .insert(subscribers)
      .values({ email: email.trim().toLowerCase().slice(0, 200) })
      .onConflictDoNothing();
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("newsletter:insert failed", err);
    return NextResponse.json({ error: "Subscription failed. Try again." }, { status: 500 });
  }
}
