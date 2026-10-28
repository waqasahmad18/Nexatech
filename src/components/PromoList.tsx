"use client";

import { useState } from "react";
import type { PromoEntry } from "@/lib/promoList";

export default function PromoList({
  entries,
  onUse,
}: {
  entries: PromoEntry[];
  onUse?: (entry: PromoEntry) => void;
}) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(entries.map((entry) => entry.email).join("\n"));
    setCopied(true);
  };

  if (!entries.length) {
    return <p className="border border-neutral-300 bg-white px-5 py-8 text-sm text-neutral-600">No query emails saved yet. They appear here when someone sends a form with an email.</p>;
  }

  return (
    <div className="border border-neutral-300 bg-white text-neutral-950">
      <div className="flex items-center justify-between gap-4 border-b border-neutral-200 px-5 py-4">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#E10600]">Promotional list</p>
          <h2 className="mt-1 text-xl font-semibold tracking-tight">{entries.length} saved {entries.length === 1 ? "email" : "emails"}</h2>
        </div>
        <button type="button" onClick={copy} className="bg-black px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-white hover:bg-[#E10600]">
          {copied ? "Copied" : "Copy emails"}
        </button>
      </div>
      <ul className="divide-y divide-neutral-200">
        {entries.map((entry) => (
          <li key={entry.email} className="grid gap-1 px-5 py-4 text-sm sm:grid-cols-[1.2fr_0.8fr_0.8fr]">
            <div>
              <p className="font-semibold">{entry.email}</p>
              <p className="text-neutral-600">{entry.name || "No name"}</p>
            </div>
              <p className="text-neutral-700">{entry.service || "Website form"}</p>
              {entry.page ? <p className="break-all text-xs text-neutral-500">{entry.page}</p> : null}
            <div className="flex items-center justify-between gap-3 sm:justify-end">
              <p className="text-neutral-500">{new Date(entry.savedAt).toLocaleString("en-GB", { day: "2-digit", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit" })}</p>
              {onUse ? (
                <button type="button" onClick={() => onUse(entry)} className="text-xs font-semibold uppercase tracking-[0.14em] text-[#E10600]">
                  Use
                </button>
              ) : null}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
