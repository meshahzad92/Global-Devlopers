"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useEffect } from "react";

export type Slide = { src: string; alt: string };

/** Full-screen image viewer: Escape closes, arrow keys / buttons navigate, backdrop click closes. */
export function ImageLightbox({ slides, index, onChange }: { slides: Slide[]; index: number | null; onChange: (i: number | null) => void }) {
  const n = slides.length;
  useEffect(() => {
    if (index === null) return;
    const h = (e: KeyboardEvent) => {
      if (e.key === "Escape") onChange(null);
      if (e.key === "ArrowRight") onChange((index + 1) % n);
      if (e.key === "ArrowLeft") onChange((index - 1 + n) % n);
    };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [index, n, onChange]);

  if (index === null) return null;
  const slide = slides[index];
  if (!slide) return null;
  return (
    <div role="dialog" aria-modal="true" aria-label={slide.alt} className="fixed inset-0 z-[60] grid place-items-center bg-forest-deep/95 p-4" onClick={() => onChange(null)}>
      <Image src={slide.src} alt={slide.alt} width={1920} height={1280} sizes="100vw" className="h-auto max-h-[85vh] w-auto max-w-full rounded-sm" onClick={(e) => e.stopPropagation()} />
      <button aria-label="Close" autoFocus onClick={() => onChange(null)} className="absolute right-4 top-4 text-on-dark">
        <X />
      </button>
      <button aria-label="Previous" onClick={(e) => { e.stopPropagation(); onChange((index - 1 + n) % n); }} className="absolute left-4 text-on-dark">
        <ChevronLeft className="size-8" />
      </button>
      <button aria-label="Next" onClick={(e) => { e.stopPropagation(); onChange((index + 1) % n); }} className="absolute right-4 text-on-dark">
        <ChevronRight className="size-8" />
      </button>
    </div>
  );
}
