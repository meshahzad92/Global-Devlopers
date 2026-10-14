import Image from "next/image";
import type { Testimonial } from "@/types";

export function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <figure className="flex h-full gap-5 rounded-sm border bg-card p-6 shadow-sm">
      {t.portrait && (
        <Image src={t.portrait} alt={t.name} width={64} height={64} className="size-16 shrink-0 rounded-full object-cover" />
      )}
      <div>
        <span aria-hidden="true" className="block font-serif text-4xl leading-none text-gold">&ldquo;</span>
        <blockquote className="mt-1 text-[13px] leading-relaxed text-muted-foreground">&ldquo;{t.quote}&rdquo;</blockquote>
        <figcaption className="mt-4">
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
