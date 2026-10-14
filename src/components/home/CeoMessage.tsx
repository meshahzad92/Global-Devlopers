import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHead } from "@/components/shared/PageHero";
import { ceo } from "@/data/leadership";

export function CeoMessage() {
  return (
    <section className="bg-ivory py-20">
      <div className="container-gd grid items-center gap-10 lg:grid-cols-[0.9fr_1.2fr_0.9fr]">
        <Image src={ceo.portrait} alt={`${ceo.name}, ${ceo.role}`} width={1122} height={1402} sizes="(min-width: 1024px) 30vw, 100vw" className="aspect-[4/5] w-full rounded-sm object-cover shadow-lg" />
        <div>
          <SectionHead eyebrow="CEO Message" title="A Vision for Lasting Impact." />
          {ceo.message?.map((m) => (
            <p key={m.slice(0, 24)} className="mt-5 text-sm leading-relaxed text-muted-foreground">{m}</p>
          ))}
          {ceo.signature ? (
            <Image src={ceo.signature} alt={`${ceo.name} signature`} width={200} height={60} className="mt-6 h-12 w-auto" />
          ) : (
            <p aria-hidden="true" className="mt-6 font-serif text-4xl italic text-forest">{ceo.name}</p>
          )}
          <p className="mt-2 text-sm font-semibold">{ceo.name}</p>
          <p className="text-xs text-muted-foreground">{ceo.role}</p>
        </div>
        <div className="rounded-sm border bg-card p-8 shadow-sm">
          <Quote className="size-10 fill-gold text-gold" aria-hidden="true" />
          <p className="mt-4 font-serif text-xl italic leading-snug">&ldquo;{ceo.quote}&rdquo;</p>
          <Button asChild variant="outline" size="sm" className="mt-6">
            <Link href="/leadership">Meet Our Leadership <ArrowRight /></Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
