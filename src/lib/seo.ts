import type { Metadata } from "next";
import { images } from "@/data/images";

export function pageMetadata({ title, description, path, image = images.og }: { title: string; description: string; path: string; image?: string }): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { title, description, url: path, images: [{ url: image }] },
    twitter: { card: "summary_large_image", title, description, images: [image] },
  };
}
