"use client";

import Image from "next/image";
import { useState } from "react";
import { ImageLightbox, type Slide } from "./Lightbox";
import { cn } from "@/lib/utils";

/** Thumbnail grid that opens the full-screen viewer (used on project pages). */
export function ImageGrid({ slides, className }: { slides: Slide[]; className?: string }) {
  const [index, setIndex] = useState<number | null>(null);
  return (
    <>
      <ul className={cn("grid grid-cols-2 gap-3 md:grid-cols-3", className)}>
        {slides.map((s, i) => (
          <li key={`${s.src}-${i}`} className={cn(i === 0 && slides.length === 3 && "col-span-2 row-span-2")}>
            <button onClick={() => setIndex(i)} className="group relative block aspect-[4/3] h-full w-full overflow-hidden rounded-sm" aria-label={`Open ${s.alt}`}>
              <Image src={s.src} alt={s.alt} fill sizes="(min-width: 768px) 33vw, 50vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
            </button>
          </li>
        ))}
      </ul>
      <ImageLightbox slides={slides} index={index} onChange={setIndex} />
    </>
  );
}
