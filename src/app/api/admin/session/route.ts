import { NextRequest, NextResponse } from "next/server";
import { ADMIN_COOKIE, verifySessionToken } from "@/lib/adminAuth";

export async function GET(request: NextRequest) {
  const admin = verifySessionToken(request.cookies.get(ADMIN_COOKIE)?.value);
  return NextResponse.json({ admin });
}
