import { cookies } from "next/headers";

const COOKIE = "bx_outreach_session";

export function portalSecret() {
  return process.env.OUTREACH_PORTAL_SECRET || process.env.PORTAL_SECRET || "";
}

export async function isOutreachSignedIn() {
  const secret = portalSecret();
  if (!secret) return false;
  const jar = await cookies();
  return jar.get(COOKIE)?.value === secret;
}

export { COOKIE as OUTREACH_COOKIE };
