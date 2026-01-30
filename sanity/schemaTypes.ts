import { defineField, defineType } from "sanity";

const siteSettings = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({ name: "orgName", type: "string", title: "Organization Name" }),
    defineField({ name: "tagline", type: "text", title: "Tagline" }),
    defineField({ name: "purpose", type: "text", title: "Purpose" }),
    defineField({ name: "audience", type: "array", title: "Audience", of: [{ type: "string" }] }),
    defineField({ name: "email", type: "string", title: "Email" }),
    defineField({ name: "proposalUrl", type: "string", title: "Proposal URL (PDF path)" }),
    defineField({ name: "themeNote", type: "string", title: "Theme Note" }),
  ],
});

const program = defineType({
  name: "program",
  title: "Programs",
  type: "document",
  fields: [
    defineField({ name: "order", type: "number", title: "Order", initialValue: 1 }),
    defineField({ name: "title", type: "string", title: "Title" }),
    defineField({ name: "bullets", type: "array", title: "Bullets", of: [{ type: "string" }] }),
  ],
});

const event = defineType({
  name: "event",
  title: "Events (Portfolio)",
  type: "document",
  fields: [
    defineField({ name: "order", type: "number", title: "Order", initialValue: 1 }),
    defineField({ name: "title", type: "string", title: "Title" }),
    defineField({ name: "dateText", type: "string", title: "Date Text" }),
    defineField({ name: "location", type: "string", title: "Location" }),
    defineField({ name: "summary", type: "text", title: "Summary" }),
    defineField({ name: "highlights", type: "array", title: "Highlights", of: [{ type: "string" }] }),
    defineField({ name: "featured", type: "boolean", title: "Featured", initialValue: false }),
  ],
});

const partner = defineType({
  name: "partner",
  title: "Partners",
  type: "document",
  fields: [
    defineField({ name: "order", type: "number", title: "Order", initialValue: 1 }),
    defineField({ name: "name", type: "string", title: "Name" }),
    defineField({ name: "type", type: "string", title: "Type" }),
    defineField({ name: "website", type: "url", title: "Website" }),
  ],
});

export const schemaTypes = [siteSettings, program, event, partner];

