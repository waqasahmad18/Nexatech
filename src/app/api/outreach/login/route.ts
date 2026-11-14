import { NextResponse } from "next/server";
import { OUTREACH_COOKIE, portalSecret } from "@/lib/outreach/auth";

export async function POST(req: Request) {
  const secret = portalSecret();
  if (!secret) {
    return NextResponse.json(
      { error: "Set OUTREACH_PORTAL_SECRET in .env.local before signing in." },
      { status: 500 }
    );
  }
  const body = (await req.json().catch(() => ({}))) as { secret?: string };
  if (body.secret !== secret) {
    return NextResponse.json({ error: "Wrong secret." }, { status: 401 });
  }
  const res = NextResponse.json({ ok: true });
  res.cookies.set(OUTREACH_COOKIE, secret, {
    httpOnly: true,
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 14,
  });
  return res;
}
