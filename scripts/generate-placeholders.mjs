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
  ["leadership/member-1.jpg", portrait({ w: 600, h: 750, seed: 8, label: true })],
  ["leadership/member-2.jpg", portrait({ w: 600, h: 750, seed: 9, label: true })],
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
