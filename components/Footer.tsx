export default function Footer() {
  return (
    <footer className="border-t border-[var(--line)] bg-white/70">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <p className="text-sm font-extrabold">IDECN</p>
            <p className="mt-2 text-sm text-[var(--muted)] leading-relaxed">
              Indonesia Education & Cultural Network — fostering education, culture, and community connections
              between Indonesia and the United States.
            </p>
          </div>
          <div>
            <p className="text-sm font-bold">Primary audience</p>
            <p className="mt-2 text-sm text-[var(--muted)] leading-relaxed">
              Donors • Investors • Partners • Community supporters
            </p>
          </div>
          <div>
            <p className="text-sm font-bold">Theme</p>
            <p className="mt-2 text-sm text-[var(--muted)] leading-relaxed">
              Red–White–Blue + Batik identity • Light proposal-style layout
            </p>
          </div>
        </div>

        <div className="mt-8 border-t border-[var(--line)] pt-6 text-xs text-[var(--muted)]">
          © {new Date().getFullYear()} IDECN. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
