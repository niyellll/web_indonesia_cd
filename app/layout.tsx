import type { ReactNode } from "react";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "IDECN — Indonesia Education & Cultural Network",
  description:
    "A nonprofit organization fostering cross-cultural understanding, educational opportunities, and community connections between Indonesia and the U.S.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="relative min-h-screen">
          {/* background layers */}
          <div className="site-bg pointer-events-none absolute inset-0 -z-20" aria-hidden />
          <div className="batik pointer-events-none absolute inset-0 -z-10 opacity-[0.08]" aria-hidden />

          {/* top ribbon (red-white-blue) */}
          <div className="h-1 w-full bg-[linear-gradient(90deg,#d32f2f_0%,#ffffff_50%,#0b2d5c_100%)]" />

          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
