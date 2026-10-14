import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHead } from "@/components/shared/PageHero";
import { images } from "@/data/images";
import { updates } from "@/data/updates";
import { formatDate } from "@/lib/utils";

const thumbs = [images.projects.tower, images.projects.residences, images.projects.trade];

export function ConstructionProgress() {
  const latest = updates[0];
  if (!latest) return null;
  return (
    <section className="bg-forest py-20">
      <div className="container-gd">
        <div className="flex items-end justify-between gap-4">
          <SectionHead light eyebrow="Construction Progress" title="Real Progress. Real Results." />
          <Link href="/updates" className="hidden items-center gap-2 text-xs font-semibold text-on-dark hover:text-gold sm:flex">
            View All Updates <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-[1.6fr_0.6fr_1fr]">
          <div className="relative min-h-72">
            <Image src={latest.coverImage} alt={`Construction of ${latest.title}`} fill sizes="(min-width: 1024px) 50vw, 100vw" className="rounded-sm object-cover" />
            <div className="absolute bottom-4 left-4 right-4 max-w-sm rounded-sm bg-card p-4 shadow-xl">
              <div className="flex justify-between text-xs">
                <span className="font-semibold">{latest.title}</span>
                <time dateTime={latest.date} className="text-muted-foreground">{formatDate(latest.date)}</time>
              </div>
              <p className="mt-1 text-[11px] font-semibold text-muted-foreground">Latest Update</p>
              <div className="mt-1 flex items-center justify-between text-xs">
                {latest.milestone ?? latest.description}
                <Link href="/updates" aria-label="Read update" className="grid size-7 place-items-center rounded-full bg-forest text-on-dark">
                  <ArrowRight className="size-3.5" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-3 lg:grid-cols-1">
            {thumbs.map((src) => (
              <div key={src} className="relative aspect-[4/3] h-full w-full">
                <Image src={src} alt="Site progress" fill sizes="(min-width: 1024px) 15vw, 33vw" className="rounded-sm object-cover" />
              </div>
            ))}
          </div>
          <div className="flex flex-col justify-center lg:pl-6">
            <p className="eyebrow">Tracking Our Journey</p>
            <h3 className="mt-3 text-3xl text-on-dark md:text-4xl">
              From Vision
              <br />
              to Reality.
            </h3>
            <p className="mt-4 text-sm text-on-dark/80">Stay updated with the latest construction milestones and see our projects take shape in real time.</p>
            <Button asChild variant="gold" className="mt-7 self-start">
              <Link href="/updates">View Construction Updates <ArrowRight /></Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
