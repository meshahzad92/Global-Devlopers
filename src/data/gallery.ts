import type { GalleryImage } from "@/types";
import { images } from "./images";
import { publicOnly } from "./config";

const all: GalleryImage[] = [
  { src: images.hero, alt: "Residential tower at sunset", caption: "Residential tower at sunset", category: "Residential", width: 1920, height: 1088, verified: false },
  { src: images.projects.residences, alt: "Global Residences exterior", caption: "Global Residences — Sahiwal", category: "Residential", projectSlug: "global-residences", width: 1024, height: 704, verified: false },
  { src: images.projects.avenue, alt: "Global Avenue Housing Society logo", caption: "Global Avenue — Sahiwal", category: "Residential", projectSlug: "global-avenue", width: 1024, height: 704, verified: true },
  { src: images.projects.avenueMap, alt: "Global Avenue master plan", caption: "Global Avenue master plan", category: "Residential", projectSlug: "global-avenue", width: 2400, height: 1840, verified: true },
  { src: images.projects.trade, alt: "Global Trade Center", caption: "Global Trade Center — Sahiwal", category: "Commercial", projectSlug: "global-trade-center", width: 1024, height: 704, verified: false },
  { src: images.interior, alt: "Luxury apartment interior", caption: "Luxury apartment interior", category: "Residential", width: 1280, height: 768, verified: false },
  { src: images.about, alt: "Building entrance", caption: "Building entrance", category: "Commercial", width: 1400, height: 1000, verified: false },
  { src: images.constructionMain, alt: "Construction progress", caption: "Construction progress", category: "Construction", width: 1200, height: 800, verified: false },
];

export const galleryImages = publicOnly(all);
export const galleryCategories = ["All", "Residential", "Commercial", "Construction", "Events"] as const;
