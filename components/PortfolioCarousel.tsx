"use client";

import * as React from "react";

type Props = {
  children: React.ReactNode;
  count: number;
  className?: string;
  label?: string;
};

export default function PortfolioCarousel({ children, count, className = "", label = "Portfolio carousel" }: Props) {
  const scrollerRef = React.useRef<HTMLDivElement | null>(null);
  const [active, setActive] = React.useState(0);

  const getSlides = React.useCallback(() => {
    const el = scrollerRef.current;
    if (!el) return [];
    return Array.from(el.querySelectorAll<HTMLElement>("[data-slide]"));
  }, []);

  const scrollToIndex = React.useCallback(
    (idx: number) => {
      const el = scrollerRef.current;
      if (!el) return;

      const slides = getSlides();
      const target = slides[idx];
      if (!target) return;

      // center target slide in viewport
      const left = target.offsetLeft - (el.clientWidth - target.clientWidth) / 2;
      el.scrollTo({ left, behavior: "smooth" });
    },
    [getSlides]
  );

  const prev = React.useCallback(() => scrollToIndex(Math.max(0, active - 1)), [active, scrollToIndex]);
  const next = React.useCallback(() => scrollToIndex(Math.min(count - 1, active + 1)), [active, count, scrollToIndex]);

  React.useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    let raf = 0;

    const updateActive = () => {
      const slides = getSlides();
      if (!slides.length) return;

      const center = el.scrollLeft + el.clientWidth / 2;

      let bestIdx = 0;
      let bestDist = Number.POSITIVE_INFINITY;

      for (let i = 0; i < slides.length; i++) {
        const s = slides[i];
        const slideCenter = s.offsetLeft + s.clientWidth / 2;
        const dist = Math.abs(slideCenter - center);
        if (dist < bestDist) {
          bestDist = dist;
          bestIdx = i;
        }
      }
      setActive(bestIdx);
    };

    const onScroll = () => {
      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(updateActive);
    };

    el.addEventListener("scroll", onScroll, { passive: true });
    // initial
    updateActive();

    return () => {
      el.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [getSlides]);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      prev();
    }
    if (e.key === "ArrowRight") {
      e.preventDefault();
      next();
    }
  };

  const ArrowBtn = ({
    dir,
    onClick,
    disabled,
  }: {
    dir: "left" | "right";
    onClick: () => void;
    disabled: boolean;
  }) => (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={dir === "left" ? "Previous slide" : "Next slide"}
      className={[
        "group/btn absolute top-1/2 z-20 -translate-y-1/2",
        dir === "left" ? "left-3 md:left-4" : "right-3 md:right-4",
        "h-11 w-11 md:h-12 md:w-12 rounded-2xl",
        "border border-slate-200/70 bg-white/75 backdrop-blur",
        "shadow-[0_18px_55px_rgba(2,6,23,0.14)]",
        "transition",
        "hover:-translate-y-1/2 hover:scale-[1.02]",
        "active:scale-[0.98]",
        "dark:border-white/12 dark:bg-white/10 dark:shadow-[0_22px_70px_rgba(0,0,0,0.55)]",
        "disabled:opacity-40 disabled:cursor-not-allowed",
      ].join(" ")}
    >
      <span
        aria-hidden="true"
        className="absolute inset-0 rounded-2xl opacity-0 transition-opacity group-hover/btn:opacity-100"
        style={{
          background:
            "linear-gradient(90deg, rgba(239,68,68,.28), rgba(59,130,246,.28))",
        }}
      />
      <span className="relative grid h-full w-full place-items-center">
        {dir === "left" ? (
          <svg width="18" height="18" viewBox="0 0 24 24" className="text-slate-900 dark:text-white">
            <path
              fill="currentColor"
              d="M15.5 19.5a1 1 0 0 1-.7-.3l-7-7a1 1 0 0 1 0-1.4l7-7a1 1 0 1 1 1.4 1.4L9.9 11.5l6.3 6.3a1 1 0 0 1-.7 1.7Z"
            />
          </svg>
        ) : (
          <svg width="18" height="18" viewBox="0 0 24 24" className="text-slate-900 dark:text-white">
            <path
              fill="currentColor"
              d="M8.5 19.5a1 1 0 0 1-.7-1.7l6.3-6.3l-6.3-6.3a1 1 0 1 1 1.4-1.4l7 7a1 1 0 0 1 0 1.4l-7 7a1 1 0 0 1-.7.3Z"
            />
          </svg>
        )}
      </span>
    </button>
  );

  return (
    <div
      className={["relative", className].join(" ")}
      role="region"
      aria-label={label}
      tabIndex={0}
      onKeyDown={onKeyDown}
    >
      {/* Edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-white/80 to-transparent dark:from-slate-950/40" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-white/80 to-transparent dark:from-slate-950/40" />

      {/* Arrows */}
      <ArrowBtn dir="left" onClick={prev} disabled={active === 0} />
      <ArrowBtn dir="right" onClick={next} disabled={active === count - 1} />

      {/* Track */}
      <div
        ref={scrollerRef}
        className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-6 pr-6
                   [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      >
        {children}
      </div>

      {/* Dots (aktif ikut slide) */}
      <div className="mt-2 flex justify-center gap-2">
        {Array.from({ length: count }).map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => scrollToIndex(i)}
            className={[
              "h-3 w-3 rounded-full transition",
              i === active ? "bg-slate-900 dark:bg-white" : "bg-slate-300/80 dark:bg-white/20",
            ].join(" ")}
          />
        ))}
      </div>
    </div>
  );
}
