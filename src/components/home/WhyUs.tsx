import { ClipboardCheck, HardHat, Leaf, MapPin } from "lucide-react";
import { SectionHead } from "@/components/shared/PageHero";

const pillars = [
  { icon: MapPin, title: "Prime Locations", text: "Strategic locations with long-term value." },
  { icon: HardHat, title: "Quality Construction", text: "World-class design and building standards." },
  { icon: ClipboardCheck, title: "Transparent Process", text: "Honest communication at every stage." },
  { icon: Leaf, title: "Sustainable Growth", text: "Creating greener, healthier communities." },
];

export function WhyUs() {
  return (
    <section className="bg-ivory py-20">
      <div className="container-gd">
        <div className="grid gap-6 md:grid-cols-2 md:items-end">
          <SectionHead eyebrow="Why Global Developers" title="Built on Trust. Driven by Excellence." />
          <p className="text-sm leading-relaxed text-muted-foreground">
            We combine vision, expertise, and integrity to deliver developments that stand the test of time. Our commitment goes beyond construction — we create spaces where people live, work, and thrive.
          </p>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p) => (
            <div key={p.title} className="flex gap-4 rounded-sm border bg-card p-5 transition-shadow hover:shadow-lg">
              <span className="grid size-10 shrink-0 place-items-center rounded-sm bg-gold-soft/50 text-gold">
                <p.icon className="size-5" aria-hidden="true" />
              </span>
              <div>
                <h3 className="font-sans text-sm font-semibold">{p.title}</h3>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{p.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
