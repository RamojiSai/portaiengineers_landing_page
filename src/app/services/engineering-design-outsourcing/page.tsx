import type { Metadata } from "next";
import Link from "next/link";
import ServicePageTracker from "../../../components/analytics/ServicePageTracker";
import ServiceEnquiryBar from "../../../components/sections/ServiceEnquiryBar";
import {
  JsonLd,
  createBreadcrumbSchema,
  createFaqSchema,
  createServiceSchema,
  createWebPageSchema,
} from "../../../lib/schema";

const PAGE_URL = "https://portaiengineers.com/services/engineering-design-outsourcing/";

export const metadata: Metadata = {
  title: "Engineering Design Outsourcing Services",
  description:
    "Remote engineering design & CAD outsourcing from Hyderabad for EPCs and plant operators across India, UAE, Saudi Arabia, and Qatar.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Engineering Design Outsourcing India, UAE & KSA | Port AI Engineers",
    description:
      "Remote engineering design & CAD outsourcing from Hyderabad for EPCs and plant operators across India, UAE, Saudi Arabia, and Qatar.",
    url: PAGE_URL,
    siteName: "Port AI Engineers",
    images: [
      {
        url: "/images/services/piping-engineering.webp",
        width: 1536,
        height: 1024,
        alt: "Port AI Engineers - Engineering Design Outsourcing Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Engineering Design Outsourcing | Port AI Engineers",
    description:
      "Dedicated P&ID, 3D piping, GA drawing, stress analysis, and CAD drafting support for India, UAE, Saudi Arabia & Qatar projects.",
    images: ["/images/services/piping-engineering.webp"],
  },
};

const disciplines = [
  {
    title: "Process & P&ID Documentation",
    description:
      "PFDs, P&ID drafting, line list updates, as-built redline incorporation, and PDF-to-intelligent-CAD conversion.",
    href: "/services/cad/pid/",
  },
  {
    title: "3D Piping Modeling & Clash Checks",
    description:
      "Spec-driven equipment, piping, valve, and pipe support models in AutoCAD Plant 3D, SP3D, E3D, PDMS, and CADWORX.",
    href: "/services/engineering/piping-3d/",
  },
  {
    title: "Plant Layout, GA & Isometrics",
    description:
      "Plot plans, equipment GA drawings, fabrication isometrics, bill of materials (BOM), and brownfield tie-in packages.",
    href: "/services/engineering/plant-layout/",
  },
  {
    title: "Piping Stress & HSE Layouts",
    description:
      "Flexibility and pipe support evaluations in CAESAR II / AutoPIPE alongside plant fire evacuation and safety drawings.",
    href: "/services/engineering/piping-stress-analysis/",
  },
];

const regionalAlignment = [
  {
    region: "India (Domestic EPC & Manufacturing)",
    details:
      "Direct coordination across chemical, pharmaceutical, specialty manufacturing, utility, and power plants from our Hyderabad delivery office in alignment with OISD, BIS, ASME, and ISO engineering practices.",
  },
  {
    region: "United Arab Emirates (UAE)",
    details:
      "Remote engineering and CAD drafting support for EPC contractors, skid fabricators, and industrial facilities across Dubai, Abu Dhabi, and Sharjah — aligned with international ASME/API/NFPA conventions and Gulf Time Zone (UTC+4) daily overlap.",
  },
  {
    region: "Saudi Arabia (KSA)",
    details:
      "Dedicated piping modeling, P&ID drafting, MTO extraction, and as-built CAD conversion for industrial, process, and energy projects in Riyadh, Jubail, Yanbu, and Dammam working to client-supplied project specifications and Arab Standard Time (UTC+3) coordination.",
  },
  {
    region: "Qatar",
    details:
      "Structured CAD documentation, 3D plant coordination, and stress analysis support for downstream, utility, and industrial developments across Doha, Ras Laffan, and Mesaieed with same-day review turnaround.",
  },
];

const softwarePlatforms = [
  "AutoCAD",
  "AutoCAD Plant 3D",
  "SmartPlant 3D (SP3D)",
  "AVEVA E3D",
  "AVEVA PDMS",
  "CADWORX",
  "CAESAR II",
  "AutoPIPE",
];

const outsourcingFaqs = [
  {
    question: "How does remote engineering design outsourcing work across India, UAE, Saudi Arabia, and Qatar?",
    answer:
      "Our Hyderabad engineering team operates in IST (UTC+5:30), providing 6.5+ hours of daily overlap with UAE (UTC+4) and Saudi Arabia/Qatar (UTC+3). We align on your project specifications, layer standards, and review milestones from kickoff.",
  },
  {
    question: "How are outsourced engineering deliverables integrated with client workflows?",
    answer:
      "We align on your project specifications, layer and tagging conventions, and IDC/IFR/IFC review milestones from kickoff, delivering native CAD and pipe stress files directly into your engineering review process.",
  },
  {
    question: "Can we engage Port AI Engineers for a specific package rather than a full plant scope?",
    answer:
      "Yes. You can outsource discrete packages such as P&ID redline updates, legacy PDF-to-CAD conversion, 3D piping clash cleanup, fabrication isometrics, or pipe stress modeling on fixed-scope or milestone schedules.",
  },
  {
    question: "What quality assurance framework governs deliverables?",
    answer:
      "All design and drafting deliverables follow Port AI Engineers Private Limited's ISO 9001:2015 Quality Management System checks covering tag consistency, spec breaks, nozzle orientation, and revision control.",
  },
];

export default function EngineeringDesignOutsourcingPage() {
  const webPageSchema = createWebPageSchema({
    id: `${PAGE_URL}#webpage`,
    url: PAGE_URL,
    name: "Engineering Design Outsourcing Services | India, UAE, Saudi Arabia & Qatar",
    description:
      "Remote plant engineering, 3D piping, P&ID drafting, stress analysis, and CAD outsourcing from Hyderabad, India for EPCs across India and the Gulf region.",
  });

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", url: "https://portaiengineers.com/" },
    { name: "Services", url: "https://portaiengineers.com/services/" },
    { name: "Engineering Design Outsourcing", url: PAGE_URL },
  ]);

  const serviceSchema = createServiceSchema({
    name: "Engineering Design Outsourcing Services",
    description:
      "Remote multidisciplinary plant engineering and CAD drafting outsourcing across India, UAE, Saudi Arabia, and Qatar.",
    url: PAGE_URL,
    serviceType: "Engineering Design Outsourcing Services",
    image: "/images/services/piping-engineering.webp",
  });

  const faqSchema = createFaqSchema(outsourcingFaqs);

  return (
    <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)]">
      <ServicePageTracker
        serviceSlug="engineering-design-outsourcing"
        serviceCategory="outsourcing"
        serviceName="Engineering Design Outsourcing Services"
      />
      <JsonLd schema={webPageSchema} />
      <JsonLd schema={breadcrumbSchema} />
      <JsonLd schema={serviceSchema} />
      <JsonLd schema={faqSchema} />

      <section className="px-6 py-16 sm:px-10 sm:py-20">
        <div className="mx-auto max-w-5xl space-y-10">
          <div className="space-y-4">
            <nav
              aria-label="Breadcrumb"
              className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-primary)]"
            >
              <Link href="/" className="hover:underline">
                Home
              </Link>
              <span aria-hidden="true" className="px-2 text-[var(--color-muted)]">
                /
              </span>
              <Link href="/services/" className="hover:underline">
                Services
              </Link>
              <span aria-hidden="true" className="px-2 text-[var(--color-muted)]">
                /
              </span>
              <span aria-current="page" className="text-[var(--color-text)]">
                Engineering Design Outsourcing
              </span>
            </nav>

            <span className="inline-block rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-primary)]">
              India &amp; Global Engineering Support
            </span>

            <h1 className="text-3xl font-semibold tracking-tight text-[var(--color-text)] sm:text-5xl">
              Engineering Design Outsourcing Services
            </h1>

            <p className="max-w-3xl text-base leading-relaxed text-[var(--color-muted)] sm:text-lg">
              Port AI Engineers Private Limited provides dedicated engineering and CAD documentation support from Hyderabad, India — helping EPC contractors, engineering consultants, skid fabricators, and industrial plant owners scale capacity across India, the Gulf region, and international markets without adding fixed overhead.
            </p>
          </div>

          <ServiceEnquiryBar
            serviceName="Engineering Design Outsourcing Services"
            serviceSlug="engineering-design-outsourcing"
            location="service_detail_top"
          />

          <div className="space-y-6">
            <h2 className="text-2xl font-semibold tracking-tight text-[var(--color-text)]">
              Outsourced Engineering &amp; CAD Work Packages
            </h2>
            <div className="grid gap-6 sm:grid-cols-2">
              {disciplines.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="group flex flex-col justify-between rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-primary)] hover:shadow-[0_12px_30px_var(--color-card-shadow)]"
                >
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-[var(--color-text)] group-hover:text-[var(--color-primary)]">
                      {item.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-[var(--color-muted)]">
                      {item.description}
                    </p>
                  </div>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--color-primary)]">
                    Explore discipline &rarr;
                  </span>
                </Link>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 sm:p-8 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-primary)]">
                Regional Delivery Alignment
              </span>
              <h2 className="text-2xl font-semibold text-[var(--color-text)]">
                Delivery Coverage Across India &amp; the Gulf Region
              </h2>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              {regionalAlignment.map((item) => (
                <div
                  key={item.region}
                  className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg)] p-5 space-y-2"
                >
                  <h3 className="text-base font-semibold text-[var(--color-text)]">
                    {item.region}
                  </h3>
                  <p className="text-sm leading-relaxed text-[var(--color-muted)]">
                    {item.details}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 sm:p-8 space-y-4">
              <h2 className="text-xl font-semibold text-[var(--color-text)]">
                Native Software Platforms Supported
              </h2>
              <p className="text-sm leading-relaxed text-[var(--color-muted)]">
                Deliverables are authored directly in client-preferred plant design and stress analysis environments for seamless project integration:
              </p>
              <div className="flex flex-wrap gap-2">
                {softwarePlatforms.map((sw) => (
                  <span
                    key={sw}
                    className="rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] px-3 py-1.5 text-xs font-semibold text-[var(--color-text)]"
                  >
                    {sw}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 sm:p-8 space-y-4">
              <h2 className="text-xl font-semibold text-[var(--color-text)]">
                Engagement &amp; Quality Controls
              </h2>
              <ul className="space-y-2.5 text-sm text-[var(--color-muted)]">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[var(--color-primary)]" />
                  <span>ISO 9001:2015 QMS-aligned peer checking on tags, line specs, and clearances.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[var(--color-primary)]" />
                  <span>Direct technical scoping, CAD standard alignment, and kickoff coordination.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[var(--color-primary)]" />
                  <span>Synchronized IDC, IFR, and IFC revision cycles matching EPC schedules.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[var(--color-primary)]" />
                  <span>Initial technical scoping response within 24 working hours.</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 sm:p-8 space-y-5">
            <h2 className="text-xl font-semibold text-[var(--color-text)]">
              Outsourcing FAQs
            </h2>
            <div className="divide-y divide-[var(--color-border)]">
              {outsourcingFaqs.map((faq) => (
                <details key={faq.question} className="group py-4 first:pt-0 last:pb-0">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-sm font-semibold text-[var(--color-text)] sm:text-base">
                    <span>{faq.question}</span>
                    <span aria-hidden="true" className="text-[var(--color-primary)]">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--color-muted)]">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 sm:p-8 space-y-4">
            <h2 className="text-xl font-semibold text-[var(--color-text)]">
              Explore Related Services &amp; Guides
            </h2>
            <div className="flex flex-wrap gap-3">
              {[
                { title: "3D Piping Design Services", href: "/services/engineering/piping-3d/" },
                { title: "P&ID Design & Drafting", href: "/services/cad/pid/" },
                { title: "General Arrangement Drawings", href: "/services/cad/general-arrangement/" },
                { title: "Industrial Plant Layout", href: "/services/engineering/plant-layout/" },
                { title: "ISO 9001:2015 QMS Standard", href: "/blogs/iso-9001-2015/" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-2 text-xs font-semibold text-[var(--color-text)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
                >
                  <span>{link.title}</span>
                  <span aria-hidden="true">&rarr;</span>
                </Link>
              ))}
            </div>
          </div>

          <ServiceEnquiryBar
            serviceName="Engineering Design Outsourcing Services"
            serviceSlug="engineering-design-outsourcing"
            location="service_detail_bottom"
          />
        </div>
      </section>
    </div>
  );
}
