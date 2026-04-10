"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { useBooking } from "@/context/BookingContext";
import styles from "./OurSpaces.module.css";

const spaces = [
  {
    id: "coworking",
    tag: "COWORKING",
    tagColor: "teal",
    title: "Coworking Sanctuaries",
    desc: "Thoughtfully composed environments where founders and operators thrive in community — without the noise or anonymity of ordinary coworking. Hot desks, dedicated seats and private pods, all wrapped in warm hospitality.",
    image: "/homebannerImages/Enhance_office_modern_202604020034.jpeg",
    layout: "top",
    cta: "Explore coworking",
  },
  {
    id: "managed",
    tag: "MANAGED OFFICE",
    tagColor: "teal",
    title: "Private Offices, Curated for You",
    desc: "Your own dedicated floor or wing — fully customised, impeccably managed by our hospitality team. Single monthly experience, zero operational friction. For teams ready to scale with grace and presence.",
    image: "/homebannerImages/remove_the_big_202604020018.png",
    layout: "top",
    cta: "Enquire about offices",
  },
  {
    id: "ondemand",
    tag: "ON DEMAND",
    tagColor: "amber",
    title: "Private Meeting & Gathering Rooms",
    desc: "Boardrooms, creative salons and event spaces for 4–100 people. Booked by the hour or day, hosted with the same care as everything else at Spacetime.",
    image: "/homebannerImages/create_a_office_202604020015.png",
    layout: "side",
    cta: "Book a room",
  },
];

function SpaceCard({ space, index, onCtaClick }) {
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
      { threshold: 0.12 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  if (space.layout === "side") {
    return (
      <div
        ref={ref}
        className={`${styles.card} ${styles.cardSide} ${styles.fadeUp}`}
        style={{ transitionDelay: `${index * 120}ms` }}
      >
        <div className={styles.sideText}>
          <span className={`${styles.tag} ${styles[`tag--${space.tagColor}`]}`}>
            {space.tag}
          </span>
          <h3 className={styles.cardTitle}>{space.title}</h3>
          <p className={styles.cardDesc}>{space.desc}</p>
          <button className={styles.cardCta} onClick={onCtaClick}>
            {space.cta}
          </button>
        </div>
        <div className={styles.sideImage}>
          <Image
            src={space.image}
            alt={space.title}
            fill
            style={{ objectFit: "cover" }}
            sizes="(max-width: 640px) 100vw, (max-width: 1100px) 50vw, 33vw"
          />
        </div>
      </div>
    );
  }

  return (
    <div
      ref={ref}
      className={`${styles.card} ${styles.cardTop} ${styles.fadeUp}`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      <div className={styles.topImage}>
        <Image
          src={space.image}
          alt={space.title}
          fill
          style={{ objectFit: "cover" }}
          sizes="(max-width: 640px) 100vw, (max-width: 1100px) 50vw, 33vw"
        />
      </div>
      <div className={styles.topText}>
        <span className={`${styles.tag} ${styles[`tag--${space.tagColor}`]}`}>
          {space.tag}
        </span>
        <h3 className={styles.cardTitle}>{space.title}</h3>
        <p className={styles.cardDesc}>{space.desc}</p>
        <button className={styles.cardCta} onClick={onCtaClick}>
          {space.cta}
        </button>
      </div>
    </div>
  );
}

export default function OurSpaces() {
  const { openModal } = useBooking();
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
    <section id="our-spaces" className={styles.section}>
      <div className={styles.inner}>
        <div ref={headerRef} className={`${styles.header} ${styles.fadeUp}`}>
          <h2 className={styles.sectionTitle}>Our Spaces</h2>
          <p className={styles.sectionSub}>Designed for those who lead</p>
        </div>

        {/* All 3 cards in one unified grid */}
        <div className={styles.grid}>
          {spaces.map((space, i) => (
            <SpaceCard key={space.id} space={space} index={i} onCtaClick={openModal} />
          ))}
        </div>

        <div className={styles.ctaRow}>
          <button className={styles.cta} onClick={openModal}>Reserve your space</button>
        </div>
      </div>
    </section>
  );
}