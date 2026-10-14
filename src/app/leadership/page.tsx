import Image from "next/image";
import { Award } from "lucide-react";
import { PageHero, SectionHead } from "@/components/shared/PageHero";
import { CtaBand } from "@/components/shared/CtaBand";
import { Reveal } from "@/components/shared/Reveal";
import { ceo, team } from "@/data/leadership";
import { images } from "@/data/images";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Leadership",
  description: "Meet the leadership team guiding Global Developers.",
  path: "/leadership",
});

export default function LeadershipPage() {
  return (
    <>
      <PageHero eyebrow="Leadership" title="A Vision for Lasting Impact." text="The people guiding Global Developers' commitment to quality, integrity and community." image={images.pageLeadership} />

      <section className="py-16 md:py-20">
        <div className="container-gd grid gap-12 md:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <Reveal>
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm shadow-xl">
              <Image src={ceo.portrait} alt={`Portrait of ${ceo.name}`} fill priority sizes="(min-width: 768px) 40vw, 100vw" className="object-cover" />
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="eyebrow">{ceo.role}</p>
            <h2 className="mt-3 text-4xl md:text-5xl">{ceo.name}</h2>
            {ceo.bio.map((b) => <p key={b.slice(0, 24)} className="mt-5 leading-relaxed text-muted-foreground">{b}</p>)}
            {ceo.message && (
              <>
                <h3 className="mt-10 text-2xl">A Personal Message</h3>
                {ceo.message.map((m) => <p key={m.slice(0, 24)} className="mt-4 leading-relaxed text-muted-foreground">{m}</p>)}
              </>
            )}
            {ceo.quote && (
              <figure className="mt-8 border-l-2 border-gold pl-6">
                <blockquote className="font-serif text-xl italic leading-relaxed text-foreground/85">&ldquo;{ceo.quote}&rdquo;</blockquote>
              </figure>
            )}
          </Reveal>
        </div>
      </section>

      {(ceo.vision || ceo.achievements?.length) && (
        <section className="bg-forest-deep py-16 md:py-20">
          <div className="container-gd grid gap-12 lg:grid-cols-2">
            {ceo.vision && (
              <div>
                <SectionHead light eyebrow="Vision" title="Our Vision for the Company" />
                <p className="mt-6 leading-relaxed text-on-dark/80">{ceo.vision}</p>
              </div>
            )}
            {ceo.achievements && ceo.achievements.length > 0 && (
              <div>
                <SectionHead light eyebrow="Achievements" title="Professional Highlights" />
                <ul className="mt-6 space-y-4">
                  {ceo.achievements.map((a) => (
                    <li key={a} className="flex gap-4 text-on-dark/85"><Award className="mt-0.5 size-5 shrink-0 text-gold" aria-hidden="true" />{a}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </section>
      )}

      {team.length > 0 && (
        <section className="py-16 md:py-20">
          <div className="container-gd">
            <SectionHead eyebrow="Our Team" title="Leadership Team" />
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {team.map((m) => (
                <article key={m.id} className="overflow-hidden rounded-sm border bg-card shadow-sm">
                  <div className="relative aspect-[4/5]"><Image src={m.portrait} alt={`Portrait of ${m.name}`} fill sizes="(min-width: 1024px) 33vw, 50vw" className="object-cover" /></div>
                  <div className="p-5">
                    <h3 className="text-xl">{m.name}</h3>
                    <p className="text-xs uppercase tracking-wider text-gold">{m.role}</p>
                    <p className="mt-3 text-sm text-muted-foreground">{m.bio[0]}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaBand />
    </>
  );
}
