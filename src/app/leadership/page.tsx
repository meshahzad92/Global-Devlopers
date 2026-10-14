import Image from "next/image";
import { Quote } from "lucide-react";
import { PageHero, SectionHead } from "@/components/shared/PageHero";
import { ceo, team } from "@/data/leadership";
import { images } from "@/data/images";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Leadership",
  description: "Meet the CEO and the leadership team behind Global Developers.",
  path: "/leadership",
});

const initials = (name: string) => name.split(" ").map((w) => w[0]).join("");

export default function LeadershipPage() {
  const members = [ceo, ...team];
  return (
    <>
      <PageHero image={images.interior} eyebrow="Leadership" title="The People Behind Our Vision" />
      <section className="bg-ivory py-20">
        <div className="container-gd grid items-center gap-12 md:grid-cols-[0.9fr_1.3fr]">
          <Image src={ceo.portrait} alt={ceo.name} width={896} height={1024} sizes="(min-width: 768px) 40vw, 100vw" className="aspect-[4/5] w-full rounded-sm object-cover shadow-xl" />
          <div>
            <SectionHead eyebrow="CEO Message" title="A Vision for Lasting Impact." />
            <Quote className="mt-6 size-10 fill-gold text-gold" aria-hidden="true" />
            <p className="mt-3 font-serif text-2xl italic leading-snug">&ldquo;{ceo.quote}&rdquo;</p>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">{ceo.leadershipMessage ?? ceo.message?.[0]}</p>
            <p className="mt-6 font-semibold">{ceo.name}</p>
            <p className="text-sm text-muted-foreground">{ceo.role}</p>
          </div>
        </div>
      </section>
      {team.length > 0 && (
        <section className="bg-cream py-20">
          <div className="container-gd">
            <SectionHead eyebrow="Our Team" title="Leadership Team" />
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {members.map((m) => (
                <div key={m.id} className="rounded-sm border bg-card p-6 shadow-sm">
                  <span aria-hidden="true" className="grid size-16 place-items-center rounded-full bg-forest font-serif text-xl text-gold">{initials(m.name)}</span>
                  <h3 className="mt-5 text-2xl">{m.name}</h3>
                  <p className="text-xs font-semibold uppercase tracking-wider text-gold">{m.role}</p>
                  <p className="mt-3 text-sm text-muted-foreground">{m.bio[0]}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
