"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import QuoteDesk from "@/components/QuoteDesk";
import PromoList from "@/components/PromoList";
import type { PromoEntry } from "@/lib/promoList";

export default function AdminDashboard({ entries }: { entries: PromoEntry[] }) {
  const router = useRouter();
  const [prefill, setPrefill] = useState<{ name: string; email: string; key: number } | null>(null);

  const signOut = async () => {
    await fetch("/api/admin/logout", { method: "POST", credentials: "include" });
    router.refresh();
  };

  return (
    <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[0.9fr_1.1fr]">
      <section id="emails">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-neutral-950">Client emails</h2>
          <button type="button" onClick={signOut} className="text-xs font-semibold uppercase tracking-[0.14em] text-neutral-500">
            Sign out
          </button>
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
