"use client";

import { useMemo, useState } from "react";
import type { Project, ProjectStatus, ProjectType } from "@/types";
import { ProjectCard } from "./ProjectCard";
import { FilterChips } from "@/components/shared/FilterChips";
import { statusLabel, typeLabel } from "@/data/projects";

const statuses = ["all", "ongoing", "upcoming", "completed"] as const;
const types = ["all", "residential", "commercial"] as const;

export function ProjectBrowser({ projects }: { projects: Project[] }) {
  const [status, setStatus] = useState<(typeof statuses)[number]>("all");
  const [type, setType] = useState<(typeof types)[number]>("all");

  const shown = useMemo(
    () =>
      projects
        .filter((p) => (status === "all" || p.status === status) && (type === "all" || p.type === type))
        .sort((a, b) => Number(b.featured) - Number(a.featured)),
    [projects, status, type],
  );

  return (
    <>
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <FilterChips label="Filter by status" options={statuses} value={status} onChange={setStatus} display={(v) => (v === "all" ? "All" : statusLabel[v as ProjectStatus])} />
        <FilterChips label="Filter by type" options={types} value={type} onChange={setType} display={(v) => (v === "all" ? "All Types" : typeLabel[v as ProjectType])} />
      </div>
      <p className="mt-6 text-xs text-muted-foreground" aria-live="polite">
        Showing {shown.length} {shown.length === 1 ? "project" : "projects"}
      </p>
      {shown.length === 0 ? (
        <div className="mt-8 rounded-sm border border-dashed bg-card p-12 text-center">
          <p className="font-serif text-2xl">No projects match these filters.</p>
          <p className="mt-2 text-sm text-muted-foreground">Try a different status or project type.</p>
        </div>
      ) : (
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((p) => (
            <ProjectCard key={p.id} p={p} showDescription />
          ))}
        </div>
      )}
    </>
  );
}
