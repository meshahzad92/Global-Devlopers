import type { Publishable } from "@/types";

/**
 * Sample (unverified) content is visible in `next dev` and hidden in production,
 * unless NEXT_PUBLIC_SHOW_SAMPLE_CONTENT=true is set (e.g. for a client preview deploy).
 */
export const SHOW_SAMPLE_CONTENT =
  process.env.NEXT_PUBLIC_SHOW_SAMPLE_CONTENT === "true" ||
  (process.env.NEXT_PUBLIC_SHOW_SAMPLE_CONTENT !== "false" && process.env.NODE_ENV !== "production");

export function isPublic(item: Publishable) {
  return item.verified || SHOW_SAMPLE_CONTENT;
}

export function publicOnly<T extends Publishable>(items: readonly T[]): T[] {
  return items.filter(isPublic);
}
