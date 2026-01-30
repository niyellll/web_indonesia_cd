import { NextStudio } from "next-sanity/studio";
import config from "../../../sanity.config";

export const dynamic = "force-dynamic";

export default function StudioPage() {
  // If env not set, show a friendly message instead of crashing
  if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || !process.env.NEXT_PUBLIC_SANITY_DATASET) {
    return (
      <main className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
        <div className="card p-6">
          <h1 className="text-2xl font-extrabold">CMS Setup Required</h1>
          <p className="mt-3 text-sm text-[var(--muted)]">
            Add these env vars in Vercel / .env.local:
          </p>
          <pre className="mt-3 rounded-xl border border-[var(--line)] bg-white/70 p-4 text-xs overflow-auto">
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

