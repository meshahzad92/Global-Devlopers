/**
 * Every content record carries a `verified` flag.
 * - `verified: true`  → real, client-approved information. Always published.
 * - `verified: false` → illustrative sample content. Shown during local development
 *   (or when NEXT_PUBLIC_SHOW_SAMPLE_CONTENT=true) and hidden in production builds.
 */
export interface Publishable {
  verified: boolean;
}

export type ProjectStatus = "upcoming" | "ongoing" | "completed";
export type ProjectType = "residential" | "commercial";

export interface Milestone {
  date: string; // ISO YYYY-MM-DD
  title: string;
  done: boolean;
}

export interface Project extends Publishable {
  id: string;
  slug: string;
  title: string;
  tagline?: string;
  type: ProjectType;
  status: ProjectStatus;
  location: string; // city shown on cards
  address?: string;
  description: string;
  overview?: string[];
  coverImage: string;
  /** Background for the project page header; falls back to coverImage. null = plain green header. */
  heroImage?: string | null;
  /** Site / master plan shown on the project page, with a full-resolution version to open. */
  masterPlan?: { src: string; full: string; width: number; height: number };
  gallery: string[];
  /** Verified construction progress 0–100, or null when not announced. */
  progress: number | null;
  startDate?: string;
  expectedCompletion?: string;
  features: string[];
  specifications?: Record<string, string>;
  milestones?: Milestone[];
  brochure?: string;
  featured: boolean;
}

export type UpdateCategory = "Construction Progress" | "Project Launch" | "Company News" | "Milestone";

export interface Update extends Publishable {
  id: string;
  projectSlug?: string;
  title: string;
  date: string; // ISO YYYY-MM-DD
  milestone?: string;
  description: string;
  coverImage: string;
  images: string[];
  category: UpdateCategory;
}

export interface Testimonial extends Publishable {
  id: string;
  name: string;
  designation: string;
  organization?: string;
  portrait?: string;
  quote: string;
  kind: "Client" | "Investor" | "Partner" | "Industry";
  approved: boolean;
  featured: boolean;
}

export interface Leader extends Publishable {
  id: string;
  name: string;
  role: string;
  portrait?: string;
  bio: string[];
  message?: string[];
  /** Shorter message shown on the Leadership page. */
  leadershipMessage?: string;
  quote?: string;
  vision?: string;
  achievements?: string[];
  signature?: string;
}

export interface Stat extends Publishable {
  id: string;
  value: string;
  label: string;
  icon: "building" | "projects" | "people" | "handshake";
}

export type GalleryCategory = "Residential" | "Commercial" | "Construction" | "Events";

export interface GalleryImage extends Publishable {
  src: string;
  alt: string;
  caption: string;
  category: GalleryCategory;
  projectSlug?: string;
  width: number;
  height: number;
}
