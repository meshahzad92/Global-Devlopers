import type { Update } from "@/types";
import { images } from "./images";
import { publicOnly } from "./config";

/** SAMPLE updates (verified: false). Dates and milestones are illustrative only. */
const allUpdates: Update[] = [
  {
    id: "u1",
    projectSlug: "global-business-tower",
    title: "Global Business Tower",
    milestone: "Structure Level 12 Completed",
    date: "2024-05-15",
    description: "The structural frame has reached level 12, keeping the project on its planned schedule. Façade works begin next quarter.",
    coverImage: images.construction[0],
    images: [images.construction[0], images.construction[1], images.construction[2]],
    category: "Construction Progress",
    verified: false,
  },
  {
    id: "u2",
    projectSlug: "global-residences",
    title: "Global Residences",
    milestone: "Structure Level 6 Completed",
    date: "2024-04-02",
    description: "Six floors of the residential block are complete, with MEP rough-ins progressing on the lower levels.",
    coverImage: images.construction[1],
    images: [images.construction[1], images.construction[3]],
    category: "Construction Progress",
    verified: false,
  },
  {
    id: "u3",
    projectSlug: "global-residences",
    title: "Site Safety Inspection Passed",
    milestone: "Quality & safety audit",
    date: "2024-02-20",
    description: "Our engineering team and independent inspectors completed a full quality and safety audit on site.",
    coverImage: images.construction[2],
    images: [images.construction[2]],
    category: "Milestone",
    verified: false,
  },
  {
    id: "u4",
    projectSlug: "global-heights",
    title: "Global Heights Announced",
    date: "2024-01-08",
    description: "We are pleased to announce Global Heights — high-rise luxury apartments with panoramic views of the city.",
    coverImage: images.projects.heights,
    images: [images.projects.heights],
    category: "Project Launch",
    verified: false,
  },
  {
    id: "u5",
    title: "Global Developers Opens New Office",
    date: "2023-11-12",
    description: "Our new head office brings design, engineering and client services teams together under one roof.",
    coverImage: images.interior,
    images: [images.interior],
    category: "Company News",
    verified: false,
  },
];

export const updates = publicOnly(allUpdates).sort((a, b) => b.date.localeCompare(a.date));
export const updatesForProject = (slug: string) => updates.filter((u) => u.projectSlug === slug);
