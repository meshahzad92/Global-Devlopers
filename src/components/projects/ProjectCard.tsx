import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Building2, MapPin } from "lucide-react";
import type { Project, ProjectStatus } from "@/types";
import { statusLabel, typeLabel } from "@/data/projects";
import { cn } from "@/lib/utils";

const badge: Record<ProjectStatus, string> = {
  ongoing: "bg-forest text-on-dark",
  upcoming: "bg-gold text-forest-deep",
  completed: "bg-forest text-on-dark",
};

export function StatusBadge({ status, className }: { status: ProjectStatus; className?: string }) {
  return (
    <span className={cn("rounded-sm px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider", badge[status], className)}>
      {statusLabel[status]}
    </span>
  );
}

export function ProjectCard({ p, showDescription = false }: { p: Project; showDescription?: boolean }) {
  return (
    <Link
      href={`/projects/${p.slug}`}
      className="group block h-full overflow-hidden rounded-sm border bg-card shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={p.coverImage}
          alt={p.title}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <StatusBadge status={p.status} className="absolute right-3 top-3" />
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-xl">{p.title}</h3>
            {p.tagline && <p className="mt-1 text-xs text-muted-foreground">{p.tagline}</p>}
          </div>
          <span className="grid size-8 shrink-0 place-items-center rounded-full border border-gold text-gold transition-colors group-hover:bg-gold group-hover:text-forest-deep">
            <ArrowRight className="size-4" aria-hidden="true" />
          </span>
        </div>
        {showDescription && <p className="mt-3 line-clamp-2 text-sm text-muted-foreground">{p.description}</p>}
        <div className="mt-4 flex gap-5 text-[11px] text-muted-foreground">
          <span className="flex items-center gap-1.5"><Building2 className="size-3.5 text-gold" aria-hidden="true" />{typeLabel[p.type]}</span>
          <span className="flex items-center gap-1.5"><MapPin className="size-3.5 text-gold" aria-hidden="true" />{p.location}</span>
        </div>
      </div>
    </Link>
  );
}
