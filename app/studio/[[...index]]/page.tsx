"use client";

import dynamicImport from "next/dynamic";

const Studio = dynamicImport(() => import("./Studio"), { ssr: false });

export default function StudioPage() {
  return <Studio />;
}
