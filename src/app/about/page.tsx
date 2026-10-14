import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Eye, Gem, HeartHandshake, Lightbulb, ShieldCheck, Target, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero, SectionHead } from "@/components/shared/PageHero";
import { CtaBand } from "@/components/shared/CtaBand";
import { Reveal } from "@/components/shared/Reveal";
import { StatsStrip } from "@/components/home/StatsStrip";
import { companyBase, milestones, values } from "@/data/company";
import { ceo, team } from "@/data/leadership";
import { images } from "@/data/images";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "About Us",
  description: "Global Developers is a forward-thinking real estate development company creating exceptional residential and commercial spaces.",
  path: "/about",
});

const valueIcons = [ShieldCheck, Gem, Lightbulb, Users];

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About Us" title="Shaping Better Communities for a Brighter Tomorrow." image={images.about} />

      <section className="py-16 md:py-20">
        <div className="container-gd grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <SectionHead eyebrow="Who We Are" title="More Than Structures — Lasting Legacies" />
            <p className="mt-6 leading-relaxed text-muted-foreground">{companyBase.intro}</p>
            <h3 className="mt-10 text-2xl">Our Story</h3>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Global Developers was founded on a simple belief: that well-designed buildings make better lives possible. From our first residential community to landmark commercial towers, every project has been guided by quality, transparency, and respect for the communities around it.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="relative aspect-[4/3] overflow-hidden rounded-sm shadow-xl">
            <Image src={images.projects.residences} alt="Global Developers residential development" fill sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" />
          </Reveal>
        </div>
      </section>

      <StatsStrip />

      <section className="py-16 md:py-20">
        <div className="container-gd grid gap-6 md:grid-cols-2">
          {[
            { icon: Target, title: "Our Mission", text: companyBase.mission },
            { icon: Eye, title: "Our Vision", text: companyBase.vision },
          ].map((m, i) => (
            <Reveal key={m.title} delay={i * 0.08}>
              <div className="h-full rounded-sm border bg-card p-8 shadow-sm md:p-10">
                <m.icon className="size-9 text-gold" strokeWidth={1.3} aria-hidden="true" />
                <h2 className="mt-6 text-3xl">{m.title}</h2>
                <p className="mt-4 leading-relaxed text-muted-foreground">{m.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-forest-deep py-16 md:py-20">
        <div className="container-gd">
          <SectionHead light eyebrow="Core Values" title="What We Stand For" />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => {
              const Icon = valueIcons[i] ?? HeartHandshake;
              return (
                <Reveal key={v.title} delay={i * 0.06}>
                  <div className="h-full border border-on-dark/10 p-6">
                    <Icon className="size-8 text-gold" strokeWidth={1.3} aria-hidden="true" />
                    <h3 className="mt-5 text-xl text-on-dark">{v.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-on-dark-muted">{v.text}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container-gd">
          <SectionHead eyebrow="Our Journey" title="Company Milestones" />
          <ol className="mt-12 grid gap-8 md:grid-cols-4">
            {milestones.map((m) => (
              <li key={m.title} className="border-t-2 border-gold pt-6">
                <p className="eyebrow">{m.year}</p>
                <h3 className="mt-3 text-xl">{m.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{m.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-t border-border/70 py-16 md:py-20">
        <div className="container-gd grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal className="relative order-last aspect-[4/3] overflow-hidden rounded-sm shadow-xl lg:order-first">
            <Image src={images.interior} alt="Refined interior design" fill sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" />
          </Reveal>
          <Reveal delay={0.1}>
            <SectionHead eyebrow="Development Philosophy" title="Designed for People. Built to Last." />
            <p className="mt-6 leading-relaxed text-muted-foreground">
              We begin every project by understanding how people will live, work and move through a space. Our architects, engineers and planners then work together to create developments that balance beauty, function and long-term value — with honest communication at every stage.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-[#faf9f5] py-16 md:py-20">
        <div className="container-gd grid items-center gap-10 md:grid-cols-[0.6fr_1.4fr]">
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm shadow-lg">
            <Image src={ceo.portrait} alt={`Portrait of ${ceo.name}`} fill sizes="(min-width: 768px) 30vw, 100vw" className="object-cover" />
          </div>
          <div>
            <SectionHead eyebrow="Leadership" title="Guided by Experience" />
            <p className="mt-5 font-serif text-xl italic text-foreground/85">&ldquo;{ceo.quote}&rdquo;</p>
            <p className="mt-4 text-sm font-semibold">{ceo.name}</p>
            <p className="text-xs text-muted-foreground">{ceo.role}</p>
            {team.length > 0 && <p className="mt-4 text-sm text-muted-foreground">Supported by a leadership team of {team.length + 1} professionals across projects, finance and design.</p>}
            <Button asChild variant="outlineGold" className="mt-8">
              <Link href="/leadership">Meet Our Leadership <ArrowRight /></Link>
            </Button>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
