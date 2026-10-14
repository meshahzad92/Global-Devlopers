import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Building2 } from "lucide-react";
import { SectionHead } from "@/components/shared/PageHero";
import { companyBase } from "@/data/company";
import { images } from "@/data/images";

export function WhoWeAre() {
  return (
    <section id="who" className="scroll-mt-16 bg-ivory py-20">
      <div className="container-gd grid items-center gap-12 md:grid-cols-2">
        <div>
          <SectionHead eyebrow="Who We Are" title="Shaping Better Communities for a Brighter Tomorrow." />
          <p className="mt-6 max-w-lg text-sm leading-relaxed text-muted-foreground">{companyBase.intro}</p>
          <Link href="/about" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-forest hover:text-gold">
            Learn More About Us <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
        <div className="relative md:pl-16">
          <Image src={images.about} alt="Global Developers building entrance" width={1280} height={896} sizes="(min-width: 768px) 45vw, 100vw" className="aspect-[4/3] w-full rounded-sm object-cover shadow-xl" />
          <div className="absolute -bottom-6 left-4 w-44 border border-gold bg-forest p-5 text-on-dark shadow-2xl md:bottom-auto md:left-0 md:top-1/2 md:-translate-y-1/2">
            <Building2 className="size-8 text-gold" aria-hidden="true" />
            <p className="mt-4 text-sm leading-snug">More Than<br />A Decade<br />of Excellence</p>
          </div>
        </div>
      </div>
    </section>
  );
}
