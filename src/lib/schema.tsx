import React from "react";

export const ORGANIZATION_ID = "https://portaiengineers.com/#organization";
export const WEBSITE_ID = "https://portaiengineers.com/#website";
export const CANONICAL_BASE = "https://portaiengineers.com";

export const TARGET_COUNTRIES = [
  { "@type": "Country", name: "India" },
  { "@type": "Country", name: "United Arab Emirates" },
  { "@type": "Country", name: "Saudi Arabia" },
  { "@type": "Country", name: "Qatar" },
];

export function globalOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORGANIZATION_ID,
    name: "Port AI Engineers Pvt. Ltd.",
    legalName: "Port AI Engineers Private Limited",
    url: "https://portaiengineers.com/",
    logo: "https://portaiengineers.com/Logo.jpeg",
    email: "contact@portaiengineers.com",
    telephone: "+91 9440584273",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kukatpally",
      addressRegion: "Telangana",
      postalCode: "500072",
      addressCountry: "IN",
    },
    areaServed: TARGET_COUNTRIES,
    knowsAbout: [
      "P&ID Design and Drafting",
      "Process Flow Diagrams (PFD)",
      "3D Piping Design",
      "General Arrangement (GA) Drawings",
      "Industrial Plant Layout",
      "Piping Stress Analysis",
      "Fire Evacuation CAD Drawings",
      "Engineering Design Outsourcing",
    ],
    sameAs: [
      "https://www.linkedin.com/company/port-ai/",
      "https://www.instagram.com/portaiengineers",
      "https://www.facebook.com/profile.php?id=61588678006058",
      "https://youtube.com/@portaiengineers",
    ],
  };
}

export function globalWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: "https://portaiengineers.com/",
    name: "Port AI Engineers",
    publisher: {
      "@id": ORGANIZATION_ID,
    },
  };
}

export function createBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function createWebPageSchema({
  id,
  url,
  name,
  description,
  type = "WebPage",
}: {
  id: string;
  url: string;
  name: string;
  description: string;
  type?: "WebPage" | "CollectionPage" | "ContactPage";
}) {
  return {
    "@context": "https://schema.org",
    "@type": type,
    "@id": id,
    url,
    name,
    description,
    isPartOf: {
      "@id": WEBSITE_ID,
    },
    about: {
      "@id": ORGANIZATION_ID,
    },
  };
}

export function createItemListSchema({
  name,
  description,
  items,
}: {
  name?: string;
  description?: string;
  items: { name: string; url: string }[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    ...(name ? { name } : {}),
    ...(description ? { description } : {}),
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      url: item.url,
    })),
  };
}

export function createServiceSchema({
  name,
  description,
  url,
  serviceType,
  image,
  areaServed = TARGET_COUNTRIES,
}: {
  name: string;
  description: string;
  url: string;
  serviceType: string;
  image?: string;
  areaServed?: typeof TARGET_COUNTRIES;
}) {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url,
    serviceType,
    provider: {
      "@id": ORGANIZATION_ID,
    },
    areaServed,
  };

  if (image) {
    schema.image = image.startsWith("http")
      ? image
      : `https://portaiengineers.com${image.startsWith("/") ? image : `/${image}`}`;
  }

  return schema;
}

export function createFaqSchema(
  faqs: { question: string; answer: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function parseDateToIsoOrOmit(dateStr?: string): string | undefined {
  if (!dateStr) return undefined;
  const trimmed = dateStr.trim();

  if (/^\d{4}-\d{2}-\d{2}$/.test(trimmed)) {
    return trimmed;
  }

  const months: Record<string, string> = {
    january: "01",
    jan: "01",
    february: "02",
    feb: "02",
    march: "03",
    mar: "03",
    april: "04",
    apr: "04",
    may: "05",
    june: "06",
    jun: "06",
    july: "07",
    jul: "07",
    august: "08",
    aug: "08",
    september: "09",
    sep: "09",
    sept: "09",
    october: "10",
    oct: "10",
    november: "11",
    nov: "11",
    december: "12",
    dec: "12",
  };

  const fullMatch = trimmed.match(/^([A-Za-z]+)\s+(\d{1,2}),?\s+(\d{4})$/);
  if (fullMatch) {
    const [, monthName, dayStr, yearStr] = fullMatch;
    const m = months[monthName.toLowerCase()];
    if (m) {
      return `${yearStr}-${m}-${dayStr.padStart(2, "0")}`;
    }
  }

  const monthYearMatch = trimmed.match(/^([A-Za-z]+)\s+(\d{4})$/);
  if (monthYearMatch) {
    const [, monthName, yearStr] = monthYearMatch;
    const m = months[monthName.toLowerCase()];
    if (m) {
      return `${yearStr}-${m}-01`;
    }
  }

  return undefined;
}

export function createBlogPostingSchema({
  id,
  url,
  headline,
  description,
  image,
  datePublished,
  dateModified,
  authorName,
  type = "BlogPosting",
}: {
  id: string;
  url: string;
  headline: string;
  description: string;
  image?: string;
  datePublished?: string;
  dateModified?: string;
  authorName: string;
  type?: "BlogPosting" | "Article";
}) {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": type,
    "@id": id,
    mainEntityOfPage: url,
    headline,
    description,
    author: {
      "@type": "Organization",
      name: authorName,
    },
    publisher: {
      "@id": ORGANIZATION_ID,
    },
  };

  if (image) {
    schema.image = image.startsWith("http")
      ? image
      : `https://portaiengineers.com${image.startsWith("/") ? image : `/${image}`}`;
  }

  const isoDate = parseDateToIsoOrOmit(datePublished);
  if (isoDate) {
    schema.datePublished = isoDate;
  }

  const isoModified = parseDateToIsoOrOmit(dateModified);
  if (isoModified) {
    schema.dateModified = isoModified;
  }

  return schema;
}

export function JsonLd({
  schema,
}: {
  schema: Record<string, unknown> | Array<Record<string, unknown>>;
}) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
      }}
    />
  );
}
