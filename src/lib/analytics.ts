export const SCHEDULE_CALL_URL = "https://calendar.app.google/4EDU6NFyWQLtrG91A";
export const PHONE_HREF = "tel:+919440584273";
export const EMAIL_HREF = "mailto:contact@portaiengineers.com";

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

export function trackQuoteCtaClick(ctaLocation: string, serviceInterest?: string) {
  sendGtagEvent("quote_cta_click", {
    cta_location: ctaLocation,
    ...(serviceInterest ? { service_interest: serviceInterest } : {}),
  });
}

export function trackScheduleCallClick(ctaLocation: string, serviceInterest?: string) {
  sendGtagEvent("schedule_call_click", {
    cta_location: ctaLocation,
    ...(serviceInterest ? { service_interest: serviceInterest } : {}),
  });
}

export function trackPhoneClick(ctaLocation: string) {
  sendGtagEvent("phone_click", { cta_location: ctaLocation });
}

export function trackWhatsAppClick(ctaLocation: string, serviceInterest?: string) {
  sendGtagEvent("whatsapp_click", {
    cta_location: ctaLocation,
    ...(serviceInterest ? { service_interest: serviceInterest } : {}),
  });
}

export function trackEmailClick(ctaLocation: string) {
  sendGtagEvent("email_click", { cta_location: ctaLocation });
}

export function trackFormStart(formLocation: string) {
  sendGtagEvent("form_start", { form_location: formLocation });
}

export function trackFormValidationError(formLocation: string, errorFields: string[]) {
  sendGtagEvent("form_validation_error", {
    form_location: formLocation,
    invalid_fields: errorFields.join(","),
  });
}

export function trackGenerateLead(formLocation: string, serviceInterest?: string) {
  sendGtagEvent("generate_lead", {
    currency: "INR",
    form_location: formLocation,
    service_interest: serviceInterest || "general",
  });
}
