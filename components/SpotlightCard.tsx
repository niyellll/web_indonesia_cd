"use client";

import * as React from "react";

type SpotlightCardProps = {
  children: React.ReactNode;
  className?: string;
};

/**
 * SpotlightCard (Client Component)
 * - Returns JSX (fixes: "cannot be used as a JSX component")
 * - Cursor-following glow via CSS variables --spot-x / --spot-y
 */
export default function SpotlightCard({ children, className = "" }: SpotlightCardProps) {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const rafId = React.useRef<number | null>(null);
  const last = React.useRef<{ x: number; y: number } | null>(null);

  const flush = React.useCallback(() => {
    rafId.current = null;
    const el = ref.current;
    if (!el || !last.current) return;

    el.style.setProperty("--spot-x", `${last.current.x}px`);
    el.style.setProperty("--spot-y", `${last.current.y}px`);
  }, []);

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;

    const r = el.getBoundingClientRect();
    last.current = { x: e.clientX - r.left, y: e.clientY - r.top };

    if (rafId.current == null) rafId.current = window.requestAnimationFrame(flush);
  };

  const onPointerLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--spot-x", "50%");
    el.style.setProperty("--spot-y", "50%");
  };

  React.useEffect(() => {
    return () => {
      if (rafId.current != null) window.cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <div
      ref={ref}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
      className={[
        "spotlight rounded-[28px] border border-slate-200/70 bg-white/70 backdrop-blur-xl",
        "shadow-[0_16px_60px_rgba(2,6,23,0.08)] transition-all duration-500",
        "hover:-translate-y-1.5 hover:shadow-[0_28px_90px_rgba(2,6,23,0.14)]",
        "dark:border-white/10 dark:bg-slate-900/45 dark:shadow-[0_18px_70px_rgba(0,0,0,0.45)]",
        "dark:hover:shadow-[0_28px_90px_rgba(0,0,0,0.55)]",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}
