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
    location: "Sahiwal",
    description:
      "A boutique residential community of light-filled apartments with landscaped courtyards, private balconies, and resort-style amenities in the heart of Sahiwal.",
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
    slug: "global-avenue",
    title: "Global Avenue",
    tagline: "Housing Society",
    type: "residential",
    status: "ongoing",
    location: "Sahiwal",
    description:
      "Global Avenue is a planned residential housing society in Sahiwal, set along the Sahiwal Bypass with easy access to G.T. Road. The master plan offers residential plots from 3 to 22 Marla, commercial shops, landscaped parks and wide, well-planned roads.",
    coverImage: images.projects.avenue,
    heroImage: null,
    masterPlan: { src: images.projects.avenueMap, full: images.projects.avenueMapFull, width: 2400, height: 1840 },
    gallery: [],
    progress: null,
    features: [
      "Residential plots from 3 to 22 Marla",
      "Commercial shops",
      "Landscaped parks and green belts",
      "Wide roads from 30 ft to 80 ft",
      "On Sahiwal Bypass, near G.T. Road",
    ],
    featured: true,
    verified: true,
  },
  {
    id: "p3",
    slug: "global-trade-center",
    title: "Global Trade Center",
    tagline: "Where Opportunities Grow",
    type: "commercial",
    status: "completed",
    location: "Sahiwal",
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
