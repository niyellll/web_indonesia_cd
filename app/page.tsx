import Link from "next/link";

const BRAND = {
  name: "IDECN",
  tagline: "Indonesia ↔ U.S.",
  email: "hello@idecn.org", // ganti kalau sudah final
};

const EVENT = {
  title: "Indonesia Culinary Day on the Creek",
  date: "Saturday, August 2, 2025",
  time: "11AM – 4PM",
  location: "Carroll Creek Park • Downtown Frederick • Maryland, USA",
  hosts: "Hosted by AACF & IDECN • Part of the annual Creek Festival",
  proposalHref: "/indonesia-on-the-creek-proposal.pdf", // taruh PDF ini di /public
  highlights: ["Food Bazaar", "Marketplace", "Exhibition", "Performances", "Art & Craft"],
};

const CONTACTS = [
  { name: "Wati Soetojo", role: "Committee", phone: "+1 240 483 6113", href: "tel:+12404836113" },
  { name: "Haris Koentjoro", role: "Committee", phone: "+1 443 570 9509", href: "tel:+14435709509" },
];

const PROGRAMS = [
  {
    title: "Education Programs & Scholarships",
    points: [
      "Scholarship guidance for Indonesian students in the U.S.",
      "Exchange programs for students and educators",
      "Language learning support",
      "Internship and mentorship connections",
    ],
  },
  {
    title: "Cultural Exchange & Awareness",
    points: [
      "Cultural events & festivals (arts, music, dance, culinary)",
      "Cross-cultural dialogues and community workshops",
      "Showcasing Indonesian heritage to wider audiences",
    ],
  },
  {
    title: "Professional Development & Networking",
    points: [
      "Networking opportunities for students & professionals",
      "Workshops for cross-cultural communication",
      "Mentorship and career pathway support",
    ],
  },
  {
    title: "Community Support",
    points: [
      "Volunteer and community-led initiatives",
      "Partnership building across Indonesia ↔ U.S.",
      "Inclusive community engagement and support",
    ],
  },
];

const PARTNERS = [
  { name: "AACF", note: "Community partner" },
  { name: "Local Organizations", note: "Program collaborators" },
  { name: "Sponsors", note: "Event supporters" },
  { name: "Education Partners", note: "Institutional partners" },
];

function Container({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">{children}</div>;
}

function Section({
  id,
  eyebrow,
  title,
  desc,
  children,
}: {
  id: string;
  eyebrow?: string;
  title: string;
  desc?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-28 py-14 sm:py-16">
      <Container>
        <div className="text-center">
          {eyebrow && <p className="text-sm font-semibold tracking-wide text-[var(--blue)]">{eyebrow}</p>}
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[var(--ink)] sm:text-4xl">
            {title}
          </h2>
          {desc && (
            <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-[var(--muted)] sm:text-lg">
              {desc}
            </p>
          )}
        </div>

        <div className="mt-10">{children}</div>
      </Container>
    </section>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-[var(--line)] bg-white px-3 py-1 text-xs font-semibold text-[var(--muted)]">
      {children}
    </span>
  );
}

function ButtonPrimary({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className="inline-flex items-center justify-center rounded-xl bg-[var(--red)] px-5 py-3 text-sm font-bold text-white hover:bg-[var(--red-dark)] focus:outline-none focus:ring-4 focus:ring-[rgba(211,47,47,0.18)]"
    >
      {children}
    </a>
  );
}

function ButtonOutline({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className="inline-flex items-center justify-center rounded-xl border border-[var(--line-strong)] bg-white px-5 py-3 text-sm font-bold text-[var(--ink)] hover:bg-[var(--bg-soft)] focus:outline-none focus:ring-4 focus:ring-[rgba(30,58,138,0.12)]"
    >
      {children}
    </a>
  );
}

function AccentDivider() {
  return (
    <div className="mx-auto mt-10 flex w-36 overflow-hidden rounded-full">
      <div className="h-1 w-1/2 bg-[var(--red)]" />
      <div className="h-1 w-1/2 bg-[var(--blue)]" />
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-[var(--ink)]">
      {/* Batik background (no gradient) */}
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-white" />
        <div className="absolute inset-0 bg-[url('/images/batik-pattern.svg')] bg-repeat opacity-[0.08]" />
      </div>

      {/* NAVBAR (top only) */}
      <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-white/90 backdrop-blur">
        <Container>
          <div className="flex items-center justify-between py-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-2xl border border-[var(--line)] bg-white" />
              <div className="leading-tight">
                <p className="text-sm font-extrabold text-[var(--ink)]">{BRAND.name}</p>
                <p className="text-xs font-semibold text-[var(--muted)]">{BRAND.tagline}</p>
              </div>
            </Link>

            <nav className="hidden items-center gap-2 md:flex">
              {[
                ["About", "#about"],
                ["Programs", "#programs"],
                ["Portfolio Event", "#portfolio"],
                ["Partners", "#partners"],
                ["Get Involved", "#get-involved"],
              ].map(([label, href]) => (
                <a
                  key={href}
                  href={href}
                  className="rounded-lg px-3 py-2 text-sm font-semibold text-[var(--muted)] hover:bg-[var(--bg-soft)] hover:text-[var(--ink)]"
                >
                  {label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <a
                href="#contact"
                className="hidden rounded-xl border border-[var(--line)] bg-white px-4 py-2 text-sm font-bold text-[var(--ink)] hover:bg-[var(--bg-soft)] md:inline-flex"
              >
                Contact
              </a>

              {/* mobile menu simple */}
              <details className="md:hidden">
                <summary className="list-none rounded-xl border border-[var(--line)] bg-white px-3 py-2 text-sm font-bold">
                  Menu
                </summary>
                <div className="mt-2 grid gap-2 rounded-2xl border border-[var(--line)] bg-white p-3">
                  {[
                    ["About", "#about"],
                    ["Programs", "#programs"],
                    ["Portfolio Event", "#portfolio"],
                    ["Partners", "#partners"],
                    ["Get Involved", "#get-involved"],
                    ["Contact", "#contact"],
                  ].map(([label, href]) => (
                    <a key={href} href={href} className="rounded-xl px-3 py-2 text-sm font-semibold hover:bg-[var(--bg-soft)]">
                      {label}
                    </a>
                  ))}
                </div>
              </details>
            </div>
          </div>
        </Container>
      </header>

      {/* HERO (centered header, no cards crowded) */}
      <section className="py-14 sm:py-20">
        <Container>
          <div className="text-center">
            <div className="flex flex-wrap items-center justify-center gap-2">
              <Pill>Nonprofit (U.S.-based)</Pill>
              <Pill>Established 2024</Pill>
              <Pill>
                <span className="font-extrabold text-[var(--red)]">Indonesia</span>
                <span className="mx-1 text-[var(--muted)]">↔</span>
                <span className="font-extrabold text-[var(--blue)]">U.S.</span>
              </Pill>
            </div>

            <h1 className="mx-auto mt-6 max-w-4xl text-4xl font-black tracking-tight text-[var(--ink)] sm:text-6xl">
              Indonesia Education & Cultural Network
            </h1>

            <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-[var(--muted)] sm:text-lg">
              A U.S.-based nonprofit dedicated to fostering cross-cultural understanding, educational opportunities,
              and community connections between Indonesia and the United States.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <ButtonPrimary href="#get-involved">Get involved</ButtonPrimary>
              <ButtonOutline href={EVENT.proposalHref}>Download proposal (PDF)</ButtonOutline>
              <ButtonOutline href="#portfolio">View portfolio event</ButtonOutline>
            </div>

            <AccentDivider />
          </div>
        </Container>
      </section>

      {/* ABOUT */}
      <Section
        id="about"
        eyebrow="About IDECN"
        title="A bridge between communities"
        desc="IDECN builds an inclusive platform for collaboration—strengthening education, culture, and professional connections across Indonesia and the U.S."
      >
        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-[var(--line)] bg-white/80 p-7">
            <h3 className="text-xl font-extrabold">Who we are</h3>
            <p className="mt-3 text-base leading-relaxed text-[var(--muted)]">
              The Indonesia Education and Cultural Network (IDECN) is a nonprofit organization based in the United States
              dedicated to fostering cross-cultural understanding, educational opportunities, and community connections
              between Indonesia and the U.S.
            </p>
          </div>

          <div className="rounded-2xl border border-[var(--line)] bg-white/80 p-7">
            <h3 className="text-xl font-extrabold">Mission</h3>
            <p className="mt-3 text-base leading-relaxed text-[var(--muted)]">
              Enhance mutual understanding by providing resources, support, and opportunities for students, educators,
              professionals, and cultural enthusiasts—through programs, partnerships, and public events.
            </p>
          </div>

          <div className="md:col-span-2 rounded-2xl border border-[var(--line)] bg-white/80 p-7">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <p className="text-base leading-relaxed">
                <span className="font-extrabold text-[var(--ink)]">Commitment:</span>{" "}
                <span className="text-[var(--muted)]">
                  build a vibrant, informed, and engaged community that bridges both nations through shared experiences and values.
                </span>
              </p>
              <div className="flex items-center gap-2">
                <span className="h-2 w-10 rounded-full bg-[var(--red)]" />
                <span className="h-2 w-10 rounded-full bg-[var(--blue)]" />
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* PROGRAMS */}
      <Section
        id="programs"
        eyebrow="Programs"
        title="What we do"
        desc="We focus on four pillars: education, cultural exchange, professional development, and community support."
      >
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
          {PROGRAMS.map((p) => (
            <div key={p.title} className="rounded-2xl border border-[var(--line)] bg-white/80 p-7">
              <h3 className="text-xl font-extrabold">{p.title}</h3>
              <ul className="mt-4 space-y-3">
                {p.points.map((t) => (
                  <li key={t} className="flex gap-3 text-[15px] leading-relaxed text-[var(--muted)]">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[var(--blue)]" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* PORTFOLIO EVENT */}
      <Section
        id="portfolio"
        eyebrow="Portfolio"
        title="Featured event"
        desc="Indonesia Culinary Day on the Creek — a public celebration of Indonesian culture, open to all."
      >
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-7 rounded-2xl border border-[var(--line)] bg-white/80 p-7">
            <h3 className="text-2xl font-black">{EVENT.title}</h3>
            <p className="mt-2 text-base text-[var(--muted)]">{EVENT.hosts}</p>

            <div className="mt-5 grid gap-2 text-base">
              <p>
                <span className="font-extrabold">Date:</span>{" "}
                <span className="text-[var(--muted)]">{EVENT.date}</span>
              </p>
              <p>
                <span className="font-extrabold">Time:</span>{" "}
                <span className="text-[var(--muted)]">{EVENT.time}</span>
              </p>
              <p>
                <span className="font-extrabold">Venue:</span>{" "}
                <span className="text-[var(--muted)]">{EVENT.location}</span>
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {EVENT.highlights.map((h) => (
                <span
                  key={h}
                  className="rounded-full border border-[var(--line)] bg-white px-3 py-1 text-xs font-bold text-[var(--muted)]"
                >
                  {h}
                </span>
              ))}
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              <ButtonPrimary href={EVENT.proposalHref}>Download proposal (PDF)</ButtonPrimary>
              <ButtonOutline href="#contact">Sponsor / Vendor / Performer</ButtonOutline>
            </div>
          </div>

          <div className="lg:col-span-5 rounded-2xl border border-[var(--line)] bg-white/80 p-7">
            <p className="text-sm font-extrabold text-[var(--red)]">Why this matters</p>
            <p className="mt-3 text-base leading-relaxed text-[var(--muted)]">
              This event serves as a portfolio milestone showing how IDECN brings communities together through cultural
              experience—strengthening trust with donors, investors, and partners.
            </p>

            <div className="mt-6 rounded-2xl border border-[var(--line)] bg-white p-5">
              <p className="text-sm font-extrabold text-[var(--blue)]">Open to the public</p>
              <p className="mt-1 text-sm text-[var(--muted)]">
                Free to attend • Sponsorship and vendor slots available
              </p>
            </div>

            <a
              href="#partners"
              className="mt-6 inline-flex w-full items-center justify-center rounded-xl border border-[var(--line-strong)] bg-white px-5 py-3 text-sm font-extrabold hover:bg-[var(--bg-soft)]"
            >
              See partners & supporters
            </a>
          </div>
        </div>
      </Section>

      {/* PARTNERS */}
      <Section
        id="partners"
        eyebrow="Partners"
        title="Collaborate with us"
        desc="We welcome partners, sponsors, and institutions who share the mission of building bridges across nations."
      >
        <div className="mx-auto grid max-w-6xl gap-4 md:grid-cols-2 lg:grid-cols-4">
          {PARTNERS.map((p) => (
            <div key={p.name} className="rounded-2xl border border-[var(--line)] bg-white/80 p-6 text-center">
              <div className="mx-auto mb-3 h-10 w-10 rounded-2xl border border-[var(--line)] bg-white" />
              <p className="text-base font-extrabold">{p.name}</p>
              <p className="mt-1 text-sm font-semibold text-[var(--muted)]">{p.note}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <ButtonOutline href="#contact">Partner with IDECN</ButtonOutline>
        </div>
      </Section>

      {/* GET INVOLVED */}
      <Section
        id="get-involved"
        eyebrow="Get involved"
        title="There is a place for you"
        desc="Students, professionals, cultural enthusiasts, and community supporters can contribute in meaningful ways."
      >
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
          {[
            {
              title: "Donors & Investors",
              desc: "Support scalable programs and community impact. We can share proposals and partnership models.",
            },
            {
              title: "Partners & Institutions",
              desc: "Collaborate on education, cultural exchange, internships, and community programs.",
            },
            {
              title: "Vendors & Sponsors",
              desc: "Join portfolio events and help expand cultural celebration and local community engagement.",
            },
            {
              title: "Volunteers",
              desc: "Help run programs, events, outreach, and cross-cultural initiatives.",
            },
          ].map((x) => (
            <div key={x.title} className="rounded-2xl border border-[var(--line)] bg-white/80 p-7">
              <h3 className="text-xl font-extrabold">{x.title}</h3>
              <p className="mt-3 text-base leading-relaxed text-[var(--muted)]">{x.desc}</p>
              <div className="mt-5">
                <ButtonPrimary href="#contact">Contact to join</ButtonPrimary>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* CONTACT */}
      <Section
        id="contact"
        eyebrow="Contact"
        title="Let’s talk"
        desc="For sponsorship, vendor slots, partnerships, volunteering, or general inquiries."
      >
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-[var(--line)] bg-white/80 p-7">
            <h3 className="text-xl font-extrabold">Committee</h3>
            <div className="mt-5 space-y-3">
              {CONTACTS.map((c) => (
                <a
                  key={c.phone}
                  href={c.href}
                  className="flex items-center justify-between gap-4 rounded-2xl border border-[var(--line)] bg-white p-4 hover:bg-[var(--bg-soft)]"
                >
                  <div>
                    <p className="text-base font-extrabold">
                      {c.name} <span className="font-semibold text-[var(--muted)]">• {c.role}</span>
                    </p>
                    <p className="text-sm font-semibold text-[var(--muted)]">{c.phone}</p>
                  </div>
                  <span className="rounded-full bg-white px-3 py-1 text-xs font-extrabold text-[var(--blue)] ring-1 ring-[var(--line)]">
                    Call
                  </span>
                </a>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-[var(--line)] bg-white/80 p-7">
            <h3 className="text-xl font-extrabold">Email & Downloads</h3>
            <p className="mt-3 text-base text-[var(--muted)]">
              Share this website to donors, investors, and partners. We can also provide the proposal PDF.
            </p>

            <a
              className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-[var(--blue)] px-5 py-3 text-sm font-extrabold text-white hover:bg-[var(--blue-dark)] focus:outline-none focus:ring-4 focus:ring-[rgba(30,58,138,0.18)]"
              href={`mailto:${BRAND.email}`}
            >
              {BRAND.email}
            </a>

            <a
              className="mt-3 inline-flex w-full items-center justify-center rounded-xl border border-[var(--line-strong)] bg-white px-5 py-3 text-sm font-extrabold hover:bg-[var(--bg-soft)]"
              href={EVENT.proposalHref}
            >
              Download proposal (PDF)
            </a>

            <p className="mt-4 text-sm text-[var(--muted)]">
              Put your PDF here: <span className="font-extrabold text-[var(--ink)]">{EVENT.proposalHref}</span> (upload to{" "}
              <span className="font-extrabold text-[var(--ink)]">/public/</span>)
            </p>
          </div>
        </div>

        <div className="mt-12 text-center text-sm font-semibold text-[var(--muted)]">
          © {new Date().getFullYear()} IDECN. All rights reserved.
        </div>
      </Section>
    </div>
  );
}
