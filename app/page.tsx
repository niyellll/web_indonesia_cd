import { getEvents, getPartners, getPrograms, getSite } from "../lib/cms";

function ChipRow() {
  return (
    <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
      <span className="pill">Nonprofit (U.S.-based)</span>
      <span className="pill">Established <strong>2024</strong></span>
      <span className="pill">
        <span style={{ color: "var(--red)", fontWeight: 900 }}>Indonesia</span>{" "}
        ↔{" "}
        <span style={{ color: "var(--blue)", fontWeight: 900 }}>U.S.</span>
      </span>
    </div>
  );
}

function Split({
  left,
  right,
}: {
  left: React.ReactNode;
  right: React.ReactNode;
}) {
  return (
    <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
      <div className="lg:col-span-7">{left}</div>
      <div className="lg:col-span-5">{right}</div>
    </div>
  );
}

function Stat({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="panel panel-pad">
      <div className="text-xs font-extrabold tracking-[0.16em] uppercase text-[var(--muted)]">
        {label}
      </div>
      <div className="mt-2 text-2xl sm:text-3xl font-black tracking-tight">
        {value}
      </div>
    </div>
  );
}

export default async function Home() {
  const site = await getSite();
  const programs = await getPrograms();
  const events = await getEvents();
  const partners = await getPartners();

  const featured = events?.find((e: any) => e.featured) || events?.[0];

  return (
    <main>
      {/* HERO (Apple-like: center, huge type, lots of whitespace) */}
      <section className="section">
        <div className="mx-auto max-w-[var(--container)] px-4 sm:px-6 text-center">
          <div className="h-eyebrow">Indonesia Education & Cultural Network</div>
          <ChipRow />

          <h1 className="h1 mt-8">
            {site?.heroTitle || "Indonesia Education & Cultural Network"}
          </h1>

          <p className="lead mx-auto mt-6 max-w-3xl">
            {site?.heroSubtitle ||
              "A U.S.-based nonprofit dedicated to fostering cross-cultural understanding, educational opportunities, and community connections between Indonesia and the United States."}
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a href="#get-involved" className="btn btn-primary">
              Get involved
            </a>
            <a
              href={featured?.proposalHref || "/indonesia-on-the-creek-proposal.pdf"}
              className="btn btn-outline"
            >
              Download proposal (PDF)
            </a>
            <a href="#portfolio" className="btn btn-outline">
              View portfolio event
            </a>
          </div>

          <div className="mt-10 flex justify-center">
            <div className="accent-underline" />
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ABOUT */}
      <section id="about" className="section scroll-mt-28">
        <div className="mx-auto max-w-[var(--container)] px-4 sm:px-6">
          <div className="text-center">
            <div className="h-eyebrow">About</div>
            <h2 className="h2 mt-3">Who we are</h2>
            <p className="lead mx-auto mt-5 max-w-3xl">
              {site?.aboutIntro ||
                "IDECN bridges Indonesian and American communities through education, culture, and professional connection—built for donors, investors, and partners."}
            </p>
          </div>

          <div className="mt-12">
            <Split
              left={
                <div className="panel panel-pad">
                  <h3 className="text-xl sm:text-2xl font-black tracking-tight">
                    Mission
                  </h3>
                  <p className="mt-4 text-[var(--muted)] leading-relaxed">
                    {site?.mission ||
                      "Enhance mutual understanding between Indonesia and the United States by providing resources, support, and opportunities for students, educators, professionals, and cultural enthusiasts."}
                  </p>

                  <div className="mt-8 grid gap-4 sm:grid-cols-2">
                    <Stat label="Audience" value="Donors • Investors • Partners" />
                    <Stat label="Approach" value="Programs + Events" />
                  </div>
                </div>
              }
              right={
                <div className="panel panel-pad">
                  <div className="h-eyebrow">What you get</div>
                  <h3 className="mt-3 text-xl sm:text-2xl font-black tracking-tight">
                    A clear story to share with stakeholders
                  </h3>
                  <ul className="mt-5 space-y-3 text-[var(--muted)]">
                    {[
                      "Instant overview of the foundation and its impact focus.",
                      "Portfolio event as proof of execution.",
                      "Proposal-ready website for sponsors/investors.",
                      "CMS-ready content structure for updates later.",
                    ].map((t) => (
                      <li key={t} className="flex gap-3">
                        <span
                          className="mt-2 h-2 w-2 rounded-full"
                          style={{ background: "var(--blue)" }}
                        />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              }
            />
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* PROGRAMS (less cards, more “feature tiles”) */}
      <section id="programs" className="section scroll-mt-28">
        <div className="mx-auto max-w-[var(--container)] px-4 sm:px-6">
          <div className="text-center">
            <div className="h-eyebrow">Programs</div>
            <h2 className="h2 mt-3">What we do</h2>
            <p className="lead mx-auto mt-5 max-w-3xl">
              Four pillars designed to be sponsor-friendly, measurable, and repeatable.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {(programs?.length ? programs : [
              { title: "Education & Scholarships", bullets: ["Scholarship guidance", "Exchange & study tours", "Language learning", "Internship connections"] },
              { title: "Cultural Exchange", bullets: ["Public festivals & showcases", "Cross-cultural dialogues", "Workshops & seminars"] },
              { title: "Professional Networking", bullets: ["Mentorship connections", "Career workshops", "Alumni collaborations"] },
              { title: "Community Support", bullets: ["Volunteer programs", "Partner initiatives", "Community-driven impact"] },
            ]).map((p: any) => (
              <div key={p.title} className="panel panel-pad">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl sm:text-2xl font-black tracking-tight">
                    {p.title}
                  </h3>
                  <span className="pill">
                    <strong style={{ color: "var(--red)" }}>Pillar</strong>
                  </span>
                </div>
                <ul className="mt-5 space-y-3 text-[var(--muted)]">
                  {(p.bullets || []).slice(0, 6).map((b: string) => (
                    <li key={b} className="flex gap-3">
                      <span
                        className="mt-2 h-2 w-2 rounded-full"
                        style={{ background: "var(--red)" }}
                      />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* PORTFOLIO EVENT (Apple-like: big highlight panel) */}
      <section id="portfolio" className="section scroll-mt-28">
        <div className="mx-auto max-w-[var(--container)] px-4 sm:px-6">
          <div className="text-center">
            <div className="h-eyebrow">Portfolio</div>
            <h2 className="h2 mt-3">Proof of execution</h2>
            <p className="lead mx-auto mt-5 max-w-3xl">
              Culinary Day is presented as a portfolio highlight—demonstrating IDECN’s capability to execute impactful public programs.
            </p>
          </div>

          <div className="mt-12">
            <Split
              left={
                <div className="panel panel-pad">
                  <div className="h-eyebrow">Featured event</div>
                  <h3 className="mt-3 text-2xl sm:text-3xl font-black tracking-tight">
                    {featured?.title || "Indonesia Culinary Day on the Creek"}
                  </h3>

                  <div className="mt-6 grid gap-3 text-[var(--muted)]">
                    <div><strong className="text-[var(--ink)]">Date:</strong> {featured?.date || "Saturday, August 2, 2025"}</div>
                    <div><strong className="text-[var(--ink)]">Time:</strong> {featured?.time || "11AM – 4PM"}</div>
                    <div><strong className="text-[var(--ink)]">Venue:</strong> {featured?.location || "Carroll Creek Park • Downtown Frederick • Maryland, USA"}</div>
                  </div>

                  <div className="mt-8 flex flex-wrap gap-2 justify-center sm:justify-start">
                    {["Food Bazaar", "Marketplace", "Exhibition", "Performances", "Art & Craft"].map((t) => (
                      <span key={t} className="pill">{t}</span>
                    ))}
                  </div>

                  <div className="mt-10 flex flex-wrap gap-3">
                    <a
                      href={featured?.proposalHref || "/indonesia-on-the-creek-proposal.pdf"}
                      className="btn btn-primary"
                    >
                      Download proposal (PDF)
                    </a>
                    <a href="#contact" className="btn btn-outline">
                      Sponsor / Vendor inquiry
                    </a>
                  </div>

                  <p className="mt-6 text-sm text-[var(--muted)]">
                    Place your PDF at: <strong className="text-[var(--ink)]">/public/indonesia-on-the-creek-proposal.pdf</strong>
                  </p>
                </div>
              }
              right={
                <div className="panel panel-pad">
                  <div className="h-eyebrow">Why it matters</div>
                  <h3 className="mt-3 text-xl sm:text-2xl font-black tracking-tight">
                    A repeatable format for sponsors & partners
                  </h3>

                  <ul className="mt-6 space-y-3 text-[var(--muted)]">
                    {[
                      "Clear sponsor visibility (branding, booths, stage mentions).",
                      "High community turnout potential in public venues.",
                      "Scalable yearly event that builds IDECN credibility.",
                      "Supports scholarship guidance & networking programs.",
                    ].map((t) => (
                      <li key={t} className="flex gap-3">
                        <span className="mt-2 h-2 w-2 rounded-full" style={{ background: "var(--blue)" }} />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-10 grid gap-4 sm:grid-cols-2">
                    <Stat label="Positioning" value="Portfolio + Proposal" />
                    <Stat label="Outcome" value="Trust + Funding" />
                  </div>
                </div>
              }
            />
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* PARTNERS */}
      <section id="partners" className="section scroll-mt-28">
        <div className="mx-auto max-w-[var(--container)] px-4 sm:px-6">
          <div className="text-center">
            <div className="h-eyebrow">Partners</div>
            <h2 className="h2 mt-3">Collaborate with IDECN</h2>
            <p className="lead mx-auto mt-5 max-w-3xl">
              We welcome sponsors, institutions, and community partners in the U.S. and Indonesia.
            </p>
          </div>

          <div className="mt-12 panel panel-pad">
            <div className="flex flex-wrap items-center justify-center gap-3">
              {(partners?.length ? partners : [
                { name: "Community Partner" },
                { name: "Education Partner" },
                { name: "Sponsor Partner" },
                { name: "Cultural Partner" },
              ]).map((p: any) => (
                <a
                  key={p.name}
                  href={p.website || "#contact"}
                  className="pill hover:opacity-90"
                  target={p.website ? "_blank" : undefined}
                  rel={p.website ? "noreferrer" : undefined}
                >
                  {p.name}
                </a>
              ))}
            </div>

            <div className="mt-8 text-center">
              <a href="#contact" className="btn btn-blue">
                Become a partner
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* GET INVOLVED */}
      <section id="get-involved" className="section scroll-mt-28">
        <div className="mx-auto max-w-[var(--container)] px-4 sm:px-6">
          <div className="text-center">
            <div className="h-eyebrow">Get involved</div>
            <h2 className="h2 mt-3">There’s a place for you</h2>
            <p className="lead mx-auto mt-5 max-w-3xl">
              Students, professionals, cultural enthusiasts, community supporters—join IDECN’s mission.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {[
              { title: "Students & Scholars", desc: "Scholarship guidance, exchange, and mentorship pathways." },
              { title: "Cultural Enthusiasts", desc: "Festivals, showcases, and Indonesian cultural experiences." },
              { title: "Professionals & Alumni", desc: "Networking, collaboration, and career development." },
              { title: "Community Supporters", desc: "Volunteer, donate, and help expand IDECN’s impact." },
            ].map((c) => (
              <div key={c.title} className="panel panel-pad">
                <h3 className="text-xl sm:text-2xl font-black tracking-tight">{c.title}</h3>
                <p className="mt-4 text-[var(--muted)] leading-relaxed">{c.desc}</p>
                <div className="mt-6">
                  <a href="#contact" className="btn btn-outline">
                    Contact to join
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* CONTACT */}
      <section id="contact" className="section scroll-mt-28">
        <div className="mx-auto max-w-[var(--container)] px-4 sm:px-6">
          <div className="text-center">
            <div className="h-eyebrow">Contact</div>
            <h2 className="h2 mt-3">Let’s work together</h2>
            <p className="lead mx-auto mt-5 max-w-3xl">
              Sponsorship, vendor slots, partnerships, volunteering, or general inquiries.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <div className="panel panel-pad">
              <h3 className="text-xl sm:text-2xl font-black tracking-tight">Committee</h3>
              <div className="mt-6 space-y-3">
                {(site?.contacts?.length ? site.contacts : [
                  { name: "Wati Soetojo", role: "Committee", phone: "+1 240 483 6113", href: "tel:+12404836113" },
                  { name: "Haris Koentjoro", role: "Committee", phone: "+1 443 570 9509", href: "tel:+14435709509" },
                ]).map((c: any) => (
                  <a
                    key={c.phone}
                    href={c.href || `tel:${String(c.phone).replace(/\s/g,"")}`}
                    className="flex items-center justify-between gap-4 rounded-2xl border border-[var(--line)] bg-white/70 px-5 py-4 hover:bg-white"
                  >
                    <div>
                      <div className="font-extrabold">{c.name}</div>
                      <div className="text-[var(--muted)]">{c.role} • {c.phone}</div>
                    </div>
                    <span className="pill">
                      <strong style={{ color: "var(--red)" }}>Call</strong>
                    </span>
                  </a>
                ))}
              </div>
            </div>

            <div className="panel panel-pad">
              <h3 className="text-xl sm:text-2xl font-black tracking-tight">Email & Downloads</h3>
              <p className="mt-4 text-[var(--muted)]">
                Update with your official IDECN email when ready.
              </p>

              <div className="mt-6 grid gap-3">
                <a
                  className="btn btn-primary w-full"
                  href={`mailto:${site?.officialEmail || "hello@idecn.org"}`}
                >
                  {site?.officialEmail || "hello@idecn.org"}
                </a>

                <a
                  className="btn btn-outline w-full"
                  href={featured?.proposalHref || "/indonesia-on-the-creek-proposal.pdf"}
                >
                  Download proposal (PDF)
                </a>

                <p className="text-sm text-[var(--muted)]">
                  Proposal path: <strong className="text-[var(--ink)]">/public/indonesia-on-the-creek-proposal.pdf</strong>
                </p>
              </div>
            </div>
          </div>

          <div className="mt-14 text-center text-sm text-[var(--muted)]">
            © {new Date().getFullYear()} IDECN. All rights reserved.
          </div>
        </div>
      </section>
    </main>
  );
}
