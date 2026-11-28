"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  EMAIL_HREF,
  PHONE_HREF,
  SCHEDULE_CALL_URL,
  getServiceNameFromSlug,
  getServiceSlugFromPathname,
  getWhatsAppHref,
  trackCalendarClick,
  trackEmailClick,
  trackPhoneClick,
  trackQuoteCtaClick,
  trackWhatsAppClick,
} from "../../lib/analytics";

type FooterLink = {
  label: string;
  href: string;
  isExternal?: boolean;
  trackType?: "email" | "phone" | "whatsapp" | "schedule" | "quote";
};

type FooterColumn = {
  title: string;
  links: FooterLink[];
};

const footerColumns: FooterColumn[] = [
  {
    title: "Services",
    links: [
      { label: "P&ID Design & Drafting", href: "/services/cad/pid/" },
      { label: "PFD Design & Drafting", href: "/services/cad/pfd/" },
      { label: "Process Engineering", href: "/services/engineering/process/" },
      { label: "Plant Layout", href: "/services/engineering/plant-layout/" },
      { label: "General Arrangement Drawings", href: "/services/cad/general-arrangement/" },
      { label: "Fire Evacuation Drawings", href: "/services/cad/fire-evacuation/" },
      { label: "CAD Conversion", href: "/services/cad/conversion/" },
      { label: "Piping Engineering", href: "/services/engineering/piping-engineering/" },
      { label: "3D Piping Design", href: "/services/engineering/piping-3d/" },
      { label: "Design Outsourcing", href: "/services/engineering-design-outsourcing/" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/#about" },
      { label: "Industries", href: "/#industries" },
      { label: "ISO 9001:2015 QMS", href: "/blogs/iso-9001-2015/" },
      { label: "Startup India (DIPP265006)", href: "/blogs/startup-certified/" },
      { label: "Resources & Blogs", href: "/blogs/" },
      { label: "Privacy Policy", href: "/privacy/" },
      { label: "Terms of Use", href: "/terms-of-use/" },
    ],
  },
  {
    title: "Contact",
    links: [
      {
        label: "Kukatpally, Hyderabad, India",
        href: "https://maps.app.goo.gl/1m6XzmsweawyRhDh8",
        isExternal: true,
      },
      {
        label: "contact@portaiengineers.com",
        href: EMAIL_HREF,
        isExternal: true,
        trackType: "email",
      },
      {
        label: "Call: +91 9440584273",
        href: PHONE_HREF,
        isExternal: true,
        trackType: "phone",
      },
      {
        label: "WhatsApp: +91 9440584273",
        href: getWhatsAppHref(),
        isExternal: true,
        trackType: "whatsapp",
      },
      {
        label: "Request a Project Quote",
        href: "/contact/#contact-form",
        trackType: "quote",
      },
      {
        label: "Schedule a Call",
        href: SCHEDULE_CALL_URL,
        isExternal: true,
        trackType: "schedule",
      },
    ],
  },
];

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/port-ai/",
    icon: (
      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm-2 7h4v10h-4v-10Zm7 0h3.8v1.4h.1c.5-.9 1.7-1.8 3.5-1.8 3.7 0 4.4 2.4 4.4 5.4v5h-4v-4.5c0-1.1 0-2.5-1.6-2.5-1.6 0-1.9 1.2-1.9 2.4v4.6h-4v-10Z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/portaiengineers?igsh=YTJseWtiM2pldWN0",
    icon: (
      <svg
        className="h-4 w-4"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17" cy="7" r="1" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61588678006058",
    icon: (
      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M13.5 9.3V7.6c0-.8.5-1 1-1h2V3.2h-2.7c-2.7 0-3.6 2-3.6 3.3v2.8H8v3.2h2.2V21h3.3v-8.5h2.5l.4-3.2h-2.9Z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://youtube.com/@portaiengineers?si=FkXxfA4DgDnX2yEl",
    icon: (
      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M21.6 7.2c-.2-.8-.8-1.4-1.6-1.6C18.6 5.2 12 5.2 12 5.2s-6.6 0-8 .4c-.8.2-1.4.8-1.6 1.6-.4 1.4-.4 4.3-.4 4.3s0 2.9.4 4.3c.2.8.8 1.4 1.6 1.6 1.4.4 8 .4 8 .4s6.6 0 8-.4c.8-.2 1.4-.8 1.6-1.6.4-1.4.4-4.3.4-4.3s0-2.9-.4-4.3ZM10.5 14.7v-5.4l4.7 2.7-4.7 2.7Z" />
      </svg>
    ),
  },
];

function trackFooterLink(trackType?: FooterLink["trackType"], serviceSlug?: string) {
  if (trackType === "email") trackEmailClick("footer", serviceSlug);
  if (trackType === "phone") trackPhoneClick("footer", serviceSlug);
  if (trackType === "whatsapp") trackWhatsAppClick("footer", serviceSlug);
  if (trackType === "schedule") trackCalendarClick("footer", serviceSlug);
  if (trackType === "quote") trackQuoteCtaClick("footer", serviceSlug);
}

export default function FooterSection() {
  const pathname = usePathname();
  const activeServiceSlug = getServiceSlugFromPathname(pathname);
  const activeServiceName = getServiceNameFromSlug(activeServiceSlug);
  const quoteHref = activeServiceSlug
    ? `/contact/?service=${encodeURIComponent(activeServiceSlug)}#contact-form`
    : "/contact/#contact-form";
  const whatsappHref = getWhatsAppHref(activeServiceName);

  return (
    <footer className="w-full bg-[var(--color-footer-bg)] text-[var(--color-on-footer)]">
      <div className="border-t border-[color-mix(in_srgb,var(--color-on-footer)_10%,transparent)]" />
      <div className="mx-auto w-full max-w-6xl px-6 py-16 sm:px-10">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[repeat(3,minmax(0,1fr))_minmax(0,1.3fr)]">
          {footerColumns.map((column) => (
            <div key={column.title} className="space-y-4">
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-on-footer-muted)]">
                {column.title}
              </h3>
              <div className="flex flex-col gap-2 text-sm text-[var(--color-on-footer)]">
                {column.links.map((link) => {
                  const resolvedHref =
                    link.trackType === "quote"
                      ? quoteHref
                      : link.trackType === "whatsapp"
                        ? whatsappHref
                        : link.href;

                  if (link.isExternal) {
                    return (
                      <a
                        key={link.label}
                        href={resolvedHref}
                        target={resolvedHref.startsWith("http") ? "_blank" : undefined}
                        rel={resolvedHref.startsWith("http") ? "noopener noreferrer" : undefined}
                        onClick={() => trackFooterLink(link.trackType, activeServiceSlug)}
                        className="transition-colors duration-300 hover:text-[var(--color-primary)]"
                      >
                        {link.label}
                      </a>
                    );
                  }

                  return (
                    <Link
                      key={link.label}
                      href={resolvedHref}
                      onClick={() => trackFooterLink(link.trackType, activeServiceSlug)}
                      className="transition-colors duration-300 hover:text-[var(--color-primary)]"
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}

          <div className="h-full rounded-3xl border border-[color-mix(in_srgb,var(--color-on-footer)_12%,transparent)] bg-[color-mix(in_srgb,var(--color-on-footer)_6%,transparent)] p-6 shadow-[0_22px_44px_var(--color-card-shadow)]">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[color-mix(in_srgb,var(--color-on-footer)_18%,transparent)] bg-[color-mix(in_srgb,var(--color-on-footer)_10%,transparent)] text-[var(--color-on-footer)]">
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M21 15a4 4 0 0 1-4 4H7l-4 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z" />
              </svg>
            </div>
            <div className="mt-5 space-y-3">
              <h3 className="text-xl font-semibold text-[var(--color-on-footer)]">
                Let’s work together
              </h3>
              <p className="text-sm leading-relaxed text-[var(--color-on-footer-muted)]">
                Discuss your engineering requirements with our Hyderabad team. Initial enquiry response within 24 working hours.
              </p>
              <div className="flex flex-col gap-2.5 pt-1">
                <Link
                  href={quoteHref}
                  onClick={() => trackQuoteCtaClick("footer_card", activeServiceSlug)}
                  className="group inline-flex w-full items-center justify-between rounded-xl bg-[var(--color-primary)] px-4 py-2.5 text-xs font-semibold text-[var(--color-on-primary)] transition-opacity hover:opacity-95"
                >
                  <span>Request a Project Quote</span>
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </Link>
                <a
                  href={SCHEDULE_CALL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackCalendarClick("footer_card", activeServiceSlug)}
                  className="group inline-flex w-full items-center justify-between rounded-xl border border-[color-mix(in_srgb,var(--color-on-footer)_55%,transparent)] bg-transparent px-4 py-2.5 text-xs font-semibold text-[var(--color-on-footer)] transition-colors duration-300 hover:border-[var(--color-primary)] hover:bg-[color-mix(in_srgb,var(--color-on-footer)_8%,transparent)]"
                >
                  <span>Schedule a Call</span>
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-[color-mix(in_srgb,var(--color-on-footer)_10%,transparent)] pt-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-4">
              <Image
                src="/images/brand/logo-mark.webp"
                alt="Port AI Engineers logo"
                width={48}
                height={48}
                className="h-12 w-12 rounded-full object-cover"
              />
              <div className="space-y-1 text-sm text-[var(--color-on-footer-muted)]">
                <div className="leading-tight text-[var(--color-on-footer)]">
                  <span className="text-base font-semibold tracking-tight text-[var(--color-on-footer)]">
                    Port AI Engineers Private Limited
                  </span>
                </div>
                <p className="max-w-md text-xs leading-relaxed text-[var(--color-on-footer-muted)]">
                  Industrial plant engineering, 3D piping design, stress analysis, and CAD documentation services from Hyderabad, India.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-start gap-2 md:items-end">
              <span className="text-xs uppercase tracking-[0.2em] text-[var(--color-on-footer-muted)]">
                Follow us on
              </span>
              <div className="flex items-center gap-2">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className="group inline-flex h-8 w-8 items-center justify-center rounded-full border border-[color-mix(in_srgb,var(--color-on-footer)_15%,transparent)] bg-[color-mix(in_srgb,var(--color-on-footer)_8%,transparent)] text-[var(--color-on-footer)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-[color-mix(in_srgb,var(--color-on-footer)_10%,transparent)] pt-6">
          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-[var(--color-on-footer-muted)]">
              © 2026 Port AI Engineers Private Limited. All rights reserved.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/blogs/startup-certified/"
                className="rounded-xl border border-[color-mix(in_srgb,var(--color-on-footer)_18%,transparent)] bg-[color-mix(in_srgb,var(--color-on-footer)_6%,transparent)] px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--color-on-footer)] transition-colors hover:border-[var(--color-primary)] hover:text-[#38BDF8]"
              >
                Startup India · DIPP265006
              </Link>
              <Link
                href="/blogs/iso-9001-2015/"
                className="flex items-center text-xs font-semibold text-[#38BDF8]"
              >
                <div className="relative flex items-center gap-2.5 rounded-xl border border-[color-mix(in_srgb,var(--color-primary)_45%,transparent)] bg-[color-mix(in_srgb,var(--color-primary)_20%,transparent)] px-3 py-1.5 shadow-[0_18px_40px_var(--color-card-shadow)]">
                  <Image
                    src="/images/certifications/iso-badge.webp"
                    alt="ISO 9001:2015 certification badge"
                    width={32}
                    height={32}
                    className="h-8 w-8 object-contain"
                  />
                  <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#38BDF8]">
                    ISO 9001:2015 Certified
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
