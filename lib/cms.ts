export type NavItem = { id: string; label: string; href: string };

export const site = {
  orgShort: "IDECN",
  orgName: "Indonesia Education & Cultural Network",
  tagline: "Connecting Indonesia ↔ U.S. through education, culture, and collaboration.",
  email: "hello@idecn.org",
};

export const navItems: NavItem[] = [
  { id: "about", label: "About", href: "#about" },
  { id: "programs", label: "Programs", href: "#programs" },
  { id: "portfolio", label: "Portfolio Event", href: "#portfolio" },
  { id: "partners", label: "Partners", href: "#partners" },
  { id: "get-involved", label: "Get Involved", href: "#get-involved" },
];

export const hero = {
  chips: ["Nonprofit (U.S.-based)", "Established 2024", "Indonesia ↔ U.S."],
  headingTop: "Indonesia Education &",
  headingGradient: "Cultural Network",
  subtitle:
    "A U.S.-based nonprofit dedicated to fostering cross-cultural understanding, educational opportunities, and community connections between Indonesia and the United States.",
  ctas: {
    primary: { label: "Get involved", href: "#get-involved" },
    proposal: { label: "Download proposal (PDF)", href: "/indonesia-on-the-creek-proposal.pdf" },
    portfolio: { label: "View portfolio event", href: "#portfolio" },
  },
};

export const about = {
  title: "Who we are",
  lead:
    "IDECN is a nonprofit network built to create meaningful bridges between Indonesia and the United States—through education pathways, cultural programming, and trusted partnerships.",
  purpose:
    "We build a collaborative ecosystem that supports students, educators, and professionals across borders—turning connections into outcomes.",
  audience:
    "Students, educators, cultural communities, and mission-aligned partners in Indonesia and the U.S.",
  atAGlance: {
    title: "At a glance",
    items: [
      { k: "Focus", v: "Education, Culture, Tech, Culinary" },
      { k: "Operating", v: "Since 2024 (U.S.-based nonprofit)" },
      { k: "Contact", v: site.email },
    ],
    cta: { label: "Talk to us", href: `mailto:${site.email}` },
  },
};

export const programs = {
  title: "Our Core Programs",
  subtitle: "Designed as repeatable playbooks—built to scale with the right partners.",
  cards: [
    {
      title: "Cultural Exchange",
      bullets: ["Annual cultural festivals", "Community showcases", "Language & heritage workshops"],
      tags: ["Culture", "Community", "Exchange"],
    },
    {
      title: "Academic Excellence",
      bullets: ["Mentorship & advising", "Scholarship enablement", "Research & collaboration support"],
      tags: ["Education", "Mentoring", "Research"],
    },
    {
      title: "Professional Network",
      bullets: ["Diaspora & alumni network", "Career talks & panels", "Partner-led opportunities"],
      tags: ["Network", "Career", "Partnership"],
    },
    {
      title: "Digital Innovation",
      bullets: ["Digital literacy initiatives", "Community tech projects", "Program ops enablement"],
      tags: ["Digital", "Innovation", "Operations"],
    },
  ],
};

export const portfolio = {
  eyebrow: "Proof of execution",
  title: "Portfolio Event",
  subtitle: "Ringkasan eksekusi yang jelas—hasil terukur, dokumentasi rapi, dan playbook siap dipakai untuk kolaborasi berikutnya.",
  featured: {
    name: "Indonesia Culinary Day on the Creek",
    date: "2024",
    location: "Washington, D.C., USA",
    summary:
      "A community-based cultural event celebrating Indonesian cuisine and cross-cultural connection—executed with partners and volunteers on the ground.",
    highlights: ["Community engagement", "Vendor collaboration", "Cultural showcase", "Partner-ready playbook"],
    ctaDownload: { label: "Download report", href: "/portfolio-report.pdf" },
    ctaSecondary: { label: "Discuss next event", href: `mailto:${site.email}` },
  },
};

export const partners = {
  title: "Partners",
  subtitle: "We collaborate with mission-aligned organizations to scale impact with clarity and trust.",
  cards: [
    { title: "Sponsors & Donors", desc: "Support programs and events with clear reporting, measurable outcomes, and strong brand alignment." },
    { title: "Universities & Schools", desc: "Co-create pathways for learning, exchange, mentorship, and applied collaboration across borders." },
    { title: "Community Organizations", desc: "Partner to deliver events and programs that strengthen local communities and cultural presence." },
  ],
};

export const getInvolved = {
  title: "Get involved",
  subtitle: "Choose the role that fits you—then we’ll guide the next steps.",
  cards: [
    { title: "Sponsor", subtitle: "Fund programs & events with clear deliverables." },
    { title: "Partner", subtitle: "Collaborate on education & cultural initiatives." },
    { title: "Volunteer", subtitle: "Join execution teams and community operations." },
  ],
  banner: {
    title: "Ready to collaborate?",
    desc: "Reach out and we’ll propose the best partnership path—sponsor, institution, or community program.",
    primary: { label: "Contact IDECN", href: `mailto:${site.email}` },
    secondary: { label: "Download proposal", href: "/indonesia-on-the-creek-proposal.pdf" },
  },
};
