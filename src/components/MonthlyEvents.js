"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./MonthlyEvents.module.css";

const initialEvents = [
  {
    id: 1,
    title: "Founder's Fireside Chat",
    date: "12 APR, 6:00 PM",
    location: "Level 4, Sky Lounge",
    tag: "Networking",
    shortDesc: "Journey from garage to global.",
    fullDesc: "An intimate evening with local tech pioneers sharing their journey from garage to global. Learn about scaling, fundraising, and the hurdles of building a startup in today's market.",
    image: "/homebannerImages/event1.png"
  },
  {
    id: 2,
    title: "Creative Flow Workshop",
    date: "18 APR, 2:00 PM",
    location: "Studio B",
    tag: "Skill Building",
    shortDesc: "Unlock new levels of focus.",
    fullDesc: "Unlock new levels of focus and creativity with our expert-led flow state workshop. We will explore breathing techniques, environment design, and psychological triggers to help you do your best work.",
    image: "/homebannerImages/event2.png"
  },
  {
    id: 3,
    title: "Community Brew & Build",
    date: "24 APR, 10:00 AM",
    location: "The Coffee Hub",
    tag: "Social Mixer",
    shortDesc: "Coffee & collaborative problem-solving.",
    fullDesc: "Start your morning with artisanal coffee and collaborative problem-solving sessions. Connect with fellow builders, designers, and developers in an informal, high-energy environment.",
    image: "/homebannerImages/event3.png"
  },
  {
    id: 4,
    title: "The Future of Co-working",
    date: "28 APR, 4:30 PM",
    location: "Main Auditorium",
    tag: "Panel Talk",
    shortDesc: "Reshaping the modern workplace.",
    fullDesc: "Exploring how decentralised teams and high-end tech are reshaping the workplace. Join our panel of architects and CEOs as they discuss the evolution of the office in a post-pandemic world.",
    image: "/homebannerImages/event4.png"
  }
];

export default function MonthlyEvents() {
  const [activeIndex, setActiveIndex] = useState(0);
  // Three-state swap: idle → "out" (fade out) → "in" (fade in with new content)
  const [swapState, setSwapState] = useState("idle"); // "idle" | "out" | "in"
  const [displayIndex, setDisplayIndex] = useState(0); // what's actually rendered

  const containerRef = useRef(null);
  const featuredRef = useRef(null);
  const sideRefs = useRef([]);
  const timerRef = useRef(null);
  const mountedRef = useRef(false);

  // ── Entrance animation on first mount (IntersectionObserver) ──────────────
  useEffect(() => {
    if (mountedRef.current) return;
    mountedRef.current = true;

    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add(
            entry.target === featuredRef.current
              ? styles.animateFeatured
              : styles.animateSide
          );
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    if (featuredRef.current) observer.observe(featuredRef.current);
    sideRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  // ── Swap logic: fade out → swap content → fade in ─────────────────────────
  const triggerSwap = (nextIndex) => {
    if (nextIndex === activeIndex || swapState !== "idle") return;

    setSwapState("out");
    setTimeout(() => {
      setDisplayIndex(nextIndex);
      setActiveIndex(nextIndex);
      setSwapState("in");
      // brief "in" state just to allow re-render, then back to idle
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setSwapState("idle"));
      });
    }, 350); // matches the CSS transition duration
  };

  // ── Auto-cycle timer ───────────────────────────────────────────────────────
  const startTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setActiveIndex(prev => {
        const next = (prev + 1) % initialEvents.length;
        triggerSwapFromTimer(next, prev);
        return prev; // don't update here — triggerSwap handles it
      });
    }, 5000);
  };

  // Separate timer-triggered swap that always has the latest activeIndex
  const activeIndexRef = useRef(activeIndex);
  useEffect(() => { activeIndexRef.current = activeIndex; }, [activeIndex]);

  const triggerSwapFromTimer = (nextIndex) => {
    if (swapState !== "idle") return;
    setSwapState("out");
    setTimeout(() => {
      setDisplayIndex(nextIndex);
      setActiveIndex(nextIndex);
      setSwapState("in");
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setSwapState("idle"));
      });
    }, 350);
  };

  useEffect(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      const next = (activeIndexRef.current + 1) % initialEvents.length;
      triggerSwapFromTimer(next);
    }, 5000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []); // run once; reads activeIndexRef for always-fresh index

  const handleSelect = (idx) => {
    if (idx === activeIndex || swapState !== "idle") return;
    if (timerRef.current) clearInterval(timerRef.current); // reset timer on manual click
    triggerSwap(idx);
    // restart timer after swap
    setTimeout(() => startTimer(), 400);
  };

  const activeEvent = initialEvents[displayIndex];

  return (
    <section className={styles.section} id="events">
      <div className={styles.inner}>
        <div className={styles.header}>
          <span>EXPERIENCE MORE</span>
          <h2 className={styles.heading}>This Month at Spacetime</h2>
        </div>

        <div className={styles.bentoContainer} ref={containerRef}>
          {/* ── Side Column (LEFT) ── */}
          <div className={styles.sideColumn}>
            {initialEvents.map((event, idx) => (
              <div
                key={event.id}
                ref={el => sideRefs.current[idx] = el}
                className={`${styles.sideCard} ${activeIndex === idx ? styles.activeCard : ""}`}
                style={{ animationDelay: `${idx * 150}ms` }}
                onClick={() => handleSelect(idx)}
              >
                <div className={styles.sideCardInner}>
                  <div className={styles.sideImageWrap}>
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      style={{ objectFit: "cover" }}
                      sizes="20vw"
                    />
                  </div>
                  <div className={styles.sideContent}>
                    <span className={styles.sideEventDate}>{event.date.split(',')[0]}</span>
                    <h3 className={styles.sideEventTitle}>{event.title}</h3>
                    <p style={{ fontSize: '12px', color: '#777', margin: 0 }}>{event.shortDesc}</p>
                  </div>
                </div>
                {activeIndex === idx && <div className={styles.progressBar} key={`bar-${activeIndex}`} />}
              </div>
            ))}
          </div>

          {/* ── Featured Card (RIGHT) ── */}
          <div
            ref={featuredRef}
            className={`${styles.featuredArea} ${swapState === "out" ? styles.swapping : ""}`}
          >
            <div className={styles.featuredCard}>
              <div className={styles.featuredImage}>
                <Image
                  src={activeEvent.image}
                  alt={activeEvent.title}
                  fill
                  style={{ objectFit: "cover" }}
                  priority
                  sizes="(max-width: 1200px) 100vw, 60vw"
                />
              </div>
              <div className={styles.featuredOverlay} />
              <div className={styles.featuredContent}>
                <span className={styles.tag}>{activeEvent.tag}</span>
                <h1 className={styles.featuredTitle}>{activeEvent.title}</h1>
                <div className={styles.featuredMeta}>
                  <div className={styles.featuredMetaItem}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                      <line x1="16" y1="2" x2="16" y2="6"></line>
                      <line x1="8" y1="2" x2="8" y2="6"></line>
                      <line x1="3" y1="10" x2="21" y2="10"></line>
                    </svg>
                    <span>{activeEvent.date}</span>
                  </div>
                  <div className={styles.featuredMetaItem}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    <span>{activeEvent.location}</span>
                  </div>
                </div>
                <p className={styles.featuredDesc}>{activeEvent.fullDesc}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}