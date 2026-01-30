import { getEvents, getPartners, getPrograms, getSite } from "../lib/cms";

function Section({
  id,
  kicker,
  title,
  children,
}: {
  id: string;
  kicker: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-28">
      <div className="containerX py-16 md:py-24">
        <p className="kicker">{kicker}</p>
        <h2 className="h2 mt-3">{title}</h2>
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}

export default async function Home() {
  const site = await getSite();
  const programs = await getPrograms();
  const events = await getEvents();
  const partners = await getPartners();

  const featured = events.find((e) => e.featured) || events[0];

  return (
    <>
      {/* HERO */}
      <section className="relative">
        <div className="containerX py-16 md:py-24 text-center">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <span className="chip">Nonprofit (U.S.-based)</span>
            <span className="chip">Established 2024</span>
            <span className="chip">
              <span style={{ color: "var(--red)" }}>Indonesia</span>
              <span className="opacity-60">↔</span>
              <span style={{ color: "var(--blue)" }}>U.S.</span>
            </span>
          </div>

          <h1 className="h1 mt-10">
            {site?.heroTitle || "Indonesia Education & Cultural Network"}
          </h1>

          <p className="lead mx-auto mt-6 max-w-3xl">
            {site?.heroSubtitle ||
              site?.tagline ||
              "A U.S.-based nonprofit dedicated to education and cultural exchange between Indonesia and the United States."}
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a className="btn btn-primary w-full sm:w-auto" href="#get-involved">
              Get involved
            </a>
            <a className="btn btn-ghost w-full sm:w-auto" href={site?.proposalUrl || "/indonesia-on-the-creek-proposal.pdf"}>
              Download proposal (PDF)
            </a>
            <a className="btn btn-ghost w-full sm:w-auto" href="#portfolio">
              View portfolio event
            </a>
          </div>

          {/* small accent line (solid) */}
          <div className="mx-auto mt-12 h-[3px] w-24" style={{ background: "var(--red)" }} />
          <div className="mx-auto mt-2 h-[3px] w-12" style={{ background: "var(--blue)" }} />
        </div>

        <div className="divider" />
      </section>

      {/* ABOUT */}
      <Section id="about" kicker="About" title="Who we are">
        <div className="grid gap-12 md:grid-cols-12 md:items-start">
          <div className="md:col-span-7">
            <p className="lead">
              IDECN is a U.S.-based nonprofit focused on building meaningful bridges
              between Indonesia and the United States—through education pathways,
              cultural exchange, and community programs that people actually enjoy.
            </p>

            <div className="mt-8 space-y-4 text-[color:var(--muted)]">
              <p>
                <span className="font-semibold text-[color:var(--fg)]">Purpose:</span>{" "}
                {site?.purpose ||
                  "Strengthen education and cultural exchange through programs, partnerships, and community-driven events."}
              </p>

              <p>
                <span className="font-semibold text-[color:var(--fg)]">Audience:</span>{" "}
                {(site?.audience?.length ? site.audience : ["Students", "Educators", "Diaspora", "Partners", "Donors"]).join(
                  " • "
                )}
              </p>
            </div>

            <div className="mt-10 flex flex-wrap justify-center gap-4 md:justify-start">
              <span className="chip">
                <span className="font-black" style={{ color: "var(--red)" }}>
                  Indonesia
                </span>{" "}
                perspectives
              </span>
              <span className="chip">
                <span className="font-black" style={{ color: "var(--blue)" }}>
                  U.S.
                </span>{" "}
                opportunities
              </span>
              <span className="chip">Community-first</span>
            </div>
          </div>

          <div className="md:col-span-5">
            {/* Apple-ish: bukan kotak rame, cuma panel ringan */}
            <div
              className="rounded-[var(--radius)] border p-7"
              style={{ borderColor: "var(--line)", background: "rgba(255,255,255,0.75)" }}
            >
              <p className="kicker">At a glance</p>
              <div className="mt-6 space-y-5">
                <div className="flex items-start justify-between gap-6">
                  <div className="text-sm font-semibold text-[color:var(--muted)]">Focus</div>
                  <div className="text-right font-bold">Education • Culture • Community</div>
                </div>
                <div className="divider" />
                <div className="flex items-start justify-between gap-6">
                  <div className="text-sm font-semibold text-[color:var(--muted)]">Operating</div>
                  <div className="text-right font-bold">U.S.-based</div>
                </div>
                <div className="divider" />
                <div className="flex items-start justify-between gap-6">
                  <div className="text-sm font-semibold text-[color:var(--muted)]">Contact</div>
                  <div className="text-right font-bold">{site?.email || "contact@idecn.org"}</div>
                </div>
              </div>

              <a
                href="#contact"
                className="btn btn-ghost mt-8 w-full text-center"
              >
                Talk to us
              </a>
            </div>
          </div>
        </div>
      </Section>

      <div className="divider" />

      {/* PROGRAMS */}
      <Section id="programs" kicker="Programs" title="What we deliver">
        <div className="divide-y" style={{ borderColor: "var(--line)" }}>
          {programs.map((p, idx) => (
            <article key={idx} className="py-10">
              <div className="grid gap-8 md:grid-cols-12 md:items-start">
                <div className="md:col-span-5">
                  <h3 className="text-xl md:text-2xl font-extrabold tracking-tight">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-[color:var(--muted)]">
                    Designed to be practical, repeatable, and easy to partner with.
                  </p>
                </div>

                <div className="md:col-span-7">
                  <ul className="space-y-3 text-[color:var(--muted)]">
                    {p.bullets.map((b, i) => (
                      <li key={i} className="flex gap-3">
                        <span
                          className="mt-2 h-2 w-2 rounded-full"
                          style={{ background: i % 2 === 0 ? "var(--red)" : "var(--blue)" }}
                        />
                        <span className="text-base md:text-lg">{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <div className="divider" />

      {/* PORTFOLIO */}
      <Section id="portfolio" kicker="Portfolio" title="Proof of execution">
        <div className="grid gap-10 md:grid-cols-12 md:items-center">
          <div className="md:col-span-7">
            <h3 className="text-2xl md:text-3xl font-black tracking-tight">
              {featured?.title || "Portfolio Event"}
            </h3>
            <p className="lead mt-4">
              {featured?.summary ||
                "A signature event that demonstrates IDECN’s capability to execute impactful public programs."}
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3 md:justify-start">
              <span className="chip">{featured?.dateText || "2026"}</span>
              <span className="chip">{featured?.location || "U.S. — Community Venue"}</span>
            </div>

            <a className="btn btn-primary mt-10 w-full md:w-auto" href="#get-involved">
              Sponsor the next event
            </a>
          </div>

          <div className="md:col-span-5">
            <div
              className="rounded-[var(--radius)] border p-7"
              style={{ borderColor: "var(--line)", background: "rgba(255,255,255,0.75)" }}
            >
              <p className="kicker">Highlights</p>
              <ul className="mt-6 space-y-3 text-[color:var(--muted)]">
                {(featured?.highlights || []).map((h, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full" style={{ background: "var(--blue)" }} />
                    <span className="text-base md:text-lg">{h}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <p className="text-sm font-semibold text-[color:var(--muted2)]">
                  Want the full event breakdown?
                </p>
                <a className="btn btn-ghost mt-3 w-full text-center" href={site?.proposalUrl || "/indonesia-on-the-creek-proposal.pdf"}>
                  Download proposal (PDF)
                </a>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <div className="divider" />

      {/* PARTNERS */}
      <Section id="partners" kicker="Partners" title="Who we work with">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {partners.map((p, i) => (
            <div
              key={i}
              className="rounded-[var(--radius)] border px-6 py-6"
              style={{ borderColor: "var(--line)", background: "rgba(255,255,255,0.70)" }}
            >
              <div className="text-lg font-extrabold">{p.name}</div>
              <div className="mt-1 text-sm font-semibold text-[color:var(--muted2)]">{p.type}</div>
              {p.website ? (
                <a
                  className="mt-5 inline-flex text-sm font-bold"
                  style={{ color: "var(--blue)" }}
                  href={p.website}
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit →
                </a>
              ) : (
                <div className="mt-5 text-sm font-semibold text-[color:var(--muted)]">
                  Open for collaboration
                </div>
              )}
            </div>
          ))}
        </div>
      </Section>

      <div className="divider" />

      {/* GET INVOLVED */}
      <section id="get-involved" className="scroll-mt-28">
        <div className="containerX py-16 md:py-24">
          <div
            className="relative overflow-hidden rounded-[var(--radius)] border px-7 py-10 md:px-12 md:py-14 text-center"
            style={{ borderColor: "var(--line)", background: "rgba(255,255,255,0.78)" }}
          >
            <div className="pointer-events-none absolute inset-0 batik opacity-[0.10]" aria-hidden />
            <p className="kicker">Get involved</p>
            <h2 className="h2 mt-3">Let’s build the next program together</h2>
            <p className="lead mx-auto mt-5 max-w-3xl">
              We’re looking for partners, sponsors, donors, and collaborators who
              want real impact—and programs that people actually attend.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a className="btn btn-primary w-full sm:w-auto" href="#contact">
                Contact us
              </a>
              <a className="btn btn-ghost w-full sm:w-auto" href={site?.proposalUrl || "/indonesia-on-the-creek-proposal.pdf"}>
                Download proposal (PDF)
              </a>
            </div>

            <div className="mx-auto mt-10 flex justify-center gap-2">
              <div className="h-2 w-14 rounded-full" style={{ background: "var(--red)" }} />
              <div className="h-2 w-14 rounded-full bg-white border" style={{ borderColor: "var(--line)" }} />
              <div className="h-2 w-14 rounded-full" style={{ background: "var(--blue)" }} />
            </div>
          </div>
        </div>

        <div className="divider" />
      </section>

      {/* CONTACT / FOOTER */}
      <footer id="contact">
        <div className="containerX py-14 md:py-18">
          <p className="kicker">Contact</p>
          <div className="mt-3 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div className="text-lg md:text-xl font-black">
              {site?.orgName || "IDECN"}{" "}
              <span className="font-semibold text-[color:var(--muted2)]">
                — {site?.tagline || "Indonesia ↔ U.S."}
              </span>
            </div>
            <div className="text-[color:var(--muted)] font-semibold">
              Email:{" "}
              <a className="font-black" style={{ color: "var(--blue)" }} href={`mailto:${site?.email || "contact@idecn.org"}`}>
                {site?.email || "contact@idecn.org"}
              </a>
            </div>
          </div>

          <div className="mt-8 text-sm text-[color:var(--muted2)]">
            © {new Date().getFullYear()} IDECN. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
}
