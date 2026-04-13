"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "./OurAddresses.module.css";

const locations = [
  {
    id: "gk2",
    name: "Greater Kailash II",
    meta: "1,200 seats | 4 centers",
    tag: "COWORKING & MANAGED OFFICES",
    image: "/homebannerImages/Enhance_office_image_202604020030.jpeg",
    priceHighlight: "From ₹9,999/mo",
  },
  {
    id: "saket",
    name: "Saket, Westend Marg",
    meta: "630 seats | 3 centers",
    tag: "COWORKING & MANAGED OFFICES",
    image: "/homebannerImages/event2.png",
    priceHighlight: "From ₹7,999/mo",
  },
  {
    id: "nsic",
    name: "NSIC Okhla",
    meta: "345 seats | Managed offices",
    tag: "COWORKING & MANAGED OFFICES",
    image: "/homebannerImages/Enhance_office_modern_202604020034.jpeg",
    priceHighlight: "From ₹14,499/mo",
  },
  {
    id: "panchsheel",
    name: "Panchsheel Enclave",
    meta: "120 seats",
    tag: "COWORKING",
    image: "/homebannerImages/remove_the_big_202604020018.png",
    priceHighlight: "From ₹7,999/mo",
  },
  {
    id: "sarita",
    name: "Sarita Vihar",
    meta: "240 seats",
    tag: "COWORKING",
    image: "/homebannerImages/create_a_office_202604020015.png",
    priceHighlight: "From ₹8,499/mo",
  },
  {
    id: "cp",
    name: "Connaught Place",
    meta: "Premium Managed Offices",
    tag: "MANAGED OFFICES",
    image: "/homebannerImages/Enhance_office_image_202604020030.jpeg",
    priceHighlight: "Contact Sales",
  },
  {
    id: "indore",
    name: "Indore",
    meta: "Managed Offices",
    tag: "MANAGED OFFICES",
    image: "/homebannerImages/event2.png",
    priceHighlight: "Contact Sales",
  },
];

function AddressCard({ location, index }) {
  const ref = useRef(null);
  const [hovered, setHovered] = useState(false);

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
      style={{ transitionDelay: `${index * 80}ms` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Image
        src={location.image}
        alt={location.name}
        fill
        style={{ objectFit: "cover" }}
        sizes="(max-width: 768px) 100vw, 25vw"
      />
      <div className={`${styles.overlay} ${hovered ? styles.overlayHover : ""}`} />

      {/* Top tag */}
      <span className={styles.tag}>{location.tag}</span>

      {/* Bottom text */}
      <div className={styles.info}>
        <h3 className={styles.locationName}>{location.name}</h3>
        <p className={styles.locationMeta}>{location.meta}</p>
        {hovered && location.priceHighlight && (
          <span className={styles.priceHighlight}>{location.priceHighlight}</span>
        )}
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
            Prime. Privately held. Built to grow with Delhi-NCR&apos;s most ambitious companies.
          </p>
        </div>

        <div className={styles.grid}>
          {locations.map((loc, i) => (
            <AddressCard key={loc.id} location={loc} index={i} />
          ))}
          {/* 8th card — desktop arrow only */}
          <div className={styles.arrowCard}>
            <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.arrowIcon}>
              <path d="M10 30H50M50 30L34 14M50 30L34 46" stroke="#111" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>

        <p className={styles.footerNote}>
          900+ new seats launching in the next 6 months.
        </p>
      </div>
    </section>
  );
}
