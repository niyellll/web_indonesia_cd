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

export default function Home() {
  return (
    <main className="mx-auto max-w-6xl px-4 sm:px-6">
      {/* HERO */}
      <section className="pt-12 sm:pt-16 pb-10 sm:pb-14">
        <div className="mx-auto max-w-3xl text-center">
          <div className="flex flex-wrap items-center justify-center gap-2 text-sm">
            <span className="rounded-full border border-[var(--line)] bg-white/80 px-3 py-1 text-[var(--muted)]">
              Nonprofit (U.S.-based) • Established 2024
            </span>
            <span className="rounded-full border border-[var(--line)] bg-white/80 px-3 py-1">
              <span className="font-bold" style={{ color: "var(--red)" }}>Indonesia</span>{" "}
              <span className="text-[var(--muted)]">↔</span>{" "}
              <span className="font-bold" style={{ color: "var(--blue)" }}>U.S.</span>
            </span>
          </div>

          <h1 className="mt-6 section-title">
            Indonesia Education & Cultural Network
          </h1>

          <p className="mt-5 text-lg sm:text-xl leading-relaxed text-[var(--muted)]">
            A U.S.-based nonprofit dedicated to fostering cross-cultural understanding, educational opportunities,
            and community connections between Indonesia and the United States.
          </p>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <a href="#get-involved" className="btn-primary">Get involved</a>
            <a href={EVENT.proposalHref} className="btn-outline">Download proposal (PDF)</a>
            <a href="#portfolio" className="btn-outline">View portfolio event</a>
          </div>

          <div className="mx-auto mt-8 h-1 w-32 rounded-full" style={{ background: "var(--red)" }} />
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-10 sm:py-12 border-t border-[var(--line)]">
        <p className="section-kicker">About</p>
        <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold tracking-tight">
          Who we are
        </h2>

        <div className="mt-6 grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="text-lg leading-relaxed text-[var(--muted)]">
              The Indonesia Education and Cultural Network (IDECN) is a nonprofit organization based in the United States.
              We build meaningful bridges between Indonesian and American communities through education, culture,
              and professional connection.
            </p>

            <div className="mt-6 border-l-4 pl-5" style={{ borderColor: "var(--blue)" }}>
              <p className="text-lg font-semibold">Mission</p>
              <p className="mt-2 text-lg leading-relaxed text-[var(--muted)]">
                Enhance mutual understanding between Indonesia and the United States by providing resources, support,
                and opportunities for students, educators, professionals, and cultural enthusiasts.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-[var(--line)] bg-white/85 p-6">
              <p className="text-sm font-bold uppercase tracking-wider text-[var(--muted)]">Primary audience</p>
              <ul className="mt-4 space-y-2 text-lg text-[var(--muted)]">
                <li className="flex gap-2">
                  <span className="mt-2 h-2 w-2 rounded-full" style={{ background: "var(--red)" }} />
                  Donors
                </li>
                <li className="flex gap-2">
                  <span className="mt-2 h-2 w-2 rounded-full" style={{ background: "var(--blue)" }} />
                  Investors
                </li>
                <li className="flex gap-2">
                  <span className="mt-2 h-2 w-2 rounded-full bg-black/40" />
                  Partners
                </li>
              </ul>
              <p className="mt-5 text-base text-[var(--muted)]">
                We use this website as a clear reference for partnerships and proposal discussions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROGRAMS */}
      <section id="programs" className="py-10 sm:py-12 border-t border-[var(--line)]">
        <p className="section-kicker">Programs</p>
        <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold tracking-tight">
          What we do
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-[var(--muted)] max-w-3xl">
          Our work focuses on education, cultural exchange, professional development, and community support —
          translated into practical programs and partnerships.
        </p>

        <div className="mt-8 grid gap-8 md:grid-cols-2">
          {[
            {
              title: "Educational Programs & Scholarships",
              items: [
                "Scholarship guidance & support for Indonesian students in the U.S.",
                "Exchange programs and study tours for students and educators.",
                "Language learning support (English / Indonesian).",
                "Internship connections to build real-world experience.",
              ],
            },
            {
              title: "Cultural Exchange & Awareness",
              items: [
                "Cultural events and festivals featuring arts, music, dance, and food.",
                "Cross-cultural dialogues, seminars, and workshops.",
              ],
            },
            {
              title: "Professional Development & Networking",
              items: [
                "Networking opportunities for students, professionals, and alumni.",
                "Workshops for cross-cultural communication and collaboration.",
              ],
            },
            {
              title: "Community Support",
              items: [
                "Volunteering and community-led initiatives.",
                "Donations and partner support for sustainable programs.",
              ],
            },
          ].map((p) => (
            <div key={p.title} className="rounded-2xl border border-[var(--line)] bg-white/85 p-6">
              <h3 className="text-xl font-extrabold">{p.title}</h3>
              <ul className="mt-4 space-y-2 text-lg text-[var(--muted)]">
                {p.items.map((t) => (
                  <li key={t} className="flex gap-3">
                    <span className="mt-3 h-2 w-2 rounded-full" style={{ background: "var(--red)" }} />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* PORTFOLIO EVENT */}
      <section id="portfolio" className="py-10 sm:py-12 border-t border-[var(--line)]">
        <p className="section-kicker">Portfolio</p>
        <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold tracking-tight">
          Proof of execution
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-[var(--muted)] max-w-3xl">
          Culinary Day is presented as a portfolio highlight — demonstrating IDECN’s capability to execute impactful public programs.
        </p>

        <div className="mt-8 rounded-3xl border border-[var(--line)] bg-white/85 p-7">
          <div className="grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <h3 className="text-2xl font-extrabold">{EVENT.title}</h3>
              <p className="mt-2 text-lg text-[var(--muted)]">{EVENT.hosts}</p>

              <div className="mt-5 space-y-2 text-lg">
                <p><span className="font-semibold">Date:</span> <span className="text-[var(--muted)]">{EVENT.date}</span></p>
                <p><span className="font-semibold">Time:</span> <span className="text-[var(--muted)]">{EVENT.time}</span></p>
                <p><span className="font-semibold">Venue:</span> <span className="text-[var(--muted)]">{EVENT.location}</span></p>
              </div>

              <div className="mt-6 flex flex-wrap gap-2 text-base text-[var(--muted)]">
                {["Food Bazaar", "Marketplace", "Exhibition", "Performances", "Art & Craft"].map((t) => (
                  <span key={t} className="rounded-full border border-[var(--line)] bg-white px-3 py-1">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl p-6 text-white" style={{ background: "var(--blue)" }}>
                <p className="text-lg font-extrabold">Open to the public • Free to attend</p>
                <p className="mt-2 text-base opacity-95">
                  Sponsor / Vendor / Performer opportunities available.
                </p>
                <a href={EVENT.proposalHref} className="mt-5 inline-flex w-full items-center justify-center rounded-xl bg-white px-4 py-3 text-base font-extrabold"
                   style={{ color: "var(--blue)" }}>
                  Download proposal (PDF)
                </a>
                <p className="mt-4 text-sm opacity-90">
                  Place your PDF at: <span className="font-bold">/public/indonesia-on-the-creek-proposal.pdf</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PARTNERS */}
      <section id="partners" className="py-10 sm:py-12 border-t border-[var(--line)]">
        <p className="section-kicker">Partners</p>
        <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold tracking-tight">
          Collaboration-ready
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-[var(--muted)] max-w-3xl">
          We work with community organizations, sponsors, and institutions to grow sustainable programs between Indonesia and the U.S.
        </p>
      </section>

      {/* GET INVOLVED */}
      <section id="get-involved" className="py-10 sm:py-12 border-t border-[var(--line)]">
        <p className="section-kicker">Get involved</p>
        <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold tracking-tight">
          There is a place for you
        </h2>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {[
            { title: "Students & Scholars", desc: "Scholarship guidance, networking, and exchange opportunities." },
            { title: "Cultural Enthusiasts", desc: "Join events, festivals, and cultural experiences." },
            { title: "Professionals & Alumni", desc: "Mentorship, networking, and collaborations." },
            { title: "Community Supporters", desc: "Volunteer, donate, and help expand impact." },
          ].map((c) => (
            <div key={c.title} className="rounded-2xl border border-[var(--line)] bg-white/85 p-6">
              <h3 className="text-xl font-extrabold">{c.title}</h3>
              <p className="mt-3 text-lg leading-relaxed text-[var(--muted)]">{c.desc}</p>
              <a href="#contact" className="mt-5 inline-flex rounded-xl px-4 py-2 text-base font-bold text-white"
                 style={{ background: "var(--red)" }}>
                Contact to join
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-10 sm:py-12 border-t border-[var(--line)]">
        <p className="section-kicker">Contact</p>
        <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold tracking-tight">
          Let’s work together
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-[var(--muted)] max-w-3xl">
          For sponsorship, vendor slots, partnerships, volunteering, or general inquiries.
        </p>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-[var(--line)] bg-white/85 p-6">
            <h3 className="text-xl font-extrabold">Committee</h3>
            <div className="mt-5 space-y-3">
              {CONTACTS.map((c) => (
                <a
                  key={c.phone}
                  href={c.href}
                  className="flex items-center justify-between gap-4 rounded-xl border border-[var(--line)] bg-white px-4 py-4 hover:bg-black/5"
                >
                  <div>
                    <p className="text-lg font-extrabold">
                      {c.name} <span className="text-[var(--muted)] font-semibold">• {c.role}</span>
                    </p>
                    <p className="text-base text-[var(--muted)]">{c.phone}</p>
                  </div>
                  <span className="rounded-full px-3 py-1 text-sm font-bold text-white" style={{ background: "var(--blue)" }}>
                    Call
                  </span>
                </a>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-[var(--line)] bg-white/85 p-6">
            <h3 className="text-xl font-extrabold">Email</h3>
            <p className="mt-3 text-lg text-[var(--muted)]">
              Update with your official IDECN email when ready.
            </p>

            <a className="mt-5 btn-primary w-full" href={`mailto:${OFFICIAL_EMAIL}`}>
              {OFFICIAL_EMAIL}
            </a>

            <a className="mt-3 btn-outline w-full" href={EVENT.proposalHref}>
              Download proposal (PDF)
            </a>
          </div>
        </div>

        <footer className="mt-12 border-t border-[var(--line)] py-6 text-sm text-[var(--muted)]">
          © {new Date().getFullYear()} IDECN. All rights reserved.
        </footer>
      </section>
    </main>
  );
}
