"use client";

import React, { useEffect, useMemo, useState } from "react";

type NavItem = { id: string; label: string; href: string };

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

export default function Navbar() {
  const NAV: NavItem[] = useMemo(
    () => [
      { id: "about", label: "About", href: "#about" },
      { id: "programs", label: "Programs", href: "#programs" },
      { id: "portfolio", label: "Portfolio Event", href: "#portfolio" },
      { id: "partners", label: "Partners", href: "#partners" },
      { id: "get-involved", label: "Get Involved", href: "#get-involved" },
    ],
    []
  );

  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0); // 0..1
  const [activeId, setActiveId] = useState<string>("");

  // Scroll → (1) navbar style (2) gradient shift progress
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || 0;
      setScrolled(y > 8);

      const doc = document.documentElement;
      const max = Math.max(1, doc.scrollHeight - window.innerHeight);
      const p = clamp(y / max, 0, 1);
      setProgress(p);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Active section highlight (IntersectionObserver)
  useEffect(() => {
    const ids = NAV.map((n) => n.id).concat(["contact"]);
    const els = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (!els.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        // pick most visible
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0));
        if (visible[0]?.target?.id) setActiveId(visible[0].target.id);
      },
      {
        root: null,
        threshold: [0.15, 0.25, 0.35, 0.5, 0.65],
        rootMargin: "-20% 0px -65% 0px", // biar "aktif" pas section mulai masuk
      }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [NAV]);

  const stripeStyle: React.CSSProperties = {
    // merah → putih → biru (Indonesia + US), lalu digeser sesuai scroll
    backgroundImage:
      "linear-gradient(90deg, var(--id-red) 0%, var(--id-red) 38%, #ffffff 50%, var(--us-blue) 62%, var(--us-blue) 100%)",
    backgroundSize: "220% 100%",
    backgroundPosition: `${Math.round(progress * 100)}% 0%`,
  };

  const shell =
    "relative mx-auto flex max-w-6xl items-center gap-4 px-4 md:px-6";
  const navText =
    "text-[14px] md:text-[16px] font-semibold tracking-[0.01em] text-[var(--ink)]/80 hover:text-[var(--ink)]";

  return (
    <header className="sticky top-0 z-50">
      {/* top moving stripe */}
      <div
        className="h-[4px] w-full"
        style={stripeStyle}
        aria-hidden="true"
      />

      {/* main bar */}
      <div
        className={[
          "w-full border-b border-black/5",
          scrolled
            ? "bg-white/85 backdrop-blur-xl shadow-[0_10px_30px_rgba(2,6,23,0.06)]"
            : "bg-white/70 backdrop-blur-md",
        ].join(" ")}
      >
        <div className={shell}>
          {/* Brand */}
          <a
            href="#"
            className="group flex items-center gap-3 py-4 md:py-5"
            aria-label="Home"
          >
            <div className="h-10 w-10 rounded-full border border-black/10 bg-white shadow-[0_10px_25px_rgba(2,6,23,0.10)]" />
            <div className="leading-tight">
              <div className="text-[15px] md:text-[17px] font-extrabold tracking-tight text-[var(--ink)]">
                IDECN
              </div>
              <div className="text-[12px] md:text-[13px] font-semibold text-[var(--ink)]/55">
                Indonesia ↔ U.S.
              </div>
            </div>
          </a>

          {/* Center nav */}
          <nav className="hidden flex-1 items-center justify-center gap-2 md:flex">
            {NAV.map((item) => {
              const isActive = activeId === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  className={[
                    "relative rounded-full px-4 py-2 transition",
                    isActive
                      ? "bg-black/[0.05] text-[var(--ink)]"
                      : "hover:bg-black/[0.04]",
                    navText,
                  ].join(" ")}
                >
                  {/* tiny indicator */}
                  <span
                    className={[
                      "absolute left-1/2 top-full mt-1 h-[3px] w-10 -translate-x-1/2 rounded-full transition-opacity",
                      isActive ? "opacity-100" : "opacity-0",
                    ].join(" ")}
                    style={{
                      backgroundImage:
                        "linear-gradient(90deg, var(--id-red), var(--us-blue))",
                    }}
                    aria-hidden="true"
                  />
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Right CTA */}
          <div className="ml-auto flex items-center gap-3">
            <a
              href="#contact"
              className={[
                "rounded-full px-5 py-2.5 md:px-6 md:py-3",
                "text-[14px] md:text-[16px] font-extrabold tracking-tight text-white",
                "bg-[var(--id-red)] hover:opacity-95",
                "shadow-[0_14px_30px_rgba(217,31,38,0.25)]",
              ].join(" ")}
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
