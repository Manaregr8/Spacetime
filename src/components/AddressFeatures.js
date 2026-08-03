"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { getAddressFeatures } from "@/data/addressFeaturesData";
import styles from "./AddressFeatures.module.css";

export default function AddressFeatures({ location }) {
  const data = getAddressFeatures(location?.slug);
  
  // Refs for intersection observers
  const spacesRef = useRef(null);
  const amenitiesRef = useRef(null);

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
    if (amenitiesRef.current) observer.observe(amenitiesRef.current);

    return () => observer.disconnect();
  }, []);

  if (!data) return null;

  const { spacesData, amenitiesData } = data;

  return (
    <>
      <section className={styles.section}>
        <div className={styles.inner}>
          
          {/* --- Spaces Section --- */}
          <div ref={spacesRef} className={`${styles.spacesContainer} ${styles.fadeUp}`}>
            <div className={styles.leftColumn}>
              <h2 className={styles.title}>
                {spacesData.title.includes("every kind")
                  ? <>Spaces for <span style={{ color: "#b89257", fontWeight: "700" }}>every kind of workday</span></>
                  : spacesData.title
                }
              </h2>
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
                      alt="Space view"
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className={styles.gridImage}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Amenities Section --- */}
      {amenitiesData && (
        <section className={`${styles.section} ${styles.darkSection}`}>
          <div className={styles.inner}>
            <div ref={amenitiesRef} className={`${styles.breakfastContainer} ${styles.fadeUp}`}>
              <div className={styles.leftColumn}>
                <h2 className={`${styles.title} ${styles.darkTitle}`}>
                  {amenitiesData.title.includes("Freely")
                    ? <>Thoughtfully Brewed. <span style={{ color: "#b89257", fontWeight: "700" }}>Freely Poured.</span></>
                    : amenitiesData.title
                  }
                </h2>
                <p className={`${styles.featureDesc} ${styles.darkDesc}`}>{amenitiesData.description}</p>
              </div>
              
              <div className={styles.rightColumn}>
                <div className={styles.collageGrid}>
                  {amenitiesData.images.map((imgSrc, i) => (
                    <div key={i} className={`${styles.collageItem} ${styles[`collageItem${i + 1}`]}`}>
                      <Image
                        src={imgSrc}
                        alt={`Amenity ${i + 1}`}
                        fill
                        sizes="(max-width: 768px) 50vw, 25vw"
                        className={styles.collageImage}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
