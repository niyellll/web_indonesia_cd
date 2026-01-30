// lib/cms.ts
import { createClient, groq } from "next-sanity";

export type Program = {
  title: string;
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

export type Partner = {
  name: string;
  type: string;
  website?: string;
};

export type SiteSettings = {
  orgName: string;
  tagline: string;

  // ✅ ditambah biar app/page.tsx bisa pakai site.heroTitle
  heroTitle?: string;
  heroSubtitle?: string;

  purpose: string;
  audience: string[];
  email: string;
  proposalUrl: string;
  themeNote: string;
};

const FALLBACK: {
  site: SiteSettings;
  programs: Program[];
  events: EventItem[];
  partners: Partner[];
} = {
  site: {
    orgName: "IDECN",
    tagline: "Indonesia ↔ U.S.",
    heroTitle: "Indonesia Education & Cultural Network",
    heroSubtitle:
      "A U.S.-based nonprofit dedicated to fostering cross-cultural understanding, educational opportunities, and community connections between Indonesia and the United States.",
    purpose:
      "Strengthen education and cultural exchange between Indonesia and the U.S. through programs, partnerships, and community-driven events.",
    audience: ["Students", "Educators", "Diaspora", "Partners", "Donors"],
    email: "contact@idecn.org",
    proposalUrl: "/indonesia-on-the-creek-proposal.pdf",
    themeNote: "Red • White • Blue — Indonesia ↔ U.S.",
  },
  programs: [
    {
      title: "Scholarship & Study Guidance",
      bullets: [
        "Mentorship for U.S. admissions",
        "Essay & CV clinics",
        "Webinars with alumni",
      ],
    },
    {
      title: "Cultural Exchange Events",
      bullets: ["Culinary Day", "Film & discussion nights", "Community showcases"],
    },
    {
      title: "Partnership Programs",
      bullets: ["University collaborations", "NGO & embassy coordination", "Sponsors"],
    },
  ],
  events: [
    {
      title: "Culinary Day (Portfolio Highlight)",
      dateText: "2026",
      location: "U.S. — Community Venue",
      summary:
        "A signature community event that demonstrates IDECN’s capability to execute impactful public programs.",
      highlights: ["Repeatable format", "Multi-stakeholder execution", "Scalable annually"],
      featured: true,
    },
  ],
  partners: [
    { name: "Universities", type: "Education" },
    { name: "Diaspora Communities", type: "Community" },
    { name: "Sponsors & Donors", type: "Funding" },
  ],
};

const hasSanityEnv =
  !!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID &&
  !!process.env.NEXT_PUBLIC_SANITY_DATASET &&
  !!process.env.NEXT_PUBLIC_SANITY_API_VERSION;

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "",
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2025-01-01",
  useCdn: true,
});

export async function getSite(): Promise<SiteSettings | null> {
  if (!hasSanityEnv) return FALLBACK.site;

  const q = groq`*[_type=="siteSettings"][0]{
    orgName,
    tagline,
    heroTitle,
    heroSubtitle,
    purpose,
    audience,
    email,
    proposalUrl,
    themeNote
  }`;

  const data = await client.fetch<SiteSettings | null>(q);
  return data || FALLBACK.site;
}

export async function getPrograms(): Promise<Program[]> {
  if (!hasSanityEnv) return FALLBACK.programs;

  const q = groq`*[_type=="program"]|order(orderRank asc, _createdAt asc){
    title,
    bullets
  }`;

  const data = await client.fetch<Program[]>(q);
  return data?.length ? data : FALLBACK.programs;
}

export async function getEvents(): Promise<EventItem[]> {
  if (!hasSanityEnv) return FALLBACK.events;

  const q = groq`*[_type=="event"]|order(featured desc, _createdAt desc){
    title,
    dateText,
    location,
    summary,
    highlights,
    featured
  }`;

  const data = await client.fetch<EventItem[]>(q);
  return data?.length ? data : FALLBACK.events;
}

export async function getPartners(): Promise<Partner[]> {
  if (!hasSanityEnv) return FALLBACK.partners;

  const q = groq`*[_type=="partner"]|order(_createdAt asc){
    name,
    type,
    website
  }`;

  const data = await client.fetch<Partner[]>(q);
  return data?.length ? data : FALLBACK.partners;
}
