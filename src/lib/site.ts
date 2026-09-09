// Non-translatable constants + structural data. Customer-facing copy lives in
// src/lib/i18n.ts.

import type { ServiceSlug } from "./i18n";

export const site = {
  name: "Victorious Aluminium",
  shortName: "Victorious",
  tagline: "Affordable aluminium manufacturing, design and installation",
  phoneDisplay: "081 701 5241",
  phoneIntl: "27817015241", // used for tel: and wa.me
  email: "",
  reviewUrl: "https://g.page/r/CWvp1EIWGBVeEBI/review",
  url: "https://www.victoriousaluminium.co.za",
};

// Navigation: stable hrefs + a dictionary key for the label.
export const nav: {
  key: "home" | "services" | "gallery" | "about" | "contact";
  href: string;
}[] = [
  { key: "home", href: "/" },
  { key: "services", href: "/services" },
  { key: "gallery", href: "/gallery" },
  { key: "about", href: "/about" },
  { key: "contact", href: "/contact" },
];

// Structural service list (order + numbering). Text is resolved per-locale.
export const serviceMeta: { slug: ServiceSlug; index: string }[] = [
  { slug: "windows", index: "01" },
  { slug: "enclosures", index: "02" },
  { slug: "balustrades", index: "03" },
  { slug: "doors", index: "04" },
  { slug: "partitions-showers", index: "05" },
];
