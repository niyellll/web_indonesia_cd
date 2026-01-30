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
    <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-white/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <Link href="/" className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full border border-[var(--line)] bg-white" />
          <div className="leading-tight">
            <p className="text-base font-extrabold tracking-tight text-[var(--ink)]">IDECN</p>
            <p className="text-sm text-[var(--muted)] -mt-0.5">Indonesia ↔ U.S.</p>
          </div>
        </Link>

        {/* desktop */}
        <nav className="hidden items-center gap-2 md:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-xl px-3 py-2 text-base font-medium text-[var(--muted)] hover:bg-black/5 hover:text-[var(--ink)]"
            >
              {item.label}
            </a>
          ))}
          <a href="#contact" className="btn-primary ml-2">
            Contact
          </a>
        </nav>

        {/* mobile */}
        <details className="md:hidden">
          <summary className="list-none rounded-xl border border-[var(--line)] bg-white px-3 py-2 text-base">
            Menu
          </summary>
          <div className="mt-2 grid gap-1 rounded-2xl border border-[var(--line)] bg-white p-3">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-xl px-3 py-2 text-base hover:bg-black/5"
              >
                {item.label}
              </a>
            ))}
            <a href="#contact" className="btn-primary mt-2 text-center">
              Contact
            </a>
          </div>
        </details>
      </div>
    </header>
  );
}
