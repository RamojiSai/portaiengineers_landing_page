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

const ENGINEERING_IMAGE_DIMENSIONS: Record<string, { width: number; height: number }> = {
  "/images/services/process-engineering.webp": { width: 1536, height: 1024 },
  "/images/services/piping-3d.webp": { width: 1080, height: 608 },
  "/images/services/piping-engineering.webp": { width: 1536, height: 1024 },
  "/Instrumentation-Control-Engineering.webp": { width: 1600, height: 912 },
  "/images/services/piping-stress-analysis.webp": { width: 1536, height: 1024 },
  "/images/services/greenfield-project.webp": { width: 1536, height: 1024 },
  "/images/services/brownfield.webp": { width: 1536, height: 1024 },
  "/co2-capture.webp": { width: 992, height: 558 },
  "/images/services/general-arrangement.webp": { width: 1144, height: 755 },
};

const serviceDetails: ServiceDetail[] = [
  {
    slug: "process",
    title: "Process Engineering Services",
    metaTitle: "Process Engineering Services | Port AI Engineers",
    metaDescription:
      "Process engineering services covering design basis, heat & mass balances, equipment sizing & PFD/P&ID support across India, UAE, Saudi Arabia & Qatar.",
    h1: "Process Engineering Services",
    image: "/images/services/process-engineering.webp",
    imageAlt: "Industrial process engineering diagram",
    description: [
      "Port AI Engineers provides process engineering services, establishing thermodynamic, hydraulic, and operational foundations for safe, reliable industrial plant facilities.",
      "Our process engineers prepare design bases, heat and mass balances, utility consumption summaries, and operating envelopes aligned with downstream piping and instrumentation design.",
      "Serving EPC contractors and plant owners across India, the UAE, Saudi Arabia, and Qatar, we coordinate process boundary definitions, equipment duty specifications, and relief philosophy inputs cleanly before detailed engineering begins.",
      "Structured documentation keeps assumptions transparent across HAZOP reviews, procurement cycles, and multidisciplinary checks.",
    ],
    highlights: [
      "Process design basis and operating intent documentation",
      "Mass/energy balance coordination and hydraulic line sizing inputs",
      "Alignment with plant safety criteria and code requirements",
      "Equipment duty parameters and operational boundary definitions",
    ],
    deliverables: [
      "Process design basis documentation",
      "Operating envelopes and system constraints",
      "Equipment operating parameters and stream references",
      "Coordination-ready packages for P&ID and piping teams",
    ],
    outcomes: [
      "Reduced operational risk during detailed engineering",
      "Faster downstream piping and instrumentation execution",
      "Improved long-term process reliability and plant throughput",
    ],
    relatedServices: [
      { title: "PFD Design & Drafting Services", href: "/services/cad/pfd/" },
      { title: "P&ID Engineering & Drafting Services", href: "/services/cad/pid/" },
      { title: "Piping Engineering Services", href: "/services/engineering/piping-engineering/" },
      { title: "Instrumentation Engineering Services", href: "/services/engineering/instrumentation/" },
      { title: "Engineering Design Outsourcing", href: "/services/engineering-design-outsourcing/" },
    ],
    relatedArticles: [
      { title: "PFD vs. P&ID: Key Differences in Plant Engineering", href: "/blogs/pfd-vs-pid/" },
    ],
  },
  {
    slug: "piping-3d",
    title: "3D Piping Design Services",
    metaTitle: "3D Piping Design Services | Port AI Engineers",
    metaDescription:
      "3D piping design & modeling in AutoCAD Plant 3D, SP3D, E3D, PDMS & CADWORX with clash checks for India, UAE, Saudi Arabia & Qatar projects.",
    h1: "3D Piping Design Services",
    image: "/images/services/piping-3d.webp",
    imageAlt: "3D industrial piping engineering design",
    description: [
      "Port AI Engineers provides 3D piping design services, building spec-driven, constructability-ready 3D plant models in AutoCAD Plant 3D, SmartPlant 3D (SP3D), AVEVA E3D, PDMS, and CADWORX.",
      "Our engineers execute equipment modeling, pipe rack routing, nozzle orientation checks, valve access verification, and automated clash detection across structural, mechanical, and electrical trays before fabrication spools are released.",
      "Supporting EPCs, skid fabricators, and industrial plants across India, the UAE, Saudi Arabia, and Qatar, we align 3D piping models closely with ASME B31.3 / client piping specs and CAESAR II / AutoPIPE pipe stress markups.",
      "Models support clean GA plan extraction, fabrication isometric generation, and verified MTO reporting with fewer site modifications.",
    ],
    highlights: [
      "Spec-driven 3D modeling in Plant 3D, SP3D, E3D, PDMS & CADWORX",
      "Multidisciplinary clash detection and interference resolution",
      "Equipment nozzle orientation, pipe rack spacing & maintenance clearance checks",
      "Direct coordination with CAESAR II / AutoPIPE stress & fabrication teams",
    ],
    deliverables: [
      "Comprehensive spec-driven 3D piping and equipment models",
      "Interference and clash detection review reports",
      "Model coordinate references for GA and isometric extraction",
      "Preliminary MTO and pipe support coordinate packages",
    ],
    outcomes: [
      "Fewer site revisions and eliminated field clashes",
      "Better coordination between civil, structural, and piping teams",
      "Higher installation accuracy during shop and field assembly",
    ],
    relatedServices: [
      { title: "Piping Engineering Services", href: "/services/engineering/piping-engineering/" },
      { title: "Piping Isometric Drawing Services", href: "/services/cad/isometric/" },
      { title: "Piping Stress Analysis Services", href: "/services/engineering/piping-stress-analysis/" },
      { title: "GA & General Arrangement Drawings", href: "/services/cad/general-arrangement/" },
      { title: "Engineering Design Outsourcing", href: "/services/engineering-design-outsourcing/" },
    ],
    relatedArticles: [
      { title: "Anatomy of an Industrial General Arrangement (GA) Drawing", href: "/blogs/industrial-ga-drawing-anatomy/" },
      { title: "Industrial Plot Plan Development & Site Zoning Principles", href: "/blogs/industrial-plot-plan-site-zoning/" },
      { title: "Piping Stress Analysis for Reliable Operation", href: "/blogs/piping-stress-analysis/" },
    ],
  },
  {
    slug: "piping-engineering",
    title: "Piping Engineering Services",
    metaTitle: "Piping Engineering Services | Port AI Engineers",
    metaDescription:
      "Piping engineering services including piping material specs (PMS), line lists, wall thickness & MTOs for India, UAE, Saudi Arabia & Qatar plants.",
    h1: "Piping Engineering Services",
    image: "/images/services/piping-engineering.webp",
    imageAlt: "Industrial piping engineering design",
    description: [
      "Port AI Engineers provides comprehensive piping engineering services, defining piping material specifications (PMS), wall-thickness calculations, line lists, and valve schedules for process and utility plants.",
      "Our engineers coordinate pressure-temperature ratings, flange classes, corrosion allowances, and specialty piping components against ASME B31.3, ASME B31.1, API, and project client standards.",
      "Serving EPC contractors and industrial facilities across India, the UAE, Saudi Arabia, and Qatar, we deliver procurement-ready and fabrication-ready piping packages that bridge process intent cleanly into 3D modeling and stress analysis.",
      "Structured revision control ensures procurement MTOs, line designations, and isometric packages remain consistent through engineering and field erection.",
    ],
    highlights: [
      "ASME / API-aligned piping material specifications (PMS) & class sheets",
      "Comprehensive line lists, wall-thickness checks & rating verification",
      "Valve datasheets and specialty piping item coordination",
      "Procurement MTO, fabrication, and construction documentation",
    ],
    deliverables: [
      "Piping material specifications (PMS) and class sheets",
      "Comprehensive line lists and material selection schedules",
      "Valve data coordination and specialty item listings",
      "Compliance-ready engineering design documentation packages",
    ],
    outcomes: [
      "Improved code compliance and operational integrity",
      "Predictable material procurement and fabrication workflows",
      "Reduced plant maintenance risk and extended system lifecycle",
    ],
    relatedServices: [
      { title: "3D Piping Design Services", href: "/services/engineering/piping-3d/" },
      { title: "Piping Stress Analysis Services", href: "/services/engineering/piping-stress-analysis/" },
      { title: "P&ID Engineering & Drafting Services", href: "/services/cad/pid/" },
      { title: "Engineering Design Outsourcing", href: "/services/engineering-design-outsourcing/" },
    ],
    relatedArticles: [
      { title: "Piping Stress Analysis for Reliable Operation", href: "/blogs/piping-stress-analysis/" },
      { title: "PFD vs. P&ID: Key Differences in Plant Engineering", href: "/blogs/pfd-vs-pid/" },
    ],
  },
  {
    slug: "instrumentation",
    title: "Instrumentation Engineering Services",
    metaTitle: "Instrumentation Engineering Services | Port AI Engineers",
    metaDescription:
      "Instrumentation engineering services covering instrument index, control logic, hook-up drawings & field layouts for India, UAE, Saudi Arabia & Qatar.",
    h1: "Instrumentation Engineering Services",
    image: "/Instrumentation-Control-Engineering.webp",
    imageAlt: "Industrial instrumentation and control engineering",
    description: [
      "Port AI Engineers delivers specialized instrumentation engineering services, preparing control logic documentation, instrument indexes, hook-up references, and field device layouts for industrial facilities.",
      "Our engineers coordinate transmitter placement, control valve actuation, cable tray/junction box routing, and ESD/interlock boundaries closely with process and piping teams.",
      "Supporting EPCs and industrial plants across India, the UAE, Saudi Arabia, and Qatar, our structured I/O and field-location packages minimize startup delays and streamline loop checks during commissioning.",
      "Every deliverable aligns with client tagging standards and functional safety documentation requirements.",
    ],
    highlights: [
      "Control philosophy alignment and P&ID loop integration",
      "Instrumentation location, junction box & cable routing coordination",
      "Field device schedule, I/O list & installation hook-up drawings",
      "Integration-ready documentation for commissioning and loop checks",
    ],
    deliverables: [
      "Instrumentation layout plans and location drawings",
      "Control philosophy references and logic narrative schedules",
      "Instrument index coordination and I/O assignment references",
      "Integration-ready commissioning documentation packages",
    ],
    outcomes: [
      "Improved continuous plant monitoring and signal reliability",
      "Safer industrial operations through clear interlock definitions",
      "Consistent control strategy across all plant operating modes",
    ],
    relatedServices: [
      { title: "Process Engineering Services", href: "/services/engineering/process/" },
      { title: "P&ID Engineering & Drafting Services", href: "/services/cad/pid/" },
      { title: "Piping Engineering Services", href: "/services/engineering/piping-engineering/" },
      { title: "Engineering Design Outsourcing", href: "/services/engineering-design-outsourcing/" },
    ],
    relatedArticles: [
      { title: "PFD vs. P&ID: Key Differences in Plant Engineering", href: "/blogs/pfd-vs-pid/" },
    ],
  },
  {
    slug: "piping-stress-analysis",
    title: "Piping Stress Analysis Services",
    metaTitle: "Piping Stress Analysis Services | Port AI Engineers",
    metaDescription:
      "CAESAR II & AutoPIPE piping stress analysis evaluating thermal expansion, sustained loads & nozzle limits across India, UAE, Saudi Arabia & Qatar.",
    h1: "Piping Stress Analysis Services",
    image: "/images/services/piping-stress-analysis.webp",
    imageAlt: "Piping stress analysis engineering",
    description: [
      "Port AI Engineers delivers comprehensive piping stress analysis services in CAESAR II and AutoPIPE, evaluating thermal expansion, sustained pressure, weight, and occasional dynamic forces across critical piping lines.",
      "Our stress engineers qualify equipment nozzle loads against NEMA SM23, API 610, API 617, and manufacturer limits while optimizing rigid supports, expansion loops, guides, and spring hangers.",
      "Supporting engineering teams across India, the UAE, Saudi Arabia, and Qatar, analyses are checked against ASME B31.3 and ASME B31.1 acceptance criteria — protecting rotating machinery and pressure vessels from overstress.",
      "Stress reports and support markups feed directly back into 3D piping models and isometric drawings before shop fabrication.",
    ],
    highlights: [
      "CAESAR II & AutoPIPE static, thermal expansion & occasional load checks",
      "Nozzle qualification against API 610 / API 617 / NEMA / WRC limits",
      "Pipe support, guide, anchor, and spring hanger load optimization",
      "Clear stress markups coordinated directly with 3D piping designers",
    ],
    deliverables: [
      "Comprehensive piping stress analysis calculation reports",
      "Load case summary sheets and nozzle qualification summaries",
      "Pipe support load tables and spring hanger schedule references",
      "Compliance-ready engineering documentation and stress markups",
    ],
    outcomes: [
      "Reduced structural failure risk and eliminated pipe overstresses",
      "Protected rotating machinery nozzles and pressure equipment connections",
      "Better long-term plant reliability and verified code compliance",
    ],
    relatedServices: [
      { title: "3D Piping Design Services", href: "/services/engineering/piping-3d/" },
      { title: "Piping Engineering Services", href: "/services/engineering/piping-engineering/" },
      { title: "Piping Isometric Drawing Services", href: "/services/cad/isometric/" },
      { title: "Engineering Design Outsourcing", href: "/services/engineering-design-outsourcing/" },
    ],
    relatedArticles: [
      { title: "Piping Stress Analysis for Reliable Operation", href: "/blogs/piping-stress-analysis/" },
    ],
  },
  {
    slug: "greenfield-projects",
    title: "Greenfield Engineering Services",
    metaTitle: "Greenfield Engineering Services | Port AI Engineers",
    metaDescription:
      "Greenfield plant engineering services covering plot plans, battery limits, utility systems & 3D piping for India, UAE, Saudi Arabia & Qatar facilities.",
    h1: "Greenfield Engineering Services",
    image: "/images/services/greenfield-project.webp",
    imageAlt: "Greenfield industrial plant engineering project",
    description: [
      "Port AI Engineers delivers multidisciplinary greenfield engineering services, coordinating concept-to-detail plant design across new industrial and chemical developments.",
      "Our process, piping, instrumentation, and layout engineers work as one integrated unit covering plot plan zoning, battery limit coordination, utility headers, 3D piping modeling, and construction-ready GA/isometric deliverables.",
      "Supporting EPCs and plant developers across India, the UAE, Saudi Arabia, and Qatar, we design layouts with maintainability envelopes, crane access, and future debottlenecking space built in from day one.",
      "Structured IDR and milestone review packages minimize rework across civil, structural, and mechanical interfaces.",
    ],
    highlights: [
      "Concept-to-detail multidisciplinary plant engineering coordination",
      "Plot plan development, battery limit interfaces & utility routing",
      "Integrated design balancing safety clearances, access & constructability",
      "Phased IDC / IFR / IFC delivery aligned with EPC schedules",
    ],
    deliverables: [
      "Concept-to-detail multidisciplinary engineering packages",
      "Integrated utility distribution and plot coordination layouts",
      "Cross-discipline design coordination and review documentation",
      "Construction-ready deliverable sets structured for procurement",
    ],
    outcomes: [
      "Faster project ramp-up from initial concept to detailed execution",
      "Reduced scope changes through integrated cross-discipline planning",
      "Higher delivery confidence for industrial plant investments",
    ],
    relatedServices: [
      { title: "Industrial Plant Layout Services", href: "/services/engineering/plant-layout/" },
      { title: "3D Piping Design Services", href: "/services/engineering/piping-3d/" },
      { title: "Piping Engineering Services", href: "/services/engineering/piping-engineering/" },
      { title: "GA & General Arrangement Drawings", href: "/services/cad/general-arrangement/" },
      { title: "Engineering Design Outsourcing", href: "/services/engineering-design-outsourcing/" },
    ],
    relatedArticles: [
      { title: "Greenfield Projects: Planning for Future Capacity", href: "/blogs/greenfield-projects/" },
      { title: "Industrial Plot Plan Development & Site Zoning Principles", href: "/blogs/industrial-plot-plan-site-zoning/" },
    ],
  },
  {
    slug: "brownfield-projects",
    title: "Brownfield Engineering Services",
    metaTitle: "Brownfield Engineering Services | Port AI Engineers",
    metaDescription:
      "Brownfield retrofit engineering, tie-in packages, debottlenecking & as-built P&ID/3D updates for live plants in India, UAE, Saudi Arabia & Qatar.",
    h1: "Brownfield Engineering Services",
    image: "/images/services/brownfield.webp",
    imageAlt: "Brownfield industrial facility retrofit engineering",
    description: [
      "Port AI Engineers provides specialized brownfield engineering services, delivering retrofit layouts, debottlenecking designs, and tie-in packages for operating industrial plants.",
      "Our engineers verify existing as-built conditions against redlines, evaluate tight physical clearances in live racks, and eliminate clashes in operating industrial plants before shutdown windows begin.",
      "Supporting plant expansions and turnaround revamps across India, the UAE, Saudi Arabia, and Qatar, we sequence tie-in schedules, isometric modifications, and updated P&IDs cleanly around scheduled outages.",
      "Thorough upfront interference checks reduce turnaround risk, safeguard site crews, and help bring revamped units back on stream reliably.",
    ],
    highlights: [
      "As-built condition validation and tie-in point verification",
      "Retrofit planning designed around turnaround & shutdown windows",
      "Pipe-rack clash resolution and rerouting in live industrial units",
      "Updated P&ID, GA, 3D model, and fabrication isometric sets",
    ],
    deliverables: [
      "As-built validation packages and tie-in schedule references",
      "Retrofit and debottlenecking design documentation",
      "Operational risk mitigation notes and tie-in execution drawings",
      "Brownfield equipment and line replacement engineering packages",
    ],
    outcomes: [
      "Minimized operational downtime during plant revamps and tie-ins",
      "Safer retrofit execution within operating industrial facilities",
      "Predictable modification schedules aligned to turnaround windows",
    ],
    relatedServices: [
      { title: "Piping Engineering Services", href: "/services/engineering/piping-engineering/" },
      { title: "3D Piping Design Services", href: "/services/engineering/piping-3d/" },
      { title: "CAD Conversion Services", href: "/services/cad/conversion/" },
      { title: "Engineering Design Outsourcing", href: "/services/engineering-design-outsourcing/" },
    ],
    relatedArticles: [
      { title: "How to Convert PDF P&IDs into Editable CAD Drawings", href: "/blogs/pdf-pid-conversion/" },
      { title: "Anatomy of an Industrial General Arrangement (GA) Drawing", href: "/blogs/industrial-ga-drawing-anatomy/" },
    ],
  },
  {
    slug: "power-plants",
    title: "Power Plant Engineering Services",
    metaTitle: "Power Plant Engineering Services | Port AI Engineers",
    metaDescription:
      "Power plant BOP engineering, high-energy steam piping layout, stress analysis & CAD drafting for India, UAE, Saudi Arabia & Qatar facilities.",
    h1: "Power Plant Engineering Services",
    image: "/co2-capture.webp",
    imageAlt: "Power plant systems engineering layout",
    description: [
      "Port AI Engineers provides dedicated power plant engineering services, delivering multidisciplinary design documentation for captive power units, balance of plant (BOP) networks, and industrial utility systems.",
      "Our scope spans main and auxiliary steam headers, boiler feedwater and condensate loops, cooling water systems, fuel supply lines, and water-treatment packages.",
      "Serving power, cogeneration, and industrial utility projects across India, the UAE, Saudi Arabia, and Qatar, we coordinate thermal piping stress compliance alongside ASME B31.1, equipment arrangements, and instrumentation interlocks.",
      "Structured documentation streamlines stakeholder review, equipment tie-ins, procurement, and lifecycle plant maintenance.",
    ],
    highlights: [
      "Balance of plant (BOP) piping, steam & cooling water coordination",
      "High-temperature thermal expansion & ASME B31.1 compliance focus",
      "3D modeling, GA equipment layouts, and instrumentation loop packages",
      "Review-ready engineering documentation for utility & generation assets",
    ],
    deliverables: [
      "Discipline-aligned power system design outputs and specifications",
      "Balance of plant (BOP) piping and equipment layout coordination",
      "Compliance, safety, and operational boundary documentation",
      "Commissioning-ready documentation packages for generation systems",
    ],
    outcomes: [
      "Higher plant reliability across critical utility and power circuits",
      "Improved operational safety under demanding thermal conditions",
      "Consistent, structured project delivery for industrial energy systems",
    ],
    relatedServices: [
      { title: "Piping Engineering Services", href: "/services/engineering/piping-engineering/" },
      { title: "Piping Stress Analysis Services", href: "/services/engineering/piping-stress-analysis/" },
      { title: "Instrumentation Engineering Services", href: "/services/engineering/instrumentation/" },
      { title: "Engineering Design Outsourcing", href: "/services/engineering-design-outsourcing/" },
    ],
    relatedArticles: [
      { title: "Piping Stress Analysis for Reliable Operation", href: "/blogs/piping-stress-analysis/" },
    ],
  },
  {
    slug: "plant-layout",
    title: "Industrial Plant Layout Design Services",
    metaTitle: "Industrial Plant Layout Services | Port AI Engineers",
    metaDescription:
      "Industrial plant layout & plot plan engineering services optimizing equipment spacing, pipe racks & safety access across India, UAE, Saudi Arabia & Qatar.",
    h1: "Industrial Plant Layout Design Services",
    image: "/images/services/general-arrangement.webp",
    imageAlt: "Industrial plant layout and equipment arrangement design",
    description: [
      "Port AI Engineers provides industrial plant layout design services, translating process flow requirements and engineering criteria into organized, constructible facility arrangements for process units, utility blocks, and tank farms.",
      "Our engineering team coordinates comprehensive plot plan development and site zoning — evaluating land topography, prevailing wind direction, battery limit boundaries, primary pipe rack corridors, and phased future expansion.",
      "We support industrial project developers, EPC contractors, and plant consultants across India and the Gulf region, delivering plot planning and equipment layout packages for facilities in the UAE, Saudi Arabia, and Qatar.",
      "We coordinate equipment centerlines, foundation footprints, crane reach zones, and maintenance withdrawal envelopes directly with piping stress analysts and structural designers so 3D routing aligns cleanly with mechanical loads and thermal expansion.",
      "Safe personnel circulation, vehicular access roads, emergency egress corridors, and hazard separation distances remain embedded across every plot plan before detailed GA drawings and 3D piping design begin.",
    ],
    highlights: [
      "Plot plan development, site zoning, and battery-limit coordination",
      "Equipment spacing and multi-discipline spatial planning",
      "Crane reach, maintenance clearance, and egress corridor integration",
      "Coordinated handoff into 3D piping models and GA drawings",
    ],
    deliverables: [
      "Industrial plant layout and master plot plans",
      "Equipment positioning and unit zoning documentation",
      "Utility corridor and battery-limit coordination drawings",
      "Spatial study packages ready for GA and 3D piping execution",
    ],
    outcomes: [
      "Clearer spatial coordination between plant disciplines",
      "Better visibility of equipment access and maintenance requirements",
      "More organized plant layout documentation for downstream engineering",
      "Improved coordination of equipment, piping, and utility spaces",
    ],
    relatedServices: [
      { title: "GA & General Arrangement Drawings", href: "/services/cad/general-arrangement/" },
      { title: "3D Piping Design Services", href: "/services/engineering/piping-3d/" },
      { title: "Piping Engineering Services", href: "/services/engineering/piping-engineering/" },
      { title: "Greenfield Engineering Services", href: "/services/engineering/greenfield-projects/" },
      { title: "Engineering Design Outsourcing", href: "/services/engineering-design-outsourcing/" },
    ],
    relatedArticles: [
      { title: "Industrial Plot Plan Development & Site Zoning Principles", href: "/blogs/industrial-plot-plan-site-zoning/" },
      { title: "Anatomy of an Industrial General Arrangement (GA) Drawing", href: "/blogs/industrial-ga-drawing-anatomy/" },
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
  const canonical = `https://portaiengineers.com/services/engineering/${detail.slug}/`;
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

export default async function EngineeringServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const detail = serviceDetails.find((item) => item.slug === slug);

  if (!detail) {
    notFound();
  }

  const canonicalUrl = `https://portaiengineers.com/services/engineering/${detail.slug}/`;

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
    { name: "Engineering", url: "https://portaiengineers.com/services/engineering/" },
    { name: detail.h1, url: canonicalUrl },
  ]);

  const imageDimensions =
    ENGINEERING_IMAGE_DIMENSIONS[detail.image] ?? { width: 1536, height: 1024 };

  return (
    <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)]">
      <ServicePageTracker
        serviceSlug={detail.slug}
        serviceCategory="engineering"
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
            href="/services/engineering/"
            className="transition-colors hover:text-[var(--color-primary)]"
          >
            Engineering
          </Link>
          <span aria-hidden="true">→</span>
          <span className="min-w-0 break-words text-[var(--color-text)]" aria-current="page">
            {detail.h1}
          </span>
        </nav>

        {/* Back Link to Parent Engineering Division */}
        <div className="mt-4">
          <Link
            href="/services/engineering/"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-primary)] transition-colors hover:underline"
          >
            &larr; Back to Engineering Services
          </Link>
        </div>

        <div className="mt-6 space-y-10">
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-primary)]">
              Engineering Service Detail
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
                Explore complementary engineering disciplines and drafting workflows coordinated by Port AI Engineers.
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
                  Read in-depth technical guides, engineering standards, and industry best practices related to this discipline.
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
