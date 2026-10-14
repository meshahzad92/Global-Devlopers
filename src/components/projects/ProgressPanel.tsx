import type { Project } from "@/types";
import { formatDate } from "@/lib/utils";

export function ProgressPanel({ project, latestUpdate }: { project: Project; latestUpdate?: string }) {
  const { progress, status, milestones = [] } = project;
  const showBar = progress !== null && status !== "upcoming";
  return (
    <div className="rounded-sm border bg-card p-6 shadow-sm md:p-8">
      <h3 className="text-2xl">Construction Progress</h3>
      {showBar ? (
        <div className="mt-6">
          <div className="flex items-end justify-between">
            <p className="font-serif text-4xl text-forest">{progress}%</p>
            {latestUpdate && <p className="text-xs text-muted-foreground">Last updated {formatDate(latestUpdate)}</p>}
          </div>
          <div className="mt-3 h-2 overflow-hidden rounded-full bg-muted" role="progressbar" aria-valuenow={progress} aria-valuemin={0} aria-valuemax={100} aria-label="Construction progress">
            <div className="h-full rounded-full bg-gold" style={{ width: `${progress}%` }} />
          </div>
        </div>
      ) : (
        <p className="mt-4 text-sm text-muted-foreground">{status === "upcoming" ? "Construction has not started yet. Progress not announced." : "Progress not announced."}</p>
      )}

      {milestones.length > 0 && (
        <ol className="mt-8 space-y-0 border-l border-gold/40 pl-6">
          {milestones.map((m) => (
            <li key={m.date + m.title} className="relative pb-6 last:pb-0">
              <span className={`absolute -left-[31px] top-1 size-3 rounded-full border-2 border-gold ${m.done ? "bg-gold" : "bg-card"}`} aria-hidden="true" />
              <time dateTime={m.date} className="text-[11px] uppercase tracking-wider text-muted-foreground">{formatDate(m.date)}</time>
              <p className="mt-0.5 text-sm font-medium text-foreground">
                {m.title}
                {!m.done && <span className="ml-2 text-xs font-normal text-muted-foreground">(planned)</span>}
              </p>
            </li>
          ))}
        </ol>
      )}
    </div>
  );
}
