"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

function cn(...xs: Array<string | false | null | undefined>) {
  return xs.filter(Boolean).join(" ");
}

type NavItem = { label: string; href: string; id: string };

export default function Navbar() {
  const items: NavItem[] = useMemo(
    () => [
      { label: "About", href: "#about", id: "about" },
      { label: "Programs", href: "#programs", id: "programs" },
      { label: "Portfolio Event", href: "#portfolio", id: "portfolio" },
      { label: "Partners", href: "#partners", id: "partners" },
      { label: "Get Involved", href: "#get-involved", id: "get-involved" },
    ],
    []
  );

  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("about");
  const [openMobile, setOpenMobile] = useState(false);

  // shrink + blur on scroll
  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => setScrolled(window.scrollY > 10));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  // active section
  useEffect(() => {
    const ids = items.map((x) => x.id);
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    if (!els.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0];
        if (visible?.target?.id) setActive(visible.target.id);
      },
      {
        threshold: [0.2, 0.35, 0.5],
        rootMargin: "-90px 0px -55% 0px",
      }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [items]);

  // lock scroll for mobile menu
  useEffect(() => {
    document.body.style.overflow = openMobile ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [openMobile]);

  return (
    <div className="fixed inset-x-0 top-0 z-50">
      {/* red-blue stripe */}
      <div className="h-[3px] w-full">
        <div className="flex h-full">
          <div className="h-full w-1/2 bg-[var(--id-red)]" />
          <div className="h-full w-1/2 bg-[var(--id-blue)]" />
        </div>
      </div>

      <header
        className={cn(
          "transition-all duration-300",
          scrolled
            ? "bg-white/88 backdrop-blur-md border-b border-black/10 shadow-[0_10px_30px_rgba(0,0,0,0.06)]"
            : "bg-white/70 backdrop-blur-sm border-b border-black/0"
        )}
      >
        <div className={cn("nav-wrap", scrolled ? "h-[64px]" : "h-[76px]")}>
          <Link href="/" className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full border border-black/10 bg-white" />
            <div className="leading-tight">
              <div className="text-[15px] font-extrabold tracking-tight text-slate-900">
                IDECN
              </div>
              <div className="text-[12px] font-medium text-slate-500">
                Indonesia ↔ U.S.
              </div>
            </div>
          </Link>

          {/* desktop nav */}
          <nav className="hidden items-center gap-1 md:flex">
            {items.map((it) => {
              const isActive = active === it.id;
              return (
                <a
                  key={it.id}
                  href={it.href}
                  className={cn(
                    "rounded-full px-4 py-2 text-[15px] font-semibold transition",
                    "text-slate-700 hover:bg-slate-900/5 hover:text-slate-900",
                    isActive && "bg-slate-900/5 text-slate-900"
                  )}
                >
                  {it.label}
                </a>
              );
            })}
          </nav>

          {/* right */}
          <div className="flex items-center gap-2">
            <a
              href="#contact"
              className="hidden rounded-full bg-[var(--id-red)] px-5 py-2.5 text-[15px] font-bold text-white hover:bg-[#b91c1c] md:inline-block"
            >
              Contact
            </a>

            {/* mobile button */}
            <button
              className="md:hidden rounded-full border border-black/10 bg-white px-4 py-2 text-[14px] font-bold text-slate-900"
              onClick={() => setOpenMobile(true)}
              aria-label="Open menu"
            >
              Menu
            </button>
          </div>
        </div>

        {/* mobile sheet */}
        {openMobile && (
          <div className="md:hidden">
            <div
              className="fixed inset-0 bg-black/30"
              onClick={() => setOpenMobile(false)}
            />
            <div className="fixed left-0 right-0 top-[79px] bg-white border-b border-black/10 shadow-[0_18px_45px_rgba(0,0,0,0.15)]">
              <div className="mx-auto w-full px-4 py-4" style={{ maxWidth: 1120 }}>
                <div className="grid gap-2">
                  {items.map((it) => (
                    <a
                      key={it.id}
                      href={it.href}
                      onClick={() => setOpenMobile(false)}
                      className={cn(
                        "rounded-xl px-4 py-3 text-[16px] font-bold",
                        active === it.id ? "bg-slate-900/5 text-slate-900" : "text-slate-700 hover:bg-slate-900/5"
                      )}
                    >
                      {it.label}
                    </a>
                  ))}
                  <a
                    href="#contact"
                    onClick={() => setOpenMobile(false)}
                    className="mt-2 rounded-xl bg-[var(--id-red)] px-4 py-3 text-center text-[16px] font-extrabold text-white"
                  >
                    Contact
                  </a>
                  <button
                    className="rounded-xl border border-black/10 bg-white px-4 py-3 text-[14px] font-bold"
                    onClick={() => setOpenMobile(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}
