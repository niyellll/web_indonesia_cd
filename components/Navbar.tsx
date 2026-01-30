import Link from "next/link";

const NAV = [
  { label: "About", href: "#about" },
  { label: "Programs", href: "#programs" },
  { label: "Portfolio Event", href: "#portfolio" },
  { label: "Partners", href: "#partners" },
  { label: "Get Involved", href: "#get-involved" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/85 backdrop-blur border-b border-[var(--line)]">
      {/* solid flag bar (bukan gradient) */}
      <div className="flagbar" aria-hidden>
        <span className="flagbar__red" />
        <span className="flagbar__white" />
        <span className="flagbar__blue" />
      </div>

      <div className="mx-auto max-w-[var(--container)] px-4 sm:px-6">
        <div className="grid h-[72px] grid-cols-3 items-center">
          {/* Left: Brand */}
          <Link href="/" className="flex items-center gap-3 justify-self-start">
            <div className="h-10 w-10 rounded-2xl border border-[var(--line)] bg-white" />
            <div className="leading-tight">
              <div className="text-[15px] font-extrabold tracking-tight text-[var(--ink)]">
                IDECN
              </div>
              <div className="text-[12px] font-medium text-[var(--muted)] -mt-0.5">
                Indonesia ↔ U.S.
              </div>
            </div>
          </Link>

          {/* Center: Nav */}
          <nav className="hidden md:flex items-center justify-center gap-2 justify-self-center">
            {NAV.map((i) => (
              <a
                key={i.href}
                href={i.href}
                className="navlink"
              >
                {i.label}
              </a>
            ))}
          </nav>

          {/* Right: CTA */}
          <div className="justify-self-end flex items-center gap-3">
            <a href="#contact" className="btn btn-primary">
              Contact
            </a>

            {/* Mobile menu */}
            <details className="md:hidden">
              <summary className="btn btn-outline px-3 py-2 text-sm cursor-pointer">
                Menu
              </summary>
              <div className="mt-2 w-[260px] rounded-2xl border border-[var(--line)] bg-white p-2 shadow-[0_18px_60px_rgba(0,0,0,0.12)]">
                {NAV.map((i) => (
                  <a
                    key={i.href}
                    href={i.href}
                    className="block rounded-xl px-3 py-2 text-sm hover:bg-black/5"
                  >
                    {i.label}
                  </a>
                ))}
                <div className="p-2">
                  <a href="#contact" className="btn btn-primary w-full">
                    Contact
                  </a>
                </div>
              </div>
            </details>
          </div>
        </div>
      </div>
    </header>
  );
}
