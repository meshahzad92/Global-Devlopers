import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/shared/Reveal";
import { ceo } from "@/data/leadership";

export function CeoMessage() {
  return (
    <section className="py-16 md:py-20">
      <div className="container-gd grid items-center gap-10 md:grid-cols-[0.8fr_1.2fr] lg:grid-cols-[0.75fr_1.15fr_1fr] lg:gap-12">
        <Reveal className="relative aspect-[4/5] overflow-hidden rounded-sm shadow-lg">
          <Image src={ceo.portrait} alt={`Portrait of ${ceo.name}`} fill sizes="(min-width: 1024px) 25vw, (min-width: 768px) 40vw, 100vw" className="object-cover" />
        </Reveal>
        <Reveal delay={0.08}>
          <p className="eyebrow">CEO Message</p>
          <h2 className="mt-3 text-3xl leading-tight md:text-[2.4rem]">
            A Vision for
            <br />
            Lasting Impact.
          </h2>
          {ceo.message?.map((m) => (
            <p key={m.slice(0, 24)} className="mt-5 text-sm leading-relaxed text-muted-foreground">{m}</p>
          ))}
          {ceo.signature ? (
            <Image src={ceo.signature} alt={`${ceo.name} signature`} width={180} height={60} className="mt-6 h-12 w-auto" />
          ) : (
            <p aria-hidden="true" className="mt-6 font-serif text-3xl italic text-forest/70">{ceo.name.split(" ")[0]}</p>
          )}
          <p className="mt-2 text-sm font-semibold text-foreground">{ceo.name}</p>
          <p className="text-xs text-muted-foreground">{ceo.role}</p>
        </Reveal>
        <Reveal delay={0.16} className="md:col-span-2 lg:col-span-1">
          <figure className="rounded-sm border bg-card p-8 shadow-sm">
            <span aria-hidden="true" className="block font-serif text-6xl leading-none text-gold">&ldquo;</span>
            <blockquote className="mt-2 font-serif text-xl italic leading-relaxed text-foreground/85">&ldquo;{ceo.quote}&rdquo;</blockquote>
            <div className="mt-7">
              <Button asChild variant="outline">
                <Link href="/leadership">Meet Our Leadership <ArrowRight /></Link>
              </Button>
            </div>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
