import { SectionHead } from "@/components/shared/PageHero";
import { TestimonialCarousel } from "@/components/testimonials/TestimonialCarousel";
import { featuredTestimonials } from "@/data/testimonials";

export function Testimonials() {
  if (featuredTestimonials.length === 0) return null;
  return (
    <section className="border-t bg-ivory py-20">
      <div className="container-gd">
        <TestimonialCarousel items={featuredTestimonials} heading={<SectionHead eyebrow="Testimonials" title="Trusted by Visionaries" />} />
      </div>
    </section>
  );
}
