import type { Leader } from "@/types";
import { images } from "./images";
import { isPublic, publicOnly } from "./config";

/**
 * SAMPLE leadership (verified: false). The CEO name, portrait and message below are
 * placeholders from the design mock-up — replace with the real CEO's details.
 */
const sampleCeo: Leader = {
  id: "ceo",
  name: "Ahmed Khan",
  role: "Chief Executive Officer",
  portrait: images.ceo,
  bio: [
    "Our Chief Executive Officer leads Global Developers with a focus on quality, transparency and long-term value for every client and community we serve.",
    "Under this leadership, the company has grown its portfolio of residential and commercial developments while staying true to its founding principles.",
  ],
  message: [
    "At Global Developers, our vision is to create exceptional spaces that inspire, empower, and stand the test of time. We are committed to building more than just properties — we are building stronger communities and a brighter future for generations to come.",
  ],
  quote:
    "Our goal is to set new benchmarks in real estate development through innovation, integrity, and a people-first approach.",
  vision:
    "We see a future where every Global Developers address is a mark of trust — where families feel at home and businesses find room to grow.",
  achievements: [
    "Led the delivery of multiple residential and commercial developments",
    "Championed transparent, milestone-based reporting for every project",
    "Built a multidisciplinary team of architects, engineers and planners",
  ],
  verified: false,
};

const placeholderCeo: Leader = {
  id: "ceo",
  name: "Chief Executive Officer",
  role: "Global Developers",
  portrait: images.ceo,
  bio: ["Leadership profile coming soon."],
  message: ["A message from our leadership will be published here shortly."],
  quote: "Building landmarks. Creating legacies.",
  verified: true,
};

export const ceo: Leader = isPublic(sampleCeo) ? sampleCeo : placeholderCeo;

const allTeam: Leader[] = [
  {
    id: "l2",
    name: "Sana Qureshi",
    role: "Director of Projects",
    portrait: images.leaders[0],
    bio: ["Oversees design, engineering and on-site delivery across all developments."],
    verified: false,
  },
  {
    id: "l3",
    name: "Usman Tariq",
    role: "Director of Finance",
    portrait: images.leaders[1],
    bio: ["Leads financial planning, investor relations and project funding."],
    verified: false,
  },
];

export const team = publicOnly(allTeam);
