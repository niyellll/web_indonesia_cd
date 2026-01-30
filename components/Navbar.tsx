"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";

type NavItem = { id: string; label: string };

const NAV: NavItem[] = [
  { id: "about", label: "About" },
  { id: "programs", label: "Programs" },
  { id: "portfolio", label: "Portfolio Event" },
  { id: "partners", label: "Partners" },
  { id: "involved", label: "Get Involved" },
];

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

export default function Navbar() {
  const [active, setActive] = useState<string>("about");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const rafRef = useRef<number | null>(null);

  const items = useMemo(() => NAV, []);

  useEffect(() => {
    // Sticky polish + scroll-driven gradient shift
    const onScroll = () => {
      if (rafRef.current) return;

      rafRef.current = window.requestAnimationFrame(() => {
        rafRef.current = null;

        const y = window.scrollY || 0;
        setScrolled(y > 6);

        const doc = document.documentElement;
        const max = Math.max(1, doc.scrollHeight - window.innerHeight);
        const progress = clamp(y / max, 0, 1);

        // shift from 0% -> 100%
        doc.style.setProperty("--accent-x", `${Math.round(progress * 100)}%`);
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    // Active section observer
    const ids = items.map((i) => i.id);
    const els = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (!els.length) return;

    const obs = new IntersectionObserver(
      (entries) => {
        // choose the most visible entry
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0];

        if (visible?.target?.id) setActive(visible.target.id);
      },
      {
        root: null,
        // offset for sticky navbar
        rootMargin: "-88px 0px -60% 0px",
        threshold: [0.12, 0.2, 0.3, 0.4, 0.55],
      }
    );

    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [items]);

  const scrollToId = (id: string) => (e?: React.MouseEvent) => {
    e?.preventDefault();
    setOpen(false);

    const el = document.getElementById(id);
    if (!el) return;

    const navOffset = 92; // sticky height
    const top = el.getBoundingClientRect().top + window.scrollY - navOffset;

    window.history.replaceState(null, "", `#${id}`);
    window.scrollTo({ top, behavior: "smooth" });
    setActive(id);
  };

  return (
    <header className="sticky top-0 z-[9999]">
      <div className="accent-bar" />
      <div
        className={[
          "w-full border-b",
          scrolled ? "bg-white/80 backdrop-blur-xl shadow-[0_10px_28px_rgba(11,18,32,0.10)]" : "bg-white/70 backdrop-blur-lg",
        ].join(" ")}
        style={{ borderColor: "var(--line)" }}
      >
        <div className="wrap">
          <div className="flex h-[78px] items-center justify-between">
            {/* Logo */}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setOpen(false);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="flex items-center gap-3"
              aria-label="IDECN Home"
            >
              <div
                className="h-10 w-10 rounded-full border bg-white/60"
                style={{ borderColor: "var(--line)" }}
              />
              <div className="leading-tight">
                <div className="text-[15px] font-extrabold tracking-tight">IDECN</div>
                <div className="text-[12px] font-semibold" style={{ color: "var(--muted)" }}>
                  Indonesia ↔ U.S.
                </div>
              </div>
            </a>

            {/* Desktop nav */}
            <nav className="hidden items-center gap-2 md:flex" aria-label="Primary">
              <div
                className="flex items-center gap-1 rounded-full border bg-white/65 p-1 backdrop-blur"
                style={{ borderColor: "var(--line)" }}
              >
                {items.map((it) => {
                  const isActive = active === it.id;
                  return (
                    <a
                      key={it.id}
                      href={`#${it.id}`}
                      onClick={scrollToId(it.id)}
                      className={[
                        "relative rounded-full px-4 py-2 text-[15px] font-extrabold transition",
                        isActive ? "text-[var(--ink)]" : "text-[color:var(--muted)] hover:text-[var(--ink)]",
                      ].join(" ")}
                    >
                      {it.label}
                      {/* underline */}
                      <span
                        className={[
                          "absolute left-4 right-4 -bottom-[2px] h-[3px] rounded-full",
                          isActive ? "opacity-100" : "opacity-0",
                        ].join(" ")}
                        style={{
                          backgroundImage: "linear-gradient(90deg, var(--red), #fff, var(--blue))",
                          transition: "opacity 180ms ease",
                        }}
                      />
                    </a>
                  );
                })}
              </div>

              <a href="#contact" onClick={scrollToId("contact")} className="btn btn-primary ml-3">
                Contact
              </a>
            </nav>

            {/* Mobile */}
            <div className="md:hidden flex items-center gap-2">
              <a href="#contact" onClick={scrollToId("contact")} className="btn btn-primary">
                Contact
              </a>
              <button
                className="btn"
                onClick={() => setOpen((v) => !v)}
                aria-label="Toggle menu"
                aria-expanded={open}
              >
                <span className="text-[16px] font-extrabold">{open ? "Close" : "Menu"}</span>
              </button>
            </div>
          </div>

          {/* Mobile menu panel */}
          {open && (
            <div
              className="md:hidden pb-4"
              style={{ borderTop: "1px solid var(--line)" }}
            >
              <div className="mt-3 grid gap-2">
                {items.map((it) => (
                  <a
                    key={it.id}
                    href={`#${it.id}`}
                    onClick={scrollToId(it.id)}
                    className={[
                      "rounded-2xl border bg-white/75 px-4 py-3 text-[16px] font-extrabold backdrop-blur",
                      active === it.id ? "text-[var(--ink)]" : "text-[color:var(--muted)]",
                    ].join(" ")}
                    style={{ borderColor: "var(--line)" }}
                  >
                    {it.label}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
