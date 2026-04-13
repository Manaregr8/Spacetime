"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "./InvitationForm.module.css";

const options = [
  "Coworking Desk",
  "Dedicated Seat",
  "Private Office",
  "Managed Office",
  "Virtual Office",
  "Meeting Room",
  "Private Walkthrough",
];

export default function InvitationForm() {
  const ref = useRef(null);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    option: "",
  });

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
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section id="contact" className={styles.section}>
      <div className={styles.inner}>
        <div ref={ref} className={`${styles.card} ${styles.fadeUp}`}>
          {/* ── Left ── */}
          <div className={styles.left}>
            <h2 className={styles.heading}>
              Your invitation is<br /><span style={{ color: "#f2b300" }}>ready.</span>
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
              <input
                className={styles.input}
                type="text"
                name="firstName"
                placeholder="First name"
                value={form.firstName}
                onChange={handleChange}
                autoComplete="given-name"
              />
              <input
                className={styles.input}
                type="text"
                name="lastName"
                placeholder="Last name"
                value={form.lastName}
                onChange={handleChange}
                autoComplete="family-name"
              />
            </div>

            <input
              className={styles.input}
              type="email"
              name="email"
              placeholder="example@gmail.com"
              value={form.email}
              onChange={handleChange}
              autoComplete="email"
            />

            <div className={styles.phoneWrap}>
              <span className={styles.flag} aria-label="India">🇮🇳</span>
              <input
                className={`${styles.input} ${styles.phoneInput}`}
                type="tel"
                name="phone"
                placeholder="Write your phone number"
                value={form.phone}
                onChange={handleChange}
                autoComplete="tel"
              />
            </div>

            <div className={styles.selectWrap}>
              <select
                className={styles.select}
                name="option"
                value={form.option}
                onChange={handleChange}
              >
                <option value="" disabled>Select an option</option>
                {options.map((o) => (
                  <option key={o} value={o}>{o}</option>
                ))}
              </select>
              <span className={styles.selectArrow}>&#8964;</span>
            </div>

            <button type="submit" className={styles.submit}>
              <span className={styles.submitMain}>Send my Invitation</span>
              <span className={styles.submitSub}>
                We reply within one business hour. Limited daily invitations.
              </span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
