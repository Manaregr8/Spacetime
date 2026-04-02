"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./OurAddresses.module.css";

const locations = [
  {
    id: "gk2",
    name: "Greater Kailash 2",
    meta: "1200 seats | 4 centers",
    tag: "COWORKING & MANAGED OFFICES",
    image: "/homebannerImages/Enhance_office_image_202604020030.jpeg",
  },
  {
    id: "saket",
    name: "Saket | Westend Marg",
    meta: "630 seats | 3 centers",
    tag: "COWORKING & MANAGED OFFICES",
    image: "/homebannerImages/Office_rooms_with_202604020025.jpeg",
  },
  {
    id: "sarita",
    name: "Sarita Vihar",
    meta: "240 seats & Managed offices",
    tag: "COWORKING",
    image: "/homebannerImages/Office_rooms_with_202604020025 (1).jpeg",
  },
  {
    id: "panchsheel",
    name: "Panchsheel Enclave",
    meta: "90 seats | Tailored offices",
    tag: "COWORKING",
    image: "/homebannerImages/Enhance_office_modern_202604020034.jpeg",
  },
];

function AddressCard({ location, index }) {
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
      className={`${styles.card} ${styles.fadeUp}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <Image
        src={location.image}
        alt={location.name}
        fill
        style={{ objectFit: "cover" }}
        sizes="(max-width: 768px) 100vw, 25vw"
      />
      <div className={styles.overlay} />

      {/* Top tag */}
      <span className={styles.tag}>{location.tag}</span>

      {/* Bottom text */}
      <div className={styles.info}>
        <h3 className={styles.locationName}>{location.name}</h3>
        <p className={styles.locationMeta}>{location.meta}</p>
      </div>
    </div>
  );
}

export default function OurAddresses() {
  const headerRef = useRef(null);

  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add(styles.visible);
          observer.unobserve(el);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="our-addresses" className={styles.section}>
      <div className={styles.inner}>
        <div ref={headerRef} className={`${styles.header} ${styles.fadeUp}`}>
          <h2 className={styles.sectionTitle}>Our Addresses</h2>
          <p className={styles.sectionSub}>
            Prime addresses. Privately held. Adding 600+ seats in the next 3
            months — A platform built to scale with Delhi-NCR&apos;s most
            ambitious companies.
          </p>
        </div>

        <div className={styles.grid}>
          {locations.map((loc, i) => (
            <AddressCard key={loc.id} location={loc} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
