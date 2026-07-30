"use client";

import { useEffect, useRef } from "react";
import styles from "./VirtualOfficeWhy.module.css";

const reasons = [
  {
    heading: "Premium Business Addresses",
    text: "Establish your business at carefully selected commercial locations that enhance your company's credibility from day one.",
  },
  {
    heading: "Fast & Hassle-Free Setup",
    text: "From documentation to activation, our streamlined onboarding process gets your business up and running with minimal effort.",
  },
  {
    heading: "Company & GST Registration Support",
    text: "Documentation designed to simplify company incorporation and GST registration requirements.",
  },
  {
    heading: "Professional Mail Handling",
    text: "Receive and manage important business correspondence securely, even while you work remotely.",
  },
  {
    heading: "Upgrade as You Grow",
    text: "Move seamlessly from a virtual office to meeting rooms, dedicated desks, private cabins, or managed office spaces—all within the Spacetime ecosystem.",
  },
  {
    heading: "Backed by the Spacetime Experience",
    text: "Every virtual office is supported by professionally managed centres, hospitality-driven teams, and beautifully designed workspaces that reflect your brand when clients visit.",
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
        <h2 className={styles.title}>Why businesses <span style={{ color: "#b89257ff", fontWeight: "700" }}>choose Spacetime</span></h2>

        <div className={styles.grid}>
          {reasons.map((item, i) => (
            <div key={i} className={styles.card}>
              <span className={styles.number}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className={styles.cardHeading}>{item.heading}</h3>
              <p className={styles.cardText}>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
