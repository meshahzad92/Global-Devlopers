import Image from "next/image";
import { Calendar } from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { updates } from "@/data/updates";
import { images } from "@/data/images";
import { pageMetadata } from "@/lib/seo";
import { formatDate } from "@/lib/utils";

export const metadata = pageMetadata({
  title: "Construction Updates",
  description: "Latest construction milestones and company announcements from Global Developers.",
  path: "/updates",
});

export default function UpdatesPage() {
  return (
    <>
      <PageHero image={images.constructionMain} eyebrow="Construction Progress" title="Real Progress. Real Results." />
      <section className="bg-cream py-16">
        <div className="container-gd grid gap-6 md:grid-cols-3">
          {updates.map((u) => (
            <article key={u.id} className="overflow-hidden rounded-sm border bg-card shadow-sm">
              <Image src={u.coverImage} alt={u.milestone ?? u.title} width={1280} height={800} sizes="(min-width: 768px) 33vw, 100vw" className="aspect-[16/10] w-full object-cover" />
              <div className="p-6">
                <p className="eyebrow">{u.title}</p>
                <h2 className="mt-2 text-2xl">{u.milestone ?? u.title}</h2>
                <p className="mt-2 flex items-center gap-2 text-xs text-muted-foreground">
                  <Calendar className="size-3.5" aria-hidden="true" />
                  <time dateTime={u.date}>{formatDate(u.date)}</time>
                </p>
                <p className="mt-3 text-sm text-muted-foreground">{u.description}</p>
              </div>
            </article>
          ))}
          {updates.length === 0 && <p className="text-muted-foreground">Updates will be published here soon.</p>}
        </div>
      </section>
    </>
  );
}
