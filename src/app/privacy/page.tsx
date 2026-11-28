import type { Metadata } from "next";
import Link from "next/link";
import {
  JsonLd,
  createBreadcrumbSchema,
  createWebPageSchema,
} from "../../lib/schema";

const PAGE_URL = "https://portaiengineers.com/privacy/";
const PAGE_DESCRIPTION =
  "How Port AI Engineers Private Limited receives, uses, protects, and handles enquiry and website information.";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: PAGE_DESCRIPTION,
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Privacy Policy | Port AI Engineers",
    description: PAGE_DESCRIPTION,
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
    name: "Privacy Policy | Port AI Engineers Private Limited",
    description: PAGE_DESCRIPTION,
  });

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", url: "https://portaiengineers.com/" },
    { name: "Privacy Policy", url: PAGE_URL },
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
            Privacy Policy
          </span>
        </nav>

        <header className="space-y-3 border-b border-[var(--color-border)] pb-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-primary)]">
            Port AI Engineers Private Limited
          </p>
          <h1 className="text-3xl font-semibold tracking-tight text-[var(--color-text)] sm:text-4xl">
            Privacy Policy
          </h1>
          <p className="text-sm text-[var(--color-muted)]">
            Last updated: November 28, 2026
          </p>
        </header>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-[var(--color-text)]">
            Introduction
          </h2>
          <p className="text-sm leading-relaxed text-[var(--color-muted)] sm:text-base">
            Port AI Engineers Private Limited respects the privacy of individuals and organizations contacting us through our website or communicating with our team. This Privacy Policy explains how we handle information received through website enquiries and normal website visits.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-[var(--color-text)]">
            01. Information We Receive
          </h2>
          <p className="text-sm leading-relaxed text-[var(--color-muted)] sm:text-base">
            When you contact us through our website enquiry form or direct business contact channels, you may choose to provide the following details:
          </p>
          <ul className="list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-[var(--color-muted)] sm:text-base">
            <li>Name</li>
            <li>Organization or company name</li>
            <li>Business email address</li>
            <li>Phone number</li>
            <li>Engineering discipline or service of interest</li>
            <li>
              Project-related information voluntarily submitted through enquiry forms, including optional preferred software or project region selections
            </li>
          </ul>
          <p className="text-sm leading-relaxed text-[var(--color-muted)] sm:text-base">
            When you browse our website, limited technical and usage information (such as pages visited and general interaction activity) is also recorded using website analytics and cookies, along with local browser storage used to remember site display preferences such as light or dark theme. Form details such as names, email addresses, and enquiry messages are not passed into website analytics reports.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-[var(--color-text)]">
            02. How We Use Information
          </h2>
          <p className="text-sm leading-relaxed text-[var(--color-muted)] sm:text-base">
            Submitted enquiry information is used to:
          </p>
          <ul className="list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-[var(--color-muted)] sm:text-base">
            <li>Respond to engineering-service enquiries.</li>
            <li>Understand project requirements.</li>
            <li>Communicate with prospective and existing clients.</li>
            <li>Prepare relevant service proposals or quotations.</li>
            <li>Provide requested business and engineering services.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-[var(--color-text)]">
            03. Information Protection
          </h2>
          <p className="text-sm leading-relaxed text-[var(--color-muted)] sm:text-base">
            We take reasonable administrative and technical measures to protect the information we receive against unauthorized access, use, or disclosure. No method of internet transmission or electronic storage is completely immune from risk, so we cannot provide an absolute guarantee of security.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-[var(--color-text)]">
            04. Information Sharing
          </h2>
          <p className="text-sm leading-relaxed text-[var(--color-muted)] sm:text-base">
            We do not sell or rent personal information. Information submitted through this website or collected during website visits may be processed by third-party service providers that support website hosting, enquiry delivery, communication, appointment scheduling, and website analytics, solely to operate these services and respond to your request. We may also disclose information where required by applicable law or legal process.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-[var(--color-text)]">
            05. Your Privacy
          </h2>
          <p className="text-sm leading-relaxed text-[var(--color-muted)] sm:text-base">
            You may contact us using the details below to request access to, correction of, or deletion of personal information you have shared with us, subject to applicable law and legitimate business record requirements. You may also manage or disable cookies and browser storage through your browser settings.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-[var(--color-text)]">
            06. Contact Us
          </h2>
          <p className="text-sm leading-relaxed text-[var(--color-muted)] sm:text-base">
            For privacy-related questions or requests, please contact Port AI Engineers Private Limited at Kukatpally, Hyderabad, Telangana - 500072, India:
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

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-[var(--color-text)]">
            07. Policy Updates
          </h2>
          <p className="text-sm leading-relaxed text-[var(--color-muted)] sm:text-base">
            This Privacy Policy may be updated from time to time when necessary. Any updates will be published on this page with the revised update date.
          </p>
        </section>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-[var(--color-border)] pt-6 text-sm">
          <Link
            href="/terms-of-use/"
            className="font-medium text-[var(--color-primary)] hover:underline"
          >
            Terms of Use
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
