import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Building2, CalendarDays, Check, Download, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHead } from "@/components/shared/PageHero";
import { CtaBand } from "@/components/shared/CtaBand";
import { UpdateCard } from "@/components/shared/UpdateCard";
import { ImageGrid } from "@/components/gallery/ImageGrid";
import { ProjectCard, StatusBadge } from "@/components/projects/ProjectCard";
import { ProgressPanel } from "@/components/projects/ProgressPanel";
import { getProject, projects, statusLabel, typeLabel } from "@/data/projects";
import { updatesForProject } from "@/data/updates";
import { pageMetadata } from "@/lib/seo";
import { formatDate } from "@/lib/utils";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const p = getProject((await params).slug);
  if (!p) return {};
  return pageMetadata({ title: p.title, description: p.description, path: `/projects/${p.slug}`, image: p.coverImage });
}

export default async function ProjectPage({ params }: Props) {
  const p = getProject((await params).slug);
  if (!p) notFound();

  const updates = updatesForProject(p.slug);
  const related = projects.filter((x) => x.slug !== p.slug && (x.type === p.type || x.location === p.location)).slice(0, 3);
  const specs: Record<string, string> = {
    Status: statusLabel[p.status],
    Category: typeLabel[p.type],
    Location: p.address ?? p.location,
    ...(p.startDate && { "Start Date": formatDate(p.startDate) }),
    ...(p.expectedCompletion && { [p.status === "completed" ? "Completed" : "Expected Completion"]: formatDate(p.expectedCompletion) }),
    ...p.specifications,
  };

  return (
    <>
      <section className="relative isolate overflow-hidden bg-forest-deep">
        <Image src={p.coverImage} alt="" fill priority sizes="100vw" className="-z-10 object-cover" />
        <div className="hero-overlay absolute inset-0 -z-10" />
        <div className="container-gd fade-up py-24 md:py-36">
          <nav aria-label="Breadcrumb" className="text-xs text-on-dark/70">
            <Link href="/projects" className="hover:text-gold">Projects</Link> <span aria-hidden="true">/</span> <span className="text-on-dark">{p.title}</span>
          </nav>
          <div className="mt-6"><StatusBadge status={p.status} /></div>
          <h1 className="mt-4 max-w-3xl text-4xl text-on-dark md:text-6xl">{p.title}</h1>
          {p.tagline && <p className="mt-3 font-serif text-xl italic text-gold">{p.tagline}</p>}
          <div className="mt-6 flex flex-wrap gap-6 text-sm text-on-dark/85">
            <span className="flex items-center gap-2"><MapPin className="size-4 text-gold" aria-hidden="true" />{p.address ?? p.location}</span>
            <span className="flex items-center gap-2"><Building2 className="size-4 text-gold" aria-hidden="true" />{typeLabel[p.type]}</span>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container-gd grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <SectionHead eyebrow="Project Overview" title="About the Development" />
            {(p.overview ?? [p.description]).map((para) => (
              <p key={para.slice(0, 30)} className="mt-5 leading-relaxed text-muted-foreground">{para}</p>
            ))}
            {p.features.length > 0 && (
              <>
                <h3 className="mt-12 text-2xl">Features &amp; Amenities</h3>
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 rounded-sm border bg-card px-4 py-3 text-sm">
                      <span className="grid size-6 place-items-center rounded-full bg-gold/20 text-gold-deep"><Check className="size-3.5" aria-hidden="true" /></span>
                      {f}
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
          <aside className="space-y-6">
            <div className="rounded-sm bg-forest-deep p-6 text-on-dark md:p-8">
              <h3 className="text-2xl text-on-dark">Key Specifications</h3>
              <dl className="mt-6 divide-y divide-on-dark/10">
                {Object.entries(specs).map(([k, v]) => (
                  <div key={k} className="flex justify-between gap-4 py-3 text-sm">
                    <dt className="text-on-dark-muted">{k}</dt>
                    <dd className="text-right">{v}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-6 flex flex-wrap gap-3">
                {p.brochure && (
                  <Button asChild variant="gold" size="sm">
                    <a href={p.brochure} download><Download /> Download Brochure</a>
                  </Button>
                )}
                <Button asChild variant={p.brochure ? "outlineLight" : "gold"} size="sm">
                  <Link href="/contact">Enquire Now <ArrowRight /></Link>
                </Button>
              </div>
            </div>
            <div id="progress" className="scroll-mt-24">
              <ProgressPanel project={p} latestUpdate={updates[0]?.date} />
            </div>
          </aside>
        </div>
      </section>

      {p.gallery.length > 0 && (
        <section className="border-t border-border/70 py-16 md:py-20">
          <div className="container-gd">
            <SectionHead eyebrow="Gallery" title="Architectural Gallery" />
            <ImageGrid className="mt-10" slides={p.gallery.map((src, i) => ({ src, alt: `${p.title} — image ${i + 1}`, title: p.title }))} />
          </div>
        </section>
      )}

      {updates.length > 0 && (
        <section className="bg-forest-deep py-16 md:py-20">
          <div className="container-gd">
            <SectionHead light eyebrow="Construction Updates" title="Latest From Site" />
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {updates.slice(0, 3).map((u) => <UpdateCard key={u.id} u={u} />)}
            </div>
            <ImageGrid className="mt-10" slides={updates.flatMap((u) => u.images.map((src) => ({ src, alt: `${u.title} — ${u.milestone ?? u.category}`, title: `${formatDate(u.date)} · ${u.milestone ?? u.title}` })))} />
            <p className="mt-6 flex items-center gap-2 text-xs text-on-dark-muted"><CalendarDays className="size-4 text-gold" aria-hidden="true" />Photos are published with each dated construction update.</p>
          </div>
        </section>
      )}

      {related.length > 0 && (
        <section className="py-16 md:py-20">
          <div className="container-gd">
            <SectionHead eyebrow="Explore More" title="Related Projects" />
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((r) => <ProjectCard key={r.id} p={r} />)}
            </div>
          </div>
        </section>
      )}

      <CtaBand title={`Interested in ${p.title}?`} text="Speak with our team for availability, pricing and site visits." />
    </>
  );
}
