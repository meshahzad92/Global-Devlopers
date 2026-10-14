import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHead } from "@/components/shared/PageHero";
import { featuredProjects } from "@/data/projects";

export function FeaturedProjects() {
  if (featuredProjects.length === 0) return null;
  return (
    <section className="py-16 md:py-20">
      <div className="container-gd">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHead eyebrow="Featured Projects" title="Our Developments" />
          <Link href="/projects" className="group inline-flex items-center gap-2 text-sm font-medium text-forest hover:text-gold">
            View All Projects <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </Link>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((p, i) => (
            <Reveal key={p.id} delay={i * 0.08}>
              <ProjectCard p={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
