import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { schemaTypes } from "./sanity/schemaTypes";

export default defineConfig({
  name: "default",
  title: "IDECN CMS",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "missing",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2025-01-01",
  basePath: "/studio",
  plugins: [deskTool()],
  schema: { types: schemaTypes },
});

