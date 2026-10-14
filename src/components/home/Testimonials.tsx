import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHead } from "@/components/shared/PageHero";
import { TestimonialCarousel } from "@/components/testimonials/TestimonialCarousel";
import { featuredTestimonials } from "@/data/testimonials";

export function Testimonials() {
  if (featuredTestimonials.length === 0) return null;
  return (
    <section className="border-t border-border/70 bg-[#faf9f5] py-16 md:py-20">
      <div className="container-gd">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHead eyebrow="Testimonials" title="Trusted by Visionaries" />
          <Link href="/testimonials" className="group inline-flex items-center gap-2 text-sm font-medium text-forest hover:text-gold-deep">
            View All Testimonials <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </Link>
        </div>
        <div className="-mx-3 mt-10">
          <TestimonialCarousel items={featuredTestimonials} />
        </div>
      </div>
    </section>
  );
}
