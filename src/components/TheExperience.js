"use client";
import { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Navigation } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import styles from "./TheExperience.module.css";

const slides = [
  {
    id: 1,
    image: "/homebannerImages/remove_the_big_202604020018.png",
    title: "Where Work Feels Like a Privilege",
    desc: "Every corner designed to make you want to stay.",
  },
  {
    id: 2,
    image: "/homebannerImages/create_a_office_202604020015.png",
    title: "A Community That Moves With You",
    desc: "Founders, operators and creators — all under one roof.",
  },
  {
    id: 3,
    image: "/homebannerImages/Enhance_office_image_202604020030.jpeg",
    title: "Hospitality at Every Turn",
    desc: "Warm service that anticipates before you ask.",
  },
  {
    id: 4,
    image: "/homebannerImages/event2.png",
    title: "Spaces That Speak Your Language",
    desc: "Curated environments for those who demand excellence.",
  },
  {
    id: 5,
    image: "/homebannerImages/Enhance_office_modern_202604020034.jpeg",
    title: "Built for the Long Game",
    desc: "Scale seamlessly from 1 seat to an entire floor.",
  },
];

export default function TheExperience() {
  const headerRef = useRef(null);

  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add(styles.visible);
          observer.unobserve(el);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="the-experience" className={styles.section}>
      {/* Header */}
      <div ref={headerRef} className={`${styles.header} ${styles.fadeUp}`}>
        <h2 className={styles.title}>The Spacetime Experience</h2>
        <p className={styles.subtitle}>Step inside the club</p>
      </div>

      {/* Swiper — no overlay nav, buttons sit below */}
      <div className={styles.sliderWrapper}>
        <Swiper
          modules={[Autoplay, EffectCoverflow, Navigation]}
          effect="coverflow"
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 120,
            modifier: 2.5,
            slideShadows: false,
          }}
          navigation={{
            prevEl: ".swiper-experience-prev",
            nextEl: ".swiper-experience-next",
          }}
          centeredSlides
          slidesPerView="auto"
          loop
          autoplay={{ delay: 3500, disableOnInteraction: false, pauseOnMouseEnter: true }}
          className={styles.swiper}
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id} className={styles.slide}>
              <div className={styles.imageWrap}>
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 90vw, 60vw"
                />
                <div className={styles.overlay} />
                <div className={styles.slideText}>
                  <h3 className={styles.slideTitle}>{slide.title}</h3>
                  <p className={styles.slideDesc}>{slide.desc}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Nav buttons — below the slider in normal flow */}
        <div className={styles.navContainer}>
          <button className={`${styles.navButton} swiper-experience-prev`}>&#8592;</button>
          <button className={`${styles.navButton} swiper-experience-next`}>&#8594;</button>
        </div>
      </div>
    </section>
  );
}