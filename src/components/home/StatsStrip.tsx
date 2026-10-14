import { Building, Handshake, Users } from "lucide-react";
import type { Stat } from "@/types";
import { verifiedStats } from "@/data/company";

function ProjectsIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="3" y="4" width="13" height="16" rx="1" />
      <path d="M7 8h5M7 12h5M7 16h3" />
      <path d="M16 9h3a2 2 0 0 1 2 2v9h-5" />
      <path d="m14 3 2 2 3-3" />
    </svg>
  );
}

const icons: Record<Stat["icon"], React.ComponentType<{ className?: string; strokeWidth?: number }>> = {
  building: Building,
  projects: ProjectsIcon,
  people: Users,
  handshake: Handshake,
};

export function StatsStrip() {
  const stats = verifiedStats();
  if (stats.length === 0) return null;
  return (
    <section className="bg-forest-deep" aria-label="Company highlights">
      <div className="container-gd grid grid-cols-1 divide-y divide-gold/20 py-6 sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x lg:py-10">
        {stats.map((s) => {
          const Icon = icons[s.icon];
          return (
            <div key={s.id} className="flex items-center gap-5 py-5 sm:px-4 lg:justify-center lg:py-2">
              <Icon className="size-10 shrink-0 text-gold" strokeWidth={1.3} />
              <div>
                <p className="font-serif text-3xl text-on-dark md:text-[2.1rem]">{s.value}</p>
                <p className="mt-1 max-w-[9.5rem] text-xs leading-snug text-on-dark-muted">{s.label}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
