import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";

export const metadata: Metadata = {
  title: "IDECN — Indonesia Education & Cultural Network",
  description:
    "A nonprofit fostering cross-cultural understanding, educational opportunities, and community connections between Indonesia and the U.S.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {/* background layers */}
        <div className="site-bg" aria-hidden />
        <div className="batik-bg" aria-hidden />

        <Navbar />

        {/* padding top to avoid being covered by fixed navbar */}
        <main style={{ paddingTop: 96 }}>{children}</main>
      </body>
    </html>
  );
}
