import Image from "next/image";
import { PageHero, SectionHead } from "@/components/shared/PageHero";
import { CtaBand } from "@/components/shared/CtaBand";
import { values } from "@/data/company";
import { images } from "@/data/images";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "About Us",
  description: "Learn about Global Developers, our mission, values and more than a decade of real estate excellence.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHero image={images.hero} eyebrow="About Us" title="More Than a Decade of Building Excellence" text="We create residential and commercial spaces that add lasting value to cities and communities." />
      <section className="bg-ivory py-20">
        <div className="container-gd grid items-center gap-12 md:grid-cols-2">
          <Image src={images.about} alt="Global Developers building" width={1280} height={896} sizes="(min-width: 768px) 45vw, 100vw" className="aspect-[4/3] w-full rounded-sm object-cover shadow-xl" />
          <div>
            <SectionHead eyebrow="Our Story" title="Shaping Better Communities" />
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              Founded with a vision to raise the standard of real estate development, Global Developers has grown into a trusted name delivering landmark projects in Sahiwal.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Our mission is to build developments of enduring quality — places where families flourish and businesses grow.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-cream py-20">
        <div className="container-gd">
          <SectionHead eyebrow="Our Values" title="What Guides Us" />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div key={v.title} className="rounded-sm border-t-2 border-gold bg-card p-6 shadow-sm">
                <h3 className="text-2xl">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
