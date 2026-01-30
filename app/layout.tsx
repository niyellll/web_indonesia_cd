import "./globals.css";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "IDECN — Indonesia ↔ U.S.",
  description:
    "A U.S.-based nonprofit dedicated to fostering cross-cultural understanding, educational opportunities, and community connections between Indonesia and the United States.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {/* Background layers */}
        <div className="bg-base" aria-hidden />
        <div className="bg-batik" aria-hidden />
        <div className="bg-vignette" aria-hidden />

        <Navbar />
        {children}
      </body>
    </html>
  );
}
