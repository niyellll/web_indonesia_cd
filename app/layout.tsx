// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import Navbar from "../components/Navbar";

export const metadata: Metadata = {
  title: "IDECN — Indonesia Education & Cultural Network",
  description:
    "A U.S.-based nonprofit dedicated to fostering cross-cultural understanding, educational opportunities, and community connections between Indonesia and the United States.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {/* Background layers */}
        <div className="site-bg" aria-hidden="true" />
        <div className="batik-bg" aria-hidden="true" />

        <Navbar />
        <main id="content" className="page">
          {children}
        </main>
      </body>
    </html>
  );
}
