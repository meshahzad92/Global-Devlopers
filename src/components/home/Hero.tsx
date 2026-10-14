import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { images } from "@/data/images";

export function Hero() {
  return (
    <section className="relative isolate flex min-h-[540px] items-center overflow-hidden bg-forest-deep md:min-h-[600px] lg:min-h-[620px]">
      <Image src={images.hero} alt="Modern glass commercial building at golden hour" fill priority sizes="100vw" className="-z-10 object-cover object-[70%_center]" />
      <div className="hero-overlay absolute inset-0 -z-10" />
      <div className="container-gd fade-up py-20">
        <p className="eyebrow">Global Developers</p>
        <h1 className="mt-5 text-[2.6rem] leading-[1.08] text-on-dark sm:text-6xl lg:text-[4.4rem]">
          Building Landmarks.
          <br />
          <span className="text-gold">Creating Legacies.</span>
        </h1>
        <p className="mt-6 max-w-md text-[15px] leading-relaxed text-on-dark/85">
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
        <a href="#who-we-are" className="mt-14 inline-flex items-center gap-3 text-xs text-on-dark/70 transition-colors hover:text-gold">
          <ArrowDown className="size-5 animate-bounce [animation-duration:2.2s]" aria-hidden="true" />
          Scroll to discover
        </a>
      </div>
    </section>
  );
}
