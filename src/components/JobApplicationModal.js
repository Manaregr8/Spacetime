"use client";

import { useState, useEffect, useCallback } from "react";
import styles from "./JobApplicationModal.module.css";

const BLANK = { fullName: "", email: "", phone: "", linkedin: "" };

export default function JobApplicationModal({ isOpen, onClose, role }) {
  const [mounted, setMounted] = useState(false);
  const [form, setForm] = useState(BLANK);
  const [status, setStatus] = useState("idle");

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) {
      setForm(BLANK);
      setStatus("idle");
    }
  }, [isOpen]);

  const handleKeyDown = useCallback((e) => {
    if (e.key === "Escape") onClose();
  }, [onClose]);

  useEffect(() => {
    if (isOpen) window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, handleKeyDown]);

  const handleChange = (e) => {
    const { name, value } = e.target;
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
      const res = await fetch("/api/careers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: form.fullName,
          email: form.email,
          phone: form.phone,
          option: `Job Application: ${role}`,
          source: `Careers Page - ${role}`,
          message: `LinkedIn: ${form.linkedin}`
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

  return (
    <div
      className={`${styles.overlay} ${isOpen ? styles.overlayOpen : ""}`}
      onClick={(e) => e.target === e.currentTarget && onClose()}
      aria-modal="true"
      role="dialog"
    >
      <div className={`${styles.modal} ${isOpen ? styles.modalOpen : ""}`}>
        <button className={styles.closeBtn} onClick={onClose} aria-label="Close">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        {status === "success" ? (
          <div className={styles.successBox}>
            <span className={styles.successIcon}>✓</span>
            <p className={styles.successTitle}>Application received!</p>
            <p className={styles.successSub}>
              Thank you for applying for the <strong>{role}</strong> position. Our team will review your application and get back to you if there's a match.
            </p>
            <button className={styles.submit} onClick={onClose}>
              <span className={styles.submitMain}>Close</span>
            </button>
          </div>
        ) : (
          <form className={styles.form} onSubmit={handleSubmit}>
            <h2 className={styles.heading}>Apply for {role}</h2>
            
            <input 
              className={styles.input} 
              type="text" 
              name="fullName" 
              placeholder="Full name" 
              value={form.fullName} 
              onChange={handleChange} 
              required 
            />
            
            <input 
              className={styles.input} 
              type="email" 
              name="email" 
              placeholder="Email address" 
              value={form.email} 
              onChange={handleChange} 
              required 
            />
            
            <div className={styles.phoneWrap}>
              <span className={styles.flag} aria-label="India">🇮🇳</span>
              <input 
                className={`${styles.input} ${styles.phoneInput}`} 
                type="tel" 
                name="phone" 
                placeholder="Phone number" 
                value={form.phone} 
                onChange={handleChange} 
                required 
              />
            </div>

            <input 
              className={styles.input} 
              type="url" 
              name="linkedin" 
              placeholder="LinkedIn Profile URL" 
              value={form.linkedin} 
              onChange={handleChange} 
              required 
            />

            {status === "error" && (
              <p className={styles.errorMsg}>
                Something went wrong. Please try again.
              </p>
            )}

            <button type="submit" className={styles.submit} disabled={status === "loading"}>
              <span className={styles.submitMain}>
                {status === "loading" ? "Submitting…" : "Submit Application"}
              </span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
