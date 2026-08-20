"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./VirtualOfficeHero.module.css";

export default function VirtualOfficeHero() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    location: "Greater Kailash II"
  });
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          location: formData.location,
          option: "Virtual Office",
          source: "Virtual Office Hero",
        }),
      });
      if (!res.ok) throw new Error("Server error");
      setStatus("success");
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        location: "Greater Kailash II"
      });
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        {/* Left Column: Image */}
        <div className={styles.leftColumn}>
          <div className={styles.imageWrapper}>
            <Image
              src="/premium-reception.jpg"
              alt="Premium Spacetime reception"
              fill
              sizes="(max-width: 992px) 100vw, 50vw"
              className={styles.heroImage}
              priority
            />
          </div>
        </div>

        {/* Right Column: Content & Form */}
        <div className={styles.rightColumn}>
          <div className={styles.textContent}>
            <h1 className={styles.heading}>
              The address behind <span style={{ color: "#b89257ff", fontWeight: "700" }}>ambitious businesses.</span>
            </h1>
            <div className={styles.headingsub}>
              <span>A prestigious business address with everything you need to establish your company with confidence.</span>
            </div>


            <div className={styles.bullets}>
              <div className={styles.bullet}>
                <svg className={styles.checkIcon} viewBox="0 0 24 24" fill="none" stroke="#b89257" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>Business Registration</span>
              </div>
              <div className={styles.bullet}>
                <svg className={styles.checkIcon} viewBox="0 0 24 24" fill="none" stroke="#b89257" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>GST Registration</span>
              </div>
              <div className={styles.bullet}>
                <svg className={styles.checkIcon} viewBox="0 0 24 24" fill="none" stroke="#b89257" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>Premium Business Address</span>
              </div>
              <div className={styles.bullet}>
                <svg className={styles.checkIcon} viewBox="0 0 24 24" fill="none" stroke="#b89257" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>Documentation in as little as 15 minutes</span>
              </div>
            </div>

            {/* Lead Capture Form */}
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full name*"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  className={styles.input}
                />
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <input
                    type="email"
                    name="email"
                    placeholder="Company e-mail address*"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className={styles.input}
                  />
                </div>

                <div className={styles.formGroup}>
                  <div className={styles.phoneInputWrapper}>
                    <div className={styles.countryCode}>
                      <span className={styles.flag}>🇮🇳</span>
                      <span>+91</span>
                      <svg className={styles.caret} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <polyline points="6 9 12 15 18 9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone number*"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className={styles.phoneInput}
                    />
                  </div>
                </div>
              </div>

              <div className={styles.formGroup}>
                <select
                  name="location"
                  required
                  value={formData.location}
                  onChange={handleChange}
                  className={styles.select}
                >
                  <option value="Greater Kailash II">Greater Kailash II</option>
                  <option value="Connaught Place">Connaught Place</option>
                  <option value="Mohan Cooperative">Mohan Cooperative</option>
                  <option value="Panchsheel Enclave">Panchsheel Enclave</option>
                  <option value="The Penteli By Spacetime">The Penteli By Spacetime</option>
                  <option value="Saket, Westend Marg">Saket, Westend Marg</option>
                  <option value="Indore">Indore</option>
                </select>
                <div className={styles.selectArrow}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <polyline points="6 9 12 15 18 9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>

              <div className={styles.ctaGroup}>
                <button type="submit" className={styles.ctaPrimary} disabled={status === "loading"}>
                  {status === "loading" ? "Submitting..." : "Get Started"}
                </button>
                <a href="#plans" className={styles.ctaSecondary}>
                  View Plans
                </a>
              </div>

              {status === "success" && (
                <p style={{ color: "#2e7d32", fontSize: "14px", marginTop: "12px", fontWeight: "500" }}>
                  ✓ Thank you! Your request has been received. We will reply within one business day.
                </p>
              )}
              {status === "error" && (
                <p style={{ color: "#d32f2f", fontSize: "14px", marginTop: "12px", fontWeight: "500" }}>
                  Something went wrong. Please try again or call us directly.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
