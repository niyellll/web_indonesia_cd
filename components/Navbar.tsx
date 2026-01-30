import Link from "next/link";

const NAV = [
  ["About", "#about"],
  ["What We Do", "#work"],
  ["Portfolio", "#portfolio"],
  ["For Donors/Investors", "#invest"],
  ["Partners", "#partners"],
  ["Contact", "#contact"],
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--line)] bg-white/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <Link href="/" className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-2xl border border-[var(--line)] bg-[linear-gradient(135deg,rgba(211,47,47,.18),rgba(11,45,92,.10))]" />
          <div className="leading-tight">
            <p className="text-sm font-extrabold tracking-wide">IDECN</p>
            <p className="text-xs text-[var(--muted)] -mt-0.5">Indonesia ↔ U.S.</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-2 md:flex">
          {NAV.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="rounded-xl px-3 py-2 text-sm text-[var(--muted)] hover:bg-black/5 hover:text-[var(--ink)]"
            >
              {label}
            </a>
          ))}
          <a href="#contact" className="ml-2 btn-primary">
            Contact
          </a>
        </nav>

        {/* mobile */}
        <details className="md:hidden">
          <summary className="list-none rounded-xl border border-[var(--line)] bg-white/80 px-3 py-2 text-sm">
            Menu
          </summary>
          <div className="mt-2 grid gap-2 rounded-2xl border border-[var(--line)] bg-white/95 p-3">
            {NAV.map(([label, href]) => (
              <a key={href} href={href} className="rounded-xl px-3 py-2 text-sm hover:bg-black/5">
                {label}
              </a>
            ))}
            <a href="#contact" className="btn-primary text-center">
              Contact
            </a>

            {/* CMS link (opsional, bisa kamu hapus kalau nggak mau tampil) */}
            <Link
              href="/studio"
              className="rounded-xl px-3 py-2 text-sm text-[var(--muted)] hover:bg-black/5"
            >
              Admin / CMS
            </Link>
          </div>
        </details>
      </div>
    </header>
  );
}

