import { NextResponse } from "next/server";
import { ADMIN_COOKIE, adminConfigured, adminCookieOptions, createSessionToken, credentialsMatch } from "@/lib/adminAuth";

export async function POST(request: Request) {
  if (!adminConfigured()) {
    return NextResponse.json({ error: "Admin sign-in is not set up yet." }, { status: 503 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "The sign-in could not be read." }, { status: 400 });
  }

  const fields = (body ?? {}) as Record<string, unknown>;
  const email = String(fields.email ?? "");
  const password = String(fields.password ?? "");

  if (!credentialsMatch(email, password)) {
    return NextResponse.json({ error: "Those details do not match." }, { status: 401 });
  }

  const response = NextResponse.json({ ok: true });
  response.cookies.set(ADMIN_COOKIE, createSessionToken(), adminCookieOptions);
  return response;
}
