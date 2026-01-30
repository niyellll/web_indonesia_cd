"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type NavItem = { id: string; label: string };

const NAV: NavItem[] = [
  { id: "about", label: "About" },
  { id: "programs", label: "Programs" },
  { id: "portfolio", label: "Portfolio Event" },
  { id: "partners", label: "Partners" },
  { id: "get-involved", label: "Get Involved" },
];

function clamp(n: number, min: number, max: number) {
  return Math.min(max, Math.max(min, n));
}

function SunIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M12 2v2M12 20v2M4 12H2M22 12h-2M5 5l1.5 1.5M17.5 17.5 19 19M19 5l-1.5 1.5M6.5 17.5 5 19"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function MoonIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M21 14.5A8.5 8.5 0 0 1 9.5 3 7 7 0 1 0 21 14.5Z"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );
}

export default function Navbar() {
  const [active, setActive] = useState<string>("about");
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const rafRef = useRef<number | null>(null);

  const navItems = useMemo(() => NAV, []);

  // Theme init
  useEffect(() => {
    const root = document.documentElement;
    setIsDark(root.classList.contains("dark"));
  }, []);

  // Scroll progress -> CSS var --scroll (0..1) for top bar gradient movement
  useEffect(() => {
    const root = document.documentElement;

    const update = () => {
      rafRef.current = null;
      const doc = document.documentElement;
      const max = Math.max(1, doc.scrollHeight - window.innerHeight);
      const p = clamp(window.scrollY / max, 0, 1);
      root.style.setProperty("--scroll", p.toFixed(4));
    };

    const onScroll = () => {
      if (rafRef.current) return;
      rafRef.current = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  // Active section tracking
  useEffect(() => {
    const ids = [...NAV.map((x) => x.id), "contact"];
    const els = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (!els.length) return;

    const obs = new IntersectionObserver(
      (entries) => {
        // Pick the most visible entry
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0];

        if (visible?.target?.id) setActive(visible.target.id);
      },
      {
        root: null,
        threshold: [0.18, 0.28, 0.4, 0.55],
        rootMargin: "-15% 0px -70% 0px",
      }
    );

    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const scrollToId = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    setMenuOpen(false);
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const toggleTheme = () => {
    const root = document.documentElement;
    const next = !root.classList.contains("dark");
    if (next) root.classList.add("dark");
    else root.classList.remove("dark");
    localStorage.setItem("theme", next ? "dark" : "light");
    setIsDark(next);
  };

  return (
    <div className="sticky top-0 z-50">
      {/* Top moving gradient bar */}
      <div className="top-gradient-bar" />

      <header
        className={[
          "mx-auto w-full",
          "border-b",
          "bg-[var(--navBg)] backdrop-blur-xl",
          "border-[var(--navBorder)]",
        ].join(" ")}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:py-4">
          {/* Left brand */}
          <button
            onClick={() => scrollToId("top")}
            className="group flex items-center gap-3 rounded-2xl px-2 py-2 transition hover:bg-[var(--pill)]"
            aria-label="Go to top"
          >
            <div className="h-10 w-10 rounded-full border border-[var(--border)] bg-[var(--card)] shadow-sm" />
            <div className="text-left leading-tight">
              <div className="text-[15px] font-extrabold tracking-tight">IDECN</div>
              <div className="text-xs font-semibold text-[var(--muted)]">Indonesia ↔ U.S.</div>
            </div>
          </button>

          {/* Center nav (desktop) */}
          <nav className="hidden items-center gap-1 rounded-full border border-[var(--border)] bg-[var(--pill)] px-2 py-2 shadow-sm md:flex">
            {navItems.map((it) => {
              const on = active === it.id;
              return (
                <button
                  key={it.id}
                  onClick={() => scrollToId(it.id)}
                  className={[
                    "relative rounded-full px-4 py-2 text-[15px] font-extrabold",
                    "transition",
                    on ? "bg-[var(--cardSolid)] shadow-sm" : "text-[var(--muted)] hover:text-[var(--fg)]",
                  ].join(" ")}
                >
                  {it.label}
                  {on && (
                    <span
                      className="absolute -bottom-1 left-1/2 h-[3px] w-10 -translate-x-1/2 rounded-full"
                      style={{
                        background:
                          "linear-gradient(90deg, var(--red), rgba(255,255,255,0.95), var(--blue))",
                      }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-2">
            {/* Theme toggle icon only */}
            <button
              onClick={toggleTheme}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--pill)] shadow-sm transition hover:translate-y-[-1px]"
              aria-label="Toggle dark mode"
              title="Toggle theme"
            >
              {isDark ? <SunIcon /> : <MoonIcon />}
            </button>

            <button
              onClick={() => scrollToId("contact")}
              className="hidden rounded-full bg-[var(--red)] px-5 py-3 text-[15px] font-extrabold text-white shadow-sm transition hover:translate-y-[-1px] md:inline-flex"
            >
              Contact
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setMenuOpen((v) => !v)}
              className="inline-flex h-11 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--pill)] px-4 text-[15px] font-extrabold shadow-sm md:hidden"
              aria-label="Toggle menu"
            >
              {menuOpen ? "Close" : "Menu"}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="border-t border-[var(--border)] bg-[var(--navBg)] px-4 pb-4 pt-3 md:hidden">
            <div className="grid gap-2">
              {navItems.map((it) => {
                const on = active === it.id;
                return (
                  <button
                    key={it.id}
                    onClick={() => scrollToId(it.id)}
                    className={[
                      "w-full rounded-2xl border border-[var(--border)] px-4 py-3 text-left text-[16px] font-extrabold",
                      on ? "bg-[var(--cardSolid)]" : "bg-[var(--pill)]",
                    ].join(" ")}
                  >
                    {it.label}
                  </button>
                );
              })}

              <button
                onClick={() => scrollToId("contact")}
                className="w-full rounded-2xl bg-[var(--red)] px-4 py-3 text-left text-[16px] font-extrabold text-white"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}
