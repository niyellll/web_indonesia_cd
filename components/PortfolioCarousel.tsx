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
      let bestIdx = 0, bestDist = Infinity;
      for (let i = 0; i < slides.length; i++) {
        const dist = Math.abs(slides[i].offsetLeft + slides[i].clientWidth / 2 - center);
        if (dist < bestDist) { bestDist = dist; bestIdx = i; }
      }
      setActive(bestIdx);
    };
    const onScroll = () => { if (raf) cancelAnimationFrame(raf); raf = requestAnimationFrame(updateActive); };
    el.addEventListener("scroll", onScroll, { passive: true });
    updateActive();
    return () => { el.removeEventListener("scroll", onScroll); if (raf) cancelAnimationFrame(raf); };
  }, [getSlides]);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") { e.preventDefault(); prev(); }
    if (e.key === "ArrowRight") { e.preventDefault(); next(); }
  };

  const showControls = count > 1;
  const ORANGE = "#C84B2F";

  const ArrowBtn = ({ dir, onClick, disabled }: { dir: "left" | "right"; onClick: () => void; disabled: boolean }) => (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={dir === "left" ? "Previous slide" : "Next slide"}
      className="pointer-events-auto h-12 w-12 rounded-2xl grid place-items-center bg-white border border-gray-200 shadow-lg transition hover:scale-105 active:scale-95 disabled:opacity-30 disabled:cursor-not-allowed dark:bg-gray-950 dark:border-white/20 dark:text-white"
      style={{ color: disabled ? undefined : ORANGE }}
    >
      {dir === "left" ? (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M15.5 19.5a1 1 0 0 1-.7-.3l-7-7a1 1 0 0 1 0-1.4l7-7a1 1 0 1 1 1.4 1.4L9.9 11.5l6.3 6.3a1 1 0 0 1-.7 1.7Z" />
        </svg>
      ) : (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M8.5 19.5a1 1 0 0 1-.7-1.7l6.3-6.3l-6.3-6.3a1 1 0 1 1 1.4-1.4l7 7a1 1 0 0 1 0 1.4l-7 7a1 1 0 0 1-.7.3Z" />
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
      {/* Track — no extra bottom padding */}
      <div
        ref={scrollerRef}
        className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      >
        {children}
      </div>

      {/* Arrow controls */}
      {showControls && (
        <div className="pointer-events-none absolute top-1/2 left-0 right-0 z-30 -translate-y-1/2">
          <div className="absolute left-[-20px] md:left-[-26px]">
            <ArrowBtn dir="left" onClick={prev} disabled={active === 0} />
          </div>
          <div className="absolute right-[-20px] md:right-[-26px]">
            <ArrowBtn dir="right" onClick={next} disabled={active === count - 1} />
          </div>
        </div>
      )}

      {/* Dots — compact, brand colored */}
      {showControls && (
        <div className="mt-5 flex justify-center gap-2">
          {Array.from({ length: count }).map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => scrollToIndex(i)}
              className="transition-all duration-300 rounded-full"
              style={{
                width: i === active ? 28 : 10,
                height: 10,
                background: i === active ? ORANGE : "#D1D5DB",
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}
