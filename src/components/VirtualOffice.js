"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useBooking } from "@/context/BookingContext";
import styles from "./VirtualOffice.module.css";

const highlights = [
  "Professional address",
  "Business Registration",
  "GST registration support",
  "Discreet mail handling",
  "Virtual receptionist",
  "Meeting-room credits",
];

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
    <section id="virtual-office" className={styles.section}>
      <div className={styles.inner}>
        <div ref={ref} className={`${styles.card} ${styles.fadeUp}`}>
          {/* Left image */}
          <div className={styles.imageWrap}>
            <Image
              src="/homebannerImages/ChatGPT Image Aug 1, 2026, 09_11_37 AM.png"
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
              A prestigious <span style={{ color: "#b89257ff ", fontWeight: "700" }}>Delhi-NCR address</span><br />
              that works as hard as you do.
            </h2>
            <div className={styles.pills}>
              {highlights.map((h) => (
                <span key={h} className={styles.pill}>{h}</span>
              ))}
            </div>
            <p className={styles.desc}>
              All managed with the same hospitality as our physical spaces.
            </p>
          </div>

          {/* Right CTA */}
          <div className={styles.ctaWrap}>
            <Link href="/virtual-office" className={styles.ctaSecondary}>
              Explore Plans
            </Link>
            <button className={styles.cta} onClick={() => openModal("virtual")}>
              <span className={styles.ctaMain}>Get your Virtual Address</span>
            </button>

          </div>
        </div>
      </div>
    </section >
  );
}
