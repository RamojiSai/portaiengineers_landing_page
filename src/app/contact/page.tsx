import type { Metadata } from "next";
import Link from "next/link";
import ContactChannels from "../../components/sections/ContactChannels";
import ContactForm from "../../components/sections/ContactForm";
import EnquiryFaqSection from "../../components/sections/EnquiryFaqSection";
import {
  JsonLd,
  createWebPageSchema,
  createBreadcrumbSchema,
} from "../../lib/schema";

export const metadata: Metadata = {
  title: "Contact Us | Hyderabad, India",
  description:
    "Contact Port AI Engineers Pvt. Ltd. in Kukatpally, Hyderabad, India. Inquire about industrial plant engineering, 3D piping design, and CAD services.",
  alternates: {
    canonical: "https://portaiengineers.com/contact/",
  },
  openGraph: {
    title: "Contact Port AI Engineers | Hyderabad, India",
    description:
      "Contact Port AI Engineers Pvt. Ltd. in Kukatpally, Hyderabad, India. Inquire about industrial plant engineering, 3D piping design, and CAD services.",
    url: "https://portaiengineers.com/contact/",
    siteName: "Port AI Engineers",
    images: [
      {
        url: "/hero-refinery-DwatFbCg.jpg",
        width: 1200,
        height: 630,
        alt: "Port AI Engineers - Contact Us",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Port AI Engineers | Hyderabad, India",
    description:
      "Contact Port AI Engineers Pvt. Ltd. in Kukatpally, Hyderabad, India. Inquire about industrial plant engineering, 3D piping design, and CAD services.",
    images: ["/hero-refinery-DwatFbCg.jpg"],
  },
};

export default function ContactPage() {
  const contactPageSchema = createWebPageSchema({
    id: "https://portaiengineers.com/contact/#webpage",
    url: "https://portaiengineers.com/contact/",
    name: "Contact Us | Hyderabad, India",
    description:
      "Contact Port AI Engineers Pvt. Ltd. in Kukatpally, Hyderabad, India. Inquire about industrial plant engineering, 3D piping design, and CAD services.",
    type: "ContactPage",
  });

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", url: "https://portaiengineers.com/" },
    { name: "Contact", url: "https://portaiengineers.com/contact/" },
  ]);

  return (
    <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)]">
      <JsonLd schema={contactPageSchema} />
      <JsonLd schema={breadcrumbSchema} />
      <section id="contact" className="mx-auto w-full max-w-6xl px-5 py-14 sm:px-10 sm:py-20">
        <div className="space-y-4 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-primary)]">
            Contact Port AI Engineers
          </p>
          <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl lg:text-4xl">
            Request a Project Quote or Schedule a Technical Call
          </h1>
          <p className="mx-auto max-w-2xl text-sm text-[var(--color-muted)] sm:text-base lg:text-lg">
            Share your project scope, target deliverables, and schedule below. Our engineering team provides an initial response within 24 working hours.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
          <ContactChannels location="contact_page" headingTag="h2" />
          <div className="min-w-0 lg:col-span-7">
            <ContactForm formLocation="contact_page" headingTag="h2" />
          </div>
        </div>

        <EnquiryFaqSection headingTag="h2" />

        <div className="mt-12 flex items-center justify-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-primary)] hover:underline"
          >
            &larr; Back to Home
          </Link>
        </div>
      </section>
    </div>
  );
}
