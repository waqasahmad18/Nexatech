import { NextResponse } from "next/server";
import { OUTREACH_COOKIE } from "@/lib/outreach/auth";

export async function POST() {
  const res = NextResponse.json({ ok: true });
  res.cookies.set(OUTREACH_COOKIE, "", { httpOnly: true, path: "/", maxAge: 0 });
  return res;
}
