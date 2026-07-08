"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { getAddressFeatures } from "@/data/addressFeaturesData";
import { useBooking } from "@/context/BookingContext";
import styles from "./AddressMoreSolutions.module.css";

export default function AddressMoreSolutions({ location }) {
  const data = getAddressFeatures(location?.slug);
  const { openModal } = useBooking();

  const vmemRef = useRef(null);
  const bannerRef = useRef(null);
  const videoRef = useRef(null);

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

    if (vmemRef.current) observer.observe(vmemRef.current);
    if (bannerRef.current) observer.observe(bannerRef.current);
    if (videoRef.current) observer.observe(videoRef.current);

    return () => observer.disconnect();
  }, []);

  if (!data || !data.moreSolutionsData) return null;

  const { virtualMembership, highlightBanner, videoBlock } = data.moreSolutionsData;

  return (
    <section className={styles.section}>
      <div className={styles.inner}>

        <h2 className={styles.sectionTitle}>More Workspace Solutions</h2>

        {/* --- Virtual Membership --- */}
        <div ref={vmemRef} className={`${styles.virtualMembership} ${styles.fadeUp}`}>
          <div className={styles.vmemImageWrapper}>
            <Image
              src={virtualMembership.image}
              alt={virtualMembership.title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className={styles.vmemImage}
            />
          </div>
          <div className={styles.vmemContent}>
            <div className={styles.vmemHeader}>
              <h3 className={styles.vmemTitle}>{virtualMembership.title}</h3>
              <span className={styles.vmemBadge}>{virtualMembership.badge}</span>
            </div>
            <p className={styles.vmemDesc}>{virtualMembership.description}</p>
            <p className={styles.vmemPrice}>{virtualMembership.price}</p>
            <button className={styles.ctaButton} onClick={() => openModal("tour")}>
              Get Started
            </button>
          </div>
        </div>

        {/* --- Highlight Banner --- */}
        <div ref={bannerRef} className={`${styles.highlightBanner} ${styles.fadeUp}`}>
          <div className={styles.bannerLeft}>
            <h3 className={styles.bannerTitle}>{highlightBanner.title}</h3>
          </div>
          <div className={styles.bannerRight}>
            <ul className={styles.bulletList}>
              {highlightBanner.bullets.map((bullet, i) => (
                <li key={i} className={styles.bulletItem}>
                  <span className={styles.bulletCircle}></span>
                  {bullet}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* --- Video Block --- */}
        <div ref={videoRef} className={`${styles.videoBlock} ${styles.fadeUp}`}>
          <div className={styles.videoLeft}>
            <h2 className={styles.videoTitle}>{videoBlock.title}</h2>
            <p className={styles.videoDesc}>{videoBlock.description}</p>
          </div>
          <div className={styles.videoRight}>
            <div className={styles.thumbnailWrapper} onClick={() => openModal("tour")}>
              <Image
                src={videoBlock.thumbnail}
                alt="Video thumbnail"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className={styles.thumbnailImage}
              />
              <div className={styles.playButtonOverlay}>
                <div className={styles.playButton}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
