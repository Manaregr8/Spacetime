"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import styles from './Testimonials.module.css';

const testimonialsData = [
  {
    id: 1,
    image: '/person_1.png',
    text: "Joining Spacetime transformed my productivity. The modern setup and professional environment are unmatched. I've met incredible collaborators here who have helped my business grow tremendously.",
    name: 'Michael Carter',
    post: 'Tech Entrepreneur'
  },
  {
    id: 2,
    image: '/person_2.png',
    text: "The aesthetic, the ambiance, and the supportive community make this the perfect workspace. I love the flexible desk options and the premium amenities. It feels like a second home.",
    name: 'Sarah Jenkins',
    post: 'Creative Director'
  },
  {
    id: 3,
    image: '/person_3.png',
    text: "I was looking for a dynamic co-working environment, and I found exactly that. The networking events have connected me with similar minds. Highly recommended for remote workers.",
    name: 'David Reynolds',
    post: 'Freelance Designer'
  },
  {
    id: 4,
    image: '/person_1.png',
    text: "Spacetime goes above and beyond to ensure members are comfortable. The quiet zones are perfect for deep work, and the communal areas foster great conversations and networking.",
    name: 'James Wilson',
    post: 'Software Developer'
  }
];

const QuoteIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
  </svg>
);

export default function Testimonials() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.container}>
          {/* Top-left big blue quote */}
          <div className={styles.bigQuote}>
            <QuoteIcon />
          </div>

          <div className={styles.leftCol}>
            <h2 className={styles.heading}>connect with<br />other members</h2>
            <p className={styles.desc}>
              Discover a vibrant community of professionals, creatives, and entrepreneurs.
              Our members are at the heart of our workspace, coming together to collaborate,
              innovate, and elevate their businesses in an inspiring environment.
            </p>
            <Link href="/" className={styles.contactLink}>
              contact now -{'>'}
            </Link>

            <div className={styles.customNavigation}>
              <button className="swiper-button-prev-custom">{'<'}</button>
              <button className="swiper-button-next-custom">{'>'}</button>
            </div>
          </div>

          <div className={styles.rightCol}>
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={20}
              slidesPerView={1.2}
              navigation={{
                prevEl: '.swiper-button-prev-custom',
                nextEl: '.swiper-button-next-custom',
              }}
              pagination={{
                clickable: true,
                el: `.${styles.customPagination}`
              }}
              breakpoints={{
                640: {
                  slidesPerView: 1.5,
                },
                1024: {
                  slidesPerView: 2.2,
                },
                1280: {
                  slidesPerView: 2.5,
                }
              }}
              className={styles.swiperContainer}
            >
              {testimonialsData.map((item) => (
                <SwiperSlide key={item.id} className={styles.slide}>
                  <div className={styles.card}>
                    <div className={styles.cardImageWrap}>
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <div className={styles.cardContent}>
                      <div className={styles.smallQuote}>
                        <QuoteIcon />
                      </div>
                      <p className={styles.cardText}>{item.text}</p>
                      <h4 className={styles.cardName}>{item.name}</h4>
                      <span className={styles.cardPost}>{item.post}</span>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className={styles.customPagination}></div>
          </div>
        </div>
      </div>
    </section>
  );
}
