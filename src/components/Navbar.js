"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useBooking } from "@/context/BookingContext";
import styles from "./Navbar.module.css";

const navLinks = [
  { label: "Locations", href: "#our-addresses" },
  { label: "Spaces", href: "#our-spaces" },
  { label: "Experience", href: "#the-experience" },
  { label: "Virtual Office", href: "#virtual-office" },
  { label: "Community", href: "#events" },
];

export default function Navbar() {
  const { openModal } = useBooking();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.inner}>
        {/* Logo */}
        <Link href="/" className={styles.logo}>
          <span className={styles.logoSpace}>space</span>
          <span className={styles.logoTime}>time</span>
        </Link>

        {/* Desktop Nav Links */}
        <ul className={styles.navLinks}>
          {navLinks.map(({ label, href }) => (
            <li key={label}>
              <Link href={href} className={styles.navLink}>
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right section */}
        <div className={styles.navRight}>
          <div className={styles.phoneGroup}>
            <PhoneIcon />
            <a href="tel:+919810474703" className={styles.phoneNum}>+91 98104 74703</a>
            <WaIcon />
          </div>
          <button className={styles.ctaBtn} onClick={openModal}>
            Book a Private Tour
          </button>
        </div>

        {/* Hamburger */}
        <button
          className={`${styles.hamburger} ${menuOpen ? styles.hamburgerOpen : ""}`}
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <span className={styles.bar} />
          <span className={styles.bar} />
          <span className={styles.bar} />
        </button>
      </div>

      {/* Backdrop */}
      <div
        className={`${styles.backdrop} ${menuOpen ? styles.backdropOpen : ""}`}
        onClick={() => setMenuOpen(false)}
      />

      {/* Slide-in drawer */}
      <div className={`${styles.drawer} ${menuOpen ? styles.drawerOpen : ""}`}>
        {/* Close button */}
        <button className={styles.drawerClose} onClick={() => setMenuOpen(false)} aria-label="Close menu">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        <nav className={styles.drawerNav}>
          {navLinks.map(({ label, href }, i) => (
            <Link
              key={label}
              href={href}
              className={styles.drawerLink}
              style={{ transitionDelay: menuOpen ? `${i * 60 + 80}ms` : "0ms" }}
              onClick={() => setMenuOpen(false)}
            >
              <span className={styles.drawerLinkNum}>0{i + 1}</span>
              {label}
            </Link>
          ))}
        </nav>

        <div className={styles.drawerBottom}>
          <div className={styles.drawerDivider} />
          <a href="tel:+919810474703" className={styles.drawerPhone}>+91 98104 74703</a>
          <button
            className={styles.drawerCta}
            onClick={() => { setMenuOpen(false); openModal(); }}
          >
            Book a Private Tour
          </button>
        </div>
      </div>
    </nav>
  );
}

function PhoneIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
    </svg>
  );
}

function WaIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="#25D366">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
