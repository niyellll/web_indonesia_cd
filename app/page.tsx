import Link from "next/link";

const EVENT = {
  title: "Indonesia Culinary Day on the Creek",
  date: "Saturday, August 2, 2025",
  time: "11AM – 4PM",
  location: "Carroll Creek Park • Downtown Frederick • Maryland, USA",
  hosts: "Hosted by AACF & IDECN • Part of the annual Creek Festival",
  proposalHref: "/indonesia-on-the-creek-proposal.pdf",
};

const CONTACTS = [
  { name: "Wati Soetojo", role: "Committee", phone: "+1 240 483 6113", href: "tel:+12404836113" },
  { name: "Haris Koentjoro", role: "Committee", phone: "+1 443 570 9509", href: "tel:+14435709509" },
];

// ganti email resmi kalau sudah ada
const OFFICIAL_EMAIL = "hello@idecn.org";

function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={[
        "rounded-2xl border border-[var(--line)] bg-white/80 backdrop-blur",
        "shadow-[0_18px_60px_rgba(0,0,0,0.07)]",
        "p-6",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}

function SectionTitle({
  no,
  title,
  subtitle,
}: {
  no: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-6">
      <div className="flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[rgba(224,101,47,0.12)] text-[color:var(--accent)] font-semibold">
          {no}
        </div>
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">{title}</h2>
      </div>
      {subtitle && (
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-[var(--muted)]">{subtitle}</p>
      )}
    </div>
  );
}

function TocLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      className="rounded-xl px-3 py-2 text-sm text-[var(--muted)] hover:bg-black/5 hover:text-[var(--ink)]"
    >
      {label}
    </a>
  );
}

export default function Home() {
  return (
    <div className="proposal-bg min-h-screen">
      {/* HEADER */}
      <header className="sticky top-0 z-40 border-b border-[var(--line)] bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
          <Link href="/" className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-2xl border border-[var(--line)] bg-[linear-gradient(135deg,rgba(224,101,47,0.18),rgba(224,101,47,0.05))]" />
            <div className="leading-tight">
              <p className="text-sm font-semibold">IDECN</p>
              <p className="text-xs text-[var(--muted)] -mt-0.5">Indonesia ↔ U.S.</p>
            </div>
          </Link>

          {/* desktop nav */}
          <nav className="hidden items-center gap-2 md:flex">
            {[
              ["Who We Are", "#who-we-are"],
              ["What We Do", "#what-we-do"],
              ["Goals", "#goals"],
              ["Why", "#why"],
              ["Get Involved", "#get-involved"],
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
              href="#contact"
              className="ml-2 inline-flex items-center justify-center rounded-xl bg-[var(--accent)] px-4 py-2 text-sm font-semibold text-white hover:opacity-90"
            >
              Contact
            </a>
          </nav>

          {/* mobile */}
          <details className="md:hidden">
            <summary className="list-none rounded-xl border border-[var(--line)] bg-white/80 px-3 py-2 text-sm">
              Menu
            </summary>
            <div className="mt-2 grid gap-2 rounded-2xl border border-[var(--line)] bg-white/95 p-3">
              {[
                ["Who We Are", "#who-we-are"],
                ["What We Do", "#what-we-do"],
                ["Goals", "#goals"],
                ["Why", "#why"],
                ["Get Involved", "#get-involved"],
                ["Contact", "#contact"],
              ].map(([label, href]) => (
                <a key={href} href={href} className="rounded-xl px-3 py-2 text-sm hover:bg-black/5">
                  {label}
                </a>
              ))}
            </div>
          </details>
        </div>
      </header>

      {/* HERO (lebih “editorial”, nggak template) */}
      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-white/70 px-3 py-1 text-xs text-[var(--muted)]">
              Nonprofit (U.S.-based) • Established 2024
              <span className="rounded-full bg-[rgba(224,101,47,0.14)] px-2 py-0.5 text-[color:var(--accent)]">
                IDECN
              </span>
            </div>

            <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">
              Indonesia Education & Cultural Network
            </h1>

            <p className="mt-4 text-[var(--muted)] sm:text-lg leading-relaxed">
              A nonprofit organization based in the United States dedicated to fostering cross-cultural
              understanding, educational opportunities, and community connections between Indonesia and the U.S.
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-3">
              <Card className="p-4">
                <p className="text-xs text-[var(--muted)]">Focus areas</p>
                <p className="mt-1 text-lg font-semibold">4 pillars</p>
              </Card>
              <Card className="p-4">
                <p className="text-xs text-[var(--muted)]">Community</p>
                <p className="mt-1 text-lg font-semibold">Indonesia ↔ U.S.</p>
              </Card>
              <Card className="p-4">
                <p className="text-xs text-[var(--muted)]">Model</p>
                <p className="mt-1 text-lg font-semibold">Programs + Events</p>
              </Card>
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#get-involved"
                className="inline-flex items-center justify-center rounded-xl bg-[var(--accent)] px-5 py-2.5 text-sm font-semibold text-white hover:opacity-90"
              >
                Get involved
              </a>
              <a
                href={EVENT.proposalHref}
                className="inline-flex items-center justify-center rounded-xl border border-[var(--line)] bg-white/70 px-5 py-2.5 text-sm font-semibold hover:bg-white"
              >
                Download proposal (PDF)
              </a>
              <a
                href="#event"
                className="inline-flex items-center justify-center rounded-xl border border-[var(--line)] bg-white/70 px-5 py-2.5 text-sm font-semibold hover:bg-white"
              >
                View featured event
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <Card className="p-6">
              <p className="text-xs uppercase tracking-wider text-[var(--muted)]">Featured Event</p>
              <h2 className="mt-2 text-xl font-semibold">{EVENT.title}</h2>
              <p className="mt-2 text-sm text-[var(--muted)]">{EVENT.hosts}</p>

              <div className="mt-5 space-y-2 text-sm">
                <p>
                  <span className="font-semibold">Date:</span>{" "}
                  <span className="text-[var(--muted)]">{EVENT.date}</span>
                </p>
                <p>
                  <span className="font-semibold">Time:</span>{" "}
                  <span className="text-[var(--muted)]">{EVENT.time}</span>
                </p>
                <p>
                  <span className="font-semibold">Venue:</span>{" "}
                  <span className="text-[var(--muted)]">{EVENT.location}</span>
                </p>
              </div>

              {/* orange band ala proposal */}
              <div className="mt-6 rounded-2xl bg-[var(--accent)] px-5 py-4 text-white">
                <p className="text-sm font-semibold">Open to the public • Free to attend</p>
                <p className="mt-1 text-xs opacity-90">
                  Sponsor / Vendor / Performer opportunities available
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT LAYOUT (TOC kiri, isi kanan) */}
      <section className="mx-auto max-w-6xl px-4 pb-14 sm:px-6">
        <div className="grid gap-8 lg:grid-cols-12">
          {/* TOC */}
          <aside className="hidden lg:col-span-3 lg:block">
            <div className="sticky top-24">
              <Card className="p-4">
                <p className="text-xs font-semibold text-[var(--muted)] uppercase tracking-wider">
                  On this page
                </p>
                <div className="mt-3 grid gap-1">
                  <TocLink href="#who-we-are" label="1. Who We Are" />
                  <TocLink href="#what-we-do" label="2. What We Do" />
                  <TocLink href="#goals" label="3. Our Goals" />
                  <TocLink href="#why" label="4. Why We Do It" />
                  <TocLink href="#get-involved" label="5. Get Involved" />
                  <TocLink href="#contact" label="6. Contact Us" />
                </div>
              </Card>

              <div className="mt-4 rounded-2xl border border-[var(--line)] bg-white/60 p-4">
                <p className="text-xs text-[var(--muted)]">
                  Tip: biar tombol PDF jalan, upload file ke{" "}
                  <span className="font-semibold">/public/docs/</span>.
                </p>
              </div>
            </div>
          </aside>

          {/* CONTENT */}
          <div className="lg:col-span-9 space-y-10">
            {/* 1 Who We Are */}
            <div id="who-we-are">
              <SectionTitle
                no="1"
                title="Who We Are"
                subtitle="IDECN is a nonprofit platform for collaboration between Indonesian and American communities—strengthening education, culture, and professional connections."
              />
              <div className="grid gap-6 md:grid-cols-2">
                <Card>
                  <h3 className="text-lg font-semibold">Overview</h3>
                  <p className="mt-2 text-sm text-[var(--muted)] leading-relaxed">
                    The Indonesia Education and Cultural Network (IDECN) is a nonprofit organization
                    based in the United States dedicated to fostering cross-cultural understanding,
                    educational opportunities, and community connections between Indonesia and the U.S.
                  </p>
                </Card>
                <Card>
                  <h3 className="text-lg font-semibold">Mission</h3>
                  <p className="mt-2 text-sm text-[var(--muted)] leading-relaxed">
                    Enhance mutual understanding between Indonesia and the United States by providing
                    resources, support, and opportunities for students, educators, professionals, and cultural enthusiasts.
                  </p>
                </Card>
              </div>

              <div className="mt-6 rounded-2xl border border-[var(--line)] bg-white/70 p-6">
                <p className="text-sm leading-relaxed">
                  <span className="font-semibold">Commitment:</span>{" "}
                  IDECN is committed to building a vibrant, inclusive, informed, and engaged community that bridges both nations
                  through shared experiences and values.
                </p>
              </div>
            </div>

            {/* 2 What We Do */}
            <div id="what-we-do">
              <SectionTitle
                no="2"
                title="What We Do"
                subtitle="We focus on four key areas: education, cultural exchange, professional development, and community support."
              />

              <div className="grid gap-6 md:grid-cols-2">
                <Card>
                  <h3 className="text-lg font-semibold">Educational Programs & Scholarships</h3>
                  <ul className="mt-3 space-y-2 text-sm text-[var(--muted)]">
                    {[
                      "Scholarships: help Indonesian students access financial support and guidance for studying in the U.S.",
                      "Exchange Programs: study tours and exchange programs for students and educators.",
                      "Language Learning: improve English and Indonesian language skills.",
                      "Internship Opportunities: connect students with U.S. internships to build experience.",
                    ].map((t) => (
                      <li key={t} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </Card>

                <Card>
                  <h3 className="text-lg font-semibold">Cultural Exchange & Awareness</h3>
                  <ul className="mt-3 space-y-2 text-sm text-[var(--muted)]">
                    {[
                      "Cultural Events & Festivals: showcase arts, music, dance, food, and traditions for U.S. audiences.",
                      "Cross-Cultural Dialogues: seminars, workshops, and discussions to promote collaboration.",
                    ].map((t) => (
                      <li key={t} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </Card>

                <Card>
                  <h3 className="text-lg font-semibold">Professional Development & Networking</h3>
                  <ul className="mt-3 space-y-2 text-sm text-[var(--muted)]">
                    {[
                      "Networking Opportunities: connect students, professionals, and alumni with mentors and employers.",
                      "Workshops & Seminars: skills on cross-cultural communication and international business.",
                    ].map((t) => (
                      <li key={t} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </Card>

                <Card>
                  <h3 className="text-lg font-semibold">Community Support</h3>
                  <p className="mt-2 text-sm text-[var(--muted)] leading-relaxed">
                    Volunteer, donate, and community-led initiatives that strengthen mutual understanding and shared growth.
                  </p>

                  <div className="mt-4 rounded-xl bg-[rgba(224,101,47,0.10)] p-4">
                    <p className="text-sm font-semibold text-[color:var(--accent)]">Signature event</p>
                    <p className="text-xs text-[var(--muted)]">Indonesia Culinary Day on the Creek (annual)</p>
                  </div>
                </Card>
              </div>
            </div>

            {/* Featured Event (dipisah biar nggak template) */}
            <div id="event">
              <SectionTitle
                no="★"
                title="Featured Event"
                subtitle="Indonesia Culinary Day on the Creek — a public celebration of Indonesian culture."
              />
              <Card>
                <div className="grid gap-6 lg:grid-cols-12 lg:items-start">
                  <div className="lg:col-span-7">
                    <h3 className="text-xl font-semibold">{EVENT.title}</h3>
                    <p className="mt-2 text-sm text-[var(--muted)]">{EVENT.hosts}</p>

                    <div className="mt-4 grid gap-2 text-sm">
                      <p>
                        <span className="font-semibold">Date:</span>{" "}
                        <span className="text-[var(--muted)]">{EVENT.date}</span>
                      </p>
                      <p>
                        <span className="font-semibold">Time:</span>{" "}
                        <span className="text-[var(--muted)]">{EVENT.time}</span>
                      </p>
                      <p>
                        <span className="font-semibold">Venue:</span>{" "}
                        <span className="text-[var(--muted)]">{EVENT.location}</span>
                      </p>
                    </div>

                    <div className="mt-5 flex flex-wrap gap-2 text-xs text-[var(--muted)]">
                      {["Food Bazaar", "Marketplace", "Exhibition", "Performances", "Art & Craft"].map((t) => (
                        <span
                          key={t}
                          className="rounded-lg border border-[var(--line)] bg-white/70 px-2 py-1"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="lg:col-span-5">
                    <div className="rounded-2xl bg-[var(--accent)] p-5 text-white">
                      <p className="text-sm font-semibold">Want to participate?</p>
                      <p className="mt-1 text-xs opacity-90">
                        Sponsor / Vendor / Performer opportunities available.
                      </p>
                      <a
                        href={EVENT.proposalHref}
                        className="mt-4 inline-flex w-full items-center justify-center rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-[color:var(--accent)] hover:opacity-95"
                      >
                        Download proposal (PDF)
                      </a>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* 3 Goals */}
            <div id="goals">
              <SectionTitle
                no="3"
                title="Our Goals"
                subtitle="Clear goals that translate into practical programs and measurable impact."
              />
              <div className="grid gap-6 md:grid-cols-3">
                <Card>
                  <h3 className="text-lg font-semibold">Enhance Educational Opportunities</h3>
                  <ul className="mt-3 space-y-2 text-sm text-[var(--muted)]">
                    {[
                      "Provide access and resources to scholarships and guidance for Indonesian students in the U.S.",
                      "Promote educational exchanges between Indonesian and American institutions.",
                    ].map((t) => (
                      <li key={t} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </Card>

                <Card>
                  <h3 className="text-lg font-semibold">Promote Cultural Understanding & Exchange</h3>
                  <ul className="mt-3 space-y-2 text-sm text-[var(--muted)]">
                    {[
                      "Celebrate Indonesian culture through events and festivals.",
                      "Encourage open dialogue between Indonesians and Americans.",
                    ].map((t) => (
                      <li key={t} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </Card>

                <Card>
                  <h3 className="text-lg font-semibold">Strengthen Professional Networks</h3>
                  <ul className="mt-3 space-y-2 text-sm text-[var(--muted)]">
                    {[
                      "Build networks to help Indonesian professionals and students succeed.",
                      "Provide resources and career support to expand professional opportunities.",
                    ].map((t) => (
                      <li key={t} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </div>
            </div>

            {/* 4 Why */}
            <div id="why">
              <SectionTitle
                no="4"
                title="Why We Do It"
                subtitle="Education and culture break barriers—and create lasting connections."
              />
              <Card>
                <div className="grid gap-6 lg:grid-cols-12 lg:items-start">
                  <div className="lg:col-span-8">
                    <p className="text-sm text-[var(--muted)] leading-relaxed">
                      We believe in the power of education and culture to break down barriers and create lasting
                      connections between people. Indonesia and the United States are both dynamic, diverse nations with
                      much to learn from each other.
                    </p>
                    <p className="mt-4 text-sm text-[var(--muted)] leading-relaxed">
                      By supporting Indonesian students, fostering cultural exchange, and providing resources for
                      professional growth, IDECN aims to create a more inclusive and interconnected world where both
                      nations thrive.
                    </p>
                  </div>
                  <div className="lg:col-span-4">
                    <div className="rounded-2xl border border-[var(--line)] bg-white/70 p-5">
                      <p className="text-xs uppercase tracking-wider text-[var(--muted)]">Statement</p>
                      <p className="mt-2 text-sm font-semibold leading-relaxed">
                        “Bridge both nations through shared experiences and values.”
                      </p>
                      <div className="mt-4 h-1 w-full rounded-full bg-[rgba(224,101,47,0.25)]">
                        <div className="h-1 w-1/2 rounded-full bg-[var(--accent)]" />
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* 5 Get involved */}
            <div id="get-involved">
              <SectionTitle
                no="5"
                title="Get Involved"
                subtitle="There is a place for students, professionals, cultural enthusiasts, and community supporters."
              />

              <div className="grid gap-6 md:grid-cols-2">
                {[
                  {
                    title: "Students & Scholars",
                    desc: "Scholarships guidance, networking, and exchange programs tailored to your needs.",
                  },
                  {
                    title: "Cultural Enthusiasts",
                    desc: "Join cultural events and celebrations to explore Indonesian traditions and connect with the community.",
                  },
                  {
                    title: "Professionals & Alumni",
                    desc: "Advance your career through mentorship, networking, and collaboration opportunities.",
                  },
                  {
                    title: "Community Supporters",
                    desc: "Volunteer, donate, or help spread the word to foster cross-cultural understanding.",
                  },
                ].map((c) => (
                  <Card key={c.title}>
                    <h3 className="text-lg font-semibold">{c.title}</h3>
                    <p className="mt-2 text-sm text-[var(--muted)] leading-relaxed">{c.desc}</p>
                    <a
                      href="#contact"
                      className="mt-4 inline-flex w-fit items-center justify-center rounded-xl bg-[rgba(224,101,47,0.12)] px-4 py-2 text-sm font-semibold text-[color:var(--accent)] hover:opacity-90"
                    >
                      Contact to join
                    </a>
                  </Card>
                ))}
              </div>
            </div>

            {/* 6 Contact */}
            <div id="contact">
              <SectionTitle
                no="6"
                title="Contact Us"
                subtitle="For sponsorship, vendor slots, partnerships, volunteering, or general inquiries."
              />

              <div className="grid gap-6 lg:grid-cols-2">
                <Card>
                  <h3 className="text-lg font-semibold">Committee</h3>
                  <div className="mt-4 space-y-3">
                    {CONTACTS.map((c) => (
                      <a
                        key={c.phone}
                        href={c.href}
                        className="flex items-center justify-between gap-4 rounded-xl border border-[var(--line)] bg-white/70 px-4 py-3 hover:bg-white"
                      >
                        <div>
                          <p className="text-sm font-semibold">
                            {c.name} <span className="text-[var(--muted)] font-normal">• {c.role}</span>
                          </p>
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
                  <h3 className="text-lg font-semibold">Email & Downloads</h3>
                  <p className="mt-2 text-sm text-[var(--muted)]">
                    Update with your official IDECN email when ready.
                  </p>

                  <a
                    className="mt-4 inline-flex w-full items-center justify-center rounded-xl bg-[var(--accent)] px-4 py-2.5 text-sm font-semibold text-white hover:opacity-90"
                    href={`mailto:${OFFICIAL_EMAIL}`}
                  >
                    {OFFICIAL_EMAIL}
                  </a>

                  <a
                    className="mt-3 inline-flex w-full items-center justify-center rounded-xl border border-[var(--line)] bg-white/70 px-4 py-2.5 text-sm font-semibold hover:bg-white"
                    href={EVENT.proposalHref}
                  >
                    Download proposal (PDF)
                  </a>

                  <p className="mt-4 text-xs text-[var(--muted)]">
                    Proposal path: <span className="font-semibold">{EVENT.proposalHref}</span> (upload ke <span className="font-semibold">/public/docs/</span>)
                  </p>
                </Card>
              </div>
            </div>

            {/* FOOTER */}
            <div className="pt-4">
              <div className="border-t border-[var(--line)] pt-6 text-xs text-[var(--muted)]">
                © {new Date().getFullYear()} IDECN. All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
