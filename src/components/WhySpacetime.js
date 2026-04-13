"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./WhySpacetime.module.css";

const features = [
  {
    id: "hospitality",
    title: "Hospitality First, Always",
    subtitle: null,
    desc: "Warm anticipatory service — the kind found in private clubs, not leases.",
    icon: null,
    large: true,
  },
  {
    id: "curated",
    title: "Curated Design",
    subtitle: null,
    desc: "Hi-spec finishes and thoughtful details rarely seen this side of ultra-premium.",
    icon: null,
    large: true,
  },
  {
    id: "connected",
    title: "Prime & Connected",
    subtitle: null,
    desc: "Metro-adjacent addresses in South & Central Delhi, surrounded by the city's best cafés and energy.",
    large: true,
  },
  {
    id: "scale",
    title: "Built to Scale",
    subtitle: null,
    desc: "Industry-leading retention. 2,400 seats today to 3,300+ in the next 3 months.",
    large: true,
  }
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
              <span className={styles.headingBlock} style={{ color: "#f2b300" }}>Exactly as intended.</span>
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
