import { PageHero } from "@/components/shared/PageHero";
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
      <PageHero image={images.projects.tower} eyebrow="Our Developments" title="Projects That Define Skylines" />
      <section className="bg-cream py-16">
        <div className="container-gd">
          <ProjectBrowser projects={projects} />
        </div>
      </section>
    </>
  );
}
