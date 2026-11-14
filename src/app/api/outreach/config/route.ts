import { NextResponse } from "next/server";
import { isOutreachSignedIn } from "@/lib/outreach/auth";
import { readConfigFiles, writeConfigFiles } from "@/lib/outreach/openoutreach";

export async function GET() {
  if (!(await isOutreachSignedIn())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  return NextResponse.json(await readConfigFiles());
}

export async function PUT(req: Request) {
  if (!(await isOutreachSignedIn())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const body = (await req.json().catch(() => ({}))) as { product?: string; target?: string };
  if (typeof body.product !== "string" || typeof body.target !== "string") {
    return NextResponse.json({ error: "product and target required" }, { status: 400 });
  }
  await writeConfigFiles(body.product, body.target);
  return NextResponse.json({ ok: true });
}
