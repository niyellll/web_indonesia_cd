import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";

export const metadata: Metadata = {
  title: "IDECN — Indonesia Education & Cultural Network",
  description:
    "A nonprofit organization fostering cross-cultural understanding, educational opportunities, and community connections between Indonesia and the U.S.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {/* batik background (halus) */}
        <div className="pointer-events-none fixed inset-0 -z-10 batik opacity-[0.07]" />
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
