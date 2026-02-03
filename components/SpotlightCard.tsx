"use client";

import * as React from "react";

export default function SpotlightCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const raf = React.useRef<number | null>(null);
  const last = React.useRef<{ x: number; y: number } | null>(null);

  const update = React.useCallback(() => {
    raf.current = null;
    const el = ref.current;
    if (!el || !last.current) return;
    el.style.setProperty("--spot-x", `${last.current.x}px`);
    el.style.setProperty("--spot-y", `${last.current.y}px`);
  }, []);

  const onMove = (e: React.PointerEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    last.current = { x: e.clientX - r.left, y: e.clientY - r.top };
    if (raf.current == null) raf.current = window.requestAnimationFrame(update);
  };

  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--spot-x", `50%`);
    el.style.setProperty("--spot-y", `50%`);
  };

  React.useEffect(() => {
    return () => {
      if (raf.current != null) window.cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <div
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
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
