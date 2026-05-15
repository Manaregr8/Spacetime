"use client";
import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import styles from './Testimonials.module.css';

const testimonialsData = [
  {
    id: 1,
    image: '/testimonials/Praveen Hatti.webp',
    text: "Spacetime isn't just an office, it's the first place my team looks forward to coming to every day.",
    name: 'Praveen Hatti',
    post: 'Founder & CEO, Avacasa'
  },
  {
    id: 2,
    image: '/testimonials/Pankaj-Jain.webp',
    text: "The hospitality and attention to detail make it feel like a private club for startups. We've grown from 8 to 28 people here without missing a beat.",
    name: 'Pankaj Jain',
    post: 'Chairman, RPZ / CORFAC International'
  },
  {
    id: 3,
    image: '/testimonials/Nupur.webp',
    text: "Best decision we made in 2025. The community, the spaces, the services — everything is top notch.",
    name: 'Nupur Verma',
    post: 'CMO, Achromic Ventures'
  },
];

const QuoteIcon = () => (
  <svg viewBox="0 0 24 24" fill="#ffffff">
    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
  </svg>
);

export default function Testimonials() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.container}>

          <div className={styles.leftCol}>
            <h2 className={styles.heading}>Real voices from<br />the <span style={{ color: "#b89257ff ", fontWeight: 800 }}>Spacetime</span><br /><span style={{ color: "#b89257ff ", fontWeight: 800 }}>community</span></h2>
            <p className={styles.desc}>
              Founders, operators and creators who chose Spacetime and never looked back. Their work speaks. Their words do too.
            </p>
          </div>

          <div className={styles.rightCol}>
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={40}
              slidesPerView={1}
              navigation={{
                prevEl: '.swiper-button-prev-custom',
                nextEl: '.swiper-button-next-custom',
              }}
              pagination={{
                type: 'progressbar',
                el: `.${styles.customProgress}`
              }}
              className={styles.swiperContainer}
            >
              {testimonialsData.map((item) => (
                <SwiperSlide key={item.id} className={styles.slide}>
                  <div className={styles.card}>
                    <div className={styles.cardContent}>
                      <div className={styles.topRow}>
                        <div className={styles.quoteMark}>“</div>
                        <div className={styles.avatarWrap}>
                          <Image src={item.image} alt={item.name} fill style={{ objectFit: 'cover' }} />
                        </div>
                      </div>
                      <p className={styles.cardText}>{item.text}</p>
                      <div className={styles.cardAuthor}>
                        {item.name} &ndash; {item.post}
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <div className={styles.controlsRow}>
              <div className={styles.customNavigation}>
                <button className="swiper-button-prev-custom">{'<'}</button>
                <button className="swiper-button-next-custom">{'>'}</button>
              </div>
              <div className={styles.progressWrap}>
                <div className={styles.customProgress}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
