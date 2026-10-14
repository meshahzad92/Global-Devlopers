// Generates on-brand TEMPORARY placeholder images into /public/images.
// Replace every generated file with real, licensed photography before launch
// (keep the same file names, or update src/data/images.ts).
//
// Usage: npm run placeholders            (skips files that already exist)
//        npm run placeholders -- --force (overwrites)
import { mkdir, access } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..", "public", "images");
const force = process.argv.includes("--force");

// Deterministic pseudo-random so placeholders are stable between runs.
function rng(seed) {
  let s = seed >>> 0;
  return () => ((s = (s * 1664525 + 1013904223) >>> 0) / 2 ** 32);
}

function skyline({ w, h, seed, sky = ["#0b2a26", "#6d5a3a", "#e3b778"], density = 1, tall = 0.75, label }) {
  const r = rng(seed);
  const horizon = h * 0.82;
  let buildings = "";
  // Distant towers
  for (let x = -20; x < w; ) {
    const bw = 40 + r() * 90 * density;
    const bh = h * (0.18 + r() * 0.35);
    buildings += `<rect x="${x}" y="${horizon - bh}" width="${bw}" height="${bh}" fill="#1d2f2b" opacity="0.55"/>`;
    x += bw + 6 + r() * 30;
  }
  // Foreground architecture with lit windows
  for (let x = -10; x < w; ) {
    const bw = 120 + r() * 220 * density;
    const bh = h * (0.25 + r() * tall * 0.75);
    const y = horizon - bh;
    buildings += `<rect x="${x}" y="${y}" width="${bw}" height="${bh}" fill="#13221f"/>`;
    const cols = Math.max(3, Math.floor(bw / 22));
    const rows = Math.max(4, Math.floor(bh / 26));
    for (let c = 0; c < cols; c++) {
      for (let rw = 0; rw < rows; rw++) {
        if (r() < 0.62) {
          const o = (0.35 + r() * 0.65).toFixed(2);
          buildings += `<rect x="${x + 8 + c * (bw - 16) / cols}" y="${y + 10 + rw * (bh - 14) / rows}" width="${(bw - 16) / cols - 5}" height="${(bh - 14) / rows - 7}" fill="#f1c886" opacity="${o}"/>`;
        }
      }
    }
    x += bw + 30 + r() * 120;
  }
  // Palm/tree silhouettes
  let trees = "";
  for (let i = 0; i < Math.floor(w / 140); i++) {
    const tx = r() * w;
    const ts = 30 + r() * 50;
    trees += `<ellipse cx="${tx}" cy="${horizon - ts * 0.4}" rx="${ts}" ry="${ts * 0.7}" fill="#0c1a17"/>`;
  }
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
  <defs>
    <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="${sky[0]}"/><stop offset="0.6" stop-color="${sky[1]}"/><stop offset="1" stop-color="${sky[2]}"/>
    </linearGradient>
    <radialGradient id="sun" cx="0.68" cy="0.72" r="0.55">
      <stop offset="0" stop-color="#ffd99a" stop-opacity="0.85"/><stop offset="1" stop-color="#ffd99a" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="url(#sky)"/>
  <rect width="${w}" height="${h}" fill="url(#sun)"/>
  ${buildings}${trees}
  <rect y="${horizon}" width="${w}" height="${h - horizon}" fill="#0a1714"/>
  ${label ? `<text x="${w - 24}" y="${h - 22}" text-anchor="end" font-family="Helvetica, Arial" font-size="${Math.round(w / 70)}" fill="#ffffff" opacity="0.35">PLACEHOLDER · ${label}</text>` : ""}
</svg>`;
}

function construction({ w, h, seed, label }) {
  const r = rng(seed);
  let frame = "";
  const floors = 6 + Math.floor(r() * 6);
  const bx = w * 0.15, bw = w * 0.6, top = h * 0.2, base = h * 0.88;
  for (let f = 0; f <= floors; f++) {
    const y = base - (f * (base - top)) / floors;
    frame += `<rect x="${bx}" y="${y - 6}" width="${bw}" height="10" fill="#8f8a80"/>`;
  }
  for (let c = 0; c <= 8; c++) {
    frame += `<rect x="${bx + (c * bw) / 8 - 5}" y="${top}" width="10" height="${base - top}" fill="#77726a"/>`;
  }
  const cx = w * (0.65 + r() * 0.2);
  const crane = `<rect x="${cx}" y="${h * 0.05}" width="12" height="${h * 0.85}" fill="#d9a441"/>
    <rect x="${cx - w * 0.3}" y="${h * 0.05}" width="${w * 0.45}" height="10" fill="#d9a441"/>
    <line x1="${cx - w * 0.2}" y1="${h * 0.06}" x2="${cx - w * 0.2}" y2="${h * 0.4}" stroke="#333" stroke-width="2"/>`;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}">
  <defs><linearGradient id="g" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#cfd8dc"/><stop offset="1" stop-color="#f2e6cf"/></linearGradient></defs>
  <rect width="${w}" height="${h}" fill="url(#g)"/>${frame}${crane}
  <rect y="${base}" width="${w}" height="${h - base}" fill="#6b5f4f"/>
  <text x="${w - 20}" y="${h - 16}" text-anchor="end" font-family="Helvetica, Arial" font-size="${Math.round(w / 45)}" fill="#ffffff" opacity="0.6">PLACEHOLDER · ${label}</text>
</svg>`;
}

function portrait({ w, h, seed, label }) {
  const r = rng(seed);
  const tone = ["#c89f7e", "#b98a68", "#d4ad8c"][Math.floor(r() * 3)];
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}">
  <defs><radialGradient id="bg" cx="0.5" cy="0.35" r="0.8"><stop offset="0" stop-color="#6e5a40"/><stop offset="1" stop-color="#1e1a15"/></radialGradient></defs>
  <rect width="${w}" height="${h}" fill="url(#bg)"/>
  <ellipse cx="${w / 2}" cy="${h * 1.02}" rx="${w * 0.48}" ry="${h * 0.38}" fill="#1f2a33"/>
  <path d="M${w * 0.44} ${h * 0.66} L${w / 2} ${h * 0.86} L${w * 0.56} ${h * 0.66} Z" fill="#f2f2f2"/>
  <rect x="${w * 0.44}" y="${h * 0.5}" width="${w * 0.12}" height="${h * 0.16}" fill="${tone}"/>
  <ellipse cx="${w / 2}" cy="${h * 0.38}" rx="${w * 0.16}" ry="${h * 0.19}" fill="${tone}"/>
  <path d="M${w * 0.34} ${h * 0.34} Q${w / 2} ${h * 0.12} ${w * 0.66} ${h * 0.34} Q${w * 0.62} ${h * 0.22} ${w / 2} ${h * 0.2} Q${w * 0.38} ${h * 0.22} ${w * 0.34} ${h * 0.34} Z" fill="#231b14"/>
  ${label ? `<text x="${w / 2}" y="${h - 14}" text-anchor="middle" font-family="Helvetica, Arial" font-size="${Math.round(w / 22)}" fill="#ffffff" opacity="0.45">PLACEHOLDER</text>` : ""}
</svg>`;
}

const jobs = [
  ["hero/about.jpg", skyline({ w: 1400, h: 1000, seed: 21, sky: ["#4c6a6a", "#a8a289", "#efd7a6"], label: "about" })],
  ["construction/site-1.jpg", construction({ w: 1200, h: 800, seed: 1, label: "construction 1" })],
  ["construction/site-2.jpg", construction({ w: 800, h: 520, seed: 2, label: "construction 2" })],
  ["construction/site-3.jpg", construction({ w: 800, h: 520, seed: 3, label: "construction 3" })],
  ["construction/site-4.jpg", construction({ w: 800, h: 520, seed: 4, label: "construction 4" })],
  ["leadership/ceo.jpg", portrait({ w: 800, h: 1000, seed: 7, label: true })],
  ["leadership/member-1.jpg", portrait({ w: 600, h: 750, seed: 8, label: true })],
  ["leadership/member-2.jpg", portrait({ w: 600, h: 750, seed: 9, label: true })],
  ["testimonials/person-1.jpg", portrait({ w: 240, h: 240, seed: 12 })],
  ["testimonials/person-2.jpg", portrait({ w: 240, h: 240, seed: 13 })],
  ["testimonials/person-3.jpg", portrait({ w: 240, h: 240, seed: 14 })],
  ["testimonials/person-4.jpg", portrait({ w: 240, h: 240, seed: 15 })],
];

for (const [rel, svg] of jobs) {
  const out = path.join(root, rel);
  await mkdir(path.dirname(out), { recursive: true });
  if (!force) {
    try { await access(out); console.log("skip", rel); continue; } catch {}
  }
  await sharp(Buffer.from(svg)).jpeg({ quality: 82, mozjpeg: true }).toFile(out);
  console.log("wrote", rel);
}
