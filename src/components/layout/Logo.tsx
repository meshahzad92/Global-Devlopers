import Link from "next/link";

export function Logo({ size = "sm" }: { size?: "sm" | "lg" }) {
  const big = size === "lg";
  return (
    <Link href="/" className="flex items-center gap-3 text-on-dark" aria-label="Global Developers home">
      <svg viewBox="0 0 40 40" aria-hidden="true" className={big ? "h-12 w-12 text-gold" : "h-9 w-9 text-gold"} fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M4 36h32" />
        <path d="M9 36V18h5v18M17 36V8h6v28M26 36V14h5v22" />
        <path d="M20 4v4" />
      </svg>
      <span className={`font-serif leading-[0.9] tracking-[0.08em] uppercase ${big ? "text-2xl" : "text-[15px]"}`}>
        Global<br />Developers
      </span>
    </Link>
  );
}
