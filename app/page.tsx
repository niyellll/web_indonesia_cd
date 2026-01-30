import { getEvents, getPartners, getPrograms, getSite } from "../lib/cms";

export default async function HomePage() {
  const [site, programs, events, partners] = await Promise.all([
    getSite(),
    getPrograms(),
    getEvents(),
    getPartners(),
  ]);

  const featured = events.find((e) => e.featured) ?? events[0];

  return (
    <main id="top">
      {/* HERO */}
      <section className="section">
        <div className="wrap">
          <div className="badges">
            <span className="badge">
              <span className="dot red" /> Nonprofit (U.S.-based)
            </span>
            <span className="badge">
              <span className="dot blue" /> Established 2024
            </span>
            <span className="badge">
              <span className="dot red" /> Indonesia <span className="muted">↔</span> <span className="dot blue" /> U.S.
            </span>
          </div>

          <div className="text-center">
            <h1 className="h1 mt-10">{site.heroTitle}</h1>
            <p className="lead mx-auto mt-6" style={{ maxWidth: 860 }}>
              {site.heroSubtitle}
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a className="btn btn-primary" href="#get-involved">
                Get involved
              </a>
              <a className="btn btn-outline-blue" href={site.proposalUrl}>
                Download proposal (PDF)
              </a>
              <a className="btn btn-ghost" href="#portfolio">
                View portfolio event
              </a>
            </div>

            <div className="mt-14 flex justify-center">
              <div style={{ width: 220 }}>
                <div className="hr" />
                <div className="mt-4 flex justify-center gap-10">
                  <span style={{ width: 28, height: 4, background: "var(--red)", borderRadius: 999 }} />
                  <span style={{ width: 28, height: 4, background: "var(--blue)", borderRadius: 999 }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section alt">
        <div className="wrap">
          <div className="split">
            <div>
              <div className="kicker">About</div>
              <h2 className="h2 mt-3">Who we are</h2>
              <p className="lead mt-6" style={{ maxWidth: 720 }}>
                {site.orgName} is a U.S.-based nonprofit focused on building meaningful bridges between Indonesia and the
                United States—through education pathways, cultural exchange, and community programs that people actually enjoy.
              </p>

              <div className="mt-10 grid gap-10">
                <div>
                  <div className="kicker">Purpose</div>
                  <p className="mt-2">
                    <span className="font-extrabold">Clear + credible.</span>{" "}
                    {site.purpose}
                  </p>
                </div>
                <div>
                  <div className="kicker">Audience</div>
                  <p className="mt-2 muted">{site.audience.join(" • ")}</p>
                </div>
              </div>
            </div>

            <div>
              {/* NOT crowded card: use one clean panel only */}
              <div className="panel pad">
                <div className="kicker">At a glance</div>

                <div className="mt-6 grid gap-4">
                  <div className="flex items-start justify-between gap-6">
                    <div className="muted font-bold">Focus</div>
                    <div className="text-right font-extrabold">Education • Culture • Community</div>
                  </div>
                  <div className="hr" />
                  <div className="flex items-start justify-between gap-6">
                    <div className="muted font-bold">Operating</div>
                    <div className="text-right font-extrabold">U.S.-based</div>
                  </div>
                  <div className="hr" />
                  <div className="flex items-start justify-between gap-6">
                    <div className="muted font-bold">Contact</div>
                    <div className="text-right font-extrabold">{site.email}</div>
                  </div>
                </div>

                <div className="mt-8">
                  <a className="btn btn-ghost w-full" href="#contact">
                    Talk to us
                  </a>
                </div>
              </div>

              <div className="mt-6 panel pad" style={{ background: "rgba(255,255,255,0.78)" }}>
                <div className="kicker">Theme</div>
                <p className="mt-3 muted">{site.themeNote}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROGRAMS */}
      <section id="programs" className="section">
        <div className="wrap">
          <div className="kicker">Programs</div>
          <h2 className="h2 mt-3">What we deliver</h2>
          <p className="lead mt-4" style={{ maxWidth: 880 }}>
            Designed to feel modern, repeatable, and easy to partner with—so visitors don’t get bored, and partners can
            quickly understand what you actually do.
          </p>

          <div className="mt-12 grid gap-12">
            {programs.map((p, idx) => (
              <div key={p.title}>
                <div className="split">
                  <div>
                    <h3 className="text-2xl font-black tracking-tight">{p.title}</h3>
                    {p.desc ? <p className="mt-3 muted">{p.desc}</p> : null}
                  </div>

                  <div className="list">
                    {p.bullets.map((b, i) => (
                      <div className="li" key={b}>
                        <span className={`bullet ${idx % 2 === 0 ? "" : "blue"}`} />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-10 hr" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="section alt">
        <div className="wrap">
          <div className="kicker">Portfolio</div>
          <h2 className="h2 mt-3">Proof of execution</h2>

          <div className="mt-12 split">
            <div>
              <h3 className="text-3xl font-black tracking-tight">{featured.title}</h3>
              <p className="lead mt-5" style={{ maxWidth: 720 }}>
                {featured.summary}
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <span className="badge">
                  <span className="dot red" /> {featured.dateText}
                </span>
                <span className="badge">
                  <span className="dot blue" /> {featured.location}
                </span>
              </div>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <a className="btn btn-primary" href="#get-involved">
                  Sponsor the next event
                </a>
                <a className="btn btn-outline-blue" href={site.proposalUrl}>
                  Download proposal (PDF)
                </a>
              </div>
            </div>

            <div className="panel pad">
              <div className="kicker">Highlights</div>
              <div className="mt-6 list">
                {featured.highlights.map((h, i) => (
                  <div className="li" key={h}>
                    <span className={`bullet ${i % 2 === 0 ? "blue" : ""}`} />
                    <span>{h}</span>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <a className="btn btn-ghost w-full" href={site.proposalUrl}>
                  View full breakdown (PDF)
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PARTNERS */}
      <section id="partners" className="section">
        <div className="wrap">
          <div className="kicker">Partners</div>
          <h2 className="h2 mt-3">Built with collaborators</h2>
          <p className="lead mt-4" style={{ maxWidth: 880 }}>
            Simple, clear categories—so visitors instantly see where they belong.
          </p>

          <div className="mt-10 grid gap-12 md:grid-cols-3">
            {partners.map((p, i) => (
              <div key={p.name}>
                <div className="text-xl font-black tracking-tight">{p.name}</div>
                <div className="muted mt-2">{p.type}</div>
                {p.website ? (
                  <a className="mt-3 inline-block font-extrabold" href={p.website} target="_blank" rel="noreferrer">
                    Visit website
                  </a>
                ) : null}
                <div className="mt-8 hr" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GET INVOLVED */}
      <section id="get-involved" className="section alt">
        <div className="wrap">
          <div className="split">
            <div>
              <div className="kicker">Get involved</div>
              <h2 className="h2 mt-3">Let’s work together</h2>
              <p className="lead mt-5" style={{ maxWidth: 720 }}>
                If you’re a donor, partner organization, school, or community leader—we’d love to collaborate.
                We move fast, keep execution clean, and document outcomes.
              </p>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <a className="btn btn-primary" href="#contact">
                  Contact IDECN
                </a>
                <a className="btn btn-outline-blue" href={site.proposalUrl}>
                  Download proposal (PDF)
                </a>
              </div>
            </div>

            <div className="panel pad" id="contact">
              <div className="kicker">Contact</div>
              <div className="mt-6 text-2xl font-black tracking-tight">{site.email}</div>
              <p className="muted mt-3">
                Prefer email? Click below and we’ll reply with next steps.
              </p>

              <div className="mt-8 grid gap-3">
                <a className="btn btn-ghost w-full" href={`mailto:${site.email}`}>
                  Email us
                </a>
                <a className="btn btn-outline-blue w-full" href={site.proposalUrl}>
                  Proposal PDF
                </a>
              </div>

              <div className="mt-10 muted text-sm">
                Tip: put your PDF here → <span className="font-extrabold">/public/indonesia-on-the-creek-proposal.pdf</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
