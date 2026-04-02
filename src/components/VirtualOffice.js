"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { useBooking } from "@/context/BookingContext";
import styles from "./VirtualOffice.module.css";

export default function VirtualOffice() {
  const { openModal } = useBooking();
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

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div ref={ref} className={`${styles.card} ${styles.fadeUp}`}>
          {/* Left image */}
          <div className={styles.imageWrap}>
            <Image
              src="/homebannerImages/md.png"
              alt="Virtual Office receptionist"
              fill
              style={{ objectFit: "cover" }}
              sizes="(max-width: 768px) 100vw, 25vw"
            />
          </div>

          {/* Middle text */}
          <div className={styles.textWrap}>
            <span className={styles.tag}>
              <span className={styles.tagHighlight}>VIRTUAL</span> OFFICE
            </span>
            <h2 className={styles.heading}>
              A prestigious address that works as hard as you do
            </h2>
            <p className={styles.desc}>
              Professional address, GST registration support, discreet mail
              handling, virtual receptionist, and meeting-room credits — all
              managed with the same hospitality as our physical spaces.
            </p>
          </div>

          {/* Right CTA */}
          <div className={styles.ctaWrap}>
            <button className={styles.cta} onClick={openModal}>Secure your Virtual address</button>
          </div>
        </div>
      </div>
    </section>
  );
}
