"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./VirtualOfficeSteps.module.css";

const steps = [
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="8" y="8" width="32" height="32" rx="3" />
        <line x1="8" y1="16" x2="40" y2="16" />
        <line x1="8" y1="24" x2="40" y2="24" />
        <line x1="8" y1="32" x2="40" y2="32" />
        <line x1="20" y1="8" x2="20" y2="40" />
        <line x1="32" y1="8" x2="32" y2="40" />
      </svg>
    ),
    title: "Choose Your Address",
    description: "Select the Spacetime location and plan that best aligns with your business.",
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="24" cy="20" r="8" />
        <path d="M24 28C24 28 36 32 36 40H12C12 32 24 28 24 28Z" />
        <circle cx="24" cy="20" r="3" />
      </svg>
    ),
    title: "Complete Your Documentation",
    description: "Share your KYC details and required documents. We'll guide you through every step.",
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="10" y="8" width="28" height="32" rx="3" />
        <line x1="16" y1="16" x2="32" y2="16" />
        <line x1="16" y1="22" x2="28" y2="22" />
        <path d="M16 30L20 34L32 22" />
      </svg>
    ),
    title: "We Take Care of the Rest",
    description: "Our team prepares your agreement, verifies your documents, and ensures everything is processed efficiently.",
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="10" y="6" width="28" height="36" rx="3" />
        <line x1="18" y1="14" x2="30" y2="14" />
        <line x1="18" y1="20" x2="30" y2="20" />
        <line x1="18" y1="26" x2="30" y2="26" />
        <line x1="18" y1="32" x2="26" y2="32" />
      </svg>
    ),
    title: "Start Building Your Presence",
    description: "Your virtual office is ready. Use your new business address with confidence and focus on growing your business.",
  },
];

const trustedLogos = [
  "Zomato",
  "Swiggy",
  "PhonePe",
  "Razorpay",
  "Meesho",
  "CRED",
];

export default function VirtualOfficeSteps() {
  const stepsRef = useRef(null);
  const trustRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (stepsRef.current) observer.observe(stepsRef.current);
    if (trustRef.current) observer.observe(trustRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.section}>
      {/* ── Steps Section ── */}
      <div ref={stepsRef} className={`${styles.stepsWrapper} ${styles.fadeUp}`}>
        <div className={styles.stepsInner}>
          <h2 className={styles.stepsTitle}>
            Your virtual business address, ready in minutes.
          </h2>

          <div className={styles.stepsLayout}>
            {/* Left: Image */}
            <div className={styles.stepsImageWrapper}>
              <Image
                src="/homebannerImages/Enhance_office_modern_202604020034.webp"
                alt="Virtual office registration"
                fill
                sizes="(max-width: 992px) 100vw, 55vw"
                className={styles.stepsImage}
              />
            </div>

            {/* Right: Steps */}
            <div className={styles.stepsList}>
              {steps.map((step, i) => (
                <div key={i} className={styles.stepItem}>
                  <div className={styles.stepIconWrapper}>
                    <div className={styles.stepIcon}>{step.icon}</div>
                    {i < steps.length - 1 && (
                      <div className={styles.stepConnector} />
                    )}
                  </div>
                  <div className={styles.stepText}>
                    <h4 className={styles.stepLabel}>{step.title}</h4>
                    <p className={styles.stepDesc}>{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Trust Logos ── */}
      <div ref={trustRef} className={`${styles.trustWrapper} ${styles.fadeUp}`}>
        <div className={styles.trustInner}>
          <h3 className={styles.trustTitle}>
            Trusted by businesses that are building what's next.
          </h3>
          <div className={styles.logoStrip}>
            {trustedLogos.map((name, i) => (
              <div key={i} className={styles.logoItem}>
                <span className={styles.logoText}>{name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
