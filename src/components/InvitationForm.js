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

const BLANK = { firstName: "", lastName: "", email: "", phone: "", option: "" };

export default function InvitationForm() {
  const ref = useRef(null);
  const [form, setForm] = useState(BLANK);
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

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
        body: JSON.stringify({ ...form, source: "Invitation Form" }),
      });
      if (!res.ok) throw new Error("Server error");
      setStatus("success");
      setForm(BLANK);
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className={styles.section}>
      <div className={styles.inner}>
        <div ref={ref} className={`${styles.card} ${styles.fadeUp}`}>
          {/* ── Left ── */}
          <div className={styles.left}>
            <h2 className={styles.heading}>
              Your invitation is<br /><span className={styles.highlight}>ready.</span>
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
          {status === "success" ? (
            <div className={styles.successBox}>
              <span className={styles.successIcon}>✓</span>
              <p className={styles.successTitle}>We&apos;ve received your request!</p>
              <p className={styles.successSub}>
                Our team will reach out within one business hour.
              </p>
              <button
                className={styles.submit}
                onClick={() => setStatus("idle")}
              >
                <span className={styles.submitMain}>Submit another</span>
              </button>
            </div>
          ) : (
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.row}>
                <input
                  className={styles.input}
                  type="text"
                  name="firstName"
                  placeholder="First name"
                  value={form.firstName}
                  onChange={handleChange}
                  required
                  autoComplete="given-name"
                />
                <input
                  className={styles.input}
                  type="text"
                  name="lastName"
                  placeholder="Last name"
                  value={form.lastName}
                  onChange={handleChange}
                  required
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
                required
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
                  required
                  autoComplete="tel"
                />
              </div>

              <div className={styles.selectWrap}>
                <select
                  className={styles.select}
                  name="option"
                  value={form.option}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>Select an option</option>
                  {options.map((o) => (
                    <option key={o} value={o}>{o}</option>
                  ))}
                </select>
                <span className={styles.selectArrow}>&#8964;</span>
              </div>

              {status === "error" && (
                <p className={styles.errorMsg}>
                  Something went wrong. Please try again or WhatsApp us directly.
                </p>
              )}

              <button
                type="submit"
                className={styles.submit}
                disabled={status === "loading"}
              >
                <span className={styles.submitMain}>
                  {status === "loading" ? "Sending…" : "Send my Invitation"}
                </span>
                <span className={styles.submitSub}>
                  We reply within one business hour. Limited daily invitations.
                </span>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
