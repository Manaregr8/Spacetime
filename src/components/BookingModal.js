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

const BLANK = { firstName: "", lastName: "", email: "", phone: "", option: "" };

export default function BookingModal() {
  const { isOpen, modalType, closeModal } = useBooking();
  const [mounted, setMounted] = useState(false);
  const [form, setForm] = useState(BLANK);
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

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

  // Reset form when modal closes or type changes
  useEffect(() => {
    if (!isOpen) {
      setForm(BLANK);
      setStatus("idle");
    } else if (modalType === "virtual") {
      setForm((prev) => ({ ...prev, option: "Virtual Office" }));
    }
  }, [isOpen, modalType]);

  // Close on Escape
  const handleKeyDown = useCallback((e) => {
    if (e.key === "Escape") closeModal();
  }, [closeModal]);

  useEffect(() => {
    if (isOpen) window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, handleKeyDown]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    // Phone: allow digits only
    if (name === "phone") {
      const digitsOnly = value.replace(/\D/g, "").slice(0, 10);
      setForm((prev) => ({ ...prev, phone: digitsOnly }));
      return;
    }
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          ...form, 
          source: modalType === 'tour' ? "Tour Request" : "Booking Modal",
          option: modalType === 'tour' ? "" : form.option
        }),
      });
      if (!res.ok) throw new Error("Server error");
      setStatus("success");
      setForm(BLANK);
    } catch {
      setStatus("error");
    }
  };

  if (!mounted) return null;

  const isSmall = modalType === "tour" || modalType === "virtual";

  return (
    <div
      className={`${styles.overlay} ${isOpen ? styles.overlayOpen : ""}`}
      onClick={(e) => e.target === e.currentTarget && closeModal()}
      aria-modal="true"
      role="dialog"
    >
      <div className={`${styles.modal} ${isOpen ? styles.modalOpen : ""} ${isSmall ? styles.modalSmall : ""}`}>
        {/* Close */}
        <button className={styles.closeBtn} onClick={closeModal} aria-label="Close">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        {/* ── Left (only for full modal) ── */}
        {!isSmall && (
          <div className={styles.left}>
            <h2 className={styles.heading}>
              {modalType === "virtual" ? "Your Virtual Office is ready." : <>Your invitation is<br />ready.</>}
            </h2>
            <p className={styles.desc}>
              {modalType === "virtual" 
                ? "Secure your prestigious Delhi-NCR address and join a community of 180+ ambitious companies. Professional, discreet, and hospitality-led."
                : "Experience the difference between renting space and being hosted. Claim a full complimentary day or 3 hours in one of our private rooms — no strings, no pressure. Or book a private walkthrough."
              }
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
        )}

        {/* ── Right form / success ── */}
        {status === "success" ? (
          <div className={styles.successBox}>
            <span className={styles.successIcon}>✓</span>
            <p className={styles.successTitle}>We&apos;ve received your request!</p>
            <p className={styles.successSub}>
              Our team will reach out within one business hour.
            </p>
            <button className={styles.submit} onClick={closeModal}>
              <span className={styles.submitMain}>Close</span>
            </button>
          </div>
        ) : (
          <form className={`${styles.form} ${isSmall ? styles.formSmall : ""}`} onSubmit={handleSubmit}>
            {modalType === "tour" && <h2 className={styles.smallHeading}>Book a Private Tour</h2>}
            {modalType === "virtual" && <h2 className={styles.smallHeading}>Get your Virtual Address</h2>}
            <div className={styles.row}>
              <input className={styles.input} type="text" name="firstName" placeholder="First name" value={form.firstName} onChange={handleChange} required autoComplete="given-name" />
              <input className={styles.input} type="text" name="lastName" placeholder="Last name" value={form.lastName} onChange={handleChange} required autoComplete="family-name" />
            </div>
            <input className={styles.input} type="email" name="email" placeholder="example@gmail.com (Optional)" value={form.email} onChange={handleChange} autoComplete="email" />
            <div className={styles.phoneWrap}>
              <span className={styles.flag} aria-label="India">🇮🇳</span>
              <input className={`${styles.input} ${styles.phoneInput}`} type="tel" name="phone" placeholder="Write your phone number" value={form.phone} onChange={handleChange} required autoComplete="tel" />
            </div>
            
            {modalType !== "tour" && modalType !== "virtual" && (
              <div className={styles.selectWrap}>
                <select className={styles.select} name="option" value={form.option} onChange={handleChange} required>
                  <option value="" disabled>Select an option</option>
                  {options.map((o) => <option key={o} value={o}>{o}</option>)}
                </select>
                <span className={styles.selectArrow}>&#8964;</span>
              </div>
            )}

            {status === "error" && (
              <p className={styles.errorMsg}>
                Something went wrong. Please try again or WhatsApp us directly.
              </p>
            )}

            <button type="submit" className={styles.submit} disabled={status === "loading"}>
              <span className={styles.submitMain}>
                {status === "loading" ? "Sending…" : "Send my Request"}
              </span>
              <span className={styles.submitSub}>We reply within one business hour. Limited daily invitations.</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

