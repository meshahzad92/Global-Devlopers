import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { images } from "@/data/images";

export function Hero() {
  return (
    <section className="relative isolate min-h-[620px] overflow-hidden bg-forest-deep lg:h-[min(85vh,760px)]">
      <Image src={images.hero} alt="Global Developers luxury tower at sunset" fill priority sizes="100vw" className="-z-10 object-cover object-[70%_center]" />
      <div className="hero-overlay absolute inset-0 -z-10" />
      <div className="container-gd fade-up flex min-h-[620px] flex-col justify-center py-20 lg:h-[min(85vh,760px)]">
        <p className="eyebrow">Global Developers</p>
        <h1 className="mt-5 text-5xl leading-[1.02] text-on-dark md:text-7xl">
          Building Landmarks.
          <br />
          <span className="text-gold">Creating Legacies.</span>
        </h1>
        <p className="mt-6 max-w-md text-on-dark/85">
          Thoughtfully designed residential and commercial developments, built with a commitment to quality, innovation, and enduring value.
        </p>
        <div className="mt-9 flex flex-wrap gap-4">
          <Button asChild variant="gold">
            <Link href="/projects">Explore Our Projects <ArrowRight /></Link>
          </Button>
          <Button asChild variant="outlineLight">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
        <a href="#who" className="mt-16 flex items-center gap-3 self-start text-xs text-on-dark/80 hover:text-gold">
          <ArrowDown className="size-5" aria-hidden="true" /> Scroll to discover
        </a>
      </div>
    </section>
  );
}
