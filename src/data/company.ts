import type { Stat } from "@/types";
import { SHOW_SAMPLE_CONTENT } from "./config";

/**
 * Company information. Everything marked `verified: false` is SAMPLE content
 * copied from the approved design mock-up — replace it with real details and
 * flip the flag to `true` once the client has confirmed it.
 */
export const companyBase = {
  name: "Global Developers",
  tagline: "Building Landmarks. Creating Legacies.",
  description:
    "Thoughtfully designed residential and commercial developments, built with a commitment to quality, innovation, and enduring value.",
  intro:
    "Global Developers is a forward-thinking real estate development company committed to creating exceptional residential and commercial spaces. With a focus on quality, innovation, and sustainable growth, we build more than structures — we build vibrant communities and lasting legacies.",
  mission:
    "To create thoughtfully designed residential and commercial spaces that elevate the way people live and work, delivered with honesty, craftsmanship, and care.",
  vision:
    "To be a trusted name in real estate development, recognised for landmark projects that set new benchmarks in quality, design, and community value.",
};

const sampleContact = {
  verified: false,
  address: "123 Main Boulevard, Sahiwal, Pakistan",
  phone: "+92 305 1717337",
  whatsapp: "923051717337",
  email: "info@globaldevelopers.com",
  hours: ["Monday – Friday: 9:00 AM – 6:00 PM", "Saturday: 10:00 AM – 4:00 PM", "Sunday: Closed"],
  mapsUrl: "https://maps.google.com/?q=Main+Boulevard+Sahiwal",
};

export type ContactInfo = typeof sampleContact;

/** Null when no verified contact details are available in production. */
export const contact: ContactInfo | null = sampleContact.verified || SHOW_SAMPLE_CONTENT ? sampleContact : null;

export const socials = [
  { name: "Facebook", href: "https://facebook.com", icon: "facebook" },
  { name: "Instagram", href: "https://instagram.com", icon: "instagram" },
  { name: "LinkedIn", href: "https://linkedin.com", icon: "linkedin" },
  { name: "YouTube", href: "https://youtube.com", icon: "youtube" },
] as const;

export const stats: Stat[] = [
  { id: "years", value: "10+", label: "Years of Excellence", icon: "building", verified: false },
  { id: "projects", value: "25+", label: "Projects Delivered & In Development", icon: "projects", verified: false },
  { id: "families", value: "5,000+", label: "Happy Families & Businesses", icon: "people", verified: false },
  { id: "quality", value: "100%", label: "Commitment to Quality", icon: "handshake", verified: true },
];

export const values = [
  { title: "Integrity", text: "We communicate honestly and deliver on every promise." },
  { title: "Quality", text: "World-class materials, design and construction standards." },
  { title: "Innovation", text: "Modern engineering and smart building technologies." },
  { title: "Community", text: "We design places that bring people together." },
];

export const verifiedStats = () => stats.filter((s) => s.verified || SHOW_SAMPLE_CONTENT);

export const company = { ...companyBase, contact, socials };
