import type { ServiceFaq } from "@/data/services";

export default function ServiceFaq({ faqs }: { faqs: ServiceFaq[] }) {
  return (
    <div className="border-y border-neutral-200">
      {faqs.map((item) => (
        <details key={item.q} className="group border-b border-neutral-200 last:border-b-0">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-base font-medium tracking-tight [&::-webkit-details-marker]:hidden">
            {item.q}
            <span className="grid h-7 w-7 shrink-0 place-items-center border border-neutral-300 text-lg leading-none text-[#E10600] transition-transform group-open:rotate-45">
              +
            </span>
          </summary>
          <p className="max-w-3xl pb-5 pr-12 text-sm leading-relaxed text-neutral-600">{item.a}</p>
        </details>
      ))}
    </div>
  );
}
