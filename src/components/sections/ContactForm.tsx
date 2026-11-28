"use client";

import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import {
  EMAIL_HREF,
  PHONE_HREF,
  SCHEDULE_CALL_URL,
  getWhatsAppHref,
  trackCalendarClick,
  trackEmailClick,
  trackFormStart,
  trackFormSubmit,
  trackFormValidationError,
  trackGenerateLead,
  trackPhoneClick,
  trackWhatsAppClick,
} from "../../lib/analytics";

interface FormState {
  name: string;
  company: string;
  email: string;
  phone: string;
  service: string;
  country: string;
  software: string;
  message: string;
  botcheck: string;
}

const SERVICE_OPTIONS = [
  { slug: "pid", label: "P&ID Design & Drafting" },
  { slug: "pfd", label: "Process Flow Diagram (PFD)" },
  { slug: "piping-3d", label: "3D Piping Design & Modeling" },
  { slug: "piping-engineering", label: "Piping Engineering & Specifications" },
  { slug: "plant-layout", label: "Industrial Plant Layout" },
  { slug: "general-arrangement", label: "General Arrangement (GA) Drawings" },
  { slug: "isometric", label: "Piping Isometric Drawings" },
  { slug: "piping-stress-analysis", label: "Piping Stress Analysis" },
  { slug: "process", label: "Process Engineering" },
  { slug: "instrumentation", label: "Instrumentation & Control" },
  { slug: "conversion", label: "CAD Conversion (PDF / Legacy)" },
  { slug: "automation", label: "CAD Automation" },
  { slug: "training", label: "CAD Training" },
  { slug: "fire-evacuation", label: "Fire Evacuation Drawings" },
  { slug: "greenfield-projects", label: "Greenfield Projects" },
  { slug: "brownfield-projects", label: "Brownfield Projects" },
  { slug: "power-plants", label: "Power Plants" },
  { slug: "engineering-design-outsourcing", label: "Engineering Design Outsourcing" },
  { slug: "other", label: "Multiple Disciplines / General Enquiry" },
];

const COUNTRY_OPTIONS = [
  "India",
  "United Arab Emirates (UAE)",
  "Saudi Arabia",
  "Qatar",
  "Other / International",
];

const SOFTWARE_OPTIONS = [
  "AutoCAD",
  "AutoCAD Plant 3D",
  "SmartPlant 3D (SP3D)",
  "AVEVA E3D",
  "AVEVA PDMS",
  "CADWORX",
  "CAESAR II",
  "AutoPIPE",
  "Multiple / Not Decided",
];

const initialFormState: FormState = {
  name: "",
  company: "",
  email: "",
  phone: "",
  service: "",
  country: "",
  software: "",
  message: "",
  botcheck: "",
};

interface ContactFormProps {
  formLocation?: "homepage" | "contact_page";
  headingTag?: "h2" | "h3";
}

export default function ContactForm({
  formLocation = "contact_page",
  headingTag = "h3",
}: ContactFormProps) {
  const Heading = headingTag;
  const [formData, setFormData] = useState<FormState>(initialFormState);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [statusMessage, setStatusMessage] = useState<{
    type: "success" | "error" | null;
    text: string;
  }>({ type: null, text: "" });
  const [submittedSummary, setSubmittedSummary] = useState<{
    service: string;
    country?: string;
    software?: string;
  } | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [validationAnnouncement, setValidationAnnouncement] = useState<string>("");
  const hasTrackedStartRef = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    const serviceParam = params.get("service")?.trim().toLowerCase();
    const countryParam = params.get("country")?.trim().toLowerCase();

    const countryMap: Record<string, string> = {
      india: "India",
      uae: "United Arab Emirates (UAE)",
      "united-arab-emirates": "United Arab Emirates (UAE)",
      "saudi-arabia": "Saudi Arabia",
      ksa: "Saudi Arabia",
      qatar: "Qatar",
    };

    const matchedService = serviceParam
      ? SERVICE_OPTIONS.find(
          (opt) => opt.slug === serviceParam || opt.label.toLowerCase() === serviceParam
        )
      : undefined;
    const matchedCountry = countryParam ? countryMap[countryParam] : undefined;

    if (matchedService || matchedCountry) {
      setFormData((prev) => ({
        ...prev,
        ...(matchedService && !prev.service ? { service: matchedService.slug } : {}),
        ...(matchedCountry && !prev.country ? { country: matchedCountry } : {}),
      }));
    }
  }, []);

  const markFormStarted = () => {
    if (!hasTrackedStartRef.current) {
      hasTrackedStartRef.current = true;
      trackFormStart(formLocation, formData.service || undefined);
    }
  };

  const validate = (): boolean => {
    const errors: Partial<Record<keyof FormState, string>> = {};

    if (!formData.name.trim()) {
      errors.name = "Please enter your full name.";
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      errors.email = "Please enter your work email address.";
    } else if (!emailPattern.test(formData.email.trim())) {
      errors.email = "Please enter a valid email address (e.g., name@company.com).";
    }

    const trimmedPhone = formData.phone.trim();
    if (trimmedPhone) {
      const phoneClean = trimmedPhone.replace(/[\s\-\(\)\.]/g, "");
      if (phoneClean.length < 6 || !/^\+?[0-9]{6,15}$/.test(phoneClean)) {
        errors.phone = "Enter a valid phone number (6–15 digits) or leave blank.";
      }
    }

    if (!formData.message.trim()) {
      errors.message = "Please describe your project requirements or scope.";
    } else if (formData.message.trim().length < 10) {
      errors.message = "Please provide at least 10 characters describing your requirement.";
    }

    setFieldErrors(errors);
    const orderedKeys = (["name", "email", "phone", "message"] as const).filter(
      (key) => Boolean(errors[key])
    );
    if (orderedKeys.length > 0) {
      const fieldLabels: Record<"name" | "email" | "phone" | "message", string> = {
        name: "Full Name",
        email: "Work Email",
        phone: "Phone or WhatsApp",
        message: "Project Scope & Timeline",
      };
      setValidationAnnouncement(
        `Please fix ${orderedKeys.length} required or invalid field${
          orderedKeys.length > 1 ? "s" : ""
        }: ${orderedKeys.map((key) => fieldLabels[key]).join(", ")}.`
      );
      if (typeof document !== "undefined") {
        document.getElementById(`contact-${orderedKeys[0]}`)?.focus();
      }
      trackFormValidationError(formLocation, orderedKeys);
      return false;
    }
    setValidationAnnouncement("");
    return true;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    markFormStarted();
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (fieldErrors[name as keyof FormState]) {
      setFieldErrors((prev) => ({ ...prev, [name]: undefined }));
    }
    if (validationAnnouncement) {
      setValidationAnnouncement("");
    }
    if (statusMessage.type === "error") {
      setStatusMessage({ type: null, text: "" });
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting) return;

    if (!validate()) {
      return;
    }

    if (formData.botcheck) {
      setStatusMessage({
        type: "success",
        text: "Thank you! Your enquiry has been received.",
      });
      setFormData(initialFormState);
      return;
    }

    setIsSubmitting(true);
    setStatusMessage({ type: null, text: "" });
    setSubmittedSummary(null);

    const selectedServiceLabel =
      SERVICE_OPTIONS.find((opt) => opt.slug === formData.service)?.label || "General Enquiry";

    trackFormSubmit(
      formLocation,
      formData.service || "general",
      formData.country || undefined
    );

    try {
      const payload = {
        access_key: "0eca3666-b187-4d18-ae70-1b3fbce80cee",
        subject: `New Project Quote Enquiry (${selectedServiceLabel}) - Port AI Engineers`,
        from_name: "Port AI Engineers Website",
        name: formData.name.trim(),
        company: formData.company.trim() || "Not specified",
        email: formData.email.trim(),
        phone: formData.phone.trim() || "Not provided",
        service: selectedServiceLabel,
        country: formData.country || "Not specified",
        software: formData.software || "Not specified",
        message: formData.message.trim(),
        page_source: typeof window !== "undefined" ? window.location.href : "Website",
        botcheck: "",
      };

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        trackGenerateLead(
          formLocation,
          formData.service || "general",
          formData.country || undefined
        );

        setStatusMessage({
          type: "success",
          text: "Thank you. Your project enquiry has been sent to our engineering team. You will receive an initial response within 24 working hours.",
        });
        setSubmittedSummary({
          service: selectedServiceLabel,
          country: formData.country || undefined,
          software: formData.software || undefined,
        });
        setFormData(initialFormState);
        setFieldErrors({});
        setValidationAnnouncement("");
        hasTrackedStartRef.current = false;
      } else {
        setStatusMessage({
          type: "error",
          text:
            result.message ||
            "Unable to submit your enquiry right now. Please try again or reach us directly by email, phone, or WhatsApp below.",
        });
      }
    } catch {
      setStatusMessage({
        type: "error",
        text: "Network error while sending your enquiry. Please check your connection or contact us directly via email, phone, or WhatsApp below.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      id="contact-form"
      className="scroll-mt-24 rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-[0_16px_40px_var(--color-card-shadow)] sm:p-8"
    >
      <div className="mb-6 space-y-1.5">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <Heading className="text-xl font-semibold text-[var(--color-text)] sm:text-2xl">
            Request a Project Quote
          </Heading>
          <span className="rounded-full bg-[color-mix(in_srgb,var(--color-primary)_10%,transparent)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--color-primary)]">
            24-Hr Initial Response
          </span>
        </div>
        <p className="text-sm text-[var(--color-muted)]">
          Share your engineering or CAD scope below. Our team provides an initial technical response within 24 working hours.
        </p>
      </div>

      <div aria-live="polite" className="mb-5">
        {statusMessage.type === "success" && (
          <div
            role="status"
            className="space-y-3 rounded-2xl border border-emerald-300 bg-emerald-50 p-4 text-emerald-900 dark:border-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-200"
          >
            <div className="flex items-start gap-3">
              <svg
                className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600 dark:text-emerald-400"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
              <div className="space-y-1.5 text-sm font-medium leading-relaxed">
                <p>{statusMessage.text}</p>
                {submittedSummary && (
                  <p className="text-xs font-normal opacity-90">
                    Recorded scope: <strong>{submittedSummary.service}</strong>
                    {submittedSummary.country ? ` · ${submittedSummary.country}` : ""}
                    {submittedSummary.software ? ` · ${submittedSummary.software}` : ""}
                  </p>
                )}
              </div>
            </div>
            <div className="pl-8">
              <a
                href={SCHEDULE_CALL_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() =>
                  trackCalendarClick(
                    `${formLocation}_success_banner`,
                    submittedSummary?.service
                  )
                }
                className="inline-flex items-center gap-1.5 text-xs font-semibold underline hover:opacity-80"
              >
                Need to discuss specs sooner? Schedule a Technical Call &rarr;
              </a>
            </div>
          </div>
        )}

        {statusMessage.type === "error" && (
          <div
            role="alert"
            className="space-y-3 rounded-2xl border border-rose-300 bg-rose-50 p-4 text-rose-900 dark:border-rose-800 dark:bg-rose-950/60 dark:text-rose-200"
          >
            <div className="flex items-start gap-3">
              <svg
                className="mt-0.5 h-5 w-5 shrink-0 text-rose-600 dark:text-rose-400"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z"
                  clipRule="evenodd"
                />
              </svg>
              <div className="text-sm font-medium leading-relaxed">
                {statusMessage.text}
              </div>
            </div>
            <div className="flex flex-wrap gap-3 pl-8 text-xs font-semibold">
              <a
                href={EMAIL_HREF}
                onClick={() => trackEmailClick(`${formLocation}_error_fallback`)}
                className="underline hover:opacity-80"
              >
                contact@portaiengineers.com
              </a>
              <a
                href={PHONE_HREF}
                onClick={() => trackPhoneClick(`${formLocation}_error_fallback`)}
                className="underline hover:opacity-80"
              >
                Call +91 9440584273
              </a>
              <a
                href={getWhatsAppHref()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick(`${formLocation}_error_fallback`)}
                className="underline hover:opacity-80"
              >
                WhatsApp Chat
              </a>
            </div>
          </div>
        )}
      </div>

      <form onSubmit={handleSubmit} noValidate className="space-y-4">
        <div role="alert" aria-live="assertive" className="sr-only">
          {validationAnnouncement}
        </div>
        <input
          type="checkbox"
          name="botcheck"
          className="hidden"
          style={{ display: "none" }}
          tabIndex={-1}
          autoComplete="off"
          checked={!!formData.botcheck}
          onChange={(e) =>
            setFormData((prev) => ({
              ...prev,
              botcheck: e.target.checked ? "spam" : "",
            }))
          }
        />

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label
              htmlFor="contact-name"
              className="block text-xs font-semibold uppercase tracking-[0.15em] text-[var(--color-text)]"
            >
              Full Name <span className="text-rose-500" aria-hidden="true">*</span>
            </label>
            <div className="mt-1.5">
              <input
                type="text"
                id="contact-name"
                name="name"
                autoComplete="name"
                required
                disabled={isSubmitting}
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. Rajesh Sharma"
                className={`w-full rounded-xl border bg-[var(--color-bg)] px-4 py-2.5 text-sm text-[var(--color-text)] placeholder-[var(--color-muted)] transition-colors focus:outline-none focus:ring-2 ${
                  fieldErrors.name
                    ? "border-rose-400 focus:border-rose-500 focus:ring-rose-200 dark:focus:ring-rose-950"
                    : "border-[var(--color-border)] focus:border-[var(--color-primary)] focus:ring-[color-mix(in_srgb,var(--color-primary)_25%,transparent)]"
                } disabled:cursor-not-allowed disabled:opacity-60`}
                aria-invalid={!!fieldErrors.name}
                aria-describedby={fieldErrors.name ? "name-error" : undefined}
              />
            </div>
            {fieldErrors.name && (
              <p id="name-error" className="mt-1 text-xs text-rose-600 dark:text-rose-400">
                {fieldErrors.name}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="contact-company"
              className="block text-xs font-semibold uppercase tracking-[0.15em] text-[var(--color-text)]"
            >
              Company / Organization{" "}
              <span className="font-normal lowercase text-[var(--color-muted)]">(optional)</span>
            </label>
            <div className="mt-1.5">
              <input
                type="text"
                id="contact-company"
                name="company"
                autoComplete="organization"
                disabled={isSubmitting}
                value={formData.company}
                onChange={handleChange}
                placeholder="EPC, Consultant, or Plant Name"
                className="w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-2.5 text-sm text-[var(--color-text)] placeholder-[var(--color-muted)] transition-colors focus:border-[var(--color-primary)] focus:outline-none focus:ring-2 focus:ring-[color-mix(in_srgb,var(--color-primary)_25%,transparent)] disabled:cursor-not-allowed disabled:opacity-60"
              />
            </div>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label
              htmlFor="contact-email"
              className="block text-xs font-semibold uppercase tracking-[0.15em] text-[var(--color-text)]"
            >
              Work Email <span className="text-rose-500" aria-hidden="true">*</span>
            </label>
            <div className="mt-1.5">
              <input
                type="email"
                id="contact-email"
                name="email"
                autoComplete="email"
                required
                disabled={isSubmitting}
                value={formData.email}
                onChange={handleChange}
                placeholder="name@company.com"
                className={`w-full rounded-xl border bg-[var(--color-bg)] px-4 py-2.5 text-sm text-[var(--color-text)] placeholder-[var(--color-muted)] transition-colors focus:outline-none focus:ring-2 ${
                  fieldErrors.email
                    ? "border-rose-400 focus:border-rose-500 focus:ring-rose-200 dark:focus:ring-rose-950"
                    : "border-[var(--color-border)] focus:border-[var(--color-primary)] focus:ring-[color-mix(in_srgb,var(--color-primary)_25%,transparent)]"
                } disabled:cursor-not-allowed disabled:opacity-60`}
                aria-invalid={!!fieldErrors.email}
                aria-describedby={fieldErrors.email ? "email-error" : undefined}
              />
            </div>
            {fieldErrors.email && (
              <p id="email-error" className="mt-1 text-xs text-rose-600 dark:text-rose-400">
                {fieldErrors.email}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="contact-phone"
              className="block text-xs font-semibold uppercase tracking-[0.15em] text-[var(--color-text)]"
            >
              Phone / WhatsApp{" "}
              <span className="font-normal lowercase text-[var(--color-muted)]">(optional)</span>
            </label>
            <div className="mt-1.5">
              <input
                type="tel"
                id="contact-phone"
                name="phone"
                autoComplete="tel"
                disabled={isSubmitting}
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 98... / +971 50... / +966 50..."
                className={`w-full rounded-xl border bg-[var(--color-bg)] px-4 py-2.5 text-sm text-[var(--color-text)] placeholder-[var(--color-muted)] transition-colors focus:outline-none focus:ring-2 ${
                  fieldErrors.phone
                    ? "border-rose-400 focus:border-rose-500 focus:ring-rose-200 dark:focus:ring-rose-950"
                    : "border-[var(--color-border)] focus:border-[var(--color-primary)] focus:ring-[color-mix(in_srgb,var(--color-primary)_25%,transparent)]"
                } disabled:cursor-not-allowed disabled:opacity-60`}
                aria-invalid={!!fieldErrors.phone}
                aria-describedby={fieldErrors.phone ? "phone-error" : undefined}
              />
            </div>
            {fieldErrors.phone && (
              <p id="phone-error" className="mt-1 text-xs text-rose-600 dark:text-rose-400">
                {fieldErrors.phone}
              </p>
            )}
          </div>
        </div>

        <div>
          <label
            htmlFor="contact-service"
            className="block text-xs font-semibold uppercase tracking-[0.15em] text-[var(--color-text)]"
          >
            Primary Service / Discipline{" "}
            <span className="font-normal lowercase text-[var(--color-muted)]">(optional)</span>
          </label>
          <div className="mt-1.5">
            <select
              id="contact-service"
              name="service"
              disabled={isSubmitting}
              value={formData.service}
              onChange={handleChange}
              className="w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-2.5 text-sm text-[var(--color-text)] transition-colors focus:border-[var(--color-primary)] focus:outline-none focus:ring-2 focus:ring-[color-mix(in_srgb,var(--color-primary)_25%,transparent)] disabled:cursor-not-allowed disabled:opacity-60"
            >
              <option value="">Select a discipline (optional)</option>
              {SERVICE_OPTIONS.map((option) => (
                <option key={option.slug} value={option.slug}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label
              htmlFor="contact-country"
              className="block text-xs font-semibold uppercase tracking-[0.15em] text-[var(--color-text)]"
            >
              Project Region / Country{" "}
              <span className="font-normal lowercase text-[var(--color-muted)]">(optional)</span>
            </label>
            <div className="mt-1.5">
              <select
                id="contact-country"
                name="country"
                disabled={isSubmitting}
                value={formData.country}
                onChange={handleChange}
                className="w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-2.5 text-sm text-[var(--color-text)] transition-colors focus:border-[var(--color-primary)] focus:outline-none focus:ring-2 focus:ring-[color-mix(in_srgb,var(--color-primary)_25%,transparent)] disabled:cursor-not-allowed disabled:opacity-60"
              >
                <option value="">Select region / country (optional)</option>
                {COUNTRY_OPTIONS.map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label
              htmlFor="contact-software"
              className="block text-xs font-semibold uppercase tracking-[0.15em] text-[var(--color-text)]"
            >
              Preferred CAD / Stress Software{" "}
              <span className="font-normal lowercase text-[var(--color-muted)]">(optional)</span>
            </label>
            <div className="mt-1.5">
              <select
                id="contact-software"
                name="software"
                disabled={isSubmitting}
                value={formData.software}
                onChange={handleChange}
                className="w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-2.5 text-sm text-[var(--color-text)] transition-colors focus:border-[var(--color-primary)] focus:outline-none focus:ring-2 focus:ring-[color-mix(in_srgb,var(--color-primary)_25%,transparent)] disabled:cursor-not-allowed disabled:opacity-60"
              >
                <option value="">Select software platform (optional)</option>
                {SOFTWARE_OPTIONS.map((sw) => (
                  <option key={sw} value={sw}>
                    {sw}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div>
          <label
            htmlFor="contact-message"
            className="block text-xs font-semibold uppercase tracking-[0.15em] text-[var(--color-text)]"
          >
            Project Scope &amp; Timeline <span className="text-rose-500" aria-hidden="true">*</span>
          </label>
          <div className="mt-1.5">
            <textarea
              id="contact-message"
              name="message"
              rows={4}
              required
              disabled={isSubmitting}
              value={formData.message}
              onChange={handleChange}
              placeholder="Briefly describe your required deliverables (e.g., P&IDs, 3D piping, GA drawings, stress analysis), approximate sheet/line count, target CAD software, and timeline..."
              className={`w-full rounded-xl border bg-[var(--color-bg)] px-4 py-2.5 text-sm text-[var(--color-text)] placeholder-[var(--color-muted)] transition-colors focus:outline-none focus:ring-2 ${
                fieldErrors.message
                  ? "border-rose-400 focus:border-rose-500 focus:ring-rose-200 dark:focus:ring-rose-950"
                  : "border-[var(--color-border)] focus:border-[var(--color-primary)] focus:ring-[color-mix(in_srgb,var(--color-primary)_25%,transparent)]"
              } disabled:cursor-not-allowed disabled:opacity-60`}
              aria-invalid={!!fieldErrors.message}
              aria-describedby={fieldErrors.message ? "message-error message-hint" : "message-hint"}
            />
          </div>
          <p id="message-hint" className="mt-1.5 text-xs text-[var(--color-muted)]">
            Do not attach drawings here. If NDA review or file sharing is needed, our team will provide a secure transfer path after initial contact.
          </p>
          {fieldErrors.message && (
            <p id="message-error" className="mt-1 text-xs text-rose-600 dark:text-rose-400">
              {fieldErrors.message}
            </p>
          )}
        </div>

        <div className="space-y-2.5 pt-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-xl bg-[var(--color-primary)] px-6 py-3 text-sm font-semibold text-[var(--color-on-primary)] shadow-md transition-all duration-300 hover:bg-[var(--color-primary-hover)] hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
            aria-busy={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <svg
                  className="h-4 w-4 animate-spin text-current"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                <span>Submitting Enquiry...</span>
              </>
            ) : (
              <>
                <span>Request a Project Quote</span>
                <span aria-hidden="true">&rarr;</span>
              </>
            )}
          </button>
          <p className="text-xs text-[var(--color-muted)]">
            Initial enquiry response within 24 working hours. Anonymized sample documentation available on NDA request.{" "}
            <Link href="/privacy/" className="font-medium text-[var(--color-primary)] underline-offset-2 hover:underline">
              Privacy &amp; NDA policy
            </Link>
            .
          </p>
        </div>
      </form>
    </div>
  );
}
