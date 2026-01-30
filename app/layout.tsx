import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "IDECN — Indonesia Education & Cultural Network",
  description:
    "A U.S.-based nonprofit dedicated to fostering cross-cultural understanding, educational opportunities, and community connections between Indonesia and the United States.",
};

function ThemeScript() {
  // Set theme sebelum React hydrate (biar ga “kedip”)
  const code = `
(function() {
  try {
    var stored = localStorage.getItem("theme");
    var prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    var isDark = stored ? stored === "dark" : prefersDark;
    var root = document.documentElement;
    if (isDark) root.classList.add("dark"); else root.classList.remove("dark");
  } catch (e) {}
})();
`.trim();

  return <script dangerouslySetInnerHTML={{ __html: code }} />;
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ThemeScript />
      </head>
      <body className={`${inter.className} body-root`}>
        {/* Background layers */}
        <div className="bg-wash" aria-hidden />
        <div className="bg-batik" aria-hidden />

        <Navbar />
        {children}
      </body>
    </html>
  );
}
