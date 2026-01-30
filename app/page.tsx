import Navbar from "@/components/Navbar";

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

const OFFICIAL_EMAIL = "hello@idecn.org";

function SectionTitle({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">{title}</h2>
      {subtitle && (
        <p className="mt-3 text-base sm:text-lg md:text-xl leading-relaxed text-[var(--muted)]">
          {subtitle}
        </p>
      )}
    </div>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-[var(--line)] bg-white/70 px-3 py-1 text-sm text-[var(--muted)]">
      {children}
    </span>
  );
}

export default function Home() {
  return (
    <div className="batik-bg">
      <div className="surface">
        <Navbar />

        {/* HERO */}
        <section className="mx-auto max-w-6xl px-4 pb-10 pt-12 sm:px-6 sm:pt-16">
          <div className="mx-auto max-w-4xl text-center">
            <div className="flex flex-wrap items-center justify-center gap-2">
              <Pill>Nonprofit (U.S.-based) • Established 2024</Pill>
              <Pill>
                <span className="font-semibold text-[color:var(--id-red)]">Indonesia</span>
                <span className="mx-1 text-[var(--muted)]">↔</span>
                <span className="font-semibold text-[color:var(--us-blue)]">U.S.</span>
              </Pill>
            </div>

            <h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
              Indonesia Education & Cultural Network
            </h1>

            <p className="mt-5 text-base sm:text-lg md:text-xl leading-relaxed text-[var(--muted)]">
              A U.S.-based nonprofit dedicated to fostering cross-cultural understanding,
              educational opportunities, and community connections between Indonesia and the United States.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                href="#get-involved"
                className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm md:text-base font-semibold text-white
                bg-[linear-gradient(90deg,var(--id-red),var(--us-blue))] hover:opacity-95"
              >
                Get involved
              </a>
              <a
                href={EVENT.proposalHref}
                className="inline-flex items-center justify-center rounded-xl border border-[var(--line)] bg-white/70 px-5 py-3 text-sm md:text-base font-semibold hover:bg-white"
              >
                Download proposal (PDF)
              </a>
              <a
                href="#event"
                className="inline-flex items-center justify-center rounded-xl border border-[var(--line)] bg-white/70 px-5 py-3 text-sm md:text-base font-semibold hover:bg-white"
              >
                View portfolio event
              </a>
            </div>

            {/* Accent line */}
            <div className="mx-auto mt-10 h-1 w-40 rounded-full bg-[linear-gradient(90deg,var(--id-red),var(--us-blue))]" />
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
          <SectionTitle
            title="About IDECN"
            subtitle="Quick, clear information for donors, investors, and partners—so you can share the link with confidence."
          />

          <div className="mx-auto mt-10 grid max-w-5xl gap-10 md:grid-cols-2">
            <div>
              <h3 className="text-xl md:text-2xl font-bold">Who we are</h3>
              <p className="mt-3 text-base md:text-lg leading-relaxed text-[var(--muted)]">
                IDECN is a nonprofit platform for collaboration between Indonesian and American communities—strengthening
                education, culture, and professional connections through programs and events.
              </p>
            </div>

            <div>
              <h3 className="text-xl md:text-2xl font-bold">Mission</h3>
              <p className="mt-3 text-base md:text-lg leading-relaxed text-[var(--muted)]">
                Enhance mutual understanding by providing resources, support, and opportunities for students, educators,
                professionals, and cultural enthusiasts across both nations.
              </p>
            </div>
          </div>

          {/* Callout (lebih “lapang”, bukan kotak paragraf ketat) */}
          <div className="mx-auto mt-10 max-w-5xl rounded-2xl border border-[var(--line)] bg-white/60 p-6 sm:p-8">
            <p className="text-base md:text-lg leading-relaxed">
              <span className="font-bold">Commitment:</span>{" "}
              We build a vibrant, inclusive, and engaged community that bridges Indonesia and the U.S.
              through shared experiences and values.
            </p>
          </div>
        </section>

        {/* PROGRAMS */}
        <section id="programs" className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
          <SectionTitle
            title="What We Do"
            subtitle="Four pillars: education, cultural exchange, professional development, and community support."
          />

          <div className="mx-auto mt-10 grid max-w-6xl gap-6 md:grid-cols-2">
            {[
              {
                title: "Educational Programs & Scholarships",
                items: [
                  "Scholarships: guidance and support for Indonesian students studying in the U.S.",
                  "Exchange Programs: study tours and educator exchanges.",
                  "Language Learning: improve English and Indonesian language skills.",
                  "Internships: connect students with U.S. internship opportunities.",
                ],
              },
              {
                title: "Cultural Exchange & Awareness",
                items: [
                  "Cultural events & festivals: arts, music, dance, food, traditions.",
                  "Cross-cultural dialogues: workshops and discussions that encourage collaboration.",
                ],
              },
              {
                title: "Professional Development & Networking",
                items: [
                  "Mentorship and networking with alumni and professionals.",
                  "Workshops & seminars on cross-cultural communication and international collaboration.",
                ],
              },
              {
                title: "Community Support",
                items: [
                  "Volunteer and donation initiatives that grow shared understanding.",
                  "Community-led projects that strengthen local impact in the U.S. and Indonesia.",
                ],
              },
            ].map((p) => (
              <div key={p.title} className="rounded-2xl border border-[var(--line)] bg-white/70 p-6 sm:p-8">
                <h3 className="text-lg md:text-xl font-bold">{p.title}</h3>
                <ul className="mt-4 space-y-2 text-base md:text-lg text-[var(--muted)]">
                  {p.items.map((t) => (
                    <li key={t} className="flex gap-3">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[linear-gradient(90deg,var(--id-red),var(--us-blue))]" />
                      <span className="leading-relaxed">{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* EVENT PORTFOLIO */}
        <section id="event" className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
          <SectionTitle
            title="Portfolio Event"
            subtitle="Culinary Day is showcased as proof of execution—an example of what IDECN can deliver."
          />

          <div className="mx-auto mt-10 grid max-w-6xl gap-8 md:grid-cols-12 md:items-start">
            <div className="md:col-span-7">
              <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">{EVENT.title}</h3>
              <p className="mt-2 text-base md:text-lg text-[var(--muted)]">{EVENT.hosts}</p>

              <div className="mt-6 grid gap-2 text-base md:text-lg">
                <p><span className="font-bold">Date:</span> <span className="text-[var(--muted)]">{EVENT.date}</span></p>
                <p><span className="font-bold">Time:</span> <span className="text-[var(--muted)]">{EVENT.time}</span></p>
                <p><span className="font-bold">Venue:</span> <span className="text-[var(--muted)]">{EVENT.location}</span></p>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {["Food Bazaar", "Marketplace", "Exhibition", "Performances", "Art & Craft"].map((t) => (
                  <span key={t} className="rounded-full border border-[var(--line)] bg-white/70 px-3 py-1 text-sm md:text-base text-[var(--muted)]">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="md:col-span-5">
              <div className="rounded-2xl border border-[var(--line)] bg-white/70 p-6 sm:p-8">
                <div className="rounded-xl p-4 text-white bg-[linear-gradient(90deg,var(--id-red),var(--us-blue))]">
                  <p className="text-base md:text-lg font-bold">Open to the public • Free to attend</p>
                  <p className="mt-1 text-sm md:text-base opacity-90">
                    Sponsor / Vendor / Performer opportunities available
                  </p>
                </div>

                <a
                  href={EVENT.proposalHref}
                  className="mt-4 inline-flex w-full items-center justify-center rounded-xl px-5 py-3 text-sm md:text-base font-semibold text-white
                  bg-[linear-gradient(90deg,var(--id-red),var(--us-blue))] hover:opacity-95"
                >
                  Download proposal (PDF)
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* PARTNERS */}
        <section id="partners" className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
          <SectionTitle
            title="Partners"
            subtitle="We collaborate with community leaders, organizations, and sponsors to expand impact."
          />

          <div className="mx-auto mt-10 grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {["Donors", "Sponsors", "Community Organizations", "Schools & Educators", "Vendors", "Performers"].map((t) => (
              <div key={t} className="rounded-2xl border border-[var(--line)] bg-white/70 p-6">
                <p className="text-base md:text-lg font-bold">{t}</p>
                <div className="mt-3 h-1 w-24 rounded-full bg-[linear-gradient(90deg,var(--id-red),var(--us-blue))]" />
              </div>
            ))}
          </div>
        </section>

        {/* GET INVOLVED */}
        <section id="get-involved" className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
          <SectionTitle
            title="Get Involved"
            subtitle="There is a place for students, professionals, cultural enthusiasts, and community supporters."
          />

          <div className="mx-auto mt-10 grid max-w-6xl gap-6 md:grid-cols-2">
            {[
              { title: "Students & Scholars", desc: "Scholarship guidance, networking, and exchange programs." },
              { title: "Cultural Enthusiasts", desc: "Join events and celebrations that highlight Indonesian culture." },
              { title: "Professionals & Alumni", desc: "Mentorship, networking, and collaboration opportunities." },
              { title: "Community Supporters", desc: "Volunteer, donate, or help spread the word." },
            ].map((c) => (
              <div key={c.title} className="rounded-2xl border border-[var(--line)] bg-white/70 p-6 sm:p-8">
                <h3 className="text-lg md:text-xl font-bold">{c.title}</h3>
                <p className="mt-2 text-base md:text-lg leading-relaxed text-[var(--muted)]">{c.desc}</p>
                <a
                  href="#contact"
                  className="mt-4 inline-flex w-fit items-center justify-center rounded-xl px-4 py-2 text-sm md:text-base font-semibold text-white
                  bg-[linear-gradient(90deg,var(--id-red),var(--us-blue))] hover:opacity-95"
                >
                  Contact to join
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
          <SectionTitle
            title="Contact"
            subtitle="For sponsorship, vendor slots, partnerships, volunteering, or general inquiries."
          />

          <div className="mx-auto mt-10 grid max-w-6xl gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-[var(--line)] bg-white/70 p-6 sm:p-8">
              <h3 className="text-lg md:text-xl font-bold">Committee</h3>
              <div className="mt-4 space-y-3">
                {CONTACTS.map((c) => (
                  <a
                    key={c.phone}
                    href={c.href}
                    className="flex items-center justify-between gap-4 rounded-xl border border-[var(--line)] bg-white/70 px-4 py-3 hover:bg-white"
                  >
                    <div>
                      <p className="text-base md:text-lg font-bold">
                        {c.name} <span className="text-[var(--muted)] font-normal">• {c.role}</span>
                      </p>
                      <p className="text-base md:text-lg text-[var(--muted)]">{c.phone}</p>
                    </div>
                    <span className="rounded-full px-3 py-1 text-sm font-semibold text-white bg-[linear-gradient(90deg,var(--id-red),var(--us-blue))]">
                      Call
                    </span>
                  </a>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-[var(--line)] bg-white/70 p-6 sm:p-8">
              <h3 className="text-lg md:text-xl font-bold">Email & Downloads</h3>
              <p className="mt-2 text-base md:text-lg text-[var(--muted)]">
                Use the official email for donors, investors, and partners.
              </p>

              <a
                className="mt-4 inline-flex w-full items-center justify-center rounded-xl px-5 py-3 text-sm md:text-base font-semibold text-white
                bg-[linear-gradient(90deg,var(--id-red),var(--us-blue))] hover:opacity-95"
                href={`mailto:${OFFICIAL_EMAIL}`}
              >
                {OFFICIAL_EMAIL}
              </a>

              <a
                className="mt-3 inline-flex w-full items-center justify-center rounded-xl border border-[var(--line)] bg-white/70 px-5 py-3 text-sm md:text-base font-semibold hover:bg-white"
                href={EVENT.proposalHref}
              >
                Download proposal (PDF)
              </a>

              <p className="mt-4 text-sm text-[var(--muted)]">
                PDF path: <span className="font-semibold">{EVENT.proposalHref}</span> (pastikan file ada di{" "}
                <span className="font-semibold">/public</span>)
              </p>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="border-t border-[var(--line)] bg-white/60">
          <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
            <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">
              <p className="text-sm text-[var(--muted)]">
                © {new Date().getFullYear()} IDECN. All rights reserved.
              </p>
              <div className="h-1 w-36 rounded-full bg-[linear-gradient(90deg,var(--id-red),var(--us-blue))]" />
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
