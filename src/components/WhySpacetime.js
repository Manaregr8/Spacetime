"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./WhySpacetime.module.css";

const features = [
  {
    id: "hospitality",
    title: "Hospitality",
    subtitle: "First, Always",
    desc: "Warm, anticipatory service — the kind found in private clubs, not leases.",
    icon: null,
    large: true,
  },
  {
    id: "curated",
    title: "Curated",
    subtitle: "Design",
    desc: "Hi-spec finishes and thoughtful details at a level rarely seen this side of ultra-premium.",
    icon: null,
    large: true,
  },
  {
    id: "connected",
    title: "Prime & Connected",
    subtitle: null,
    desc: "Metro-adjacent addresses surrounded by Delhi's best cafés and energy.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="3" width="16" height="16" rx="2" />
        <path d="M4 11h16" />
        <path d="M8 19v2M16 19v2" />
        <circle cx="9" cy="15" r="1" fill="currentColor" stroke="none" />
        <circle cx="15" cy="15" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
    large: false,
  },
  {
    id: "scale",
    title: "Built to Scale",
    subtitle: null,
    desc: "Industry-leading retention + deliberate growth: 2,400 seats today → 3,000+ soon.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 20 L8 14 L12 16 L18 8 L22 4" />
        <path d="M18 4h4v4" />
      </svg>
    ),
    large: false,
  },
];

function FeatureCard({ feature, index }) {
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
    <div
      ref={ref}
      className={`${styles.featureCard} ${styles.fadeUp}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {feature.icon && <div className={styles.icon}>{feature.icon}</div>}
      <div>
        <h3 className={`${styles.featureTitle} ${feature.large ? styles.featureTitleLarge : ""}`}>
          {feature.title}
        </h3>
        {feature.subtitle && (
          <p className={styles.featureSubtitle}>{feature.subtitle}</p>
        )}
      </div>
      <p className={styles.featureDesc}>{feature.desc}</p>
    </div>
  );
}

export default function WhySpacetime() {
  const leftRef = useRef(null);

  useEffect(() => {
    const el = leftRef.current;
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
    <section id="insights" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.layout}>
          {/* Left column */}
          <div ref={leftRef} className={`${styles.left} ${styles.fadeUp}`}>
            <h2 className={styles.heading}>
              Not for everyone.{" "}
              <span className={styles.headingBlock}>Exactly as intended.</span>
            </h2>
            <p className={styles.subtext}>
              Because once you've experienced it, returning to ordinary is no
              longer an option.
            </p>
            <div className={styles.imageWrap}>
              <Image
                src="/homebannerImages/Enhance_office_image_202604020030.jpeg"
                alt="Spacetime interior"
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 100vw, 40vw"
              />
            </div>
          </div>

          {/* Right 2x2 grid */}
          <div className={styles.grid}>
            {features.map((f, i) => (
              <FeatureCard key={f.id} feature={f} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
