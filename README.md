# Global Developers — Website

Premium corporate portfolio for **Global Developers** (real estate development & construction).
Built with Next.js (App Router), TypeScript, Tailwind CSS v4 and Lucide icons.
No backend, database or CMS — all content lives in typed files in `src/data/`.

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm start          # serve the production build
npm run lint
npm run typecheck
```

Requires Node.js 20.9+.

## Pages

| Route | Description |
|---|---|
| `/` | Homepage (hero, who we are, stats, featured projects, why us, construction progress, CEO message, testimonials, CTA) |
| `/about` | Our story and values |
| `/projects` | All projects with status / type filters |
| `/projects/[slug]` | Project details: specs, features, progress, milestones, gallery + lightbox, updates, related projects |
| `/leadership` | CEO message and leadership team |
| `/testimonials` | Approved testimonials grouped by type |
| `/gallery` | Masonry gallery with full-screen viewer |
| `/updates` | Construction & company updates (newest first) |
| `/contact` | Contact details, WhatsApp, and an enquiry form that opens the visitor's email app |

Also: custom 404, `/sitemap.xml`, `/robots.txt`, per-page metadata, Open Graph and JSON-LD.

## Sample content vs. real content (important)

Every record in `src/data/*` has a `verified` flag.

- `verified: false` = sample/illustrative content from the design mock-up (fictional names, numbers, dates, contact details).
- Sample content is **shown** in `npm run dev` and **hidden** in production builds.
- To show sample content on a preview deployment, set `NEXT_PUBLIC_SHOW_SAMPLE_CONTENT=true`.
- When you replace a record with real, client-approved information, set `verified: true`.

When nothing verified exists, pages show tasteful neutral empty states instead of fabricated content.

## Editing content

| What | File |
|---|---|
| Company name, tagline, intro, mission, vision, contact details, socials, statistics, values, milestones | `src/data/company.ts` |
| Projects | `src/data/projects.ts` |
| Construction & company updates | `src/data/updates.ts` |
| Testimonials | `src/data/testimonials.ts` |
| CEO & leadership | `src/data/leadership.ts` |
| Gallery | `src/data/gallery.ts` |
| Image paths | `src/data/images.ts` |

### Add a project
Add an object to `allProjects` in `src/data/projects.ts` (see the `Project` type in `src/types/index.ts`).
Put images in `public/images/projects/` and reference them as `/images/projects/<file>.jpg`.
Set `featured: true` to show it on the homepage (first 3 featured are shown). The detail page is generated automatically from the `slug`.

### Update project progress
Set `progress` (0–100) **only when verified**. Keep `null` to display "Progress not announced".
Upcoming projects never show a 0% bar. Add dated entries to `milestones` (`done: true/false`).

### Add construction photographs
Add an entry to `src/data/updates.ts` with `projectSlug`, `date`, `title`, `milestone`, `coverImage` and `images`.
It appears on `/updates`, the homepage progress section and the project page automatically.

### Add a testimonial
Add to `src/data/testimonials.ts`. It is only published when `approved: true` **and** `verified: true`.
Only publish genuine endorsements you have permission to use.

### Edit CEO information
Edit `sampleCeo` in `src/data/leadership.ts` (name, role, portrait, bio, message, leadershipMessage, quote, optional `signature` image), then set `verified: true`.

### Configure contact details
Edit `sampleContact` in `src/data/company.ts` (address, phone, WhatsApp number in international format without `+`, email, hours, Google Maps link), then set `verified: true`.

## Images

All photos live in `public/images/` and are registered in `src/data/images.ts`.
To change a photo, replace the file with one of the same name.

## Deploying to Vercel

1. Push this repository to GitHub.
2. In Vercel, **Add New → Project** and import the repository (framework auto-detected as Next.js).
3. Set environment variables:
   - `NEXT_PUBLIC_SITE_URL` = your production URL (e.g. `https://www.globaldevelopers.com`)
   - `NEXT_PUBLIC_SHOW_SAMPLE_CONTENT` = `true` only for previews while content is not yet verified.
4. Deploy. All pages are statically generated.

Use a Vercel plan that permits commercial use (Pro) for the live company site.
