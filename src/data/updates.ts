import type { Update } from "@/types";
import { images } from "./images";
import { publicOnly } from "./config";

/** SAMPLE updates (verified: false). Dates and milestones are illustrative only. */
const allUpdates: Update[] = [
  {
    id: "u2",
    projectSlug: "global-residences",
    title: "Global Residences",
    milestone: "Façade Installation Begins",
    date: "2024-04-28",
    description: "Glazing and stone cladding installation has started on Block A, bringing the final elevation to life.",
    coverImage: images.projects.residences,
    images: [images.projects.residences],
    category: "Construction Progress",
    verified: false,
  },
  {
    id: "u3",
    projectSlug: "global-trade-center",
    title: "Global Trade Center",
    milestone: "Grand Opening Celebrated",
    date: "2024-03-02",
    description: "Global Trade Center officially opened to the public with over 80% of retail space already leased.",
    coverImage: images.projects.trade,
    images: [images.projects.trade],
    category: "Milestone",
    verified: false,
  },
];

export const updates = publicOnly(allUpdates).sort((a, b) => b.date.localeCompare(a.date));
export const updatesForProject = (slug: string) => updates.filter((u) => u.projectSlug === slug);
