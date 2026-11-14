import { NextResponse } from "next/server";
import { isOutreachSignedIn } from "@/lib/outreach/auth";
import { checkDocker, openOutreachStatus } from "@/lib/outreach/openoutreach";

export async function GET() {
  if (!(await isOutreachSignedIn())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const dockerOk = await checkDocker();
  const status = await openOutreachStatus();
  return NextResponse.json({
    dockerOk,
    runtime: process.env.OPENOUTREACH_RUNTIME || "docker",
    image: process.env.OPENOUTREACH_IMAGE || "ghcr.io/eracle/openoutreach:latest",
    openOutreach: status,
  });
}
