"use client";

import {
  EMAIL_HREF,
  PHONE_HREF,
  SCHEDULE_CALL_URL,
  getWhatsAppHref,
  trackCalendarClick,
  trackEmailClick,
  trackPhoneClick,
  trackWhatsAppClick,
} from "../../lib/analytics";

export const contactItems = [
  {
    key: "email",
    label: "Email",
    value: "contact@portaiengineers.com",
    href: EMAIL_HREF,
    description: "Send scope notes or request an NDA sample pack.",
    external: false,
    icon: (
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
        <path d="M4 6h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z" />
        <path d="m22 8-10 6L2 8" />
      </svg>
    ),
  },
  {
    key: "phone",
    label: "Phone",
    value: "+91 9440584273",
    href: PHONE_HREF,
    description: "Speak with our engineers (Mon–Sat, IST & GCC working hours overlap).",
    external: false,
    icon: (
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
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.08 4.18 2 2 0 0 1 4.06 2h3a2 2 0 0 1 2 1.72c.12.9.3 1.77.54 2.62a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.46-1.06a2 2 0 0 1 2.11-.45c.85.24 1.72.42 2.62.54A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
  {
    key: "whatsapp",
    label: "WhatsApp",
    value: "+91 9440584273",
    href: getWhatsAppHref(),
    description: "Start a direct WhatsApp message thread.",
    external: true,
    icon: (
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
        <path d="M21 11.5a8.5 8.5 0 0 1-12.7 7.4L3 20l1.2-5.1A8.5 8.5 0 1 1 21 11.5z" />
        <path d="M8.6 8.9c.2-.3.5-.3.7-.3h.6c.2 0 .5 0 .7.6l.6 1.6c.1.3 0 .5-.2.7l-.6.6c-.2.2-.2.4 0 .6.6 1 1.4 1.8 2.4 2.4.2.1.4.1.6 0l.6-.6c.2-.2.4-.3.7-.2l1.6.6c.6.2.6.5.6.7v.6c0 .2 0 .5-.3.7-.3.3-1 1-2.4.7-1.4-.3-3.1-1.2-4.5-2.6-1.4-1.4-2.3-3.1-2.6-4.5-.3-1.4.4-2.1.7-2.4z" />
      </svg>
    ),
  },
  {
    key: "address",
    label: "Address",
    value: "Kukatpally, Hyderabad, Telangana - 500072, India",
    href: "https://maps.app.goo.gl/1m6XzmsweawyRhDh8",
    description: "Our engineering operations office.",
    external: true,
    icon: (
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
        <path d="M12 21s7-6.3 7-11.2A7 7 0 1 0 5 9.8C5 14.7 12 21 12 21z" />
        <circle cx="12" cy="9.8" r="2.5" />
      </svg>
    ),
  },
];

export const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/port-ai/",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm-2 7h4v10h-4v-10Zm7 0h3.8v1.4h.1c.5-.9 1.7-1.8 3.5-1.8 3.7 0 4.4 2.4 4.4 5.4v5h-4v-4.5c0-1.1 0-2.5-1.6-2.5-1.6 0-1.9 1.2-1.9 2.4v4.6h-4v-10Z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/portaiengineers?igsh=YTJseWtiM2pldWN0",
    icon: (
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
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M13.5 9.3V7.6c0-.8.5-1 1-1h2V3.2h-2.7c-2.7 0-3.6 2-3.6 3.3v2.8H8v3.2h2.2V21h3.3v-8.5h2.5l.4-3.2h-2.9Z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://youtube.com/@portaiengineers?si=FkXxfA4DgDnX2yEl",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M21.6 7.2c-.2-.8-.8-1.4-1.6-1.6C18.6 5.2 12 5.2 12 5.2s-6.6 0-8 .4c-.8.2-1.4.8-1.6 1.6-.4 1.4-.4 4.3-.4 4.3s0 2.9.4 4.3c.2.8.8 1.4 1.6 1.6 1.4.4 8 .4 8 .4s6.6 0 8-.4c.8-.2 1.4-.8 1.6-1.6.4-1.4.4-4.3.4-4.3s0-2.9-.4-4.3ZM10.5 14.7v-5.4l4.7 2.7-4.7 2.7Z" />
      </svg>
    ),
  },
];

export function handleChannelClick(
  key: string,
  location: string,
  serviceInterest?: string
) {
  if (key === "email") trackEmailClick(location, serviceInterest);
  if (key === "phone") trackPhoneClick(location, serviceInterest);
  if (key === "whatsapp") trackWhatsAppClick(location, serviceInterest);
}

interface ContactChannelsProps {
  location: "homepage" | "contact_page";
  headingTag?: "h2" | "h3";
}

export default function ContactChannels({
  location,
  headingTag = "h3",
}: ContactChannelsProps) {
  const Heading = headingTag;

  return (
    <div className="min-w-0 space-y-6 lg:col-span-5">
      <div className="rounded-3xl border border-[var(--color-primary)] bg-[color-mix(in_srgb,var(--color-primary)_8%,var(--color-surface))] p-6 shadow-[0_16px_40px_var(--color-card-shadow)]">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[var(--color-primary)] text-[var(--color-on-primary)] shadow-sm">
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
          </div>
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-primary)]">
              Direct Consultation
            </span>
            <Heading className="text-lg font-semibold text-[var(--color-text)]">
              Schedule a Technical Call
            </Heading>
          </div>
        </div>
        <p className="mt-3 text-sm leading-relaxed text-[var(--color-muted)]">
          Book a convenient Google Calendar slot to align on scope, target CAD/stress software, NDA sample review, and schedule.
        </p>
        <div className="mt-4">
          <a
            href={SCHEDULE_CALL_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackCalendarClick(location)}
            className="inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-xl bg-[var(--color-primary)] px-5 py-3 text-sm font-semibold text-[var(--color-on-primary)] shadow-md transition-all duration-300 hover:bg-[var(--color-primary-hover)] hover:shadow-lg"
          >
            <span>Schedule a Call</span>
            <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>

      <div className="grid min-w-0 grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-1">
        {contactItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            target={item.external ? "_blank" : undefined}
            rel={item.external ? "noopener noreferrer" : undefined}
            onClick={() => handleChannelClick(item.key, location)}
            className="group flex min-w-0 items-start gap-3.5 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--color-primary)] hover:shadow-md"
          >
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-[var(--color-border)] bg-[color-mix(in_srgb,var(--color-primary)_10%,var(--color-bg))] text-[var(--color-primary)]">
              {item.icon}
            </div>
            <div className="min-w-0 flex-1 space-y-0.5">
              <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--color-muted)]">
                {item.label}
              </div>
              <div className="break-words text-sm font-semibold text-[var(--color-text)]">
                {item.value}
              </div>
              <p className="text-xs text-[var(--color-muted)]">
                {item.description}
              </p>
            </div>
          </a>
        ))}
      </div>

      <div className="flex items-center justify-between rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] px-5 py-4 shadow-sm">
        <span className="text-xs font-semibold uppercase tracking-[0.15em] text-[var(--color-muted)]">
          Follow Us
        </span>
        <div className="flex items-center gap-2">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="group inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--color-border)] bg-[color-mix(in_srgb,var(--color-primary)_6%,var(--color-bg))] text-[var(--color-primary)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-[var(--color-on-primary)]"
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
