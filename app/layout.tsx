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
      <body className="min-h-screen text-[16px] sm:text-[17px] text-[var(--ink)]">
        {/* background batik */}
        <div className="pointer-events-none fixed inset-0 -z-10">
          <div className="absolute inset-0 bg-white" />
          <div className="absolute inset-0 batik opacity-[0.08]" />
        </div>

        <Navbar />
        {children}
      </body>
    </html>
  );
}
