"use client";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { useBooking } from "@/context/BookingContext";
import styles from "./BookingModal.module.css";

const options = [
  "Coworking Desk",
  "Dedicated Seat",
  "Private Office",
  "Managed Office",
  "Virtual Office",
  "Meeting Room",
  "Private Walkthrough",
];

export default function BookingModal() {
  const { isOpen, closeModal } = useBooking();
  const [mounted, setMounted] = useState(false);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    option: "",
  });

  // Mount guard for portal
  useEffect(() => setMounted(true), []);

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  // Close on Escape
  const handleKeyDown = useCallback((e) => {
    if (e.key === "Escape") closeModal();
  }, [closeModal]);

  useEffect(() => {
    if (isOpen) window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, handleKeyDown]);

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    closeModal();
  };

  if (!mounted) return null;

  return (
    <div
      className={`${styles.overlay} ${isOpen ? styles.overlayOpen : ""}`}
      onClick={(e) => e.target === e.currentTarget && closeModal()}
      aria-modal="true"
      role="dialog"
    >
      <div className={`${styles.modal} ${isOpen ? styles.modalOpen : ""}`}>
        {/* Close */}
        <button className={styles.closeBtn} onClick={closeModal} aria-label="Close">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        {/* ── Left ── */}
        <div className={styles.left}>
          <h2 className={styles.heading}>
            Your invitation is<br />ready.
          </h2>
          <p className={styles.desc}>
            Experience the difference between renting space and being hosted.
            Claim a full complimentary day or 3 hours in one of our private
            rooms — no strings, no pressure. Or book a private walkthrough and
            see why this isn&apos;t for everyone… and might be exactly right
            for you.
          </p>
          <div className={styles.host}>
            <div className={styles.avatar}>
              <Image
                src="/bannerLogo/sm(2).png"
                alt="Akanksha"
                fill
                style={{ objectFit: "cover" }}
                sizes="56px"
              />
            </div>
            <div>
              <p className={styles.hostName}>Akanksha</p>
              <p className={styles.hostTitle}>CX Manager at Spacetime</p>
            </div>
          </div>
        </div>

        {/* ── Right form ── */}
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.row}>
            <input className={styles.input} type="text" name="firstName" placeholder="First name" value={form.firstName} onChange={handleChange} autoComplete="given-name" />
            <input className={styles.input} type="text" name="lastName" placeholder="Last name" value={form.lastName} onChange={handleChange} autoComplete="family-name" />
          </div>
          <input className={styles.input} type="email" name="email" placeholder="example@gmail.com" value={form.email} onChange={handleChange} autoComplete="email" />
          <div className={styles.phoneWrap}>
            <span className={styles.flag} aria-label="India">🇮🇳</span>
            <input className={`${styles.input} ${styles.phoneInput}`} type="tel" name="phone" placeholder="Write your phone number" value={form.phone} onChange={handleChange} autoComplete="tel" />
          </div>
          <div className={styles.selectWrap}>
            <select className={styles.select} name="option" value={form.option} onChange={handleChange}>
              <option value="" disabled>Select an option</option>
              {options.map((o) => <option key={o} value={o}>{o}</option>)}
            </select>
            <span className={styles.selectArrow}>&#8964;</span>
          </div>
          <button type="submit" className={styles.submit}>
            <span className={styles.submitMain}>Send my Invitation</span>
            <span className={styles.submitSub}>We reply within one business hour. Limited daily invitations.</span>
          </button>
        </form>
      </div>
    </div>
  );
}
