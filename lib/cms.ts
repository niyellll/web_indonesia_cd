export type Program = {
  title: string;
  subtitle: string;
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
    "A U.S.-based nonprofit dedicated to fostering cross-cultural understanding, educational opportunities, and community connections between Indonesia and the United States.",
  purpose:
    "Build credible public presence for donors, partners, and communities—plus proof-of-execution through repeatable programs and portfolio events.",
  audience: ["Donors", "Partners", "Schools", "Communities"],
  email: "contact@idecn.org",
  proposalUrl: "/indonesia-on-the-creek-proposal.pdf",
  themeNote: "Red • White • Blue + Batik pattern",
};

const PROGRAMS: Program[] = [
  {
    title: "Educational Programs & Scholarships",
    subtitle: "Practical pathways to study, mentor, and grow across borders.",
    bullets: [
      "Scholarship guidance for Indonesian students pursuing U.S. education",
      "Exchange programs for students and educators",
      "Language learning support (English & Indonesian)",
      "Mentorship and internship connections",
    ],
  },
  {
    title: "Cultural Exchange & Awareness",
    subtitle: "Events people actually enjoy—built to be repeatable and sponsor-ready.",
    bullets: [
      "Cultural events & festivals showcasing Indonesian arts, food, and traditions",
      "Cross-cultural dialogues: seminars, workshops, discussions",
      "Community-first storytelling and cultural literacy",
    ],
  },
  {
    title: "Professional Networking",
    subtitle: "Bridge students, alumni, professionals, and partners with clarity.",
    bullets: [
      "Network bridges between students, alumni, professionals, and partners",
      "Workshops on collaboration and leadership across cultures",
      "Partner pipelines for community projects and sponsorships",
    ],
  },
  {
    title: "Community Support",
    subtitle: "Local execution with a global connection—clear roles & outcomes.",
    bullets: [
      "Volunteer programs and community-led initiatives",
      "Partnership opportunities with nonprofits, universities, and sponsors",
      "Repeatable playbooks for events and program delivery",
    ],
  },
];

const EVENTS: EventItem[] = [
  {
    title: "Indonesia Culinary Day on the Creek (Portfolio Event)",
    dateText: "Saturday, August 2, 2025 • 11AM – 4PM",
    location: "Carroll Creek Park • Downtown Frederick • Maryland, USA",
    summary:
      "A public celebration of Indonesian culture—presented as a portfolio highlight to demonstrate IDECN’s capability to execute impactful community programs.",
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
