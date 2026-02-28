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

  const scrollToId = React.useCallback((id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const offset = 88;
    const top = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: "smooth" });
  }, []);

  React.useEffect(() => {
    const els = items.map((x) => document.getElementById(x.id)).filter(Boolean) as HTMLElement[];
    if (!els.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        const v = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (v[0]?.target?.id) setActive(v[0].target.id);
      },
      { rootMargin: "-25% 0px -65% 0px", threshold: [0.12, 0.2, 0.35] }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [items]);

  return (
    <header className="fixed top-0 left-0 right-0 z-[80] border-b border-gray-200/70 bg-white/82 backdrop-blur-xl dark:border-white/10 dark:bg-gray-950/62">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <a href="#" className="inline-flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-orange-500 text-xl font-black text-white shadow-sm shadow-orange-500/20">
            I
          </span>
          <span className="text-2xl font-black tracking-tight text-gray-900 dark:text-white">{brandShort}</span>
        </a>

        <nav className="hidden md:flex items-center gap-9" aria-label="Primary">
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
                className={[
                  "relative text-[16px] font-semibold tracking-tight transition-colors",
                  isActive ? "text-gray-900 dark:text-white" : "text-gray-600 hover:text-orange-600 dark:text-white/70 dark:hover:text-orange-400",
                ].join(" ")}
              >
                {it.label}
                {isActive && (
                  <span className="absolute -bottom-3 left-0 h-0.5 w-full rounded-full bg-gradient-to-r from-orange-500 to-gray-500" />
                )}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />

          <a
            href={contactHref}
            className="hidden md:inline-flex rounded-full bg-gray-900 px-6 py-2.5 text-[14px] font-bold text-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:bg-white dark:text-gray-900"
          >
            Contact
          </a>

          <button
            type="button"
            className="md:hidden inline-flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white/82 text-slate-900 backdrop-blur hover:bg-white transition dark:border-white/15 dark:bg-white/10 dark:text-white"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? "✕" : "≡"}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-gray-200/70 bg-white/88 px-6 py-6 backdrop-blur-xl dark:border-white/10 dark:bg-gray-950/72">
          <div className="flex flex-col gap-4">
            {items.map((it) => (
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
                className="text-lg font-semibold text-gray-900 dark:text-white/90"
              >
                {it.label}
              </a>
            ))}
            <a
              href={contactHref}
              className="mt-2 inline-flex justify-center rounded-2xl bg-gray-900 px-6 py-3 text-base font-bold text-white dark:bg-white dark:text-gray-900"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
