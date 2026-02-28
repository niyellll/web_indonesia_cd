"use client";

import * as React from "react";

type Variant = "up" | "fade" | "zoom" | "left" | "right";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delayMs?: number;
  variant?: Variant;
  once?: boolean;
  threshold?: number;
  rootMargin?: string;
  staggerChildren?: boolean;
};

export default function Reveal({
  children,
  className = "",
  delayMs = 0,
  variant = "up",
  once = true,
  threshold = 0.12,
  rootMargin = "0px 0px -12% 0px",
  staggerChildren = false,
}: RevealProps) {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = React.useState(false);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduce) {
      setInView(true);
      return;
    }

    const obs = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setInView(true);
            if (once) obs.unobserve(entry.target);
          } else if (!once) {
            setInView(false);
          }
        }
      },
      { threshold, rootMargin }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [once, threshold, rootMargin]);

  const style = {
    ["--reveal-delay" as any]: `${delayMs}ms`,
  } as React.CSSProperties;

  return (
    <div
      ref={ref}
      data-reveal={variant}
      style={style}
      className={[
        "reveal",
        inView ? "reveal--in" : "",
        staggerChildren ? "reveal-stagger" : "",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}
