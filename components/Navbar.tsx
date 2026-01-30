"use client";

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
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-slate-200">
      {/* garis merah - putih - biru (bukan gradasi) */}
      <div className="h-1 w-full">
        <div className="grid h-full grid-cols-3">
          <div className="bg-red-600" />
          <div className="bg-white" />
          <div className="bg-blue-700" />
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-4">
        <div className="grid grid-cols-3 items-center">
          {/* kiri: logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="h-11 w-11 rounded-2xl border border-slate-200 bg-white" />
            <div className="leading-tight">
              <p className="text-[15px] sm:text-base font-semibold text-slate-900">IDECN</p>
              <p className="text-xs sm:text-sm text-slate-500 -mt-0.5">Indonesia ↔ U.S.</p>
            </div>
          </Link>

          {/* tengah: nav (rata tengah) */}
          <nav className="hidden md:flex items-center justify-center gap-7 text-[15px] font-medium text-slate-600">
            {NAV.map((n) => (
              <a key={n.href} href={n.href} className="hover:text-slate-900">
                {n.label}
              </a>
            ))}
          </nav>

          {/* kanan: contact */}
          <div className="flex justify-end">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-4 py-2 text-[15px] font-semibold text-slate-900 hover:bg-slate-50"
            >
              Contact
            </a>
          </div>
        </div>

        {/* mobile nav */}
        <div className="md:hidden mt-3 flex flex-wrap gap-2 justify-center">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700"
            >
              {n.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
