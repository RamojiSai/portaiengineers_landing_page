"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import {
  SCHEDULE_CALL_URL,
  trackQuoteCtaClick,
  trackScheduleCallClick,
} from "../../lib/analytics";

type NavEntry = {
  label: string;
  href: string;
};

type NavItem = {
  label: string;
  href: string;
  items?: NavEntry[];
};

const navItems: NavItem[] = [
  {
    label: "Services",
    href: "/services/",
    items: [
      {
        label: "Engineering Services",
        href: "/services/engineering/",
      },
      { label: "CAD Services", href: "/services/cad/" },
    ],
  },
  {
    label: "Industries",
    href: "/#industries",
  },
  {
    label: "About",
    href: "/#about",
  },
  {
    label: "Resources",
    href: "/blogs/",
    items: [
      { label: "All Resources", href: "/blogs/" },
      { label: "Engineering Insights", href: "/blogs/engineers-blog/" },
      { label: "Company Updates", href: "/blogs/all/" },
    ],
  },
  {
    label: "Certifications",
    href: "/blogs/iso-9001-2015/",
    items: [
      { label: "ISO 9001:2015 Certified", href: "/blogs/iso-9001-2015/" },
      { label: "Startup India Certified", href: "/blogs/startup-certified/" },
    ],
  },
  {
    label: "Contact",
    href: "/contact/",
  },
];

function trackHeaderEvent(eventName: "quote_cta_click" | "schedule_call_click", location: string) {
  if (eventName === "quote_cta_click") trackQuoteCtaClick(location);
  if (eventName === "schedule_call_click") trackScheduleCallClick(location);
}

function isDropdownEntryActive(pathname: string, entryHref: string) {
  if (entryHref === "/blogs/") {
    return pathname === "/blogs" || pathname === "/blogs/";
  }
  return pathname.startsWith(entryHref);
}

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMobileMenu, setActiveMobileMenu] = useState<string | null>(null);
  const [dismissedDropdown, setDismissedDropdown] = useState<string | null>(null);
  const [isDark, setIsDark] = useState(false);
  const tabletToggleRef = useRef<HTMLButtonElement | null>(null);
  const mobileToggleRef = useRef<HTMLButtonElement | null>(null);
  const pathname = usePathname() ?? "";

  useEffect(() => {
    setIsOpen(false);
    setActiveMobileMenu(null);
    setDismissedDropdown(null);
  }, [pathname]);

  useEffect(() => {
    if (!isOpen) return;
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        setActiveMobileMenu(null);
        const visibleBtn =
          mobileToggleRef.current && mobileToggleRef.current.offsetParent !== null
            ? mobileToggleRef.current
            : tabletToggleRef.current;
        visibleBtn?.focus();
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isOpen]);

  useEffect(() => {
    try {
      const stored = localStorage.getItem("theme");
      if (stored === "dark") {
        setIsDark(true);
      } else if (stored === "light") {
        setIsDark(false);
      } else {
        setIsDark(document.documentElement.classList.contains("dark"));
      }
    } catch {
      setIsDark(document.documentElement.classList.contains("dark"));
    }
  }, []);

  const toggleTheme = () => {
    const nextDark = !isDark;
    setIsDark(nextDark);
    try {
      if (nextDark) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
    } catch {
      if (nextDark) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }
  };

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const toggleMobileSubmenu = (label: string) => {
    setActiveMobileMenu((prev) => (prev === label ? null : label));
  };

  const renderThemeIcon = () =>
    isDark ? (
      <svg
        className="h-4 w-4"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2" />
        <path d="M12 20v2" />
        <path d="m4.93 4.93 1.41 1.41" />
        <path d="m17.66 17.66 1.41 1.41" />
        <path d="M2 12h2" />
        <path d="M20 12h2" />
        <path d="m6.34 17.66-1.41 1.41" />
        <path d="m19.07 4.93-1.41 1.41" />
      </svg>
    ) : (
      <svg
        className="h-4 w-4"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
      </svg>
    );

  const isNavItemActive = (item: NavItem) => {
    if (item.label === "Services") {
      return pathname.startsWith("/services");
    }
    if (item.label === "Resources") {
      return (
        pathname.startsWith("/blogs") &&
        !pathname.startsWith("/blogs/iso-9001-2015") &&
        !pathname.startsWith("/blogs/startup-certified")
      );
    }
    if (item.items && item.items.length > 0) {
      return item.items.some((entry) => isDropdownEntryActive(pathname, entry.href));
    }
    if (item.href.startsWith("/#")) {
      return false;
    }
    return pathname.startsWith(item.href);
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[var(--color-border)] bg-[color-mix(in_srgb,var(--color-bg)_92%,transparent)] backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-2 px-4 py-3 sm:px-6 xl:gap-3 xl:px-8">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] xl:gap-3"
        >
          <Image
            src="/Logo.jpeg"
            alt="Port AI Engineers Logo"
            width={38}
            height={38}
            className="h-9 w-9 rounded-full object-cover"
            priority
          />
          <span className="whitespace-nowrap text-base font-semibold tracking-tight text-[var(--color-text)] xl:text-lg">
            Port AI Engineers
          </span>
        </Link>

        <nav
          aria-label="Primary navigation"
          className="hidden items-center gap-2.5 text-[13px] font-medium text-[var(--color-text)] lg:flex xl:gap-6 xl:text-sm"
        >
          {navItems.map((item) => {
            const hasDropdown = Boolean(item.items && item.items.length > 0);
            const isActive = isNavItemActive(item);

            if (!hasDropdown) {
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`whitespace-nowrap rounded-md py-0.5 transition-colors duration-200 hover:text-[var(--color-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2 ${
                    isActive ? "font-semibold text-[var(--color-primary)]" : ""
                  }`}
                >
                  {item.label}
                </Link>
              );
            }

            const isSuppressed = dismissedDropdown === item.label;

            return (
              <div
                key={item.label}
                className="group relative"
                onMouseEnter={() => {
                  if (isSuppressed) setDismissedDropdown(null);
                }}
                onBlur={(e) => {
                  if (!e.currentTarget.contains(e.relatedTarget as Node | null)) {
                    setDismissedDropdown((prev) => (prev === item.label ? null : prev));
                  }
                }}
                onKeyDown={(e) => {
                  if (e.key === "Escape") {
                    setDismissedDropdown(item.label);
                    e.currentTarget.querySelector("a")?.focus();
                  }
                }}
              >
                <Link
                  href={item.href}
                  className={`flex items-center gap-1 whitespace-nowrap rounded-md py-0.5 transition-colors duration-200 hover:text-[var(--color-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2 ${
                    isActive ? "font-semibold text-[var(--color-primary)]" : ""
                  }`}
                >
                  {item.label}
                  <span
                    className={`transition-transform duration-200 group-hover:rotate-180 ${
                      !isSuppressed ? "group-focus-within:rotate-180" : ""
                    } ${isActive ? "rotate-180" : ""}`}
                  >
                    <svg
                      className="h-3.5 w-3.5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </span>
                </Link>
                <div
                  className={`absolute left-0 top-full z-30 pt-2 ${
                    isSuppressed
                      ? "invisible pointer-events-none opacity-0"
                      : "invisible pointer-events-none opacity-0 transition-all duration-200 group-hover:visible group-hover:pointer-events-auto group-hover:opacity-100 group-focus-within:visible group-focus-within:pointer-events-auto group-focus-within:opacity-100"
                  }`}
                >
                  <div className="w-56 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-2 text-sm text-[var(--color-text)] shadow-md">
                    <div className="flex flex-col gap-1">
                      {item.items!.map((entry) => {
                        const isEntryActive = isDropdownEntryActive(pathname, entry.href);

                        return (
                          <Link
                            key={entry.label}
                            href={entry.href}
                            className={`rounded-md px-3 py-2 transition-colors duration-150 hover:bg-[var(--color-surface-strong)] hover:text-[var(--color-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] ${
                              isEntryActive
                                ? "bg-[var(--color-surface-strong)] font-medium text-[var(--color-primary)]"
                                : "text-[var(--color-text)]"
                            }`}
                          >
                            {entry.label}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </nav>

        <div className="hidden shrink-0 items-center gap-2 md:flex xl:gap-3">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--color-border)] text-[var(--color-text)] transition-colors duration-200 hover:border-[var(--color-border-strong)] hover:bg-[var(--color-surface-strong)] hover:text-[var(--color-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] xl:h-10 xl:w-10"
          >
            {renderThemeIcon()}
          </button>
          <a
            href={SCHEDULE_CALL_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackHeaderEvent("schedule_call_click", "header")}
            className="inline-flex items-center justify-center whitespace-nowrap rounded-lg border border-[var(--color-border)] px-2.5 py-2 text-xs font-medium text-[var(--color-text)] transition-colors duration-200 hover:border-[var(--color-border-strong)] hover:bg-[var(--color-surface-strong)] hover:text-[var(--color-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] xl:px-3.5 xl:text-sm"
          >
            Schedule a Call
          </a>
          <Link
            href="/contact/"
            onClick={() => trackHeaderEvent("quote_cta_click", "header")}
            className="inline-flex items-center justify-center whitespace-nowrap rounded-lg bg-[var(--color-primary)] px-2.5 py-2 text-xs font-medium text-[var(--color-on-primary)] shadow-xs transition-colors duration-200 hover:bg-[var(--color-primary-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2 xl:px-3.5 xl:text-sm"
          >
            Request a Project Quote
          </Link>
          <button
            ref={tabletToggleRef}
            type="button"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-nav-drawer"
            onClick={toggleMenu}
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-[var(--color-border)] text-[var(--color-text)] transition-colors duration-200 hover:border-[var(--color-border-strong)] hover:bg-[var(--color-surface-strong)] hover:text-[var(--color-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] lg:hidden"
          >
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              {isOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-[var(--color-border)] text-[var(--color-text)] transition-colors duration-200 hover:border-[var(--color-border-strong)] hover:bg-[var(--color-surface-strong)] hover:text-[var(--color-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]"
          >
            {renderThemeIcon()}
          </button>

          <button
            ref={mobileToggleRef}
            type="button"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-nav-drawer"
            onClick={toggleMenu}
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-[var(--color-border)] text-[var(--color-text)] transition-colors duration-200 hover:border-[var(--color-border-strong)] hover:bg-[var(--color-surface-strong)] hover:text-[var(--color-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]"
          >
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              {isOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      <div
        id="mobile-nav-drawer"
        className={`border-t border-[var(--color-border)] bg-[var(--color-bg)] lg:hidden ${
          isOpen ? "block max-h-[80vh] overflow-y-auto opacity-100" : "hidden"
        }`}
      >
        <nav
          aria-label="Mobile navigation"
          className="flex flex-col gap-3 px-6 py-4 text-sm font-medium text-[var(--color-text)]"
        >
          {navItems.map((item) => {
            const hasDropdown = Boolean(item.items && item.items.length > 0);
            const isActive = isNavItemActive(item);
            const submenuId = `mobile-submenu-${item.label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;
            const isSubmenuOpen = activeMobileMenu === item.label;

            if (!hasDropdown) {
              return (
                <div key={item.label} className="rounded-lg px-2 py-2">
                  <Link
                    href={item.href}
                    onClick={() => {
                      setIsOpen(false);
                      setActiveMobileMenu(null);
                    }}
                    className={`block rounded-md py-1 transition-colors duration-200 hover:text-[var(--color-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] ${
                      isActive ? "font-semibold text-[var(--color-primary)]" : ""
                    }`}
                  >
                    {item.label}
                  </Link>
                </div>
              );
            }

            return (
              <div key={item.label} className="flex flex-col gap-2">
                <div className="flex items-center justify-between rounded-lg px-2 py-1">
                  <Link
                    href={item.href}
                    onClick={() => {
                      setIsOpen(false);
                      setActiveMobileMenu(null);
                    }}
                    className={`flex-1 rounded-md py-1.5 text-left transition-colors duration-200 hover:text-[var(--color-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] ${
                      isActive ? "font-semibold text-[var(--color-primary)]" : ""
                    }`}
                  >
                    {item.label}
                  </Link>
                  <button
                    type="button"
                    aria-label={`${isSubmenuOpen ? "Collapse" : "Expand"} ${item.label} submenu`}
                    aria-expanded={isSubmenuOpen}
                    aria-controls={submenuId}
                    onClick={() => toggleMobileSubmenu(item.label)}
                    className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-md text-[var(--color-text)] transition-colors hover:text-[var(--color-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]"
                  >
                    <span
                      className={`inline-block transition-transform duration-200 ${
                        isSubmenuOpen ? "rotate-180" : ""
                      }`}
                    >
                      <svg
                        className="h-4 w-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </span>
                  </button>
                </div>
                <div
                  id={submenuId}
                  className={isSubmenuOpen ? "grid grid-rows-[1fr] opacity-100" : "hidden"}
                >
                  <div className="flex min-h-0 flex-col gap-1 pl-2">
                    {item.items!.map((entry) => {
                      const isEntryActive = isDropdownEntryActive(pathname, entry.href);

                      return (
                        <Link
                          key={entry.label}
                          href={entry.href}
                          onClick={() => {
                            setIsOpen(false);
                            setActiveMobileMenu(null);
                          }}
                          className={`rounded-md px-3 py-2 text-[var(--color-muted)] transition-colors duration-150 hover:bg-[var(--color-surface-strong)] hover:text-[var(--color-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] ${
                            isEntryActive
                              ? "bg-[var(--color-surface-strong)] font-medium text-[var(--color-primary)]"
                              : ""
                          }`}
                        >
                          {entry.label}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
          <div className="mt-2 flex flex-col gap-2 border-t border-[var(--color-border)] pt-3 md:hidden">
            <Link
              href="/contact/"
              onClick={() => {
                trackHeaderEvent("quote_cta_click", "mobile_menu");
                setIsOpen(false);
              }}
              className="flex min-h-[44px] w-full items-center justify-center rounded-lg bg-[var(--color-primary)] px-4 py-2.5 text-sm font-medium text-[var(--color-on-primary)] shadow-xs transition-colors hover:bg-[var(--color-primary-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2"
            >
              Request a Project Quote
            </Link>
            <a
              href={SCHEDULE_CALL_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                trackHeaderEvent("schedule_call_click", "mobile_menu");
                setIsOpen(false);
              }}
              className="flex min-h-[44px] w-full items-center justify-center rounded-lg border border-[var(--color-border)] px-4 py-2.5 text-sm font-medium text-[var(--color-text)] transition-colors hover:border-[var(--color-border-strong)] hover:bg-[var(--color-surface-strong)] hover:text-[var(--color-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]"
            >
              Schedule a Call
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
