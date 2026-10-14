import type { GalleryImage } from "@/types";
import { images } from "./images";
import { publicOnly } from "./config";

const all: GalleryImage[] = [
  { src: images.projects.residences, alt: "Global Residences exterior at golden hour", caption: "Global Residences — Lahore", category: "Residential", projectSlug: "global-residences", width: 1024, height: 704, verified: false },
  { src: images.projects.tower, alt: "Global Business Tower rendering", caption: "Global Business Tower — Islamabad", category: "Commercial", projectSlug: "global-business-tower", width: 1024, height: 704, verified: false },
  { src: images.construction[0], alt: "Structural frame under construction", caption: "Structure works in progress", category: "Construction", projectSlug: "global-business-tower", width: 1200, height: 800, verified: false },
  { src: images.projects.trade, alt: "Global Trade Center façade", caption: "Global Trade Center — Karachi", category: "Commercial", projectSlug: "global-trade-center", width: 1024, height: 704, verified: false },
  { src: images.interior, alt: "Luxury lounge interior with city views", caption: "Signature interiors", category: "Residential", width: 1280, height: 768, verified: false },
  { src: images.construction[1], alt: "Construction site with cranes", caption: "Site progress", category: "Construction", projectSlug: "global-residences", width: 800, height: 520, verified: false },
  { src: images.projects.villas, alt: "Global Villas community", caption: "Global Villas — Islamabad", category: "Residential", projectSlug: "global-villas", width: 1024, height: 704, verified: false },
  { src: images.about, alt: "Modern building entrance", caption: "Arrival experience", category: "Commercial", width: 1400, height: 1000, verified: false },
  { src: images.construction[2], alt: "Engineers reviewing plans on site", caption: "Engineering review", category: "Construction", width: 800, height: 520, verified: false },
  { src: images.projects.arcade, alt: "Global Arcade retail walkway", caption: "Global Arcade — Karachi", category: "Commercial", projectSlug: "global-arcade", width: 1024, height: 704, verified: false },
  { src: images.leaders[0], alt: "Project launch event", caption: "Project launch event", category: "Events", width: 600, height: 750, verified: false },
  { src: images.projects.heights, alt: "Global Heights rendering", caption: "Global Heights — Lahore", category: "Residential", projectSlug: "global-heights", width: 1024, height: 704, verified: false },
  { src: images.construction[3], alt: "Foundation works", caption: "Foundation works", category: "Construction", width: 800, height: 520, verified: false },
];

export const galleryImages = publicOnly(all);
export const galleryCategories = ["All", "Residential", "Commercial", "Construction", "Events"] as const;
