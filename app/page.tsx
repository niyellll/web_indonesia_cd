// app/page.tsx
import { getEvents, getPartners, getPrograms, getSite } from "../lib/cms";

function Divider() {
  return (
    <div className="wrap">
      <div className="my-16 h-px" style={{ background: "var(--line)" }} />
    </div>
  );
}

export default async function Home() {
  const site = await getSite();
  const programs = await getPrograms();
  const events = await getEvents();
  const partners = await getPartners();
  const featured = events.find((e) => e.featured) || events[0];

  return (
    <div className="pb-24">
      {/* HERO */}
      <section className="pt-16 md:pt-20">
        <div className="wrap">
          <div className="mx-auto max-w-4xl text-center">
            <div className="flex flex-wrap justify-center gap-2">
              <span className="pill">
                <span className="dot" style={{ background: "var(--blue)" }} />
                Nonprofit (U.S.-based)
              </span>
              <span className="pill">
                <span className="dot" />
                Established 2024
              </span>
              <span className="pill">
                <span className="dot" style={{ background: "var(--red)" }} />
                {site.tagline}
              </span>
            </div>

            <h1 className="h1 mt-8">{site.heroTitle}</h1>
            <p className="lead mx-auto mt-6 max-w-3xl">{site.heroSubtitle}</p>

            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a href="#involved" className="btn btn-primary">
                Get involved
              </a>
              <a href={site.proposalUrl} className="btn btn-ghost">
                Download proposal (PDF)
              </a>
              <a href="#portfolio" className="btn btn-ghost">
                View portfolio event
              </a>
            </div>

            <div className="mt-10 flex justify-center">
              <div
                className="h-[3px] w-[160px] rounded-full"
                style={{
                  backgroundImage: "linear-gradient(90deg, var(--red), #fff, var(--blue))",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      <Divider />

      {/* ABOUT */}
      <section id="about" className="scroll-mt-28">
        <div className="wrap">
          <div className="grid gap-10 lg:grid-cols-[1.25fr_0.85fr]">
            <div>
              <div className="kicker">ABOUT</div>
              <h2 className="h2 mt-3">Who we are</h2>

              <p className="lead mt-6">
                <span className="font-extrabold" style={{ color: "var(--ink)" }}>
                  {site.orgName}
                </span>{" "}
                is a U.S.-based nonprofit focused on building meaningful bridges between Indonesia and
                the United States—through education pathways, cultural exchange, and community programs
                that people actually enjoy.
              </p>

              <div className="mt-8 grid gap-4">
                <div className="card p-6">
                  <div className="kicker">Purpose</div>
                  <p className="p mt-2">{site.purpose}</p>
                </div>

                <div className="card p-6">
                  <div className="kicker">Audience</div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {site.audience.map((a) => (
                      <span key={a} className="pill">
                        <span className="dot" style={{ background: "var(--blue)" }} />
                        {a}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <aside className="card-strong p-8">
              <div className="kicker">AT A GLANCE</div>
              <div className="mt-6 grid gap-5">
                <div className="flex items-start justify-between gap-4 border-b pb-4" style={{ borderColor: "var(--line)" }}>
                  <div className="text-[14px] font-extrabold" style={{ color: "var(--muted)" }}>
                    Focus
                  </div>
                  <div className="text-right text-[16px] font-extrabold">Education • Culture • Community</div>
                </div>

                <div className="flex items-start justify-between gap-4 border-b pb-4" style={{ borderColor: "var(--line)" }}>
                  <div className="text-[14px] font-extrabold" style={{ color: "var(--muted)" }}>
                    Operating
                  </div>
                  <div className="text-right text-[16px] font-extrabold">U.S.-based</div>
                </div>

                <div className="flex items-start justify-between gap-4">
                  <div className="text-[14px] font-extrabold" style={{ color: "var(--muted)" }}>
                    Contact
                  </div>
                  <div className="text-right text-[16px] font-extrabold">{site.email}</div>
                </div>

                <a href="#contact" className="btn btn-ghost mt-2 w-full">
                  Talk to us
                </a>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <Divider />

      {/* PROGRAMS */}
      <section id="programs" className="scroll-mt-28">
        <div className="wrap">
          <div className="kicker">PROGRAMS</div>
          <h2 className="h2 mt-3">What we deliver</h2>
          <p className="lead mt-4 max-w-3xl">
            Simple, repeatable programs—built for clarity, credibility, and real partnership.
          </p>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {programs.map((p) => (
              <div key={p.title} className="card-strong p-8">
                <h3 className="h3">{p.title}</h3>
                <p className="p mt-2">{p.desc}</p>

                <ul className="mt-6 grid gap-3">
                  {p.bullets.map((b) => (
                    <li key={b} className="flex gap-3">
                      <span
                        className="mt-[9px] h-[7px] w-[7px] rounded-full"
                        style={{ background: "var(--red)" }}
                      />
                      <span className="text-[16px]" style={{ color: "var(--muted)" }}>
                        {b}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      {/* PORTFOLIO */}
      <section id="portfolio" className="scroll-mt-28">
        <div className="wrap">
          <div className="kicker">PORTFOLIO</div>
          <h2 className="h2 mt-3">Proof of execution</h2>

          <div className="mt-10 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="card-strong p-10">
              <h3 className="h3">{featured.title}</h3>
              <p className="lead mt-4">{featured.summary}</p>

              <div className="mt-6 flex flex-wrap gap-2">
                <span className="pill">
                  <span className="dot" style={{ background: "var(--blue)" }} />
                  {featured.dateText}
                </span>
                <span className="pill">
                  <span className="dot" style={{ background: "var(--red)" }} />
                  {featured.location}
                </span>
              </div>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <a href="#involved" className="btn btn-primary">
                  Sponsor the next event
                </a>
                <a href={site.proposalUrl} className="btn btn-ghost">
                  Download proposal (PDF)
                </a>
              </div>
            </div>

            <aside className="card p-8">
              <div className="kicker">HIGHLIGHTS</div>
              <ul className="mt-5 grid gap-3">
                {featured.highlights.map((h, idx) => (
                  <li key={h} className="flex items-start gap-3">
                    <span
                      className="mt-[9px] h-[7px] w-[7px] rounded-full"
                      style={{ background: idx % 2 === 0 ? "var(--blue)" : "var(--red)" }}
                    />
                    <span className="text-[16px]" style={{ color: "var(--muted)" }}>
                      {h}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 border-t pt-6" style={{ borderColor: "var(--line)" }}>
                <div className="text-[14px] font-extrabold" style={{ color: "var(--muted)" }}>
                  Want the full event breakdown?
                </div>
                <a href={site.proposalUrl} className="btn btn-ghost mt-4 w-full">
                  Download PDF proposal
                </a>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <Divider />

      {/* PARTNERS */}
      <section id="partners" className="scroll-mt-28">
        <div className="wrap">
          <div className="kicker">PARTNERS</div>
          <h2 className="h2 mt-3">Built for collaboration</h2>
          <p className="lead mt-4 max-w-3xl">
            We work with sponsors, donors, universities, schools, and community organizations.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {partners.map((p, idx) => (
              <div key={p.name} className="card-strong p-7">
                <div className="flex items-center gap-3">
                  <span
                    className="h-10 w-10 rounded-2xl"
                    style={{
                      background:
                        idx % 2 === 0
                          ? "rgba(31, 91, 214, 0.10)"
                          : "rgba(214, 31, 31, 0.10)",
                      border: "1px solid var(--line)",
                    }}
                  />
                  <div>
                    <div className="text-[16px] font-extrabold">{p.name}</div>
                    <div className="text-[13px] font-bold" style={{ color: "var(--muted)" }}>
                      {p.type}
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <a href="#contact" className="btn btn-ghost w-full">
                    Collaborate
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      {/* GET INVOLVED */}
      <section id="involved" className="scroll-mt-28">
        <div className="wrap">
          <div className="kicker">GET INVOLVED</div>
          <h2 className="h2 mt-3">Let’s build the next program together</h2>
          <p className="lead mt-4 max-w-3xl">
            Sponsor an event, fund a scholarship pathway, or partner with us to run a repeatable program.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="card-strong p-8">
              <h3 className="h3">Sponsor</h3>
              <p className="p mt-2">
                Help fund execution—venues, logistics, materials, and community outreach.
              </p>
              <a href="#contact" className="btn btn-primary mt-6 w-full">
                Sponsor
              </a>
            </div>

            <div className="card-strong p-8">
              <h3 className="h3">Partner</h3>
              <p className="p mt-2">
                Universities, schools, and organizations—run a program together with clear outcomes.
              </p>
              <a href="#contact" className="btn btn-ghost mt-6 w-full">
                Partner
              </a>
            </div>

            <div className="card-strong p-8">
              <h3 className="h3">Volunteer</h3>
              <p className="p mt-2">
                Support community-first events and education pathways with a focused role.
              </p>
              <a href="#contact" className="btn btn-ghost mt-6 w-full">
                Volunteer
              </a>
            </div>
          </div>
        </div>
      </section>

      <Divider />

      {/* CONTACT */}
      <section id="contact" className="scroll-mt-28">
        <div className="wrap">
          <div className="card-strong p-10">
            <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
              <div>
                <div className="kicker">CONTACT</div>
                <h2 className="h2 mt-3">Ready to collaborate?</h2>
                <p className="lead mt-4">
                  Email us and we’ll reply with a simple collaboration path (sponsor / partner / volunteer).
                </p>
              </div>

              <div className="card p-7">
                <div className="text-[14px] font-extrabold" style={{ color: "var(--muted)" }}>
                  Email
                </div>
                <div className="mt-2 text-[18px] font-extrabold">{site.email}</div>

                <a
                  className="btn btn-primary mt-6 w-full"
                  href={`mailto:${site.email}?subject=Partnership`}
                >
                  Email IDECN
                </a>

                <div className="mt-4 text-[13px] font-semibold" style={{ color: "var(--muted)" }}>
                  Put “Partnership” in the subject line.
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 text-center text-[13px] font-semibold" style={{ color: "var(--muted)" }}>
            © {new Date().getFullYear()} IDECN. All rights reserved.
          </div>
        </div>
      </section>
    </div>
  );
}
