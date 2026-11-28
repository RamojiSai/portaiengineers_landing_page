"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  PHONE_HREF,
  getServiceNameFromSlug,
  getServiceSlugFromPathname,
  getWhatsAppHref,
  trackPhoneClick,
  trackQuoteCtaClick,
  trackWhatsAppClick,
} from "../../lib/analytics";

export default function MobileStickyBar() {
  const pathname = usePathname() ?? "";
  if (pathname.startsWith("/platform") || pathname.includes("/flow/")) {
    return null;
  }

  const isContactPage = pathname.startsWith("/contact");
  const activeServiceSlug = getServiceSlugFromPathname(pathname);
  const activeServiceName = getServiceNameFromSlug(activeServiceSlug);
  const quoteHref = isContactPage
    ? "#contact-form"
    : activeServiceSlug
      ? `/contact/?service=${encodeURIComponent(activeServiceSlug)}#contact-form`
      : "/contact/#contact-form";

  return (
    <nav
      aria-label="Quick contact actions"
      className="fixed inset-x-0 bottom-0 z-40 border-t border-[var(--color-border)] bg-[color-mix(in_srgb,var(--color-surface)_96%,transparent)] pb-[env(safe-area-inset-bottom)] shadow-[0_-6px_24px_var(--color-card-shadow)] backdrop-blur-md md:hidden"
    >
      <div className="mx-auto grid max-w-md grid-cols-[1.35fr_1fr_1fr] items-center gap-2 px-3 py-2">
        <Link
          href={quoteHref}
          onClick={() => trackQuoteCtaClick("mobile_sticky_bar", activeServiceSlug)}
          className="inline-flex min-h-[44px] items-center justify-center rounded-xl bg-[var(--color-primary)] px-3 py-2 text-center text-xs font-semibold text-[var(--color-on-primary)] shadow-xs transition-colors hover:bg-[var(--color-primary-hover)]"
        >
          Request Quote
        </Link>
        <a
          href={PHONE_HREF}
          onClick={() => trackPhoneClick("mobile_sticky_bar", activeServiceSlug)}
          aria-label="Call Port AI Engineers at +91 9440584273"
          className="inline-flex min-h-[44px] items-center justify-center gap-1.5 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)] px-2.5 py-2 text-xs font-semibold text-[var(--color-text)] transition-colors hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
        >
          <svg
            className="h-4 w-4 shrink-0 text-[var(--color-primary)]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.08 4.18 2 2 0 0 1 4.06 2h3a2 2 0 0 1 2 1.72c.12.9.3 1.77.54 2.62a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.46-1.06a2 2 0 0 1 2.11-.45c.85.24 1.72.42 2.62.54A2 2 0 0 1 22 16.92z" />
          </svg>
          <span>Call</span>
        </a>
        <a
          href={getWhatsAppHref(activeServiceName)}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackWhatsAppClick("mobile_sticky_bar", activeServiceSlug)}
          aria-label="Chat on WhatsApp with Port AI Engineers"
          className="inline-flex min-h-[44px] items-center justify-center gap-1.5 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)] px-2.5 py-2 text-xs font-semibold text-[var(--color-text)] transition-colors hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
        >
          <svg
            className="h-4 w-4 shrink-0 text-[var(--color-primary)]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M21 11.5a8.5 8.5 0 0 1-12.7 7.4L3 20l1.2-5.1A8.5 8.5 0 1 1 21 11.5z" />
          </svg>
          <span>WhatsApp</span>
        </a>
      </div>
    </nav>
  );
}
