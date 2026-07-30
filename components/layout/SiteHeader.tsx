"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { siteConfig } from "@/content/site";

const links = [
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/articles", label: "Articles" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (headerRef.current) {
      headerRef.current.dataset.hydrated = "true";
    }
    const handleScroll = () => setScrolled(window.scrollY > 32);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [open]);

  return (
    <header
      ref={headerRef}
      className={`site-header ${scrolled || pathname !== "/" ? "site-header--solid" : ""}`}
    >
      <div className="site-header__inner shell">
        <Link className="wordmark" href="/" aria-label={`${siteConfig.name}, home`}>
          <span className="wordmark__mark" aria-hidden="true" />
          {siteConfig.name}
        </Link>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {links.map((link) => {
            const active = pathname.startsWith(link.href);
            return (
              <Link
                href={link.href}
                key={link.href}
                aria-current={active ? "page" : undefined}
                className={active ? "is-active" : ""}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <button
          ref={buttonRef}
          type="button"
          className="menu-button"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>

        <nav
          id="mobile-navigation"
          className={`mobile-nav ${open ? "is-open" : ""}`}
          aria-label="Mobile navigation"
          data-lenis-prevent
        >
          {links.map((link) => (
            <Link
              href={link.href}
              key={link.href}
              aria-current={pathname.startsWith(link.href) ? "page" : undefined}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
