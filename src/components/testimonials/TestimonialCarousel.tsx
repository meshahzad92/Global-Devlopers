"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, type ReactNode } from "react";
import type { Testimonial } from "@/types";
import { TestimonialCard } from "./TestimonialCard";

/** Rotates the order of testimonials with the arrow buttons (same behaviour as the approved design). */
export function TestimonialCarousel({ items, heading }: { items: Testimonial[]; heading: ReactNode }) {
  const [start, setStart] = useState(0);
  const n = items.length;
  const ordered = items.map((_, i) => items[(start + i) % n]!).slice(0, 3);
  return (
    <div role="region" aria-roledescription="carousel" aria-label="Testimonials">
      <div className="flex items-end justify-between gap-4">
        {heading}
        <div className="flex gap-2">
          <button type="button" onClick={() => setStart((start - 1 + n) % n)} aria-label="Previous" className="grid size-9 place-items-center rounded-full border hover:border-gold hover:text-gold">
            <ChevronLeft className="size-4" />
          </button>
          <button type="button" onClick={() => setStart((start + 1) % n)} aria-label="Next" className="grid size-9 place-items-center rounded-full border hover:border-gold hover:text-gold">
            <ChevronRight className="size-4" />
          </button>
        </div>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-3" aria-live="polite">
        {ordered.map((t) => (
          <TestimonialCard key={t.id} t={t} />
        ))}
      </div>
    </div>
  );
}
