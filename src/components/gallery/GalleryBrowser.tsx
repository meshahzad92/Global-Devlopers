"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import type { GalleryImage } from "@/types";
import { galleryCategories } from "@/data/gallery";
import { ImageLightbox } from "./Lightbox";
import { FilterChips } from "@/components/shared/FilterChips";

export function GalleryBrowser({ items }: { items: GalleryImage[] }) {
  const [cat, setCat] = useState<(typeof galleryCategories)[number]>("All");
  const [index, setIndex] = useState(-1);
  const shown = useMemo(() => (cat === "All" ? items : items.filter((i) => i.category === cat)), [cat, items]);
  const slides = shown.map((s) => ({ src: s.src, alt: s.alt, title: s.caption }));

  return (
    <>
      <FilterChips label="Filter gallery by category" options={galleryCategories} value={cat} onChange={(v) => { setCat(v); setIndex(-1); }} />
      {shown.length === 0 ? (
        <p className="mt-12 text-center text-muted-foreground">No images in this category yet.</p>
      ) : (
        <ul className="mt-10 columns-1 gap-4 sm:columns-2 lg:columns-3">
          {shown.map((img, i) => (
            <li key={`${img.src}-${img.caption}`} className="mb-4 break-inside-avoid">
              <button onClick={() => setIndex(i)} className="group relative block w-full overflow-hidden rounded-sm text-left" aria-label={`Open image: ${img.caption}`}>
                <Image src={img.src} alt={img.alt} width={img.width} height={img.height} loading="lazy" sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" className="h-auto w-full transition-transform duration-700 group-hover:scale-105" />
                <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-forest-deep/85 to-transparent p-4 pt-10 text-sm text-on-dark">
                  <span className="block text-[10px] uppercase tracking-[0.2em] text-gold">{img.category}</span>
                  {img.caption}
                </span>
              </button>
            </li>
          ))}
        </ul>
      )}
      <ImageLightbox slides={slides} index={index} onClose={() => setIndex(-1)} />
    </>
  );
}
