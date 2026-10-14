"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";
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

const arrow =
  "grid size-9 place-items-center rounded-full border border-border bg-card text-foreground transition-colors hover:border-gold hover:text-gold";

export function TestimonialCarousel({ items, heading }: { items: Testimonial[]; heading: ReactNode }) {
  const perView = usePerView();
  const [index, setIndex] = useState(0);
  const max = Math.max(0, items.length - perView);
  const current = Math.min(index, max);
  const canSlide = max > 0;

  const go = (dir: -1 | 1) =>
    setIndex((i) => {
      const n = Math.min(i, max) + dir;
      return n < 0 ? max : n > max ? 0 : n;
    });

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label="Testimonials"
      onKeyDown={(e) => {
        if (!canSlide) return;
        if (e.key === "ArrowLeft") go(-1);
        if (e.key === "ArrowRight") go(1);
      }}
    >
      <div className="flex flex-wrap items-end justify-between gap-4">
        {heading}
        <div className="flex gap-3">
          <button type="button" onClick={() => go(-1)} aria-label="Previous testimonials" className={arrow}>
            <ChevronLeft className="size-4" />
          </button>
          <button type="button" onClick={() => go(1)} aria-label="Next testimonials" className={arrow}>
            <ChevronRight className="size-4" />
          </button>
        </div>
      </div>
      <div className="-mx-3 mt-10 overflow-hidden">
        <ul className="flex transition-transform duration-500 ease-out" style={{ transform: `translateX(-${(current * 100) / perView}%)` }}>
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
    </div>
  );
}
