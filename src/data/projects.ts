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
    address: "Main Boulevard, Lahore",
    description:
      "A premium residential community offering refined apartments, landscaped courtyards and resort-style amenities in the heart of the city.",
    overview: [
      "Global Residences brings a new standard of urban living with thoughtfully planned apartments, generous natural light and calm, landscaped surroundings.",
      "Every residence is designed around comfort and longevity, with premium finishes, efficient layouts and amenities for the whole family.",
    ],
    coverImage: images.projects.residences,
    gallery: [images.projects.residences, images.projects.villas, images.interior, images.about],
    progress: 62,
    startDate: "2023-03-01",
    expectedCompletion: "2026-12-31",
    features: ["Landscaped courtyards", "Swimming pool & clubhouse", "Fitness centre", "24/7 security", "Underground parking", "Children's play areas"],
    specifications: { "Project Type": "Residential Apartments", Floors: "G + 9", Units: "180 Apartments", "Unit Sizes": "1, 2 & 3 Bedroom" },
    milestones: [
      { date: "2023-03-01", title: "Ground breaking", done: true },
      { date: "2023-11-15", title: "Foundation completed", done: true },
      { date: "2024-08-20", title: "Structure level 6 completed", done: true },
      { date: "2025-06-30", title: "Structure topped out", done: false },
      { date: "2026-12-31", title: "Handover", done: false },
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
    address: "Blue Area, Islamabad",
    description:
      "A landmark Grade-A office tower with flexible floor plates, executive lounges and smart building systems for modern enterprises.",
    overview: [
      "Global Business Tower is designed for organisations that want a prestigious address with efficient, future-ready workspaces.",
      "Floor-to-ceiling glazing, high-speed elevators and a grand lobby create a refined first impression for every visitor.",
    ],
    coverImage: images.projects.tower,
    gallery: [images.projects.tower, images.projects.trade, images.interior],
    progress: null,
    expectedCompletion: "2028-06-30",
    features: ["Grade-A office floors", "Smart building management", "Executive lounges", "Multi-level parking", "Food court", "Backup power"],
    specifications: { "Project Type": "Commercial Offices", Floors: "G + 24", "Floor Plates": "Flexible" },
    milestones: [{ date: "2025-09-01", title: "Project announced", done: true }],
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
    address: "Shahrah-e-Faisal, Karachi",
    description:
      "A completed mixed-use commercial destination bringing together retail, offices and dining under one iconic roof.",
    overview: [
      "Global Trade Center is a thriving commercial hub with premium retail frontage, corporate offices and dining.",
      "Its central location and modern design have made it a destination for businesses and visitors alike.",
    ],
    coverImage: images.projects.trade,
    gallery: [images.projects.trade, images.projects.arcade, images.projects.tower],
    progress: 100,
    startDate: "2019-01-10",
    expectedCompletion: "2022-12-15",
    features: ["Retail galleria", "Corporate offices", "Food court", "Ample parking", "Central air-conditioning"],
    specifications: { "Project Type": "Mixed-use Commercial", Floors: "G + 12" },
    milestones: [
      { date: "2019-01-10", title: "Construction started", done: true },
      { date: "2021-04-01", title: "Structure completed", done: true },
      { date: "2022-12-15", title: "Project completed", done: true },
    ],
    featured: true,
    verified: false,
  },
  {
    id: "p4",
    slug: "global-heights",
    title: "Global Heights",
    tagline: "Elevated City Living",
    type: "residential",
    status: "upcoming",
    location: "Lahore",
    description: "High-rise luxury apartments with panoramic city views, sky gardens and concierge services.",
    coverImage: images.projects.heights,
    gallery: [images.projects.heights, images.interior],
    progress: null,
    features: ["Sky gardens", "Concierge", "Infinity pool", "Smart homes"],
    featured: false,
    verified: false,
  },
  {
    id: "p5",
    slug: "global-villas",
    title: "Global Villas",
    tagline: "Private, Peaceful, Premium",
    type: "residential",
    status: "completed",
    location: "Islamabad",
    description: "A gated community of contemporary villas surrounded by greenery, parks and walking trails.",
    coverImage: images.projects.villas,
    gallery: [images.projects.villas, images.about],
    progress: 100,
    features: ["Gated community", "Parks & trails", "Community centre", "Mosque"],
    featured: false,
    verified: false,
  },
  {
    id: "p6",
    slug: "global-arcade",
    title: "Global Arcade",
    tagline: "Retail at Its Finest",
    type: "commercial",
    status: "ongoing",
    location: "Karachi",
    description: "A boutique retail and dining arcade designed around open-air walkways and vibrant storefronts.",
    coverImage: images.projects.arcade,
    gallery: [images.projects.arcade, images.projects.trade],
    progress: null,
    features: ["Open-air walkways", "Flagship stores", "Restaurants", "Event plaza"],
    featured: false,
    verified: false,
  },
];

export const projects = publicOnly(allProjects);
export const featuredProjects = projects.filter((p) => p.featured).slice(0, 3);
export const getProject = (slug: string) => projects.find((p) => p.slug === slug);

export const statusLabel: Record<ProjectStatus, string> = { ongoing: "Ongoing", upcoming: "Upcoming", completed: "Completed" };
export const typeLabel: Record<ProjectType, string> = { residential: "Residential", commercial: "Commercial" };
