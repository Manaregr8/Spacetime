"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { useBooking } from "@/context/BookingContext";
import styles from "./AddressHero.module.css";

/** SVG icon map for location highlight chips */
const HIGHLIGHT_ICONS = {
  security: (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
  metro: (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="5" y="2" width="14" height="20" rx="3" />
      <path d="M12 18h.01" />
      <path d="M8 7h8M8 12h8" />
    </svg>
  ),
  ev: (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
  ),
  cafe: (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
      <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
      <line x1="6" y1="1" x2="6" y2="4" />
      <line x1="10" y1="1" x2="10" y2="4" />
      <line x1="14" y1="1" x2="14" y2="4" />
    </svg>
  ),
  location: (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  ),
  restaurant: (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
      <path d="M7 2v20" />
      <path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3zm0 0v7" />
    </svg>
  ),
  internet: (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  ),
  parking: (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M9 17V7h4a3 3 0 0 1 0 6H9" />
    </svg>
  ),
  enterprise: (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  ),
  green: (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 22V12" />
      <path d="M12 12C12 12 7 10 5 5c4 0 7 3 7 7z" />
      <path d="M12 12c0 0 5-2 7-7-4 0-7 3-7 7z" />
    </svg>
  ),
  phone: (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.16 6.16l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  ),
  wellness: (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  ),
};

/**
 * AddressHero — dynamic hero section for individual address pages.
 *
 * Props:
 *   location  {Object}  A single location object from src/data/locations.js
 *
 * Layout (matches reference):
 *   • Promo tag — top RIGHT
 *   • H1 name — left, address row below it (no CTA buttons)
 *   • Gallery grid — full-width 2-column (hero + 2 thumbs)
 *   • Description section — tagline heading + body text
 *   • Location Highlights label + chips row
 */
export default function AddressHero({ location }) {
  const { openModal } = useBooking();

  // Refs for staggered fade-up animation
  const headerRef  = useRef(null);
  const galleryRef = useRef(null);
  const descRef    = useRef(null);

  // Shared IntersectionObserver factory
  const observeEl = (ref, delay = 0) => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => el.classList.add(styles.visible), delay);
          observer.unobserve(el);
        }
      },
      { threshold: 0.08 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  };

  useEffect(() => {
    const cleanups = [
      observeEl(headerRef, 0),
      observeEl(galleryRef, 80),
      observeEl(descRef, 160),
    ];
    return () => cleanups.forEach((fn) => fn && fn());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!location) return null;

  const {
    promoTag,
    name,
    tagline,
    address,
    mapsUrl,
    heroImage,
    galleryImages = [],
    description,
    highlights = [],
  } = location;

  return (
    <section className={styles.section}>
      <div className={styles.inner}>

        {/* ── Page header: promo right-aligned, then title + address ── */}
        <div ref={headerRef} className={`${styles.pageHeader} ${styles.fadeUp}`}>
          {/* Left: title + address */}
          <div className={styles.titleGroup}>
            <h1 className={styles.locationName}>{name}</h1>
            <div className={styles.addressRow}>
              <span className={styles.addressText}>{address}</span>
              {mapsUrl && (
                <>
                  <span className={styles.separator} aria-hidden="true">|</span>
                  <a
                    href={mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.mapsLink}
                    aria-label={`Open ${name} in Google Maps`}
                  >
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
                    </svg>
                    Open in Google Maps
                  </a>
                </>
              )}
            </div>
          </div>

          {/* Right: promo tag only (no CTA buttons) */}
          {promoTag && (
            <div className={styles.promoStrip} aria-label="Promotional offer">
              <span className={styles.promoDot} aria-hidden="true" />
              {promoTag}
            </div>
          )}
        </div>

        {/* ── Gallery grid ──────────────────────────────────── */}
        <div
          ref={galleryRef}
          className={`${styles.gallery} ${styles.fadeUp}`}
          role="region"
          aria-label={`${name} photo gallery`}
        >
          {/* Hero / main image */}
          <div className={styles.galleryHero}>
            <Image
              src={heroImage}
              alt={`${name} — main view`}
              fill
              priority
              quality={75}
              className={styles.galleryHeroImg}
              sizes="(max-width: 768px) 100vw, 65vw"
            />
            <div className={styles.galleryLabel}>
              <span className={styles.galleryBadge}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <path d="M3 9h18M9 21V9" />
                </svg>
                Gallery
              </span>
              <span className={styles.galleryBadge}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 8v4l3 3" />
                </svg>
                360° Tour
              </span>
            </div>
          </div>

          {/* Thumbnail 1 */}
          {galleryImages[0] && (
            <div className={styles.galleryThumb}>
              <Image
                src={galleryImages[0]}
                alt={`${name} — interior`}
                fill
                quality={65}
                className={styles.galleryThumbImg}
                sizes="(max-width: 768px) 100vw, 30vw"
              />
              <div className={styles.galleryThumbOverlay} aria-hidden="true" />
            </div>
          )}

          {/* Thumbnail 2 */}
          {galleryImages[1] && (
            <div className={styles.galleryThumb}>
              <Image
                src={galleryImages[1]}
                alt={`${name} — workspace`}
                fill
                quality={65}
                className={styles.galleryThumbImg}
                sizes="(max-width: 768px) 100vw, 30vw"
              />
              <div className={styles.galleryThumbOverlay} aria-hidden="true" />
            </div>
          )}
        </div>

        {/* ── Description + Highlights (below gallery) ────────── */}
        <div ref={descRef} className={`${styles.descSection} ${styles.fadeUp}`}>
          {tagline && (
            <h2 className={styles.descTitle}>{tagline}</h2>
          )}
          {description && (
            <p className={styles.descText}>{description}</p>
          )}

          {highlights.length > 0 && (
            <div className={styles.highlightsWrapper}>
              <p className={styles.highlightsLabel}>Location Highlights</p>
              <ul className={styles.highlights}>
                {highlights.map((h, i) => (
                  <li key={i} className={styles.highlight}>
                    <span className={styles.highlightIcon}>
                      {HIGHLIGHT_ICONS[h.icon] ?? null}
                    </span>
                    {h.label}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
