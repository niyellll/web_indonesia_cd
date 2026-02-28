import Reveal from "../components/Reveal";
import SpotlightCard from "../components/SpotlightCard";
import PortfolioCarousel from "../components/PortfolioCarousel";
import { site, hero, about, programs, portfolio, partners, getInvolved } from "../lib/cms";

function SectionTitle({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="text-center">
      {eyebrow ? (
        <div className="text-xs font-extrabold uppercase tracking-[0.18em] text-orange-500 dark:text-orange-400">
          {eyebrow}
        </div>
      ) : null}

      <h2 className="mt-3 text-4xl font-black tracking-tight text-gray-900 dark:text-white md:text-5xl">
        {title}
      </h2>

      {subtitle ? (
        <p className="mx-auto mt-4 max-w-2xl text-base md:text-lg text-gray-600 dark:text-gray-300">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full bg-gray-100/80 px-3.5 py-2 text-sm font-semibold text-gray-700 dark:bg-white/10 dark:text-gray-200">
      {children}
    </span>
  );
}

export default function Page() {
  // make cms shape safe
  const s = site as any;
  const h = hero as any;
  const a = about as any;
  const pr = programs as any;
  const pf = portfolio as any;
  const pt = partners as any;
  const gi = getInvolved as any;

  const orgShort = s.orgShort ?? "IDECN";
  const orgName = s.orgName ?? "Indonesia Education & Cultural Network";
  const email = s.email ?? "hello@idecn.org";

  const heroChips: string[] =
    h.chips ?? ["Nonprofit (U.S.-based)", "Established 2024", "Indonesia ↔ U.S."];

  const heroHeadingTop: string = h.headingTop ?? "Indonesia Education &";
  const heroHeadingGradient: string = h.headingGradient ?? "Cultural Network";

  const heroSubtitle: string =
    h.subtitle ??
    "A U.S.-based nonprofit dedicated to fostering cross-cultural understanding, educational opportunities, and community connections between Indonesia and the United States.";

  const heroCtas =
    h.ctas ??
    ({
      primary: { label: "Get involved", href: "#get-involved" },
      proposal: { label: "Download proposal (PDF)", href: "/indonesia-on-the-creek-proposal.pdf" },
      portfolio: { label: "View portfolio event", href: "#portfolio" },
    } as const);

  const featured =
    pf.featured ??
    ({
      name: "Indonesia Culinary Day on the Creek",
      date: "2024",
      location: "Washington, D.C., USA",
      summary:
        "A community-based cultural event celebrating Indonesian cuisine and cross-cultural connection—executed with partners and volunteers on the ground.",
      highlights: ["Community engagement", "Vendor collaboration", "Cultural showcase", "Partner-ready playbook"],
      ctaDownload: { label: "Download report", href: "/indonesia-on-the-creek-proposal.pdf" },
      ctaSecondary: { label: "Discuss next event", href: `mailto:${email}` },
    } as const);

  // 3 carousel slides (keeps your current design)
  const portfolioSlides = [
    {
      key: "overview",
      title: "Event Overview",
      content: (
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-7">
            <div className="flex flex-wrap gap-3">
              <span className="rounded-full bg-gray-900 px-4 py-2 text-sm font-bold text-white dark:bg-white dark:text-gray-900">
                {featured.date}
              </span>
              <span className="rounded-full bg-gray-100 px-4 py-2 text-sm font-bold text-gray-800 dark:bg-white/10 dark:text-gray-100">
                {featured.location}
              </span>
            </div>

            <h3 className="mt-6 text-3xl md:text-4xl font-black tracking-tight text-gray-900 dark:text-white">
              {featured.name}
            </h3>

            <p className="mt-5 text-base md:text-lg leading-relaxed text-gray-600 dark:text-gray-300">
              {featured.summary}
            </p>

            <div className="mt-7 flex flex-wrap gap-2.5">
              {(featured.highlights ?? []).map((x: string) => (
                <Pill key={x}>{x}</Pill>
              ))}
            </div>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href={featured.ctaDownload?.href}
                className="btn-shine rounded-2xl bg-orange-500 px-8 py-4 font-bold text-white transition hover:bg-orange-600"
              >
                {featured.ctaDownload?.label ?? "Download report"}
              </a>

              <a
                href={featured.ctaSecondary?.href}
                className="btn-shine rounded-2xl border border-gray-200/70 bg-white/70 px-8 py-4 font-bold text-gray-900 backdrop-blur transition hover:bg-white
                           dark:border-white/15 dark:bg-white/10 dark:text-white dark:hover:bg-white/15"
              >
                {featured.ctaSecondary?.label ?? "Discuss next event"}
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div
              className="group relative overflow-hidden rounded-[24px] border border-gray-200/70 bg-white/70 p-7 backdrop-blur
                         shadow-[0_18px_70px_rgba(0,0,0,0.10)]
                         transition hover:-translate-y-1 hover:shadow-[0_28px_90px_rgba(0,0,0,0.14)]
                         dark:border-white/10 dark:bg-white/5 dark:shadow-[0_22px_80px_rgba(0,0,0,0.45)]"
            >
              {/* subtle batik */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 opacity-[0.18] dark:opacity-[0.12]"
                style={{
                  backgroundImage: "url('/batik-pattern.svg')",
                  backgroundRepeat: "repeat",
                  backgroundPosition: "center",
                  backgroundSize: "820px 820px",
                  filter: "grayscale(1) contrast(1.3)",
                }}
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0
                           bg-gradient-to-b from-white/90 via-white/70 to-white/55
                           dark:from-gray-950/35 dark:via-gray-950/25 dark:to-gray-950/15"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0
                           bg-gradient-to-br from-orange-500/10 via-transparent to-gray-500/10
                           dark:from-orange-500/14 dark:to-gray-500/14"
              />
              <div
                aria-hidden="true"
                className="absolute left-6 top-6 h-1 w-24 rounded-full bg-gradient-to-r from-orange-500 to-gray-500"
              />

              <div className="relative mt-5">
                <div className="flex items-center justify-between gap-4">
                  <div className="text-xs font-extrabold uppercase tracking-[0.18em] text-gray-800 dark:text-gray-200">
                    Execution Snapshot
                  </div>

                  <span
                    className="rounded-full border border-gray-200 bg-white/80 px-3 py-1 text-xs font-bold text-gray-800
                               shadow-sm dark:border-white/10 dark:bg-white/10 dark:text-gray-100"
                  >
                    {featured.date}
                  </span>
                </div>

                <div
                  className="mt-5 rounded-2xl border border-gray-200/70 bg-white/82 p-5 backdrop-blur
                             dark:border-white/10 dark:bg-gray-950/28"
                >
                  <dl className="grid gap-4">
                    <div className="grid grid-cols-[110px_1fr] items-start gap-4">
                      <dt className="text-sm font-bold text-gray-700 dark:text-gray-300">Format</dt>
                      <dd className="text-sm font-extrabold text-gray-900 dark:text-white">Community Event</dd>
                    </div>

                    <div className="h-px bg-gray-200/70 dark:bg-white/10" />

                    <div className="grid grid-cols-[110px_1fr] items-start gap-4">
                      <dt className="text-sm font-bold text-gray-700 dark:text-gray-300">Focus</dt>
                      <dd className="text-sm font-extrabold text-gray-900 dark:text-white">
                        Culinary &amp; Culture
                      </dd>
                    </div>

                    <div className="h-px bg-gray-200/70 dark:bg-white/10" />

                    <div className="grid grid-cols-[110px_1fr] items-start gap-4">
                      <dt className="text-sm font-bold text-gray-700 dark:text-gray-300">Outcome</dt>
                      <dd className="text-sm font-extrabold text-gray-900 dark:text-white">
                        Partner-ready playbook
                      </dd>
                    </div>
                  </dl>
                </div>

                <div className="mt-6 flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-orange-500" />
                  <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                    Clear summary, easy to pitch to partners.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },

    {
      key: "deliverables",
      title: "What We Deliver",
      content: (
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-7">
            <div className="text-xs font-extrabold uppercase tracking-[0.18em] text-orange-500 dark:text-orange-400">
              Partner-ready outputs
            </div>
            <h3 className="mt-3 text-3xl md:text-4xl font-black tracking-tight text-gray-900 dark:text-white">
              Materials that make collaboration easy.
            </h3>

            <p className="mt-5 text-base md:text-lg leading-relaxed text-gray-600 dark:text-gray-300">
              Not just an event—our deliverables are packaged so they’re easy to pitch, replicate, and scale with partners.
            </p>

            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              {[
                { k: "Post-event report", v: "Highlights + outcomes + key notes" },
                { k: "Playbook", v: "Repeatable partner workflow" },
                { k: "Vendor kit", v: "Onboarding + logistics checklist" },
                { k: "Media pack", v: "Photos + key story points" },
              ].map((x) => (
                <div
                  key={x.k}
                  className="rounded-2xl border border-gray-200/70 bg-white/70 p-5 backdrop-blur
                             dark:border-white/10 dark:bg-white/6"
                >
                  <div className="text-base font-black text-gray-900 dark:text-white">{x.k}</div>
                  <div className="mt-1 text-gray-600 dark:text-gray-300">{x.v}</div>
                </div>
              ))}
            </div>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href={featured.ctaDownload?.href}
                className="btn-shine rounded-2xl bg-orange-500 px-8 py-4 font-bold text-white transition hover:bg-orange-600"
              >
                Download report
              </a>
              <a
                href={`mailto:${email}`}
                className="btn-shine rounded-2xl border border-gray-200/70 bg-white/70 px-8 py-4 font-bold text-gray-900 backdrop-blur transition hover:bg-white
                           dark:border-white/15 dark:bg-white/10 dark:text-white dark:hover:bg-white/15"
              >
                Request full deck
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <SpotlightCard className="p-7 md:p-8">
              <div className="text-xs font-extrabold uppercase tracking-[0.18em] text-orange-500 dark:text-orange-400">
                Highlights
              </div>

              <div className="mt-5 space-y-4">
                {(featured.highlights ?? []).map((x: string) => (
                  <div key={x} className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-gray-500" />
                    <div className="text-base md:text-lg font-semibold text-gray-800 dark:text-gray-100">{x}</div>
                  </div>
                ))}
              </div>

              <div className="mt-7 h-px bg-gray-200/70 dark:bg-white/10" />

              <div className="mt-6 rounded-2xl border border-gray-200/70 bg-white/70 p-5 backdrop-blur dark:border-white/10 dark:bg-white/6">
                <div className="text-sm font-extrabold uppercase tracking-[0.18em] text-gray-700 dark:text-gray-300">
                  Notes
                </div>
                <div className="mt-2 text-gray-600 dark:text-gray-300">
                  Built with volunteers + local partners, designed to be repeated with minimal overhead.
                </div>
              </div>
            </SpotlightCard>
          </div>
        </div>
      ),
    },

    {
      key: "next",
      title: "Next Steps",
      content: (
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-7">
            <div className="text-xs font-extrabold uppercase tracking-[0.18em] text-orange-500 dark:text-orange-400">
              Scaling pathway
            </div>
            <h3 className="mt-3 text-3xl md:text-4xl font-black tracking-tight text-gray-900 dark:text-white">
              Make the next collaboration fast and predictable.
            </h3>

            <p className="mt-5 text-base md:text-lg leading-relaxed text-gray-600 dark:text-gray-300">
              A simple structure: clear objective, clear format, clear roles, and clear outputs.
            </p>

            <div className="mt-7 space-y-4">
              {[
                { step: "1", t: "Align objective", d: "Education / culture / community engagement target." },
                { step: "2", t: "Pick format", d: "Community event, workshop, or campus activation." },
                { step: "3", t: "Run playbook", d: "Partner + volunteer workflow that’s repeatable." },
                { step: "4", t: "Report & package", d: "Outcome summary + documentation + media kit." },
              ].map((x) => (
                <div
                  key={x.step}
                  className="flex gap-4 rounded-2xl border border-gray-200/70 bg-white/70 p-5 backdrop-blur
                             dark:border-white/10 dark:bg-white/6"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-gray-600 text-white font-black">
                    {x.step}
                  </div>
                  <div>
                    <div className="text-lg font-black text-gray-900 dark:text-white">{x.t}</div>
                    <div className="mt-1 text-gray-600 dark:text-gray-300">{x.d}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href={`mailto:${email}`}
                className="btn-shine rounded-2xl bg-orange-500 px-8 py-4 font-bold text-white transition hover:bg-orange-600"
              >
                Discuss next event
              </a>
              <a
                href={featured.ctaDownload?.href}
                className="btn-shine rounded-2xl border border-gray-200/70 bg-white/70 px-8 py-4 font-bold text-gray-900 backdrop-blur transition hover:bg-white
                           dark:border-white/15 dark:bg-white/10 dark:text-white dark:hover:bg-white/15"
              >
                Download report
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <SpotlightCard className="p-8">
              <div className="text-xs font-extrabold uppercase tracking-[0.18em] text-orange-500 dark:text-orange-400">
                Contact
              </div>
              <div className="mt-4 text-2xl font-black tracking-tight text-gray-900 dark:text-white">
                Let’s build the next collaboration.
              </div>
              <p className="mt-3 text-gray-600 dark:text-gray-300">
                We can adapt the playbook for sponsors, universities, and community partners.
              </p>

              <div className="mt-6 rounded-2xl border border-gray-200/70 bg-white/70 p-5 backdrop-blur dark:border-white/10 dark:bg-white/6">
                <div className="text-sm font-bold text-gray-900 dark:text-white">Email</div>
                <div className="mt-1 font-semibold text-gray-700 dark:text-gray-200">{email}</div>
              </div>
            </SpotlightCard>
          </div>
        </div>
      ),
    },
  ];

  return (
    <main className="pt-24">
      {/* HERO */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <div className="relative">
          <div className="pointer-events-none absolute inset-x-0 -top-6 h-px bg-gradient-to-r from-transparent via-gray-200/80 to-transparent dark:via-white/10" />

          <Reveal delayMs={40}>
            <div className="flex flex-wrap justify-center gap-3">
              {heroChips.map((t: string) => (
                <span
                  key={t}
                  className="inline-flex items-center gap-2 rounded-full border border-gray-300/70 bg-white/75 px-4 py-2 text-sm font-semibold text-gray-700 backdrop-blur
                             shadow-[0_6px_30px_rgba(2,6,23,0.04)]
                             dark:border-white/15 dark:bg-white/10 dark:text-white/90"
                >
                  <span className="h-2 w-2 rounded-full bg-gradient-to-r from-orange-500 to-gray-500" />
                  {t}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delayMs={120}>
            <h1 className="mt-8 text-center text-5xl font-black tracking-tight text-gray-900 dark:text-white md:text-7xl lg:text-8xl leading-[0.95]">
              <span className="block">{heroHeadingTop}</span>
              <span className="mt-1 block bg-gradient-to-r from-orange-500 via-orange-400 to-gray-500 bg-clip-text text-transparent idecn-shimmer">
                {heroHeadingGradient}
              </span>
            </h1>
          </Reveal>

          <Reveal delayMs={200}>
            <p className="mx-auto mt-6 max-w-3xl text-center text-base md:text-xl leading-relaxed text-gray-600 dark:text-gray-300">
              {heroSubtitle}
            </p>
          </Reveal>

          <Reveal delayMs={280}>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href={heroCtas.primary?.href ?? "#get-involved"}
                className="btn-shine inline-flex items-center justify-center rounded-2xl bg-orange-500 px-10 py-4 text-lg font-bold text-white
                           shadow-[0_18px_50px_rgba(249,115,22,0.25)]
                           transition hover:-translate-y-1 hover:bg-orange-600 focus:outline-none focus:ring-4 focus:ring-orange-500/20"
              >
                {heroCtas.primary?.label ?? "Get involved"}
              </a>

              <a
                href={heroCtas.proposal?.href ?? "/indonesia-on-the-creek-proposal.pdf"}
                className="btn-shine inline-flex items-center justify-center rounded-2xl border border-gray-200/80 bg-white/75 px-10 py-4 text-lg font-bold text-gray-900 backdrop-blur
                           shadow-[0_12px_40px_rgba(0,0,0,0.06)]
                           transition hover:-translate-y-1 hover:bg-white focus:outline-none focus:ring-4 focus:ring-gray-900/10
                           dark:border-white/15 dark:bg-white/10 dark:text-white dark:hover:bg-white/15 dark:focus:ring-white/10"
              >
                {heroCtas.proposal?.label ?? "Download proposal (PDF)"}
              </a>

              <a
                href={heroCtas.portfolio?.href ?? "#portfolio"}
                className="btn-shine inline-flex items-center justify-center rounded-2xl bg-gray-700 px-10 py-4 text-lg font-bold text-white
                           shadow-[0_18px_50px_rgba(55,65,81,0.25)]
                           transition hover:-translate-y-1 hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-gray-700/20"
              >
                {heroCtas.portfolio?.label ?? "View portfolio event"}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="scroll-mt-28 mx-auto max-w-7xl px-6 py-24 md:py-28">
        <Reveal delayMs={60}>
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="text-4xl font-black tracking-tight text-gray-900 dark:text-white md:text-5xl">
                {a.title ?? "Who we are"}
              </h2>
              <p className="mt-6 text-base md:text-xl leading-relaxed text-gray-600 dark:text-gray-300">
                {a.lead ?? ""}
              </p>

              <div className="mt-10 space-y-6">
                <div className="rounded-2xl border border-gray-200/70 bg-white/60 p-6 backdrop-blur dark:border-white/10 dark:bg-white/5">
                  <div className="text-lg font-bold text-gray-900 dark:text-white">Our Purpose</div>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">{a.purpose ?? ""}</p>
                </div>

                <div className="rounded-2xl border border-gray-200/70 bg-white/60 p-6 backdrop-blur dark:border-white/10 dark:bg-white/5">
                  <div className="text-lg font-bold text-gray-900 dark:text-white">Primary Audience</div>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">{a.audience ?? ""}</p>
                </div>
              </div>
            </div>

            <Reveal delayMs={140}>
              <SpotlightCard className="p-9 md:p-10">
                <div className="text-2xl font-black tracking-tight text-gray-900 dark:text-white">
                  {a.atAGlance?.title ?? "At a glance"}
                </div>

                <div className="mt-7 space-y-6">
                  {(a.atAGlance?.items ?? []).map((r: any) => (
                    <div
                      key={r.k}
                      className="border-b border-gray-100 pb-5 last:border-0 last:pb-0 dark:border-white/10"
                    >
                      <div className="text-xs font-extrabold uppercase tracking-[0.18em] text-orange-500 dark:text-orange-400">
                        {r.k}
                      </div>
                      <div className="mt-2 text-lg font-semibold text-gray-900 dark:text-white">{r.v}</div>
                    </div>
                  ))}

                  <a
                    href={a.atAGlance?.cta?.href ?? `mailto:${email}`}
                    className="btn-shine inline-flex w-full items-center justify-center rounded-2xl bg-gray-900 px-6 py-4 text-lg font-bold text-white transition hover:opacity-95 dark:bg-white dark:text-gray-900"
                  >
                    {a.atAGlance?.cta?.label ?? "Talk to us"}
                  </a>
                </div>
              </SpotlightCard>
            </Reveal>
          </div>
        </Reveal>
      </section>

      {/* PROGRAMS */}
      <section id="programs" className="scroll-mt-28 mx-auto max-w-7xl px-6 py-24 md:py-28">
        <Reveal>
          <SectionTitle title={pr.title ?? "Our Core Programs"} subtitle={pr.subtitle ?? ""} />
        </Reveal>

        <div className="mt-12 grid gap-7 md:grid-cols-2">
          {(pr.cards ?? []).map((c: any, i: number) => (
            <Reveal key={c.title ?? i} delayMs={80 + i * 60}>
              <SpotlightCard className="p-9 md:p-10">
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <div className="text-2xl md:text-3xl font-black tracking-tight text-gray-900 dark:text-white">
                      {c.title}
                    </div>

                    <ul className="mt-5 space-y-3 text-base md:text-lg text-gray-600 dark:text-gray-300">
                      {(c.bullets ?? []).map((b: string) => (
                        <li key={b} className="flex gap-3">
                          <span className="mt-2 h-2 w-2 rounded-full bg-orange-500" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div
                    aria-hidden="true"
                    className="h-12 w-12 rounded-2xl bg-gradient-to-br from-orange-500 to-gray-600 opacity-85 shadow-md idecn-float"
                  />
                </div>

                <div className="mt-7 flex flex-wrap gap-2.5">
                  {(c.tags ?? []).map((t: string) => (
                    <Pill key={t}>{t}</Pill>
                  ))}
                </div>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="scroll-mt-28 mx-auto max-w-7xl px-6 py-24 md:py-28">
        <Reveal>
          <SectionTitle eyebrow={pf.eyebrow ?? "Proof of execution"} title={pf.title ?? "Portfolio Event"} />
          {/* subtitle premium (English + readable) */}
          <div className="mx-auto mt-4 max-w-3xl text-center">
            <div
              className="inline-block rounded-2xl border border-gray-200/70 bg-white/75 px-5 py-3
                         text-base md:text-lg font-semibold leading-relaxed text-gray-700
                         shadow-[0_10px_45px_rgba(0,0,0,0.08)]
                         backdrop-blur
                         dark:border-white/12 dark:bg-white/10 dark:text-gray-200"
              style={{
                textShadow: "0 1px 0 rgba(255,255,255,0.35)",
              }}
            >
              Clear execution summary—measurable outcomes, organized documentation, and a partner-ready playbook for the next collaboration.
            </div>
          </div>
        </Reveal>

        <Reveal delayMs={120}>
          <div className="mt-10 rounded-[34px] border border-gray-200/70 bg-white/55 p-6 backdrop-blur dark:border-white/10 dark:bg-white/5 md:p-8 overflow-visible">
            <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div className="text-sm font-semibold text-gray-600 dark:text-gray-300">
                Swipe / scroll to view slides
              </div>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-orange-500" />
                <span className="text-sm font-semibold text-gray-600 dark:text-gray-300">Portfolio carousel</span>
              </div>
            </div>

            <PortfolioCarousel count={portfolioSlides.length} className="mt-6" label="Portfolio carousel">
              {portfolioSlides.map((sl, idx) => (
                <div
                  key={sl.key}
                  data-slide
                  className="snap-center shrink-0 w-[92%] md:w-[86%] lg:w-[78%]"
                  aria-label={`Portfolio slide ${idx + 1}: ${sl.title}`}
                >
                  <Reveal delayMs={60 + idx * 90}>
                    <SpotlightCard className="p-9 md:p-10">
                      <div className="flex items-center justify-between gap-4">
                        <div className="text-xs font-extrabold uppercase tracking-[0.18em] text-orange-500 dark:text-orange-400">
                          Slide {idx + 1} / {portfolioSlides.length}
                        </div>

                        <div
                          className="rounded-full border border-gray-200/70 bg-white/70 px-3 py-1 text-xs font-bold text-gray-800 backdrop-blur
                                     dark:border-white/10 dark:bg-white/10 dark:text-gray-100"
                        >
                          {sl.title}
                        </div>
                      </div>

                      <div className="mt-7">{sl.content}</div>
                    </SpotlightCard>
                  </Reveal>
                </div>
              ))}
            </PortfolioCarousel>
          </div>
        </Reveal>
      </section>

      {/* PARTNERS */}
      <section id="partners" className="scroll-mt-28 mx-auto max-w-7xl px-6 py-24 md:py-28">
        <Reveal>
          <SectionTitle title={pt.title ?? "Partners"} subtitle={pt.subtitle ?? ""} />
        </Reveal>

        <div className="mt-12 grid gap-7 lg:grid-cols-3">
          {(pt.cards ?? []).map((c: any, i: number) => (
            <Reveal key={c.title ?? i} delayMs={80 + i * 60}>
              <SpotlightCard className="p-9 md:p-10">
                <div className="text-xl md:text-2xl font-black tracking-tight text-gray-900 dark:text-white">
                  {c.title}
                </div>
                <p className="mt-4 text-base md:text-lg text-gray-600 dark:text-gray-300">{c.desc}</p>
                <div className="mt-7 h-1 w-20 rounded-full bg-gradient-to-r from-orange-500 to-gray-500" aria-hidden="true" />
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </section>

      {/* GET INVOLVED */}
      <section id="get-involved" className="scroll-mt-28 mx-auto max-w-7xl px-6 py-24 md:py-28">
        <Reveal>
          <SectionTitle title={gi.title ?? "Get involved"} subtitle={gi.subtitle ?? ""} />
        </Reveal>

        <div className="mt-12 grid gap-7 lg:grid-cols-3">
          {(gi.cards ?? []).map((c: any, i: number) => (
            <Reveal key={c.title ?? i} delayMs={80 + i * 60}>
              <SpotlightCard className="p-9 md:p-10">
                <div className="text-2xl font-black tracking-tight text-gray-900 dark:text-white">{c.title}</div>
                <p className="mt-3 text-base md:text-lg text-gray-600 dark:text-gray-300">{c.subtitle}</p>
                <a
                  href={`mailto:${email}`}
                  className="mt-6 inline-flex font-bold text-orange-600 hover:text-orange-700 dark:text-orange-400 dark:hover:text-orange-300"
                >
                  Start here →
                </a>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>

        <Reveal delayMs={140}>
          <div className="mt-12 overflow-hidden rounded-[34px] border border-gray-200/70 bg-white/65 p-10 backdrop-blur dark:border-white/10 dark:bg-white/6 md:p-14">
            <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-8">
                <div className="text-3xl font-black tracking-tight text-gray-900 dark:text-white md:text-4xl">
                  {gi.banner?.title ?? "Ready to collaborate?"}
                </div>
                <p className="mt-3 text-base md:text-lg text-gray-600 dark:text-gray-300">
                  {gi.banner?.desc ?? "Tell us your goals—we’ll map a collaboration plan with clear deliverables."}
                </p>
              </div>

              <div className="lg:col-span-4 flex flex-col gap-3 sm:flex-row lg:flex-col">
                <a
                  href={gi.banner?.primary?.href ?? `mailto:${email}`}
                  className="btn-shine rounded-2xl bg-orange-500 px-7 py-4 text-center font-bold text-white hover:bg-orange-600 transition"
                >
                  {gi.banner?.primary?.label ?? "Contact"}
                </a>

                <a
                  href={gi.banner?.secondary?.href ?? "#portfolio"}
                  className="btn-shine rounded-2xl border border-gray-200/70 bg-white/70 px-7 py-4 text-center font-bold text-gray-900 hover:bg-white transition
                             dark:border-white/15 dark:bg-white/10 dark:text-white dark:hover:bg-white/15"
                >
                  {gi.banner?.secondary?.label ?? "View portfolio"}
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-gray-200/70 bg-white/55 px-6 py-14 backdrop-blur dark:border-white/10 dark:bg-gray-950/40">
        <div className="mx-auto max-w-7xl text-sm text-gray-600 dark:text-gray-300">
          © 2024 {orgShort} — {orgName}. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
