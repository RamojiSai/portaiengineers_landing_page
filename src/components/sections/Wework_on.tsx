import Image from "next/image";

const designPlatforms = [
  { name: "AutoCAD", category: "2D Drafting & P&ID", image: "/autocad-CUR7zBdd.png" },
  { name: "AutoCAD Plant 3D", category: "3D Plant & Spec-Driven P&ID", image: "/autocad-plant3d-BBiTCeXl.webp" },
  { name: "SP3D", category: "Enterprise 3D Plant Design", image: "/sp3d-DUucQ2SU.png" },
  { name: "E3D", category: "AVEVA 3D Plant Modeling", image: null, text: "E3D" },
  { name: "PDMS", category: "3D Piping & Plant Layout", image: "/pdms-BoeT2FrU.png" },
  { name: "CADWORX", category: "Plant & Isometric Modeling", image: "/cadworx-Cu0tcT4O.webp" },
];

const stressAnalysisPlatforms = [
  { name: "CAESAR II", category: "Pipe Stress & Flexibility Analysis", image: "/caesar-ii-4cfuN5G6.png" },
  { name: "AutoPIPE", category: "Thermal & Structural Pipe Stress", image: "/autopipe-B2IGFGbp.png" },
];

export function WorkPlatformsSection() {
  return (
    <section className="border-t border-[var(--color-border)] bg-[var(--color-bg)] px-5 py-16 sm:px-10 sm:py-20">
      <div className="mx-auto w-full max-w-6xl space-y-12">
        <div className="space-y-3 text-center">
          <span className="inline-block rounded-full bg-[color-mix(in_srgb,var(--color-primary)_10%,transparent)] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-primary)]">
            Software Environment
          </span>
          <h2 className="text-2xl font-semibold tracking-tight text-[var(--color-text)] sm:text-3xl lg:text-4xl">
            CAD &amp; Pipe Stress Analysis Platforms
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-[var(--color-muted)] sm:text-base">
            Deliverables are authored natively in industry-standard plant design and stress analysis platforms to integrate cleanly with your project standards.
          </p>
        </div>

        <div className="space-y-8">
          <div className="space-y-4">
            <h3 className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-muted)] sm:text-left">
              2D CAD, P&amp;ID &amp; 3D Plant Modeling
            </h3>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
              {designPlatforms.map((platform) => (
                <PlatformCard key={platform.name} platform={platform} />
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-muted)] sm:text-left">
              Piping Stress &amp; Flexibility Validation
            </h3>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 lg:max-w-md">
              {stressAnalysisPlatforms.map((platform) => (
                <PlatformCard key={platform.name} platform={platform} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PlatformCard({
  platform,
}: {
  platform: { name: string; category: string; image: string | null; text?: string };
}) {
  return (
    <div className="group flex flex-col items-center justify-between rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4 text-center shadow-[0_10px_28px_var(--color-card-shadow)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--color-primary)] sm:p-5">
      {platform.image ? (
        <div className="mb-3 flex h-[56px] w-full items-center justify-center px-2">
          <Image
            src={platform.image}
            alt={`${platform.name} engineering software platform logo`}
            width={96}
            height={56}
            className="h-auto max-h-[56px] w-auto max-w-[96px] object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      ) : (
        <div className="mb-3 flex h-[56px] w-[56px] items-center justify-center rounded-xl bg-[var(--color-primary)] transition-transform duration-300 group-hover:scale-105">
          <span className="text-lg font-bold text-[var(--color-on-primary)]">
            {platform.text}
          </span>
        </div>
      )}
      <div className="space-y-1">
        <div className="text-sm font-semibold text-[var(--color-text)]">
          {platform.name}
        </div>
        <p className="text-[11px] leading-snug text-[var(--color-muted)]">
          {platform.category}
        </p>
      </div>
    </div>
  );
}
