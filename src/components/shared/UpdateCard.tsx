import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import type { Update } from "@/types";
import { formatDate } from "@/lib/utils";

export function UpdateCard({ u }: { u: Update }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-sm border bg-card shadow-sm transition-shadow hover:shadow-xl">
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image src={u.coverImage} alt={u.title} fill sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
        <span className="absolute left-3 top-3 rounded-sm bg-forest-deep/90 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-gold">{u.category}</span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="flex items-center gap-2 text-xs text-muted-foreground">
          <Calendar className="size-3.5 text-gold" aria-hidden="true" />
          <time dateTime={u.date}>{formatDate(u.date)}</time>
        </p>
        <h3 className="mt-2 text-xl">{u.title}</h3>
        {u.milestone && <p className="mt-1 text-sm font-medium text-gold-deep">{u.milestone}</p>}
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{u.description}</p>
        {u.projectSlug && (
          <Link href={`/projects/${u.projectSlug}#progress`} className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-forest hover:text-gold-deep">
            View Project <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        )}
      </div>
    </article>
  );
}
