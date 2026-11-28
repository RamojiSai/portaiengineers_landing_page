export const SCHEDULE_CALL_URL = "https://calendar.app.google/4EDU6NFyWQLtrG91A";
export const PHONE_HREF = "tel:+919440584273";
export const EMAIL_HREF = "mailto:contact@portaiengineers.com";

export const SERVICE_SLUG_LABELS: Record<string, string> = {
  pid: "P&ID Design & Drafting Services",
  pfd: "PFD Design & Drafting Services",
  "piping-3d": "3D Piping Design Services",
  "piping-engineering": "Piping Engineering Services",
  "plant-layout": "Industrial Plant Layout Design Services",
  "general-arrangement": "General Arrangement Drawing Services",
  isometric: "Piping Isometric Drawing Services",
  "piping-stress-analysis": "Piping Stress Analysis Services",
  process: "Process Engineering Services",
  instrumentation: "Instrumentation Engineering Services",
  conversion: "CAD Conversion Services",
  automation: "CAD Automation Services",
  training: "CAD Training Services",
  "fire-evacuation": "Fire Evacuation Drawing Services",
  "greenfield-projects": "Greenfield Engineering Services",
  "brownfield-projects": "Brownfield Engineering Services",
  "power-plants": "Power Plant Engineering Services",
  "engineering-design-outsourcing": "Engineering Design Outsourcing Services",
};

export function getServiceSlugFromPathname(pathname?: string | null): string | undefined {
  if (!pathname) return undefined;
  const clean = pathname.replace(/\/+$/, "");
  if (clean === "/services/engineering-design-outsourcing") {
    return "engineering-design-outsourcing";
  }
  const match = clean.match(/^\/services\/(?:cad|engineering)\/([^/]+)$/);
  if (!match) return undefined;
  const slug = match[1];
  return slug in SERVICE_SLUG_LABELS ? slug : undefined;
}

export function getServiceNameFromSlug(slug?: string): string | undefined {
  if (!slug) return undefined;
  return SERVICE_SLUG_LABELS[slug];
}

export function getWhatsAppHref(serviceName?: string): string {
  const baseText = serviceName
    ? `Hello Port AI Engineers, I would like to request a quote for ${serviceName}.`
    : "Hello Port AI Engineers, I would like to request a quote for an engineering or CAD project.";
  return `https://wa.me/919440584273?text=${encodeURIComponent(baseText)}`;
}

function sendGtagEvent(eventName: string, params: Record<string, string>) {
  if (
    typeof window !== "undefined" &&
    typeof (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag === "function"
  ) {
    (window as unknown as { gtag: (...args: unknown[]) => void }).gtag(
      "event",
      eventName,
      params
    );
  }
}

export function trackServicePageView(
  serviceSlug: string,
  serviceCategory: string,
  serviceName: string
) {
  sendGtagEvent("service_page_view", {
    service_slug: serviceSlug,
    service_category: serviceCategory,
    service_name: serviceName,
  });
}

export function trackQuoteCtaClick(ctaLocation: string, serviceInterest?: string) {
  sendGtagEvent("quote_cta_click", {
    cta_location: ctaLocation,
    ...(serviceInterest ? { service_interest: serviceInterest } : {}),
  });
}

export function trackCalendarClick(ctaLocation: string, serviceInterest?: string) {
  sendGtagEvent("click_calendar", {
    cta_location: ctaLocation,
    ...(serviceInterest ? { service_interest: serviceInterest } : {}),
  });
}

export function trackPhoneClick(ctaLocation: string, serviceInterest?: string) {
  sendGtagEvent("click_phone", {
    cta_location: ctaLocation,
    ...(serviceInterest ? { service_interest: serviceInterest } : {}),
  });
}

export function trackWhatsAppClick(ctaLocation: string, serviceInterest?: string) {
  sendGtagEvent("click_whatsapp", {
    cta_location: ctaLocation,
    ...(serviceInterest ? { service_interest: serviceInterest } : {}),
  });
}

export function trackEmailClick(ctaLocation: string, serviceInterest?: string) {
  sendGtagEvent("click_email", {
    cta_location: ctaLocation,
    ...(serviceInterest ? { service_interest: serviceInterest } : {}),
  });
}

export function trackFormStart(formLocation: string, serviceInterest?: string) {
  sendGtagEvent("form_start", {
    form_location: formLocation,
    ...(serviceInterest ? { service_interest: serviceInterest } : {}),
  });
}

export function trackFormSubmit(
  formLocation: string,
  serviceInterest?: string,
  targetCountry?: string
) {
  sendGtagEvent("form_submit", {
    form_location: formLocation,
    service_interest: serviceInterest || "general",
    ...(targetCountry ? { target_country: targetCountry } : {}),
  });
}

export function trackFormValidationError(formLocation: string, errorFields: string[]) {
  sendGtagEvent("form_validation_error", {
    form_location: formLocation,
    invalid_fields: errorFields.join(","),
  });
}

export function trackGenerateLead(
  formLocation: string,
  serviceInterest?: string,
  targetCountry?: string
) {
  sendGtagEvent("generate_lead", {
    form_location: formLocation,
    service_interest: serviceInterest || "general",
    ...(targetCountry ? { target_country: targetCountry } : {}),
  });
}
