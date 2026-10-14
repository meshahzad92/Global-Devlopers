"use client";

import { useState } from "react";
import type { Project } from "@/types";
import { ProjectCard } from "./ProjectCard";
import { statusLabel, typeLabel } from "@/data/projects";

const filters = ["All", "Ongoing", "Upcoming", "Completed", "Residential", "Commercial"] as const;

export function ProjectBrowser({ projects }: { projects: Project[] }) {
  const [f, setF] = useState<(typeof filters)[number]>("All");
  const list = projects.filter((p) => f === "All" || statusLabel[p.status] === f || typeLabel[p.type] === f);
  return (
    <>
      <div className="flex flex-wrap gap-2" role="group" aria-label="Filter projects">
        {filters.map((x) => (
          <button
            key={x}
            type="button"
            onClick={() => setF(x)}
            aria-pressed={f === x}
            className={`rounded-sm border px-4 py-2 text-xs font-semibold transition-colors ${f === x ? "border-forest bg-forest text-on-dark" : "bg-card hover:border-gold"}`}
          >
            {x}
          </button>
        ))}
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {list.map((p) => (
          <ProjectCard key={p.id} p={p} />
        ))}
      </div>
      {list.length === 0 && <p className="mt-10 text-muted-foreground">No projects in this category yet.</p>}
    </>
  );
}
