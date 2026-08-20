"use client";

import styles from "./CareersHero.module.css";

export default function CareersHero() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h1 className={styles.heading}>
          Shape the future of work.<br />
          <span className={styles.highlight}>Together.</span>
        </h1>
        <div className={styles.actions}>
          <a href="#positions" className={styles.btnPrimary}>
            Open positions
          </a>
          <a href="#benefits" className={styles.btnSecondary}>
            Benefits
          </a>
        </div>
      </div>
    </section>
  );
}
