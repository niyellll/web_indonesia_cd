import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";

export const metadata: Metadata = {
  title: "IDECN — Indonesia Education & Cultural Network",
  description:
    "A U.S.-based nonprofit fostering cross-cultural understanding, educational opportunities, and community connections between Indonesia and the United States.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="batik-bg" aria-hidden />
        <div className="sheet">
          <Navbar />
          {children}
          <footer className="footer">
            <div className="wrap flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <div>© {new Date().getFullYear()} IDECN. All rights reserved.</div>
              <div className="flex gap-3">
                <a href="#top">Top</a>
                <span>•</span>
                <a href="#contact">Contact</a>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
