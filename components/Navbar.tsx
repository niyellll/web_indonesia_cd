"use client";

import { useEffect, useState } from "react";

const LINKS = [
  { label: "About", href: "#about" },
  { label: "Programs", href: "#programs" },
  { label: "Portfolio Event", href: "#portfolio" },
  { label: "Partners", href: "#partners" },
  { label: "Get Involved", href: "#get-involved" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onHash = () => setOpen(false);
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white/85 backdrop-blur-md">
      {/* 🇮🇩🇺🇸 stripe (solid, bukan gradient) */}
      <div className="h-[3px] w-full">
        <div className="h-full w-full" style={{ background: "var(--red)" }} />
        <div className="h-[1px] w-full bg-white" />
        <div className="h-[3px] w-full" style={{ background: "var(--blue)" }} />
      </div>

      <div className="border-b" style={{ borderColor: "var(--line)" }}>
        <div className="containerX flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-3">
            <div
              className="h-10 w-10 rounded-full border"
              style={{ borderColor: "var(--line)" }}
              aria-hidden
            />
            <div className="leading-tight">
              <div className="text-sm font-black">IDECN</div>
              <div className="text-xs" style={{ color: "var(--muted2)" }}>
                Indonesia ↔ U.S.
              </div>
            </div>
          </a>

          <nav className="hidden items-center gap-7 md:flex">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-semibold text-[color:var(--muted)] hover:text-[color:var(--fg)]"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden md:inline-flex rounded-full px-5 py-2.5 text-sm font-bold text-white"
              style={{ background: "var(--red)" }}
            >
              Contact
            </a>

            <button
              className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border"
              style={{ borderColor: "var(--line)" }}
              onClick={() => setOpen((v) => !v)}
              aria-label="Open menu"
            >
              <span className="text-lg leading-none">≡</span>
            </button>
          </div>
        </div>

        {open && (
          <div className="md:hidden border-t" style={{ borderColor: "var(--line)" }}>
            <div className="containerX py-4">
              <div className="flex flex-col gap-2">
                {LINKS.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    className="rounded-xl px-4 py-3 text-sm font-semibold"
                    style={{ background: "rgba(11,18,32,0.03)" }}
                    onClick={() => setOpen(false)}
                  >
                    {l.label}
                  </a>
                ))}
                <a
                  href="#contact"
                  className="mt-2 inline-flex justify-center rounded-xl px-4 py-3 text-sm font-bold text-white"
                  style={{ background: "var(--red)" }}
                  onClick={() => setOpen(false)}
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
