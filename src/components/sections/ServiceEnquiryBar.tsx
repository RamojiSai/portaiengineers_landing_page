"use client";

import Link from "next/link";
import {
  PHONE_HREF,
  SCHEDULE_CALL_URL,
  getWhatsAppHref,
  trackCalendarClick,
  trackPhoneClick,
  trackQuoteCtaClick,
  trackWhatsAppClick,
} from "../../lib/analytics";

interface ServiceEnquiryBarProps {
  serviceName: string;
  serviceSlug: string;
  location: "service_detail_top" | "service_detail_bottom";
}

export default function ServiceEnquiryBar({
  serviceName,
  serviceSlug,
  location,
}: ServiceEnquiryBarProps) {
  const quoteHref = `/contact/?service=${encodeURIComponent(serviceSlug)}#contact-form`;

  return (
    <div className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5 shadow-[0_12px_30px_var(--color-card-shadow)] sm:p-6">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="space-y-1">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-primary)]">
            Scoped Engineering &amp; CAD Support
          </p>
          <p className="text-sm font-medium text-[var(--color-text)] sm:text-base">
            Initial enquiry response within 24 working hours · NDA-ready sample documentation on request
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2.5">
          <Link
            href={quoteHref}
            onClick={() => trackQuoteCtaClick(location, serviceSlug)}
            className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full bg-[var(--color-primary)] px-5 py-2 text-xs font-semibold text-[var(--color-on-primary)] shadow-sm transition-colors hover:bg-[var(--color-primary-hover)] sm:text-sm"
          >
            <span>Request a Project Quote</span>
            <span aria-hidden="true">&rarr;</span>
          </Link>
          <a
            href={SCHEDULE_CALL_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackCalendarClick(location, serviceSlug)}
            className="inline-flex min-h-[44px] items-center justify-center rounded-full border border-[var(--color-primary)] px-4 py-2 text-xs font-semibold text-[var(--color-primary)] transition-colors hover:bg-[var(--color-primary)] hover:text-[var(--color-on-primary)] sm:text-sm"
          >
            Schedule a Call
          </a>
          <a
            href={PHONE_HREF}
            onClick={() => trackPhoneClick(location, serviceSlug)}
            className="inline-flex min-h-[44px] items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-bg)] px-3.5 py-2 text-xs font-semibold text-[var(--color-text)] transition-colors hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
          >
            Call
          </a>
          <a
            href={getWhatsAppHref(serviceName)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick(location, serviceSlug)}
            className="inline-flex min-h-[44px] items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-bg)] px-3.5 py-2 text-xs font-semibold text-[var(--color-text)] transition-colors hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
