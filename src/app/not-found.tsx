import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="bg-forest-deep">
      <div className="container-gd flex min-h-[60vh] flex-col items-start justify-center py-24">
        <p className="eyebrow">Error 404</p>
        <h1 className="mt-4 text-4xl text-on-dark md:text-6xl">This page could not be found.</h1>
        <p className="mt-5 max-w-lg text-on-dark/80">The page you are looking for may have moved, or the address may be incorrect.</p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Button asChild variant="gold"><Link href="/">Back to Home <ArrowRight /></Link></Button>
          <Button asChild variant="outlineLight"><Link href="/projects">View Projects</Link></Button>
        </div>
      </div>
    </section>
  );
}
