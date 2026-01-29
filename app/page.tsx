import Link from "next/link";

type Item = { title: string; desc: string };
type PriceCard = { title: string; price: string; note: string };
type Tier = { name: string; price: string; tagline: string; perks: string[] };

const EVENT = {
  title: "Indonesia Culinary Day on the Creek",
  date: "Saturday, August 2, 2025",
  time: "11:00 AM – 4:00 PM",
  location: "Carroll Creek Park, Downtown Frederick, Maryland, USA",
  hosts: "Hosted by AACF & IDECN • Part of the annual Creek Festival",
  ctaPrimary: { label: "Become a Sponsor / Vendor", href: "#sponsor" },
  ctaSecondary: { label: "Contact Committee", href: "#contact" },
  proposalHref: "/docs/indonesia-on-the-creek-proposal.pdf", // taruh PDF ini di /public/docs/
};

const IDECN = {
  name: "Indonesia Education & Cultural Network (IDECN)",
  who: "A nonprofit organization based in the United States dedicated to fostering cross-cultural understanding, educational opportunities, and community connections between Indonesia and the U.S.",
  established: "Established in 2024, IDECN serves as a platform for collaboration between Indonesian and American communities.",
  mission:
    "Enhance mutual understanding between Indonesia and the United States by providing resources, support, and opportunities for students, educators, professionals, and cultural enthusiasts.",
  pillars: [
    {
      title: "Education & Scholarships",
      desc: "Scholarships guidance, exchange pathways, language learning, and internship connections.",
    },
    {
      title: "Cultural Exchange",
      desc: "Festivals, arts, food, traditions, and cross-cultural dialogues through workshops and seminars.",
    },
    {
      title: "Professional Networking",
      desc: "Mentorship, career workshops, and networking that connects students, alumni, and employers.",
    },
    {
      title: "Community Support",
      desc: "Volunteer and partner programs that strengthen inclusive local communities.",
    },
  ] satisfies Item[],
};

const EVENT_HIGHLIGHTS: Item[] = [
  {
    title: "Food Bazaar",
    desc: "Curated Indonesian dishes and culinary storytelling—favorites like rendang, satay, martabak, and more.",
  },
  {
    title: "Marketplace",
    desc: "Indonesian snacks, spices, crafts, jewelry, and products from diaspora vendors.",
  },
  {
    title: "Product Exhibition",
    desc: "Batik, traditional fashion, home décor, and showcases from Indonesian-owned businesses.",
  },
  {
    title: "Cultural Performances",
    desc: "Traditional & contemporary performances; interactive experiences like angklung play-alongs and introductions.",
  },
  {
    title: "Interactive Art & Craft",
    desc: "Hands-on activities: batik painting, puppet-making, crafts, and live demos.",
  },
];

const VENDOR_OPTIONS: PriceCard[] = [
  { title: "Exhibitors & Marketplace Vendors", price: "$200", note: "Standard space 10’×10’" },
  { title: "Food Vendors", price: "$300", note: "Standard space 10’×10’" },
  { title: "Food Vendors (Premium)", price: "$500", note: "Premium 10’×10’ (near stage)" },
  { title: "Art & Craft", price: "—", note: "Hands-on crafts & demos (contact committee)" },
  { title: "Performers", price: "—", note: "Traditional & contemporary performers welcome" },
];

const SPONSOR_TIERS: Tier[] = [
  {
    name: "Gold",
    price: "$8,000",
    tagline: "Top sponsor visibility + speaking time.",
    perks: [
      "Presentation on stage (5 minutes)",
      "Inclusion in press release (Featured Sponsor)",
      "Featured story on social media (≈30 sec)",
      "Top sponsor listing + hyperlink on website",
      "VIP networking access",
      "Premium booth space",
      "Prominent logo placement on promo materials",
      "Special mention by MC",
      "Large placement on banner",
      "Program book: Double full-page ad",
    ],
  },
  {
    name: "Silver",
    price: "$5,000",
    tagline: "Strong visibility + networking access.",
    perks: [
      "Brief greeting on stage (1 minute)",
      "Inclusion in press release (Mentioned sponsor)",
      "Featured story on social media (≈15 sec)",
      "Top sponsor listing + hyperlink on website",
      "VIP networking access",
      "Standard booth space",
      "Secondary logo placement on promo materials",
      "Special mention by MC",
      "Medium placement on banner",
      "Program book: Full-page ad",
    ],
  },
  {
    name: "Bronze",
    price: "$3,000",
    tagline: "Community supporter visibility.",
    perks: [
      "Listed under sponsor",
      "Shared table (as available)",
      "Logo listed under sponsor on materials",
      "Special mention by MC",
      "Name only on banner",
      "Program book: Half-page ad",
    ],
  },
];

const PROGRAM_BOOK_ADS: { title: string; price: string }[] = [
  { title: "Program Book Ad — Full Page", price: "$500" },
  { title: "Program Book Ad — Half Page", price: "$300" },
  { title: "Program Book Ad — Quarter Page", price: "$200" },
];

const CONTACT = {
  committee: [
    { name: "Wati Soetojo", role: "Committee", phone: "+1 240 483 6113", tel: "tel:+12404836113" },
    { name: "Haris Koentjoro", role: "Committee", phone: "+1 443 570 9509", tel: "tel:+14435709509" },
  ],
  // ganti email resmi idecn kamu:
  email: "hello@idecn.org",
};

function Pill({ title, desc }: Item) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-white/75 leading-relaxed">{desc}</p>
    </div>
  );
}

function Price({ title, price, note }: PriceCard) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h4 className="font-semibold">{title}</h4>
          <p className="mt-2 text-sm text-white/70">{note}</p>
        </div>
        <div className="text-right">
          <p className="text-2xl font-semibold">{price}</p>
        </div>
      </div>
    </div>
  );
}

function TierCard({ t }: { t: Tier }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <div className="flex items-baseline justify-between gap-3">
        <h4 className="text-lg font-semibold">{t.name}</h4>
        <p className="text-2xl font-semibold">{t.price}</p>
      </div>
      <p className="mt-2 text-sm text-white/70">{t.tagline}</p>
      <ul className="mt-4 space-y-2 text-sm text-white/75">
        {t.perks.map((p) => (
          <li key={p} className="flex gap-2">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-300/80" />
            <span>{p}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-[#070A12] text-white">
      {/* Top glow */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-24 left-1/2 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-orange-500/10 blur-3xl" />
        <div className="absolute top-40 right-[-120px] h-[420px] w-[520px] rounded-full bg-emerald-400/10 blur-3xl" />
      </div>

      {/* Navbar */}
      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#070A12]/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
          <Link href="/" className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-2xl border border-white/10 bg-gradient-to-br from-orange-400/70 to-orange-600/20" />
            <div className="leading-tight">
              <p className="text-sm font-semibold">IDECN</p>
              <p className="text-xs text-white/60 -mt-0.5">Indonesia ↔ U.S.</p>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-2 md:flex">
            <a className="rounded-xl px-3 py-2 text-sm text-white/75 hover:bg-white/5 hover:text-white" href="#about">
              About
            </a>
            <a className="rounded-xl px-3 py-2 text-sm text-white/75 hover:bg-white/5 hover:text-white" href="#programs">
              Programs
            </a>
            <a className="rounded-xl px-3 py-2 text-sm text-white/75 hover:bg-white/5 hover:text-white" href="#event">
              2025 Event
            </a>
            <a className="rounded-xl px-3 py-2 text-sm text-white/75 hover:bg-white/5 hover:text-white" href="#sponsor">
              Sponsor/Vendor
            </a>
            <a className="rounded-xl px-3 py-2 text-sm text-white/75 hover:bg-white/5 hover:text-white" href="#contact">
              Contact
            </a>
            <a
              className="ml-2 inline-flex items-center justify-center rounded-xl bg-orange-500 px-4 py-2 text-sm font-semibold text-white hover:bg-orange-400"
              href="#sponsor"
            >
              Get involved
            </a>
          </nav>

          {/* Mobile nav using <details> (no JS) */}
          <details className="md:hidden">
            <summary className="list-none rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/80">
              Menu
            </summary>
            <div className="mt-2 grid gap-2 rounded-2xl border border-white/10 bg-[#070A12]/95 p-3">
              {[
                ["About", "#about"],
                ["Programs", "#programs"],
                ["2025 Event", "#event"],
                ["Sponsor/Vendor", "#sponsor"],
                ["Contact", "#contact"],
              ].map(([label, href]) => (
                <a
                  key={href}
                  href={href}
                  className="rounded-xl px-3 py-2 text-sm text-white/80 hover:bg-white/5 hover:text-white"
                >
                  {label}
                </a>
              ))}
              <a
                href="#sponsor"
                className="mt-1 inline-flex items-center justify-center rounded-xl bg-orange-500 px-4 py-2 text-sm font-semibold hover:bg-orange-400"
              >
                Get involved
              </a>
            </div>
          </details>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/75">
              Nonprofit • Education • Culture • Community
              <span className="ml-1 rounded-full bg-orange-400/20 px-2 py-0.5 text-orange-200">
                AACF × IDECN
              </span>
            </div>

            <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">
              {IDECN.name}
            </h1>

            <p className="mt-4 text-white/75 sm:text-lg leading-relaxed">
              {IDECN.who}
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={EVENT.ctaPrimary.href}
                className="inline-flex items-center justify-center rounded-xl bg-orange-500 px-5 py-2.5 text-sm font-semibold hover:bg-orange-400"
              >
                {EVENT.ctaPrimary.label}
              </a>
              <a
                href={EVENT.ctaSecondary.href}
                className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white/90 hover:bg-white/10"
              >
                {EVENT.ctaSecondary.label}
              </a>
              <a
                href={EVENT.proposalHref}
                className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white/90 hover:bg-white/10"
              >
                Download Proposal (PDF)
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-2 text-xs text-white/60">
              {["Education", "Cultural Exchange", "Networking", "Community Support"].map((t) => (
                <span key={t} className="rounded-lg border border-white/10 bg-white/5 px-2 py-1">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Event Card */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_18px_60px_rgba(0,0,0,0.35)] backdrop-blur">
              <p className="text-xs uppercase tracking-wider text-white/60">Featured Event</p>
              <h2 className="mt-2 text-xl font-semibold">{EVENT.title}</h2>
              <p className="mt-2 text-sm text-white/70">{EVENT.hosts}</p>

              <div className="mt-5 space-y-3 text-sm text-white/80">
                <div className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-orange-300/80" />
                  <div>
                    <p className="font-semibold">{EVENT.date}</p>
                    <p className="text-white/70">{EVENT.time}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-orange-300/80" />
                  <p className="text-white/80">{EVENT.location}</p>
                </div>
              </div>

              <div className="mt-6 border-t border-white/10 pt-5">
                <p className="text-sm text-white/75">
                  Highlights: Food Bazaar • Marketplace • Exhibition • Performances • Art & Craft
                </p>
                <a
                  href="#event"
                  className="mt-4 inline-flex w-full items-center justify-center rounded-xl bg-orange-500 px-4 py-2.5 text-sm font-semibold hover:bg-orange-400"
                >
                  View event details
                </a>
              </div>

              <p className="mt-4 text-xs text-white/55">
                *Upload the PDF to: <span className="rounded bg-white/10 px-2 py-1">/public/docs/</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-5">
            <p className="text-xs uppercase tracking-wider text-white/60">About IDECN</p>
            <h2 className="mt-2 text-2xl font-semibold sm:text-3xl">
              Building long-term Indonesia–U.S. connections
            </h2>
            <p className="mt-4 text-sm text-white/75 leading-relaxed">{IDECN.established}</p>
            <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-sm text-white/80 leading-relaxed">
                <span className="font-semibold text-white">Mission:</span> {IDECN.mission}
              </p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="grid gap-6 md:grid-cols-2">
              {IDECN.pillars.map((p) => (
                <Pill key={p.title} title={p.title} desc={p.desc} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section id="programs" className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <p className="text-xs uppercase tracking-wider text-white/60">Programs</p>
        <h2 className="mt-2 text-2xl font-semibold sm:text-3xl">
          Practical pathways for students, professionals, and communities
        </h2>
        <p className="mt-4 max-w-3xl text-sm text-white/75 leading-relaxed">
          IDECN programs focus on education, cultural exchange, professional development, and community support—designed to be inclusive, community-led, and impact-oriented.
        </p>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {[
            {
              title: "Educational Programs & Scholarships",
              bullets: [
                "Scholarships guidance for Indonesian students studying in the U.S.",
                "Exchange programs and study tours for students and educators.",
                "Language learning programs (English & Indonesian).",
                "Internship connections to build professional experience.",
              ],
            },
            {
              title: "Cultural Exchange & Awareness",
              bullets: [
                "Cultural events and festivals (arts, music, dance, food, traditions).",
                "Cross-cultural dialogues: seminars, workshops, and discussions.",
                "Community collaboration with local institutions and organizations.",
              ],
            },
            {
              title: "Professional Development & Networking",
              bullets: [
                "Mentorship and networking with professionals, alumni, and employers.",
                "Workshops on cross-cultural communication and international business.",
                "Career growth support and community-led opportunities.",
              ],
            },
          ].map((c) => (
            <div key={c.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-lg font-semibold">{c.title}</h3>
              <ul className="mt-4 space-y-2 text-sm text-white/75">
                {c.bullets.map((b) => (
                  <li key={b} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-300/80" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Event */}
      <section id="event" className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <p className="text-xs uppercase tracking-wider text-white/60">2025 Event</p>
        <h2 className="mt-2 text-2xl font-semibold sm:text-3xl">
          {EVENT.title}
        </h2>
        <p className="mt-4 max-w-3xl text-sm text-white/75 leading-relaxed">
          A vibrant public celebration of Indonesian culture through food, products, art, performances, and community engagement—open to the public and free to attend.
        </p>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 lg:col-span-1">
            <h3 className="text-lg font-semibold">When & where</h3>
            <div className="mt-4 space-y-3 text-sm text-white/80">
              <p>
                <span className="font-semibold text-white">Date:</span> {EVENT.date}
              </p>
              <p>
                <span className="font-semibold text-white">Time:</span> {EVENT.time}
              </p>
              <p>
                <span className="font-semibold text-white">Venue:</span> {EVENT.location}
              </p>
              <p className="text-white/70">{EVENT.hosts}</p>
            </div>

            <a
              href={EVENT.proposalHref}
              className="mt-6 inline-flex w-full items-center justify-center rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-sm font-semibold hover:bg-white/10"
            >
              Download Proposal (PDF)
            </a>
          </div>

          <div className="grid gap-6 lg:col-span-2 md:grid-cols-2">
            {EVENT_HIGHLIGHTS.map((h) => (
              <div key={h.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h3 className="text-lg font-semibold">{h.title}</h3>
                <p className="mt-2 text-sm text-white/75 leading-relaxed">{h.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6">
          <h3 className="text-lg font-semibold">Target audience</h3>
          <p className="mt-2 text-sm text-white/75 leading-relaxed">
            Indonesian diaspora and international communities in the DMV area; local and regional residents; general U.S. audiences curious about Indonesian heritage; nonprofits, cultural institutions, entrepreneurs, and media covering arts, food, diversity, and community.
          </p>
        </div>
      </section>

      {/* Sponsor / Vendor */}
      <section id="sponsor" className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <p className="text-xs uppercase tracking-wider text-white/60">Sponsor & Vendor</p>
        <h2 className="mt-2 text-2xl font-semibold sm:text-3xl">
          Support the festival — and gain visibility
        </h2>
        <p className="mt-4 max-w-3xl text-sm text-white/75 leading-relaxed">
          Sponsor packages and vendor opportunities help make the event possible while giving your brand meaningful community reach.
        </p>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {SPONSOR_TIERS.map((t) => (
            <TierCard key={t.name} t={t} />
          ))}
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-lg font-semibold">Vendor options</h3>
            <p className="mt-2 text-sm text-white/75">
              Outdoor setup notes: standard vendors may need to bring tent/tables/chairs. Premium spaces are under a tent near the stage & audience.
            </p>
            <div className="mt-5 grid gap-4">
              {VENDOR_OPTIONS.map((v) => (
                <Price key={v.title} title={v.title} price={v.price} note={v.note} />
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-lg font-semibold">Program book ads</h3>
            <p className="mt-2 text-sm text-white/75">
              Promote your organization in the official program book.
            </p>
            <div className="mt-5 space-y-3">
              {PROGRAM_BOOK_ADS.map((a) => (
                <div
                  key={a.title}
                  className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3"
                >
                  <p className="text-sm text-white/80">{a.title}</p>
                  <p className="text-sm font-semibold">{a.price}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 border-t border-white/10 pt-5">
              <a
                href="#contact"
                className="inline-flex w-full items-center justify-center rounded-xl bg-orange-500 px-4 py-2.5 text-sm font-semibold hover:bg-orange-400"
              >
                Ask availability / submit interest
              </a>
              <p className="mt-3 text-xs text-white/55">
                We’ll confirm slots and any special requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <p className="text-xs uppercase tracking-wider text-white/60">Contact</p>
        <h2 className="mt-2 text-2xl font-semibold sm:text-3xl">
          Let’s collaborate
        </h2>
        <p className="mt-4 max-w-3xl text-sm text-white/75 leading-relaxed">
          For sponsorship, vending, performances, volunteering, or partnerships—reach out to the committee.
        </p>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-lg font-semibold">Committee contacts</h3>
            <div className="mt-4 space-y-3">
              {CONTACT.committee.map((c) => (
                <a
                  key={c.phone}
                  href={c.tel}
                  className="flex items-center justify-between gap-4 rounded-xl border border-white/10 bg-white/5 px-4 py-3 hover:bg-white/10"
                >
                  <div>
                    <p className="text-sm font-semibold">
                      {c.name} <span className="text-white/60 font-normal">• {c.role}</span>
                    </p>
                    <p className="text-sm text-white/70">{c.phone}</p>
                  </div>
                  <span className="rounded-lg border border-white/10 bg-white/5 px-2 py-1 text-xs text-white/70">
                    Call
                  </span>
                </a>
              ))}
            </div>

            <div className="mt-6 border-t border-white/10 pt-5">
              <p className="text-sm text-white/75">
                Email (update with official):
              </p>
              <a
                className="mt-3 inline-flex w-full items-center justify-center rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-sm font-semibold hover:bg-white/10"
                href={`mailto:${CONTACT.email}`}
              >
                {CONTACT.email}
              </a>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-lg font-semibold">Quick checklist</h3>
            <ul className="mt-4 space-y-2 text-sm text-white/75">
              {[
                "Upload the event proposal PDF to /public/docs/ and keep the link working.",
                "Add IDECN + AACF logos to /public/ and place them in the header.",
                "Replace email + social links with official accounts.",
                "Add sponsor logos section after confirmation.",
              ].map((x) => (
                <li key={x} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-300/80" />
                  <span>{x}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 border-t border-white/10 pt-5">
              <p className="text-xs text-white/55">
                Note: proposal link currently points to{" "}
                <span className="rounded bg-white/10 px-2 py-1">{EVENT.proposalHref}</span>.
                Taruh file PDF kamu di folder <span className="rounded bg-white/10 px-2 py-1">/public/docs/</span>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-[#070A12]">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <p className="text-sm font-semibold">IDECN</p>
              <p className="mt-2 text-sm text-white/70 leading-relaxed">
                Indonesia Education & Cultural Network — connecting people through education, culture, and community.
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold">Sections</p>
              <div className="mt-3 grid gap-2 text-sm text-white/70">
                <a className="hover:text-white" href="#about">About</a>
                <a className="hover:text-white" href="#programs">Programs</a>
                <a className="hover:text-white" href="#event">2025 Event</a>
                <a className="hover:text-white" href="#sponsor">Sponsor/Vendor</a>
                <a className="hover:text-white" href="#contact">Contact</a>
              </div>
            </div>
            <div>
              <p className="text-sm font-semibold">Partner</p>
              <p className="mt-2 text-sm text-white/70 leading-relaxed">
                AACF & IDECN proudly present Indonesia Culinary Day on the Creek.
              </p>
            </div>
          </div>

          <div className="mt-8 border-t border-white/10 pt-6 text-xs text-white/55">
            © {new Date().getFullYear()} IDECN. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
