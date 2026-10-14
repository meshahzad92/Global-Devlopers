import { PageHero } from "@/components/shared/PageHero";
import { CtaBand } from "@/components/shared/CtaBand";
import { GalleryBrowser } from "@/components/gallery/GalleryBrowser";
import { galleryImages } from "@/data/gallery";
import { images } from "@/data/images";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Gallery",
  description: "Photography of Global Developers' residential, commercial and construction projects.",
  path: "/gallery",
});

export default function GalleryPage() {
  return (
    <>
      <PageHero eyebrow="Gallery" title="Spaces That Inspire" text="A visual journey through our developments, interiors and construction sites." image={images.pageGallery} />
      <section className="py-16 md:py-20">
        <div className="container-gd">
          {galleryImages.length === 0 ? <p className="text-center text-muted-foreground">Gallery coming soon.</p> : <GalleryBrowser items={galleryImages} />}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
