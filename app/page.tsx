import Reveal from "../components/Reveal";
import SpotlightCard from "../components/SpotlightCard";
import PortfolioCarousel from "../components/PortfolioCarousel";
import { site, hero, about, programs, portfolio, partners, getInvolved } from "../lib/cms";

// ─── Photo bank – IDECN real event photos ────────────────────────────────────
const PHOTOS = {
  hero:     "/DSC09703.jpg",   // crowd overview – wide hero
  about1:   "/DSC09762.jpg",   // satay skewers – food detail
  about2:   "/DSC09790.jpg",   // Indonesian Culinary banner + crowd
  event1:   "/DSC09704.jpg",   // dancer / performer
  event2:   "/DSC09730.jpg",   // performers group
  event3:   "/DSC09752.jpg",   // Pinky Rose stage
  event4:   "/DSC09775.jpg",   // tents + crowd
  event5:   "/DSC09779.jpg",   // ACNB stage
  event6:   "/DSC09786.jpg",   // vendor booth
  culture1: "/DSC09791.jpg",   // market crowd
  culture2: "/DSC09796.jpg",   // tent fair wide
  partner1: "/IMG_3677.jpg",   // crowd + sky
  extra:    "/IMG_3704.jpg",   // Ondel-ondel mascot
};

function SectionTitle({
  eyebrow, title, subtitle, light,
}: { eyebrow?: string; title: string; subtitle?: string; light?: boolean }) {
  return (
    <div className="text-center">
      {eyebrow && (
        <div className="text-xs font-extrabold uppercase tracking-[0.18em] text-orange-500 dark:text-orange-400">
          {eyebrow}
        </div>
      )}
      <h2 className={`mt-3 text-4xl font-black tracking-tight md:text-5xl ${light ? "text-white" : "text-gray-900 dark:text-white"}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mx-auto mt-4 max-w-2xl text-base md:text-lg ${light ? "text-white/70" : "text-gray-600 dark:text-gray-300"}`}>
          {subtitle}
        </p>
      )}
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
  const s = site as any;
  const h = hero as any;
  const a = about as any;
  const pr = programs as any;
  const pf = portfolio as any;
  const pt = partners as any;
  const gi = getInvolved as any;

  const orgShort = s.orgShort ?? "IDECN";
  const orgName  = s.orgName  ?? "Indonesia Education & Cultural Network";
  const email    = s.email    ?? "hello@idecn.org";

  const heroChips: string[] = h.chips ?? ["Nonprofit (U.S.-based)", "Established 2024", "Indonesia → U.S."];
  const heroHeadingTop: string      = h.headingTop      ?? "Indonesia Education &";
  const heroHeadingGradient: string = h.headingGradient ?? "Cultural Network";
  const heroSubtitle: string        = h.subtitle        ?? "";
  const heroCtas                    = h.ctas            ?? {} as any;
  const featured                    = pf.featured       ?? {} as any;

  // ─── Portfolio slides ──────────────────────────────────────────────────────
  const portfolioSlides = [
    {
      key: "overview",
      title: "Event Overview",
      content: (
        <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-7">
            <div className="flex flex-wrap gap-3">
              <span className="rounded-full bg-gray-900 px-4 py-2 text-sm font-bold text-white dark:bg-white dark:text-gray-900">
                {featured.date}
              </span>
              <span className="rounded-full bg-gray-100 px-4 py-2 text-sm font-bold text-gray-800 dark:bg-white/10 dark:text-gray-100">
                {featured.location}
              </span>
            </div>
            <h3 className="mt-5 text-3xl md:text-4xl font-black tracking-tight text-gray-900 dark:text-white">
              {featured.name}
            </h3>
            <p className="mt-4 text-base md:text-lg leading-relaxed text-gray-600 dark:text-gray-300">
              {featured.summary}
            </p>
            <div className="mt-6 flex flex-wrap gap-2.5">
              {(featured.highlights ?? []).map((x: string) => <Pill key={x}>{x}</Pill>)}
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href={featured.ctaDownload?.href} className="btn-shine rounded-2xl bg-orange-500 px-8 py-4 font-bold text-white transition hover:bg-orange-600">
                {featured.ctaDownload?.label ?? "Download report"}
              </a>
              <a href={featured.ctaSecondary?.href} className="btn-shine rounded-2xl border border-gray-200/70 bg-white/70 px-8 py-4 font-bold text-gray-900 backdrop-blur transition hover:bg-white dark:border-white/15 dark:bg-white/10 dark:text-white dark:hover:bg-white/15">
                {featured.ctaSecondary?.label ?? "Discuss next event"}
              </a>
            </div>
          </div>
          {/* Photo grid in carousel */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-3">
            {[PHOTOS.event1, PHOTOS.event2, PHOTOS.event3, PHOTOS.event4].map((src, i) => (
              <div key={i} className="overflow-hidden rounded-2xl aspect-square">
                <img src={src} alt={`Event photo ${i+1}`} className="h-full w-full object-cover transition duration-500 hover:scale-105" />
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      key: "gallery",
      title: "Event Gallery",
      content: (
        <div className="space-y-6">
          <div className="text-xs font-extrabold uppercase tracking-[0.18em] text-orange-500 dark:text-orange-400">
            Indonesia Culinary Day on the Creek — 2024
          </div>
          {/* Masonry-style grid */}
          <div className="grid grid-cols-3 gap-3 lg:grid-cols-4">
            <div className="col-span-2 row-span-2 overflow-hidden rounded-2xl">
              <img src={PHOTOS.event5} alt="Main event" className="h-full w-full object-cover transition duration-500 hover:scale-105" style={{minHeight:'220px'}} />
            </div>
            {[PHOTOS.event6, PHOTOS.culture1, PHOTOS.about1, PHOTOS.culture2].map((src,i) => (
              <div key={i} className="overflow-hidden rounded-2xl aspect-square">
                <img src={src} alt={`Gallery ${i+1}`} className="h-full w-full object-cover transition duration-500 hover:scale-105" />
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-4 pt-2">
            <a href={featured.ctaDownload?.href} className="btn-shine rounded-2xl bg-orange-500 px-8 py-4 font-bold text-white transition hover:bg-orange-600">
              Download full report
            </a>
            <a href={`mailto:${email}`} className="btn-shine rounded-2xl border border-gray-200/70 bg-white/70 px-8 py-4 font-bold text-gray-900 backdrop-blur transition hover:bg-white dark:border-white/15 dark:bg-white/10 dark:text-white">
              Discuss next event
            </a>
          </div>
        </div>
      ),
    },
    {
      key: "next",
      title: "Next Steps",
      content: (
        <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-7">
            <div className="text-xs font-extrabold uppercase tracking-[0.18em] text-orange-500">Scaling pathway</div>
            <h3 className="mt-3 text-3xl md:text-4xl font-black tracking-tight text-gray-900 dark:text-white">
              Make the next collaboration fast and predictable.
            </h3>
            <p className="mt-4 text-base md:text-lg leading-relaxed text-gray-600 dark:text-gray-300">
              A simple structure: clear objective, clear format, clear roles, and clear outputs.
            </p>
            <div className="mt-6 space-y-4">
              {[
                { step: "1", t: "Align objective", d: "Education / culture / community engagement target." },
                { step: "2", t: "Pick format", d: "Community event, workshop, or campus activation." },
                { step: "3", t: "Run playbook", d: "Partner + volunteer workflow that's repeatable." },
                { step: "4", t: "Report & package", d: "Outcome summary + documentation + media kit." },
              ].map((x) => (
                <div key={x.step} className="flex gap-4 rounded-2xl border border-gray-200/70 bg-white/70 p-5 backdrop-blur dark:border-white/10 dark:bg-white/6">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-gray-600 text-white font-black">
                    {x.step}
                  </div>
                  <div>
                    <div className="text-lg font-black text-gray-900 dark:text-white">{x.t}</div>
                    <div className="mt-1 text-gray-600 dark:text-gray-300">{x.d}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href={`mailto:${email}`} className="btn-shine rounded-2xl bg-orange-500 px-8 py-4 font-bold text-white transition hover:bg-orange-600">Discuss next event</a>
              <a href={featured.ctaDownload?.href} className="btn-shine rounded-2xl border border-gray-200/70 bg-white/70 px-8 py-4 font-bold text-gray-900 backdrop-blur transition hover:bg-white dark:border-white/15 dark:bg-white/10 dark:text-white">Download report</a>
            </div>
          </div>
          <div className="lg:col-span-5">
            <SpotlightCard className="overflow-hidden p-0">
              <img src={PHOTOS.partner1} alt="Collaboration" className="h-52 w-full object-cover" />
              <div className="p-7">
                <div className="text-xs font-extrabold uppercase tracking-[0.18em] text-orange-500">Contact</div>
                <div className="mt-3 text-2xl font-black tracking-tight text-gray-900 dark:text-white">Let's build the next collaboration.</div>
                <p className="mt-2 text-gray-600 dark:text-gray-300">We can adapt the playbook for sponsors, universities, and community partners.</p>
                <div className="mt-5 rounded-2xl border border-gray-200/70 bg-white/70 p-4 backdrop-blur dark:border-white/10 dark:bg-gray-950/28">
                  <div className="text-sm font-bold text-gray-900 dark:text-white">Email</div>
                  <div className="mt-1 font-semibold text-gray-700 dark:text-gray-200">{email}</div>
                </div>
              </div>
            </SpotlightCard>
          </div>
        </div>
      ),
    },
  ];

  return (
    <main className="pt-24">

      {/* ═══════════════════════════════════════ HERO ══ */}
      <section className="relative mx-auto max-w-7xl px-6 py-10 md:py-14">
        <Reveal delayMs={40}>
          <div className="flex flex-wrap justify-center gap-3">
            {heroChips.map((t: string) => (
              <span key={t} className="inline-flex items-center gap-2 rounded-full border border-gray-300/70 bg-white/75 px-4 py-2 text-sm font-semibold text-gray-700 backdrop-blur shadow-[0_6px_30px_rgba(2,6,23,0.04)] dark:border-white/15 dark:bg-white/10 dark:text-white/90">
                <span className="h-2 w-2 rounded-full bg-gradient-to-r from-orange-500 to-gray-500" />
                {t}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal delayMs={100}>
          <h1 className="mt-7 text-center text-5xl font-black tracking-tight text-gray-900 dark:text-white md:text-7xl lg:text-8xl leading-[0.95]">
            <span className="block">{heroHeadingTop}</span>
            <span className="mt-1 block bg-gradient-to-r from-orange-500 via-orange-400 to-gray-500 bg-clip-text text-transparent idecn-shimmer">
              {heroHeadingGradient}
            </span>
          </h1>
        </Reveal>

        <Reveal delayMs={170}>
          <p className="mx-auto mt-5 max-w-2xl text-center text-base md:text-xl leading-relaxed text-gray-600 dark:text-gray-300">
            {heroSubtitle}
          </p>
        </Reveal>

        <Reveal delayMs={240}>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href={heroCtas.primary?.href ?? "#get-involved"} className="btn-shine inline-flex items-center justify-center rounded-2xl bg-orange-500 px-10 py-4 text-lg font-bold text-white shadow-[0_18px_50px_rgba(249,115,22,0.25)] transition hover:-translate-y-1 hover:bg-orange-600">
              {heroCtas.primary?.label ?? "Get involved"}
            </a>
            <a href={heroCtas.proposal?.href ?? "/indonesia-on-the-creek-proposal.pdf"} className="btn-shine inline-flex items-center justify-center rounded-2xl border border-gray-200/80 bg-white/75 px-10 py-4 text-lg font-bold text-gray-900 backdrop-blur shadow-[0_12px_40px_rgba(0,0,0,0.06)] transition hover:-translate-y-1 hover:bg-white dark:border-white/15 dark:bg-white/10 dark:text-white dark:hover:bg-white/15">
              {heroCtas.proposal?.label ?? "Download proposal (PDF)"}
            </a>
          </div>
        </Reveal>
      </section>

      {/* ─── Hero photo mosaic ─────────────────────────── */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <Reveal delayMs={60}>
          <div className="grid grid-cols-4 grid-rows-2 gap-3 rounded-[32px] overflow-hidden" style={{height: "520px"}}>
            {/* big left */}
            <div className="col-span-2 row-span-2 overflow-hidden">
              <img src={PHOTOS.hero} alt="IDECN cultural event" className="h-full w-full object-cover transition duration-700 hover:scale-105" />
            </div>
            {/* top right 2 */}
            <div className="col-span-1 overflow-hidden">
              <img src={PHOTOS.event1} alt="Culinary event" className="h-full w-full object-cover transition duration-700 hover:scale-105" />
            </div>
            <div className="col-span-1 overflow-hidden">
              <img src={PHOTOS.culture1} alt="Batik culture" className="h-full w-full object-cover transition duration-700 hover:scale-105" />
            </div>
            {/* bottom right 2 */}
            <div className="col-span-1 overflow-hidden">
              <img src={PHOTOS.about1} alt="Indonesian food" className="h-full w-full object-cover transition duration-700 hover:scale-105" />
            </div>
            <div className="col-span-1 overflow-hidden relative">
              <img src={PHOTOS.event3} alt="Community" className="h-full w-full object-cover transition duration-700 hover:scale-105" />
              <a href={heroCtas.portfolio?.href ?? "#portfolio"} className="absolute inset-0 flex items-center justify-center bg-gray-900/50 backdrop-blur-sm text-white font-black text-lg hover:bg-gray-900/60 transition">
                View Portfolio →
              </a>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ═══════════════════════════════════════ ABOUT ══ */}
      <section id="about" className="scroll-mt-28 mx-auto max-w-7xl px-6 py-20 md:py-24">
        <Reveal delayMs={60}>
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
            {/* Left: photo stack */}
            <div className="relative">
              <div className="overflow-hidden rounded-[28px] aspect-[4/3]">
                <img src={PHOTOS.about2} alt="Community gathering" className="h-full w-full object-cover transition duration-700 hover:scale-105" />
              </div>
              {/* Floating card over photo */}
              <div className="absolute -bottom-6 -right-4 rounded-2xl border border-gray-200/70 bg-white/90 p-5 backdrop-blur shadow-xl dark:border-white/10 dark:bg-gray-950/90 max-w-[220px]">
                <div className="text-xs font-extrabold uppercase tracking-[0.18em] text-orange-500">Est.</div>
                <div className="mt-1 text-3xl font-black text-gray-900 dark:text-white">2024</div>
                <div className="mt-1 text-sm text-gray-600 dark:text-gray-300">U.S.-based nonprofit connecting Indonesia & the U.S.</div>
              </div>
            </div>

            {/* Right: text */}
            <Reveal delayMs={140}>
              <div className="pt-4">
                <div className="text-xs font-extrabold uppercase tracking-[0.18em] text-orange-500">Who we are</div>
                <h2 className="mt-3 text-4xl font-black tracking-tight text-gray-900 dark:text-white md:text-5xl">
                  {a.title ?? "Who we are"}
                </h2>
                <p className="mt-5 text-base md:text-lg leading-relaxed text-gray-600 dark:text-gray-300">
                  {a.lead ?? ""}
                </p>

                <div className="mt-8 space-y-4">
                  <div className="flex gap-4 rounded-2xl border border-gray-200/70 bg-white/60 p-5 backdrop-blur dark:border-white/10 dark:bg-white/5">
                    <div className="h-10 w-10 shrink-0 rounded-2xl bg-gradient-to-br from-orange-500 to-gray-600" />
                    <div>
                      <div className="font-bold text-gray-900 dark:text-white">Our Purpose</div>
                      <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">{a.purpose ?? ""}</p>
                    </div>
                  </div>
                  <div className="flex gap-4 rounded-2xl border border-gray-200/70 bg-white/60 p-5 backdrop-blur dark:border-white/10 dark:bg-white/5">
                    <div className="h-10 w-10 shrink-0 rounded-2xl bg-gradient-to-br from-gray-500 to-orange-400" />
                    <div>
                      <div className="font-bold text-gray-900 dark:text-white">Primary Audience</div>
                      <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">{a.audience ?? ""}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap gap-4">
                  <a href={`mailto:${email}`} className="btn-shine rounded-2xl bg-gray-900 px-7 py-3.5 font-bold text-white transition hover:-translate-y-0.5 dark:bg-white dark:text-gray-900">
                    Talk to us
                  </a>
                  <a href="#programs" className="btn-shine rounded-2xl border border-gray-200/70 bg-white/70 px-7 py-3.5 font-bold text-gray-900 backdrop-blur transition hover:bg-white dark:border-white/15 dark:bg-white/10 dark:text-white">
                    Our programs
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </Reveal>
      </section>

      {/* ═══════════════════════════════════════ PROGRAMS ══ */}
      <section id="programs" className="scroll-mt-28 mx-auto max-w-7xl px-6 py-20 md:py-24">
        <Reveal>
          <SectionTitle title={pr.title ?? "Our Core Programs"} subtitle={pr.subtitle ?? ""} />
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {(pr.cards ?? []).map((c: any, i: number) => (
            <Reveal key={c.title ?? i} delayMs={80 + i * 60}>
              <div className="group relative overflow-hidden rounded-[28px] border border-gray-200/70 bg-white/60 backdrop-blur dark:border-white/10 dark:bg-white/5">
                {/* Program photo */}
                <div className="overflow-hidden h-48">
                  <img
                    src={[PHOTOS.culture2, PHOTOS.about2, PHOTOS.partner1, PHOTOS.culture1][i % 4]}
                    alt={c.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 h-48 bg-gradient-to-b from-transparent to-white/80 dark:to-gray-950/80" />
                </div>
                <div className="p-7">
                  <div className="text-2xl font-black tracking-tight text-gray-900 dark:text-white">{c.title}</div>
                  <ul className="mt-4 space-y-2 text-gray-600 dark:text-gray-300">
                    {(c.bullets ?? []).map((b: string) => (
                      <li key={b} className="flex gap-3">
                        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-orange-500" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {(c.tags ?? []).map((t: string) => <Pill key={t}>{t}</Pill>)}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════ PHOTO STRIP ══ */}
      <section className="mx-auto max-w-7xl px-6 py-12 space-y-3">
        <Reveal>
          {/* Row 1 – 7 photos */}
          <div className="grid grid-cols-4 gap-3 sm:grid-cols-7 rounded-[28px] overflow-hidden h-36 sm:h-44">
            {[PHOTOS.hero, PHOTOS.event1, PHOTOS.event2, PHOTOS.event3, PHOTOS.event4, PHOTOS.event5, PHOTOS.event6].map((src, i) => (
              <div key={i} className="overflow-hidden">
                <img src={src} alt={`Event photo ${i+1}`} className="h-full w-full object-cover transition duration-700 hover:scale-110" />
              </div>
            ))}
          </div>
          {/* Row 2 – 6 photos */}
          <div className="grid grid-cols-3 gap-3 sm:grid-cols-6 rounded-[28px] overflow-hidden h-36 sm:h-44">
            {[PHOTOS.about1, PHOTOS.about2, PHOTOS.culture1, PHOTOS.culture2, PHOTOS.partner1, PHOTOS.extra].map((src, i) => (
              <div key={i} className="overflow-hidden">
                <img src={src} alt={`Event photo ${i+8}`} className="h-full w-full object-cover transition duration-700 hover:scale-110" />
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ═══════════════════════════════════════ PORTFOLIO ══ */}
      <section id="portfolio" className="scroll-mt-28 mx-auto max-w-7xl px-6 py-20 md:py-24">
        <Reveal>
          <SectionTitle eyebrow={pf.eyebrow ?? "Proof of execution"} title={pf.title ?? "Portfolio Event"} />
          <div className="mx-auto mt-4 max-w-3xl text-center">
            <div className="inline-block rounded-2xl border border-gray-200/70 bg-white/75 px-5 py-3 text-base md:text-lg font-semibold leading-relaxed text-gray-700 shadow-[0_10px_45px_rgba(0,0,0,0.08)] backdrop-blur dark:border-white/12 dark:bg-white/10 dark:text-gray-200">
              Clear execution summary—measurable outcomes, organized documentation, and a partner-ready playbook for the next collaboration.
            </div>
          </div>
        </Reveal>

        <Reveal delayMs={120}>
          <div className="mt-10 rounded-[34px] border border-gray-200/70 bg-white/55 p-6 backdrop-blur dark:border-white/10 dark:bg-white/5 md:p-8 overflow-visible">
            <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div className="text-sm font-semibold text-gray-600 dark:text-gray-300">Swipe / scroll to view slides</div>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-orange-500" />
                <span className="text-sm font-semibold text-gray-600 dark:text-gray-300">Portfolio carousel</span>
              </div>
            </div>

            <PortfolioCarousel count={portfolioSlides.length} className="mt-6" label="Portfolio carousel">
              {portfolioSlides.map((sl, idx) => (
                <div key={sl.key} data-slide className="snap-center shrink-0 w-[92%] md:w-[86%] lg:w-[78%]" aria-label={`Portfolio slide ${idx + 1}: ${sl.title}`}>
                  <Reveal delayMs={60 + idx * 90}>
                    <SpotlightCard className="p-9 md:p-10">
                      <div className="flex items-center justify-between gap-4">
                        <div className="text-xs font-extrabold uppercase tracking-[0.18em] text-orange-500 dark:text-orange-400">
                          Slide {idx + 1} / {portfolioSlides.length}
                        </div>
                        <div className="rounded-full border border-gray-200/70 bg-white/70 px-3 py-1 text-xs font-bold text-gray-800 backdrop-blur dark:border-white/10 dark:bg-white/10 dark:text-gray-100">
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

      {/* ═══════════════════════════════════════ PARTNERS ══ */}
      <section id="partners" className="scroll-mt-28 mx-auto max-w-7xl px-6 py-20 md:py-24">
        <Reveal>
          <SectionTitle title={pt.title ?? "Partners"} subtitle={pt.subtitle ?? ""} />
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {(pt.cards ?? []).map((c: any, i: number) => (
            <Reveal key={c.title ?? i} delayMs={80 + i * 60}>
              <SpotlightCard className="overflow-hidden p-0">
                <div className="h-40 overflow-hidden">
                  <img
                    src={[PHOTOS.partner1, PHOTOS.about2, PHOTOS.culture2][i % 3]}
                    alt={c.title}
                    className="h-full w-full object-cover transition duration-700 hover:scale-105"
                  />
                </div>
                <div className="p-7">
                  <div className="text-xl font-black tracking-tight text-gray-900 dark:text-white">{c.title}</div>
                  <p className="mt-3 text-gray-600 dark:text-gray-300">{c.desc}</p>
                  <div className="mt-5 h-1 w-16 rounded-full bg-gradient-to-r from-orange-500 to-gray-500" />
                </div>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════ GET INVOLVED ══ */}
      <section id="get-involved" className="scroll-mt-28 mx-auto max-w-7xl px-6 py-20 md:py-24">
        <Reveal>
          <SectionTitle title={gi.title ?? "Get involved"} subtitle={gi.subtitle ?? ""} />
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {(gi.cards ?? []).map((c: any, i: number) => (
            <Reveal key={c.title ?? i} delayMs={80 + i * 60}>
              <SpotlightCard className="p-9 md:p-10">
                <div className="text-2xl font-black tracking-tight text-gray-900 dark:text-white">{c.title}</div>
                <p className="mt-3 text-base md:text-lg text-gray-600 dark:text-gray-300">{c.subtitle}</p>
                <a href={`mailto:${email}`} className="mt-6 inline-flex font-bold text-orange-600 hover:text-orange-700 dark:text-orange-400 dark:hover:text-orange-300">
                  Start here →
                </a>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>

        {/* CTA Banner with background photo */}
        <Reveal delayMs={140}>
          <div className="mt-12 relative overflow-hidden rounded-[34px]">
            <img src={PHOTOS.about2} alt="Collaborate" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gray-900/70 backdrop-blur-sm" />
            <div className="relative p-10 md:p-14">
              <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
                <div className="lg:col-span-8">
                  <div className="text-3xl font-black tracking-tight text-white md:text-4xl">
                    {gi.banner?.title ?? "Ready to collaborate?"}
                  </div>
                  <p className="mt-3 text-base md:text-lg text-white/75">
                    {gi.banner?.desc ?? "Tell us your goals—we'll map a collaboration plan with clear deliverables."}
                  </p>
                </div>
                <div className="lg:col-span-4 flex flex-col gap-3 sm:flex-row lg:flex-col">
                  <a href={gi.banner?.primary?.href ?? `mailto:${email}`} className="btn-shine rounded-2xl bg-orange-500 px-7 py-4 text-center font-bold text-white hover:bg-orange-600 transition">
                    {gi.banner?.primary?.label ?? "Contact IDECN"}
                  </a>
                  <a href={gi.banner?.secondary?.href ?? "#portfolio"} className="btn-shine rounded-2xl border border-white/30 bg-white/15 px-7 py-4 text-center font-bold text-white hover:bg-white/25 transition backdrop-blur">
                    {gi.banner?.secondary?.label ?? "Download proposal"}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ═══════════════════════════════════════ FOOTER ══ */}
      <footer className="border-t border-gray-200/70 bg-white/55 px-6 py-14 backdrop-blur dark:border-white/10 dark:bg-gray-950/40">
        <div className="mx-auto max-w-7xl flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <img src="/IDECN_LOGO1.png" alt="IDECN" className="h-8 w-auto brightness-0 dark:brightness-100" />
            <span className="text-sm text-gray-600 dark:text-gray-300">© {new Date().getFullYear()} {orgShort} — {orgName}</span>
          </div>
          <a href={`mailto:${email}`} className="text-sm font-semibold text-orange-600 hover:text-orange-700 dark:text-orange-400">
            {email}
          </a>
        </div>
      </footer>

    </main>
  );
}