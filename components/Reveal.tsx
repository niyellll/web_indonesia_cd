"use client";

import * as React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  delayMs?: number;
  once?: boolean;
};

export default function Reveal({ children, className = "", delayMs = 0, once = true }: Props) {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const [shown, setShown] = React.useState(false);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setShown(true);
            if (once) io.disconnect();
          } else if (!once) {
            setShown(false);
          }
        }
      },
      { threshold: 0.18, rootMargin: "0px 0px -10% 0px" }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [once]);

  return (
    <div
      ref={ref}
      className={[
        "reveal",
        shown ? "reveal--in" : "",
        className,
      ].join(" ")}
      style={{ ["--reveal-delay" as any]: `${delayMs}ms` }}
    >
      {children}
    </div>
  );
}
