import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/shared/Reveal";
import { companyBase } from "@/data/company";
import { images } from "@/data/images";

export function WhoWeAre() {
  return (
    <section id="who-we-are" className="scroll-mt-16 py-16 md:py-20">
      <div className="container-gd grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <p className="eyebrow">Who We Are</p>
          <h2 className="mt-4 max-w-md text-4xl leading-[1.15] md:text-[2.75rem]">Shaping Better Communities for a Brighter Tomorrow.</h2>
          <p className="mt-6 max-w-lg text-[15px] leading-relaxed text-muted-foreground">{companyBase.intro}</p>
          <Link href="/about" className="group mt-8 inline-flex items-center gap-2 text-sm font-medium text-forest hover:text-gold-deep">
            Learn More About Us <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </Link>
        </Reveal>
        <Reveal delay={0.1} className="relative lg:pl-20">
          <div className="relative aspect-[4/3] overflow-hidden rounded-sm shadow-xl">
            <Image src={images.about} alt="Entrance of a modern premium development" fill sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" />
          </div>
          <div className="absolute -bottom-6 left-4 w-40 bg-forest-deep p-5 shadow-2xl ring-1 ring-gold/70 ring-offset-4 ring-offset-forest-deep sm:left-6 sm:w-44 lg:bottom-auto lg:left-0 lg:top-1/2 lg:-translate-y-1/2">
            <svg viewBox="0 0 40 40" aria-hidden="true" className="h-10 w-10 text-gold" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path d="M4 36h32" />
              <path d="M9 36V18h5v18M17 36V8h6v28M26 36V14h5v22" />
              <path d="M20 4v4" />
            </svg>
            <p className="mt-6 text-sm leading-snug text-on-dark">More Than<br />A Decade<br />of Excellence</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
