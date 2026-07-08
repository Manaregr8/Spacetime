"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "./VirtualOfficeCentres.module.css";

const centres = [
  {
    city: "Delhi",
    label: "Virtual Offices in Delhi",
    image: "/homebannerImages/Enhance_office_image_202604020030.webp",
  },
  {
    city: "Greater Kailash",
    label: "Virtual Offices in GK-II",
    image: "/homebannerImages/Enhance_office_modern_202604020034.webp",
  },
  {
    city: "Saket",
    label: "Virtual Offices in Saket",
    image: "/homebannerImages/remove_the_big_202604020018.webp",
  },
  {
    city: "Okhla",
    label: "Virtual Offices in Okhla",
    image: "/homebannerImages/create_a_office_202604020015.webp",
  },
  {
    city: "Connaught Place",
    label: "Virtual Offices in CP",
    image: "/homebannerImages/subtle_masterclass.webp",
  },
  {
    city: "Panchsheel",
    label: "Virtual Offices in Panchsheel",
    image: "/homebannerImages/subtle_networking.webp",
  },
];

export default function VirtualOfficeCentres() {
  const sectionRef = useRef(null);
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  useEffect(() => {
    const el = sectionRef.current;
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

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener("scroll", checkScroll, { passive: true });
    return () => el.removeEventListener("scroll", checkScroll);
  }, []);

  const scroll = (dir) => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = el.querySelector(`.${styles.card}`)?.offsetWidth || 300;
    el.scrollBy({ left: dir * (cardWidth + 24), behavior: "smooth" });
  };

  return (
    <section
      ref={sectionRef}
      className={`${styles.section} ${styles.fadeUp}`}
    >
      <div className={styles.inner}>
        <h2 className={styles.title}>Choose from our centres across India</h2>

        <div className={styles.carouselWrapper}>
          {canScrollLeft && (
            <button
              className={`${styles.arrow} ${styles.arrowLeft}`}
              onClick={() => scroll(-1)}
              aria-label="Scroll left"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
          )}

          <div ref={scrollRef} className={styles.track}>
            {centres.map((c, i) => (
              <div key={i} className={styles.card}>
                <div className={styles.cardImage}>
                  <Image
                    src={c.image}
                    alt={c.label}
                    fill
                    sizes="(max-width: 768px) 70vw, 25vw"
                    className={styles.img}
                  />
                </div>
                <p className={styles.cardLabel}>{c.label}</p>
              </div>
            ))}
          </div>

          {canScrollRight && (
            <button
              className={`${styles.arrow} ${styles.arrowRight}`}
              onClick={() => scroll(1)}
              aria-label="Scroll right"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
