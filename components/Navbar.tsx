import Link from "next/link";

const NAV = [
  { label: "About", href: "#about" },
  { label: "Programs", href: "#programs" },
  { label: "Portfolio Event", href: "#event" },
  { label: "Partners", href: "#partners" },
  { label: "Get Involved", href: "#get-involved" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-white/80 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-2 items-center py-4 md:grid-cols-3">
          {/* Brand */}
          <Link href="/" className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-2xl border border-[var(--line)] bg-white">
              <div className="h-full w-full rounded-2xl bg-[linear-gradient(135deg,rgba(220,38,38,0.22),rgba(37,99,235,0.18))]" />
            </div>
            <div className="leading-tight">
              <p className="text-sm font-bold tracking-tight">IDECN</p>
              <p className="text-xs text-[var(--muted)] -mt-0.5">Indonesia ↔ U.S.</p>
            </div>
          </Link>

          {/* Desktop nav (center) */}
          <nav className="hidden justify-center gap-1 md:flex">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="rounded-xl px-3 py-2 text-sm md:text-base text-[var(--muted)] hover:bg-black/5 hover:text-[var(--ink)]"
              >
                {n.label}
              </a>
            ))}
          </nav>

          {/* CTA kanan (desktop) + mobile menu */}
          <div className="flex justify-end gap-2">
            <a
              href="#contact"
              className="hidden md:inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm md:text-base font-semibold text-white
              bg-[linear-gradient(90deg,var(--id-red),var(--us-blue))] hover:opacity-95"
            >
              Contact
            </a>

            <details className="md:hidden">
              <summary className="list-none cursor-pointer rounded-xl border border-[var(--line)] bg-white/80 px-3 py-2 text-sm">
                Menu
              </summary>
              <div className="mt-2 grid gap-1 rounded-2xl border border-[var(--line)] bg-white/95 p-2">
                {NAV.map((n) => (
                  <a key={n.href} href={n.href} className="rounded-xl px-3 py-2 text-sm hover:bg-black/5">
                    {n.label}
                  </a>
                ))}
                <a
                  href="#contact"
                  className="mt-1 inline-flex items-center justify-center rounded-xl px-3 py-2 text-sm font-semibold text-white
                  bg-[linear-gradient(90deg,var(--id-red),var(--us-blue))]"
                >
                  Contact
                </a>
              </div>
            </details>
          </div>
        </div>
      </div>
    </header>
  );
}
