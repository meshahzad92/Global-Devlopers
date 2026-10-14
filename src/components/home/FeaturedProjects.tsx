import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { SectionHead } from "@/components/shared/PageHero";
import { featuredProjects } from "@/data/projects";

export function FeaturedProjects() {
  if (featuredProjects.length === 0) return null;
  return (
    <section className="bg-cream py-20">
      <div className="container-gd">
        <div className="flex items-end justify-between gap-4">
          <SectionHead eyebrow="Featured Projects" title="Our Developments" />
          <Link href="/projects" className="hidden items-center gap-2 text-xs font-semibold text-gold sm:flex">
            View All Projects <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {featuredProjects.map((p) => (
            <ProjectCard key={p.id} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
