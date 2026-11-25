"use client";

import Link from "next/link";

const WHATSAPP_HREF =
  "https://wa.me/919440584273?text=Hello%20Port%20AI%20Engineers%2C%20I%20would%20like%20to%20request%20a%20quote%20for%20an%20engineering%20or%20CAD%20project.";

function trackMobileQuoteClick() {
  if (
    typeof window !== "undefined" &&
    typeof (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag === "function"
  ) {
    (window as unknown as { gtag: (...args: unknown[]) => void }).gtag(
      "event",
      "quote_cta_click",
      {
        cta_location: "mobile_sticky_bar",
      }
    );
  }
}

export default function MobileStickyBar() {
  return (
    <nav
      aria-label="Quick contact actions"
      className="fixed inset-x-0 bottom-0 z-40 border-t border-[var(--color-border)] bg-[color-mix(in_srgb,var(--color-surface)_96%,transparent)] backdrop-blur-md shadow-[0_-6px_24px_var(--color-card-shadow)] md:hidden pb-[env(safe-area-inset-bottom)]"
    >
      <div className="mx-auto grid max-w-md grid-cols-[1.35fr_1fr_1fr] items-center gap-2 px-3 py-2">
        <Link
          href="/contact/"
          onClick={trackMobileQuoteClick}
          className="inline-flex min-h-[44px] items-center justify-center rounded-xl bg-[var(--color-primary)] px-3 py-2 text-center text-xs font-semibold text-[var(--color-on-primary)] shadow-xs transition-colors hover:bg-[var(--color-primary-hover)]"
        >
          Request Quote
        </Link>
        <a
          href="tel:+919440584273"
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
          href={WHATSAPP_HREF}
          target="_blank"
          rel="noopener noreferrer"
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
