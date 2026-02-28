"use client";

import * as React from "react";

type Mode = "light" | "dark" | "system";
const KEY = "idecn-theme";

function systemTheme(): "light" | "dark" {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function apply(mode: Mode) {
  const root = document.documentElement;
  const resolved = mode === "system" ? systemTheme() : mode;
  root.classList.toggle("dark", resolved === "dark");
  root.dataset.theme = mode;
}

function MoonIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M21 13.2A7.8 7.8 0 0 1 10.8 3a7.1 7.1 0 1 0 10.2 10.2Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function SunIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z" stroke="currentColor" strokeWidth="2" />
      <path
        d="M12 2v2M12 20v2M4 12H2M22 12h-2M19.07 4.93l-1.41 1.41M6.34 17.66l-1.41 1.41M19.07 19.07l-1.41-1.41M6.34 6.34 4.93 4.93"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function ThemeToggle() {
  const [mode, setMode] = React.useState<Mode>("system");
  const [resolved, setResolved] = React.useState<"light" | "dark">("light");

  React.useEffect(() => {
    const saved = (localStorage.getItem(KEY) as Mode | null) ?? "system";
    setMode(saved);
    apply(saved);
    setResolved(saved === "system" ? systemTheme() : saved);

    const mql = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => {
      const current = (document.documentElement.dataset.theme as Mode) ?? "system";
      if (current === "system") {
        apply("system");
        setResolved(systemTheme());
      }
    };
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  const toggle = () => {
    const current = mode === "system" ? systemTheme() : mode;
    const next: Mode = current === "dark" ? "light" : "dark";
    localStorage.setItem(KEY, next);
    setMode(next);
    apply(next);
    setResolved(next);
  };

  return (
    <button
      type="button"
      onClick={toggle}
      className="inline-flex h-11 w-11 items-center justify-center rounded-full
                 border border-slate-200 bg-white/80 text-slate-900 shadow-sm backdrop-blur
                 hover:bg-white hover:shadow-md transition
                 dark:border-white/15 dark:bg-white/10 dark:text-white"
      aria-label="Toggle theme"
      title="Toggle theme"
    >
      {resolved === "dark" ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
    </button>
  );
}
