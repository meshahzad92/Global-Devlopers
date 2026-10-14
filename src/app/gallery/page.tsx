import { PageHero } from "@/components/shared/PageHero";
import { GalleryBrowser } from "@/components/gallery/GalleryBrowser";
import { galleryImages } from "@/data/gallery";
import { images } from "@/data/images";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Gallery",
  description: "Photographs of Global Developers' residential and commercial projects and construction progress.",
  path: "/gallery",
});

export default function GalleryPage() {
  return (
    <>
      <PageHero image={images.projects.residences} eyebrow="Gallery" title="Our Work in Pictures" />
      <section className="bg-cream py-16">
        {galleryImages.length === 0 ? <p className="container-gd text-muted-foreground">Gallery coming soon.</p> : <GalleryBrowser items={galleryImages} />}
      </section>
    </>
  );
}
