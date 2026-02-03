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
(function() {
  try {
    var key = 'idecn-theme';
    var mode = localStorage.getItem(key) || 'system';
    var prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    var resolved = (mode === 'system') ? (prefersDark ? 'dark' : 'light') : mode;
    document.documentElement.dataset.theme = mode;
    document.documentElement.classList.toggle('dark', resolved === 'dark');
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
        {/* batik light */}
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 z-0 dark:hidden"
          style={{
            backgroundImage: "url('/batik-pattern.svg')",
            backgroundRepeat: "repeat",
            backgroundPosition: "center",
            backgroundSize: "720px 720px",
            opacity: 0.16,
            mixBlendMode: "multiply",
            filter: "grayscale(1) contrast(1.45) brightness(1.02)",
          }}
        />
        {/* batik dark */}
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 z-0 hidden dark:block"
          style={{
            backgroundImage: "url('/batik-pattern.svg')",
            backgroundRepeat: "repeat",
            backgroundPosition: "center",
            backgroundSize: "720px 720px",
            opacity: 0.12,
            filter: "grayscale(1) invert(1) contrast(1.1) brightness(0.9)",
          }}
        />

        {/* readability wash (lebih kuat di light, supaya teks tetap aman) */}
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 z-0
                     bg-gradient-to-b from-white/72 via-white/42 to-white/18
                     dark:from-slate-950/85 dark:via-slate-950/55 dark:to-slate-950/30"
        />

        {/* soft glows */}
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 z-0
                     [background:radial-gradient(900px_540px_at_20%_20%,rgba(239,68,68,0.12),transparent_60%)]
                     dark:[background:radial-gradient(900px_540px_at_20%_20%,rgba(239,68,68,0.18),transparent_60%)]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 z-0
                     [background:radial-gradient(980px_560px_at_75%_25%,rgba(59,130,246,0.12),transparent_60%)]
                     dark:[background:radial-gradient(980px_560px_at_75%_25%,rgba(59,130,246,0.18),transparent_60%)]"
        />

        <div className="relative z-10">
          <Navbar brandShort={site.orgShort} items={navItems} contactHref={`mailto:${site.email}`} />
          {children}
        </div>
      </body>
    </html>
  );
}
