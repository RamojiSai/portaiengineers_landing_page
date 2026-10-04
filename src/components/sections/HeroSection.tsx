"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

const SLIDE_INTERVAL_MS = 5000;

const slides = [
  {
    image: "/Low-Carbon-Ammonia-image1.webp",
    heading: "Engineering the Future of Intelligent Infrastructure",
    subtext:
      "Delivering advanced engineering solutions powered by AI to transform industrial systems.",
  },
  {
    image: "/hero-petrochemical-DMHvwGIB.webp",
    heading: "Designing the Future of Intelligent Engineering",
    subtext:
      "Leveraging advanced CAD and AI-driven workflows for scalable and precise engineering solutions.",
  },
  
  {
    image: "/images/hero/engineering-services-1.webp",
    heading: "Engineering Services Built for Scale",
    subtext:
      "Precision delivery across plant engineering, CAD automation, and complex infrastructure programs.",
  },
  {
    image: "/images/hero/lightimg.webp",
    heading: "Precision Engineering. Digitally Driven.",
    subtext:
      "Transforming complex systems into efficient, optimized, and intelligent designs.",
  },
];

export default function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [previousIndex, setPreviousIndex] = useState<number | null>(null);
  const [parallaxOffset, setParallaxOffset] = useState(0);

  const activeSlide = useMemo(() => slides[activeIndex], [activeIndex]);

  const changeSlide = (nextIndex: number) => {
    setActiveIndex((current) => {
      if (nextIndex === current) return current;
      setPreviousIndex(current);
      return nextIndex;
    });
  };

  useEffect(() => {
    if (previousIndex === null) return;
    const timeoutId = window.setTimeout(() => {
      setPreviousIndex(null);
    }, 1000);
    return () => window.clearTimeout(timeoutId);
  }, [previousIndex]);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      changeSlide((activeIndex + 1) % slides.length);
    }, SLIDE_INTERVAL_MS);

    return () => window.clearInterval(intervalId);
  }, [activeIndex]);

  useEffect(() => {
    let rafId: number | null = null;

    const handleScroll = () => {
      if (rafId !== null) {
        return;
      }

      rafId = window.requestAnimationFrame(() => {
        setParallaxOffset(window.scrollY * 0.15);
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
  }, []);

  const goToSlide = (index: number) => {
    changeSlide((index + slides.length) % slides.length);
  };

  return (
    <section className="relative flex h-[75vh] min-h-[520px] items-center overflow-hidden">
      <div className="absolute inset-0">
        {slides.map((slide, index) => {
          const isActive = index === activeIndex;
          const isPrevious = index === previousIndex;

          if (!isActive && !isPrevious) {
            return null;
          }

          return (
            <div
              key={slide.heading}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
              style={{
                transform: `translateY(${parallaxOffset}px) scale(${isActive ? 1.05 : 1})`,
                transitionProperty: "opacity, transform",
              }}
            >
              <Image
                src={slide.image}
                alt={slide.heading}
                fill
                priority={index === 0}
                fetchPriority={index === 0 ? "high" : "auto"}
                loading={index === 0 ? "eager" : "eager"}
                sizes="100vw"
                className="object-cover object-center"
              />
            </div>
          );
        })}
      </div>

      <div className="absolute inset-0 bg-[var(--color-hero-overlay)]" />

      <div className="relative z-10 mx-auto flex w-full max-w-6xl items-center px-6 py-24 sm:px-10">
        <div className="-mt-20 flex w-full max-w-2xl flex-col items-center gap-6 text-center sm:items-start sm:text-left sm:pl-0 lg:pl-2">
          <span
            key={`heading-${activeSlide.heading}`}
            className="fade-in-up text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-primary)]"
          >
            {activeSlide.heading}
          </span>
          <h1 className="hero-gradient-text text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            P&ID, Piping & Industrial Engineering Services
          </h1>
          <p
            key={`subtext-${activeSlide.heading}`}
            className="fade-in-up hero-subtext text-base sm:text-lg"
          >
            {activeSlide.subtext}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:justify-start">
            <a
              href="https://calendar.app.google/4EDU6NFyWQLtrG91A"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-cta-gradient rounded-full border border-transparent px-6 py-2.5 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
            >
              Schedule a Call
            </a>
            <Link
              href="#contact"
              className="rounded-full border border-[var(--color-primary)] bg-white/90 px-6 py-2.5 text-sm font-semibold text-[var(--color-primary)] shadow-sm backdrop-blur-sm transition-all duration-300 hover:bg-[var(--color-primary)] hover:text-white"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      <button
        type="button"
        aria-label="Previous slide"
        onClick={() => goToSlide(activeIndex - 1)}
        className="absolute left-5 top-1/2 z-20 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-[color-mix(in_srgb,var(--color-on-hero)_30%,transparent)] text-[var(--color-on-hero)] transition-colors duration-300 hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] md:inline-flex"
      >
        <span className="text-lg">&#8249;</span>
      </button>
      <button
        type="button"
        aria-label="Next slide"
        onClick={() => goToSlide(activeIndex + 1)}
        className="absolute right-5 top-1/2 z-20 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-[color-mix(in_srgb,var(--color-on-hero)_30%,transparent)] text-[var(--color-on-hero)] transition-colors duration-300 hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] md:inline-flex"
      >
        <span className="text-lg">&#8250;</span>
      </button>

      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2">
        {slides.map((slide, index) => (
          <button
            key={slide.heading}
            type="button"
            aria-label={`Go to slide ${index + 1}`}
            onClick={() => goToSlide(index)}
            className="flex h-7 w-7 items-center justify-center rounded-full p-1"
          >
            <span
              className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
                index === activeIndex
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
