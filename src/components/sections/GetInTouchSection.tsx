"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ContactChannels, { contactItems, handleChannelClick } from "./ContactChannels";
import ContactForm from "./ContactForm";
import EnquiryFaqSection from "./EnquiryFaqSection";
import {
  SCHEDULE_CALL_URL,
  getServiceNameFromSlug,
  getServiceSlugFromPathname,
  getWhatsAppHref,
  trackCalendarClick,
  trackQuoteCtaClick,
} from "../../lib/analytics";

interface GetInTouchSectionProps {
  showForm?: boolean;
}

export default function GetInTouchSection({ showForm = true }: GetInTouchSectionProps) {
  const pathname = usePathname();
  const activeServiceSlug = getServiceSlugFromPathname(pathname);
  const activeServiceName = getServiceNameFromSlug(activeServiceSlug);
  const quoteHref = activeServiceSlug
    ? `/contact/?service=${encodeURIComponent(activeServiceSlug)}#contact-form`
    : "/contact/#contact-form";
  const whatsappHref = getWhatsAppHref(activeServiceName);

  return (
    <section
      id="contact"
      className="w-full scroll-mt-20 border-t border-[var(--color-border)] bg-[var(--color-primary-soft)] px-5 py-14 sm:px-10 sm:py-20"
    >
      <div className="mx-auto w-full max-w-6xl">
        <div className="space-y-4 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-primary)]">
            Contact / Project Enquiries
          </p>
          <h2 className="text-2xl font-semibold tracking-tight text-[var(--color-text)] sm:text-3xl lg:text-4xl">
            Let&#39;s discuss your engineering or CAD requirements
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-[var(--color-muted)] sm:text-base lg:text-lg">
            Request a project quote, schedule a technical consultation, or reach our Hyderabad team directly. Initial enquiry response within 24 working hours.
          </p>
        </div>

        {showForm ? (
          <>
            <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
              <ContactChannels location="homepage" headingTag="h3" />
              <div className="min-w-0 lg:col-span-7">
                <ContactForm formLocation="homepage" />
              </div>
            </div>
            <EnquiryFaqSection />
          </>
        ) : (
          <div className="mt-10 space-y-8">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {contactItems.map((item) => {
                const resolvedHref = item.key === "whatsapp" ? whatsappHref : item.href;
                return (
                  <a
                    key={item.label}
                    href={resolvedHref}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                    onClick={() =>
                      handleChannelClick(
                        item.key,
                        "secondary_page_contact_strip",
                        activeServiceSlug
                      )
                    }
                    className="group flex min-w-0 items-start gap-4 rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5 shadow-[0_16px_40px_var(--color-card-shadow)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-primary)] sm:p-6"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-[var(--color-border)] bg-[color-mix(in_srgb,var(--color-primary)_10%,var(--color-bg))] text-[var(--color-primary)]">
                      {item.icon}
                    </div>
                    <div className="min-w-0 flex-1 space-y-1">
                      <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-muted)]">
                        {item.label}
                      </div>
                      <div className="break-words text-base font-semibold text-[var(--color-text)]">
                        {item.value}
                      </div>
                      <p className="text-xs text-[var(--color-muted)]">
                        {item.description}
                      </p>
                    </div>
                  </a>
                );
              })}
            </div>

            <div className="flex flex-col gap-6 rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-[0_16px_40px_var(--color-card-shadow)] sm:flex-row sm:items-center sm:justify-between sm:p-8">
              <div className="space-y-1">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-primary)]">
                  24 Working Hours Initial Response
                </span>
                <h3 className="text-lg font-semibold text-[var(--color-text)] sm:text-xl">
                  Request a Project Quote or Schedule a Technical Call
                </h3>
                <p className="text-sm text-[var(--color-muted)]">
                  Share your project scope for an initial enquiry response within 24 working hours, or book a Google Calendar consultation. Anonymized sample packs available upon NDA review.
                </p>
              </div>
              <div className="flex shrink-0 flex-wrap items-center gap-3">
                <Link
                  href={quoteHref}
                  onClick={() =>
                    trackQuoteCtaClick("secondary_page_contact_strip", activeServiceSlug)
                  }
                  className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-xl bg-[var(--color-primary)] px-5 py-3 text-sm font-semibold text-[var(--color-on-primary)] shadow-md transition-all duration-300 hover:bg-[var(--color-primary-hover)]"
                >
                  <span>Request a Project Quote</span>
                  <span aria-hidden="true">&rarr;</span>
                </Link>
                <a
                  href={SCHEDULE_CALL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    trackCalendarClick("secondary_page_contact_strip", activeServiceSlug)
                  }
                  className="inline-flex min-h-[44px] items-center justify-center rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)] px-5 py-3 text-sm font-semibold text-[var(--color-text)] transition-colors hover:border-[var(--color-primary)]"
                >
                  Schedule a Call
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
