import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ServicePageTracker from "../../../../components/analytics/ServicePageTracker";
import ServiceEnquiryBar from "../../../../components/sections/ServiceEnquiryBar";
import {
  JsonLd,
  createWebPageSchema,
  createBreadcrumbSchema,
  createServiceSchema,
} from "../../../../lib/schema";

type RelatedService = {
  title: string;
  href: string;
};

type ServiceDetail = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  image: string;
  imageAlt: string;
  description: string[];
  highlights: string[];
  deliverables: string[];
  outcomes: string[];
  relatedServices: RelatedService[];
  relatedArticles?: RelatedService[];
};

const CAD_IMAGE_DIMENSIONS: Record<string, { width: number; height: number }> = {
  "/images/services/pfd.webp": { width: 1024, height: 724 },
  "/images/services/cad-pid.webp": { width: 822, height: 518 },
  "/images/services/piping-isometric.webp": { width: 1536, height: 1024 },
  "/images/services/general-arrangement.webp": { width: 1144, height: 755 },
  "/images/services/cad-training.webp": { width: 992, height: 992 },
  "/images/services/cad-conversion.webp": { width: 1024, height: 516 },
  "/images/services/cad-automation.webp": { width: 1536, height: 1024 },
  "/images/services/fire-evacuation.webp": { width: 1536, height: 1024 },
};

const serviceDetails: ServiceDetail[] = [
  {
    slug: "pfd",
    title: "PFD Design & Drafting Services",
    metaTitle: "PFD Design & Drafting Services | Port AI Engineers",
    metaDescription:
      "Process Flow Diagram (PFD) engineering and CAD drafting services for EPCs and industrial plants in India, UAE, Saudi Arabia & Qatar.",
    h1: "PFD Design & Drafting Services",
    image: "/images/services/pfd.webp",
    imageAlt: "Process flow diagram for industrial engineering",
    description: [
      "Port AI Engineers provides Process Flow Diagram (PFD) design and drafting services, preparing structured schematics that illustrate major equipment sequences, mass and energy stream balances, and operating conditions across industrial systems.",
      "Our drafting specialists work in AutoCAD and AutoCAD Plant 3D to capture primary process flowpaths, stream temperature and pressure flags, control valve loops, and utility distribution headers as a dependable basis for downstream P&ID development.",
      "We support process consultants, EPC engineering teams, and industrial operators across India and the Gulf region, coordinating standardized PFD documentation for facilities in the UAE, Saudi Arabia, and Qatar.",
      "Each diagram incorporates consistent equipment numbering, standardized ISA/ISO symbology, and structured revision legends so process, mechanical, and instrumentation teams stay aligned throughout design reviews and HAZOP preparation.",
    ],
    highlights: [
      "System-level flow clarity and major equipment sequencing",
      "Major equipment tagging and operating stream identification",
      "Mass, heat, and utility balance reference coordination",
      "Review-ready drafting standards and legend consistency",
    ],
    deliverables: [
      "System-level Process Flow Diagrams highlighting major process equipment",
      "Stream identification and utility balance reference tables",
      "Standardized process legend, symbology, and tag conventions",
      "Review-ready native CAD and PDF packages for P&ID handoff",
    ],
    outcomes: [
      "Faster technical alignment across multi-discipline engineering teams",
      "Cleaner, seamless handoff into detailed P&ID drafting",
      "Reduced revision cycles in early industrial system design",
    ],
    relatedServices: [
      { title: "P&ID Design & Drafting Services", href: "/services/cad/pid/" },
      { title: "Process Engineering Services", href: "/services/engineering/process/" },
      { title: "Piping Engineering Services", href: "/services/engineering/piping-engineering/" },
      { title: "Engineering Design Outsourcing", href: "/services/engineering-design-outsourcing/" },
    ],
    relatedArticles: [
      { title: "PFD vs. P&ID: Key Differences in Plant Engineering", href: "/blogs/pfd-vs-pid/" },
    ],
  },
  {
    slug: "pid",
    title: "P&ID Design & Drafting Services",
    metaTitle: "P&ID Engineering & Drafting Services | Port AI Engineers",
    metaDescription:
      "P&ID engineering and CAD drafting services in AutoCAD & Plant 3D for industrial plants across India, UAE, Saudi Arabia & Qatar.",
    h1: "P&ID Design & Drafting Services",
    image: "/images/services/cad-pid.webp",
    imageAlt: "Piping and instrumentation diagram",
    description: [
      "Port AI Engineers delivers comprehensive P&ID engineering and drafting services, developing detailed piping and instrumentation diagrams that capture process control logic, piping specifications, and safety relief systems for industrial facilities.",
      "Our engineering specialists execute greenfield P&ID development, intelligent AutoCAD Plant 3D / CAD conversion from legacy redlines or PDFs, and multi-discipline consistency reviews across process, mechanical, and instrumentation teams.",
      "We support EPC contractors, engineering consultants, and industrial plant owners across India and the Gulf region, including outsourced drafting packages for facilities in the UAE, Saudi Arabia, and Qatar.",
      "Our sheets document line numbers, wall-thickness and spec breaks, valve tags, instrumentation bubbles, interlock loops, and battery-limit tie-ins — serving as the authoritative reference for HAZOP studies, procurement MTOs, and commissioning.",
    ],
    highlights: [
      "Detailed piping line designations, sizes, and spec breaks",
      "Instrument tag references and automated control logic clarity",
      "Valve schedules, safety relief valves, and inline specialty items",
      "HAZOP-ready symbology and audit-ready revision control",
    ],
    deliverables: [
      "Detailed P&ID sheets with control logic and interlock references",
      "Instrument and valve tagging coordination schedules",
      "Utility distribution and battery limit interface diagrams",
      "Review-ready revision tracking and drawing lifecycle packages",
    ],
    outcomes: [
      "Lower commissioning risk through clear control representation",
      "Improved plant safety and regulatory compliance verification",
      "Accurate construction and procurement references across disciplines",
    ],
    relatedServices: [
      { title: "PFD Design & Drafting Services", href: "/services/cad/pfd/" },
      { title: "Piping Engineering Services", href: "/services/engineering/piping-engineering/" },
      { title: "Instrumentation Engineering Services", href: "/services/engineering/instrumentation/" },
      { title: "CAD Conversion Services", href: "/services/cad/conversion/" },
      { title: "Engineering Design Outsourcing", href: "/services/engineering-design-outsourcing/" },
    ],
    relatedArticles: [
      { title: "PFD vs. P&ID: Key Differences in Plant Engineering", href: "/blogs/pfd-vs-pid/" },
      { title: "How to Convert PDF P&IDs into Editable CAD Drawings", href: "/blogs/pdf-pid-conversion/" },
    ],
  },
  {
    slug: "isometric",
    title: "Piping Isometric Drawing Services",
    metaTitle: "Piping Isometric Drawing Services | Port AI Engineers",
    metaDescription:
      "Fabrication-ready piping isometric drawings with weld maps, spool tags, and accurate BOM/MTOs for India, UAE, Saudi Arabia & Qatar plants.",
    h1: "Piping Isometric Drawing Services",
    image: "/images/services/piping-isometric.webp",
    imageAlt: "Industrial piping isometric drawing",
    description: [
      "Port AI Engineers delivers precision piping isometric drawing services, translating 3D plant models and GA layouts into fabrication-ready isometrics with comprehensive dimensional and welding details.",
      "Our isometric drafting workflows in AutoCAD Plant 3D, SP3D, E3D, PDMS, and CADWORX extract accurate cut pipe lengths, fitting orientations, spool boundaries, and integrated Bills of Materials (BOM) to streamline shop fabrication and site erection.",
      "Each drawing captures 3D routing in single-line projection with shop versus field weld designations, support tag coordinates, slope callouts, and NDT/PWHT line specification references.",
      "Supporting EPCs and pipe spool fabricators across India, the UAE, Saudi Arabia, and Qatar, every isometric package is checked against P&ID line lists and 3D model geometry before release.",
    ],
    highlights: [
      "Fabrication-ready clarity with complete three-dimensional coordinates",
      "Weld and spool accuracy with shop versus field weld distinction",
      "Integrated Bill of Materials (BOM) with cut pipe lengths and fitting data",
      "Reduced field changes and accelerated mechanical assembly",
    ],
    deliverables: [
      "Fully dimensioned piping isometric drawings",
      "Weld identification, spool references, and cut-length schedules",
      "Comprehensive material take-off (MTO) and component details",
      "Field-verified fabrication sheets ready for shop production",
    ],
    outcomes: [
      "Faster shop fabrication with minimized cutting and fitting errors",
      "Fewer site revisions and reduced mechanical installation delays",
      "Improved dimensional accuracy during field erection and tie-in",
    ],
    relatedServices: [
      { title: "3D Piping Design Services", href: "/services/engineering/piping-3d/" },
      { title: "Piping Engineering Services", href: "/services/engineering/piping-engineering/" },
      { title: "GA & General Arrangement Drawings", href: "/services/cad/general-arrangement/" },
      { title: "Engineering Design Outsourcing", href: "/services/engineering-design-outsourcing/" },
    ],
    relatedArticles: [
      { title: "Anatomy of an Industrial General Arrangement (GA) Drawing", href: "/blogs/industrial-ga-drawing-anatomy/" },
      { title: "CAD Services Designed with Precision", href: "/blogs/engineers-blog/" },
    ],
  },
  {
    slug: "general-arrangement",
    title: "General Arrangement (GA) Drawing Services",
    metaTitle: "GA & General Arrangement Drawings | Port AI Engineers",
    metaDescription:
      "Coordinated General Arrangement (GA) drawings for equipment, piping & structures across industrial plants in India, UAE, Saudi Arabia & Qatar.",
    h1: "General Arrangement (GA) Drawing Services",
    image: "/images/services/general-arrangement.webp",
    imageAlt: "Industrial general arrangement drawing",
    description: [
      "Port AI Engineers provides General Arrangement (GA) drawing services, producing coordinated equipment arrangement drawings, piping GA layouts, and structural spatial plans for industrial plants and process facilities.",
      "We coordinate equipment positioning, maintenance clearances, nozzle orientations, and operator transit corridors across civil, structural, and mechanical disciplines.",
      "Our team supports plant operators, EPC contractors, and skid fabricators across India and the Gulf region, delivering coordinated GA drawing sets for projects in the UAE, Saudi Arabia, and Qatar.",
      "Deliverables detail physical equipment centerlines, foundation footprints, platform elevations, crane laydown zones, and plan/section views — helping teams catch structural or operational interferences before site construction begins.",
    ],
    highlights: [
      "Optimized spatial coordination across equipment, piping, and structures",
      "Maintenance access, crane reach, and clearance envelope planning",
      "Comprehensive plan views, elevations, and detail cross-sections",
      "Operationally efficient layouts supporting safe facility workflows",
    ],
    deliverables: [
      "Detailed general arrangement layout plans with equipment positioning",
      "Elevation and cross-sectional coordination drawings",
      "Access corridors, walkway clearances, and maintenance drop annotations",
      "Coordination-ready revision packages for site construction teams",
    ],
    outcomes: [
      "Improved personnel safety and streamlined equipment access",
      "Better cross-discipline coordination between civil, piping, and structural teams",
      "Reduced site layout conflicts and optimized equipment footings",
    ],
    relatedServices: [
      { title: "Industrial Plant Layout Services", href: "/services/engineering/plant-layout/" },
      { title: "3D Piping Design Services", href: "/services/engineering/piping-3d/" },
      { title: "Piping Engineering Services", href: "/services/engineering/piping-engineering/" },
      { title: "Piping Isometric Drawing Services", href: "/services/cad/isometric/" },
      { title: "Engineering Design Outsourcing", href: "/services/engineering-design-outsourcing/" },
    ],
    relatedArticles: [
      { title: "Anatomy of an Industrial General Arrangement (GA) Drawing", href: "/blogs/industrial-ga-drawing-anatomy/" },
      { title: "Industrial Plot Plan Development & Site Zoning Principles", href: "/blogs/industrial-plot-plan-site-zoning/" },
    ],
  },
  {
    slug: "conversion",
    title: "CAD Conversion Services",
    metaTitle: "PDF & Legacy CAD Conversion Services | Port AI Engineers",
    metaDescription:
      "Convert legacy blueprints, scans & PDFs into clean, layered AutoCAD & intelligent P&ID files for India, UAE, Saudi Arabia & Qatar plants.",
    h1: "CAD Conversion Services",
    image: "/images/services/cad-conversion.webp",
    imageAlt: "CAD drawing conversion workflow",
    description: [
      "Port AI Engineers provides professional CAD conversion services, modernizing legacy paper blueprints, scanned TIF/PDF drawing sets, and outdated formats into dimensionally accurate, layered CAD vector files.",
      "Our conversion workflow avoids noisy auto-tracing — recreating clean geometry, standardized layer conventions, attributed title blocks, and true-scale dimensions aligned to your client CAD manual.",
      "Supporting plant brownfield revamps and digital archival programs across India, the UAE, Saudi Arabia, and Qatar, we also rebuild legacy P&IDs as intelligent, tagged diagrams ready for digital asset handover.",
      "Every converted sheet is checked line-by-line against source markups so operating plants gain dependable documentation for shutdown planning and modifications.",
    ],
    highlights: [
      "True vector redrawing — no jagged auto-trace artifacts",
      "Standardized layer conventions, block definitions, and dimension styles",
      "Dimensional and tag verification against original redlines and callouts",
      "QA-checked deliverables formatted for ongoing plant maintenance",
    ],
    deliverables: [
      "Clean, fully editable DWG / DXF CAD source files",
      "Layer, font, and block normalization packages",
      "Dimensionally validated drawing sets matching original schematics",
      "Revision-ready digital drawing libraries for plant engineering teams",
    ],
    outcomes: [
      "Faster updates and revamps to legacy plant drawing assets",
      "Improved data reuse and streamlined engineering collaboration",
      "Consistent, organized digital drawing archives across facilities",
    ],
    relatedServices: [
      { title: "P&ID Engineering & Drafting Services", href: "/services/cad/pid/" },
      { title: "CAD Automation Services", href: "/services/cad/automation/" },
      { title: "Brownfield Engineering Services", href: "/services/engineering/brownfield-projects/" },
      { title: "Engineering Design Outsourcing", href: "/services/engineering-design-outsourcing/" },
    ],
    relatedArticles: [
      { title: "How to Convert PDF P&IDs into Editable CAD Drawings", href: "/blogs/pdf-pid-conversion/" },
      { title: "Anatomy of an Industrial General Arrangement (GA) Drawing", href: "/blogs/industrial-ga-drawing-anatomy/" },
    ],
  },
  {
    slug: "training",
    title: "CAD Training Services",
    metaTitle: "Industrial CAD Training Services | Port AI Engineers",
    metaDescription:
      "Practical industrial CAD training for drafting teams covering P&IDs, GA layouts, layer standards & Plant 3D across India and the Gulf region.",
    h1: "CAD Training Services",
    image: "/images/services/cad-training.webp",
    imageAlt: "Industrial CAD training",
    description: [
      "Port AI Engineers delivers practical industrial CAD training services, equipping engineering and drafting teams with project-ready workflows for process plants and manufacturing facilities.",
      "Unlike generic software tutorials, our modules train teams on plant drafting conventions: title block control, XREF discipline overlays, dynamic block libraries, P&ID symbology, isometric annotation, and GA layout standards.",
      "Delivered from Hyderabad for Indian industrial teams and remotely for EPC drafting groups in the UAE, Saudi Arabia, and Qatar, sessions combine guided lab exercises with reusable project templates.",
      "Engineers and new drafters leave with structured checklists and template libraries that cut drawing review cycles and standardize deliverable quality across multi-user teams.",
    ],
    highlights: [
      "Workflow-specific drafting modules tailored to plant engineering operations",
      "Hands-on exercises built around P&IDs, isometrics, and GA layouts",
      "Standardization guidance covering layers, XREFs, blocks, and plotting",
      "Reusable templates and QC checklists for ongoing team onboarding",
    ],
    deliverables: [
      "Structured, workflow-based drafting training sessions",
      "Practical exercises, drafting templates, and reference guides",
      "Standardization checkpoints and technique validation reviews",
      "Reference documentation supporting consistent team drafting habits",
    ],
    outcomes: [
      "Higher drafting accuracy and reduced drawing revision cycles",
      "Faster team ramp-up and seamless onboarding for drafting staff",
      "Consistent, professional drawing output across the organization",
    ],
    relatedServices: [
      { title: "CAD Automation Services", href: "/services/cad/automation/" },
      { title: "CAD Conversion Services", href: "/services/cad/conversion/" },
      { title: "Engineering Design Outsourcing", href: "/services/engineering-design-outsourcing/" },
    ],
    relatedArticles: [
      { title: "CAD Services Designed with Precision", href: "/blogs/engineers-blog/" },
      { title: "ISO 9001:2015 QMS Certification Milestone", href: "/blogs/iso-9001-2015/" },
    ],
  },
  {
    slug: "automation",
    title: "CAD Automation Services",
    metaTitle: "CAD Drafting Automation Services | Port AI Engineers",
    metaDescription:
      "Custom CAD automation scripts, block libraries & batch checks for engineering teams in India, UAE, Saudi Arabia & Qatar.",
    h1: "CAD Automation Services",
    image: "/images/services/cad-automation.webp",
    imageAlt: "CAD automation and drafting workflow",
    description: [
      "Port AI Engineers provides custom CAD automation services, eliminating repetitive drafting tasks through tailored scripts, dynamic block libraries, and automated QA checks.",
      "We build repeatable CAD routines that automate title block population, layer compliance verification, batch DWG/PDF plotting, tag extraction, and drawing register generation.",
      "Supporting multi-discipline EPC and OEM drafting teams across India, the UAE, Saudi Arabia, and Qatar, our tools integrate cleanly into standard AutoCAD and plant design environments with clear user documentation.",
      "Automating deterministic drafting checks frees senior engineers and drafters to concentrate on constructability reviews, routing decisions, and client design milestones.",
    ],
    highlights: [
      "Automation scripts aligned to project CAD manuals and layer standards",
      "Elimination of repetitive manual title-block and attribute updates",
      "Automated batch plotting, layer checking, and drawing register extraction",
      "Documented routines built for long-term team maintainability",
    ],
    deliverables: [
      "Custom CAD automation scripts, tools, and macro routines",
      "Standardized dynamic drawing templates and block libraries",
      "Usage documentation and script maintenance guidelines",
      "Automated batch generation and QC processing workflows",
    ],
    outcomes: [
      "Reduced manual drafting hours on repetitive drawing packages",
      "Fewer human transcription errors in tags and title blocks",
      "Scalable delivery workflows supporting high-volume EPC submittals",
    ],
    relatedServices: [
      { title: "CAD Conversion Services", href: "/services/cad/conversion/" },
      { title: "Piping Isometric Drawing Services", href: "/services/cad/isometric/" },
      { title: "CAD Training Services", href: "/services/cad/training/" },
      { title: "Engineering Design Outsourcing", href: "/services/engineering-design-outsourcing/" },
    ],
    relatedArticles: [
      { title: "CAD Services Designed with Precision", href: "/blogs/engineers-blog/" },
      { title: "How to Convert PDF P&IDs into Editable CAD Drawings", href: "/blogs/pdf-pid-conversion/" },
    ],
  },
  {
    slug: "fire-evacuation",
    title: "Fire Evacuation Drawing Services",
    metaTitle: "Fire Evacuation Drawing Services | Port AI Engineers",
    metaDescription:
      "Code-aligned fire evacuation drawings, emergency exit route plans & fire safety equipment CAD maps for India, UAE, Saudi Arabia & Qatar facilities.",
    h1: "Fire Evacuation Drawing Services",
    image: "/images/services/fire-evacuation.webp",
    imageAlt: "Fire evacuation layout drawing",
    description: [
      "Port AI Engineers provides fire evacuation drawing services, developing clear, audit-ready emergency egress plans, escape route signage drawings, and fire protection equipment CAD maps for industrial plants and commercial facilities.",
      "We support facility owners, HSE consultants, and EPC teams across India and the Gulf region, aligning fire evacuation drawings with statutory life-safety practices and civil-defense review expectations across India, the UAE, Saudi Arabia, and Qatar.",
      "Each plan accurately plots primary and secondary escape routes, muster assembly points, fire extinguishers, hydrant/hose reel stations, call points, emergency lighting, and 'You Are Here' floor orientation.",
      "Built on verified plant GA and architectural floor plans, our colour-coded evacuation drawings remain legible in both wall-mounted safety displays and HSE audit binders.",
    ],
    highlights: [
      "High-visibility primary and secondary escape routes with distance clarity",
      "Standardized fire safety symbols (ISO 7010 / NFPA 170 alignment)",
      "Accurate mapping of extinguishers, hydrants, call points & assembly zones",
      "Audit-ready orientation and scale formatting for facility posting",
    ],
    deliverables: [
      "Facility fire evacuation route layouts and 'You Are Here' boards",
      "Emergency firefighting and alarm equipment location CAD maps",
      "Standardized symbol legends, bilingual labeling options & directional keys",
      "Print-ready PDF and editable DWG sheets formatted for HSE audits",
    ],
    outcomes: [
      "Improved workforce emergency orientation and muster clarity",
      "Audit-ready life-safety documentation for facility HSE inspections",
      "Consistent visual standards across multi-building industrial sites",
    ],
    relatedServices: [
      { title: "GA & General Arrangement Drawings", href: "/services/cad/general-arrangement/" },
      { title: "Industrial Plant Layout Services", href: "/services/engineering/plant-layout/" },
      { title: "CAD Conversion Services", href: "/services/cad/conversion/" },
      { title: "Engineering Design Outsourcing", href: "/services/engineering-design-outsourcing/" },
    ],
    relatedArticles: [
      { title: "Industrial Fire Evacuation Drawing Standards: Egress Mapping & Symbols", href: "/blogs/fire-evacuation-drawing-standards/" },
      { title: "Fire Evacuation Planning for Industrial Facilities", href: "/blogs/fire-evacuation-planning/" },
    ],
  },
];

export function generateStaticParams() {
  return serviceDetails.map((detail) => ({ slug: detail.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const detail = serviceDetails.find((item) => item.slug === slug);

  if (!detail) {
    return {
      title: "Service Detail",
    };
  }

  const title = { absolute: detail.metaTitle };
  const plainTitle = detail.metaTitle;
  const description = detail.metaDescription;
  const canonical = `https://portaiengineers.com/services/cad/${detail.slug}/`;
  const imageUrl = detail.image;

  return {
    title,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      title: plainTitle,
      description,
      url: canonical,
      siteName: "Port AI Engineers",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `${detail.title} - Port AI Engineers`,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: plainTitle,
      description,
      images: [imageUrl],
    },
  };
}

export default async function CadServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const detail = serviceDetails.find((item) => item.slug === slug);

  if (!detail) {
    notFound();
  }

  const canonicalUrl = `https://portaiengineers.com/services/cad/${detail.slug}/`;

  const serviceSchema = createServiceSchema({
    name: detail.h1,
    description: detail.metaDescription,
    url: canonicalUrl,
    serviceType: detail.title,
    image: detail.image,
  });

  const webPageSchema = createWebPageSchema({
    id: `${canonicalUrl}#webpage`,
    url: canonicalUrl,
    name: detail.metaTitle,
    description: detail.metaDescription,
  });

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", url: "https://portaiengineers.com/" },
    { name: "Services", url: "https://portaiengineers.com/services/" },
    { name: "CAD", url: "https://portaiengineers.com/services/cad/" },
    { name: detail.h1, url: canonicalUrl },
  ]);

  const imageDimensions =
    CAD_IMAGE_DIMENSIONS[detail.image] ?? { width: 1536, height: 1024 };

  return (
    <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)]">
      <ServicePageTracker
        serviceSlug={detail.slug}
        serviceCategory="cad"
        serviceName={detail.h1}
      />
      <JsonLd schema={serviceSchema} />
      <JsonLd schema={webPageSchema} />
      <JsonLd schema={breadcrumbSchema} />
      <section className="mx-auto w-full max-w-5xl px-6 py-16 sm:px-10 sm:py-20">
        {/* Hierarchical Breadcrumb Navigation */}
        <nav
          aria-label="Breadcrumb"
          className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-muted)] sm:tracking-[0.2em]"
        >
          <Link
            href="/"
            className="transition-colors hover:text-[var(--color-primary)]"
          >
            Home
          </Link>
          <span aria-hidden="true">→</span>
          <Link
            href="/services/"
            className="transition-colors hover:text-[var(--color-primary)]"
          >
            Services
          </Link>
          <span aria-hidden="true">→</span>
          <Link
            href="/services/cad/"
            className="transition-colors hover:text-[var(--color-primary)]"
          >
            CAD
          </Link>
          <span aria-hidden="true">→</span>
          <span className="min-w-0 break-words text-[var(--color-text)]" aria-current="page">
            {detail.h1}
          </span>
        </nav>

        {/* Back Link to Parent CAD Division */}
        <div className="mt-4">
          <Link
            href="/services/cad/"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-primary)] transition-colors hover:underline"
          >
            &larr; Back to CAD Services
          </Link>
        </div>

        <div className="mt-6 space-y-10">
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-primary)]">
              CAD Service Detail
            </p>
            <h1 className="text-3xl font-semibold tracking-tight text-[var(--color-text)] sm:text-4xl">
              {detail.h1}
            </h1>
          </div>

          <ServiceEnquiryBar
            serviceName={detail.h1}
            serviceSlug={detail.slug}
            location="service_detail_top"
          />

          <div className="overflow-hidden rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)]">
            <Image
              src={detail.image}
              alt={detail.imageAlt}
              width={imageDimensions.width}
              height={imageDimensions.height}
              priority
              fetchPriority="high"
              loading="eager"
              sizes="(max-width: 1024px) 100vw, 1024px"
              className="h-auto max-h-[70vh] w-full object-contain sm:max-h-[75vh]"
            />
          </div>

          <div className="grid gap-4 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5 text-xs sm:grid-cols-3 sm:text-sm">
            <div>
              <span className="block font-semibold uppercase tracking-[0.14em] text-[var(--color-primary)]">
                Regional Delivery
              </span>
              <Link
                href="/services/engineering-design-outsourcing/"
                className="mt-1 inline-block text-[var(--color-text)] hover:text-[var(--color-primary)] hover:underline"
              >
                India · UAE · Saudi Arabia · Qatar
              </Link>
            </div>
            <div>
              <span className="block font-semibold uppercase tracking-[0.14em] text-[var(--color-primary)]">
                Quality Framework
              </span>
              <Link
                href="/blogs/iso-9001-2015/"
                className="mt-1 inline-block text-[var(--color-text)] hover:text-[var(--color-primary)] hover:underline"
              >
                ISO 9001:2015 QMS Checked
              </Link>
            </div>
            <div>
              <span className="block font-semibold uppercase tracking-[0.14em] text-[var(--color-primary)]">
                Confidentiality
              </span>
              <Link
                href="/privacy/"
                className="mt-1 inline-block text-[var(--color-text)] hover:text-[var(--color-primary)] hover:underline"
              >
                NDA &amp; Sample Review Ready
              </Link>
            </div>
          </div>

          <div className="space-y-4 text-base text-[var(--color-muted)] sm:text-lg">
            {detail.description.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="space-y-6">
            <div>
              <h2 className="text-lg font-semibold text-[var(--color-text)]">
                Service Highlights
              </h2>
              <ul className="mt-3 space-y-2 text-sm text-[var(--color-muted)]">
                {detail.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-[var(--color-primary)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-[var(--color-text)]">
                Typical Deliverables
              </h2>
              <ul className="mt-3 space-y-2 text-sm text-[var(--color-muted)]">
                {detail.deliverables.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-[var(--color-primary)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-[var(--color-text)]">
                Expected Outcomes
              </h2>
              <ul className="mt-3 space-y-2 text-sm text-[var(--color-muted)]">
                {detail.outcomes.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-[var(--color-primary)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Related Services Cross-Linking Section */}
          <div className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 sm:p-8">
            <div className="space-y-4">
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-primary)]">
                  Cross-Disciplinary Coordination
                </span>
                <h2 className="mt-1 text-xl font-semibold text-[var(--color-text)]">
                  Related Services
                </h2>
              </div>
              <p className="text-sm text-[var(--color-muted)]">
                Explore complementary drafting capabilities and plant engineering disciplines coordinated by Port AI Engineers.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                {detail.relatedServices.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-2 text-xs font-semibold text-[var(--color-text)] transition-all hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
                  >
                    <span>{service.title}</span>
                    <span aria-hidden="true">&rarr;</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Related Technical Guides & Engineering Articles */}
          {detail.relatedArticles && detail.relatedArticles.length > 0 && (
            <div className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 sm:p-8">
              <div className="space-y-4">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-primary)]">
                    Technical Documentation &amp; Insights
                  </span>
                  <h2 className="mt-1 text-xl font-semibold text-[var(--color-text)]">
                    Technical Guides &amp; Engineering Articles
                  </h2>
                </div>
                <p className="text-sm text-[var(--color-muted)]">
                  Read in-depth technical guides, drafting standards, and engineering insights related to this discipline.
                </p>
                <div className="flex flex-wrap gap-3 pt-2">
                  {detail.relatedArticles.map((article) => (
                    <Link
                      key={article.href}
                      href={article.href}
                      className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-2 text-xs font-semibold text-[var(--color-text)] transition-all hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
                    >
                      <span>{article.title}</span>
                      <span aria-hidden="true">&rarr;</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Next Steps CTA */}
          <ServiceEnquiryBar
            serviceName={detail.h1}
            serviceSlug={detail.slug}
            location="service_detail_bottom"
          />
        </div>
      </section>
    </div>
  );
}
