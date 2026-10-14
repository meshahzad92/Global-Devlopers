"use client";

import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";

export type Slide = { src: string; alt: string; title?: string };

/** Accessible full-screen lightbox: arrows, Escape and keyboard navigation are built in. */
export function ImageLightbox({ slides, index, onClose }: { slides: Slide[]; index: number; onClose: () => void }) {
  return (
    <Lightbox
      open={index >= 0}
      index={Math.max(index, 0)}
      close={onClose}
      slides={slides}
      plugins={[Captions]}
      controller={{ closeOnBackdropClick: true }}
    />
  );
}
