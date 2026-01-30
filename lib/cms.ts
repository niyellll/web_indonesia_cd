// lib/cms.ts  (NO SANITY / NO CMS MODE)

export type Program = { title: string; bullets: string[] };

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
<<<<<<< HEAD
=======

  heroTitle?: string;
  heroSubtitle?: string;

>>>>>>> 25c2abe (Fix TS: add heroTitle to SiteSettings)
  purpose: string;
  audience: string[];
  email: string;
  proposalUrl: string;
  themeNote: string;
};

<<<<<<< HEAD
// ====== ENV (Sanity) ======
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2025-01-01";

const hasSanity = Boolean(projectId && dataset);

// ✅ Jangan bikin client kalau ENV belum ada (biar build gak gagal)
const client = hasSanity
  ? createClient({
      projectId: projectId!,
      dataset: dataset!,
      apiVersion,
      useCdn: true,
      perspective: "published",
    })
  : null;

async function safeFetch<T>(
  query: string,
  params: Record<string, any> | undefined,
  fallback: T
): Promise<T> {
  if (!client) return fallback;
  try {
    return await client.fetch<T>(query, params);
  } catch {
    return fallback;
  }
}

// ====== FALLBACK CONTENT (dipakai kalau Sanity belum siap) ======
const FALLBACK = {
  site: {
    orgName: "IDECN",
    tagline:
      "A U.S.-based nonprofit dedicated to fostering cross-cultural understanding, educational opportunities, and community connections between Indonesia and the United States.",
    purpose:
      "We connect people, schools, and communities through education, culture, and collaborative programs between Indonesia and the U.S.",
    audience: ["Students", "Educators", "Communities", "Partners", "Donors"],
    email: "contact@idecn.org",
    proposalUrl: "/indonesia-on-the-creek-proposal.pdf",
    themeNote: "Indonesia ↔ U.S.",
  } as SiteSettings,
  programs: [
    {
      title: "Education Exchange",
      bullets: ["Mentorship", "Workshops", "Campus visits", "Scholarship guidance"],
    },
    {
      title: "Cultural Programs",
      bullets: ["Community events", "Culinary day", "Arts & performance", "Storytelling"],
    },
  ] as Program[],
  events: [
    {
      title: "Portfolio Event — Culinary Day",
      dateText: "2024",
      location: "U.S.",
      summary:
        "A signature public event that demonstrates IDECN’s capability to execute cross-cultural programs with partners.",
      highlights: ["Multi-stakeholder", "Repeatable format", "Scalable event playbook"],
      featured: true,
    },
  ] as EventItem[],
  partners: [
    { name: "Community Partner", type: "Nonprofit", website: "" },
    { name: "Education Partner", type: "School/University", website: "" },
  ] as Partner[],
};

// ====== GROQ QUERIES ======
const qSite = groq`*[_type == "siteSettings"][0]{
  orgName, tagline, purpose, audience, email, proposalUrl, themeNote
}`;

const qPrograms = groq`*[_type == "program"]|order(_createdAt desc){
  title, bullets
}`;

const qEvents = groq`*[_type == "event"]|order(featured desc, _createdAt desc){
  title, dateText, location, summary, highlights, featured
}`;

const qPartners = groq`*[_type == "partner"]|order(_createdAt desc){
  name, type, website
}`;

// ====== PUBLIC API ======
export async function getSite() {
  return safeFetch<SiteSettings>(qSite, undefined, FALLBACK.site);
}

export async function getPrograms() {
  return safeFetch<Program[]>(qPrograms, undefined, FALLBACK.programs);
}

export async function getEvents() {
  return safeFetch<EventItem[]>(qEvents, undefined, FALLBACK.events);
}

export async function getPartners() {
  return safeFetch<Partner[]>(qPartners, undefined, FALLBACK.partners);
=======

const SITE: SiteSettings = {
  orgName: "IDECN",
  tagline: "Indonesia ↔ U.S.",
  heroTitle: "Indonesia Education & Cultural Network",
  heroSubtitle:
    "A U.S.-based nonprofit dedicated to fostering cross-cultural understanding, educational opportunities, and community connections between Indonesia and the United States.",
  purpose:
    "Provide a clear, credible public profile for donors, investors, and partners—plus a portfolio of executed events as proof of capability.",
  audience: ["Donors", "Investors", "Partners"],
  email: "contact@idecn.org",
  proposalUrl: "/indonesia-on-the-creek-proposal.pdf",
  themeNote: "Red • White • Blue + Batik background",
};

const PROGRAMS: Program[] = [
  {
    title: "Educational Programs & Scholarships",
    bullets: [
      "Scholarship guidance for Indonesian students pursuing U.S. education",
      "Exchange programs for students and educators",
      "Language learning support (English & Indonesian)",
      "Internship connections and mentorship",
    ],
  },
  {
    title: "Cultural Exchange & Awareness",
    bullets: [
      "Cultural events & festivals showcasing Indonesian arts, food, and traditions",
      "Cross-cultural dialogues: seminars, workshops, discussions",
    ],
  },
  {
    title: "Professional Development & Networking",
    bullets: [
      "Mentorship + networking between students, alumni, and professionals",
      "Workshops on cross-cultural communication and collaboration",
    ],
  },
  {
    title: "Community Support",
    bullets: [
      "Volunteer programs and community-led initiatives",
      "Partnership opportunities with nonprofits, universities, and sponsors",
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
>>>>>>> 25c2abe (Fix TS: add heroTitle to SiteSettings)
}
