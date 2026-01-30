// lib/cms.ts (STATIC CONTENT — NO SANITY)

export type Program = {
  title: string;
  desc?: string;
  bullets: string[];
};

export type EventItem = {
  title: string;
  dateText: string;
  location: string;
  summary: string;
  highlights: string[];
  featured?: boolean;
};

export type Partner = { name: string; type: string; website?: string };

export type SiteSettings = {
  orgName: string;
  tagline: string;
  heroTitle: string;
  heroSubtitle: string;
  purpose: string;
  audience: string[];
  email: string;
  proposalUrl: string;
  themeNote: string;
};

const SITE: SiteSettings = {
  orgName: "IDECN",
  tagline: "Indonesia ↔ U.S.",
  heroTitle: "Indonesia Education & Cultural Network",
  heroSubtitle:
    "A U.S.-based nonprofit building meaningful bridges between Indonesia and the United States—through education pathways, cultural exchange, and community programs people actually enjoy.",
  purpose:
    "Build a credible public profile for donors, partners, and communities—with proof of execution through real portfolio events.",
  audience: ["Donors", "Partners", "Educators", "Students", "Communities"],
  email: "contact@idecn.org",
  proposalUrl: "/indonesia-on-the-creek-proposal.pdf",
  themeNote: "Red • White • Blue + Batik background",
};

const PROGRAMS: Program[] = [
  {
    title: "Educational Programs & Scholarships",
    desc: "Practical pathways for study, mentorship, and opportunity.",
    bullets: [
      "Scholarship guidance for Indonesian students pursuing U.S. education",
      "Exchange programs for students and educators",
      "Language learning support (English & Indonesian)",
      "Internship connections and mentorship",
    ],
  },
  {
    title: "Cultural Exchange & Awareness",
    desc: "Culture-forward events that feel modern, warm, and inclusive.",
    bullets: [
      "Cultural festivals showcasing Indonesian arts, food, and traditions",
      "Cross-cultural dialogues: seminars, workshops, discussions",
      "Community-first programming that’s repeatable and scalable",
    ],
  },
  {
    title: "Professional Development & Networking",
    desc: "Helping people connect to mentors, peers, and real-world networks.",
    bullets: [
      "Mentorship + networking between students, alumni, and professionals",
      "Workshops on cross-cultural collaboration",
      "Partner-driven opportunities and shared initiatives",
    ],
  },
  {
    title: "Community Support",
    desc: "Local execution with a global bridge—Indonesia ↔ U.S.",
    bullets: [
      "Volunteer programs and community-led initiatives",
      "Partnership opportunities with nonprofits, universities, and sponsors",
      "Event playbooks for reliable execution",
    ],
  },
];

const EVENTS: EventItem[] = [
  {
    title: "Indonesia Culinary Day on the Creek (Portfolio Event)",
    dateText: "Saturday, August 2, 2025 • 11AM – 4PM",
    location: "Carroll Creek Park • Downtown Frederick • Maryland, USA",
    summary:
      "A public celebration of Indonesian culture—positioned as proof-of-execution to demonstrate IDECN’s capability to deliver impactful community programs with partners.",
    highlights: ["Food Bazaar", "Marketplace", "Performances", "Exhibition", "Art & Craft"],
    featured: true,
  },
];

const PARTNERS: Partner[] = [
  { name: "Sponsors & Donors", type: "Funding" },
  { name: "Universities & Schools", type: "Education" },
  { name: "Community Organizations", type: "Community" },
];

export async function getSite(): Promise<SiteSettings> {
  return SITE;
}

export async function getPrograms(): Promise<Program[]> {
  return PROGRAMS;
}

export async function getEvents(): Promise<EventItem[]> {
  return EVENTS;
}

export async function getPartners(): Promise<Partner[]> {
  return PARTNERS;
}
