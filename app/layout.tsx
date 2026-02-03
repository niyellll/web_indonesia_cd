import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import { navItems, site } from "../lib/cms";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: `${site.orgShort} — ${site.orgName}`,
  description: site.tagline,
};

const themeInitScript = `
(function () {
  try {
    var key = "idecn-theme";
    var mode = localStorage.getItem(key) || "system";
    var prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    var resolved = (mode === "system") ? (prefersDark ? "dark" : "light") : mode;
    document.documentElement.dataset.theme = mode;
    document.documentElement.classList.toggle("dark", resolved === "dark");
  } catch (e) {}
})();
`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>

      <body className="min-h-screen bg-slate-50 text-slate-900 text-[16px] md:text-[17px] selection:bg-red-600 selection:text-white dark:bg-slate-950 dark:text-slate-100">
        {/* Batik layer (stronger but masked, still readable) */}
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 z-0"
          style={{
            backgroundImage: "url('/batik-pattern.svg')",
            backgroundRepeat: "repeat",
            backgroundPosition: "center",
            backgroundSize: "760px 760px",
            opacity: 0.22,
            filter: "grayscale(1) contrast(1.55) brightness(1.02)",
            mixBlendMode: "multiply",
            WebkitMaskImage:
              "radial-gradient(1400px 700px at 50% 20%, rgba(0,0,0,.95) 0%, rgba(0,0,0,.75) 55%, transparent 100%)",
            maskImage:
              "radial-gradient(1400px 700px at 50% 20%, rgba(0,0,0,.95) 0%, rgba(0,0,0,.75) 55%, transparent 100%)",
          }}
        />

        {/* Dark batik (invert, controlled) */}
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 z-0 hidden dark:block"
          style={{
            backgroundImage: "url('/batik-pattern.svg')",
            backgroundRepeat: "repeat",
            backgroundPosition: "center",
            backgroundSize: "760px 760px",
            opacity: 0.16,
            filter: "grayscale(1) invert(1) contrast(1.15) brightness(0.9)",
            mixBlendMode: "screen",
            WebkitMaskImage:
              "radial-gradient(1400px 700px at 50% 20%, rgba(0,0,0,.95) 0%, rgba(0,0,0,.7) 55%, transparent 100%)",
            maskImage:
              "radial-gradient(1400px 700px at 50% 20%, rgba(0,0,0,.95) 0%, rgba(0,0,0,.7) 55%, transparent 100%)",
          }}
        />

        {/* Readability wash */}
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 z-0
                     bg-gradient-to-b from-white/78 via-white/48 to-white/18
                     dark:from-slate-950/88 dark:via-slate-950/60 dark:to-slate-950/30"
        />

        {/* Premium glows (not like web2) */}
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 z-0
                     [background:radial-gradient(900px_520px_at_18%_20%,rgba(239,68,68,0.12),transparent_60%)]
                     dark:[background:radial-gradient(900px_520px_at_18%_20%,rgba(239,68,68,0.18),transparent_60%)]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 z-0
                     [background:radial-gradient(980px_560px_at_78%_18%,rgba(59,130,246,0.12),transparent_60%)]
                     dark:[background:radial-gradient(980px_560px_at_78%_18%,rgba(59,130,246,0.18),transparent_60%)]"
        />

        <div className="relative z-10">
          <Navbar brandShort={site.orgShort} items={navItems} contactHref={`mailto:${site.email}`} />
          {children}
        </div>
      </body>
    </html>
  );
}
