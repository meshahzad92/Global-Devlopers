import { Building, ClipboardCheck, Handshake, Users, type LucideIcon } from "lucide-react";
import type { Stat } from "@/types";
import { verifiedStats } from "@/data/company";
import { cn } from "@/lib/utils";

const icons: Record<Stat["icon"], LucideIcon> = {
  building: Building,
  projects: ClipboardCheck,
  people: Users,
  handshake: Handshake,
};

export function StatsStrip() {
  const stats = verifiedStats();
  if (stats.length === 0) return null;
  return (
    <section className="bg-forest" aria-label="Company highlights">
      <div className="container-gd grid grid-cols-2 gap-y-8 py-10 lg:grid-cols-4">
        {stats.map((s, i) => {
          const Icon = icons[s.icon];
          return (
            <div key={s.id} className={cn("flex items-center gap-4 px-2 lg:justify-center", i > 0 && "lg:border-l lg:border-on-dark/15")}>
              <Icon className="size-9 shrink-0 text-gold" strokeWidth={1.3} aria-hidden="true" />
              <div>
                <p className="font-serif text-3xl text-gold md:text-4xl">{s.value}</p>
                <p className="max-w-[9rem] text-[11px] leading-tight text-on-dark/80">{s.label}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
