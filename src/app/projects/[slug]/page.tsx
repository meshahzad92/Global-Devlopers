import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Check } from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { CtaBand } from "@/components/shared/CtaBand";
import { getProject, projects, statusLabel, typeLabel } from "@/data/projects";
import { pageMetadata } from "@/lib/seo";

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

  return (
    <>
      <PageHero image={p.coverImage} eyebrow={`${statusLabel[p.status]} · ${typeLabel[p.type]} · ${p.location}`} title={p.title} text={p.tagline} />
      <section className="bg-ivory py-16">
        <div className="container-gd grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <Link href="/projects" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-gold">
              <ArrowLeft className="size-4" aria-hidden="true" /> All projects
            </Link>
            <h2 className="mt-6 text-3xl">Overview</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">{p.description}</p>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {p.gallery.map((src, i) => (
                <Image
                  key={`${src}-${i}`}
                  src={src}
                  alt={`${p.title} view ${i + 1}`}
                  width={1280}
                  height={i === 0 ? 720 : 960}
                  sizes={i === 0 ? "(min-width: 1024px) 55vw, 100vw" : "(min-width: 1024px) 28vw, (min-width: 640px) 50vw, 100vw"}
                  className={`w-full rounded-sm object-cover ${i === 0 ? "aspect-[16/9] sm:col-span-2" : "aspect-[4/3]"}`}
                />
              ))}
            </div>
          </div>
          <aside className="h-fit rounded-sm bg-forest p-8 text-on-dark">
            <p className="eyebrow">Highlights</p>
            <ul className="mt-5 space-y-4">
              {p.features.map((h) => (
                <li key={h} className="flex gap-3 text-sm">
                  <Check className="size-4 shrink-0 text-gold" aria-hidden="true" />
                  {h}
                </li>
              ))}
            </ul>
            <dl className="mt-8 grid grid-cols-2 gap-4 border-t border-on-dark/15 pt-6 text-sm">
              <div>
                <dt className="text-xs text-on-dark-muted">Status</dt>
                <dd>{statusLabel[p.status]}</dd>
              </div>
              <div>
                <dt className="text-xs text-on-dark-muted">Location</dt>
                <dd>{p.location}</dd>
              </div>
            </dl>
          </aside>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
