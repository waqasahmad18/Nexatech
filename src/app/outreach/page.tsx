import type { Metadata } from "next";
import { isOutreachSignedIn } from "@/lib/outreach/auth";
import PortalApp from "@/components/outreach/PortalApp";

export const metadata: Metadata = {
  title: "Outreach Portal — Bravioniyx",
  description: "Bravioniyx OpenOutreach portal for B2B lead find and send.",
  robots: { index: false, follow: false },
};

export default async function OutreachPage() {
  const signedIn = await isOutreachSignedIn();
  return <PortalApp signedIn={signedIn} websiteUrl="/" />;
}
