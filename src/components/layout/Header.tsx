"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { isActive, mainNav } from "./nav";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu with Escape (links close it on click).
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b border-on-dark/10 bg-forest-deep/95 backdrop-blur transition-shadow",
        scrolled && "shadow-[0_8px_24px_-12px_rgb(0_0_0/0.5)]",
      )}
    >
      <div className="container-gd flex h-16 items-center justify-between">
        <Logo />
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main">
          {mainNav.map((n) => {
            const active = isActive(pathname, n.href);
            return (
              <Link
                key={n.href}
                href={n.href}
                aria-current={active ? "page" : undefined}
                className={cn("text-[13px] text-on-dark/85 transition-colors hover:text-gold", active && "text-gold")}
              >
                {n.label}
              </Link>
            );
          })}
        </nav>
        <Button asChild variant="gold" size="sm" className="hidden lg:inline-flex">
          <Link href="/contact">
            Get in Touch <ArrowRight />
          </Link>
        </Button>
        <button
          className="p-2 text-on-dark lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
          aria-controls="mobile-nav"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav id="mobile-nav" className="border-t border-on-dark/10 bg-forest-deep lg:hidden" aria-label="Mobile">
          <div className="container-gd flex flex-col py-4">
            {mainNav.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                aria-current={isActive(pathname, n.href) ? "page" : undefined}
                className={cn("border-b border-on-dark/10 py-3 text-on-dark/90", isActive(pathname, n.href) && "text-gold")}
              >
                {n.label}
              </Link>
            ))}
            <Button asChild variant="gold" className="mt-4">
              <Link href="/contact" onClick={() => setOpen(false)}>
                Get in Touch <ArrowRight />
              </Link>
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
}
