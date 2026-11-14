export const brand = {
  name: "Bravioniyx",
  legal: "Bravioniyx Technologies",
  mark: "BRAVIONIYX",
  tagline: "Ideas / Solutions / Growth",
  email: "bravioniyxtecnology@gmail.com",
  phoneDisplay: "03297320409",
  phoneE164: "923297320409",
  location: "Lahore, Pakistan",
};

export const whatsappHref = `https://wa.me/${brand.phoneE164}?text=${encodeURIComponent(
  "Hello Bravioniyx Technologies, I would like to talk about a project."
)}`;

export const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Blog", href: "/blog" },
  { name: "Get a quote", href: "/get-a-quote" },
  { name: "Contact", href: "/contact" },
];

/** Staff OpenOutreach portal (separate app). Set NEXT_PUBLIC_OUTREACH_PORTAL_URL. */
export const outreachPortalUrl =
  process.env.NEXT_PUBLIC_OUTREACH_PORTAL_URL || "http://localhost:3010";
