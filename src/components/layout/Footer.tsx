import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "./Logo";
import { footerNav } from "./nav";
import { SocialIcon } from "@/components/shared/SocialIcon";
import { company } from "@/data/company";

export function Footer() {
  const c = company.contact;
  return (
    <footer className="bg-forest-deep text-on-dark">
      <div className="container-gd grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1.2fr]">
        <div>
          <Logo size="lg" />
          <p className="mt-6 text-sm text-on-dark-muted">{company.tagline}</p>
        </div>
        <div>
          <h3 className="font-sans text-sm font-semibold text-on-dark">Quick Links</h3>
          <ul className="mt-5 grid grid-cols-2 gap-y-3 text-sm text-on-dark-muted">
            {footerNav.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="transition-colors hover:text-gold">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-sans text-sm font-semibold text-on-dark">Contact Info</h3>
          {c ? (
            <ul className="mt-5 space-y-3 text-sm text-on-dark-muted">
              <li className="flex gap-3"><MapPin className="size-4 shrink-0 text-gold" aria-hidden="true" />{c.address}</li>
              <li className="flex gap-3"><Phone className="size-4 shrink-0 text-gold" aria-hidden="true" /><a href={`tel:${c.phone.replace(/\s/g, "")}`} className="hover:text-gold">{c.phone}</a></li>
              <li className="flex gap-3"><Mail className="size-4 shrink-0 text-gold" aria-hidden="true" /><a href={`mailto:${c.email}`} className="hover:text-gold">{c.email}</a></li>
            </ul>
          ) : (
            <p className="mt-5 text-sm text-on-dark-muted">Contact details will be published soon.</p>
          )}
          <div className="mt-6 flex gap-5">
            {company.socials.map((s) => (
              <a key={s.name} href={s.href} target="_blank" rel="noreferrer" aria-label={s.name} className="text-on-dark transition-colors hover:text-gold">
                <SocialIcon name={s.icon} className="size-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="container-gd flex flex-col gap-3 border-t border-on-dark/10 py-6 text-xs text-on-dark-muted sm:flex-row sm:justify-between">
        <p>© {new Date().getFullYear()} Global Developers. All rights reserved.</p>
        <p>Privacy Policy &nbsp;|&nbsp; Terms of Use</p>
      </div>
    </footer>
  );
}
