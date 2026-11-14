import { NextResponse } from "next/server";
import { isOutreachSignedIn } from "@/lib/outreach/auth";
import { parseLeadsCsv, readLeadsCsv } from "@/lib/outreach/openoutreach";

export async function GET() {
  if (!(await isOutreachSignedIn())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const csv = await readLeadsCsv();
  return NextResponse.json({ ...parseLeadsCsv(csv), csv });
}
