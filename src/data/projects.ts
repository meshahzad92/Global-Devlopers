import type { Project, ProjectStatus, ProjectType } from "@/types";
import { images } from "./images";
import { publicOnly } from "./config";

/**
 * SAMPLE projects (verified: false). Replace with real developments.
 * `progress` must only be set to a number once it is verified; otherwise keep null.
 */
const allProjects: Project[] = [
  {
    id: "p1",
    slug: "global-residences",
    title: "Global Residences",
    tagline: "Premium Living Redefined",
    type: "residential",
    status: "ongoing",
    location: "Lahore",
    description:
      "A boutique residential community of light-filled apartments with landscaped courtyards, private balconies, and resort-style amenities in the heart of Lahore.",
    coverImage: images.projects.residences,
    gallery: [images.projects.residences, images.interior, images.about],
    progress: null,
    features: ["2, 3 & 4 bedroom apartments", "Landscaped podium gardens", "24/7 security & concierge", "Clubhouse and fitness centre"],
    milestones: [
      { date: "2024-04-28", title: "Façade installation begins", done: true },
    ],
    featured: true,
    verified: false,
  },
  {
    id: "p2",
    slug: "global-business-tower",
    title: "Global Business Tower",
    tagline: "A New Standard for Business",
    type: "commercial",
    status: "upcoming",
    location: "Islamabad",
    description:
      "A Grade-A commercial tower offering flexible office floors, a double-height lobby, and smart building systems for forward-looking businesses.",
    coverImage: images.projects.tower,
    gallery: [images.projects.tower, images.constructionMain, images.about],
    progress: null,
    features: ["Grade-A office floors", "Smart building management", "Multi-level parking", "Rooftop business lounge"],
    milestones: [
      { date: "2024-05-15", title: "Structure level 12 completed", done: true },
    ],
    featured: true,
    verified: false,
  },
  {
    id: "p3",
    slug: "global-trade-center",
    title: "Global Trade Center",
    tagline: "Where Opportunities Grow",
    type: "commercial",
    status: "completed",
    location: "Karachi",
    description:
      "A landmark mixed-use destination combining retail, offices, and dining, now home to leading national and international brands.",
    coverImage: images.projects.trade,
    gallery: [images.projects.trade, images.hero, images.interior],
    progress: 100,
    features: ["Retail & dining podium", "Corporate office tower", "Central atrium plaza", "Direct boulevard access"],
    milestones: [
      { date: "2024-03-02", title: "Grand opening", done: true },
    ],
    featured: true,
    verified: false,
  },
];

export const projects = publicOnly(allProjects);
export const featuredProjects = projects.filter((p) => p.featured).slice(0, 3);
export const getProject = (slug: string) => projects.find((p) => p.slug === slug);

export const statusLabel: Record<ProjectStatus, string> = { ongoing: "Ongoing", upcoming: "Upcoming", completed: "Completed" };
export const typeLabel: Record<ProjectType, string> = { residential: "Residential", commercial: "Commercial" };
