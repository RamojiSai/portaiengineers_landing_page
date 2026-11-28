"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { trackQuoteCtaClick } from "../../lib/analytics";

const SLIDE_INTERVAL_MS = 6000;

const heroBackgrounds = [
  {
    image: "/Low-Carbon-Ammonia-image1.webp",
    alt: "Industrial process plant facility engineering background",
  },
  {
    image: "/hero-petrochemical-DMHvwGIB.webp",
    alt: "Petrochemical piping and industrial facility design background",
  },
  {
    image: "/images/hero/engineering-services-1.webp",
    alt: "Industrial plant engineering and CAD coordination background",
  },
  {
    image: "/images/hero/lightimg.webp",
    alt: "Precision industrial systems and piping engineering background",
  },
];

const coreDeliverables = [
  { label: "P&ID", href: "/services/cad/pid/" },
  { label: "PFD", href: "/services/cad/pfd/" },
  { label: "Piping Engineering", href: "/services/engineering/piping-engineering/" },
  { label: "3D Piping", href: "/services/engineering/piping-3d/" },
  { label: "GA Drawings", href: "/services/cad/general-arrangement/" },
  { label: "Isometric Drawings", href: "/services/cad/isometric/" },
];

export default function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [previousIndex, setPreviousIndex] = useState<number | null>(null);
  const [parallaxOffset, setParallaxOffset] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  const changeSlide = (nextIndex: number) => {
    setActiveIndex((current) => {
      if (nextIndex === current) return current;
      setPreviousIndex(current);
      return nextIndex;
    });
  };

  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setPrefersReducedMotion(mediaQuery.matches);
    updatePreference();
    mediaQuery.addEventListener("change", updatePreference);
    return () => mediaQuery.removeEventListener("change", updatePreference);
  }, []);

  useEffect(() => {
    if (previousIndex === null) return;
    const timeoutId = window.setTimeout(() => {
      setPreviousIndex(null);
    }, 1000);
    return () => window.clearTimeout(timeoutId);
  }, [previousIndex]);

  useEffect(() => {
    if (prefersReducedMotion) return;
    const intervalId = window.setInterval(() => {
      changeSlide((activeIndex + 1) % heroBackgrounds.length);
    }, SLIDE_INTERVAL_MS);

    return () => window.clearInterval(intervalId);
  }, [activeIndex, prefersReducedMotion]);

  useEffect(() => {
    if (prefersReducedMotion) {
      setParallaxOffset(0);
      return;
    }

    let rafId: number | null = null;

    const handleScroll = () => {
      if (rafId !== null) {
        return;
      }

      rafId = window.requestAnimationFrame(() => {
        setParallaxOffset(window.scrollY * 0.12);
        rafId = null;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafId !== null) {
        window.cancelAnimationFrame(rafId);
      }
    };
  }, [prefersReducedMotion]);

  const goToSlide = (index: number) => {
    changeSlide((index + heroBackgrounds.length) % heroBackgrounds.length);
  };

  return (
    <section className="relative flex min-h-[540px] items-center overflow-hidden bg-slate-950 lg:min-h-[620px]">
      <div className="absolute inset-0">
        {heroBackgrounds.map((slide, index) => {
          const isActive = index === activeIndex;
          const isPrevious = index === previousIndex;

          if (!isActive && !isPrevious) {
            return null;
          }

          return (
            <div
              key={slide.image}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${isActive ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
              style={{
                transform: prefersReducedMotion
                  ? "none"
                  : `translateY(${parallaxOffset}px) scale(${isActive ? 1.04 : 1})`,
                transitionProperty: "opacity, transform",
              }}
            >
              <Image
                src={slide.image}
                alt={slide.alt}
                fill
                priority={index === 0}
                fetchPriority={index === 0 ? "high" : "auto"}
                loading="eager"
                sizes="100vw"
                className="object-cover object-center"
              />
            </div>
          );
        })}
      </div>

      <div className="absolute inset-0 bg-[var(--color-hero-overlay)]" />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/65 to-slate-950/35" />

      <div className="relative z-10 mx-auto flex w-full max-w-6xl items-center px-5 pt-12 pb-16 sm:px-10 sm:pt-16 sm:pb-20 lg:py-24">
        <div className="flex w-full max-w-3xl flex-col items-start gap-5 text-left lg:pl-2">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-slate-950/55 px-3.5 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-sky-300 backdrop-blur-sm">
            Port AI Engineers Pvt. Ltd. · ISO 9001:2015 QMS
          </span>

          <h1 className="hero-gradient-text text-3xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-[3.25rem] lg:leading-[1.1]">
            Industrial Plant Engineering &amp; CAD Design Services
          </h1>

          <p className="hero-subtext max-w-2xl text-sm leading-relaxed sm:text-base lg:text-lg">
            Engineering design and CAD documentation support for EPC contractors, plant owners, engineering consultants, and industrial manufacturers — covering process schematics, piping engineering, 3D modeling, and fabrication-ready drawings.
          </p>

          <ul
            aria-label="Core engineering and CAD deliverables"
            className="flex flex-wrap items-center gap-2"
          >
            {coreDeliverables.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="inline-flex items-center rounded-lg border border-white/25 bg-slate-950/60 px-3 py-1.5 text-xs font-semibold tracking-wide text-white backdrop-blur-sm transition-colors duration-200 hover:border-sky-300 hover:bg-slate-900/80 hover:text-sky-200"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex w-full flex-col gap-3 pt-1 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center">
            <Link
              href="/contact/#contact-form"
              onClick={() => trackQuoteCtaClick("hero")}
              className="hero-cta-gradient inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full border border-transparent px-6 py-2.5 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
            >
              <span>Request a Project Quote</span>
              <span aria-hidden="true">&rarr;</span>
            </Link>
            <Link
              href="/services/"
              className="inline-flex min-h-[44px] items-center justify-center rounded-full border border-white/40 bg-slate-950/65 px-6 py-2.5 text-sm font-semibold text-white shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-sky-300 hover:bg-slate-900/85 hover:text-sky-200"
            >
              Explore Engineering Services
            </Link>
          </div>

          <p className="flex flex-wrap items-center gap-2 text-xs font-medium text-slate-200 sm:text-sm">
            <svg
              className="h-4 w-4 shrink-0 text-sky-300"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            <span>
              Initial enquiry response within 24 working hours · Serving India, UAE, Saudi Arabia &amp; Qatar
            </span>
          </p>
        </div>
      </div>

      <button
        type="button"
        aria-label="Previous slide"
        onClick={() => goToSlide(activeIndex - 1)}
        className="absolute left-5 top-1/2 z-20 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-[color-mix(in_srgb,var(--color-on-hero)_30%,transparent)] text-[var(--color-on-hero)] transition-colors duration-300 hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] xl:inline-flex"
      >
        <span className="text-lg">&#8249;</span>
      </button>
      <button
        type="button"
        aria-label="Next slide"
        onClick={() => goToSlide(activeIndex + 1)}
        className="absolute right-5 top-1/2 z-20 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-[color-mix(in_srgb,var(--color-on-hero)_30%,transparent)] text-[var(--color-on-hero)] transition-colors duration-300 hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] xl:inline-flex"
      >
        <span className="text-lg">&#8250;</span>
      </button>

      <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2 sm:bottom-6">
        {heroBackgrounds.map((slide, index) => (
          <button
            key={slide.image}
            type="button"
            aria-label={`Go to slide ${index + 1}`}
            onClick={() => goToSlide(index)}
            className="flex h-7 w-7 items-center justify-center rounded-full p-1"
          >
            <span
              className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${index === activeIndex
                  ? "bg-[var(--color-primary)] shadow-[0_0_12px_var(--color-primary-glow)]"
                  : "bg-[color-mix(in_srgb,var(--color-on-hero)_50%,transparent)] hover:bg-[var(--color-on-hero)]"
                }`}
            />
          </button>
        ))}
      </div>
    </section>
  );
}
