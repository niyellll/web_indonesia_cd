import "./globals.css";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "IDECN — Indonesia Education & Cultural Network",
  description:
    "A nonprofit organization fostering cross-cultural understanding, educational opportunities, and community connections between Indonesia and the U.S.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="proposal-bg">
        <div className="relative min-h-screen">
          <div className="site-bg pointer-events-none absolute inset-0 -z-20" aria-hidden />
          <div className="batik pointer-events-none absolute inset-0 -z-10" aria-hidden />
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
