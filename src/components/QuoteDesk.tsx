"use client";

import { FormEvent, useMemo, useState } from "react";
import { services } from "@/data/services";

type ServiceRow = {
  service: string;
  customService: string;
  detail: string;
  qty: string;
  price: string;
};

const emptyService = (): ServiceRow => ({ service: "", customService: "", detail: "", qty: "1", price: "" });

export default function QuoteDesk() {
  const [clientName, setClientName] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [clientPhone, setClientPhone] = useState("");
  const [quoteNo, setQuoteNo] = useState(`BX-${new Date().getFullYear()}${String(new Date().getMonth() + 1).padStart(2, "0")}${String(new Date().getDate()).padStart(2, "0")}`);
  const [validUntil, setValidUntil] = useState("");
  const [currency, setCurrency] = useState("PKR");
  const [notes, setNotes] = useState("");
  const [rows, setRows] = useState<ServiceRow[]>([emptyService()]);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState("");
  const [sent, setSent] = useState("");

  const total = useMemo(
    () => rows.reduce((sum, row) => sum + (Number(row.qty) || 0) * (Number(row.price) || 0), 0),
    [rows]
  );

  const update = (index: number, key: keyof ServiceRow, value: string) => {
    setRows((current) => current.map((row, rowIndex) => (rowIndex === index ? { ...row, [key]: value } : row)));
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
        credentials: "include",
        body: JSON.stringify({
          clientName,
          clientEmail,
          clientPhone,
          quoteNo,
          validUntil,
          currency,
          notes,
          services: rows.map((row) => ({
            name: row.service === "Other" ? row.customService : row.service,
            detail: row.detail,
            qty: Number(row.qty),
            price: Number(row.price),
          })),
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
        <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#E10600]">Send quotation</p>
        <h2 className="mt-1 text-xl font-semibold tracking-tight">Services and pricing</h2>
      </div>
      <div className="grid gap-4 p-5 sm:grid-cols-2">
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

        <div className="space-y-3 sm:col-span-2">
          <div className="flex items-center justify-between">
            <p className="text-xs font-semibold uppercase tracking-[0.16em]">Services</p>
            <button type="button" onClick={() => setRows((current) => [...current, emptyService()])} className="text-xs font-semibold uppercase tracking-[0.14em] text-[#E10600]">
              Add service
            </button>
          </div>
          {rows.map((row, index) => {
            const amount = (Number(row.qty) || 0) * (Number(row.price) || 0);
            return (
              <div key={index} className="border border-neutral-200 p-3">
                <div className="mb-3 flex items-center justify-between">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#E10600]">Service {String(index + 1).padStart(2, "0")}</p>
                  <button
                    type="button"
                    onClick={() => setRows((current) => (current.length === 1 ? current : current.filter((_, rowIndex) => rowIndex !== index)))}
                    className="text-xs font-semibold uppercase tracking-[0.14em] text-neutral-500"
                  >
                    Remove
                  </button>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  <label className="block text-xs font-medium">
                    Service
                    <select required value={row.service} onChange={(event) => update(index, "service", event.target.value)} className={field}>
                      <option value="">Select a service</option>
                      {services.map((item) => (
                        <option key={item.slug} value={item.title}>{item.title}</option>
                      ))}
                      <option value="Other">Other</option>
                    </select>
                  </label>
                  <label className="block text-xs font-medium">
                    Price
                    <input required type="number" min="0" step="0.01" placeholder="Price" value={row.price} onChange={(event) => update(index, "price", event.target.value)} className={field} />
                  </label>
                  {row.service === "Other" ? (
                    <label className="block text-xs font-medium sm:col-span-2">
                      Service name
                      <input required value={row.customService} onChange={(event) => update(index, "customService", event.target.value)} className={field} />
                    </label>
                  ) : null}
                  <label className="block text-xs font-medium sm:col-span-2">
                    Service detail
                    <textarea required minLength={8} value={row.detail} onChange={(event) => update(index, "detail", event.target.value)} rows={2} placeholder="Short description of this service" className={`${field} resize-none`} />
                  </label>
                  <label className="block text-xs font-medium">
                    Quantity
                    <input required type="number" min="1" step="1" value={row.qty} onChange={(event) => update(index, "qty", event.target.value)} className={field} />
                  </label>
                  <p className="self-end text-sm font-semibold sm:text-right">Amount {currency} {amount.toLocaleString("en-US")}</p>
                </div>
              </div>
            );
          })}
          <p className="text-right text-lg font-semibold">Total {currency} {total.toLocaleString("en-US")}</p>
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
