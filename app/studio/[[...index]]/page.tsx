import dynamicImport from "next/dynamic";

export const runtime = "nodejs";
export const revalidate = 0;

const Studio = dynamicImport(() => import("./Studio"), { ssr: false });

export default function StudioPage() {
  return <Studio />;
}
