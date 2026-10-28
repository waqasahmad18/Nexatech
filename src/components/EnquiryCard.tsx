"use client";

import { services } from "@/data/services";
import { whatsappHref } from "@/data/site";
import { submitForm } from "@/lib/submitForm";
import { FormEvent, useState } from "react";
import { WhatsAppIcon } from "./WhatsAppLink";

export default function EnquiryCard({ serviceTitle }: { serviceTitle?: string }) {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const [pending, setPending] = useState(false);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");
    setPending(true);
    const data = new FormData(event.currentTarget);
    try {
      await submitForm({
        source: window.location.pathname,
        name: data.get("name"),
        email: data.get("email"),
        phone: data.get("phone"),
        whatsapp: data.get("whatsapp"),
        service: data.get("service"),
        message: data.get("message"),
      });
      setSent(true);
    } catch {
      setError("The message could not be sent. Use Chat on WhatsApp for now.");
    } finally {
      setPending(false);
    }
  };

  const field = "w-full border border-neutral-300 bg-white px-3 py-2 text-sm outline-none focus:border-black";

  return (
    <div className="border border-neutral-300 bg-white text-neutral-950 shadow-sm">
      <div className="border-b border-neutral-200 px-4 py-3">
        <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#E10600]">Contact</p>
        <h2 className="mt-1 text-lg font-semibold tracking-tight">Tell us what you need</h2>
      </div>

      <div className="p-4">
        {sent ? (
          <p className="border border-black bg-black px-3 py-3 text-sm text-white">
            Message sent. A copy is on its way to your email.
          </p>
        ) : (
          <form onSubmit={onSubmit} className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <label className="block text-xs font-medium">
              Name
              <input required name="name" className={`mt-1 ${field}`} />
            </label>
            <label className="block text-xs font-medium">
              Email
              <input required type="email" name="email" className={`mt-1 ${field}`} />
            </label>
            <label className="block text-xs font-medium">
              Contact number
              <input name="phone" className={`mt-1 ${field}`} />
            </label>
            <label className="block text-xs font-medium">
              WhatsApp
              <input name="whatsapp" className={`mt-1 ${field}`} />
            </label>
            <label className="block text-xs font-medium sm:col-span-2">
              Service
              <select name="service" defaultValue={serviceTitle ?? ""} className={`mt-1 ${field}`}>
                <option value="">Select a service</option>
                {services.map((service) => (
                  <option key={service.slug} value={service.title}>
                    {service.title}
                  </option>
                ))}
              </select>
            </label>
            <label className="block text-xs font-medium sm:col-span-2">
              Message
              <textarea required name="message" rows={3} className={`mt-1 resize-none ${field}`} />
            </label>
            <button type="submit" disabled={pending} className="bg-black px-4 py-2 text-sm font-semibold text-white hover:bg-[#E10600] disabled:opacity-60 sm:col-span-2">
              {pending ? "Sending…" : "Send message"}
            </button>
            {error ? <p className="text-sm text-[#E10600] sm:col-span-2">{error}</p> : null}
          </form>
        )}

        <a
          href={whatsappHref}
          target="_blank"
          rel="noreferrer"
          className="mt-3 flex items-center justify-center gap-2 border border-black px-4 py-2 text-sm font-semibold text-black hover:border-[#E10600] hover:text-[#E10600]"
        >
          <WhatsAppIcon className="h-4 w-4" />
          Chat on WhatsApp
        </a>
      </div>
    </div>
  );
}
