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
    <header className="navbar">
      <div className="flagbar" aria-hidden>
        <div className="r" />
        <div className="w" />
        <div className="b" />
      </div>

      <div className="wrap">
        <div className="nav-inner">
          <Link href="#top" className="brand">
            <span className="brand-badge" aria-hidden />
            <span>
              <div className="brand-title">IDECN</div>
              <div className="brand-sub">Indonesia ↔ U.S.</div>
            </span>
          </Link>

          <nav className="nav-links" aria-label="Primary">
            {NAV.map((i) => (
              <a key={i.href} href={i.href}>
                {i.label}
              </a>
            ))}
          </nav>

          <div className="flex justify-end">
            <a className="btn btn-primary" href="#contact">
              Contact
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
