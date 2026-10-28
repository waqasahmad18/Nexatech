export const brand = {
  name: "Bravioniyx",
  legal: "Bravioniyx Technologies",
  mark: "BRAVIONIYX",
  tagline: "Ideas / Solutions / Growth",
  email: "bravioniyxtecnology@gmail.com",
  phoneDisplay: "03224188759",
  phoneE164: "923224188759",
  location: "Lahore, Pakistan",
};

export const whatsappHref = `https://wa.me/${brand.phoneE164}?text=${encodeURIComponent(
  "Hello Bravioniyx Technologies, I would like to talk about a project."
)}`;

export const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Get a quote", href: "/get-a-quote" },
  { name: "Contact", href: "/contact" },
];
