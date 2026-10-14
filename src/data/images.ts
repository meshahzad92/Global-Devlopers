/**
 * Central image registry. All files live in /public/images.
 * All photos are the approved design images, except the two team portraits
 * (leadership/member-*.jpg), which are generated placeholders (`npm run placeholders`).
 */
export const images = {
  hero: "/images/hero/hero.jpg",
  about: "/images/hero/about.jpg",
  interior: "/images/hero/interior.jpg",
  pageProjects: "/images/projects/global-trade-center.jpg",
  pageLeadership: "/images/hero/interior.jpg",
  pageGallery: "/images/hero/hero.jpg",
  pageContact: "/images/projects/global-business-tower.jpg",
  og: "/images/branding/og-image.jpg",
  constructionMain: "/images/construction/construction.jpg",
  projects: {
    residences: "/images/projects/global-residences.jpg",
    tower: "/images/projects/global-business-tower.jpg",
    trade: "/images/projects/global-trade-center.jpg",
  },
  ceo: "/images/leadership/ceo.jpg",
  leaders: ["/images/leadership/member-1.jpg", "/images/leadership/member-2.jpg"],
} as const;
