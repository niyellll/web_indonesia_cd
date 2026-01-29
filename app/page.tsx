import Link from "next/link";

const EVENT = {
  title: "Indonesia Culinary Day on the Creek",
  date: "Saturday, August 2, 2025",
  time: "11AM – 4PM",
  location: "Carroll Creek Park • Downtown Frederick • Maryland, USA",
  hosts: "Hosted by AACF & IDECN • Part of the annual Creek Festival",
  proposalHref: "/indonesia-on-the-creek-proposal.pdf", // taruh PDF di /public/docs/
};

const PILLARS = [
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
    desc: "Mentorship, career workshops, and networks connecting students, alumni, and employers.",
  },
  {
    title: "Community Support",
    desc: "Volunteer and partner programs that strengthen inclusive local communities.",
  },
];

const HIGHLIGHTS = [
  { title: "Food Bazaar", desc: "Curated Indonesian dishes and culinary storytelling." },
  { title: "Marketplace", desc: "Snacks, spices, crafts, jewelry, and diaspora products." },
  { title: "Exhibition", desc: "Batik, fashion, home décor, and Indonesian-owned business showcases." },
  { title: "Cultural Performances", desc: "Traditional and contemporary music & dance, interactive experiences." },
  { title: "Interactive Art & Craft", desc: "Batik painting, puppet-making, kids crafts, and live demos." },
];

const VENDORS = [
  { title: "Exhibitors & Marketplace Vendors", price: "$200", note: "Standard space 10’×10’" },
  { title: "Food Vendors", price: "$300", note: "Standard space 10’×10’" },
  { title: "Food Vendors (Premium)", price: "$500", note: "Premium 10’×10’ (near stage)" },
  { title: "Art & Craft", price: "—", note: "Hands-on crafts & demos (contact committee)" },
  { title: "Performers", price: "—", note: "Traditional & contemporary performers welcome" },
];

const SPONSOR = [
  {
    name: "Gold",
    price: "$8,000",
    perks: [
      "Stage presentation (5 minutes)",
      "Featured in press release",
      "Featured social media story (≈30s)",
      "Top sponsor listing + hyperlink",
      "VIP networking access",
      "Premium booth space",
      "Prominent logo placement",
      "Large banner placement",
      "Program book: Double full-page ad",
    ],
  },
  {
    name: "Silver",
    price: "$5,000",
    perks: [
      "Brief greeting on stage (1 minute)",
      "Mentioned in press release",
      "Featured social media story (≈15s)",
      "Top sponsor listing + hyperlink",
      "VIP networking access",
      "Standard booth space",
      "Secondary logo placement",
      "Medium banner placement",
      "Program book: Full-page ad",
    ],
  },
  {
    name: "Bronze",
    price: "$3,000",
    perks: [
      "Listed under sponsor",
      "Shared table (as available)",
      "Logo listed under sponsor materials",
      "MC mention",
      "Name-only banner placement",
      "Program book: Half-page ad",
    ],
  },
];

const CONTACTS = [
  { name: "Wati Soetojo", phone: "+1 240 483 6113", href: "tel:+12404836113" },
  { name: "Haris Koentjoro", phone: "+1 443 570 9509", href: "tel:+14435709509" },
];

function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-[var(--line)] bg-white/80 backdrop-blur p-6 shadow-[0_18px_60px_rgba(0,0,0,0.07)]">
      {children}
    </div>
  );
}

export default function Home() {
  return (
    <div className="proposal-bg min-h-screen">
      {/* NAV */}
      <header className="sticky top-0 z-40 border-b border-[var(--line)] bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
          <Link href="/" className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-2xl border border-[var(--line)] bg-[linear-gradient(135deg,rgba(224,101,47,0.18),rgba(224,101,47,0.05))]" />
            <div className="leading-tight">
              <p className="text-sm font-semibold">IDECN</p>
              <p className="text-xs text-[var(--muted)] -mt-0.5">Indonesia ↔ U.S.</p>
            </div>
          </Link>

          <nav className="hidden items-center gap-2 md:flex">
            {[
              ["About", "#about"],
              ["Programs", "#programs"],
              ["Event", "#event"],
              ["Sponsor/Vendor", "#sponsor"],
              ["Contact", "#contact"],
            ].map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="rounded-xl px-3 py-2 text-sm text-[var(--muted)] hover:bg-black/5 hover:text-[var(--ink)]"
              >
                {label}
              </a>
            ))}
            <a
              href="#sponsor"
              className="ml-2 inline-flex items-center justify-center rounded-xl bg-[var(--accent)] px-4 py-2 text-sm font-semibold text-white hover:opacity-90"
            >
              Get involved
            </a>
          </nav>

          <details className="md:hidden">
            <summary className="list-none rounded-xl border border-[var(--line)] bg-white/80 px-3 py-2 text-sm">
              Menu
            </summary>
            <div className="mt-2 grid gap-2 rounded-2xl border border-[var(--line)] bg-white/95 p-3">
              {[
                ["About", "#about"],
                ["Programs", "#programs"],
                ["Event", "#event"],
                ["Sponsor/Vendor", "#sponsor"],
                ["Contact", "#contact"],
              ].map(([label, href]) => (
                <a key={href} href={href} className="rounded-xl px-3 py-2 text-sm hover:bg-black/5">
                  {label}
                </a>
              ))}
              <a
                href="#sponsor"
                className="mt-1 inline-flex items-center justify-center rounded-xl bg-[var(--accent)] px-4 py-2 text-sm font-semibold text-white hover:opacity-90"
              >
                Get involved
              </a>
            </div>
          </details>
        </div>
      </header>

      {/* HERO */}
      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-white/70 px-3 py-1 text-xs text-[var(--muted)]">
              AACF & IDECN proudly present
              <span className="rounded-full bg-[rgba(224,101,47,0.14)] px-2 py-0.5 text-[color:var(--accent)]">
                2025
              </span>
            </div>

            <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">
              Indonesia Education & Cultural Network (IDECN)
            </h1>

            <p className="mt-4 text-[var(--muted)] sm:text-lg leading-relaxed">
              A nonprofit organization based in the United States dedicated to fostering cross-cultural understanding,
              educational opportunities, and community connections between Indonesia and the U.S.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#sponsor"
                className="inline-flex items-center justify-center rounded-xl bg-[var(--accent)] px-5 py-2.5 text-sm font-semibold text-white hover:opacity-90"
              >
                Sponsor / Vendor
              </a>

              <a
                href="#event"
                className="inline-flex items-center justify-center rounded-xl border border-[var(--line)] bg-white/70 px-5 py-2.5 text-sm font-semibold hover:bg-white"
              >
                View event
              </a>

              <a
                href={EVENT.proposalHref}
                className="inline-flex items-center justify-center rounded-xl border border-[var(--line)] bg-white/70 px-5 py-2.5 text-sm font-semibold hover:bg-white"
              >
                Download proposal (PDF)
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-2 text-xs text-[var(--muted)]">
              {["Education", "Cultural Exchange", "Networking", "Community Support"].map((t) => (
                <span key={t} className="rounded-lg border border-[var(--line)] bg-white/70 px-2 py-1">
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <Card>
              <p className="text-xs uppercase tracking-wider text-[var(--muted)]">Featured Event</p>
              <h2 className="mt-2 text-xl font-semibold">{EVENT.title}</h2>
              <p className="mt-2 text-sm text-[var(--muted)]">{EVENT.hosts}</p>

              <div className="mt-5 space-y-3 text-sm">
                <div className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-[var(--accent)]" />
                  <div>
                    <p className="font-semibold">{EVENT.date}</p>
                    <p className="text-[var(--muted)]">{EVENT.time}</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-[var(--accent)]" />
                  <p className="text-[var(--muted)]">{EVENT.location}</p>
                </div>
              </div>

              {/* proposal-style orange bar */}
              <div className="mt-6 rounded-2xl bg-[var(--accent)] px-5 py-4 text-white">
                <p className="text-sm font-semibold">
                  Food Bazaar • Marketplace • Exhibition • Performances • Art & Craft
                </p>
                <p className="mt-1 text-xs opacity-90">Open to the public • Free to attend</p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-5">
            <p className="text-xs uppercase tracking-wider text-[var(--muted)]">About</p>
            <h2 className="mt-2 text-2xl font-semibold sm:text-3xl">
              Building long-term Indonesia–U.S. connections
            </h2>
            <p className="mt-4 text-sm text-[var(--muted)] leading-relaxed">
              Established in 2024, IDECN serves as a platform for collaboration between Indonesian and American communities.
            </p>
            <div className="mt-6 rounded-2xl border border-[var(--line)] bg-white/70 p-5">
              <p className="text-sm leading-relaxed">
                <span className="font-semibold">Mission:</span>{" "}
                Enhance mutual understanding between Indonesia and the United States by providing resources, support,
                and opportunities for students, educators, professionals, and cultural enthusiasts.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="grid gap-6 md:grid-cols-2">
              {PILLARS.map((p) => (
                <Card key={p.title}>
                  <h3 className="text-lg font-semibold">{p.title}</h3>
                  <p className="mt-2 text-sm text-[var(--muted)] leading-relaxed">{p.desc}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROGRAMS */}
      <section id="programs" className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <p className="text-xs uppercase tracking-wider text-[var(--muted)]">Programs</p>
        <h2 className="mt-2 text-2xl font-semibold sm:text-3xl">
          Programs that create real connections
        </h2>
        <p className="mt-4 max-w-3xl text-sm text-[var(--muted)] leading-relaxed">
          We focus on education, cultural exchange, career growth, and community support through inclusive programs and events.
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
              ],
            },
            {
              title: "Professional Development & Networking",
              bullets: [
                "Mentorship and networking with professionals, alumni, and employers.",
                "Workshops on cross-cultural communication and international business.",
              ],
            },
          ].map((c) => (
            <Card key={c.title}>
              <h3 className="text-lg font-semibold">{c.title}</h3>
              <ul className="mt-4 space-y-2 text-sm text-[var(--muted)]">
                {c.bullets.map((b) => (
                  <li key={b} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </section>

      {/* EVENT */}
      <section id="event" className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <p className="text-xs uppercase tracking-wider text-[var(--muted)]">2025 Event</p>
        <h2 className="mt-2 text-2xl font-semibold sm:text-3xl">{EVENT.title}</h2>
        <p className="mt-4 max-w-3xl text-sm text-[var(--muted)] leading-relaxed">
          A public celebration of Indonesian culture through food, products, art, performances, and community engagement—open to the public and free to attend.
        </p>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          <Card>
            <h3 className="text-lg font-semibold">When & where</h3>
            <div className="mt-4 space-y-2 text-sm text-[var(--muted)]">
              <p><span className="font-semibold text-[var(--ink)]">Date:</span> {EVENT.date}</p>
              <p><span className="font-semibold text-[var(--ink)]">Time:</span> {EVENT.time}</p>
              <p><span className="font-semibold text-[var(--ink)]">Venue:</span> {EVENT.location}</p>
            </div>

            <a
              href={EVENT.proposalHref}
              className="mt-6 inline-flex w-full items-center justify-center rounded-xl border border-[var(--line)] bg-white/70 px-4 py-2.5 text-sm font-semibold hover:bg-white"
            >
              Download proposal (PDF)
            </a>

            <div className="mt-5 rounded-2xl bg-[rgba(224,101,47,0.10)] p-4">
              <p className="text-sm font-semibold text-[color:var(--accent)]">Open to the public</p>
              <p className="text-xs text-[var(--muted)]">Free to attend • Family-friendly</p>
            </div>
          </Card>

          <div className="grid gap-6 lg:col-span-2 md:grid-cols-2">
            {HIGHLIGHTS.map((h) => (
              <Card key={h.title}>
                <h3 className="text-lg font-semibold">{h.title}</h3>
                <p className="mt-2 text-sm text-[var(--muted)] leading-relaxed">{h.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SPONSOR */}
      <section id="sponsor" className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <p className="text-xs uppercase tracking-wider text-[var(--muted)]">Participatory Opportunities</p>
        <h2 className="mt-2 text-2xl font-semibold sm:text-3xl">
          Sponsor, vendor, perform, or support
        </h2>
        <p className="mt-4 max-w-3xl text-sm text-[var(--muted)] leading-relaxed">
          Sponsoring offers a unique opportunity to enhance brand visibility, connect with community leaders, and support cultural exchange.
        </p>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {SPONSOR.map((t) => (
            <Card key={t.name}>
              <div className="flex items-baseline justify-between">
                <h3 className="text-lg font-semibold">{t.name}</h3>
                <p className="text-2xl font-semibold text-[color:var(--accent)]">{t.price}</p>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-[var(--muted)]">
                {t.perks.map((p) => (
                  <li key={p} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <Card>
            <h3 className="text-lg font-semibold">Vendor options</h3>
            <p className="mt-2 text-sm text-[var(--muted)]">
              Standard vendors may need to bring tent/tables/chairs. Premium spaces are under a tent near stage & audience.
            </p>

            <div className="mt-5 grid gap-4">
              {VENDORS.map((v) => (
                <div key={v.title} className="rounded-2xl border border-[var(--line)] bg-white/70 p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-semibold">{v.title}</p>
                      <p className="mt-1 text-sm text-[var(--muted)]">{v.note}</p>
                    </div>
                    <p className="text-xl font-semibold text-[color:var(--accent)]">{v.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card>
            <h3 className="text-lg font-semibold">Ready to participate?</h3>
            <p className="mt-2 text-sm text-[var(--muted)]">
              Contact the committee for availability, questions, and sponsorship/vendor confirmation.
            </p>

            <a
              href="#contact"
              className="mt-5 inline-flex w-full items-center justify-center rounded-xl bg-[var(--accent)] px-4 py-2.5 text-sm font-semibold text-white hover:opacity-90"
            >
              Contact committee
            </a>

            <div className="mt-6 rounded-2xl bg-[rgba(224,101,47,0.10)] p-4">
              <p className="text-sm font-semibold text-[color:var(--accent)]">Tip</p>
              <p className="text-xs text-[var(--muted)]">
                Pastikan PDF proposal ada di <span className="font-semibold">/public/docs/</span> biar tombol download jalan.
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <p className="text-xs uppercase tracking-wider text-[var(--muted)]">Contact</p>
        <h2 className="mt-2 text-2xl font-semibold sm:text-3xl">Let’s collaborate</h2>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <Card>
            <h3 className="text-lg font-semibold">Committee contacts</h3>
            <div className="mt-4 space-y-3">
              {CONTACTS.map((c) => (
                <a
                  key={c.phone}
                  href={c.href}
                  className="flex items-center justify-between rounded-xl border border-[var(--line)] bg-white/70 px-4 py-3 hover:bg-white"
                >
                  <div>
                    <p className="text-sm font-semibold">{c.name}</p>
                    <p className="text-sm text-[var(--muted)]">{c.phone}</p>
                  </div>
                  <span className="rounded-lg bg-[rgba(224,101,47,0.12)] px-2 py-1 text-xs text-[color:var(--accent)]">
                    Call
                  </span>
                </a>
              ))}
            </div>
          </Card>

          <Card>
            <h3 className="text-lg font-semibold">Downloads</h3>
            <p className="mt-2 text-sm text-[var(--muted)]">
              Proposal link:
            </p>
            <a
              href={EVENT.proposalHref}
              className="mt-4 inline-flex w-full items-center justify-center rounded-xl border border-[var(--line)] bg-white/70 px-4 py-2.5 text-sm font-semibold hover:bg-white"
            >
              {EVENT.proposalHref}
            </a>

            <div className="mt-6 border-t border-[var(--line)] pt-5 text-xs text-[var(--muted)]">
              © {new Date().getFullYear()} IDECN. All rights reserved.
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
