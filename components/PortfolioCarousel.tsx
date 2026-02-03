"use client";

import * as React from "react";

type Props = {
  children: React.ReactNode;
  count: number;
  className?: string;
  label?: string;
};

export default function PortfolioCarousel({
  children,
  count,
  className = "",
  label = "Portfolio carousel",
}: Props) {
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

      const left = target.offsetLeft - (el.clientWidth - target.clientWidth) / 2;
      el.scrollTo({ left, behavior: "smooth" });
    },
    [getSlides]
  );

  const prev = React.useCallback(
    () => scrollToIndex(Math.max(0, active - 1)),
    [active, scrollToIndex]
  );
  const next = React.useCallback(
    () => scrollToIndex(Math.min(count - 1, active + 1)),
    [active, count, scrollToIndex]
  );

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

  const showControls = count > 1;

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
        "pointer-events-auto",
        "h-12 w-12 md:h-14 md:w-14 rounded-2xl",
        "grid place-items-center",
        // solid BG biar kebaca (light & dark)
        "bg-white text-slate-900",
        "dark:bg-slate-950 dark:text-white",
        // border jelas
        "border border-slate-200/90 dark:border-white/18",
        // shadow tebal biar premium
        "shadow-[0_18px_60px_rgba(2,6,23,0.25)] dark:shadow-[0_22px_80px_rgba(0,0,0,0.65)]",
        // hover ring gradient
        "relative transition hover:scale-[1.03] active:scale-[0.98]",
        "disabled:opacity-30 disabled:cursor-not-allowed",
      ].join(" ")}
    >
      {/* ring gradient tipis */}
      <span
        aria-hidden="true"
        className="absolute inset-0 rounded-2xl opacity-0 transition-opacity hover:opacity-100"
        style={{
          padding: 1,
          background:
            "linear-gradient(90deg, rgba(239,68,68,0.85), rgba(59,130,246,0.85))",
          WebkitMask:
            "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        }}
      />

      {dir === "left" ? (
        <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true" className="relative">
          <path
            fill="currentColor"
            d="M15.5 19.5a1 1 0 0 1-.7-.3l-7-7a1 1 0 0 1 0-1.4l7-7a1 1 0 1 1 1.4 1.4L9.9 11.5l6.3 6.3a1 1 0 0 1-.7 1.7Z"
          />
        </svg>
      ) : (
        <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true" className="relative">
          <path
            fill="currentColor"
            d="M8.5 19.5a1 1 0 0 1-.7-1.7l6.3-6.3l-6.3-6.3a1 1 0 1 1 1.4-1.4l7 7a1 1 0 0 1 0 1.4l-7 7a1 1 0 0 1-.7.3Z"
          />
        </svg>
      )}
    </button>
  );

  return (
    <div
      className={["relative overflow-visible", className].join(" ")}
      role="region"
      aria-label={label}
      tabIndex={0}
      onKeyDown={onKeyDown}
    >
      {/* Track */}
      <div
        ref={scrollerRef}
        className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-6 pr-6
                   [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      >
        {children}
      </div>

      {/* Controls OUTSIDE area (nggak nutup teks) */}
      {showControls ? (
        <div className="pointer-events-none absolute top-1/2 left-0 right-0 z-30 -translate-y-1/2">
          {/* kiri */}
          <div className="absolute left-[-22px] md:left-[-28px]">
            <ArrowBtn dir="left" onClick={prev} disabled={active === 0} />
          </div>
          {/* kanan */}
          <div className="absolute right-[-22px] md:right-[-28px]">
            <ArrowBtn dir="right" onClick={next} disabled={active === count - 1} />
          </div>
        </div>
      ) : null}

      {/* Dots */}
      {showControls ? (
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
      ) : null}
    </div>
  );
}
