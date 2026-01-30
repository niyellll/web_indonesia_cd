import dynamic from "next/dynamic";

export const dynamic = "force-dynamic";

const Studio = dynamic(() => import("./Studio"), { ssr: false });

export default function StudioPage() {
  return <Studio />;
}
