import type { Leader } from "@/types";
import { images } from "./images";
import { isPublic, publicOnly } from "./config";

type Ceo = Leader & { portrait: string };

/**
 * CEO name and portrait are real. The bio, message, quote and achievements below are still
 * SAMPLE copy (verified: false) from the design mock-up — replace with the CEO's own words.
 */
const sampleCeo: Ceo = {
  id: "ceo",
  name: "Mian Muhammad Arshad",
  role: "Chief Executive Officer",
  portrait: images.ceo,
  bio: [
    "Over two decades of experience leading residential and commercial developments across Pakistan.",
  ],
  message: [
    "At Global Developers, our vision is to create exceptional spaces that inspire, empower, and stand the test of time. We are committed to building more than just properties — we are building stronger communities and a brighter future for generations to come.",
  ],
  leadershipMessage:
    "At Global Developers, our vision is to create exceptional spaces that inspire, empower, and stand the test of time.",
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

const placeholderCeo: Ceo = {
  id: "ceo",
  name: "Mian Muhammad Arshad",
  role: "Chief Executive Officer",
  portrait: images.ceo,
  bio: ["Leadership profile coming soon."],
  message: ["A message from our leadership will be published here shortly."],
  quote: "Building landmarks. Creating legacies.",
  verified: true,
};

export const ceo: Ceo = isPublic(sampleCeo) ? sampleCeo : placeholderCeo;

const allTeam: Leader[] = [
  {
    id: "l2",
    name: "Mian Muhammad Farooq",
    role: "COO",
    bio: ["Leads architecture and master planning with a focus on sustainable, human-centred spaces."],
    verified: true,
  },
  {
    id: "l3",
    name: "Mian Muhammad Usman",
    role: "Director, Construction",
    bio: ["Oversees delivery, quality control and safety across every Global Developers site."],
    verified: true,
  },
  {
    id: "l4",
    name: "Muhammad Saad",
    role: "Managing Director",
    bio: ["Drives client relations and business development, keeping every buyer and partner informed at each step."],
    verified: true,
  },
];

export const team = publicOnly(allTeam);
