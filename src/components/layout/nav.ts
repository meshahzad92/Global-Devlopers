export const mainNav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/projects", label: "Projects" },
  { href: "/leadership", label: "Leadership" },
  { href: "/gallery", label: "Gallery" },
  { href: "/updates", label: "Updates" },
  { href: "/contact", label: "Contact" },
] as const;

export const footerNav = [
  { href: "/", label: "Home" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About Us" },
  { href: "/updates", label: "Updates" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
  { href: "/leadership", label: "Leadership" },
] as const;

export function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);
}
