import Reveal from "../components/Reveal";
import AnimatedPageWrapper from "../components/AnimatedPageWrapper";
import SpotlightCard from "../components/SpotlightCard";
import PortfolioCarousel from "../components/PortfolioCarousel";
import { site, hero, about, portfolio, partners, getInvolved } from "../lib/cms";

const PHOTOS = {
  hero:     "/DSC09703.jpg",
  about1:   "/DSC09762.jpg",
  about2:   "/DSC09790.jpg",
  event1:   "/DSC09704.jpg",
  event2:   "/DSC09730.jpg",
  event3:   "/DSC09752.jpg",
  event4:   "/DSC09775.jpg",
  event5:   "/DSC09779.jpg",
  event6:   "/DSC09786.jpg",
  culture1: "/DSC09791.jpg",
  culture2: "/DSC09796.jpg",
  partner1: "/IMG_3677.jpg",
  extra:    "/IMG_3704.jpg",
};

const MEDIA = [
  {
    outlet: "The Frederick News-Post",
    title: "Indonesia Culinary Day",
    href: "https://www.fredericknewspost.com/calendar/community_and_festivals/indonesia-culinary-day/event_ab8c90ae-a9c2-4413-b545-b493b06d16a3.html",
    flag: "🇺🇸",
    photo: "/DSC09703.jpg",
  },
  {
    outlet: "DC News Now",
    title: "Frederick gears up for Indonesian Culinary Festival",
    href: "https://www.dcnewsnow.com/news/local-news/maryland/frederick-county-md/frederick-gears-up-for-indonesian-culinary-festival/",
    flag: "🇺🇸",
    photo: "/DSC09775.jpg",
  },
  {
    outlet: "CNA",
    title: "Indonesia Culinary Day 2025 meriahkan Maryland, angkat kuliner dan budaya Nusantara ke panggung Amerika",
    href: "https://www.cna.id/dunia/indonesia-culinary-day-2025-meriahkan-maryland-angkat-kuliner-dan-budaya-nusantara-ke-panggung-amerika-36091",
    flag: "🌏",
    photo: "/DSC09752.jpg",
  },
];

// ─── Brand colors from proposal ───────────────────────────────────────────────
// Primary orange: #C84B2F (terracotta)
// Secondary: #4A4A4A (charcoal gray)
// Accent light: #F5F0EB (warm cream)

export default function Page() {
  const s = site as any;
  const h = hero as any;
  const a = about as any;
  const pf = portfolio as any;
  const pt = partners as any;
  const gi = getInvolved as any;

  const orgShort = s.orgShort ?? "IDECN";
  const orgName  = s.orgName  ?? "Indonesia Education & Cultural Network";
  const email    = s.email    ?? "indoecnetwork@gmail.com";

  const heroChips: string[]         = h.chips          ?? ["Nonprofit (U.S.-based)", "Established 2024", "Indonesia ↔ U.S."];
  const heroHeadingTop: string      = h.headingTop      ?? "Indonesia Education &";
  const heroHeadingGradient: string = h.headingGradient ?? "Cultural Network";
  const heroSubtitle: string        = h.subtitle        ?? "A U.S.-based nonprofit dedicated to fostering cross-cultural understanding, educational opportunities, and community connections between Indonesia and the United States.";
  const heroCtas                    = h.ctas            ?? {} as any;
  const featured                    = pf.featured       ?? {} as any;

  const portfolioSlides = [
    {
      key: "overview", title: "Event Overview",
      content: (
        <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-7">
            <div className="flex flex-wrap gap-3">
              <span className="rounded-full px-4 py-2 text-sm font-bold text-white" style={{background:"#C84B2F"}}>{featured.date ?? "August 2, 2025"}</span>
              <span className="rounded-full bg-gray-100 px-4 py-2 text-sm font-bold text-gray-800 dark:bg-white/10 dark:text-gray-100">{featured.location ?? "Carroll Creek Park, Frederick MD"}</span>
            </div>
            <h3 className="mt-5 text-3xl md:text-4xl font-black tracking-tight text-gray-900 dark:text-white">{featured.name ?? "Indonesia Culinary Day on the Creek"}</h3>
            <p className="mt-4 text-base md:text-lg leading-relaxed text-gray-600 dark:text-gray-300">{featured.summary ?? ""}</p>
            <div className="mt-6 flex flex-wrap gap-2.5">
              {(featured.highlights ?? ["Food Bazaar","Cultural Performance","Art & Craft","Marketplace","Exhibition"]).map((x: string) => (
                <span key={x} className="rounded-full border px-3.5 py-1.5 text-sm font-semibold" style={{borderColor:"#C84B2F",color:"#C84B2F"}}>{x}</span>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href={featured.ctaDownload?.href ?? "/indonesia-on-the-creek-proposal.pdf"} className="rounded-2xl px-8 py-4 font-bold text-white transition hover:opacity-90" style={{background:"#C84B2F"}}>{featured.ctaDownload?.label ?? "Download proposal"}</a>
              <a href={`mailto:${email}`} className="rounded-2xl border border-gray-200/70 bg-white/70 px-8 py-4 font-bold text-gray-900 backdrop-blur transition hover:bg-white dark:border-white/15 dark:bg-white/10 dark:text-white">{featured.ctaSecondary?.label ?? "Discuss collaboration"}</a>
            </div>
          </div>
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
      key: "gallery", title: "Event Gallery",
      content: (
        <div className="space-y-6">
          <div className="text-xs font-extrabold uppercase tracking-[0.18em]" style={{color:"#C84B2F"}}>Indonesia Culinary Day on the Creek — 2024</div>
          <div className="grid grid-cols-3 gap-3 lg:grid-cols-4">
            <div className="col-span-2 row-span-2 overflow-hidden rounded-2xl">
              <img src={PHOTOS.event5} alt="Main event" className="h-full w-full object-cover" style={{minHeight:"220px"}} />
            </div>
            {[PHOTOS.event6, PHOTOS.culture1, PHOTOS.about1, PHOTOS.culture2].map((src,i) => (
              <div key={i} className="overflow-hidden rounded-2xl aspect-square">
                <img src={src} alt={`Gallery ${i+1}`} className="h-full w-full object-cover" />
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-4 pt-2">
            <a href="/indonesia-on-the-creek-proposal.pdf" className="rounded-2xl px-8 py-4 font-bold text-white" style={{background:"#C84B2F"}}>Download full report</a>
            <a href={`mailto:${email}`} className="rounded-2xl border border-gray-200/70 bg-white/70 px-8 py-4 font-bold text-gray-900 backdrop-blur dark:border-white/15 dark:bg-white/10 dark:text-white">Discuss next event</a>
          </div>
        </div>
      ),
    },
    {
      key: "next", title: "Next Steps",
      content: (
        <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-7">
            <div className="text-xs font-extrabold uppercase tracking-[0.18em]" style={{color:"#C84B2F"}}>Scaling pathway</div>
            <h3 className="mt-3 text-3xl md:text-4xl font-black tracking-tight text-gray-900 dark:text-white">Make the next collaboration fast and predictable.</h3>
            <p className="mt-4 text-base md:text-lg leading-relaxed text-gray-600 dark:text-gray-300">A simple structure: clear objective, clear format, clear roles, and clear outputs.</p>
            <div className="mt-6 space-y-4">
              {[
                {step:"1",t:"Align objective",d:"Education / culture / community engagement target."},
                {step:"2",t:"Pick format",d:"Community event, workshop, or campus activation."},
                {step:"3",t:"Run playbook",d:"Partner + volunteer workflow that's repeatable."},
                {step:"4",t:"Report & package",d:"Outcome summary + documentation + media kit."},
              ].map((x) => (
                <div key={x.step} className="flex gap-4 rounded-2xl border border-gray-200/70 bg-white/70 p-5 backdrop-blur dark:border-white/10 dark:bg-white/5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl text-white font-black" style={{background:"#C84B2F"}}>{x.step}</div>
                  <div>
                    <div className="text-lg font-black text-gray-900 dark:text-white">{x.t}</div>
                    <div className="mt-1 text-gray-600 dark:text-gray-300">{x.d}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href={`mailto:${email}`} className="rounded-2xl px-8 py-4 font-bold text-white" style={{background:"#C84B2F"}}>Discuss next event</a>
              <a href="/indonesia-on-the-creek-proposal.pdf" className="rounded-2xl border border-gray-200/70 bg-white/70 px-8 py-4 font-bold text-gray-900 backdrop-blur dark:border-white/15 dark:bg-white/10 dark:text-white">Download report</a>
            </div>
          </div>
          <div className="lg:col-span-5">
            <SpotlightCard className="overflow-hidden p-0">
              <img src={PHOTOS.partner1} alt="Collaboration" className="h-52 w-full object-cover" />
              <div className="p-7">
                <div className="text-xs font-extrabold uppercase tracking-[0.18em]" style={{color:"#C84B2F"}}>Contact</div>
                <div className="mt-3 text-2xl font-black tracking-tight text-gray-900 dark:text-white">Let's build the next collaboration.</div>
                <p className="mt-2 text-gray-600 dark:text-gray-300">We can adapt the playbook for sponsors, universities, and community partners.</p>
                <div className="mt-5 rounded-2xl border border-gray-200/70 bg-white/70 p-4 backdrop-blur dark:border-white/10 dark:bg-white/5">
                  <div className="text-sm font-bold text-gray-900 dark:text-white">Email us</div>
                  <a href={`mailto:${email}`} className="mt-1 font-semibold" style={{color:"#C84B2F"}}>{email}</a>
                </div>
              </div>
            </SpotlightCard>
          </div>
        </div>
      ),
    },
  ];

  return (
    <AnimatedPageWrapper>
    <main className="pt-24">

      {/* ══════════════ HERO ══ */}
      <section className="relative mx-auto max-w-7xl px-6 py-10 md:py-14">
        <Reveal delayMs={40}>
          <div className="flex flex-wrap justify-center gap-3">
            {heroChips.map((t: string) => (
              <span key={t} className="inline-flex items-center gap-2 rounded-full border border-gray-300/60 bg-white/80 px-4 py-2 text-sm font-semibold text-gray-700 backdrop-blur shadow-sm dark:border-white/15 dark:bg-white/10 dark:text-white/90">
                <span className="h-2 w-2 rounded-full" style={{background:"#C84B2F"}} />
                {t}
              </span>
            ))}
          </div>
        </Reveal>
        <Reveal delayMs={100}>
          <h1 className="mt-7 text-center text-5xl font-black tracking-tight text-gray-900 dark:text-white md:text-7xl lg:text-8xl leading-[0.95]">
            <span className="block">{heroHeadingTop}</span>
            <span className="mt-2 block" style={{color:"#C84B2F"}}>{heroHeadingGradient}</span>
          </h1>
        </Reveal>
        <Reveal delayMs={170}>
          <p className="mx-auto mt-6 max-w-2xl text-center text-base md:text-xl leading-relaxed text-gray-600 dark:text-gray-300">{heroSubtitle}</p>
        </Reveal>
        <Reveal delayMs={240}>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href={heroCtas.primary?.href ?? "#get-involved"} className="inline-flex items-center justify-center rounded-2xl px-10 py-4 text-lg font-bold text-white shadow-lg transition hover:-translate-y-1" style={{background:"#C84B2F"}}>
              {heroCtas.primary?.label ?? "Get involved"}
            </a>
            <a href={heroCtas.proposal?.href ?? "/indonesia-on-the-creek-proposal.pdf"} className="inline-flex items-center justify-center rounded-2xl border-2 border-gray-300/70 bg-white/80 px-10 py-4 text-lg font-bold text-gray-900 backdrop-blur transition hover:-translate-y-1 hover:bg-white dark:border-white/20 dark:bg-white/10 dark:text-white">
              {heroCtas.proposal?.label ?? "Download Proposal (PDF)"}
            </a>
          </div>
        </Reveal>
      </section>

      {/* ── Hero photo mosaic ── */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <Reveal delayMs={60}>
          <div className="grid grid-cols-4 grid-rows-2 gap-3 rounded-[32px] overflow-hidden" style={{height:"520px"}}>
            <div className="col-span-2 row-span-2 overflow-hidden">
              <img src={PHOTOS.hero} alt="IDECN event" className="h-full w-full object-cover transition duration-700 hover:scale-105" />
            </div>
            <div className="col-span-1 overflow-hidden">
              <img src={PHOTOS.event1} alt="Cultural performance" className="h-full w-full object-cover transition duration-700 hover:scale-105" />
            </div>
            <div className="col-span-1 overflow-hidden">
              <img src={PHOTOS.culture1} alt="Culture" className="h-full w-full object-cover transition duration-700 hover:scale-105" />
            </div>
            <div className="col-span-1 overflow-hidden">
              <img src={PHOTOS.about1} alt="Indonesian food" className="h-full w-full object-cover transition duration-700 hover:scale-105" />
            </div>
            <div className="col-span-1 overflow-hidden relative">
              <img src={PHOTOS.event3} alt="Community" className="h-full w-full object-cover transition duration-700 hover:scale-105" />
              <a href="#portfolio" className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm text-white font-black text-lg hover:bg-black/60 transition">
                View Portfolio →
              </a>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ══════════════ ABOUT ══ */}
      <section id="about" className="scroll-mt-28 mx-auto max-w-7xl px-6 py-20 md:py-24">
        <Reveal delayMs={60}>
          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
            <div className="relative">
              <div className="overflow-hidden rounded-[28px] aspect-[4/3] shadow-2xl">
                <img src={PHOTOS.about2} alt="Community gathering" className="h-full w-full object-cover transition duration-700 hover:scale-105" />
              </div>
              <div className="absolute -bottom-5 -right-4 rounded-2xl border border-gray-200/70 bg-white/95 p-5 backdrop-blur shadow-xl dark:border-white/10 dark:bg-gray-950/95 max-w-[200px]">
                <div className="text-xs font-extrabold uppercase tracking-[0.18em]" style={{color:"#C84B2F"}}>Est.</div>
                <div className="mt-1 text-3xl font-black text-gray-900 dark:text-white" data-counter-target="2024">0</div>
                <div className="mt-1 text-xs text-gray-600 dark:text-gray-300">U.S.-based nonprofit connecting Indonesia & the U.S.</div>
              </div>
            </div>
            <Reveal delayMs={140}>
              <div>
                <div className="text-xs font-extrabold uppercase tracking-[0.18em]" style={{color:"#C84B2F"}}>Who we are</div>
                <h2 className="mt-3 text-4xl font-black tracking-tight text-gray-900 dark:text-white md:text-5xl">{a.title ?? "Who We Are"}</h2>
                <p className="mt-5 text-base md:text-lg leading-relaxed text-gray-600 dark:text-gray-300">{a.lead ?? ""}</p>
                <div className="mt-7 space-y-4">
                  <div className="flex gap-4 rounded-2xl border border-gray-200/70 bg-white/60 p-5 backdrop-blur dark:border-white/10 dark:bg-white/5">
                    <div className="h-10 w-10 shrink-0 rounded-2xl" style={{background:"#C84B2F"}} />
                    <div>
                      <div className="font-bold text-gray-900 dark:text-white">Our Purpose</div>
                      <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">{a.purpose ?? ""}</p>
                    </div>
                  </div>
                  <div className="flex gap-4 rounded-2xl border border-gray-200/70 bg-white/60 p-5 backdrop-blur dark:border-white/10 dark:bg-white/5">
                    <div className="h-10 w-10 shrink-0 rounded-2xl bg-gray-600" />
                    <div>
                      <div className="font-bold text-gray-900 dark:text-white">Primary Audience</div>
                      <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">{a.audience ?? ""}</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8 flex flex-wrap gap-4">
                  <a href={`mailto:${email}`} className="rounded-2xl px-7 py-3.5 font-bold text-white transition hover:-translate-y-0.5" style={{background:"#4A4A4A"}}>Talk to us</a>
                  <a href="#programs" className="rounded-2xl border-2 border-gray-300/70 bg-white/70 px-7 py-3.5 font-bold text-gray-900 backdrop-blur transition hover:bg-white dark:border-white/20 dark:bg-white/10 dark:text-white">Our Mission</a>
                </div>
              </div>
            </Reveal>
          </div>
        </Reveal>
      </section>

      {/* ══════════════ PROGRAMS — 1 CARD SLOGAN ══ */}
      <section id="programs" className="scroll-mt-28 mx-auto max-w-7xl px-6 py-20 md:py-24">
        <Reveal>
          <div className="text-center">
            <div className="text-xs font-extrabold uppercase tracking-[0.18em]" style={{color:"#C84B2F"}}>Our Mission</div>
            <h2 className="mt-3 text-4xl font-black tracking-tight text-gray-900 dark:text-white md:text-5xl">What We Stand For</h2>
          </div>
        </Reveal>
        <Reveal delayMs={120}>
          <div className="mt-12 overflow-hidden rounded-[36px] border border-gray-200/60 shadow-2xl dark:border-white/10">
            <div className="grid lg:grid-cols-2">
              {/* Foto kiri dengan batik accent */}
              <div className="relative overflow-hidden" style={{minHeight:"460px"}}>
                <img src={PHOTOS.partner1} alt="IDECN community" className="absolute inset-0 h-full w-full object-cover transition duration-700 hover:scale-105" />
                <div className="absolute inset-0" style={{background:"linear-gradient(to right, rgba(74,74,74,0.65) 0%, rgba(74,74,74,0.1) 70%, transparent 100%)"}} />
                {/* Batik texture strip top */}
                <div className="absolute top-0 left-0 right-0 h-2" style={{background:"#C84B2F"}} />
                {/* Jigsaw badge */}
                <div className="absolute bottom-8 left-8">
                  <div className="rounded-2xl bg-white/95 p-5 backdrop-blur shadow-xl dark:bg-gray-950/95">
                    <svg width="44" height="44" viewBox="0 0 48 48" fill="none">
                      <path d="M20 8C20 6 18 4 16 4C14 4 12 6 12 8V12H8C6 12 4 14 4 16C4 18 6 20 8 20H12V28H8C6 28 4 30 4 32C4 34 6 36 8 36H12V40C12 42 14 44 16 44C18 44 20 42 20 40H28C28 42 30 44 32 44C34 44 36 42 36 40V36H40C42 36 44 34 44 32C44 30 42 28 40 28H36V20H40C42 20 44 18 44 16C44 14 42 12 40 12H36V8C36 6 34 4 32 4C30 4 28 6 28 8H20Z" fill="#C84B2F"/>
                    </svg>
                    <div className="mt-2 text-xs font-extrabold uppercase tracking-wider" style={{color:"#4A4A4A"}}>Connecting Pieces</div>
                    <div className="text-xs text-gray-500">of Two Nations</div>
                  </div>
                </div>
              </div>
              {/* Konten kanan */}
              <div className="flex flex-col justify-center bg-white/70 p-10 backdrop-blur md:p-14 dark:bg-gray-950/50">
                <div className="text-xs font-extrabold uppercase tracking-[0.18em]" style={{color:"#C84B2F"}}>Our Slogan</div>
                <h3 className="mt-4 text-4xl md:text-5xl font-black tracking-tight leading-tight" style={{color:"#4A4A4A"}}>
                  "Bridging Nations,
                  <br />
                  <span style={{color:"#C84B2F"}}>Empowering People."</span>
                </h3>
                <p className="mt-6 text-base md:text-lg leading-relaxed text-gray-600 dark:text-gray-300">
                  IDECN connects Indonesia and the United States through education, culture, and community — building lasting partnerships that create real impact across borders.
                </p>
                <div className="mt-8 grid grid-cols-2 gap-3">
                  {[
                    {icon:"🎓", label:"Education"},
                    {icon:"🎨", label:"Culture"},
                    {icon:"🤝", label:"Partnership"},
                    {icon:"💡", label:"Innovation"},
                  ].map((x) => (
                    <div key={x.label} className="flex items-center gap-3 rounded-2xl border border-gray-200/70 bg-white/80 px-4 py-3 backdrop-blur dark:border-white/10 dark:bg-white/5">
                      <span className="text-xl">{x.icon}</span>
                      <span className="font-bold text-gray-800 dark:text-white text-sm">{x.label}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8 flex flex-wrap gap-4">
                  <a href="#get-involved" className="rounded-2xl px-8 py-4 font-bold text-white transition hover:-translate-y-0.5 hover:opacity-90" style={{background:"#C84B2F"}}>Get involved</a>
                  <a href="#portfolio" className="rounded-2xl border-2 border-gray-300/60 bg-white/70 px-8 py-4 font-bold transition hover:bg-white dark:border-white/20 dark:bg-white/10 dark:text-white" style={{color:"#4A4A4A"}}>See our work</a>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ── Photo strip ── */}
      <section className="mx-auto max-w-7xl px-6 py-6 space-y-3">
        <Reveal>
          <div className="grid grid-cols-4 gap-3 sm:grid-cols-7 rounded-[28px] overflow-hidden h-36 sm:h-44">
            {[PHOTOS.hero,PHOTOS.event1,PHOTOS.event2,PHOTOS.event3,PHOTOS.event4,PHOTOS.event5,PHOTOS.event6].map((src,i)=>(
              <div key={i} className="overflow-hidden"><img src={src} alt="" className="h-full w-full object-cover transition duration-700 hover:scale-110" /></div>
            ))}
          </div>
          <div className="grid grid-cols-3 gap-3 sm:grid-cols-6 rounded-[28px] overflow-hidden h-36 sm:h-44">
            {[PHOTOS.about1,PHOTOS.about2,PHOTOS.culture1,PHOTOS.culture2,PHOTOS.partner1,PHOTOS.extra].map((src,i)=>(
              <div key={i} className="overflow-hidden"><img src={src} alt="" className="h-full w-full object-cover transition duration-700 hover:scale-110" /></div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ══════════════ PORTFOLIO ══ */}
      <section id="portfolio" className="scroll-mt-28 mx-auto max-w-7xl px-6 py-20 md:py-24">
        <Reveal>
          <div className="text-center">
            <div className="text-xs font-extrabold uppercase tracking-[0.18em]" style={{color:"#C84B2F"}}>{pf.eyebrow ?? "Proof of execution"}</div>
            <h2 className="mt-3 text-4xl font-black tracking-tight text-gray-900 dark:text-white md:text-5xl">{pf.title ?? "Portfolio Event"}</h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-gray-600 dark:text-gray-300">Clear execution summary — measurable outcomes, organized documentation, and a partner-ready playbook.</p>
          </div>
        </Reveal>
        <Reveal delayMs={120}>
          <div className="mt-10 rounded-[34px] border border-gray-200/70 bg-white/55 p-6 backdrop-blur dark:border-white/10 dark:bg-white/5 md:p-8">
            <PortfolioCarousel count={portfolioSlides.length} className="mt-2" label="Portfolio carousel">
              {portfolioSlides.map((sl, idx) => (
                <div key={sl.key} data-slide className="snap-center shrink-0 w-[92%] md:w-[86%] lg:w-[78%]">
                  <Reveal delayMs={60 + idx * 90}>
                    <SpotlightCard className="p-9 md:p-10">
                      <div className="flex items-center justify-between gap-4 mb-7">
                        <div className="text-xs font-extrabold uppercase tracking-[0.18em]" style={{color:"#C84B2F"}}>Slide {idx+1} / {portfolioSlides.length}</div>
                        <div className="rounded-full border border-gray-200/70 bg-white/70 px-3 py-1 text-xs font-bold text-gray-800 backdrop-blur dark:border-white/10 dark:bg-white/10 dark:text-gray-100">{sl.title}</div>
                      </div>
                      {sl.content}
                    </SpotlightCard>
                  </Reveal>
                </div>
              ))}
            </PortfolioCarousel>
          </div>
        </Reveal>
      </section>

      {/* ══════════════ CHECK OUR ACTIVITY ══ */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <Reveal>
          <div className="text-center">
            <div className="text-xs font-extrabold uppercase tracking-[0.18em]" style={{color:"#C84B2F"}}>In the News</div>
            <h2 className="mt-3 text-4xl font-black tracking-tight text-gray-900 dark:text-white md:text-5xl">Check Our Activity</h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-gray-600 dark:text-gray-300">Our events have been recognized by major media — here's proof.</p>
          </div>
        </Reveal>
        <Reveal delayMs={100}>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {MEDIA.map((item) => (
              <a key={item.outlet} href={item.href} target="_blank" rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-[28px] border border-gray-200/60 bg-white/80 backdrop-blur transition hover:-translate-y-2 hover:shadow-2xl dark:border-white/10 dark:bg-white/5">
                {/* Orange top bar */}
                <div className="h-1.5 w-full" style={{background:"#C84B2F"}} />
                <div className="overflow-hidden h-44 relative">
                  <img src={item.photo} alt={item.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-black/30" />
                  <div className="absolute top-4 left-4 flex items-center gap-2 rounded-full bg-white/95 px-3 py-1.5 backdrop-blur shadow">
                    <span className="text-sm">{item.flag}</span>
                    <span className="text-xs font-extrabold uppercase tracking-wide" style={{color:"#4A4A4A"}}>{item.outlet}</span>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-base font-bold leading-snug text-gray-900 dark:text-white group-hover:opacity-80 transition line-clamp-3">{item.title}</p>
                  <div className="mt-5 flex items-center gap-2 text-sm font-bold transition-all" style={{color:"#C84B2F"}}>
                    Read article <span className="transition-transform group-hover:translate-x-1">→</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ══════════════ PARTNERS ══ */}
      <section id="partners" className="scroll-mt-28 mx-auto max-w-7xl px-6 py-20 md:py-24">
        <Reveal>
          <div className="text-center">
            <div className="text-xs font-extrabold uppercase tracking-[0.18em]" style={{color:"#C84B2F"}}>Collaboration</div>
            <h2 className="mt-3 text-4xl font-black tracking-tight text-gray-900 dark:text-white md:text-5xl">{pt.title ?? "Partners"}</h2>
            <p className="mx-auto mt-4 max-w-2xl text-base md:text-lg text-gray-600 dark:text-gray-300">{pt.subtitle ?? ""}</p>
          </div>
        </Reveal>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {(pt.cards ?? []).map((c: any, i: number) => (
            <Reveal key={c.title ?? i} delayMs={80 + i * 60}>
              <SpotlightCard className="overflow-hidden p-0">
                <div className="h-2 w-full" style={{background:"#C84B2F"}} />
                <div className="h-40 overflow-hidden">
                  <img src={[PHOTOS.partner1,PHOTOS.about2,PHOTOS.culture2][i%3]} alt={c.title} className="h-full w-full object-cover transition duration-700 hover:scale-105" />
                </div>
                <div className="p-7">
                  <div className="text-xl font-black tracking-tight text-gray-900 dark:text-white">{c.title}</div>
                  <p className="mt-3 text-gray-600 dark:text-gray-300">{c.desc}</p>
                  <div className="mt-5 h-1 w-16 rounded-full" style={{background:"#C84B2F"}} />
                </div>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ══════════════ INCOMING EVENT ══ */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <Reveal>
          <div className="text-center">
            <div className="text-xs font-extrabold uppercase tracking-[0.18em]" style={{color:"#C84B2F"}}>Mark Your Calendar</div>
            <h2 className="mt-3 text-4xl font-black tracking-tight text-gray-900 dark:text-white md:text-5xl">Incoming Event</h2>
          </div>
        </Reveal>
        <Reveal delayMs={100}>
          <div className="mt-10 overflow-hidden rounded-[36px] shadow-2xl">
            {/* Header banner — warna proposal */}
            <div className="relative overflow-hidden" style={{background:"#C84B2F", minHeight:"220px"}}>
              <img src={PHOTOS.hero} alt="Event" className="absolute inset-0 h-full w-full object-cover opacity-30 mix-blend-multiply" />
              {/* Batik texture hint */}
              <img src="/Batik_Perca.jpg" alt="" className="absolute inset-0 h-full w-full object-cover opacity-10" />
              <div className="relative px-10 py-12 md:px-14">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-sm font-bold text-white backdrop-blur">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-white" />
                  Upcoming Event 2025
                </div>
                <h3 className="mt-4 text-3xl md:text-5xl font-black text-white tracking-tight leading-tight">
                  Indonesia Culinary Day
                  <br />
                  <span className="text-white/80">on the Creek</span>
                </h3>
                <p className="mt-3 text-white/80 text-base md:text-lg font-medium">Celebrate, Connect, Collaborate</p>
              </div>
            </div>

            {/* Detail bar */}
            <div className="bg-white/90 backdrop-blur dark:bg-gray-950/80">
              <div className="grid grid-cols-2 divide-x divide-gray-200/70 dark:divide-white/10 md:grid-cols-4">
                {[
                  {icon:"📅", label:"Date", value:"Saturday, August 2, 2025"},
                  {icon:"⏰", label:"Time", value:"11 AM – 4 PM"},
                  {icon:"📍", label:"Venue", value:"Carroll Creek Park"},
                  {icon:"🏙️", label:"Location", value:"Downtown Frederick, MD"},
                ].map((x) => (
                  <div key={x.label} className="px-6 py-5 text-center">
                    <div className="text-xl">{x.icon}</div>
                    <div className="mt-1 text-xs font-extrabold uppercase tracking-wider text-gray-400">{x.label}</div>
                    <div className="mt-1 text-sm font-bold text-gray-900 dark:text-white">{x.value}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Highlights + CTA */}
            <div className="bg-white/70 backdrop-blur px-10 py-10 dark:bg-gray-950/50 md:px-14">
              <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
                <div>
                  <div className="text-sm font-extrabold uppercase tracking-[0.18em]" style={{color:"#C84B2F"}}>Event Highlights</div>
                  <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
                    {["Food Bazaar","Marketplace","Cultural Performances","Art & Craft","Exhibition","Open to Public"].map((h) => (
                      <div key={h} className="flex items-center gap-2 rounded-xl border border-gray-200/60 bg-white/80 px-3 py-2.5 text-sm font-semibold text-gray-700 dark:border-white/10 dark:bg-white/5 dark:text-gray-200">
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full" style={{background:"#C84B2F"}} />
                        {h}
                      </div>
                    ))}
                  </div>
                  <p className="mt-5 text-sm text-gray-600 dark:text-gray-300">
                    Free & open to the public. Hosted by AACF & IDECN at Carroll Creek Park amphitheater.
                  </p>
                </div>
                <div className="flex flex-col gap-4 sm:flex-row lg:flex-col xl:flex-row">
                  <a href="/indonesia-on-the-creek-proposal.pdf" target="_blank"
                    className="flex-1 rounded-2xl px-7 py-4 text-center font-bold text-white transition hover:-translate-y-0.5 hover:opacity-90 shadow-lg"
                    style={{background:"#C84B2F"}}>
                    Download Proposal
                  </a>
                  <a href={`mailto:${email}`}
                    className="flex-1 rounded-2xl border-2 px-7 py-4 text-center font-bold transition hover:-translate-y-0.5 dark:text-white"
                    style={{borderColor:"#C84B2F", color:"#C84B2F"}}>
                    Contact Committee
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ══════════════ GET INVOLVED ══ */}
      <section id="get-involved" className="scroll-mt-28 mx-auto max-w-7xl px-6 py-20 md:py-24">
        <Reveal>
          <div className="text-center">
            <div className="text-xs font-extrabold uppercase tracking-[0.18em]" style={{color:"#C84B2F"}}>Join Us</div>
            <h2 className="mt-3 text-4xl font-black tracking-tight text-gray-900 dark:text-white md:text-5xl">{gi.title ?? "Get Involved"}</h2>
            <p className="mx-auto mt-4 max-w-2xl text-base md:text-lg text-gray-600 dark:text-gray-300">{gi.subtitle ?? ""}</p>
          </div>
        </Reveal>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {(gi.cards ?? []).map((c: any, i: number) => (
            <Reveal key={c.title ?? i} delayMs={80 + i * 60}>
              <SpotlightCard className="p-9 md:p-10">
                <div className="h-1 w-12 rounded-full mb-5" style={{background:"#C84B2F"}} />
                <div className="text-2xl font-black tracking-tight text-gray-900 dark:text-white">{c.title}</div>
                <p className="mt-3 text-base md:text-lg text-gray-600 dark:text-gray-300">{c.subtitle}</p>
                <a href={`mailto:${email}`} className="mt-6 inline-flex font-bold hover:opacity-70 transition" style={{color:"#C84B2F"}}>Start here →</a>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
        <Reveal delayMs={140}>
          <div className="mt-12 relative overflow-hidden rounded-[34px]">
            <img src={PHOTOS.about2} alt="Collaborate" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gray-900/75" />
            <div className="relative p-10 md:p-14">
              <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
                <div className="lg:col-span-8">
                  <div className="text-3xl font-black tracking-tight text-white md:text-4xl">{gi.banner?.title ?? "Ready to collaborate?"}</div>
                  <p className="mt-3 text-base md:text-lg text-white/75">{gi.banner?.desc ?? "Tell us your goals — we'll map a collaboration plan with clear deliverables."}</p>
                </div>
                <div className="lg:col-span-4 flex flex-col gap-3 sm:flex-row lg:flex-col">
                  <a href={`mailto:${email}`} className="rounded-2xl px-7 py-4 text-center font-bold text-white transition hover:opacity-90" style={{background:"#C84B2F"}}>{gi.banner?.primary?.label ?? "Contact IDECN"}</a>
                  <a href="/indonesia-on-the-creek-proposal.pdf" className="rounded-2xl border border-white/30 bg-white/15 px-7 py-4 text-center font-bold text-white hover:bg-white/25 transition backdrop-blur">{gi.banner?.secondary?.label ?? "Download Proposal"}</a>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ══════════════ FOOTER ══ */}
      <footer className="border-t border-gray-200/70 px-6 py-16 backdrop-blur dark:border-white/10" style={{background:"rgba(245,240,235,0.85)"}}>
        <div className="mx-auto max-w-7xl dark:text-white">
          <div className="grid gap-10 md:grid-cols-3">
            <div>
              <img src="/IDECN_LOGO1.svg" alt="IDECN" className="h-10 w-auto" />
              <p className="mt-4 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                Indonesia Education & Cultural Network — fostering education, culture, and community connections between Indonesia and the United States.
              </p>
              <p className="mt-3 text-sm text-gray-500 dark:text-gray-400">8415 Oak Bush Terrace, Columbia, MD 21045</p>
              <a href="https://www.idecn.org" className="mt-1 inline-block text-sm font-semibold hover:opacity-70 transition" style={{color:"#C84B2F"}}>www.idecn.org</a>
            </div>
            <div>
              <div className="text-sm font-extrabold uppercase tracking-[0.18em]" style={{color:"#4A4A4A"}}>Contact</div>
              <div className="mt-4 space-y-3 text-sm text-gray-600 dark:text-gray-300">
                <div><span className="font-semibold text-gray-800 dark:text-gray-100">Organization:</span> <a href="mailto:indoecnetwork@gmail.com" className="hover:underline" style={{color:"#C84B2F"}}>indoecnetwork@gmail.com</a></div>
                <div><span className="font-semibold text-gray-800 dark:text-gray-100">Event:</span> <a href="mailto:indonesiaday@gmail.com" className="hover:underline" style={{color:"#C84B2F"}}>indonesiaday@gmail.com</a></div>
              </div>
              <div className="mt-5 text-sm font-extrabold uppercase tracking-[0.18em]" style={{color:"#4A4A4A"}}>Key Contacts</div>
              <div className="mt-3 space-y-2 text-sm text-gray-600 dark:text-gray-300">
                <div><span className="font-semibold text-gray-800 dark:text-gray-100">Haris Koentjoro</span> — <a href="tel:+14435709509" className="hover:opacity-70">(443) 570-9509</a></div>
                <div><span className="font-semibold text-gray-800 dark:text-gray-100">Endang Setyowati</span> — <a href="tel:+12404836113" className="hover:opacity-70">(240) 483-6113</a></div>
              </div>
            </div>
            <div>
              <div className="text-sm font-extrabold uppercase tracking-[0.18em]" style={{color:"#4A4A4A"}}>Media Coverage</div>
              <div className="mt-4 space-y-3">
                {MEDIA.map((m) => (
                  <a key={m.outlet} href={m.href} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-gray-600 hover:opacity-70 dark:text-gray-300 transition">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full" style={{background:"#C84B2F"}} />
                    {m.outlet}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-300/50 pt-6 dark:border-white/10 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <span className="text-xs text-gray-500 dark:text-gray-400">© {new Date().getFullYear()} {orgShort} — {orgName}. All rights reserved.</span>
            <span className="text-xs text-gray-400 dark:text-gray-500">Established 2024 · Columbia, MD, USA</span>
          </div>
        </div>
      </footer>

    </main>
    </AnimatedPageWrapper>
  );
}
