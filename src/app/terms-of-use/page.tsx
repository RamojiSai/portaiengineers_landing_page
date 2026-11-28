import type { Metadata } from "next";
import Link from "next/link";
import {
  JsonLd,
  createBreadcrumbSchema,
  createWebPageSchema,
} from "../../lib/schema";

const PAGE_URL = "https://portaiengineers.com/terms-of-use/";
const PAGE_DESCRIPTION =
  "Terms of Use for visiting the Port AI Engineers Private Limited website, engineering service information, and acceptable website use.";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: PAGE_DESCRIPTION,
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Terms of Use | Port AI Engineers",
    description: PAGE_DESCRIPTION,
    url: PAGE_URL,
    siteName: "Port AI Engineers",
    locale: "en_US",
    type: "website",
  },
};

export default function TermsOfUsePage() {
  const webPageSchema = createWebPageSchema({
    id: `${PAGE_URL}#webpage`,
    url: PAGE_URL,
    name: "Terms of Use | Port AI Engineers Private Limited",
    description: PAGE_DESCRIPTION,
  });

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", url: "https://portaiengineers.com/" },
    { name: "Terms of Use", url: PAGE_URL },
  ]);

  return (
    <div className="min-h-screen bg-[var(--color-bg)] px-5 py-14 text-[var(--color-text)] sm:px-10 sm:py-20">
      <JsonLd schema={webPageSchema} />
      <JsonLd schema={breadcrumbSchema} />

      <article className="mx-auto max-w-3xl space-y-8 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 sm:p-10">
        <nav
          aria-label="Breadcrumb"
          className="text-xs font-medium tracking-wide text-[var(--color-muted)]"
        >
          <Link href="/" className="hover:text-[var(--color-primary)] hover:underline">
            Home
          </Link>
          <span aria-hidden="true" className="px-2">
            /
          </span>
          <span aria-current="page" className="text-[var(--color-text)]">
            Terms of Use
          </span>
        </nav>

        <header className="space-y-3 border-b border-[var(--color-border)] pb-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-primary)]">
            Port AI Engineers Private Limited
          </p>
          <h1 className="text-3xl font-semibold tracking-tight text-[var(--color-text)] sm:text-4xl">
            Terms of Use
          </h1>
          <p className="text-sm text-[var(--color-muted)]">
            Last updated: November 28, 2026
          </p>
        </header>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-[var(--color-text)]">
            01. Website Purpose
          </h2>
          <p className="text-sm leading-relaxed text-[var(--color-muted)] sm:text-base">
            This website provides information about Port AI Engineers Private Limited, our industrial engineering and CAD design services, and business contact channels for enquiries.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-[var(--color-text)]">
            02. Engineering Services Information
          </h2>
          <p className="text-sm leading-relaxed text-[var(--color-muted)] sm:text-base">
            Service descriptions and technical reference content on this website are provided for general information only. Service availability, technical standards, and project requirements are reviewed and discussed directly with our engineering team.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-[var(--color-text)]">
            03. Project Scope and Commercial Agreements
          </h2>
          <p className="text-sm leading-relaxed text-[var(--color-muted)] sm:text-base">
            Browsing this website or submitting an enquiry does not establish a client contract. Project scope, deliverables, schedules, pricing, and commercial conditions are confirmed separately in written agreements or quotations between Port AI Engineers Private Limited and the client.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-[var(--color-text)]">
            04. Intellectual Property
          </h2>
          <p className="text-sm leading-relaxed text-[var(--color-muted)] sm:text-base">
            Original text, branding, logos, layout elements, and graphics on this website belong to Port AI Engineers Private Limited or are used with permission. You may view pages and share links for business evaluation, but must not reproduce or distribute original website materials for commercial use without written permission. Third-party trademarks or software names belong to their respective owners.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-[var(--color-text)]">
            05. Acceptable Website Use
          </h2>
          <p className="text-sm leading-relaxed text-[var(--color-muted)] sm:text-base">
            Visitors must use this website lawfully and must not misuse the site, interfere with its operation or security, submit automated or false enquiries, or copy website content in bulk without authorization.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-[var(--color-text)]">
            06. External Links
          </h2>
          <p className="text-sm leading-relaxed text-[var(--color-muted)] sm:text-base">
            This website includes links to external websites and tools (such as map directions, calendar scheduling, and social media channels) for convenience. External websites operate outside our control under their own terms and privacy policies.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-[var(--color-text)]">
            07. Contact Information
          </h2>
          <p className="text-sm leading-relaxed text-[var(--color-muted)] sm:text-base">
            For questions regarding these Terms of Use, please contact Port AI Engineers Private Limited at Kukatpally, Hyderabad, Telangana - 500072, India:
          </p>
          <ul className="space-y-1.5 text-sm leading-relaxed text-[var(--color-muted)] sm:text-base">
            <li>
              Email:{" "}
              <a
                href="mailto:contact@portaiengineers.com"
                className="font-medium text-[var(--color-primary)] underline underline-offset-2"
              >
                contact@portaiengineers.com
              </a>
            </li>
            <li>
              Phone:{" "}
              <a
                href="tel:+919440584273"
                className="font-medium text-[var(--color-primary)] underline underline-offset-2"
              >
                +91 9440584273
              </a>
            </li>
          </ul>
        </section>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-[var(--color-border)] pt-6 text-sm">
          <Link
            href="/privacy/"
            className="font-medium text-[var(--color-primary)] hover:underline"
          >
            Privacy Policy
          </Link>
          <Link
            href="/contact/"
            className="font-medium text-[var(--color-primary)] hover:underline"
          >
            Contact Us
          </Link>
        </div>
      </article>
    </div>
  );
}
