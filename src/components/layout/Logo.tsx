import Image from "next/image";
import Link from "next/link";
import { images } from "@/data/images";

export function Logo({ size = "sm" }: { size?: "sm" | "lg" }) {
  const big = size === "lg";
  return (
    <Link href="/" className="flex items-center gap-3 text-on-dark" aria-label="Global Developers home">
      <Image src={images.logo} alt="" width={409} height={384} priority={!big} className={big ? "h-14 w-auto" : "h-10 w-auto"} />
      <span className={`font-serif leading-[0.9] tracking-[0.08em] uppercase ${big ? "text-2xl" : "text-[15px]"}`}>
        Global<br />Developers
      </span>
    </Link>
  );
}
