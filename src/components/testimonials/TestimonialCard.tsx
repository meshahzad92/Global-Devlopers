import Image from "next/image";
import { Quote } from "lucide-react";
import type { Testimonial } from "@/types";

const initials = (name: string) =>
  name
    .split(" ")
    .map((w) => w[0])
    .join("");

export function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <figure className="flex gap-4 rounded-sm border bg-card p-6 shadow-sm">
      {t.portrait ? (
        <Image src={t.portrait} alt={t.name} width={56} height={56} className="size-14 shrink-0 rounded-full object-cover" />
      ) : (
        <span aria-hidden="true" className="grid size-14 shrink-0 place-items-center rounded-full bg-forest font-serif text-lg text-gold">
          {initials(t.name)}
        </span>
      )}
      <div>
        <Quote className="size-6 fill-gold text-gold" aria-hidden="true" />
        <blockquote className="mt-2 text-sm leading-relaxed text-muted-foreground">&ldquo;{t.quote}&rdquo;</blockquote>
        <figcaption className="mt-4 text-sm font-semibold">
          {t.name}
          <span className="block text-xs font-normal text-muted-foreground">
            {t.designation}
            {t.organization ? `, ${t.organization}` : ""}
          </span>
        </figcaption>
      </div>
    </figure>
  );
}
