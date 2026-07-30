"use client";

import { useEffect, useRef } from "react";
import { useBooking } from "@/context/BookingContext";
import styles from "./VirtualOfficePlans.module.css";

const plansData = [
  {
    title: "Business Registration",
    description:
      "Everything needed to establish your company.",
    features: [
      "Registered office for incorporation.",
      "Premium business presence.",
      "Room to grow with spacetime."
    ],
    pricing: [
      { duration: "12 months", price: "₹1,799" },
      { duration: "24 months", price: "₹1,549" },
    ],
  },
  {
    title: "GST Ready",
    description:
      "Ideal for businesses requiring GST registration support.",
    features: [
      "GST-ready documentation.",
      "Premium address, Secure correspondence handling.",
      "Business support when you need it."
    ],
    pricing: [
      { duration: "12 months", price: "₹1,999" },
      { duration: "24 months", price: "₹1,749" },
    ],
  },
  {
    title: "Business Presence",
    description:
      "For a professional mailing and registered address.",
    features: ["Premium commercial address.",
      "Professional mail handling.",
      "Meeting rooms on demand."
    ],
    pricing: [
      { duration: "12 months", price: "₹1,099" },
      { duration: "24 months", price: "₹959" },
    ],
  },
];

export default function VirtualOfficePlans() {
  const { openModal } = useBooking();
  const introRef = useRef(null);
  const cardsRef = useRef(null);

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

    if (introRef.current) observer.observe(introRef.current);
    if (cardsRef.current) observer.observe(cardsRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.section}>
      {/* ── Intro Banner ── */}
      <div
        ref={introRef}
        className={`${styles.introBanner} ${styles.fadeUp}`}
      >
        <div className={styles.introInner}>
          <div className={styles.introLeft}>
            <h2 className={styles.introTitle}>
              Your business, backed by a <span style={{ color: "#b89257ff", fontWeight: "700" }}>premium address.</span>
            </h2>
          </div>
          <div className={styles.introRight}>
            <p className={styles.introDesc}>
              Whether you're launching a startup, expanding into Delhi, or running a remote business, a Spacetime Virtual Office gives you the credibility of a prestigious business address—along with the flexibility to operate from anywhere. From company and GST registration to secure mail handling and access to beautifully designed workspaces, everything you need is backed by the professionalism and hospitality that define Spacetime.
            </p>
            <a href="#plans" className={styles.introLink}>
              Know more about Spacetime Virtual Office →
            </a>
          </div>
        </div>
      </div>

      {/* ── Pricing Cards ── */}
      <div className={styles.plansSection} id="plans">
        <div className={styles.plansInner}>
          <h2 className={styles.plansTitle}>
            Designed around the <span style={{ color: "#b89257ff", fontWeight: "700" }}>way you work.</span>
          </h2>
          <p className={styles.plansSubtitle}>
            From business registration to GST compliance and professional business addresses, choose the plan that best fits your requirements today—with the flexibility to upgrade as your business grows.
          </p>

          <div
            ref={cardsRef}
            className={`${styles.cardsGrid} ${styles.fadeUp}`}
          >
            {plansData.map((plan, i) => (
              <div key={i} className={styles.card}>
                <div className={styles.cardHeader}>
                  <h3 className={styles.cardTitle}>{plan.title}</h3>
                  <p className={styles.cardDesc}>{plan.description}</p>
                </div>

                <div className={styles.cardBody}>
                  <ul className={styles.featureList}>
                    {plan.features.map((f, j) => (
                      <li key={j} className={styles.featureItem}>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={styles.cardFooter}>
                  <div className={styles.pricingRow}>
                    {plan.pricing.map((p, k) => (
                      <div key={k} className={styles.priceBlock}>
                        <span className={styles.priceLabel}>Starting from</span>
                        <span className={styles.priceValue}>{p.price}</span>
                        <span className={styles.pricePer}>/month</span>
                        <span className={styles.priceDuration}>
                          {p.duration}
                        </span>
                      </div>
                    ))}
                  </div>
                  <button
                    className={styles.bookBtn}
                    onClick={() => openModal("virtual")}
                  >
                    Book now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
