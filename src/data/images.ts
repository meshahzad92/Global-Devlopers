/**
 * Central image registry. All files live in /public/images and are the approved design photos.
 * To change a photo, replace the file (same name) or point the path at a new file.
 */
export const images = {
  hero: "/images/hero/hero.jpg",
  about: "/images/hero/about.jpg",
  interior: "/images/hero/interior.jpg",
  og: "/images/branding/og-image.jpg",
  logo: "/images/branding/logo.png",
  constructionMain: "/images/construction/construction.jpg",
  projects: {
    residences: "/images/projects/global-residences.jpg",
    tower: "/images/projects/global-business-tower.jpg",
    trade: "/images/projects/global-trade-center.jpg",
  },
  ceo: "/images/leadership/mian-muhammad-arshad.jpg",
} as const;
