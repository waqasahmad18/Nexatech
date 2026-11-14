"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import QuoteDesk from "@/components/QuoteDesk";
import PromoList from "@/components/PromoList";
import type { PromoEntry } from "@/lib/promoList";

export default function AdminDashboard({
  entries,
  outreachPortalUrl,
}: {
  entries: PromoEntry[];
  outreachPortalUrl: string;
}) {
  const router = useRouter();
  const [prefill, setPrefill] = useState<{ name: string; email: string; key: number } | null>(null);

  const signOut = async () => {
    await fetch("/api/admin/logout", { method: "POST", credentials: "include" });
    router.refresh();
  };

  return (
    <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[0.9fr_1.1fr]">
      <section id="emails">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <h2 className="text-lg font-semibold text-neutral-950">Client emails</h2>
          <div className="flex items-center gap-4">
            <a
              href={outreachPortalUrl}
              target="_blank"
              rel="noreferrer"
              className="text-xs font-semibold uppercase tracking-[0.14em] text-[#E10600] hover:underline"
            >
              OpenOutreach portal
            </a>
            <button type="button" onClick={signOut} className="text-xs font-semibold uppercase tracking-[0.14em] text-neutral-500">
              Sign out
            </button>
          </div>
        </div>
        <PromoList
          entries={entries}
          onUse={(entry) => {
            setPrefill({ name: entry.name, email: entry.email, key: Date.now() });
            document.getElementById("quotation")?.scrollIntoView({ behavior: "smooth", block: "start" });
          }}
        />
      </section>
      <section id="quotation">
        <h2 className="mb-4 text-lg font-semibold text-neutral-950">Send a quotation</h2>
        <QuoteDesk prefill={prefill} />
      </section>
    </div>
  );
}
