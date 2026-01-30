import { getEvents, getPartners, getPrograms, getSite } from "../lib/cms";

export const revalidate = 60;

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-lg border border-[var(--line)] bg-white/70 px-2 py-1 text-xs text-[var(--muted)]">
      {children}
    </span>
  );
}

function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`card p-6 ${className}`}>{children}</div>;
}

export default async function Page() {
  const site = await getSite();
  const programs = await getPrograms();
  const events = await getEvents();
  const partners = await getPartners();

  const featured = events.find((e) => e.featured) || events[0];

  return (
    <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
      {/* HERO with image background (optional) */}
      <section className="overflow-hidden rounded-3xl border border-[var(--line)] bg-white/70">
        <div className="relative">
          {/* optional hero image: put /public/images/hero.jpg */}
          <div className="h-[240px] w-full bg-[url('/images/hero.jpg')] bg-cover bg-center" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,.10),rgba(246,242,234,.85))]" />
          <div className="relative px-6 py-10 sm:px-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-white/75 px-3 py-1 text-xs text-[var(--muted)]">
              Nonprofit • U.S.-based • Established 2024
              <span className="rounded-full bg-[rgba(11,45,92,0.10)] px-2 py-0.5 text-[color:var(--blue)] font-semibold">
                Red–White–Blue + Batik
              </span>
            </div>

            <h1 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-5xl">
              {site.orgName}
            </h1>
            <p className="mt-4 max-w-3xl text-[var(--muted)] sm:text-lg leading-relaxed">
              {site.tagline}
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#contact" className="btn-primary">Talk to us</a>
              <a href="#invest" className="btn-ghost">For donors / investors</a>
              <a href={site.proposalUrl} className="btn-ghost">Download proposal (PDF)</a>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {site.audience.map((x) => <Chip key={x}>{x}</Chip>)}
            </div>
          </div>
        </div>
      </section>

      {/* PURPOSE */}
      <section id="about" className="mt-12">
        <div className="grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="text-xs font-bold uppercase tracking-wider text-[var(--muted)]">Purpose</p>
            <h2 className="mt-2 text-2xl font-extrabold sm:text-3xl">
              Clear information for donors, investors, and partners
            </h2>
            <p className="mt-4 text-sm text-[var(--muted)] leading-relaxed">
              {site.purpose}
            </p>
          </div>
          <div className="lg:col-span-7">
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <p className="text-xs font-bold uppercase tracking-wider text-[var(--muted)]">Who we serve</p>
                <p className="mt-2 text-sm text-[var(--muted)] leading-relaxed">
                  {site.audience.join(" • ")}
                </p>
              </Card>
              <Card>
                <p className="text-xs font-bold uppercase tracking-wider text-[var(--muted)]">Identity</p>
                <p className="mt-2 text-sm text-[var(--muted)] leading-relaxed">
                  {site.themeNote}
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section id="work" className="mt-12">
        <p className="text-xs font-bold uppercase tracking-wider text-[var(--muted)]">What we do</p>
        <h2 className="mt-2 text-2xl font-extrabold sm:text-3xl">Programs & services</h2>
        <p className="mt-4 max-w-3xl text-sm text-[var(--muted)] leading-relaxed">
          IDECN focuses on education, cultural exchange, professional networking, and community support —
          built for sustainable collaboration and measurable impact.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {programs.map((p) => (
            <Card key={p.title}>
              <h3 className="text-lg font-extrabold">{p.title}</h3>
              <ul className="mt-3 space-y-2 text-sm text-[var(--muted)]">
                {p.bullets.map((b) => (
                  <li key={b} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="mt-12">
        <p className="text-xs font-bold uppercase tracking-wider text-[var(--muted)]">Portfolio</p>
        <h2 className="mt-2 text-2xl font-extrabold sm:text-3xl">
          Events we deliver (proof of execution)
        </h2>
        <p className="mt-4 max-w-3xl text-sm text-[var(--muted)] leading-relaxed">
          Culinary Day is presented as a portfolio highlight — demonstrating IDECN’s capability to execute impactful public programs.
        </p>

        {featured && (
          <div className="mt-8 grid gap-6 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <Card className="p-7">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-[var(--muted)]">Featured</p>
                    <h3 className="mt-2 text-xl font-extrabold">{featured.title}</h3>
                    <p className="mt-2 text-sm text-[var(--muted)]">{featured.summary}</p>
                  </div>
                  <div className="hidden sm:block rounded-2xl bg-[rgba(11,45,92,0.10)] px-4 py-3 text-right">
                    <p className="text-xs font-bold text-[color:var(--blue)]">Date</p>
                    <p className="text-sm font-extrabold">{featured.dateText}</p>
                  </div>
                </div>

                <div className="mt-4 grid gap-2 text-sm">
                  <p><span className="font-bold">Location:</span> <span className="text-[var(--muted)]">{featured.location}</span></p>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {featured.highlights.map((h) => <Chip key={h}>{h}</Chip>)}
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a href={site.proposalUrl} className="btn-primary">Proposal (PDF)</a>
                  <a href="#contact" className="btn-ghost">Become a sponsor / vendor</a>
                </div>
              </Card>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-3xl bg-[linear-gradient(135deg,rgba(211,47,47,.10),rgba(11,45,92,.10))] p-6 border border-[var(--line)]">
                <p className="text-xs font-bold uppercase tracking-wider text-[var(--muted)]">Why portfolio matters</p>
                <h4 className="mt-2 text-lg font-extrabold">Investors want evidence</h4>
                <p className="mt-2 text-sm text-[var(--muted)] leading-relaxed">
                  This event demonstrates IDECN’s ability to deliver multi-stakeholder programs:
                  public audience engagement, vendor coordination, cultural programming, and partnership execution.
                </p>
                <div className="mt-5 grid gap-3">
                  {[
                    ["Public visibility", "Brand reach to community audiences"],
                    ["Partnership-ready", "Room for sponsors & collaborators"],
                    ["Repeatable format", "Annual signature event potential"],
                  ].map(([t, d]) => (
                    <div key={t} className="rounded-2xl bg-white/70 border border-[var(--line)] p-4">
                      <p className="text-sm font-extrabold">{t}</p>
                      <p className="text-xs text-[var(--muted)] mt-1">{d}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* INVESTORS / DONORS */}
      <section id="invest" className="mt-12">
        <p className="text-xs font-bold uppercase tracking-wider text-[var(--muted)]">For donors / investors</p>
        <h2 className="mt-2 text-2xl font-extrabold sm:text-3xl">Why support IDECN</h2>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {[
            ["Mission-aligned impact", "Education and culture create long-term social capital and trust."],
            ["Brand & community reach", "Sponsors gain meaningful visibility in diverse communities."],
            ["Scalable programs", "Repeatable events + scholarship guidance + networking programs."],
          ].map(([t, d]) => (
            <Card key={t}>
              <h3 className="text-lg font-extrabold">{t}</h3>
              <p className="mt-2 text-sm text-[var(--muted)] leading-relaxed">{d}</p>
            </Card>
          ))}
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Card>
              <h3 className="text-lg font-extrabold">Sponsorship pathway</h3>
              <p className="mt-2 text-sm text-[var(--muted)]">
                Use the proposal package to choose sponsorship tiers, vendor slots, and deliverables.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <a href={site.proposalUrl} className="btn-primary">Download proposal</a>
                <a href="#contact" className="btn-ghost">Request a meeting</a>
              </div>
            </Card>
          </div>
          <div className="lg:col-span-5">
            <div className="rounded-3xl border border-[var(--line)] bg-[linear-gradient(135deg,rgba(255,255,255,.85),rgba(255,255,255,.65))] p-6">
              <p className="text-xs font-bold uppercase tracking-wider text-[var(--muted)]">Fast facts</p>
              <ul className="mt-3 space-y-2 text-sm text-[var(--muted)]">
                <li className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--blue)]" />Target: donors, investors, partners</li>
                <li className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--blue)]" />Portfolio event: Culinary Day</li>
                <li className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--blue)]" />Content: English</li>
                <li className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--blue)]" />CMS: /studio (Sanity)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* PARTNERS */}
      <section id="partners" className="mt-12">
        <p className="text-xs font-bold uppercase tracking-wider text-[var(--muted)]">Partners</p>
        <h2 className="mt-2 text-2xl font-extrabold sm:text-3xl">Collaboration network</h2>
        <p className="mt-4 max-w-3xl text-sm text-[var(--muted)] leading-relaxed">
          We collaborate with community organizations, institutions, and businesses to increase impact and outreach.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {partners.map((p) => (
            <Card key={p.name}>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-lg font-extrabold">{p.name}</p>
                  <p className="mt-1 text-sm text-[var(--muted)]">{p.type}</p>
                </div>
                {p.website ? (
                  <a className="btn-ghost text-sm" href={p.website} target="_blank" rel="noreferrer">
                    Website
                  </a>
                ) : (
                  <span className="text-xs text-[var(--muted)]">—</span>
                )}
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="mt-12">
        <p className="text-xs font-bold uppercase tracking-wider text-[var(--muted)]">Contact</p>
        <h2 className="mt-2 text-2xl font-extrabold sm:text-3xl">Let’s work together</h2>

        <div className="mt-8 grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Card>
              <h3 className="text-lg font-extrabold">Email</h3>
              <p className="mt-2 text-sm text-[var(--muted)]">
                For proposals, sponsorship, partnership, and general inquiries:
              </p>
              <a className="mt-4 inline-flex w-full items-center justify-center btn-primary" href={`mailto:${site.email}`}>
                {site.email}
              </a>

              <div className="mt-6 rounded-2xl bg-[rgba(211,47,47,.08)] border border-[var(--line)] p-5">
                <p className="text-sm font-extrabold text-[color:var(--accent)]">Investor-ready</p>
                <p className="mt-1 text-xs text-[var(--muted)]">
                  Share this website link + proposal PDF to donors/investors as your official profile.
                </p>
              </div>
            </Card>
          </div>

          <div className="lg:col-span-5">
            <Card>
              <h3 className="text-lg font-extrabold">Quick actions</h3>
              <div className="mt-4 grid gap-3">
                <a href={site.proposalUrl} className="btn-ghost text-center">Download proposal (PDF)</a>
                <a href="#portfolio" className="btn-ghost text-center">View portfolio event</a>
                <a href="/studio" className="btn-ghost text-center">Open CMS (Admin)</a>
              </div>

              <p className="mt-6 text-xs text-[var(--muted)]">
                Place your PDF at: <span className="font-bold">/public/indonesia-on-the-creek-proposal.pdf</span>
              </p>
              <p className="mt-2 text-xs text-[var(--muted)]">
                Optional hero image: <span className="font-bold">/public/images/hero.jpg</span>
              </p>
            </Card>
          </div>
        </div>

        <div className="mt-10 border-t border-[var(--line)] pt-6 text-xs text-[var(--muted)]">
          © {new Date().getFullYear()} IDECN. All rights reserved.
        </div>
      </section>
    </main>
  );
}
