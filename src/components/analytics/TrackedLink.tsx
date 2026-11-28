"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import {
  trackCalendarClick,
  trackQuoteCtaClick,
} from "../../lib/analytics";

interface TrackedLinkProps {
  href: string;
  className?: string;
  children: ReactNode;
  trackType: "quote" | "calendar";
  ctaLocation: string;
  serviceInterest?: string;
  external?: boolean;
  ariaLabel?: string;
}

export default function TrackedLink({
  href,
  className,
  children,
  trackType,
  ctaLocation,
  serviceInterest,
  external = false,
  ariaLabel,
}: TrackedLinkProps) {
  const handleClick = () => {
    if (trackType === "quote") {
      trackQuoteCtaClick(ctaLocation, serviceInterest);
    } else if (trackType === "calendar") {
      trackCalendarClick(ctaLocation, serviceInterest);
    }
  };

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={ariaLabel}
        onClick={handleClick}
        className={className}
      >
        {children}
      </a>
    );
  }

  return (
    <Link
      href={href}
      aria-label={ariaLabel}
      onClick={handleClick}
      className={className}
    >
      {children}
    </Link>
  );
}
