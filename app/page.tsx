import { getEvents, getPartners, getPrograms, getSite } from "../lib/cms";

function Chip({
  left,
  label,
}: {
  left?: "red" | "blue" | "neutral";
  label: string;
}) {
  return (
    <span className="pill">
      <span className={`dot ${left === "red" ? "red" : left === "blue" ? "blue" : ""}`} />
      {label}
    </span>
  );
}

export default async function Page() {
  const site = await getSite();
  const programs = await getPrograms();
  const events = await getEvents();
  const partners = await getPartners();

  const featured = events.find((e) => e.featured) ?? events[0];

  return (
    <main id="top">
      {/* HERO */}
      <section className="section">
        <div className="wrap">
          <div className="flex flex-col items-center text-center">
            <div className="flex flex-wrap items-center justify-center gap-2">
              <Chip left="neutral" label="Nonprofit (U.S.-based)" />
              <Chip left="neutral" label="Established 2024" />
              <Chip left="red" label="Indonesia ↔ U.S." />
            </div>

            <h1 className="h1 mt-8 max-w-5xl">{site.heroTitle}</h1>
            <p className="lead mt-6 max-w-3xl">{site.heroSubtitle}</p>

            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
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

            <div className="mt-10 flex items-center gap-2">
              <span className="dot red" />
              <span className="dot" />
              <span className="dot blue" />
            </div>
          </div>
        </div>
      </section>

      <div className="wrap">
        <div className="hr" />
      </div>

      {/* ABOUT */}
      <section id="about" className="section">
        <div className="wrap">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] items-start">
            <div>
              <div className="kicker">ABOUT</div>
              <h2 className="h2 mt-3">Who we are</h2>
              <p className="lead mt-6">
                <b>IDECN</b> is a U.S.-based nonprofit focused on building meaningful bridges
                between Indonesia and the United States—through education pathways, cultural
                exchange, and community programs that people actually enjoy.
              </p>

              <div className="mt-7 grid gap-4">
                <p className="p">
                  <b>Purpose:</b> {site.purpose}
                </p>
                <p className="p">
                  <b>Audience:</b> {site.audience.join(" • ")}
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-2">
                <Chip left="red" label="Indonesia perspectives" />
                <Chip left="blue" label="U.S. opportunities" />
                <Chip left="neutral" label="Practical execution" />
              </div>
            </div>

            <div className="card-solid p-7">
              <div className="kicker">AT A GLANCE</div>

              <div className="mt-5 grid gap-5">
                <div className="flex items-start justify-between gap-4">
                  <div className="text-sm font-extrabold text-[rgba(11,18,32,0.55)]">Focus</div>
                  <div className="text-[17px] font-black text-[var(--ink)] text-right">
                    Education • Culture • Community
                  </div>
                </div>

                <div className="hr" />

                <div className="flex items-start justify-between gap-4">
                  <div className="text-sm font-extrabold text-[rgba(11,18,32,0.55)]">Operating</div>
                  <div className="text-[17px] font-black text-[var(--ink)]">U.S.-based</div>
                </div>

                <div className="hr" />

                <div className="flex items-start justify-between gap-4">
                  <div className="text-sm font-extrabold text-[rgba(11,18,32,0.55)]">Contact</div>
                  <div className="text-[17px] font-black text-[var(--ink)]">{site.email}</div>
                </div>

                <div className="mt-3">
                  <a className="btn btn-ghost w-full" href="#contact">
                    Talk to us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROGRAMS */}
      <section id="programs" className="section-tight">
        <div className="wrap">
          <div className="kicker">PROGRAMS</div>
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <h2 className="h2 mt-3">What we deliver</h2>
            <p className="lead max-w-2xl">
              Simple, repeatable programs—built for clarity, credibility, and real partnership.
            </p>
          </div>

          <div className="mt-10 grid gap-6">
            {programs.map((p) => (
              <div key={p.title} className="card p-7">
                <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
                  <div>
                    <div className="h3">{p.title}</div>
                    <p className="p mt-3">{p.subtitle}</p>
                  </div>

                  <ul className="grid gap-3">
                    {p.bullets.map((b) => (
                      <li key={b} className="flex gap-3 text-[17px] leading-7 text-[var(--muted)]">
                        <span className="mt-[10px] h-2 w-2 rounded-full bg-[var(--red)]" />
                        <span>{b}</span>
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
      <section id="portfolio" className="section">
        <div className="wrap">
          <div className="kicker">PORTFOLIO</div>
          <h2 className="h2 mt-3">Proof of execution</h2>

          <div className="mt-10 grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="card-solid p-8">
              <div className="h3">{featured.title}</div>
              <p className="lead mt-4">{featured.summary}</p>

              <div className="mt-6 flex flex-wrap gap-2">
                <span className="pill">
                  <span className="dot" />
                  {featured.dateText}
                </span>
                <span className="pill">
                  <span className="dot" />
                  {featured.location}
                </span>
              </div>

              <div className="mt-7 flex flex-wrap gap-3">
                <a className="btn btn-primary" href="#get-involved">
                  Sponsor the next event
                </a>
                <a className="btn btn-ghost" href={site.proposalUrl}>
                  Download proposal (PDF)
                </a>
              </div>
            </div>

            <div className="card p-8">
              <div className="kicker">HIGHLIGHTS</div>
              <ul className="mt-6 grid gap-3">
                {featured.highlights.map((h) => (
                  <li key={h} className="flex items-center gap-3 text-[17px] text-[var(--muted)]">
                    <span className="h-2 w-2 rounded-full bg-[var(--blue)]" />
                    {h}
                  </li>
                ))}
              </ul>

              <div className="mt-7 hr" />
              <p className="p mt-6">
                Want the full event breakdown?{" "}
                <a className="font-extrabold text-[var(--blue)]" href={site.proposalUrl}>
                  Download the PDF proposal
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PARTNERS */}
      <section id="partners" className="section-tight">
        <div className="wrap">
          <div className="kicker">PARTNERS</div>
          <h2 className="h2 mt-3">Built for collaboration</h2>
          <p className="lead mt-4 max-w-3xl">
            We work with sponsors, donors, universities, schools, and community organizations.
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {partners.map((p) => (
              <div key={p.name} className="card-solid p-6">
                <div className="h3">{p.name}</div>
                <p className="p mt-2">{p.type}</p>
                {p.website ? (
                  <a
                    className="mt-5 inline-flex font-extrabold text-[var(--blue)]"
                    href={p.website}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Visit →
                  </a>
                ) : (
                  <span className="mt-5 inline-flex font-extrabold text-[rgba(11,18,32,0.45)]">
                    Open to collaborate
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GET INVOLVED */}
      <section id="get-involved" className="section">
        <div className="wrap">
          <div className="kicker">GET INVOLVED</div>
          <h2 className="h2 mt-3">Let’s build the next program together</h2>
          <p className="lead mt-4 max-w-3xl">
            Sponsor an event, fund a scholarship pathway, or partner with us to run a repeatable
            program with clear outcomes.
          </p>

          <div className="mt-9 grid gap-5 md:grid-cols-3">
            <div className="card p-7">
              <div className="h3">Sponsor</div>
              <p className="p mt-3">
                Help fund execution—venues, logistics, materials, and community outreach.
              </p>
              <div className="mt-6">
                <a className="btn btn-primary w-full" href="#contact">
                  Sponsor a program
                </a>
              </div>
            </div>

            <div className="card p-7">
              <div className="h3">Partner</div>
              <p className="p mt-3">
                Universities, schools, and organizations—run a program together with clear outcomes.
              </p>
              <div className="mt-6">
                <a className="btn btn-ghost w-full" href="#contact">
                  Become a partner
                </a>
              </div>
            </div>

            <div className="card p-7">
              <div className="h3">Volunteer</div>
              <p className="p mt-3">
                Support community-first events and education pathways with a focused role.
              </p>
              <div className="mt-6">
                <a className="btn btn-ghost w-full" href="#contact">
                  Join volunteers
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section-tight">
        <div className="wrap">
          <div className="card-solid p-8">
            <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <div className="kicker">CONTACT</div>
                <h2 className="h2 mt-3">Ready to collaborate?</h2>
                <p className="lead mt-4">
                  Email us and we’ll reply with a simple collaboration path (sponsor / partner /
                  volunteer).
                </p>
              </div>

              <div className="flex flex-col items-start gap-3 lg:items-end">
                <div className="text-[18px] font-black">{site.email}</div>
                <a className="btn btn-primary" href={`mailto:${site.email}?subject=Partnership`}>
                  Email IDECN
                </a>
                <div className="text-sm text-[rgba(11,18,32,0.55)]">
                  Put “Partnership” in the subject line.
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 pb-10 text-center text-sm text-[rgba(11,18,32,0.55)]">
            © {new Date().getFullYear()} IDECN. All rights reserved.
          </div>
        </div>
      </section>
    </main>
  );
}
