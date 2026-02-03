import Reveal from "../components/Reveal";
import { about, programs, portfolio, partners, getInvolved, hero, site } from "../lib/cms";

function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={[
        "rounded-[28px] border border-slate-200/70 bg-white/70 backdrop-blur-xl",
        "shadow-[0_16px_60px_rgba(2,6,23,0.08)] transition-all duration-500",
        "dark:border-white/10 dark:bg-slate-900/45 dark:shadow-[0_18px_70px_rgba(0,0,0,0.45)]",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}

export default function Page() {
  return (
    <main className="pt-24">
      {/* HERO (split layout, not like web2) */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <Reveal delayMs={50}>
              <div className="mb-7 flex flex-wrap gap-3">
                {hero.chips.map((t) => (
                  <span
                    key={t}
                    className="inline-flex items-center gap-2 rounded-full border border-slate-300/70 bg-white/70 px-4 py-2 text-sm font-semibold text-slate-700 backdrop-blur
                               dark:border-white/15 dark:bg-white/10 dark:text-white/90"
                  >
                    <span className="h-2 w-2 rounded-full bg-gradient-to-r from-red-600 to-blue-600" />
                    {t}
                  </span>
                ))}
              </div>
            </Reveal>

            <Reveal delayMs={120}>
              <h1 className="text-5xl font-black tracking-tight text-slate-900 dark:text-white md:text-7xl lg:text-8xl leading-[0.95]">
                {hero.headingTop}{" "}
                <span
                  className="block bg-gradient-to-r from-red-600 via-purple-500 to-blue-600 bg-clip-text text-transparent idecn-shimmer"
                >
                  {hero.headingGradient}
                </span>
              </h1>
            </Reveal>

            <Reveal delayMs={200}>
              <p className="mt-6 max-w-2xl text-base md:text-xl leading-relaxed text-slate-600 dark:text-slate-300">
                {hero.subtitle}
              </p>
            </Reveal>

            <Reveal delayMs={280}>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href={hero.ctas.primary.href}
                  className="rounded-2xl bg-red-600 px-9 py-4 text-lg font-bold text-white shadow-xl shadow-red-600/20 transition hover:-translate-y-1 hover:bg-red-700"
                >
                  {hero.ctas.primary.label}
                </a>

                <a
                  href={hero.ctas.proposal.href}
                  className="rounded-2xl border border-slate-200/70 bg-white/70 px-9 py-4 text-lg font-bold text-slate-900 backdrop-blur transition hover:bg-white
                             dark:border-white/15 dark:bg-white/10 dark:text-white dark:hover:bg-white/15"
                >
                  {hero.ctas.proposal.label}
                </a>

                {/* FIX: works because section below has id=portfolio, and no overlay blocks clicks */}
                <a
                  href={hero.ctas.portfolio.href}
                  className="rounded-2xl bg-blue-600 px-9 py-4 text-lg font-bold text-white shadow-xl shadow-blue-600/20 transition hover:-translate-y-1 hover:bg-blue-700"
                >
                  {hero.ctas.portfolio.label}
                </a>
              </div>
            </Reveal>
          </div>

          {/* right feature panel (distinct from web2) */}
          <div className="lg:col-span-5">
            <Reveal delayMs={160}>
              <Card className="relative overflow-hidden p-8 md:p-10">
                {/* IMPORTANT: pointer-events-none so it never blocks clicks */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 opacity-[0.18] dark:opacity-[0.12]"
                  style={{
                    backgroundImage: "url('/batik-pattern.svg')",
                    backgroundRepeat: "repeat",
                    backgroundPosition: "center",
                    backgroundSize: "760px 760px",
                  }}
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-gradient-to-br from-red-600/10 via-transparent to-blue-600/10 dark:from-red-500/14 dark:to-blue-500/14"
                />

                <div className="relative">
                  <div className="text-xs font-extrabold uppercase tracking-[0.18em] text-red-600 dark:text-red-400">
                    At a glance
                  </div>
                  <div className="mt-4 space-y-5">
                    <div>
                      <div className="text-sm font-bold text-slate-900 dark:text-white">Focus</div>
                      <div className="mt-1 text-slate-600 dark:text-slate-300">Education, Culture, Tech, Culinary</div>
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-900 dark:text-white">Operating</div>
                      <div className="mt-1 text-slate-600 dark:text-slate-300">Since 2024 (U.S.-based nonprofit)</div>
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-900 dark:text-white">Contact</div>
                      <div className="mt-1 text-slate-600 dark:text-slate-300">{site.email}</div>
                    </div>

                    <a
                      href={`mailto:${site.email}`}
                      className="mt-2 inline-flex w-full items-center justify-center rounded-2xl bg-slate-900 px-6 py-4 text-lg font-bold text-white transition hover:opacity-95 dark:bg-white dark:text-slate-900"
                    >
                      Talk to us
                    </a>
                  </div>
                </div>
              </Card>
            </Reveal>
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
              <p className="mt-6 text-base md:text-lg leading-relaxed text-slate-600 dark:text-slate-300">
                {about.purpose}
              </p>
              <p className="mt-6 text-base md:text-lg leading-relaxed text-slate-600 dark:text-slate-300">
                {about.audience}
              </p>
            </div>

            <Card className="p-9 md:p-10">
              <div className="text-2xl font-black tracking-tight text-slate-900 dark:text-white">{about.atAGlance.title}</div>
              <div className="mt-7 space-y-6">
                {about.atAGlance.items.map((r) => (
                  <div key={r.k} className="border-b border-slate-100 pb-5 last:border-0 last:pb-0 dark:border-white/10">
                    <div className="text-xs font-extrabold uppercase tracking-[0.18em] text-red-600 dark:text-red-400">{r.k}</div>
                    <div className="mt-2 text-lg font-semibold text-slate-900 dark:text-white">{r.v}</div>
                  </div>
                ))}
                <a
                  href={about.atAGlance.cta.href}
                  className="inline-flex w-full items-center justify-center rounded-2xl bg-slate-900 px-6 py-4 text-lg font-bold text-white transition hover:opacity-95 dark:bg-white dark:text-slate-900"
                >
                  {about.atAGlance.cta.label}
                </a>
              </div>
            </Card>
          </div>
        </Reveal>
      </section>

      {/* PROGRAMS */}
      <section id="programs" className="scroll-mt-28 mx-auto max-w-7xl px-6 py-24 md:py-28">
        <Reveal>
          <div className="text-center">
            <h2 className="text-4xl font-black tracking-tight text-slate-900 dark:text-white md:text-5xl">{programs.title}</h2>
            <p className="mx-auto mt-4 max-w-2xl text-base md:text-lg text-slate-600 dark:text-slate-300">{programs.subtitle}</p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-7 md:grid-cols-2">
          {programs.cards.map((c, i) => (
            <Reveal key={c.title} delayMs={80 + i * 60}>
              <Card className="p-9 md:p-10 hover:-translate-y-1.5 hover:shadow-[0_28px_90px_rgba(2,6,23,0.14)] dark:hover:shadow-[0_28px_90px_rgba(0,0,0,0.55)]">
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <div className="text-2xl font-black tracking-tight text-slate-900 dark:text-white">{c.title}</div>
                    <ul className="mt-5 space-y-3 text-base md:text-lg text-slate-600 dark:text-slate-300">
                      {c.bullets.map((b) => (
                        <li key={b} className="flex gap-3">
                          <span className="mt-2 h-2 w-2 rounded-full bg-red-600" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* corner accent (beda dari web2) */}
                  <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-red-600 to-blue-600 opacity-85 shadow-md" aria-hidden="true" />
                </div>

                <div className="mt-7 flex flex-wrap gap-2.5">
                  {c.tags.map((t) => (
                    <span key={t} className="rounded-full bg-slate-100/80 px-3.5 py-2 text-sm font-semibold text-slate-700 dark:bg-white/10 dark:text-slate-200">
                      {t}
                    </span>
                  ))}
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="scroll-mt-28 mx-auto max-w-7xl px-6 py-24 md:py-28">
        <Reveal>
          <div className="text-center">
            <div className="text-xs font-extrabold uppercase tracking-[0.18em] text-red-600 dark:text-red-400">{portfolio.eyebrow}</div>
            <h2 className="mt-3 text-4xl font-black tracking-tight text-slate-900 dark:text-white md:text-5xl">{portfolio.title}</h2>
          </div>
        </Reveal>

        <Reveal delayMs={140}>
          <Card className="mt-12 overflow-hidden">
            <div className="grid lg:grid-cols-12">
              <div className="p-9 md:p-10 lg:col-span-6">
                <div className="flex flex-wrap gap-3">
                  <span className="rounded-full bg-slate-900 px-4 py-2 text-sm font-bold text-white dark:bg-white dark:text-slate-900">
                    {portfolio.featured.date}
                  </span>
                  <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-bold text-slate-800 dark:bg-white/10 dark:text-slate-100">
                    {portfolio.featured.location}
                  </span>
                </div>

                <h3 className="mt-6 text-3xl font-black tracking-tight text-slate-900 dark:text-white md:text-4xl">
                  {portfolio.featured.name}
                </h3>

                <p className="mt-5 text-base md:text-lg leading-relaxed text-slate-600 dark:text-slate-300">
                  {portfolio.featured.summary}
                </p>

                <div className="mt-7 flex flex-wrap gap-2.5">
                  {portfolio.featured.highlights.map((h) => (
                    <span key={h} className="rounded-full bg-slate-100/80 px-3.5 py-2 text-sm font-semibold text-slate-700 dark:bg-white/10 dark:text-slate-200">
                      {h}
                    </span>
                  ))}
                </div>

                <div className="mt-9 flex flex-wrap gap-4">
                  <a href={portfolio.featured.ctaDownload.href} className="rounded-2xl bg-red-600 px-8 py-4 font-bold text-white transition hover:bg-red-700">
                    {portfolio.featured.ctaDownload.label}
                  </a>
                  <a
                    href={portfolio.featured.ctaSecondary.href}
                    className="rounded-2xl border border-slate-200/70 bg-white/70 px-8 py-4 font-bold text-slate-900 backdrop-blur transition hover:bg-white
                           dark:border-white/15 dark:bg-white/10 dark:text-white dark:hover:bg-white/15"
                  >
                    {portfolio.featured.ctaSecondary.label}
                  </a>
                </div>
              </div>

              <div className="relative min-h-[280px] lg:col-span-6 lg:min-h-[420px]">
                <div className="absolute inset-0 bg-gradient-to-tr from-slate-950/55 via-slate-950/10 to-transparent" />
                <img src={portfolio.featured.imageSrc} alt={portfolio.featured.imageAlt} className="h-full w-full object-cover" />
              </div>
            </div>
          </Card>
        </Reveal>
      </section>

      {/* PARTNERS */}
      <section id="partners" className="scroll-mt-28 mx-auto max-w-7xl px-6 py-24 md:py-28">
        <Reveal>
          <div className="text-center">
            <h2 className="text-4xl font-black tracking-tight text-slate-900 dark:text-white md:text-5xl">{partners.title}</h2>
            <p className="mx-auto mt-4 max-w-2xl text-base md:text-lg text-slate-600 dark:text-slate-300">{partners.subtitle}</p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-7 lg:grid-cols-3">
          {partners.cards.map((c, i) => (
            <Reveal key={c.title} delayMs={80 + i * 60}>
              <Card className="p-9 md:p-10 hover:-translate-y-1.5">
                <div className="text-xl font-black tracking-tight text-slate-900 dark:text-white">{c.title}</div>
                <p className="mt-4 text-base md:text-lg text-slate-600 dark:text-slate-300">{c.desc}</p>
                <div className="mt-7 h-1 w-20 rounded-full bg-gradient-to-r from-red-600 to-blue-600" aria-hidden="true" />
              </Card>
            </Reveal>
          ))}
        </div>
      </section>

      {/* GET INVOLVED */}
      <section id="get-involved" className="scroll-mt-28 mx-auto max-w-7xl px-6 py-24 md:py-28">
        <Reveal>
          <div className="text-center">
            <h2 className="text-4xl font-black tracking-tight text-slate-900 dark:text-white md:text-5xl">{getInvolved.title}</h2>
            <p className="mx-auto mt-4 max-w-2xl text-base md:text-lg text-slate-600 dark:text-slate-300">{getInvolved.subtitle}</p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-7 lg:grid-cols-3">
          {getInvolved.cards.map((c, i) => (
            <Reveal key={c.title} delayMs={80 + i * 60}>
              <Card className="p-9 md:p-10 hover:-translate-y-1.5">
                <div className="text-2xl font-black tracking-tight text-slate-900 dark:text-white">{c.title}</div>
                <p className="mt-3 text-base md:text-lg text-slate-600 dark:text-slate-300">{c.subtitle}</p>
                <a href={`mailto:${site.email}`} className="mt-6 inline-flex font-bold text-blue-700 hover:text-blue-800 dark:text-blue-300 dark:hover:text-blue-200">
                  Start here →
                </a>
              </Card>
            </Reveal>
          ))}
        </div>

        <Reveal delayMs={140}>
          <div className="mt-12 overflow-hidden rounded-[34px] bg-gradient-to-br from-slate-900 to-slate-950 p-10 text-white shadow-[0_30px_120px_rgba(2,6,23,0.35)] dark:from-white/10 dark:to-white/5 md:p-14">
            <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-8">
                <div className="text-3xl font-black tracking-tight md:text-4xl">{getInvolved.banner.title}</div>
                <p className="mt-3 text-base md:text-lg text-white/80">{getInvolved.banner.desc}</p>
              </div>
              <div className="lg:col-span-4 flex flex-col gap-3 sm:flex-row lg:flex-col">
                <a href={getInvolved.banner.primary.href} className="rounded-2xl bg-red-600 px-7 py-4 text-center font-bold hover:bg-red-700 transition">
                  {getInvolved.banner.primary.label}
                </a>
                <a href={getInvolved.banner.secondary.href} className="rounded-2xl bg-white/10 px-7 py-4 text-center font-bold hover:bg-white/15 transition">
                  {getInvolved.banner.secondary.label}
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* footer minimal */}
      <footer className="border-t border-slate-200/70 bg-white/55 px-6 py-14 backdrop-blur dark:border-white/10 dark:bg-slate-950/40">
        <div className="mx-auto max-w-7xl text-sm text-slate-600 dark:text-slate-300">
          © 2024 {site.orgShort} — {site.orgName}. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
