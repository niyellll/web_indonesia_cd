import { createClient, groq } from "next-sanity";

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
    orgName: "Indonesia Education & Cultural Network (IDECN)",
    tagline:
      "Fostering cross-cultural understanding, educational opportunities, and community connections between Indonesia and the U.S.",
    purpose:
      "Present IDECN clearly for donors, investors, and partners—so they can quickly understand the foundation and confidently support proposals and collaborations.",
    audience: ["Donors", "Investors", "Partners"],
    email: "hello@idecn.org",
    proposalUrl: "/indonesia-on-the-creek-proposal.pdf",
    themeNote: "Red–White–Blue + Batik identity (light proposal-style).",
  },
  programs: [
    {
      title: "Education & Scholarships",
      bullets: [
        "Scholarship guidance and support for Indonesian students in the U.S.",
        "Exchange programs and study tours for students and educators.",
        "Language learning programs (English & Indonesian).",
        "Internship connections to build professional experience.",
      ],
    },
    {
      title: "Cultural Exchange",
      bullets: [
        "Cultural festivals and events showcasing arts, music, dance, food, and traditions.",
        "Seminars/workshops to promote cross-cultural understanding and collaboration.",
      ],
    },
    {
      title: "Professional Networking",
      bullets: [
        "Mentorship and networking with professionals, alumni, and employers.",
        "Workshops on cross-cultural communication and international business.",
      ],
    },
    {
      title: "Community Support",
      bullets: [
        "Volunteer opportunities and community-led initiatives.",
        "Partnership programs with institutions and local organizations.",
      ],
    },
  ],
  events: [
    {
      title: "Indonesia Culinary Day on the Creek",
      dateText: "Saturday, August 2, 2025 • 11AM–4PM",
      location: "Carroll Creek Park • Downtown Frederick • Maryland, USA",
      summary:
        "A public celebration of Indonesian culture through food, products, performances, and community engagement—free to attend.",
      highlights: ["Food Bazaar", "Marketplace", "Exhibition", "Cultural Performances", "Interactive Art & Craft"],
      featured: true,
    },
  ],
  partners: [
    { name: "AACF", type: "Event Host / Community Partner" },
    { name: "Local Cultural & Community Organizations", type: "Collaboration Partners" },
  ],
};

const hasSanity =
  !!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID &&
  !!process.env.NEXT_PUBLIC_SANITY_DATASET;

const client = hasSanity
  ? createClient({
      projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
      dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
      apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2025-01-01",
      useCdn: true,
    })
  : null;

export async function getSite(): Promise<SiteSettings> {
  if (!client) return FALLBACK.site;
  try {
    const q = groq`*[_type=="siteSettings"][0]{
      orgName, tagline, purpose, audience, email, proposalUrl, themeNote
    }`;
    const data = await client.fetch(q);
    return data || FALLBACK.site;
  } catch {
    return FALLBACK.site;
  }
}

export async function getPrograms(): Promise<Program[]> {
  if (!client) return FALLBACK.programs;
  try {
    const q = groq`*[_type=="program"]|order(order asc){
      title, bullets
    }`;
    const data = await client.fetch(q);
    return (data && data.length ? data : FALLBACK.programs) as Program[];
  } catch {
    return FALLBACK.programs;
  }
}

export async function getEvents(): Promise<EventItem[]> {
  if (!client) return FALLBACK.events;
  try {
    const q = groq`*[_type=="event"]|order(order asc){
      title, dateText, location, summary, highlights, featured
    }`;
    const data = await client.fetch(q);
    return (data && data.length ? data : FALLBACK.events) as EventItem[];
  } catch {
    return FALLBACK.events;
  }
}

export async function getPartners(): Promise<Partner[]> {
  if (!client) return FALLBACK.partners;
  try {
    const q = groq`*[_type=="partner"]|order(order asc){
      name, type, website
    }`;
    const data = await client.fetch(q);
    return (data && data.length ? data : FALLBACK.partners) as Partner[];
  } catch {
    return FALLBACK.partners;
  }
}

