import { brand } from "@/data/site";

export function EmailIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden fill="currentColor">
      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5L4 8V6l8 5 8-5v2z" />
    </svg>
  );
}

export default function EmailLink({ onLight = false }: { onLight?: boolean }) {
  return (
    <a
      href={`mailto:${brand.email}`}
      className={`inline-flex items-center gap-3 text-sm font-semibold ${onLight ? "text-neutral-950" : "text-white"}`}
    >
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#E10600] text-white">
        <EmailIcon />
      </span>
      <span>
        Email us for inquiries
        <span className={`mt-0.5 block text-xs font-medium ${onLight ? "text-neutral-600" : "text-white/75"}`}>{brand.email}</span>
      </span>
    </a>
  );
}
