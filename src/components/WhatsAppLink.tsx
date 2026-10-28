import { whatsappHref } from "@/data/site";

export function WhatsAppIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden fill="currentColor">
      <path d="M12.04 2C6.58 2 2.15 6.4 2.15 11.83c0 1.74.46 3.44 1.34 4.94L2 22l5.39-1.41a10 10 0 0 0 4.65 1.15h.01c5.46 0 9.89-4.4 9.89-9.83C21.94 6.4 17.5 2 12.04 2zm5.76 13.95c-.24.68-1.4 1.3-1.94 1.38-.5.08-1.12.11-1.81-.11-.42-.14-.95-.31-1.64-.6-2.88-1.24-4.76-4.14-4.9-4.33-.14-.19-1.16-1.54-1.16-2.94s.73-2.08 1-2.37c.24-.27.64-.39 1.02-.39h.3c.24 0 .36.02.52.4.2.47.68 1.66.74 1.78.06.12.1.27.02.43-.08.16-.12.27-.24.41-.12.14-.25.32-.36.43-.12.12-.24.24-.1.47.14.23.62 1.02 1.33 1.65.92.82 1.69 1.07 1.93 1.19.24.12.38.1.52-.06.14-.16.6-.7.76-.94.16-.24.32-.2.54-.12.22.08 1.4.66 1.64.78.24.12.4.18.46.28.06.1.06.58-.18 1.26z" />
    </svg>
  );
}

export default function WhatsAppLink({ onLight = false }: { onLight?: boolean }) {
  return (
    <a
      href={whatsappHref}
      target="_blank"
      rel="noreferrer"
      className={`inline-flex items-center gap-3 text-sm font-semibold ${onLight ? "text-neutral-950" : "text-white"}`}
    >
      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#E10600] text-white">
        <WhatsAppIcon />
      </span>
      Chat on WhatsApp
    </a>
  );
}
