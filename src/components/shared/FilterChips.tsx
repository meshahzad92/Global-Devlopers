"use client";

import { cn } from "@/lib/utils";

export function FilterChips<T extends string>({ label, options, value, onChange, display }: { label: string; options: readonly T[]; value: T; onChange: (v: T) => void; display?: (v: T) => string }) {
  return (
    <div role="group" aria-label={label} className="flex flex-wrap gap-2">
      {options.map((o) => (
        <button
          key={o}
          type="button"
          aria-pressed={value === o}
          onClick={() => onChange(o)}
          className={cn(
            "rounded-sm border px-4 py-2 text-xs font-medium transition-colors",
            value === o ? "border-forest bg-forest text-on-dark" : "border-border bg-card text-foreground hover:border-gold",
          )}
        >
          {display ? display(o) : o}
        </button>
      ))}
    </div>
  );
}
