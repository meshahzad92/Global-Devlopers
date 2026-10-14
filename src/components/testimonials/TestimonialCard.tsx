import Image from "next/image";
import { Quote } from "lucide-react";
import type { Testimonial } from "@/types";

const initials = (name: string) =>
  name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

export function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <figure className="flex h-full gap-4 rounded-sm border bg-card p-6 shadow-sm">
      {t.portrait ? (
        <Image src={t.portrait} alt={t.name} width={56} height={56} className="size-14 shrink-0 rounded-full object-cover" />
      ) : (
        <span aria-hidden="true" className="grid size-14 shrink-0 place-items-center rounded-full bg-forest-deep font-serif text-lg text-gold">
          {initials(t.name)}
        </span>
      )}
      <div>
        <Quote className="size-6 rotate-180 fill-gold text-gold" aria-hidden="true" />
        <blockquote className="mt-3 text-sm leading-relaxed text-foreground/80">&ldquo;{t.quote}&rdquo;</blockquote>
        <figcaption className="mt-5">
          <p className="text-sm font-semibold text-foreground">{t.name}</p>
          <p className="text-xs text-muted-foreground">
            {t.designation}
            {t.organization ? `, ${t.organization}` : ""}
          </p>
        </figcaption>
      </div>
    </figure>
  );
}
