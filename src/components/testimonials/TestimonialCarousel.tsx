"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import type { Testimonial } from "@/types";
import { TestimonialCard } from "./TestimonialCard";

function usePerView() {
  const [perView, setPerView] = useState(3);
  useEffect(() => {
    const md = window.matchMedia("(min-width: 768px)");
    const lg = window.matchMedia("(min-width: 1024px)");
    const update = () => setPerView(lg.matches ? 3 : md.matches ? 2 : 1);
    update();
    md.addEventListener("change", update);
    lg.addEventListener("change", update);
    return () => {
      md.removeEventListener("change", update);
      lg.removeEventListener("change", update);
    };
  }, []);
  return perView;
}

export function TestimonialCarousel({ items }: { items: Testimonial[] }) {
  const perView = usePerView();
  const [index, setIndex] = useState(0);
  const max = Math.max(0, items.length - perView);
  const current = Math.min(index, max);
  const controls = items.length > perView;

  const go = (dir: -1 | 1) => setIndex((i) => {
    const n = Math.min(i, max) + dir;
    return n < 0 ? max : n > max ? 0 : n;
  });

  return (
    <div
      className="relative"
      role="region"
      aria-roledescription="carousel"
      aria-label="Testimonials"
      onKeyDown={(e) => {
        if (!controls) return;
        if (e.key === "ArrowLeft") go(-1);
        if (e.key === "ArrowRight") go(1);
      }}
    >
      <div className="overflow-hidden">
        <ul
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${(current * 100) / perView}%)` }}
        >
          {items.map((t, i) => (
            <li
              key={t.id}
              className="shrink-0 px-3"
              style={{ width: `${100 / perView}%` }}
              aria-hidden={i < current || i >= current + perView}
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${items.length}`}
            >
              <TestimonialCard t={t} />
            </li>
          ))}
        </ul>
      </div>
      {controls && (
        <>
          <button onClick={() => go(-1)} aria-label="Previous testimonials" className="absolute left-0 top-1/2 grid size-9 -translate-y-1/2 place-items-center rounded-full border bg-card text-forest shadow-sm transition-colors hover:bg-gold xl:-left-12">
            <ChevronLeft className="size-4" />
          </button>
          <button onClick={() => go(1)} aria-label="Next testimonials" className="absolute right-0 top-1/2 grid size-9 -translate-y-1/2 place-items-center rounded-full border bg-card text-forest shadow-sm transition-colors hover:bg-gold xl:-right-12">
            <ChevronRight className="size-4" />
          </button>
        </>
      )}
    </div>
  );
}
