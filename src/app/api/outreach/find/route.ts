import { NextResponse } from "next/server";
import { isOutreachSignedIn } from "@/lib/outreach/auth";
import { openOutreachFind } from "@/lib/outreach/openoutreach";

export async function POST(req: Request) {
  if (!(await isOutreachSignedIn())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const body = (await req.json().catch(() => ({}))) as { count?: number; emails?: boolean };
  const result = await openOutreachFind(body.count ?? 5, Boolean(body.emails));
  return NextResponse.json(result, { status: result.ok ? 200 : 502 });
}
