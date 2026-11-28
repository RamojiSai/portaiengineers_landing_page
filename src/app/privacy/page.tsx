import type { Metadata } from "next";
import Link from "next/link";
import {
  JsonLd,
  createBreadcrumbSchema,
  createWebPageSchema,
} from "../../lib/schema";

const PAGE_URL = "https://portaiengineers.com/privacy/";

export const metadata: Metadata = {
  title: "Privacy & NDA Enquiry Data Policy",
  description:
    "How Port AI Engineers Private Limited handles enquiry data, non-disclosure (NDA) sample requests, and website analytics.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Privacy & NDA Enquiry Data Policy | Port AI Engineers",
    description:
      "How Port AI Engineers Private Limited handles enquiry data, non-disclosure (NDA) sample requests, and website analytics.",
    url: PAGE_URL,
    siteName: "Port AI Engineers",
    locale: "en_US",
    type: "website",
  },
};

export default function PrivacyPolicyPage() {
  const webPageSchema = createWebPageSchema({
    id: `${PAGE_URL}#webpage`,
    url: PAGE_URL,
    name: "Privacy & NDA Enquiry Data Handling Policy | Port AI Engineers Private Limited",
    description:
      "Enquiry confidentiality, NDA handling practices, and analytics measurement notice for Port AI Engineers Private Limited.",
  });

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", url: "https://portaiengineers.com/" },
    { name: "Privacy & NDA Policy", url: PAGE_URL },
  ]);

  return (
    <div className="min-h-screen bg-[var(--color-bg)] px-6 py-16 text-[var(--color-text)] sm:px-10 sm:py-20">
      <JsonLd schema={webPageSchema} />
      <JsonLd schema={breadcrumbSchema} />

      <article className="mx-auto max-w-4xl space-y-8 rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-[0_14px_34px_var(--color-card-shadow)] sm:p-10">
        <nav
          aria-label="Breadcrumb"
          className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-primary)]"
        >
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <span aria-hidden="true" className="px-2 text-[var(--color-muted)]">
            /
          </span>
          <span aria-current="page" className="text-[var(--color-text)]">
            Privacy &amp; NDA Policy
          </span>
        </nav>

        <header className="space-y-3 border-b border-[var(--color-border)] pb-6">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-primary)]">
            Port AI Engineers Private Limited
          </span>
          <h1 className="text-3xl font-semibold tracking-tight text-[var(--color-text)] sm:text-4xl">
            Privacy &amp; NDA Enquiry Data Policy
          </h1>
          <p className="text-sm text-[var(--color-muted)]">
            Effective for enquiries and interactions on https://portaiengineers.com/
          </p>
        </header>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-[var(--color-text)]">
            1. Information Collected via Quote &amp; Contact Forms
          </h2>
          <p className="text-sm leading-relaxed text-[var(--color-muted)]">
            When you submit an enquiry through our website contact forms, we collect only the details you voluntarily provide: your name, organization name (optional), work email address, phone/WhatsApp number (optional), selected engineering discipline, project region/software preference (optional), and project scope summary. Forms are routed via Web3Forms solely to our engineering enquiries desk to prepare an initial technical response within 24 working hours.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-[var(--color-text)]">
            2. Technical Drawings, Confidentiality &amp; NDAs
          </h2>
          <p className="text-sm leading-relaxed text-[var(--color-muted)]">
            Our public website enquiry form does not accept direct drawing or document uploads. When a project requires proprietary P&amp;IDs, plot plans, 3D models, or specifications to be shared — or when you request anonymized sample documentation from Port AI Engineers Private Limited — our team executes a mutual or client Non-Disclosure Agreement (NDA) and arranges a secure file-exchange workflow after initial contact.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-[var(--color-text)]">
            3. Website Analytics &amp; Measurement
          </h2>
          <p className="text-sm leading-relaxed text-[var(--color-muted)]">
            We use Google Analytics 4 (Measurement ID: G-EC4J1LSR38) to understand aggregate page traffic, service-page engagement, and enquiry interaction trends (such as quote button clicks, phone/WhatsApp/calendar link clicks, and form completion counts). We do not send names, email addresses, phone numbers, or project message text into analytics event parameters.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-[var(--color-text)]">
            4. Contact for Data Access, Updates, or NDA Coordination
          </h2>
          <p className="text-sm leading-relaxed text-[var(--color-muted)]">
            Port AI Engineers Private Limited operates from Kukatpally, Hyderabad, Telangana - 500072, India. To request updates or deletion of submitted enquiry details, or to initiate an NDA before sharing technical files, please write to{" "}
            <a
              href="mailto:contact@portaiengineers.com"
              className="font-medium text-[var(--color-primary)] underline underline-offset-2"
            >
              contact@portaiengineers.com
            </a>{" "}
            or call{" "}
            <a
              href="tel:+919440584273"
              className="font-medium text-[var(--color-primary)] underline underline-offset-2"
            >
              +91 9440584273
            </a>
            .
          </p>
        </section>

        <div className="border-t border-[var(--color-border)] pt-6 flex flex-wrap gap-3">
          <Link
            href="/contact/#contact-form"
            className="inline-flex min-h-[44px] items-center gap-2 rounded-full bg-[var(--color-primary)] px-6 py-2.5 text-sm font-semibold text-[var(--color-on-primary)] transition-opacity hover:opacity-90"
          >
            Request a Project Quote &rarr;
          </Link>
          <Link
            href="/services/"
            className="inline-flex min-h-[44px] items-center gap-2 rounded-full border border-[var(--color-border)] px-6 py-2.5 text-sm font-semibold text-[var(--color-text)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
          >
            Explore Services
          </Link>
        </div>
      </article>
    </div>
  );
}
