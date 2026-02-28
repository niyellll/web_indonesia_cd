"use client";

import { useAnimeEffects } from "./AnimeEffects";

export default function AnimatedPageWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  useAnimeEffects();
  return <>{children}</>;
}
