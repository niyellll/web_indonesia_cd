"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type NavItem = { id: string; label: string };

export default function Navbar() {
  const items: NavItem[] = useMemo(
    () => [
      { id: "about", label: "About" },
      { id: "programs", label: "Programs" },
      { id: "portfolio", label: "Portfolio Event" },
      { id: "partners", label: "Partners" },
      { id: "get-involved", label: "Get Involved" },
      { id: "contact", label: "Contact" },
    ],
    []
  );

  const [active, setActive] = useState<string>("about");
  const [open, setOpen] = useState(false);

  const ticking = useRef(false);

  // Scroll → update CSS var (smooth, low-cost)
  useEffect(() => {
    const onScroll = () => {
      if (ticking.current) return;
      ticking.current = true;

      requestAnimationFrame(() => {
        const doc = document.documentElement;
        const scrollTop = window.scrollY || doc.scrollTop || 0;
        const max = Math.max(1, doc.scrollHeight - window.innerHeight);
        const p = Math.min(1, Math.max(0, scrollTop / max));

        doc.style.setProperty("--scroll", String(p));
        if (scrollTop > 8) doc.dataset.scrolled = "1";
        else delete doc.dataset.scrolled;

        ticking.current = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll spy (IntersectionObserver)
  useEffect(() => {
    const els = items
      .map((it) => document.getElementById(it.id))
      .filter(Boolean) as HTMLElement[];

    if (!els.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        // ambil yang paling "visible"
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0];

        if (visible?.target?.id) setActive(visible.target.id);
      },
      {
        root: null,
        threshold: [0.15, 0.25, 0.35, 0.5, 0.65],
        // offset biar header sticky ga nutup
        rootMargin: "-25% 0px -60% 0px",
      }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [items]);

  const go = (id: string) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (!el) return;

    // offset untuk navbar height
    const y = el.getBoundingClientRect().top + window.scrollY - 84;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <header className="navShell">
      <div className="topbar" />
      <div className="wrap">
        <div className="navInner">
          <a className="navBrand" href="#top" onClick={(e) => (e.preventDefault(), go("top"))}>
            <div className="logoMark" />
            <div>
              <div className="brandTitle">IDECN</div>
              <div className="brandSub">Indonesia ↔ U.S.</div>
            </div>
          </a>

          <nav className="navLinks" aria-label="Primary navigation">
            {items.slice(0, 5).map((it) => (
              <button
                key={it.id}
                className="navLink"
                data-active={active === it.id ? "1" : "0"}
                onClick={() => go(it.id)}
                type="button"
              >
                {it.label}
              </button>
            ))}
          </nav>

          <div className="navRight">
            <div className="hidden max-[920px]:flex items-center gap-2">
              <button
                type="button"
                className="btn btn-ghost"
                onClick={() => setOpen((v) => !v)}
                aria-expanded={open}
                aria-controls="mobile-drawer"
              >
                Menu
              </button>
              <button type="button" className="btn btn-primary" onClick={() => go("contact")}>
                Contact
              </button>
            </div>

            <div className="max-[920px]:hidden flex items-center gap-3">
              <button type="button" className="btn btn-primary" onClick={() => go("contact")}>
                Contact
              </button>
            </div>
          </div>
        </div>

        {open ? (
          <div id="mobile-drawer" className="drawer max-[920px]:block hidden">
            {items.map((it) => (
              <a
                key={it.id}
                href={`#${it.id}`}
                onClick={(e) => (e.preventDefault(), go(it.id))}
              >
                {it.label}
              </a>
            ))}
          </div>
        ) : null}
      </div>
    </header>
  );
}
