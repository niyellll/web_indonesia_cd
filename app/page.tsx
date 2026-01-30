import { getEvents, getPartners, getPrograms, getSite } from "../lib/cms";

function Dot({ color }: { color: "red" | "blue" | "gray" }) {
  const c =
    color === "red"
      ? "var(--red)"
      : color === "blue"
      ? "var(--blue)"
      : "rgba(148,163,184,0.8)";
  return <span className="inline-block h-2 w-2 rounded-full" style={{ background: c }} />;
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--pill)] px-4 py-2 text-sm font-bold text-[var(--muted)]">
      {children}
    </span>
  );
}

export default async function Page() {
  const site = await getSite();
  const programs = await getPrograms();
  const events = await getEvents();
  const partners = await getPartners();
  const featured = events.find((e) => e.featured) || events[0];

  return (
    <main id="top" className="mx-auto max-w-6xl px-4 pb-20 pt-10 md:pt-16">
      {/* HERO */}
      <section className="relative">
        <div className="mx-auto max-w-4xl text-center">
          <div className="flex flex-wrap items-center justify-center gap-2">
            <Badge>
              <Dot color="blue" />
              Nonprofit (U.S.-based)
            </Badge>
            <Badge>
              <Dot color="gray" />
              Established 2024
            </Badge>
            <Badge>
              <Dot color="red" />
              {site.tagline}
            </Badge>
          </div>

          <h1 className="h1 mt-8 text-5xl md:text-7xl">{site.heroTitle}</h1>

          <p className="lead mx-auto mt-6 max-w-3xl">{site.heroSubtitle}</p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a className="btn btn-primary w-full sm:w-auto" href="#get-involved">
              Get involved
            </a>
            <a className="btn w-full sm:w-auto" href={site.proposalUrl}>
              Download proposal (PDF)
            </a>
            <a className="btn w-full sm:w-auto" href="#portfolio">
              View portfolio event
            </a>
          </div>

          {/* mini underline accent */}
          <div className="mx-auto mt-7 h-[3px] w-28 rounded-full bg-[var(--border)] overflow-hidden">
            <div
              className="h-full w-full"
              style={{
                background:
                  "linear-gradient(90deg, var(--red), rgba(255,255,255,0.95), var(--blue))",
                backgroundSize: "200% 100%",
                backgroundPosition: "center",
              }}
            />
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="mt-16 md:mt-20">
        <div className="kicker">About</div>
        <div className="mt-3 grid gap-6 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-7">
            <h2 className="h2 text-4xl md:text-5xl">Who we are</h2>
            <p className="lead mt-5">
              <span className="font-extrabold text-[var(--fg)]">{site.orgName}</span> is a U.S.-based
              nonprofit focused on building meaningful bridges between Indonesia and the United States—
              through education pathways, cultural exchange, and community programs that people actually enjoy.
            </p>

            <div className="mt-8 grid gap-3">
              <div className="card p-5">
                <div className="text-sm font-extrabold">Purpose</div>
                <p className="mt-2 text-[15px] leading-7 text-[var(--muted)]">{site.purpose}</p>
              </div>

              <div className="card p-5">
                <div className="text-sm font-extrabold">Audience</div>
                <div className="mt-2 flex flex-wrap gap-2">
                  {site.audience.map((a) => (
                    <span
                      key={a}
                      className="rounded-full border border-[var(--border)] bg-[var(--pill)] px-3 py-1.5 text-sm font-bold text-[var(--muted)]"
                    >
                      {a}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <aside className="md:col-span-5">
            <div className="card p-6">
              <div className="kicker">At a glance</div>

              <div className="mt-4 divide-y divide-[var(--border)]">
                <div className="flex items-center justify-between py-4">
                  <div className="text-sm font-bold text-[var(--muted)]">Focus</div>
                  <div className="text-sm font-extrabold">Education • Culture • Community</div>
                </div>
                <div className="flex items-center justify-between py-4">
                  <div className="text-sm font-bold text-[var(--muted)]">Operating</div>
                  <div className="text-sm font-extrabold">U.S.-based</div>
                </div>
                <div className="flex items-center justify-between py-4">
                  <div className="text-sm font-bold text-[var(--muted)]">Contact</div>
                  <div className="text-sm font-extrabold">{site.email}</div>
                </div>
              </div>

              <button
                className="btn mt-5 w-full"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Talk to us
              </button>
            </div>
          </aside>
        </div>
      </section>

      {/* PROGRAMS */}
      <section id="programs" className="mt-16 md:mt-20">
        <div className="kicker">Programs</div>
        <div className="mt-3 flex items-end justify-between gap-4">
          <h2 className="h2 text-4xl md:text-5xl">What we deliver</h2>
          <div className="hidden text-sm font-bold text-[var(--muted)] md:block">
            Simple, repeatable programs—built for clarity and real partnership.
          </div>
        </div>

        <p className="mt-4 text-[15px] font-bold text-[var(--muted)] md:hidden">
          Simple, repeatable programs—built for clarity and real partnership.
        </p>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {programs.map((p) => (
            <div key={p.title} className="card p-6">
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-xl font-extrabold tracking-tight md:text-2xl">{p.title}</h3>
                <span
                  className="h-10 w-10 rounded-2xl border border-[var(--border)]"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(225,29,46,0.20), rgba(29,78,216,0.18))",
                  }}
                  aria-hidden="true"
                />
              </div>

              <ul className="mt-4 grid gap-2 text-[15px] leading-7 text-[var(--muted)]">
                {p.bullets.map((b) => (
                  <li key={b} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full" style={{ background: "var(--blue)" }} />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="mt-16 md:mt-20">
        <div className="kicker">Portfolio</div>
        <h2 className="h2 mt-3 text-4xl md:text-5xl">Proof of execution</h2>

        <div className="mt-8 grid gap-6 md:grid-cols-12 md:gap-8">
          <div className="card md:col-span-7 p-6 md:p-8">
            <h3 className="text-2xl font-extrabold tracking-tight md:text-3xl">{featured.title}</h3>
            <p className="lead mt-4">{featured.summary}</p>

            <div className="mt-6 grid gap-2">
              <div className="inline-flex w-fit items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--pill)] px-4 py-2 text-sm font-extrabold">
                <span className="h-2 w-2 rounded-full" style={{ background: "var(--red)" }} />
                {featured.dateText}
              </div>
              <div className="inline-flex w-fit items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--pill)] px-4 py-2 text-sm font-extrabold">
                <span className="h-2 w-2 rounded-full" style={{ background: "var(--blue)" }} />
                {featured.location}
              </div>
            </div>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a className="btn btn-primary w-full sm:w-auto" href="#get-involved">
                Sponsor the next event
              </a>
              <a className="btn w-full sm:w-auto" href={site.proposalUrl}>
                Download proposal (PDF)
              </a>
            </div>
          </div>

          <aside className="card md:col-span-5 p-6 md:p-8">
            <div className="kicker">Highlights</div>
            <ul className="mt-5 grid gap-3 text-[15px] font-bold text-[var(--muted)]">
              {featured.highlights.map((h) => (
                <li key={h} className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full" style={{ background: "var(--blue)" }} />
                  <span>{h}</span>
                </li>
              ))}
            </ul>

            <div className="mt-7 rounded-2xl border border-[var(--border)] bg-[var(--pill)] p-4">
              <div className="text-sm font-extrabold">Want the full breakdown?</div>
              <div className="mt-1 text-sm text-[var(--muted)]">
                Download the PDF proposal for details and sponsorship options.
              </div>
              <a className="btn mt-4 w-full" href={site.proposalUrl}>
                Download proposal (PDF)
              </a>
            </div>
          </aside>
        </div>
      </section>

      {/* PARTNERS */}
      <section id="partners" className="mt-16 md:mt-20">
        <div className="kicker">Partners</div>
        <h2 className="h2 mt-3 text-4xl md:text-5xl">Built for collaboration</h2>
        <p className="lead mt-4 max-w-3xl">
          We work with sponsors, donors, universities, schools, and community organizations—so every program is clear,
          repeatable, and easy to scale.
        </p>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {partners.map((p) => (
            <div key={p.name} className="card p-6">
              <div className="text-xl font-extrabold">{p.name}</div>
              <div className="mt-2 text-sm font-bold text-[var(--muted)]">{p.type}</div>
              {p.website ? (
                <a
                  className="btn mt-5 w-full"
                  href={p.website}
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit website
                </a>
              ) : (
                <button
                  className="btn mt-5 w-full"
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Partner with us
                </button>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* GET INVOLVED */}
      <section id="get-involved" className="mt-16 md:mt-20">
        <div className="kicker">Get involved</div>
        <h2 className="h2 mt-3 text-4xl md:text-5xl">Let’s build the next program together</h2>
        <p className="lead mt-4 max-w-3xl">
          Sponsor an event, fund a scholarship pathway, or partner with us to run a repeatable program.
        </p>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {[
            {
              title: "Sponsor",
              desc: "Help fund execution—venues, logistics, materials, and community outreach.",
              cta: "Sponsor a program",
            },
            {
              title: "Partner",
              desc: "Universities, schools, and organizations—run a program together with clear outcomes.",
              cta: "Become a partner",
            },
            {
              title: "Volunteer",
              desc: "Support community-first events and education pathways with a focused role.",
              cta: "Join as volunteer",
            },
          ].map((x) => (
            <div key={x.title} className="card p-6">
              <div className="text-xl font-extrabold">{x.title}</div>
              <div className="mt-2 text-[15px] leading-7 text-[var(--muted)]">{x.desc}</div>
              <button
                className="btn btn-primary mt-5 w-full"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                {x.cta}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="mt-16 md:mt-20">
        <div className="card p-7 md:p-10">
          <div className="grid gap-6 md:grid-cols-12 md:items-center">
            <div className="md:col-span-7">
              <div className="kicker">Contact</div>
              <h2 className="h2 mt-3 text-3xl md:text-4xl">Ready to collaborate?</h2>
              <p className="lead mt-3">
                Email us and we’ll reply with a simple collaboration path (sponsor / partner / volunteer).
              </p>
            </div>

            <div className="md:col-span-5 md:text-right">
              <div className="text-sm font-bold text-[var(--muted)]">Email</div>
              <div className="mt-1 text-lg font-extrabold">{site.email}</div>

              <a className="btn btn-primary mt-4 w-full md:w-auto" href={`mailto:${site.email}?subject=Partnership`}>
                Email IDECN
              </a>

              <div className="mt-2 text-xs font-bold text-[var(--muted2)]">
                Put “Partnership” in the subject line.
              </div>
            </div>
          </div>
        </div>

        <footer className="mt-10 pb-6 text-center text-sm font-bold text-[var(--muted2)]">
          © {new Date().getFullYear()} IDECN. All rights reserved.
        </footer>
      </section>
    </main>
  );
}
