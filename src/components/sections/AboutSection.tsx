"use client";

import Link from "next/link";

const deliveryStages = [
  {
    step: "01",
    title: "Scope & Input Review",
    detail:
      "Review process data, P&IDs, plot constraints, client standards, and deliverable lists.",
  },
  {
    step: "02",
    title: "Discipline Engineering & CAD",
    detail:
      "Execute process design, 3D piping modeling, stress validation, and CAD drafting in target software.",
  },
  {
    step: "03",
    title: "ISO 9001:2015 QA Checking",
    detail:
      "Multi-stage internal review for line specs, clash clearance, tagging consistency, and code compliance.",
  },
  {
    step: "04",
    title: "Client Review & Handover",
    detail:
      "Deliver clean native CAD/3D files, isometrics, BOMs, and revision-tracked PDF packages.",
  },
];

export default function AboutSection() {
  return (
    <section
      className="relative scroll-mt-20 overflow-hidden border-t border-[var(--color-border)] bg-[linear-gradient(135deg,var(--color-primary-soft),var(--color-bg))] px-5 py-16 sm:px-10 sm:py-20"
      id="about"
    >
      <div className="absolute -left-20 top-8 h-48 w-48 rounded-full bg-[color-mix(in_srgb,var(--color-primary)_10%,transparent)] blur-3xl" />
      <div className="absolute -bottom-16 right-6 h-56 w-56 rounded-full bg-[color-mix(in_srgb,var(--color-primary)_10%,transparent)] blur-3xl" />

      <div className="relative mx-auto w-full max-w-6xl">
        <div className="grid items-start gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="min-w-0 space-y-6 text-left">
            <div className="space-y-3">
              <span className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-primary)]">
                About Port AI Engineers
              </span>
              <h2 className="text-2xl font-semibold tracking-tight text-[var(--color-text)] sm:text-3xl lg:text-4xl">
                Structured Plant Engineering &amp; CAD Delivery
              </h2>
              <p className="text-sm leading-relaxed text-[var(--color-muted)] sm:text-base lg:text-lg">
                Port AI Engineers Pvt. Ltd. is an ISO 9001:2015 certified engineering and CAD design services company headquartered in Hyderabad, India.
              </p>
            </div>

            <div className="space-y-4 text-sm leading-relaxed text-[var(--color-muted)] sm:text-base">
              <p>
                We support EPC contractors, industrial plant owners, engineering consultants, and equipment manufacturers with dedicated process engineering, 3D piping design, pipe stress analysis, and fabrication-ready CAD documentation.
              </p>
              <p>
                Every engagement follows structured review checklists and standardized drafting automation so deliverables arrive coordinated across process, piping, instrumentation, and layout disciplines—reducing downstream site rework.
              </p>
            </div>

            <div className="flex flex-wrap gap-2.5">
              {[
                "ISO 9001:2015 QMS",
                "NDA & Confidentiality Ready",
                "Multi-Platform CAD & Stress",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-3.5 py-1.5 text-xs font-semibold tracking-[0.06em] text-[var(--color-primary)]"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-1">
              <Link
                href="/services/"
                className="inline-flex min-h-[44px] items-center justify-center rounded-full border border-[var(--color-primary)] px-6 py-2.5 text-sm font-semibold text-[var(--color-primary)] transition-colors duration-300 hover:bg-[var(--color-primary)] hover:text-[var(--color-on-primary)]"
              >
                Explore Engineering &amp; CAD Capabilities &rarr;
              </Link>
            </div>
          </div>

          <div className="relative mx-auto w-full min-w-0">
            <div className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-[0_20px_50px_var(--color-card-shadow)] sm:p-8">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[var(--color-border)] pb-4">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-primary)]">
                  Engineering Delivery Process
                </span>
                <span className="rounded-full bg-[color-mix(in_srgb,var(--color-primary)_10%,transparent)] px-3 py-1 text-[11px] font-semibold text-[var(--color-primary)]">
                  4-Stage Workflow
                </span>
              </div>

              <ol className="mt-5 space-y-3.5">
                {deliveryStages.map((stage) => (
                  <li
                    key={stage.step}
                    className="flex items-start gap-3.5 rounded-2xl border border-[var(--color-border)] bg-[color-mix(in_srgb,var(--color-surface-strong)_45%,var(--color-bg))] p-4"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[var(--color-primary)] text-xs font-bold text-[var(--color-on-primary)]">
                      {stage.step}
                    </span>
                    <div className="min-w-0 space-y-1">
                      <h3 className="text-sm font-semibold text-[var(--color-text)]">
                        {stage.title}
                      </h3>
                      <p className="text-xs leading-relaxed text-[var(--color-muted)]">
                        {stage.detail}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
