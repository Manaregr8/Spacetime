"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { getAddressFeatures } from "@/data/addressFeaturesData";
import styles from "./AddressFeatures.module.css";

export default function AddressFeatures({ location }) {
  const data = getAddressFeatures(location?.slug);
  
  // Refs for intersection observers
  const spacesRef = useRef(null);
  const breakfastRef = useRef(null);

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

    if (spacesRef.current) observer.observe(spacesRef.current);
    if (breakfastRef.current) observer.observe(breakfastRef.current);

    return () => observer.disconnect();
  }, []);

  if (!data) return null;

  const { spacesData, breakfastData } = data;

  return (
    <>
    <section className={styles.section}>
      <div className={styles.inner}>
        
        {/* --- Spaces Section --- */}
        <div ref={spacesRef} className={`${styles.spacesContainer} ${styles.fadeUp}`}>
          <div className={styles.leftColumn}>
            <h2 className={styles.title}>{spacesData.title}</h2>
            <div className={styles.featuresList}>
              {spacesData.items.map((item, i) => (
                <div key={i} className={styles.featureItem}>
                  <h3 className={styles.featureTitle}>{item.title}</h3>
                  <p className={styles.featureDesc}>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className={styles.rightColumn}>
            <div className={styles.imageGrid}>
              {spacesData.images.map((img, i) => (
                <div key={i} className={styles.gridImageWrapper}>
                  <Image
                    src={img.src}
                    alt={img.label}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className={styles.gridImage}
                  />
                  <div className={styles.imageLabel}>{img.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* --- Breakfast Section --- */}
    <section className={`${styles.section} ${styles.darkSection}`}>
      <div className={styles.inner}>
        <div ref={breakfastRef} className={`${styles.breakfastContainer} ${styles.fadeUp}`}>
          <div className={styles.leftColumn}>
            <h2 className={`${styles.title} ${styles.darkTitle}`}>{breakfastData.title}</h2>
            <p className={`${styles.featureDesc} ${styles.darkDesc}`}>{breakfastData.description}</p>
          </div>
          
          <div className={styles.rightColumn}>
            <div className={styles.collageGrid}>
              <div className={`${styles.collageItem} ${styles.collageItem1}`}>
                <Image
                  src={breakfastData.images[0]}
                  alt="Breakfast 1"
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className={styles.collageImage}
                />
              </div>
              <div className={`${styles.collageItem} ${styles.collageItem2}`}>
                <Image
                  src={breakfastData.images[1]}
                  alt="Breakfast 2"
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className={styles.collageImage}
                />
              </div>
              <div className={`${styles.collageItem} ${styles.collageItem3}`}>
                <Image
                  src={breakfastData.images[2]}
                  alt="Breakfast 3"
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className={styles.collageImage}
                />
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
    </>
  );
}
