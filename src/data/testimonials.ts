import type { Testimonial } from "@/types";
import { images } from "./images";
import { publicOnly } from "./config";

/**
 * SAMPLE testimonials (verified: false) — fictional people from the design mock-up.
 * Only publish genuine, written-permission endorsements: set `approved` and `verified` to true.
 */
const allTestimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Faisal Rahman",
    designation: "Business Investor",
    portrait: images.people[0],
    quote: "Global Developers has set a new standard in quality and professionalism. Their commitment to excellence is truly commendable.",
    kind: "Investor",
    approved: true,
    featured: true,
    verified: false,
  },
  {
    id: "t2",
    name: "Sara Malik",
    designation: "Homeowner",
    portrait: images.people[1],
    quote: "A trustworthy and innovative developer. The entire experience was smooth, transparent, and highly professional.",
    kind: "Client",
    approved: true,
    featured: true,
    verified: false,
  },
  {
    id: "t3",
    name: "Imran Sheikh",
    designation: "CEO",
    organization: "Skyline Group",
    portrait: images.people[2],
    quote: "Their developments are transforming the skylines and creating real value for businesses and communities.",
    kind: "Partner",
    approved: true,
    featured: true,
    verified: false,
  },
];

export const testimonials = publicOnly(allTestimonials).filter((t) => t.approved);
export const featuredTestimonials = testimonials.filter((t) => t.featured).concat(testimonials.filter((t) => !t.featured));
