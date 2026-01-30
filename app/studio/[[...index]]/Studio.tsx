"use client";

import { NextStudio } from "next-sanity/studio";
import config from "../../../sanity.config";

export default function Studio() {
  const ok =
    !!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID &&
    !!process.env.NEXT_PUBLIC_SANITY_DATASET;

  if (!ok) {
    return (
      <main className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
        <div className="rounded-2xl border border-[var(--line)] bg-white/80 p-6">
          <h1 className="text-2xl font-bold">CMS Setup Required</h1>
          <p className="mt-2 text-sm text-[var(--muted)]">
            Set these env vars in Vercel:
          </p>
          <pre className="mt-4 overflow-auto rounded-xl border border-[var(--line)] bg-white/70 p-4 text-xs">
NEXT_PUBLIC_SANITY_PROJECT_ID=xxxx
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2025-01-01
          </pre>
        </div>
      </main>
    );
  }

  return <NextStudio config={config} />;
}
