import { PageHero } from "@/components/shared/PageHero";
import { CtaBand } from "@/components/shared/CtaBand";
import { ProjectBrowser } from "@/components/projects/ProjectBrowser";
import { projects } from "@/data/projects";
import { images } from "@/data/images";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Projects",
  description: "Explore ongoing, upcoming and completed residential and commercial developments by Global Developers.",
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <>
      <PageHero eyebrow="Our Portfolio" title="Our Developments" text="Residential and commercial developments designed with quality, innovation, and enduring value." image={images.pageProjects} />
      <section className="py-16 md:py-20">
        <div className="container-gd">
          {projects.length === 0 ? (
            <p className="text-center text-muted-foreground">Our project portfolio will be published soon.</p>
          ) : (
            <ProjectBrowser projects={projects} />
          )}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
