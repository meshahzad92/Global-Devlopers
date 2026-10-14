"use client";

import Image from "next/image";
import { useState } from "react";
import type { GalleryImage } from "@/types";
import { ImageLightbox } from "./Lightbox";

export function GalleryBrowser({ items }: { items: GalleryImage[] }) {
  const [index, setIndex] = useState<number | null>(null);
  return (
    <>
      <div className="container-gd columns-1 gap-4 sm:columns-2 lg:columns-3">
        {items.map((g, idx) => (
          <button key={`${g.src}-${idx}`} onClick={() => setIndex(idx)} className="mb-4 block w-full overflow-hidden rounded-sm" aria-label={`Open ${g.alt}`}>
            <Image src={g.src} alt={g.alt} width={g.width} height={g.height} sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" className="h-auto w-full transition-transform duration-700 hover:scale-105" />
          </button>
        ))}
      </div>
      <ImageLightbox slides={items} index={index} onChange={setIndex} />
    </>
  );
}
