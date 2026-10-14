import { PageHero, SectionHead } from "@/components/shared/PageHero";
import { CtaBand } from "@/components/shared/CtaBand";
import { UpdateCard } from "@/components/shared/UpdateCard";
import { updates } from "@/data/updates";
import { images } from "@/data/images";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Updates",
  description: "Construction progress, project launches and company news from Global Developers.",
  path: "/updates",
});

export default function UpdatesPage() {
  const [latest, ...rest] = updates;
  return (
    <>
      <PageHero eyebrow="Construction Progress" title="Real Progress. Real Results." text="Stay updated with the latest construction milestones and company news." image={images.construction[0]} />
      <section className="py-16 md:py-20">
        <div className="container-gd">
          {!latest ? (
            <p className="text-center text-muted-foreground">Updates will be published here soon.</p>
          ) : (
            <>
              <SectionHead eyebrow="Latest Update" title="News & Milestones" />
              <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {[latest, ...rest].map((u) => <UpdateCard key={u.id} u={u} />)}
              </div>
            </>
          )}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
