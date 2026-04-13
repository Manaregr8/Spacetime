"use client";
import dynamic from "next/dynamic";
import styles from "./LanyardSection.module.css";

// Load lazily — avoids SSR issues with WebGL / Rapier WASM
const Lanyard = dynamic(() => import("./Lanyard"), { ssr: false });

export default function LanyardSection() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.textBlock}>
          <span className={styles.tag}>YOUR DAY PASS</span>
          <h2 className={styles.heading}>
            Pick up your day&nbsp;pass.<br />
            Drag it. Feel it.
          </h2>
          <p className={styles.desc}>
            Every member starts with a complimentary day inside one of our curated spaces. Grab the card on the right and claim yours in&nbsp;seconds.
          </p>
          <p className={styles.flipNote}>
            <strong>Flip the Pass</strong> <em>*Hold and scan the QR code on the back for exclusive member offers, discounts, and priority booking access.</em>
          </p>
        </div>

        <div className={styles.canvasWrap}>
          <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} fov={20} transparent />
        </div>
      </div>
    </section>
  );
}
