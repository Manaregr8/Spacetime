"use client";
import Image from "next/image";
import { useBooking } from "@/context/BookingContext";
import styles from "./HeroSection.module.css";

const bannerLogos = [
  "/bannerLogo/sm.webp",
  "/bannerLogo/sm (1).png",
  "/bannerLogo/sm.png",
  "/bannerLogo/sm.svg",
];

export default function HeroSection() {
  const { openModal } = useBooking();
  // Quadruple for seamless infinite marquee
  const marqueeItems = [...bannerLogos, ...bannerLogos, ...bannerLogos, ...bannerLogos];

  return (
    <section className={styles.hero}>
      {/* Overlay gradient */}
      <div className={styles.overlay} />

      {/* Max-width inner wrapper */}
      <div className={styles.inner}>
        {/* Main text content */}
        <div className={styles.content}>
          <h1 className={styles.heading}>
            An address for those who&rsquo;ve
            <br />
            outgrown the ordinary.
          </h1>
          <p className={styles.subtext}>
            Premium coworking &amp; managed offices in Delhi-NCR. Curated sanctuaries where founders and teams are hosted, not just housed. A community built with intention.
          </p>
          <div className={styles.ctaGroup}>
            <button className={styles.ctaWrapper} onClick={openModal}>
              <span className={styles.ctaMain}>Claim Free Day Pass</span>
              <span className={styles.ctaSub}>No commitment, just an invitation</span>
            </button>
            <button className={styles.ctaSecondary} onClick={() => openModal("tour")}>
              Book a Private Tour
            </button>
          </div>
        </div>
        {/* 180+ tag + logos marquee */}
        <div className={styles.logosSection}>
          <div className={styles.logosTag}>
            <span className={styles.logosTagDot} />
            <span className={styles.logosTagText}>180+ ambitious companies scaling with us</span>
          </div>
          <div className={styles.marqueeTrack}>
            <div className={styles.marquee}>
              {marqueeItems.map((src, i) => (
                <div key={i} className={styles.logoItem}>
                  <Image
                    src={src}
                    alt=""
                    height={36}
                    width={0}
                    sizes="200px"
                    style={{ width: "auto", height: "clamp(24px, 3vw, 36px)", objectFit: "contain" }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
