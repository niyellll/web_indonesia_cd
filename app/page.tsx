export default function HomePage() {
  return (
    <main className="space-y-28 px-4 py-16 md:px-10 lg:px-20">

      {/* ================= WHO WE ARE ================= */}
      <section id="who-we-are" className="max-w-5xl">
        <h1 className="text-4xl font-semibold tracking-tight">
          Indonesia Education & Cultural Network
        </h1>
        <p className="mt-6 text-lg text-[var(--muted)] leading-relaxed">
          IDECN is a nonprofit organization based in the United States dedicated to
          fostering cross-cultural understanding, educational opportunities, and
          community connections between Indonesia and the U.S.
        </p>
      </section>

      {/* ================= MISSION ================= */}
      <section className="rounded-2xl bg-[var(--surface)] p-10 shadow-sm">
        <h2 className="text-3xl font-semibold">Mission</h2>
        <p className="mt-4 text-lg text-[var(--muted)] leading-relaxed max-w-3xl">
          To enhance mutual understanding between Indonesia and the United States by
          providing resources, support, and opportunities for students, educators,
          professionals, and cultural enthusiasts.
        </p>
      </section>

      {/* ================= FOCUS AREAS ================= */}
      <section>
        <h2 className="text-3xl font-semibold">Focus Areas</h2>

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            "Education",
            "Cultural Exchange",
            "Professional Development",
            "Community Support",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-6"
            >
              <p className="text-lg font-semibold">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= FEATURED EVENT ================= */}
      <section
        id="featured-event"
        className="rounded-2xl bg-[var(--accent)] p-10 text-white"
      >
        <p className="text-sm uppercase tracking-wider opacity-90">
          Featured Event
        </p>

        <h2 className="mt-3 text-3xl font-semibold">
          Indonesia Culinary Day on the Creek
        </h2>

        <p className="mt-4 max-w-2xl leading-relaxed opacity-95">
          A public celebration of Indonesian culture through food, art, music, and
          community engagement. This event showcases IDECN’s real-world impact and
          community involvement.
        </p>

        <p className="mt-4 text-sm opacity-90">
          August 2, 2025 • Maryland, USA
        </p>
      </section>

      {/* ================= CALL TO ACTION ================= */}
      <section className="text-center max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold">
          Partner with IDECN
        </h2>

        <p className="mt-4 text-lg text-[var(--muted)]">
          We welcome donors, investors, and partners to collaborate with us in
          strengthening education and cultural connections between Indonesia and the U.S.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="#get-involved"
            className="rounded-xl bg-[var(--accent)] px-6 py-3 font-semibold text-white hover:opacity-90"
          >
            Become a Partner
          </a>

          <a
            href="#contact"
            className="rounded-xl border border-[var(--line)] bg-[var(--surface)] px-6 py-3 font-semibold hover:bg-white"
          >
            Contact Us
          </a>
        </div>
      </section>

      {/* ================= ABOUT IDECN ================= */}
      <section id="about" className="max-w-5xl">
        <h2 className="text-3xl font-semibold">About IDECN</h2>
        <p className="mt-4 text-lg text-[var(--muted)] leading-relaxed">
          Established in 2024, IDECN serves as a platform for collaboration between
          Indonesian and American communities, facilitating initiatives that enhance
          mutual understanding, educational access, cultural awareness, and professional
          networking.
        </p>
      </section>

      {/* ================= PROGRAMS ================= */}
      <section id="programs">
        <h2 className="text-3xl font-semibold">Programs</h2>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Education",
              desc: "Scholarships, exchange programs, language learning, and academic guidance.",
            },
            {
              title: "Cultural Exchange",
              desc: "Festivals, cultural showcases, and cross-cultural dialogues.",
            },
            {
              title: "Professional Development",
              desc: "Networking, mentorship, and career-focused workshops.",
            },
          ].map((p) => (
            <div
              key={p.title}
              className="rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-6"
            >
              <h3 className="text-xl font-semibold">{p.title}</h3>
              <p className="mt-3 text-[var(--muted)] leading-relaxed">
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= EVENTS / PORTFOLIO ================= */}
      <section id="events" className="max-w-5xl">
        <h2 className="text-3xl font-semibold">Events & Portfolio</h2>

        <div className="mt-6 rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-8">
          <h3 className="text-xl font-semibold">
            Indonesia Culinary Day on the Creek
          </h3>
          <p className="mt-3 text-[var(--muted)] leading-relaxed">
            An annual cultural event organized in collaboration with local partners
            to promote Indonesian culture and strengthen community ties in the U.S.
          </p>
        </div>
      </section>

      {/* ================= GET INVOLVED ================= */}
      <section id="get-involved">
        <h2 className="text-3xl font-semibold">Get Involved</h2>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {["Donor", "Partner", "Volunteer"].map((role) => (
            <div
              key={role}
              className="rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-6"
            >
              <h3 className="text-xl font-semibold">{role}</h3>
              <p className="mt-3 text-[var(--muted)]">
                Join us as a {role.toLowerCase()} and be part of our mission.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section id="contact" className="max-w-4xl">
        <h2 className="text-3xl font-semibold">Contact</h2>
        <p className="mt-4 text-lg text-[var(--muted)]">
          For partnerships, donations, or general inquiries:
        </p>

        <p className="mt-4 text-xl font-semibold">
          hello@idecn.org
        </p>
      </section>

    </main>
  );
}
