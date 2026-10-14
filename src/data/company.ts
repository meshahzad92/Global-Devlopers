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
  address: "123 Main Boulevard, Lahore, Pakistan",
  phone: "+92 300 1234567",
  whatsapp: "923001234567",
  email: "info@globaldevelopers.com",
  hours: ["Monday – Friday: 9:00 AM – 6:00 PM", "Saturday: 10:00 AM – 4:00 PM", "Sunday: Closed"],
  mapsUrl: "https://maps.google.com/?q=Main+Boulevard+Lahore",
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
  { title: "Integrity", text: "Honest communication and transparent dealings at every stage of a project." },
  { title: "Quality", text: "World-class design and uncompromising building standards in everything we deliver." },
  { title: "Innovation", text: "Modern architecture, smart planning and materials that stand the test of time." },
  { title: "Community", text: "Spaces designed around people — places to live, work, and thrive together." },
];

export const milestones = [
  { year: "Founded", title: "A vision takes shape", text: "Global Developers is established with a commitment to quality-first real estate." },
  { year: "First Launch", title: "Our first residential community", text: "We deliver our first premium residential development." },
  { year: "Expansion", title: "Entering commercial real estate", text: "Our portfolio grows to include landmark commercial towers." },
  { year: "Today", title: "Building multiple cities", text: "Ongoing and upcoming developments across major cities." },
];

export const verifiedStats = () => stats.filter((s) => s.verified || SHOW_SAMPLE_CONTENT);

export const company = { ...companyBase, contact, socials };
