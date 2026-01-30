import { getEvents, getPartners, getPrograms, getSite } from "../lib/cms";

function Dot({ color }: { color: "red" | "blue" }) {
  return (
    <span
      className="dot"
      style={{ background: color === "red" ? "var(--id-red)" : "var(--id-blue)" }}
    />
  );
}

export default async function Home() {
  const site = await getSite();
  const programs = await getPrograms();
  const events = await getEvents();
  const partners = await getPartners();

  const featured = events.find((e) => e.featured) || events[0];

  return (
    <div>
      {/* HERO */}
      <section className="section">
        <div className="wrap">
          <div style={{ textAlign: "center" }}>
            <div className="kicker">Nonprofit • U.S.-based • Established 2024</div>

            <h1 className="h1" style={{ marginTop: 16 }}>
              {site.heroTitle || "Indonesia Education & Cultural Network"}
            </h1>

            <p className="lead" style={{ marginTop: 18, maxWidth: 860, marginInline: "auto" }}>
              {site.heroSubtitle ||
                "A U.S.-based nonprofit dedicated to fostering cross-cultural understanding, educational opportunities, and community connections between Indonesia and the United States."}
            </p>

            {/* pills */}
            <div
              style={{
                marginTop: 18,
                display: "flex",
                gap: 10,
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <span className="pill">
                <Dot color="blue" />
                U.S.-based nonprofit
              </span>
              <span className="pill">
                <Dot color="red" />
                Indonesia ↔ U.S.
              </span>
              <span className="pill">
                <span
                  className="dot"
                  style={{ background: "rgba(15,23,42,0.45)" }}
                />
                Community-first
              </span>
            </div>

            {/* CTA */}
            <div
              style={{
                marginTop: 26,
                display: "flex",
                gap: 12,
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <a className="btn btn-primary" href="#get-involved">
                Get involved
              </a>
              <a className="btn btn-ghost" href={site.proposalUrl}>
                Download proposal (PDF)
              </a>
              <a className="btn btn-ghost" href="#portfolio">
                View portfolio event
              </a>
            </div>

            {/* subtle underline */}
            <div style={{ marginTop: 26, display: "flex", justifyContent: "center" }}>
              <div style={{ width: 180, height: 4, borderRadius: 999, overflow: "hidden" }}>
                <div style={{ display: "flex", height: "100%" }}>
                  <div style={{ width: "50%", background: "var(--id-red)" }} />
                  <div style={{ width: "50%", background: "var(--id-blue)" }} />
                </div>
              </div>
            </div>
          </div>

          <div style={{ marginTop: 56 }} className="hr" />
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section anchor-pad">
        <div className="wrap">
          <div className="kicker">About</div>
          <h2 className="h2" style={{ marginTop: 10 }}>
            Who we are
          </h2>

          <div
            style={{
              marginTop: 26,
              display: "grid",
              gridTemplateColumns: "1.2fr 0.8fr",
              gap: 22,
            }}
          >
            <div>
              <p className="lead">
                <b style={{ color: "var(--ink)" }}>{site.orgName}</b> is a U.S.-based nonprofit
                focused on building meaningful bridges between Indonesia and the United States—through
                education pathways, cultural exchange, and community programs that people actually enjoy.
              </p>

              <div style={{ marginTop: 18 }}>
                <p className="small-muted" style={{ margin: 0 }}>
                  <b style={{ color: "var(--ink)" }}>Purpose:</b> {site.purpose}
                </p>
                <p className="small-muted" style={{ marginTop: 10 }}>
                  <b style={{ color: "var(--ink)" }}>Audience:</b> {site.audience.join(" • ")}
                </p>
              </div>

              <div style={{ marginTop: 18, display: "flex", gap: 10, flexWrap: "wrap" }}>
                <span className="pill">
                  <Dot color="red" />
                  Indonesia perspectives
                </span>
                <span className="pill">
                  <Dot color="blue" />
                  U.S. opportunities
                </span>
                <span className="pill">
                  <span className="dot" style={{ background: "rgba(15,23,42,0.45)" }} />
                  Practical execution
                </span>
              </div>
            </div>

            <div className="card">
              <div className="kicker">At a glance</div>
              <div style={{ marginTop: 14 }} />

              <div style={{ display: "grid", gap: 14 }}>
                <div>
                  <div className="small-muted" style={{ fontWeight: 800, marginBottom: 4 }}>
                    Focus
                  </div>
                  <div style={{ fontWeight: 900, fontSize: 18 }}>Education • Culture • Community</div>
                </div>

                <div className="hr" />

                <div>
                  <div className="small-muted" style={{ fontWeight: 800, marginBottom: 4 }}>
                    Operating
                  </div>
                  <div style={{ fontWeight: 900, fontSize: 18 }}>U.S.-based</div>
                </div>

                <div className="hr" />

                <div>
                  <div className="small-muted" style={{ fontWeight: 800, marginBottom: 4 }}>
                    Contact
                  </div>
                  <div style={{ fontWeight: 900, fontSize: 18 }}>{site.email}</div>
                </div>

                <a className="btn btn-ghost" href="#contact" style={{ marginTop: 6 }}>
                  Talk to us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROGRAMS */}
      <section id="programs" className="section anchor-pad">
        <div className="wrap">
          <div className="kicker">Programs</div>
          <h2 className="h2" style={{ marginTop: 10 }}>
            What we deliver
          </h2>
          <p className="lead" style={{ marginTop: 12, maxWidth: 820 }}>
            Simple, repeatable programs—built for clarity, credibility, and real partnership.
          </p>

          <div style={{ marginTop: 26, display: "grid", gap: 16 }}>
            {programs.map((p) => (
              <div key={p.title} className="card">
                <div style={{ display: "grid", gridTemplateColumns: "0.9fr 1.1fr", gap: 18 }}>
                  <div>
                    <div style={{ fontWeight: 950, fontSize: 22, letterSpacing: "-0.01em" }}>
                      {p.title}
                    </div>
                    <p className="small-muted" style={{ marginTop: 8 }}>
                      Designed to be practical, repeatable, and easy to partner with.
                    </p>
                  </div>

                  <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.9 }}>
                    {p.bullets.map((b, idx) => (
                      <li key={idx} className="small-muted" style={{ fontSize: 16 }}>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="section anchor-pad">
        <div className="wrap">
          <div className="kicker">Portfolio</div>
          <h2 className="h2" style={{ marginTop: 10 }}>
            Proof of execution
          </h2>

          {featured && (
            <div style={{ marginTop: 26 }} className="card">
              <div style={{ display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: 22 }}>
                <div>
                  <div style={{ fontWeight: 950, fontSize: 30, letterSpacing: "-0.02em", lineHeight: 1.12 }}>
                    {featured.title}
                  </div>
                  <p className="lead" style={{ marginTop: 12 }}>
                    {featured.summary}
                  </p>

                  <div
                    style={{
                      marginTop: 18,
                      display: "flex",
                      gap: 10,
                      flexWrap: "wrap",
                    }}
                  >
                    <span className="pill">
                      <span className="dot" style={{ background: "rgba(15,23,42,0.45)" }} />
                      {featured.dateText}
                    </span>
                    <span className="pill">
                      <span className="dot" style={{ background: "rgba(15,23,42,0.45)" }} />
                      {featured.location}
                    </span>
                  </div>

                  <div style={{ marginTop: 18, display: "flex", gap: 12, flexWrap: "wrap" }}>
                    <a className="btn btn-primary" href="#get-involved">
                      Sponsor the next event
                    </a>
                    <a className="btn btn-ghost" href={site.proposalUrl}>
                      Download proposal (PDF)
                    </a>
                  </div>
                </div>

                <div>
                  <div className="kicker">Highlights</div>
                  <ul style={{ marginTop: 12, paddingLeft: 18, lineHeight: 1.9 }}>
                    {featured.highlights.map((h, idx) => (
                      <li key={idx} className="small-muted" style={{ fontSize: 16 }}>
                        {h}
                      </li>
                    ))}
                  </ul>

                  <div style={{ marginTop: 14 }} className="hr" />
                  <p className="small-muted" style={{ marginTop: 12 }}>
                    Want the full event breakdown? Download the PDF proposal.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* PARTNERS */}
      <section id="partners" className="section anchor-pad">
        <div className="wrap">
          <div className="kicker">Partners</div>
          <h2 className="h2" style={{ marginTop: 10 }}>
            Built for collaboration
          </h2>
          <p className="lead" style={{ marginTop: 12, maxWidth: 880 }}>
            We work with sponsors, donors, universities, schools, and community organizations.
          </p>

          <div
            style={{
              marginTop: 22,
              display: "grid",
              gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
              gap: 14,
            }}
          >
            {partners.map((p) => (
              <div key={p.name} className="card">
                <div style={{ fontWeight: 950, fontSize: 18 }}>{p.name}</div>
                <div className="small-muted" style={{ marginTop: 6 }}>
                  {p.type}
                </div>
                {p.website ? (
                  <a
                    className="small-muted"
                    style={{ display: "inline-block", marginTop: 12, fontWeight: 900 }}
                    href={p.website}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Visit website →
                  </a>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GET INVOLVED */}
      <section id="get-involved" className="section anchor-pad">
        <div className="wrap">
          <div className="kicker">Get involved</div>
          <h2 className="h2" style={{ marginTop: 10 }}>
            Let’s build the next program together
          </h2>
          <p className="lead" style={{ marginTop: 12, maxWidth: 900 }}>
            Sponsor an event, fund a scholarship pathway, or partner with us to run a repeatable program.
          </p>

          <div style={{ marginTop: 22, display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: 14 }}>
            <div className="card">
              <div style={{ fontWeight: 950, fontSize: 18 }}>Sponsor</div>
              <p className="small-muted" style={{ marginTop: 8 }}>
                Help fund execution—venues, logistics, materials, and community outreach.
              </p>
            </div>
            <div className="card">
              <div style={{ fontWeight: 950, fontSize: 18 }}>Partner</div>
              <p className="small-muted" style={{ marginTop: 8 }}>
                Universities, schools, and organizations—run a program together with clear outcomes.
              </p>
            </div>
            <div className="card">
              <div style={{ fontWeight: 950, fontSize: 18 }}>Volunteer</div>
              <p className="small-muted" style={{ marginTop: 8 }}>
                Support community-first events and education pathways with a focused role.
              </p>
            </div>
          </div>

          <div style={{ marginTop: 22 }} className="card" id="contact">
            <div style={{ display: "grid", gridTemplateColumns: "1.2fr 0.8fr", gap: 18, alignItems: "center" }}>
              <div>
                <div className="kicker">Contact</div>
                <div style={{ fontWeight: 950, fontSize: 26, letterSpacing: "-0.02em", marginTop: 8 }}>
                  Ready to collaborate?
                </div>
                <p className="lead" style={{ marginTop: 10 }}>
                  Email us and we’ll reply with a simple collaboration path (sponsor / partner / volunteer).
                </p>
              </div>
              <div style={{ textAlign: "right" }}>
                <div style={{ fontWeight: 950, fontSize: 18 }}>{site.email}</div>
                <a className="btn btn-primary" style={{ marginTop: 12 }} href={`mailto:${site.email}`}>
                  Email IDECN
                </a>
                <div className="small-muted" style={{ marginTop: 10 }}>
                  Put “Partnership” in the subject line.
                </div>
              </div>
            </div>
          </div>

          <div style={{ marginTop: 28 }} className="hr" />
          <div className="small-muted" style={{ marginTop: 14 }}>
            © {new Date().getFullYear()} IDECN. All rights reserved.
          </div>
        </div>
      </section>
    </div>
  );
}
