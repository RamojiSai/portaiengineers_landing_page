import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import AboutSection from "../components/sections/AboutSection";
import HeroSection from "../components/sections/HeroSection";
import ProvenResultsSection from "../components/sections/ProvenResultsSection";
import { JsonLd, createWebPageSchema } from "../lib/schema";

export const metadata: Metadata = {
  title: {
    absolute: "Port AI Engineers | Industrial Plant Engineering & CAD Services",
  },
  description:
    "Precision-focused industrial plant engineering, 3D piping design, process engineering, stress analysis, and advanced CAD automation services powered by AI.",
  alternates: {
    canonical: "https://portaiengineers.com/",
  },
  openGraph: {
    title: "Port AI Engineers | Industrial Plant Engineering & CAD Services",
    description:
      "Precision-focused industrial plant engineering, 3D piping design, process engineering, stress analysis, and advanced CAD automation services powered by AI.",
    url: "https://portaiengineers.com/",
    siteName: "Port AI Engineers",
    images: [
      {
        url: "/hero-petrochemical-DMHvwGIB.webp",
        width: 1200,
        height: 630,
        alt: "Port AI Engineers - Industrial Plant Engineering and CAD Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Port AI Engineers | Industrial Plant Engineering & CAD Services",
    description:
      "Precision-focused industrial plant engineering, 3D piping design, process engineering, stress analysis, and advanced CAD automation services powered by AI.",
    images: ["/hero-petrochemical-DMHvwGIB.webp"],
  },
};

export default function Home() {
  const engineeringServices = [
    {
      title: "3D Piping Engineering",
      description: "Accurate 3D routing for build-ready layouts.",
      href: "/services/engineering/piping-3d/",
      featured: true,
    },
    {
      title: "Piping Engineering",
      description: "Code-compliant piping systems and specifications.",
      href: "/services/engineering/piping-engineering/",
      featured: true,
    },
    {
      title: "Industrial Plant Layout",
      description: "Plot plans, equipment spacing, and spatial coordination.",
      href: "/services/engineering/plant-layout/",
      featured: false,
    },
    {
      title: "Process Engineering",
      description: "Process optimization from concept through delivery.",
      href: "/services/engineering/process/",
      featured: false,
    },
    {
      title: "Piping Stress Analysis",
      description: "Stress validation for reliability and safety.",
      href: "/services/engineering/piping-stress-analysis/",
      featured: false,
    },
    {
      title: "Instrumentation & Control",
      description: "Smart control strategies for safe operations.",
      href: "/services/engineering/instrumentation/",
      featured: false,
    },
    {
      title: "Greenfield Projects",
      description: "End-to-end engineering for new facilities.",
      href: "/services/engineering/greenfield-projects/",
      featured: false,
    },
    {
      title: "Brownfield Projects",
      description: "Revamps and upgrades with minimal downtime.",
      href: "/services/engineering/brownfield-projects/",
      featured: false,
    },
    {
      title: "Power Plants",
      description: "Comprehensive engineering for thermal, co-gen, and renewable plants.",
      href: "/services/engineering/power-plants/",
      featured: false,
    },
  ];

  const cadServices = [
    {
      title: "P&ID Drawings",
      description: "Detailed piping and instrumentation diagrams.",
      href: "/services/cad/pid/",
      featured: true,
    },
    {
      title: "Process Flow Diagram (PFD)",
      description: "Clear process mapping for early alignment.",
      href: "/services/cad/pfd/",
      featured: true,
    },
    {
      title: "General Arrangement",
      description: "Site and equipment layout coordination.",
      href: "/services/cad/general-arrangement/",
      featured: true,
    },
    {
      title: "Isometric Drawings",
      description: "Fabrication-ready isometrics and spools.",
      href: "/services/cad/isometric/",
      featured: false,
    },
    {
      title: "CAD Conversion",
      description: "Migrate legacy files to modern CAD.",
      href: "/services/cad/conversion/",
      featured: false,
    },
    {
      title: "CAD Automation",
      description: "Automations that reduce drafting time.",
      href: "/services/cad/automation/",
      featured: false,
    },
    {
      title: "CAD Training",
      description: "Upskill teams with practical CAD workflows.",
      href: "/services/cad/training/",
      featured: false,
    },
    {
      title: "Fire Evacuation Drawings",
      description: "Compliant safety plans and egress maps.",
      href: "/services/cad/fire-evacuation/",
      featured: false,
    },
  ];

  const primaryIndustries = [
    {
      name: "Oil & Gas",
      focus: "Piping systems, 3D modeling, P&ID documentation, and stress analysis for upstream, midstream, and gas processing facilities.",
    },
    {
      name: "Pharmaceuticals",
      focus: "Process flow diagrams, P&ID drafting, utility piping layouts, and general arrangement drawings for regulated production plants.",
    },
    {
      name: "Power",
      focus: "Balance-of-plant piping, thermal and co-generation documentation, isometric drawings, and plant layout engineering.",
    },
    {
      name: "Chemicals",
      focus: "Process engineering bases, P&ID/PFD packages, greenfield layouts, and brownfield revamp drafting support.",
    },
  ];

  const samplePlaceholders = [
    {
      discipline: "P&ID & PFD Schematics",
      deliverable: "Process & Instrumentation Sample Sheet",
      detail: "Redacted line lists, valve schedules, equipment tags, and control loop representations.",
    },
    {
      discipline: "3D Piping & Isometrics",
      deliverable: "Routing & Fabrication Spool Sample",
      detail: "Anonymized 3D piping arrangement views, weld callouts, and isometric BOM formats.",
    },
    {
      discipline: "GA & Plant Layout",
      deliverable: "Equipment & Plot Plan Sample",
      detail: "Confidentiality-screened general arrangement layouts, clearance zones, and pipe rack corridors.",
    },
  ];

  const isoScopes = [
    "Engineering Design Services",
    "Technical Consultancy",
    "Project Management Support",
    "Manpower Support",
    "Allied Engineering Services",
  ];

  const webPageSchema = createWebPageSchema({
    id: "https://portaiengineers.com/#webpage",
    url: "https://portaiengineers.com/",
    name: "Port AI Engineers | Industrial Plant Engineering & CAD Services",
    description:
      "Precision-focused industrial plant engineering, 3D piping design, process engineering, stress analysis, and advanced CAD automation services powered by AI.",
  });

  return (
    <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)]">
      <JsonLd schema={webPageSchema} />
      <HeroSection />

      <section
        className="relative scroll-mt-20 overflow-hidden bg-[var(--color-bg)] px-5 py-16 sm:px-10 sm:py-20"
        id="services"
      >
        <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-[color-mix(in_srgb,var(--color-primary)_10%,transparent)] blur-3xl" />
        <div className="absolute -bottom-24 -left-10 h-64 w-64 rounded-full bg-[color-mix(in_srgb,var(--color-primary)_10%,transparent)] blur-3xl" />
        <div className="relative mx-auto w-full max-w-6xl">
          <div className="flex flex-col gap-4">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-primary)]">
              Core Capabilities
            </span>
            <h2 className="text-3xl font-semibold tracking-tight text-[var(--color-text)] sm:text-4xl">
              Engineering and CAD services built for industrial delivery.
            </h2>
            <p className="max-w-2xl text-base text-[var(--color-muted)] sm:text-lg">
              Comprehensive plant engineering, 3D piping design, and fabrication-ready CAD deliverables supporting project execution from concept through commissioning.
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <Link
                href="/contact/"
                className="inline-flex min-h-[44px] items-center justify-center rounded-full bg-[var(--color-primary)] px-6 py-2.5 text-sm font-semibold text-[var(--color-on-primary)] transition-colors duration-300 hover:bg-[var(--color-primary-hover)]"
              >
                Request a Project Quote &rarr;
              </Link>
              <Link
                href="/services/"
                className="inline-flex min-h-[44px] items-center justify-center rounded-full border border-[var(--color-primary)] px-6 py-2.5 text-sm font-semibold text-[var(--color-primary)] transition-colors duration-300 hover:bg-[var(--color-primary)] hover:text-[var(--color-on-primary)]"
              >
                Explore All Services &rarr;
              </Link>
            </div>
          </div>

          <div className="mt-12 grid gap-12">
            <div>
              <div className="mb-6 flex items-center gap-6">
                <div className="h-px flex-1 bg-[color-mix(in_srgb,var(--color-border)_80%,transparent)]" />
                <h3 className="text-center text-2xl font-semibold tracking-tight text-[var(--color-text)] sm:text-3xl">
                  CAD Services
                </h3>
                <div className="h-px flex-1 bg-[color-mix(in_srgb,var(--color-border)_80%,transparent)]" />
              </div>
              <div className="grid auto-rows-fr gap-6 sm:grid-cols-2 xl:grid-cols-4">
                {cadServices.map((service) => (
                  <Link
                    key={service.title}
                    href={service.href}
                    className={`group flex h-full min-h-[190px] cursor-pointer flex-col justify-between rounded-2xl border bg-[linear-gradient(135deg,var(--color-primary-soft),var(--color-bg))] p-6 shadow-[0_12px_30px_var(--color-card-shadow)] transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[var(--color-primary)] hover:bg-[color-mix(in_srgb,var(--color-primary)_6%,var(--color-bg))] hover:shadow-[0_22px_44px_var(--color-primary-glow)] ${
                      service.featured
                        ? "border-[color-mix(in_srgb,var(--color-primary)_35%,var(--color-border))]"
                        : "border-transparent"
                    }`}
                  >
                    <div className="space-y-3">
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="text-lg font-semibold text-[var(--color-text)]">
                          {service.title}
                        </h4>
                        {service.featured && (
                          <span className="shrink-0 rounded-full bg-[color-mix(in_srgb,var(--color-primary)_12%,transparent)] px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-[var(--color-primary)]">
                            Core
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-[var(--color-muted)]">
                        {service.description}
                      </p>
                    </div>
                    <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-[var(--color-primary)]">
                      Learn More
                      <span className="transition-transform duration-300 group-hover:translate-x-1">
                        &rarr;
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <div className="mb-6 flex items-center gap-6">
                <div className="h-px flex-1 bg-[color-mix(in_srgb,var(--color-border)_80%,transparent)]" />
                <h3 className="text-center text-2xl font-semibold tracking-tight text-[var(--color-text)] sm:text-3xl">
                  Engineering Services
                </h3>
                <div className="h-px flex-1 bg-[color-mix(in_srgb,var(--color-border)_80%,transparent)]" />
              </div>
              <div className="grid auto-rows-fr gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {engineeringServices.map((service) => (
                  <Link
                    key={service.title}
                    href={service.href}
                    className={`group flex h-full min-h-[190px] cursor-pointer flex-col justify-between rounded-2xl border bg-[linear-gradient(135deg,var(--color-primary-soft),var(--color-bg))] p-6 shadow-[0_12px_30px_var(--color-card-shadow)] transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[var(--color-primary)] hover:bg-[color-mix(in_srgb,var(--color-primary)_6%,var(--color-bg))] hover:shadow-[0_22px_44px_var(--color-primary-glow)] ${
                      service.featured
                        ? "border-[color-mix(in_srgb,var(--color-primary)_35%,var(--color-border))]"
                        : "border-transparent"
                    }`}
                  >
                    <div className="space-y-3">
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="text-lg font-semibold text-[var(--color-text)]">
                          {service.title}
                        </h4>
                        {service.featured && (
                          <span className="shrink-0 rounded-full bg-[color-mix(in_srgb,var(--color-primary)_12%,transparent)] px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-[var(--color-primary)]">
                            Core
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-[var(--color-muted)]">
                        {service.description}
                      </p>
                    </div>
                    <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-[var(--color-primary)]">
                      Learn More
                      <span className="transition-transform duration-300 group-hover:translate-x-1">
                        &rarr;
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="industries"
        className="scroll-mt-20 border-t border-[var(--color-border)] bg-[var(--color-surface-strong)] px-5 py-14 sm:px-10 sm:py-16"
      >
        <div className="mx-auto w-full max-w-6xl space-y-8">
          <div className="space-y-3 text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-primary)]">
              Industries We Serve
            </span>
            <h2 className="text-2xl font-semibold tracking-tight text-[var(--color-text)] sm:text-3xl">
              Focused Support Across Process &amp; Industrial Sectors
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {primaryIndustries.map((industry) => (
              <div
                key={industry.name}
                className="flex h-full flex-col justify-between rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-[0_10px_28px_var(--color-card-shadow)]"
              >
                <div className="space-y-2.5">
                  <h3 className="text-lg font-semibold text-[var(--color-text)]">
                    {industry.name}
                  </h3>
                  <p className="text-sm leading-relaxed text-[var(--color-muted)]">
                    {industry.focus}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p className="mx-auto max-w-4xl text-center text-xs leading-relaxed text-[var(--color-muted)] sm:text-sm">
            Additional sectors supported across our engineering and CAD workflows include Refineries, LNG &amp; Gas Processing, Fertilizers, Food &amp; Beverage, Water &amp; Wastewater Treatment, Cement Plants, Steel &amp; Metals, Paints &amp; Coatings, Pulp &amp; Paper, Mining &amp; Minerals, Marine &amp; Offshore, Manufacturing Plants, and Industrial Utilities.
          </p>
        </div>
      </section>

      <section
        id="samples"
        className="border-t border-[var(--color-border)] bg-[var(--color-bg)] px-5 py-14 sm:px-10 sm:py-16"
      >
        <div className="mx-auto w-full max-w-6xl space-y-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="space-y-2">
              <span className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-primary)]">
                Technical Documentation
              </span>
              <h2 className="text-2xl font-semibold tracking-tight text-[var(--color-text)] sm:text-3xl">
                Anonymized Engineering Samples
              </h2>
              <p className="max-w-2xl text-sm text-[var(--color-muted)] sm:text-base">
                Engineering sample documentation available on request, subject to confidentiality and NDA review.
              </p>
            </div>
            <Link
              href="/contact/"
              className="inline-flex min-h-[44px] w-fit items-center justify-center rounded-full border border-[var(--color-primary)] px-5 py-2 text-sm font-semibold text-[var(--color-primary)] transition-colors duration-200 hover:bg-[var(--color-primary)] hover:text-[var(--color-on-primary)]"
            >
              Request Sample Documentation &rarr;
            </Link>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {samplePlaceholders.map((sample) => (
              <div
                key={sample.discipline}
                className="flex h-full flex-col justify-between rounded-2xl border border-dashed border-[var(--color-border-strong)] bg-[var(--color-surface)] p-6 shadow-[0_10px_28px_var(--color-card-shadow)]"
              >
                <div className="space-y-3">
                  <span className="inline-block rounded-full border border-[var(--color-border)] bg-[var(--color-bg)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--color-primary)]">
                    Confidentiality Review / NDA
                  </span>
                  <h3 className="text-lg font-semibold text-[var(--color-text)]">
                    {sample.discipline}
                  </h3>
                  <p className="text-xs font-medium uppercase tracking-[0.1em] text-[var(--color-muted-strong)]">
                    {sample.deliverable}
                  </p>
                  <p className="text-sm leading-relaxed text-[var(--color-muted)]">
                    {sample.detail}
                  </p>
                </div>
                <div className="mt-5 border-t border-[var(--color-border)] pt-3 text-xs font-medium text-[var(--color-muted)]">
                  Available upon enquiry and NDA clearance
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="certifications"
        className="border-t border-[var(--color-border)] bg-[var(--color-bg)] px-5 py-14 sm:px-10 sm:py-16"
      >
        <div className="mx-auto w-full max-w-6xl space-y-6">
          <div className="space-y-2 text-center sm:text-left">
            <span className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-primary)]">
              Quality &amp; Registration
            </span>
            <h2 className="text-2xl font-semibold tracking-tight text-[var(--color-text)] sm:text-3xl">
              Verified Management System &amp; Recognition
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <div className="group relative overflow-hidden rounded-3xl border border-[color-mix(in_srgb,var(--color-primary)_30%,transparent)] bg-[linear-gradient(135deg,color-mix(in_srgb,var(--color-primary)_10%,var(--color-bg)),var(--color-surface))] p-6 shadow-[0_16px_40px_var(--color-card-shadow)] sm:p-8">
              <div className="flex flex-col gap-5">
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-1.5">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-primary)]">
                      Quality Management System
                    </p>
                    <h3 className="text-xl font-semibold tracking-tight text-[var(--color-text)] sm:text-2xl">
                      ISO 9001:2015 Certified
                    </h3>
                  </div>
                  <div className="flex shrink-0 items-center gap-2.5 rounded-2xl border border-[color-mix(in_srgb,var(--color-primary)_30%,transparent)] bg-[color-mix(in_srgb,var(--color-primary)_10%,transparent)] px-3.5 py-2">
                    <Image
                      src="/ISOimage.webp"
                      alt="ISO 9001:2015 certification badge"
                      width={44}
                      height={44}
                      className="h-11 w-11 object-contain"
                    />
                  </div>
                </div>
                <p className="text-sm leading-relaxed text-[var(--color-muted)]">
                  Port AI Engineers Pvt. Ltd. maintains an ISO 9001:2015 certified Quality Management System covering our Hyderabad engineering operations across:
                </p>
                <ul className="flex flex-wrap gap-2">
                  {isoScopes.map((scope) => (
                    <li
                      key={scope}
                      className="rounded-full border border-[var(--color-border)] bg-[var(--color-bg)] px-3 py-1 text-xs font-medium text-[var(--color-text)]"
                    >
                      {scope}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap items-center gap-4 pt-1">
                  <Link
                    href="/blogs/iso-9001-2015/"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-primary)] hover:underline"
                  >
                    Read ISO 9001:2015 Scope &rarr;
                  </Link>
                  <Link
                    href="/blogs/"
                    className="text-sm font-medium text-[var(--color-muted)] transition-colors hover:text-[var(--color-primary)] hover:underline"
                  >
                    Explore Resources &rarr;
                  </Link>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-[0_16px_40px_var(--color-card-shadow)] sm:p-8">
              <div className="flex h-full flex-col justify-between gap-5">
                <div className="space-y-4">
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-1.5">
                      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-primary)]">
                        Entity Recognition
                      </p>
                      <h3 className="text-xl font-semibold tracking-tight text-[var(--color-text)] sm:text-2xl">
                        Startup India Recognized
                      </h3>
                    </div>
                    <div className="shrink-0 overflow-hidden rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)] p-1">
                      <Image
                        src="/images/certifications/startup-india.webp"
                        alt="Startup India Certificate of Recognition DIPP265006"
                        width={76}
                        height={54}
                        className="h-12 w-auto object-contain"
                      />
                    </div>
                  </div>
                  <p className="text-sm leading-relaxed text-[var(--color-muted)]">
                    Port AI Engineers Pvt. Ltd. is registered under the Startup India initiative in the Design Industry sector.
                  </p>
                  <dl className="grid grid-cols-2 gap-3 rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg)] p-4 text-xs sm:grid-cols-3">
                    <div>
                      <dt className="font-semibold uppercase tracking-[0.12em] text-[var(--color-muted)]">
                        Certificate No.
                      </dt>
                      <dd className="mt-1 font-semibold text-[var(--color-text)]">
                        DIPP265006
                      </dd>
                    </div>
                    <div>
                      <dt className="font-semibold uppercase tracking-[0.12em] text-[var(--color-muted)]">
                        Sector
                      </dt>
                      <dd className="mt-1 font-semibold text-[var(--color-text)]">
                        Design Industry
                      </dd>
                    </div>
                    <div>
                      <dt className="font-semibold uppercase tracking-[0.12em] text-[var(--color-muted)]">
                        Valid Upto
                      </dt>
                      <dd className="mt-1 font-semibold text-[var(--color-text)]">
                        04-05-2036
                      </dd>
                    </div>
                  </dl>
                </div>
                <div>
                  <Link
                    href="/blogs/startup-certified/"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-primary)] hover:underline"
                  >
                    View Recognition Details &rarr;
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AboutSection />
      <ProvenResultsSection />
    </div>
  );
}
