### page.tsx

```tsx
import React from "react";

export const metadata = {
  title: "IDECN — Indonesia Education & Cultural Network",
  description:
    "Fostering cross-cultural understanding and educational opportunities between Indonesia and the U.S.",
};

const focusAreas = [
  "Education",
  "Cultural Exchange",
  "Professional Development",
  "Community Support",
];

const programs = [
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
];

function Hero() {
  return (
    <header className="max-w-5xl">
      <h1 className="text-4xl font-semibold tracking-tight">
        Indonesia Education & Cultural Network
      </h1>
      <p className="mt-6 text-lg text-[var(--muted)] leading-relaxed">
        IDECN is a nonprofit organization based in the United States dedicated to
        fostering cross-cultural understanding, educational opportunities, and
        community connections between Indonesia and the U.S.
      </p>
    </header>
  );
}

function FocusAreas() {
  return (
    <section aria-labelledby="focus-heading">
      <h2 id="focus-heading" className="text-3xl font-semibold">
        Focus Areas
      </h2>

      <ul className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4" role="list">
        {focusAreas.map((item) => (
          <li
            key={item}
            className="rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-6"
          >
            <p className="text-lg font-semibold">{item}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

function FeaturedEvent() {
  return (
    <section
      id="featured-event"
      className="rounded-2xl bg-[var(--accent)] p-10 text-white"
      aria-labelledby="featured-event-heading"
    >
      <p className="text-sm uppercase tracking-wider opacity-90">Featured Event</p>

      <h2 id="featured-event-heading" className="mt-3 text-3xl font-semibold">
        Indonesia Culinary Day on the Creek
      </h2>

      <p className="mt-4 max-w-2xl leading-relaxed opacity-95">
        A public celebration of Indonesian culture through food, art, music, and
        community engagement. This event showcases IDECN’s real-world impact and
        community involvement.
      </p>

      <p className="mt-4 text-sm opacity-90">
        <time dateTime="2025-08-02">August 2, 2025</time> • Maryland, USA
      </p>
    </section>
  );
}

function Programs() {
  return (
    <section id="programs" aria-labelledby="programs-heading">
      <h2 id="programs-heading" className="text-3xl font-semibold">
        Programs
      </h2>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {programs.map((p) => (
          <article
            key={p.title}
            className="rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-6"
            aria-labelledby={`program-${p.title}`}
          >
            <h3 id={`program-${p.title}`} className="text-xl font-semibold">
              {p.title}
            </h3>
            <p className="mt-3 text-[var(--muted)] leading-relaxed">{p.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function GetInvolved() {
  const roles = ["Donor", "Partner", "Volunteer"];
  return (
    <section id="get-involved" aria-labelledby="get-involved-heading">
      <h2 id="get-involved-heading" className="text-3xl font-semibold">
        Get Involved
      </h2>

      <ul className="mt-8 grid gap-6 md:grid-cols-3" role="list">
        {roles.map((role) => (
          <li
            key={role}
            className="rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-6"
          >
            <h3 className="text-xl font-semibold">{role}</h3>
            <p className="mt-3 text-[var(--muted)]">
              Join us as a {role.toLowerCase()} and be part of our mission.
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="max-w-4xl" aria-labelledby="contact-heading">
      <h2 id="contact-heading" className="text-3xl font-semibold">
        Contact
      </h2>
      <p className="mt-4 text-lg text-[var(--muted)]">
        For partnerships, donations, or general inquiries:
      </p>

      <p className="mt-4 text-xl font-semibold">
        <a href="mailto:hello@idecn.org" className="underline">
          hello@idecn.org
        </a>
      </p>
    </section>
  );
}

function Footer() {
  return (
    <footer className="max-w-5xl text-sm text-[var(--muted)]">
      <p>© {new Date().getFullYear()} Indonesia Education & Cultural Network</p>
    </footer>
  );
}

export default function Page(): JSX.Element {
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Indonesia Education & Cultural Network (IDECN)",
    url: "https://idecn.org",
    email: "hello@idecn.org",
    sameAs: [],
  };

  return (
    <>
      {/* JSON-LD for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
      />

      <main className="space-y-28 px-4 py-16 md:px-10 lg:px-20" role="main">
        <Hero />

        <section
          aria-labelledby="mission-heading"
          className="rounded-2xl bg-[var(--surface)] p-10 shadow-sm"
        >
          <h2 id="mission-heading" className="text-3xl font-semibold">
            Mission
          </h2>
          <p className="mt-4 text-lg text-[var(--muted)] leading-relaxed max-w-3xl">
            To enhance mutual understanding between Indonesia and the United States by
            providing resources, support, and opportunities for students, educators,
            professionals, and cultural enthusiasts.
          </p>
        </section>

        <FocusAreas />

        <FeaturedEvent />

        <section className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold">Partner with IDECN</h2>
          <p className="mt-4 text-lg text-[var(--muted)]">
            We welcome donors, investors, and partners to collaborate with us in
            strengthening education and cultural connections between Indonesia and the U.S.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="#get-involved"
              className="rounded-xl bg-[var(--accent)] px-6 py-3 font-semibold text-white hover:opacity-90"
              aria-label="Become a partner"
            >
              Become a Partner
            </a>

            <a
              href="#contact"
              className="rounded-xl border border-[var(--line)] bg-[var(--surface)] px-6 py-3 font-semibold hover:bg-white"
              aria-label="Contact IDECN"
            >
              Contact Us
            </a>
          </div>
        </section>

        <section id="about" className="max-w-5xl">
          <h2 className="text-3xl font-semibold">About IDECN</h2>
          <p className="mt-4 text-lg text-[var(--muted)] leading-relaxed">
            Established in 2024, IDECN serves as a platform for collaboration between
            Indonesian and American communities, facilitating initiatives that enhance
            mutual understanding, educational access, cultural awareness, and professional
            networking.
          </p>
        </section>

        <Programs />

        <section id="events" className="max-w-5xl">
          <h2 className="text-3xl font-semibold">Events & Portfolio</h2>

          <div className="mt-6 rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-8">
            <h3 className="text-xl font-semibold">Indonesia Culinary Day on the Creek</h3>
            <p className="mt-3 text-[var(--muted)] leading-relaxed">
              An annual cultural event organized in collaboration with local partners
              to promote Indonesian culture and strengthen community ties in the U.S.
            </p>
          </div>
        </section>

        <GetInvolved />

        <Contact />

        <Footer />
      </main>
    </>
  );
}
```
