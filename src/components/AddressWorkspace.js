"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { useBooking } from "@/context/BookingContext";
import styles from "./AddressWorkspace.module.css";

/**
 * AddressWorkspace — "Find Your Ideal Workspace" section.
 *
 * Renders workspace-type tabs (Coworking, Private Office, Meeting Room)
 * and a "What's included?" card dynamically driven by the location object.
 *
 * Props:
 *   location  {Object}  A single location object from src/data/locations.js
 */

// ── Tab definitions ──────────────────────────────────────────────────────────
const WORKSPACE_TYPES = [
  {
    key: "coworking",
    label: "Coworking & Day Passes",
    subtitle: "For individuals",
    spacesMatch: ["Coworking Desk", "Dedicated Seat"],
    price: (loc) => loc.priceHighlight,
    priceNote: "+₹399/mo",
    included: [
      "Fully furnished, move-in ready desk",
      "Daily breakfast, craft coffee, and snacks",
      "Flexible term length options",
      "Access to all locations across our network",
      "Dedicated on-site support",
    ],
    image: (loc) => loc.galleryImages?.[0] || loc.heroImage,
  },
  {
    key: "private",
    label: "Private Offices",
    subtitle: "For individuals & teams",
    spacesMatch: ["Private Office", "Managed Office"],
    price: (loc) => loc.priceHighlight,
    priceNote: "/mo",
    included: [
      "Fully furnished, move-in ready office",
      "Daily breakfast, craft coffee, and snacks",
      "Flexible term length options",
      "Access to 200+ locations across 85+ cities",
      "Dedicated on-site support",
    ],
    image: (loc) => loc.heroImage,
  },
  {
    key: "meeting",
    label: "Meeting Rooms",
    subtitle: "For collaboration",
    spacesMatch: ["Meeting Room"],
    price: () => "From ₹75/hour",
    priceNote: "/hour",
    included: [
      "Professional AV-equipped meeting rooms",
      "High-speed dedicated fibre internet",
      "On-demand booking, no long-term commitment",
      "Whiteboard & presentation tools included",
      "Concierge support for every session",
    ],
    image: (loc) => loc.galleryImages?.[1] || loc.heroImage,
  },
];

export default function AddressWorkspace({ location }) {
  const { openModal } = useBooking();
  
  // Calculate default tab synchronously
  const defaultTab = WORKSPACE_TYPES.find((t) =>
    t.spacesMatch.some((s) => location?.spaces?.includes(s))
  )?.key || null;

  const [activeTab, setActiveTab] = useState(defaultTab);
  const sectionRef = useRef(null);
  const cardRef = useRef(null);

  // Update activeTab if location changes (unlikely in this context, but good practice)
  useEffect(() => {
    if (!location) return;
    const first = WORKSPACE_TYPES.find((t) =>
      t.spacesMatch.some((s) => location.spaces?.includes(s))
    );
    if (first) setActiveTab(first.key);
  }, [location]);

  // Fade-up on scroll
  useEffect(() => {
    const els = [sectionRef.current, cardRef.current].filter(Boolean);
    const observers = els.map((el, i) => {
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => el.classList.add(styles.visible), i * 120);
            obs.unobserve(el);
          }
        },
        { threshold: 0.06 }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  if (!location) return null;

  // Only show tabs whose space type is offered at this location
  const availableTabs = WORKSPACE_TYPES.filter((t) =>
    t.spacesMatch.some((s) => location.spaces?.includes(s))
  );

  const currentTab = WORKSPACE_TYPES.find((t) => t.key === activeTab);
  if (!currentTab) return null;

  const tabImage = currentTab.image(location);
  const tabPrice = currentTab.price(location);

  return (
    <section className={styles.section}>
      <div className={styles.inner}>

        {/* ── Section heading ─────────────────────────────── */}
        <div ref={sectionRef} className={`${styles.headingBlock} ${styles.fadeUp}`}>
          <h2 className={styles.heading}>Find Your Ideal Workspace</h2>

          {/* ── Tabs ────────────────────────────────────────── */}
          <div className={styles.tabs} role="tablist" aria-label="Workspace types">
            {availableTabs.map((tab) => (
              <button
                key={tab.key}
                id={`workspace-tab-${location.slug}-${tab.key}`}
                role="tab"
                aria-selected={activeTab === tab.key}
                className={`${styles.tab} ${activeTab === tab.key ? styles.tabActive : ""}`}
                onClick={() => setActiveTab(tab.key)}
              >
                <span className={styles.tabLabel}>{tab.label}</span>
                <span className={styles.tabSub}>{tab.subtitle}</span>
                {activeTab === tab.key && tabPrice && (
                  <span className={styles.tabPrice}>
                    {tabPrice}
                    <span className={styles.tabPriceNote}> {tab.priceNote}</span>
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* ── Sub-caption ──────────────────────────────────── */}
          <p className={styles.caption}>
            Move-in ready offices with monthly meeting room hours included with your membership.
          </p>
        </div>

        {/* ── Included card ────────────────────────────────── */}
        <div
          ref={cardRef}
          className={`${styles.card} ${styles.fadeUp}`}
          role="tabpanel"
          aria-labelledby={`workspace-tab-${location.slug}-${activeTab}`}
        >
          {/* Left: photo */}
          <div className={styles.cardImage}>
            {tabImage && (
              <Image
                src={tabImage}
                alt={`${location.name} — ${currentTab.label}`}
                fill
                quality={70}
                className={styles.cardImg}
                sizes="(max-width: 768px) 100vw, 35vw"
              />
            )}
            {/* Subtle gradient overlay */}
            <div className={styles.cardImgOverlay} aria-hidden="true" />
          </div>

          {/* Right: included list + CTA */}
          <div className={styles.cardContent}>
            <p className={styles.cardTitle}>What&apos;s included?</p>

            <ul className={styles.includedList} role="list">
              {currentTab.included.map((item, i) => (
                <li key={i} className={styles.includedItem}>
                  <span className={styles.checkIcon} aria-hidden="true">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="M8 12l2.5 2.5L16 9" />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <div className={styles.ctaGroup}>
              <button
                id={`workspace-tour-btn-${location.slug}-${activeTab}`}
                className={styles.ctaSecondary}
                onClick={() => openModal("tour")}
              >
                See What&apos;s Available
              </button>
              <button
                id={`workspace-book-btn-${location.slug}-${activeTab}`}
                className={styles.ctaPrimary}
                onClick={() => openModal("tour")}
              >
                Book a Tour
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
