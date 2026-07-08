"use client";

import { useEffect, useRef } from "react";
import { useBooking } from "@/context/BookingContext";
import styles from "./VirtualOfficePlans.module.css";

const plansData = [
  {
    title: "Company Registration Plan",
    description:
      "Premium address with government-compliant documentation for company registration",
    features: [
      "Benefit from government compliant documentation for new business & GST registration",
      "Mail and package handling",
    ],
    pricing: [
      { duration: "12 months", price: "₹2,799" },
      { duration: "24 months", price: "₹2,599" },
    ],
  },
  {
    title: "GST Registration Plan",
    description:
      "Premium address with government-compliant documentation for GST registration",
    features: [
      "Benefit from government compliant documentation for GST registration",
      "Mail and package handling",
    ],
    pricing: [
      { duration: "12 months", price: "₹2,399" },
      { duration: "24 months", price: "₹2,199" },
    ],
  },
  {
    title: "Business Address Plan",
    description:
      "Premium address for your business card, website, and more with mail and package handling services",
    features: ["Mail and package handling"],
    pricing: [
      { duration: "12 months", price: "₹1,299" },
      { duration: "24 months", price: "₹1,199" },
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
              What is Virtual Office by Spacetime?
            </h2>
          </div>
          <div className={styles.introRight}>
            <p className={styles.introDesc}>
              Give your business a premium address, without the overhead cost of
              a physical space. Choose from our Virtual Office solutions —
              Business address plan, GST registration plan and Business
              registration plan. Whether you&apos;re looking to establish your
              business or grow your operations to a new city, our Virtual Office
              solutions cater to everyone from freelancers, start-ups to large
              companies.
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
            Pick a plan that&apos;s perfect for you
          </h2>
          <p className={styles.plansSubtitle}>
            Explore our flexible plans that are designed for your business needs
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
