import { PageHero, SectionHead } from "@/components/shared/PageHero";
import { CtaBand } from "@/components/shared/CtaBand";
import { TestimonialCard } from "@/components/testimonials/TestimonialCard";
import { testimonials } from "@/data/testimonials";
import { images } from "@/data/images";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Testimonials",
  description: "What clients, investors and partners say about Global Developers.",
  path: "/testimonials",
});

const groups = [
  { kind: "Client", title: "Clients & Homeowners" },
  { kind: "Investor", title: "Investors" },
  { kind: "Partner", title: "Business Partners" },
  { kind: "Industry", title: "Industry Endorsements" },
] as const;

export default function TestimonialsPage() {
  return (
    <>
      <PageHero eyebrow="Testimonials" title="Trusted by Visionaries" text="Words from the people and partners who have experienced our work first-hand." image={images.about} />
      <section className="py-16 md:py-20">
        <div className="container-gd space-y-16">
          {testimonials.length === 0 ? (
            <div className="rounded-sm border bg-card p-12 text-center">
              <p className="font-serif text-2xl">Testimonials coming soon.</p>
              <p className="mt-2 text-sm text-muted-foreground">We only publish genuine, approved feedback from our clients and partners.</p>
            </div>
          ) : (
            groups.map((g) => {
              const items = testimonials.filter((t) => t.kind === g.kind);
              if (items.length === 0) return null;
              return (
                <div key={g.kind}>
                  <SectionHead eyebrow="Testimonials" title={g.title} />
                  <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {items.map((t) => <TestimonialCard key={t.id} t={t} />)}
                  </div>
                </div>
              );
            })
          )}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
