import { FileCheck, HardHat, Leaf, MapPin } from "lucide-react";
import { Reveal } from "@/components/shared/Reveal";

const features = [
  { icon: MapPin, title: "Prime Locations", text: "Strategic locations with long-term value." },
  { icon: HardHat, title: "Quality Construction", text: "World-class design and building standards." },
  { icon: FileCheck, title: "Transparent Process", text: "Honest communication at every stage." },
  { icon: Leaf, title: "Sustainable Growth", text: "Creating greener, healthier communities." },
];

export function WhyUs() {
  return (
    <section className="border-t border-border/70 py-16 md:py-20">
      <div className="container-gd">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-end">
          <div>
            <p className="eyebrow">Why Global Developers</p>
            <h2 className="mt-3 text-3xl leading-tight md:text-[2.6rem]">
              Built on Trust.
              <br />
              Driven by Excellence.
            </h2>
          </div>
          <p className="max-w-xl text-[15px] leading-relaxed text-muted-foreground">
            We combine vision, expertise, and integrity to deliver developments that stand the test of time. Our commitment goes beyond construction — we create spaces where people live, work, and thrive.
          </p>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.06}>
              <div className="flex h-full items-start gap-4 rounded-sm border bg-card p-5 shadow-sm transition-shadow hover:shadow-lg">
                <span className="grid size-12 shrink-0 place-items-center rounded-sm bg-gold/15 text-gold-deep">
                  <f.icon className="size-6" strokeWidth={1.5} aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-sans text-sm font-semibold">{f.title}</h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{f.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
