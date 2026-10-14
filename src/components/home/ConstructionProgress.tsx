import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/shared/Reveal";
import { updates } from "@/data/updates";
import { formatDate } from "@/lib/utils";

export function ConstructionProgress() {
  const latest = updates.find((u) => u.category === "Construction Progress") ?? updates[0];
  if (!latest) return null;
  const thumbs = [...new Set(updates.flatMap((u) => u.images))].filter((src) => src !== latest.coverImage).slice(0, 3);

  return (
    <section className="bg-forest-deep py-16 md:py-20">
      <div className="container-gd">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow">Construction Progress</p>
            <h2 className="mt-3 text-3xl text-on-dark md:text-[2.6rem]">Real Progress. Real Results.</h2>
          </div>
          <Link href="/updates" className="group inline-flex items-center gap-2 text-sm font-medium text-on-dark hover:text-gold">
            View All Updates <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </Link>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-[1.55fr_0.8fr_1fr] lg:gap-6">
          <Reveal className="relative min-h-[320px] overflow-hidden rounded-sm lg:min-h-[400px]">
            <Image src={latest.coverImage} alt={`${latest.title} construction progress`} fill sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" />
            <div className="absolute bottom-5 left-5 right-5 max-w-sm rounded-sm bg-card p-5 shadow-xl">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold text-foreground">{latest.title}</p>
                  <p className="mt-1 text-xs font-medium text-foreground/80">Latest Update</p>
                </div>
                <time dateTime={latest.date} className="shrink-0 text-xs text-muted-foreground">{formatDate(latest.date)}</time>
              </div>
              <div className="mt-3 flex items-center justify-between gap-4">
                <p className="text-sm text-muted-foreground">{latest.milestone ?? latest.description}</p>
                <Link href={latest.projectSlug ? `/projects/${latest.projectSlug}` : "/updates"} aria-label={`Open ${latest.title} update`} className="grid size-8 shrink-0 place-items-center rounded-full bg-forest-deep text-on-dark transition-colors hover:bg-gold hover:text-forest-deep">
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </Reveal>

          <div className="grid grid-cols-3 gap-3 lg:grid-cols-1 lg:grid-rows-3">
            {thumbs.map((src, i) => (
              <Reveal key={src} delay={i * 0.08} className="relative aspect-[4/3] overflow-hidden rounded-sm lg:aspect-auto">
                <Image src={src} alt="Construction site progress photograph" fill sizes="(min-width: 1024px) 20vw, 33vw" className="object-cover transition-transform duration-700 hover:scale-105" />
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.15} className="flex flex-col justify-center lg:pl-6">
            <p className="eyebrow">Tracking Our Journey</p>
            <h3 className="mt-3 text-3xl leading-tight text-on-dark md:text-[2.1rem]">
              From Vision
              <br />
              to Reality.
            </h3>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-on-dark/80">
              Stay updated with the latest construction milestones and see our projects take shape in real time.
            </p>
            <div className="mt-7">
              <Button asChild variant="gold">
                <Link href="/updates">View Construction Updates <ArrowRight /></Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
