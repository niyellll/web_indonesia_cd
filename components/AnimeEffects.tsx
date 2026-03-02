"use client";

import { useEffect } from "react";

// ─── 1. SCROLL REVEAL (fade + slide up) ──────────────────────────────────────
function useScrollReveal() {
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
        { rootMargin: "0px 0px -80px 0px", threshold: 0.05 }
      );
      document.querySelectorAll("[data-scroll-reveal]").forEach((el) => {
        (el as HTMLElement).style.opacity = "0";
        observer.observe(el);
      });
      return () => observer.disconnect();
    });
  }, []);
}

// ─── 2. STAGGER CARDS ────────────────────────────────────────────────────────
function useStaggerCards() {
  useEffect(() => {
    import("animejs").then((mod) => {
      const anime = (mod as any).default ?? mod;
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const cards = entry.target.querySelectorAll("[data-stagger-card]");
              cards.forEach((c) => ((c as HTMLElement).style.opacity = "0"));
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
        { rootMargin: "0px 0px -60px 0px", threshold: 0.05 }
      );
      document.querySelectorAll("[data-stagger-container]").forEach((el) => observer.observe(el));
      return () => observer.disconnect();
    });
  }, []);
}

// ─── 3. COUNT UP ─────────────────────────────────────────────────────────────
function useCounterAnimation() {
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
                round: 1,
                duration: 2000,
                easing: "easeOutExpo",
                update: () => { el.textContent = obj.val.toLocaleString(); },
              });
              observer.unobserve(el);
            }
          });
        },
        { threshold: 0.5 }
      );
      document.querySelectorAll("[data-counter-target]").forEach((el) => observer.observe(el));
      return () => observer.disconnect();
    });
  }, []);
}

// ─── 4. PARALLAX SCROLL ──────────────────────────────────────────────────────
function useParallax() {
  useEffect(() => {
    import("animejs").then((mod) => {
      const anime = (mod as any).default ?? mod;
      const els = Array.from(
        document.querySelectorAll<HTMLElement>("[data-parallax]")
      );
      if (!els.length) return;

      const onScroll = () => {
        els.forEach((el) => {
          const rect = el.getBoundingClientRect();
          const speed = parseFloat(el.dataset.parallax ?? "0.15");
          const offset = (window.innerHeight / 2 - rect.top - rect.height / 2) * speed;
          anime({
            targets: el,
            translateY: offset,
            duration: 0,
            easing: "linear",
          });
        });
      };
      window.addEventListener("scroll", onScroll, { passive: true });
      onScroll();
      return () => window.removeEventListener("scroll", onScroll);
    });
  }, []);
}

// ─── 5. MORPHING TEXT ────────────────────────────────────────────────────────
function useMorphingText() {
  useEffect(() => {
    import("animejs").then((mod) => {
      const anime = (mod as any).default ?? mod;
      const els = Array.from(
        document.querySelectorAll<HTMLElement>("[data-morph-text]")
      );
      if (!els.length) return;

      els.forEach((el) => {
        const words = (el.dataset.morphText ?? "").split("|").map((w) => w.trim()).filter(Boolean);
        if (words.length < 2) return;
        let idx = 0;

        const morphTo = (word: string) => {
          // fade out + slide up
          anime({
            targets: el,
            opacity: [1, 0],
            translateY: [0, -18],
            duration: 350,
            easing: "easeInCubic",
            complete: () => {
              el.textContent = word;
              // fade in + slide up from below
              anime({
                targets: el,
                opacity: [0, 1],
                translateY: [18, 0],
                duration: 400,
                easing: "easeOutCubic",
              });
            },
          });
        };

        // initial text
        el.textContent = words[0];
        el.style.display = "inline-block";
        el.style.minWidth = "1px";

        const interval = setInterval(() => {
          idx = (idx + 1) % words.length;
          morphTo(words[idx]);
        }, 2400);

        return () => clearInterval(interval);
      });
    });
  }, []);
}

// ─── 6. FLOATING ELEMENTS ────────────────────────────────────────────────────
function useFloatingElements() {
  useEffect(() => {
    import("animejs").then((mod) => {
      const anime = (mod as any).default ?? mod;
      const els = Array.from(
        document.querySelectorAll<HTMLElement>("[data-float]")
      );
      if (!els.length) return;

      els.forEach((el, i) => {
        const amplitude = parseFloat(el.dataset.float ?? "12");
        const duration  = 2800 + i * 400;
        const delay     = i * 300;

        anime({
          targets: el,
          translateY: [`-${amplitude}px`, `${amplitude}px`],
          rotate:  [-1.5, 1.5],
          duration,
          delay,
          direction: "alternate",
          loop: true,
          easing: "easeInOutSine",
        });
      });
    });
  }, []);
}

// ─── 7. HOVER LIFT (spring) ───────────────────────────────────────────────────
function useHoverLift() {
  useEffect(() => {
    import("animejs").then((mod) => {
      const anime = (mod as any).default ?? mod;
      const cards = document.querySelectorAll<HTMLElement>("[data-hover-lift]");

      cards.forEach((card) => {
        card.addEventListener("mouseenter", () => {
          anime({ targets: card, translateY: -8, scale: 1.02, duration: 300, easing: "easeOutExpo" });
        });
        card.addEventListener("mouseleave", () => {
          anime({ targets: card, translateY: 0, scale: 1, duration: 400, easing: "spring(1,80,10,0)" });
        });
      });
    });
  }, []);
}

// ─── 8. HERO ENTRANCE ────────────────────────────────────────────────────────
function useHeroEntrance() {
  useEffect(() => {
    import("animejs").then((mod) => {
      const anime = (mod as any).default ?? mod;
      const els = document.querySelectorAll("[data-hero-entrance]");
      if (!els.length) return;

      anime({
        targets: els,
        opacity:    [0, 1],
        translateY: [30, 0],
        scale:      [0.97, 1],
        delay: anime.stagger(120, { start: 200 }),
        duration: 900,
        easing: "easeOutExpo",
      });
    });
  }, []);
}

// ─── MASTER HOOK ─────────────────────────────────────────────────────────────
export function useAnimeEffects() {
  useScrollReveal();
  useStaggerCards();
  useCounterAnimation();
  useParallax();
  useMorphingText();
  useFloatingElements();
  useHoverLift();
  useHeroEntrance();
}
