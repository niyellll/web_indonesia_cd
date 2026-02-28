"use client";

import { useEffect, useRef } from "react";

// ─── 1. Scroll-triggered animations ──────────────────────────────────────────
export function useScrollReveal() {
  useEffect(() => {
    let anime: any;
    import("animejs").then((mod) => {
      anime = (mod as any).default ?? mod;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              anime({
                targets: entry.target,
                opacity: [0, 1],
                translateY: [40, 0],
                duration: 700,
                easing: "easeOutExpo",
              });
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12 }
      );

      document
        .querySelectorAll("[data-scroll-reveal]")
        .forEach((el) => {
          (el as HTMLElement).style.opacity = "0";
          observer.observe(el);
        });

      return () => observer.disconnect();
    });
  }, []);
}

// ─── 2. Staggered entrance ────────────────────────────────────────────────────
export function useStaggerCards() {
  useEffect(() => {
    import("animejs").then((mod) => {
      const anime = (mod as any).default ?? mod;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const cards = entry.target.querySelectorAll("[data-stagger-card]");
              anime({
                targets: cards,
                opacity: [0, 1],
                translateY: [50, 0],
                scale: [0.95, 1],
                delay: anime.stagger(100, { start: 80 }),
                duration: 650,
                easing: "easeOutExpo",
              });
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.08 }
      );

      document
        .querySelectorAll("[data-stagger-container]")
        .forEach((el) => {
          el.querySelectorAll("[data-stagger-card]").forEach((card) => {
            (card as HTMLElement).style.opacity = "0";
          });
          observer.observe(el);
        });

      return () => observer.disconnect();
    });
  }, []);
}

// ─── 3. Text reveal (hero heading) ───────────────────────────────────────────
export function useTextReveal() {
  useEffect(() => {
    import("animejs").then((mod) => {
      const anime = (mod as any).default ?? mod;

      document.querySelectorAll("[data-text-reveal]").forEach((el) => {
        const text = el.textContent ?? "";
        el.innerHTML = text
          .split(" ")
          .map(
            (word) =>
              `<span class="inline-block overflow-hidden"><span class="inline-block translate-y-full" data-word>${word}</span></span>&nbsp;`
          )
          .join("");

        const words = el.querySelectorAll("[data-word]");
        anime({
          targets: words,
          translateY: ["100%", "0%"],
          opacity: [0, 1],
          delay: anime.stagger(80, { start: 200 }),
          duration: 800,
          easing: "easeOutExpo",
        });
      });
    });
  }, []);
}

// ─── 4. Counter animation ─────────────────────────────────────────────────────
export function useCounterAnimation() {
  useEffect(() => {
    import("animejs").then((mod) => {
      const anime = (mod as any).default ?? mod;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const el = entry.target as HTMLElement;
              const target = parseInt(el.dataset.counterTarget ?? "0", 10);
              const obj = { val: 0 };
              anime({
                targets: obj,
                val: target,
                duration: 1800,
                easing: "easeOutExpo",
                update: () => {
                  el.textContent = Math.round(obj.val).toLocaleString();
                },
              });
              observer.unobserve(el);
            }
          });
        },
        { threshold: 0.5 }
      );

      document
        .querySelectorAll("[data-counter-target]")
        .forEach((el) => observer.observe(el));

      return () => observer.disconnect();
    });
  }, []);
}

// ─── 5. Parallax effect ───────────────────────────────────────────────────────
export function useParallax() {
  useEffect(() => {
    import("animejs").then((mod) => {
      const anime = (mod as any).default ?? mod;
      let ticking = false;

      const onScroll = () => {
        if (!ticking) {
          requestAnimationFrame(() => {
            const scrollY = window.scrollY;
            document.querySelectorAll("[data-parallax]").forEach((el) => {
              const speed = parseFloat(
                (el as HTMLElement).dataset.parallax ?? "0.3"
              );
              anime({
                targets: el,
                translateY: scrollY * speed,
                duration: 0,
                easing: "linear",
              });
            });
            ticking = false;
          });
          ticking = true;
        }
      };

      window.addEventListener("scroll", onScroll, { passive: true });
      return () => window.removeEventListener("scroll", onScroll);
    });
  }, []);
}

// ─── 6. Hover micro-interactions ─────────────────────────────────────────────
export function useHoverCards() {
  useEffect(() => {
    import("animejs").then((mod) => {
      const anime = (mod as any).default ?? mod;

      document.querySelectorAll("[data-hover-card]").forEach((el) => {
        const enter = () =>
          anime({
            targets: el,
            translateY: -8,
            scale: 1.02,
            boxShadow: "0 24px 60px rgba(0,0,0,0.18)",
            duration: 350,
            easing: "spring(1, 80, 10, 0)",
          });

        const leave = () =>
          anime({
            targets: el,
            translateY: 0,
            scale: 1,
            boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
            duration: 400,
            easing: "spring(1, 80, 10, 0)",
          });

        el.addEventListener("mouseenter", enter);
        el.addEventListener("mouseleave", leave);
      });
    });
  }, []);
}

// ─── Master hook – use this one in page.tsx ───────────────────────────────────
export function useAnimeEffects() {
  useScrollReveal();
  useStaggerCards();
  useTextReveal();
  useCounterAnimation();
  useParallax();
  useHoverCards();
}
