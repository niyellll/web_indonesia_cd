import Reveal from "../components/Reveal";
import SpotlightCard from "../components/SpotlightCard";
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
      {eyebrow && (
        <div className="text-xs font-extrabold uppercase tracking-[0.18em] text-red-600 dark:text-red-400">
          {eyebrow}
        </div>
      )}
      <h2 className="mt-3 text-4xl font-black tracking-tight text-slate-900 dark:text-white md:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mx-auto mt-4 max-w-2xl text-base md:text-lg text-slate-600 dark:text-slate-300">
          {subtitle}
        </p>
      )}
    </div>
  );
}

export default function Page() {
  return (
    <main className="pt-24">
      {/* HERO */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <div className="relative">
          <div className="pointer-events-none absolute inset-x-0 -top-6 h-px bg-gradient-to-r from-transparent via-slate-200/80 to-transparent dark:via-white/10" />

          <Reveal delayMs={40}>
            <div className="flex flex-wrap justify-center gap-3">
              {hero.chips.map((t) => (
                <span
                  key={t}
                  className="inline-flex items-center gap-2 rounded-full border border-slate-300/70 bg-white/75 px-4 py-2 text-sm font-semibold text-slate-700 backdrop-blur
                             shadow-[0_6px_30px_rgba(2,6,23,0.04)]
                             dark:border-white/15 dark:bg-white/10 dark:text-white/90"
                >
                  <span className="h-2 w-2 rounded-full bg-gradient-to-r from-red-600 to-blue-600" />
                  {t}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delayMs={120}>
            <h1 className="mt-8 text-center text-5xl font-black tracking-tight text-slate-900 dark:text-white md:text-7xl lg:text-8xl leading-[0.95]">
              <span className="block">{hero.headingTop}</span>
              <span className="mt-1 block bg-gradient-to-r from-red-600 via-purple-500 to-blue-600 bg-clip-text text-transparent idecn-shimmer">
                {hero.headingGradient}
              </span>
            </h1>
          </Reveal>

          <Reveal delayMs={200}>
            <p className="mx-auto mt-6 max-w-3xl text-center text-base md:text-xl leading-relaxed text-slate-600 dark:text-slate-300">
              {hero.subtitle}
            </p>
          </Reveal>

          <Reveal delayMs={280}>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href={hero.ctas.primary.href}
                className="btn-shine inline-flex items-center justify-center rounded-2xl bg-red-600 px-10 py-4 text-lg font-bold text-white
                           shadow-[0_18px_50px_rgba(239,68,68,0.25)]
                           transition hover:-translate-y-1 hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-600/20"
              >
                {hero.ctas.primary.label}
              </a>

              <a
                href={hero.ctas.proposal.href}
                className="btn-shine inline-flex items-center justify-center rounded-2xl border border-slate-200/80 bg-white/75 px-10 py-4 text-lg font-bold text-slate-900 backdrop-blur
                           shadow-[0_12px_40px_rgba(2,6,23,0.06)]
                           transition hover:-translate-y-1 hover:bg-white focus:outline-none focus:ring-4 focus:ring-slate-900/10
                           dark:border-white/15 dark:bg-white/10 dark:text-white dark:hover:bg-white/15 dark:focus:ring-white/10"
              >
                {hero.ctas.proposal.label}
              </a>

              <a
                href={hero.ctas.portfolio.href}
                className="btn-shine inline-flex items-center justify-center rounded-2xl bg-blue-600 px-10 py-4 text-lg font-bold text-white
                           shadow-[0_18px_50px_rgba(37,99,235,0.25)]
                           transition hover:-translate-y-1 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-600/20"
              >
                {hero.ctas.portfolio.label}
              </a>
            </div>
          </Reveal>

          <Reveal delayMs={360}>
            <div className="mt-10 flex items-center justify-center gap-3 text-sm font-semibold text-slate-500 dark:text-slate-400">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-white/75 shadow-sm dark:border-white/10 dark:bg-white/10 idecn-bob">
                ↓
              </span>
              <span>Scroll to explore</span>
            </div>
          </Reveal>

          {/* Premium row */}
          <div className="mt-14 grid gap-7 lg:grid-cols-12 lg:items-stretch">
            <div className="lg:col-span-7">
              <Reveal delayMs={120}>
                <SpotlightCard className="p-8 md:p-10">
                  <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                    <div>
                      <div className="text-xs font-extrabold uppercase tracking-[0.18em] text-red-600 dark:text-red-400">
                        Why it matters
                      </div>
                      <div className="mt-3 text-2xl md:text-3xl font-black tracking-tight text-slate-900 dark:text-white">
                        Clear programs. Real execution. Partner-ready delivery.
                      </div>
                      <p className="mt-3 text-base md:text-lg leading-relaxed text-slate-600 dark:text-slate-300">
                        We design initiatives that are easy to run, easy to report, and easy to scale with the right partners.
                      </p>
                    </div>

                    <div className="mt-2 md:mt-0 shrink-0 rounded-2xl border border-slate-200/70 bg-white/60 px-5 py-4 backdrop-blur dark:border-white/10 dark:bg-white/6">
                      <div className="text-sm font-bold text-slate-900 dark:text-white">Operating</div>
                      <div className="mt-1 text-slate-600 dark:text-slate-300">U.S.-based • Since 2024</div>
                      <div className="mt-3 h-1 w-20 rounded-full bg-gradient-to-r from-red-600 to-blue-600" />
                    </div>
                  </div>
                </SpotlightCard>
              </Reveal>
            </div>

            <div className="lg:col-span-5">
              <Reveal delayMs={180}>
                <SpotlightCard className="p-8 md:p-10">
                  <div className="text-xs font-extrabold uppercase tracking-[0.18em] text-red-600 dark:text-red-400">
                    At a glance
                  </div>

                  <div className="mt-6 space-y-6">
                    {about.atAGlance.items.map((r) => (
                      <div key={r.k} className="border-b border-slate-100 pb-5 last:border-0 last:pb-0 dark:border-white/10">
                        <div className="text-sm font-bold text-slate-900 dark:text-white">{r.k}</div>
                        <div className="mt-2 text-lg font-semibold text-slate-700 dark:text-slate-200">{r.v}</div>
                      </div>
                    ))}

                    <a
                      href={about.atAGlance.cta.href}
                      className="btn-shine mt-2 inline-flex w-full items-center justify-center rounded-2xl bg-slate-900 px-6 py-4 text-lg font-bold text-white
                                 transition hover:opacity-95 focus:outline-none focus:ring-4 focus:ring-slate-900/15
                                 dark:bg-white dark:text-slate-900 dark:focus:ring-white/12"
                    >
                      {about.atAGlance.cta.label}
                    </a>

                    <div
                      aria-hidden="true"
                      className="pointer-events-none mt-7 h-[110px] rounded-2xl border border-slate-200/60 bg-gradient-to-r from-red-600/10 via-purple-600/8 to-blue-600/10 dark:border-white/10 dark:from-red-500/14 dark:to-blue-500/14 idecn-shimmer"
                    />
                  </div>
                </SpotlightCard>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="scroll-mt-28 mx-auto max-w-7xl px-6 py-24 md:py-28">
        <Reveal>
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="text-4xl font-black tracking-tight text-slate-900 dark:text-white md:text-5xl">
                {about.title}
              </h2>
              <p className="mt-6 text-base md:text-xl leading-relaxed text-slate-600 dark:text-slate-300">
                {about.lead}
              </p>

              <div className="mt-10 space-y-6">
                <div className="rounded-2xl border border-slate-200/70 bg-white/60 p-6 backdrop-blur dark:border-white/10 dark:bg-white/5">
                  <div className="text-lg font-bold text-slate-900 dark:text-white">Our Purpose</div>
                  <p className="mt-2 text-slate-600 dark:text-slate-300">{about.purpose}</p>
                </div>

                <div className="rounded-2xl border border-slate-200/70 bg-white/60 p-6 backdrop-blur dark:border-white/10 dark:bg-white/5">
                  <div className="text-lg font-bold text-slate-900 dark:text-white">Primary Audience</div>
                  <p className="mt-2 text-slate-600 dark:text-slate-300">{about.audience}</p>
                </div>
              </div>
            </div>

            <Reveal delayMs={120}>
              <SpotlightCard className="p-9 md:p-10">
                <div className="text-2xl font-black tracking-tight text-slate-900 dark:text-white">
                  {about.atAGlance.title}
                </div>

                <div className="mt-7 space-y-6">
                  {about.atAGlance.items.map((r) => (
                    <div key={r.k} className="border-b border-slate-100 pb-5 last:border-0 last:pb-0 dark:border-white/10">
                      <div className="text-xs font-extrabold uppercase tracking-[0.18em] text-red-600 dark:text-red-400">
                        {r.k}
                      </div>
                      <div className="mt-2 text-lg font-semibold text-slate-900 dark:text-white">{r.v}</div>
                    </div>
                  ))}

                  <a
                    href={about.atAGlance.cta.href}
                    className="btn-shine inline-flex w-full items-center justify-center rounded-2xl bg-slate-900 px-6 py-4 text-lg font-bold text-white transition hover:opacity-95 dark:bg-white dark:text-slate-900"
                  >
                    {about.atAGlance.cta.label}
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
          <SectionTitle title={programs.title} subtitle={programs.subtitle} />
        </Reveal>

        <div className="mt-12 grid gap-7 md:grid-cols-2">
          {programs.cards.map((c, i) => (
            <Reveal key={c.title} delayMs={80 + i * 60}>
              <SpotlightCard className="p-9 md:p-10">
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <div className="text-2xl md:text-3xl font-black tracking-tight text-slate-900 dark:text-white">
                      {c.title}
                    </div>

                    <ul className="mt-5 space-y-3 text-base md:text-lg text-slate-600 dark:text-slate-300">
                      {c.bullets.map((b) => (
                        <li key={b} className="flex gap-3">
                          <span className="mt-2 h-2 w-2 rounded-full bg-red-600" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div aria-hidden="true" className="h-12 w-12 rounded-2xl bg-gradient-to-br from-red-600 to-blue-600 opacity-85 shadow-md idecn-float" />
                </div>

                <div className="mt-7 flex flex-wrap gap-2.5">
                  {c.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-slate-100/80 px-3.5 py-2 text-sm font-semibold text-slate-700 dark:bg-white/10 dark:text-slate-200"
                    >
                      {t}
                    </span>
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
          <SectionTitle eyebrow={portfolio.eyebrow} title={portfolio.title} />
        </Reveal>

        <Reveal delayMs={140}>
          <SpotlightCard className="mt-12 p-9 md:p-10">
            <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
              <div className="lg:col-span-7">
                <div className="flex flex-wrap gap-3">
                  <span className="rounded-full bg-slate-900 px-4 py-2 text-sm font-bold text-white dark:bg-white dark:text-slate-900">
                    {portfolio.featured.date}
                  </span>
                  <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-bold text-slate-800 dark:bg-white/10 dark:text-slate-100">
                    {portfolio.featured.location}
                  </span>
                </div>

                <h3 className="mt-6 text-3xl md:text-4xl font-black tracking-tight text-slate-900 dark:text-white">
                  {portfolio.featured.name}
                </h3>

                <p className="mt-5 text-base md:text-lg leading-relaxed text-slate-600 dark:text-slate-300">
                  {portfolio.featured.summary}
                </p>

                <div className="mt-7 flex flex-wrap gap-2.5">
                  {portfolio.featured.highlights.map((h) => (
                    <span
                      key={h}
                      className="rounded-full bg-slate-100/80 px-3.5 py-2 text-sm font-semibold text-slate-700 dark:bg-white/10 dark:text-slate-200"
                    >
                      {h}
                    </span>
                  ))}
                </div>

                <div className="mt-9 flex flex-wrap gap-4">
                  <a
                    href={portfolio.featured.ctaDownload.href}
                    className="btn-shine rounded-2xl bg-red-600 px-8 py-4 font-bold text-white transition hover:bg-red-700"
                  >
                    {portfolio.featured.ctaDownload.label}
                  </a>

                  <a
                    href={portfolio.featured.ctaSecondary.href}
                    className="btn-shine rounded-2xl border border-slate-200/70 bg-white/70 px-8 py-4 font-bold text-slate-900 backdrop-blur transition hover:bg-white
                           dark:border-white/15 dark:bg-white/10 dark:text-white dark:hover:bg-white/15"
                  >
                    {portfolio.featured.ctaSecondary.label}
                  </a>
                </div>
              </div>

              {/* ✅ Execution Snapshot (improved readability + premium) */}
              <div className="lg:col-span-5">
                <div
                  className="group relative overflow-hidden rounded-[24px] border border-slate-200/70 bg-white/70 p-7 backdrop-blur
                             shadow-[0_18px_70px_rgba(2,6,23,0.10)]
                             transition hover:-translate-y-1 hover:shadow-[0_28px_90px_rgba(2,6,23,0.14)]
                             dark:border-white/10 dark:bg-white/5 dark:shadow-[0_22px_80px_rgba(0,0,0,0.45)]"
                >
                  {/* Batik texture (calmer) */}
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

                  {/* Readability scrim */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0
                               bg-gradient-to-b from-white/90 via-white/70 to-white/55
                               dark:from-slate-950/35 dark:via-slate-950/25 dark:to-slate-950/15"
                  />

                  {/* Accent wash */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0
                               bg-gradient-to-br from-red-600/10 via-transparent to-blue-600/10
                               dark:from-red-500/14 dark:to-blue-500/14"
                  />

                  {/* Accent bar */}
                  <div
                    aria-hidden="true"
                    className="absolute left-6 top-6 h-1 w-24 rounded-full bg-gradient-to-r from-red-600 to-blue-600"
                  />

                  <div className="relative mt-5">
                    <div className="flex items-center justify-between gap-4">
                      <div className="text-xs font-extrabold uppercase tracking-[0.18em] text-slate-800 dark:text-slate-200">
                        Execution Snapshot
                      </div>

                      <span className="rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-xs font-bold text-slate-800
                                       shadow-sm dark:border-white/10 dark:bg-white/10 dark:text-slate-100"
                      >
                        {portfolio.featured.date}
                      </span>
                    </div>

                    {/* Content panel */}
                    <div className="mt-5 rounded-2xl border border-slate-200/70 bg-white/82 p-5 backdrop-blur
                                    dark:border-white/10 dark:bg-slate-950/28"
                    >
                      <dl className="grid gap-4">
                        <div className="grid grid-cols-[110px_1fr] items-start gap-4">
                          <dt className="text-sm font-bold text-slate-700 dark:text-slate-300">Format</dt>
                          <dd className="text-sm font-extrabold text-slate-900 dark:text-white">Community Event</dd>
                        </div>

                        <div className="h-px bg-slate-200/70 dark:bg-white/10" />

                        <div className="grid grid-cols-[110px_1fr] items-start gap-4">
                          <dt className="text-sm font-bold text-slate-700 dark:text-slate-300">Focus</dt>
                          <dd className="text-sm font-extrabold text-slate-900 dark:text-white">Culinary &amp; Culture</dd>
                        </div>

                        <div className="h-px bg-slate-200/70 dark:bg-white/10" />

                        <div className="grid grid-cols-[110px_1fr] items-start gap-4">
                          <dt className="text-sm font-bold text-slate-700 dark:text-slate-300">Outcome</dt>
                          <dd className="text-sm font-extrabold text-slate-900 dark:text-white">Partner-ready playbook</dd>
                        </div>
                      </dl>
                    </div>

                    <div className="mt-6 flex items-center gap-3">
                      <span className="h-2 w-2 rounded-full bg-red-600" />
                      <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                        Clear summary, easy to pitch to partners.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SpotlightCard>
        </Reveal>
      </section>

      {/* PARTNERS */}
      <section id="partners" className="scroll-mt-28 mx-auto max-w-7xl px-6 py-24 md:py-28">
        <Reveal>
          <SectionTitle title={partners.title} subtitle={partners.subtitle} />
        </Reveal>

        <div className="mt-12 grid gap-7 lg:grid-cols-3">
          {partners.cards.map((c, i) => (
            <Reveal key={c.title} delayMs={80 + i * 60}>
              <SpotlightCard className="p-9 md:p-10">
                <div className="text-xl md:text-2xl font-black tracking-tight text-slate-900 dark:text-white">
                  {c.title}
                </div>
                <p className="mt-4 text-base md:text-lg text-slate-600 dark:text-slate-300">{c.desc}</p>
                <div className="mt-7 h-1 w-20 rounded-full bg-gradient-to-r from-red-600 to-blue-600" aria-hidden="true" />
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </section>

      {/* GET INVOLVED */}
      <section id="get-involved" className="scroll-mt-28 mx-auto max-w-7xl px-6 py-24 md:py-28">
        <Reveal>
          <SectionTitle title={getInvolved.title} subtitle={getInvolved.subtitle} />
        </Reveal>

        <div className="mt-12 grid gap-7 lg:grid-cols-3">
          {getInvolved.cards.map((c, i) => (
            <Reveal key={c.title} delayMs={80 + i * 60}>
              <SpotlightCard className="p-9 md:p-10">
                <div className="text-2xl font-black tracking-tight text-slate-900 dark:text-white">{c.title}</div>
                <p className="mt-3 text-base md:text-lg text-slate-600 dark:text-slate-300">{c.subtitle}</p>
                <a
                  href={`mailto:${site.email}`}
                  className="mt-6 inline-flex font-bold text-blue-700 hover:text-blue-800 dark:text-blue-300 dark:hover:text-blue-200"
                >
                  Start here →
                </a>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>

        <Reveal delayMs={140}>
          <div className="mt-12 overflow-hidden rounded-[34px] border border-slate-200/70 bg-white/65 p-10 backdrop-blur dark:border-white/10 dark:bg-white/6 md:p-14">
            <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-8">
                <div className="text-3xl font-black tracking-tight text-slate-900 dark:text-white md:text-4xl">
                  {getInvolved.banner.title}
                </div>
                <p className="mt-3 text-base md:text-lg text-slate-600 dark:text-slate-300">{getInvolved.banner.desc}</p>
              </div>

              <div className="lg:col-span-4 flex flex-col gap-3 sm:flex-row lg:flex-col">
                <a
                  href={getInvolved.banner.primary.href}
                  className="btn-shine rounded-2xl bg-red-600 px-7 py-4 text-center font-bold text-white hover:bg-red-700 transition"
                >
                  {getInvolved.banner.primary.label}
                </a>

                <a
                  href={getInvolved.banner.secondary.href}
                  className="btn-shine rounded-2xl border border-slate-200/70 bg-white/70 px-7 py-4 text-center font-bold text-slate-900 hover:bg-white transition
                             dark:border-white/15 dark:bg-white/10 dark:text-white dark:hover:bg-white/15"
                >
                  {getInvolved.banner.secondary.label}
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-200/70 bg-white/55 px-6 py-14 backdrop-blur dark:border-white/10 dark:bg-slate-950/40">
        <div className="mx-auto max-w-7xl text-sm text-slate-600 dark:text-slate-300">
          © 2024 {site.orgShort} — {site.orgName}. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
