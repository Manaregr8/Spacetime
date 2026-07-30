"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./VirtualOfficeHero.module.css";

export default function VirtualOfficeHero() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    city: "New Delhi"
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Virtual Office Lead:", formData);
    alert("Thanks! We'll be in touch shortly.");
  };

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        {/* Left Column: Image */}
        <div className={styles.leftColumn}>
          <div className={styles.imageWrapper}>
            <Image
              src="/okhlansicpics/ChatGPT Image Jul 30, 2026, 02_41_12 PM.png"
              alt="Premium office building"
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
                <svg className={styles.checkIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <polyline points="20 6 9 17 4 12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>Plans starting at ₹1099/month</span>
              </div>
              <div className={styles.bullet}>
                <svg className={styles.checkIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <polyline points="20 6 9 17 4 12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>Documentation within 15 minutes</span>
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
                  name="city"
                  required
                  value={formData.city}
                  onChange={handleChange}
                  className={styles.select}
                >
                  <option value="New Delhi">Greater Kailash II</option>
                  <option value="Gurugram">Connaught Place</option>
                  <option value="Noida">Mohan Estate</option>
                  <option value="Mumbai">Panchsheel Enclave</option>
                  <option value="Bengaluru">NSIC Okhla</option>
                  <option value="Bengaluru">Saket, Westend Marg</option>
                  <option value="Bengaluru">Indore</option>
                </select>
                <div className={styles.selectArrow}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <polyline points="6 9 12 15 18 9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>

              <button type="submit" className={styles.submitBtn}>
                Request callback
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
