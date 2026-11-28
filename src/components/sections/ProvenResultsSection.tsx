import Link from "next/link";
import TrackedLink from "../analytics/TrackedLink";

const executionStandards = [
  {
    badge: "Cross-Discipline Alignment",
    title: "Coordinated Engineering Handoffs",
    description:
      "Process schematics (PFD/P&ID), piping specifications, 3D models, stress analysis, and GA drawings stay synchronized across disciplines.",
    href: "/services/",
    ctaLabel: "Explore All Disciplines",
    serviceInterest: undefined,
  },
  {
    badge: "Drawing Verification",
    title: "Multi-Stage QA & Checking",
    description:
      "Every deliverable undergoes structured checks for line tagging, spec breaks, nozzle orientation, clash clearance, and revision control.",
    href: "/blogs/iso-9001-2015/",
    ctaLabel: "See Quality Process",
    serviceInterest: undefined,
  },
  {
    badge: "Technical Scoping",
    title: "Direct Scope & Software Alignment",
    description:
      "Deliverables follow your tagging conventions, project specifications, and preferred CAD or pipe stress analysis software platforms.",
    href: "/contact/?service=other#contact-form",
    ctaLabel: "Discuss Your Engineering Requirements",
    serviceInterest: "other",
  },
  {
    badge: "Responsive Scoping",
    title: "24 Working Hours Enquiry SLA",
    description:
      "Direct technical scoping from Hyderabad with an initial engineering response within 24 working hours and milestone-tracked delivery.",
    href: "/contact/#contact-form",
    ctaLabel: "Request a Project Quote",
    serviceInterest: "general",
  },
];

export default function ProvenResultsSection() {
  return (
    <section className="relative w-full border-t border-[var(--color-border)] bg-[var(--color-bg)] px-5 py-16 sm:px-10 sm:py-20">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10">
        <div className="space-y-3 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-primary)]">
            Engineering Governance
          </span>
          <h2 className="text-2xl font-semibold tracking-tight text-[var(--color-text)] sm:text-3xl lg:text-4xl">
            How We Maintain Drawing Quality &amp; Engineering Alignment
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-[var(--color-muted)] sm:text-base">
            Practical engineering review controls, client standards alignment, and responsive scoping built for EPC and plant teams.
          </p>
        </div>

        <div className="grid w-full gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {executionStandards.map((item) => (
            <div
              key={item.title}
              className="flex h-full flex-col justify-between gap-5 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 text-left shadow-[0_12px_30px_var(--color-card-shadow)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-primary)]"
            >
              <div className="space-y-3">
                <span className="inline-block rounded-full bg-[color-mix(in_srgb,var(--color-primary)_12%,transparent)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--color-primary)]">
                  {item.badge}
                </span>
                <h3 className="text-lg font-semibold text-[var(--color-text)]">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-[var(--color-muted)]">
                  {item.description}
                </p>
              </div>
              {item.serviceInterest ? (
                <TrackedLink
                  href={item.href}
                  trackType="quote"
                  ctaLocation="proven_results_card"
                  serviceInterest={item.serviceInterest}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-primary)] hover:underline"
                >
                  <span>{item.ctaLabel}</span>
                  <span aria-hidden="true">&rarr;</span>
                </TrackedLink>
              ) : (
                <Link
                  href={item.href}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-primary)] hover:underline"
                >
                  <span>{item.ctaLabel}</span>
                  <span aria-hidden="true">&rarr;</span>
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
