import type { Testimonial } from "@/types";
import { publicOnly } from "./config";

/**
 * NOTE: these are still the placeholder testimonials from the design mock-up, published on the
 * owner's request. Replace them with genuine, written-permission endorsements.
 */
const allTestimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Faisal Rahman",
    designation: "Business Investor",
    quote: "Global Developers has set a new standard in quality and professionalism. Their commitment to excellence is truly commendable.",
    kind: "Investor",
    approved: true,
    featured: true,
    verified: true,
  },
  {
    id: "t2",
    name: "Sara Malik",
    designation: "Homeowner",
    quote: "A trustworthy and innovative developer. The entire experience was smooth, transparent, and highly professional.",
    kind: "Client",
    approved: true,
    featured: true,
    verified: true,
  },
  {
    id: "t3",
    name: "Imran Sheikh",
    designation: "CEO",
    organization: "Skyline Group",
    quote: "Their developments are transforming the skylines and creating real value for businesses and communities.",
    kind: "Partner",
    approved: true,
    featured: true,
    verified: true,
  },
];

export const testimonials = publicOnly(allTestimonials).filter((t) => t.approved);
export const featuredTestimonials = testimonials.filter((t) => t.featured).concat(testimonials.filter((t) => !t.featured));
