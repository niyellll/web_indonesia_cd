"use client";

import * as React from "react";
import ThemeToggle from "./ThemeToggle";
import type { NavItem } from "../lib/cms";

export default function Navbar({
  brandShort,
  items,
  contactHref,
}: {
  brandShort: string;
  items: NavItem[];
  contactHref: string;
}) {
  const [active, setActive] = React.useState(items[0]?.id ?? "");
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  const scrollToId = React.useCallback((id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const offset = 88;
    const top = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: "smooth" });
  }, []);

  // Scroll shadow
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Active section detection — more forgiving rootMargin
  React.useEffect(() => {
    const ids = items.map((x) => x.id);
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    if (!els.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        // Pick the topmost intersecting entry
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]?.target?.id) setActive(visible[0].target.id);
      },
      { rootMargin: "-10% 0px -55% 0px", threshold: 0 }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [items]);

  const ORANGE = "#C84B2F";

  return (
    <header
      className={[
        "fixed top-0 left-0 right-0 z-[80] border-b border-gray-200/70 bg-white/90 backdrop-blur-xl transition-shadow dark:border-white/10 dark:bg-gray-950/80",
        scrolled ? "shadow-md" : "",
      ].join(" ")}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <a href="#" className="inline-flex items-center" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}>
          <img src="/IDECN_LOGO1.svg" alt="IDECN Logo" className="h-12 w-auto" />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Primary">
          {items.map((it) => {
            const isActive = active === it.id;
            return (
              <a
                key={it.id}
                href={it.href}
                onClick={(e) => {
                  if (it.href.startsWith("#")) {
                    e.preventDefault();
                    scrollToId(it.id);
                  }
                }}
                className="relative text-[15px] font-semibold tracking-tight transition-colors pb-1"
                style={{ color: isActive ? ORANGE : undefined }}
              >
                <span className={isActive ? "" : "text-gray-600 hover:text-gray-900 dark:text-white/70 dark:hover:text-white transition-colors"}>
                  {it.label}
                </span>
                {/* Underline */}
                <span
                  className="absolute bottom-0 left-0 h-[2.5px] rounded-full transition-all duration-300"
                  style={{
                    background: ORANGE,
                    width: isActive ? "100%" : "0%",
                  }}
                />
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <a
            href={contactHref}
            className="hidden md:inline-flex rounded-full px-6 py-2.5 text-[14px] font-bold text-white shadow-sm transition hover:-translate-y-0.5 hover:opacity-90"
            style={{ background: "#C84B2F" }}
          >
            Contact
          </a>
          <button
            type="button"
            className="md:hidden inline-flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white/82 text-slate-900 backdrop-blur hover:bg-white transition dark:border-white/15 dark:bg-white/10 dark:text-white"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-gray-200/70 bg-white/95 px-6 py-6 backdrop-blur-xl dark:border-white/10 dark:bg-gray-950/90">
          <div className="flex flex-col gap-1">
            {items.map((it) => {
              const isActive = active === it.id;
              return (
                <a
                  key={it.id}
                  href={it.href}
                  onClick={(e) => {
                    if (it.href.startsWith("#")) {
                      e.preventDefault();
                      scrollToId(it.id);
                      setOpen(false);
                    }
                  }}
                  className="flex items-center gap-3 rounded-xl px-4 py-3 text-base font-semibold transition"
                  style={{
                    background: isActive ? "rgba(200,75,47,0.08)" : undefined,
                    color: isActive ? ORANGE : undefined,
                  }}
                >
                  {isActive && <span className="h-1.5 w-1.5 rounded-full" style={{ background: ORANGE }} />}
                  {it.label}
                </a>
              );
            })}
            <a
              href={contactHref}
              className="mt-3 inline-flex justify-center rounded-2xl px-6 py-3 text-base font-bold text-white"
              style={{ background: "#C84B2F" }}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
