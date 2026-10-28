"use client";

import { FormEvent, useMemo, useState } from "react";

type Line = { description: string; qty: string; price: string };

const emptyLine = (): Line => ({ description: "", qty: "1", price: "" });

export default function QuoteDesk() {
  const [pin, setPin] = useState("");
  const [clientName, setClientName] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [clientPhone, setClientPhone] = useState("");
  const [service, setService] = useState("");
  const [quoteNo, setQuoteNo] = useState(`BX-${new Date().getFullYear()}${String(new Date().getMonth() + 1).padStart(2, "0")}${String(new Date().getDate()).padStart(2, "0")}`);
  const [validUntil, setValidUntil] = useState("");
  const [currency, setCurrency] = useState("PKR");
  const [notes, setNotes] = useState("");
  const [items, setItems] = useState<Line[]>([emptyLine()]);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState("");
  const [sent, setSent] = useState("");

  const total = useMemo(
    () => items.reduce((sum, item) => sum + (Number(item.qty) || 0) * (Number(item.price) || 0), 0),
    [items]
  );

  const update = (index: number, key: keyof Line, value: string) => {
    setItems((current) => current.map((item, itemIndex) => (itemIndex === index ? { ...item, [key]: value } : item)));
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");
    setSent("");
    setPending(true);
    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          pin,
          clientName,
          clientEmail,
          clientPhone,
          service,
          quoteNo,
          validUntil,
          currency,
          notes,
          items: items.map((item) => ({ description: item.description, qty: Number(item.qty), price: Number(item.price) })),
        }),
      });
      const result = (await response.json()) as { error?: string };
      if (!response.ok) {
        setError(result.error || "The quotation could not be sent.");
        return;
      }
      setSent(`Quotation sent to ${clientEmail}. A copy is in the company inbox.`);
    } catch {
      setError("The quotation could not be sent.");
    } finally {
      setPending(false);
    }
  };

  const field = "mt-1 w-full border border-neutral-300 bg-white px-3 py-2 text-sm outline-none focus:border-black";

  return (
    <form onSubmit={onSubmit} className="border border-neutral-300 bg-white text-neutral-950">
      <div className="border-b border-neutral-200 px-5 py-4">
        <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#E10600]">Quotation desk</p>
        <h2 className="mt-1 text-xl font-semibold tracking-tight">Send a branded quotation</h2>
      </div>
      <div className="grid gap-4 p-5 sm:grid-cols-2">
        <label className="block text-xs font-medium sm:col-span-2">
          Desk code
          <input required value={pin} onChange={(event) => setPin(event.target.value)} className={field} />
        </label>
        <label className="block text-xs font-medium">
          Client name
          <input required value={clientName} onChange={(event) => setClientName(event.target.value)} className={field} />
        </label>
        <label className="block text-xs font-medium">
          Client email
          <input required type="email" value={clientEmail} onChange={(event) => setClientEmail(event.target.value)} className={field} />
        </label>
        <label className="block text-xs font-medium">
          Client contact
          <input value={clientPhone} onChange={(event) => setClientPhone(event.target.value)} className={field} />
        </label>
        <label className="block text-xs font-medium">
          Service
          <input value={service} onChange={(event) => setService(event.target.value)} className={field} />
        </label>
        <label className="block text-xs font-medium">
          Quote number
          <input required value={quoteNo} onChange={(event) => setQuoteNo(event.target.value)} className={field} />
        </label>
        <label className="block text-xs font-medium">
          Valid until
          <input type="date" value={validUntil} onChange={(event) => setValidUntil(event.target.value)} className={field} />
        </label>
        <label className="block text-xs font-medium">
          Currency
          <select value={currency} onChange={(event) => setCurrency(event.target.value)} className={field}>
            <option>PKR</option>
            <option>USD</option>
            <option>AED</option>
            <option>SAR</option>
          </select>
        </label>

        <div className="sm:col-span-2">
          <div className="mb-2 flex items-center justify-between">
            <p className="text-xs font-semibold uppercase tracking-[0.16em]">Lines</p>
            <button type="button" onClick={() => setItems((current) => [...current, emptyLine()])} className="text-xs font-semibold uppercase tracking-[0.14em] text-[#E10600]">
              Add line
            </button>
          </div>
          <div className="space-y-2">
            {items.map((item, index) => (
              <div key={index} className="grid grid-cols-[1fr_72px_96px_auto] gap-2">
                <input required placeholder="Description" value={item.description} onChange={(event) => update(index, "description", event.target.value)} className="border border-neutral-300 px-3 py-2 text-sm outline-none focus:border-black" />
                <input required type="number" min="1" step="1" value={item.qty} onChange={(event) => update(index, "qty", event.target.value)} className="border border-neutral-300 px-2 py-2 text-sm outline-none focus:border-black" />
                <input required type="number" min="0" step="0.01" placeholder="Price" value={item.price} onChange={(event) => update(index, "price", event.target.value)} className="border border-neutral-300 px-2 py-2 text-sm outline-none focus:border-black" />
                <button type="button" onClick={() => setItems((current) => (current.length === 1 ? current : current.filter((_, itemIndex) => itemIndex !== index)))} className="px-2 text-sm text-neutral-500">
                  ×
                </button>
              </div>
            ))}
          </div>
          <p className="mt-3 text-right text-lg font-semibold">Total {currency} {total.toLocaleString("en-US")}</p>
        </div>

        <label className="block text-xs font-medium sm:col-span-2">
          Notes
          <textarea value={notes} onChange={(event) => setNotes(event.target.value)} rows={3} className={`${field} resize-none`} />
        </label>

        {error ? <p className="text-sm text-[#E10600] sm:col-span-2">{error}</p> : null}
        {sent ? <p className="border border-black bg-black px-3 py-3 text-sm text-white sm:col-span-2">{sent}</p> : null}

        <button type="submit" disabled={pending} className="bg-black px-4 py-3 text-sm font-semibold text-white hover:bg-[#E10600] disabled:opacity-60 sm:col-span-2">
          {pending ? "Sending…" : "Send quotation"}
        </button>
      </div>
    </form>
  );
}
