"use client";

import Link from "next/link";
import { useBooking } from "@/context/BookingContext";
import styles from "./Footer.module.css";

const quickLinks = [
  { label: "Locations", href: "#our-addresses" },
  { label: "Spaces", href: "#our-spaces" },
  { label: "Virtual Office", href: "#virtual-office" },
  { label: "Community", href: "#events" },
  { label: "Book a Tour", href: "#contact" },
  { label: "Careers", href: "#contact" },
];

const locationLabels = [
  "Greater Kailash",
  "Saket",
  "NSIC Okhla",
  "Sarita Vihar",
  "Connaught Place",
  "Panchsheel Enclave",
];

const tickerItems = [
  "Coworking Sanctuaries",
  "Dedicated Desks",
  "Managed Offices",
  "Private Pods",
  "Virtual Offices",
  "Collaborative Spaces",
  "On-demand Meeting Rooms",
  "Events & Workshops",
  "Community & Networking",
  "Concierge",
  "Content Studios",
];

export default function Footer() {
  const { openModal } = useBooking();

  // Duplicate for seamless loop
  const allTicker = [...tickerItems, ...tickerItems];

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        {/* ── Main grid ── */}
        <div className={styles.grid}>
          {/* Col 1 — Brand */}
          <div className={styles.brand}>
            <div className={styles.logo}>
              <span className={styles.logoSpace}>space</span>
              <span className={styles.logoTime}>time</span>
            </div>
            <p className={styles.tagline}>
              Hosting ambition with warm hospitality. A curated sanctuary for those who build, create, and lead — designed to elevate every workday.
            </p>
          </div>

          {/* Col 2 — Quick Links */}
          <div className={styles.col}>
            <h4 className={styles.colHeading}>Quick Links</h4>
            <ul className={styles.linkList}>
              {quickLinks.map((l) => (
                <li key={l.label}>
                  {l.label === "Book a Tour" ? (
                    <button onClick={() => openModal("tour")} className={styles.navLink}>
                      {l.label}
                    </button>
                  ) : (
                    <Link href={l.href} className={styles.navLink}>
                      {l.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Locations */}
          <div className={styles.col}>
            <h4 className={styles.colHeading}>Locations</h4>
            <ul className={styles.linkList}>
              {locationLabels.map((label) => (
                <li key={label}>
                  <button onClick={openModal} className={styles.navLink}>{label}</button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Contacts */}
          <div className={styles.col}>
            <h4 className={styles.colHeading}>Contact</h4>
            <ul className={styles.contactList}>
              <li className={styles.contactItem}>
                <span className={styles.contactIcon}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.77 1.19 2 2 0 012.73 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.29 6.29l1.08-1.08a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                  </svg>
                </span>
                <a href="tel:+919810474703" className={styles.contactLink}>+91 98104 74703</a>
              </li>
              <li className={styles.contactItem}>
                <span className={styles.contactIcon}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </span>
                <a href="mailto:akash@myspacetime.in" className={styles.contactLink}>akash@myspacetime.in</a>
              </li>
              <li className={styles.contactItem}>
                <span className={styles.contactIcon}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                    <circle cx="12" cy="9" r="2.5" />
                  </svg>
                </span>
                <address className={styles.address}>
                  DLF Savitri, Greater Kailash II,<br />New Delhi 110 048
                </address>
              </li>
            </ul>

            {/* Social icons */}
            <div className={styles.socials}>
              <a href="https://in.linkedin.com/company/spacetimedelhi" target="_blank" rel="noopener noreferrer" className={styles.socialBtn} aria-label="LinkedIn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a href="https://instagram.com/spacetime_delhi" target="_blank" rel="noopener noreferrer" className={styles.socialBtn} aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
                </svg>
              </a>
              <a href="https://facebook.com/SpacetimeDelhi" target="_blank" rel="noopener noreferrer" className={styles.socialBtn} aria-label="Facebook">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
              <a href="https://wa.me/919818450490" target="_blank" rel="noopener noreferrer" className={styles.socialBtn} aria-label="WhatsApp">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.121.555 4.112 1.528 5.837L0 24l6.335-1.652A11.954 11.954 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.007-1.374l-.36-.213-3.724.976.994-3.634-.234-.373A9.818 9.818 0 1112 21.818z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ── Auto-scrolling ticker ── */}
      <div className={styles.ticker}>
        <div className={styles.tickerTrack}>
          {allTicker.map((item, i) => (
            <span key={i} className={styles.tickerItem}>
              {item}
              <span className={styles.tickerDot}>·</span>
            </span>
          ))}
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className={styles.bottomBar}>
        <div className={styles.bottomInner}>
          <div className={styles.bottomLeft}>
            <button className={styles.bottomCta} onClick={() => openModal("tour")}>
              Book a Private Walkthrough &rarr;
            </button>
            <p className={styles.copyright}>© 2026 Spacetime. A private club for those who build.</p>
          </div>
          <div className={styles.legal}>
            <Link href="/terms" className={styles.legalLink}>Terms &amp; Conditions</Link>
            <Link href="/privacy" className={styles.legalLink}>Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
