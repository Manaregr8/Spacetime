"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useBooking } from "@/context/BookingContext";
import styles from "./VirtualOfficeCentres.module.css";

const centres = [
  {
    city: "Greater Kailash II",
    label: "Virtual Offices in GK-II",
    image: "/homebannerImages/Enhance_office_modern_202604020034.webp",
  },
  {
    city: "Connaught Place",
    label: "Virtual Offices in CP",
    image: "/homebannerImages/subtle_masterclass.webp",
  },
  {
    city: "Mohan Cooperative",
    label: "Virtual Offices in Mohan Cooperative",
    image: "/homebannerImages/Enhance_office_image_202604020030.webp",
  },
  {
    city: "Panchsheel Enclave",
    label: "Virtual Offices in Panchsheel",
    image: "/homebannerImages/subtle_networking.webp",
  },
  {
    city: "The Penteli By Spacetime",
    label: "Virtual Offices in The Penteli",
    image: "/okhlansicpics/6CA821BD-7211-4157-B580-DE1DAC9AA26F.PNG",
  },
  {
    city: "Saket, Westend Marg",
    label: "Virtual Offices in Saket",
    image: "/homebannerImages/remove_the_big_202604020018.webp",
  },
  {
    city: "Indore",
    label: "Virtual Offices in Indore",
    image: "/homebannerImages/create_a_office_202604020015.webp",
  },
];

export default function VirtualOfficeCentres() {
  const sectionRef = useRef(null);
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const { openModal } = useBooking();

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
        <h2 className={styles.title}>Find the address that <span style={{ color: "#b89257ff", fontWeight: "700" }}>fits your ambition.</span></h2>

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
              <button
                key={i}
                className={styles.card}
                onClick={() => openModal("virtual", c.city)}
                aria-label={`Book virtual office in ${c.city}`}
              >
                <div className={styles.cardImage}>
                  <Image
                    src={c.image}
                    alt={c.label}
                    fill
                    sizes="(max-width: 768px) 70vw, 25vw"
                    className={styles.img}
                  />
                  <div className={styles.cardOverlay}>
                    <span className={styles.cardCta}>Book this address →</span>
                  </div>
                </div>
                <p className={styles.cardLabel}>{c.label}</p>
              </button>
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
