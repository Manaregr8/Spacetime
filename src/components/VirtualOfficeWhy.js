"use client";

import { useEffect, useRef } from "react";
import styles from "./VirtualOfficeWhy.module.css";

const reasons = [
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="6" y="10" width="36" height="28" rx="3" />
        <line x1="6" y1="18" x2="42" y2="18" />
        <line x1="14" y1="14" x2="14" y2="14.01" strokeWidth="2" />
        <line x1="10" y1="14" x2="10" y2="14.01" strokeWidth="2" />
        <rect x="12" y="24" width="16" height="2" rx="1" />
      </svg>
    ),
    text: "Get a premium address and save up to 90% on overhead costs of a physical space",
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="24" cy="24" r="16" />
        <ellipse cx="24" cy="24" rx="8" ry="16" />
        <line x1="8" y1="24" x2="40" y2="24" />
        <line x1="10" y1="16" x2="38" y2="16" />
        <line x1="10" y1="32" x2="38" y2="32" />
      </svg>
    ),
    text: "Partner with a trusted name that inspires confidence",
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M24 6C24 6 34 16 34 24C34 29.5 29.5 34 24 34C18.5 34 14 29.5 14 24C14 16 24 6 24 6Z" />
        <circle cx="24" cy="24" r="4" />
        <line x1="24" y1="34" x2="24" y2="42" />
        <line x1="18" y1="42" x2="30" y2="42" />
      </svg>
    ),
    text: "Choose from our centres across India",
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="10" y="6" width="28" height="36" rx="3" />
        <line x1="18" y1="14" x2="30" y2="14" />
        <line x1="18" y1="20" x2="30" y2="20" />
        <polyline points="18 28 22 32 30 24" />
      </svg>
    ),
    text: "Register in under 15 minutes",
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="20" cy="16" r="6" />
        <circle cx="32" cy="16" r="6" />
        <path d="M8 38C8 30 13.4 26 20 26C22 26 23.8 26.4 25.4 27.2" />
        <path d="M26 38C26 30 29.4 26 32 26C38.6 26 40 30 40 38" />
      </svg>
    ),
    text: "Get continued support from a dedicated team",
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 38V22L24 10L36 22V38H28V30H20V38H12Z" />
        <rect x="20" y="18" width="8" height="6" rx="1" />
      </svg>
    ),
    text: "Use your virtual address for business cards, websites, and official correspondence",
  },
];

export default function VirtualOfficeWhy() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add(styles.visible);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.section}>
      <div ref={ref} className={`${styles.inner} ${styles.fadeUp}`}>
        <h2 className={styles.title}>Why choose Virtual Office by Spacetime?</h2>

        <div className={styles.grid}>
          {reasons.map((item, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.iconWrapper}>{item.icon}</div>
              <p className={styles.cardText}>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
