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

              {/* FIX: no onClick in Server Component */}
              <a className="btn mt-5 w-full" href="#contact">
                Talk to us
              </a>
            </div>
          </aside>
        </div>
      </section>

      {/* PROGRAMS */}
<section id="programs" className="mt-16 md:mt-20">
  <div className="kicker">Programs</div>

  <div className="mt-3 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
    <div>
      <h2 className="h2 text-4xl md:text-6xl">What we deliver</h2>
      <p className="lead mt-3 max-w-3xl">
        Simple, repeatable programs—built for clarity, credibility, and real partnership.
      </p>
    </div>

    <div className="flex flex-wrap gap-2">
      {["Repeatable", "Partner-friendly", "Community-first", "Outcome-driven"].map((t) => (
        <span
          key={t}
          className="rounded-full border border-[var(--border)] bg-[var(--pill)] px-3 py-1.5 text-sm font-extrabold text-[var(--muted)]"
        >
          {t}
        </span>
      ))}
    </div>
  </div>

  {/* icons (no deps) */}
  {(() => {
    const IconCap = () => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M12 3 2 8l10 5 10-5-10-5Zm0 10L2 8v8l10 5 10-5V8l-10 5Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
      </svg>
    );
    const IconCulture = () => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M12 21s7-4.2 7-10a7 7 0 0 0-14 0c0 5.8 7 10 7 10Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <path
          d="M9.5 10.5c.7-1 1.7-1.5 2.5-1.5s1.8.5 2.5 1.5"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    );
    const IconNetwork = () => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M7 7a3 3 0 1 0 0 .01V7Zm10 0a3 3 0 1 0 0 .01V7ZM12 17a3 3 0 1 0 0 .01V17Z"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <path
          d="M9.4 8.7 11 14.3m4-5.6L13 14.3"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    );
    const IconCommunity = () => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M16 11a3 3 0 1 0 0-.01V11ZM8 11a3 3 0 1 0 0-.01V11Z"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <path
          d="M4 20c.6-3 3-5 6-5m4 0c3 0 5.4 2 6 5M10 20c.4-2 2-3.5 4-3.5"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    );

    const META: Record<
      string,
      {
        icon: JSX.Element;
        tags: string[];
        accent: string;
      }
    > = {
      "Educational Programs & Scholarships": {
        icon: <IconCap />,
        tags: ["Scholarship guidance", "Mentorship", "Campus pathway", "Internship"],
        accent: "linear-gradient(180deg, var(--blue), rgba(255,255,255,0), var(--red))",
      },
      "Cultural Exchange & Awareness": {
        icon: <IconCulture />,
        tags: ["Events", "Workshops", "Storytelling", "Community-first"],
        accent: "linear-gradient(180deg, var(--red), rgba(255,255,255,0), var(--blue))",
      },
      "Professional Networking": {
        icon: <IconNetwork />,
        tags: ["Alumni", "Matchmaking", "Leadership", "Cross-culture"],
        accent: "linear-gradient(180deg, rgba(59,130,246,0.9), rgba(255,255,255,0), rgba(239,68,68,0.9))",
      },
      "Community Support": {
        icon: <IconCommunity />,
        tags: ["Volunteer", "Partnership", "Playbooks", "Scaling impact"],
        accent: "linear-gradient(180deg, rgba(239,68,68,0.9), rgba(255,255,255,0), rgba(59,130,246,0.9))",
      },
    };

    const DEFAULT = {
      icon: <IconCap />,
      tags: ["Repeatable", "Partner-friendly", "Outcome-driven"],
      accent: "linear-gradient(180deg, var(--red), rgba(255,255,255,0), var(--blue))",
    };

    return (
      <div className="mt-9 grid gap-5 md:grid-cols-2">
        {programs.map((p, i) => {
          const m = META[p.title] || DEFAULT;

          return (
            <div
              key={p.title}
              className={[
                "group relative overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--card)] p-6 md:p-7",
                "shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow",
                i === 0 ? "md:col-span-2" : "",
              ].join(" ")}
            >
              {/* accent bar */}
              <div
                className="pointer-events-none absolute left-0 top-0 h-full w-[4px] opacity-90"
                style={{ background: m.accent }}
                aria-hidden="true"
              />

              {/* soft glow on hover */}
              <div
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(900px 220px at 15% 10%, rgba(59,130,246,0.20), transparent 60%), radial-gradient(800px 220px at 85% 15%, rgba(239,68,68,0.18), transparent 60%)",
                }}
                aria-hidden="true"
              />

              <div className="relative flex flex-col gap-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-extrabold tracking-tight md:text-3xl">{p.title}</h3>
                    <p className="mt-2 text-[15px] font-bold text-[var(--muted)]">
                      Designed to be practical, repeatable, and easy to partner with.
                    </p>
                  </div>

                  <div
                    className="grid h-12 w-12 place-items-center rounded-2xl border border-[var(--border)] text-[var(--fg)]"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(225,29,46,0.18), rgba(29,78,216,0.16))",
                    }}
                    aria-hidden="true"
                  >
                    {m.icon}
                  </div>
                </div>

                {/* tags */}
                <div className="flex flex-wrap gap-2">
                  {m.tags.slice(0, i === 0 ? 6 : 4).map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-[var(--border)] bg-[var(--pill)] px-3 py-1.5 text-sm font-extrabold text-[var(--muted)]"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* bullets */}
                <ul className="mt-1 grid gap-2 text-[15px] leading-7 text-[var(--muted)] sm:grid-cols-2">
                  {p.bullets.map((b) => (
                    <li key={b} className="flex gap-3">
                      <span
                        className="mt-2 h-2 w-2 shrink-0 rounded-full"
                        style={{
                          background:
                            "linear-gradient(180deg, var(--blue), var(--red))",
                        }}
                      />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                {/* hero card extra */}
                {i === 0 ? (
                  <div className="mt-3 grid gap-3 rounded-2xl border border-[var(--border)] bg-[var(--pill)] p-4 md:grid-cols-4">
                    {[
                      ["Clarity", "Simple steps"],
                      ["Trust", "Credible profile"],
                      ["Scale", "Repeatable playbook"],
                      ["Impact", "Community outcomes"],
                    ].map(([k, v]) => (
                      <div key={k} className="min-w-0">
                        <div className="text-xs font-extrabold uppercase tracking-wider text-[var(--muted2)]">
                          {k}
                        </div>
                        <div className="mt-1 text-sm font-extrabold text-[var(--fg)]">{v}</div>
                      </div>
                    ))}
                  </div>
                ) : null}

                <div className="mt-1 flex items-center justify-between">
                  <div className="text-xs font-extrabold text-[var(--muted2)]">
                    Built for partners • Designed for repeatability
                  </div>
                  <a
                    href="#get-involved"
                    className="text-sm font-extrabold"
                    style={{ color: "var(--blue)" }}
                  >
                    Partner →
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  })()}
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
                <a className="btn mt-5 w-full" href={p.website} target="_blank" rel="noreferrer">
                  Visit website
                </a>
              ) : (
                <a className="btn mt-5 w-full" href="#contact">
                  Partner with us
                </a>
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

              {/* FIX: no onClick in Server Component */}
              <a className="btn btn-primary mt-5 w-full" href="#contact">
                {x.cta}
              </a>
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
