'use client';

import React from 'react';
import styles from './page.module.css';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const SquareFootIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.statIcon}>
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
    <path d="M3 9h18M9 21V3" />
  </svg>
);

const SeatsIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.statIcon}>
    <path d="M7 7l10 10M17 7l-10 10" />
    <circle cx="12" cy="12" r="10" />
  </svg>
);

const CoworkingIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.statIcon}>
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const MeetingIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.statIcon}>
    <path d="M3 3h18v18H3zM9 3v18M15 3v18M3 9h18M3 15h18" />
  </svg>
);

const VirtualOfficeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.statIcon}>
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
    <line x1="8" y1="21" x2="16" y2="21" />
    <line x1="12" y1="17" x2="12" y2="21" />
  </svg>
);

const MetroIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.highlightIcon}>
    <rect x="4" y="3" width="16" height="13" rx="2" />
    <path d="M7 19l-2 2M17 19l2 2M9 21h6M8 8h8M8 12h8" />
  </svg>
);

const PinIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.highlightIcon}>
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const ParkingIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.highlightIcon}>
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M9 17V7h4a3 3 0 0 1 0 6H9" />
  </svg>
);

const CrownIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.highlightIcon}>
    <path d="M2 4l3 12h14l3-12-6 7-4-7-4 7-6-7z" />
  </svg>
);

export default function MohanEstatePage() {
  return (
    <>
      <Navbar />
      <main className={styles.container}>
        <section className={styles.heroSection}>
          <div className={styles.imageGrid}>
            <Image 
              src="/mohan-estate/hero.webp" 
              alt="Spacetime Mohan Estate Interior" 
              width={800} 
              height={450} 
              className={styles.mainImage}
              priority
            />
            <div className={styles.sideImageContainer}>
              <Image 
                src="/mohan-estate/interior.webp" 
                alt="Coworking area" 
                width={400} 
                height={350} 
                className={styles.sideImage}
              />
            </div>
          </div>

          <div className={styles.contentHeader}>
            <h2 className={styles.discoverText}>Discover</h2>
            <h1 className={styles.titleText}>
              <span className={styles.buzzText}>Buzz</span> at Spacetime Mohan Estate
            </h1>
            <p className={styles.descriptionText}>
              Over 30,000 sq ft of flexible, agile space. Just 1 minute from the metro, 
              this centre is built for teams who want to grow without limits — from 
              intimate coworking to private offices at scale.
            </p>
          </div>

          <div className={styles.statsBar}>
            <div className={styles.statItem}>
              <SquareFootIcon />
              <span className={styles.statLabel}>30,000<br/>sq ft area</span>
            </div>
            <div className={styles.statItem}>
              <SeatsIcon />
              <span className={styles.statLabel}>from 10 to<br/>300+ seats</span>
            </div>
            <div className={styles.statItem}>
              <CoworkingIcon />
              <span className={styles.statLabel}>Managed &<br/>Coworking</span>
            </div>
            <div className={styles.statItem}>
              <MeetingIcon />
              <span className={styles.statLabel}>Meeting<br/>Rooms</span>
            </div>
            <div className={styles.statItem}>
              <VirtualOfficeIcon />
              <span className={styles.statLabel}>Virtual<br/>Offices</span>
            </div>
          </div>

          <div className={styles.mainGrid}>
            <div className={styles.leftColumn}>
              <div className={styles.sectionBlock}>
                <span className={styles.sectionLabel}>The Experience</span>
                <p className={styles.sectionContent}>
                  A truly scalable sanctuary where your vision shapes the space. 
                  Whether you need 10 seats or an entire floor, every corner is 
                  designed to support ambition & operational ease.
                </p>
              </div>

              <div className={styles.sectionBlock}>
                <span className={styles.sectionLabel}>The Amenities</span>
                <p className={styles.sectionContent}>
                  Full end-to-end hospitality management, high-speed infrastructure, 
                  private meeting rooms, collaborative zones, and dedicated concierge — 
                  zero operational friction from day one.
                </p>
              </div>

              <div className={styles.sectionBlock}>
                <span className={styles.sectionLabel}>Indicative Pricing</span>
                <p className={styles.sectionContent}>
                  Flexible options: <span className={styles.pricingText}>₹8,000–10,000 per seat per month</span> OR 
                  custom per sq ft pricing for fully managed offices.
                </p>
              </div>
            </div>

            <div className={styles.rightColumn}>
              <div className={styles.highlightItem}>
                <MetroIcon />
                <h3 className={styles.highlightTitle}>Metro Access</h3>
                <p className={styles.highlightText}>Mathura Road Metro<br/>1-minute walk</p>
              </div>

              <div className={styles.highlightItem}>
                <PinIcon />
                <h3 className={styles.highlightTitle}>Key Location</h3>
                <p className={styles.highlightText}>Established<br/>Business corridor</p>
              </div>

              <div className={styles.highlightItem}>
                <ParkingIcon />
                <h3 className={styles.highlightTitle}>Parking</h3>
                <p className={styles.highlightText}>Ample paid MCD &<br/>DMRC Parking</p>
              </div>

              <div className={styles.highlightItem}>
                <CrownIcon />
                <h3 className={styles.highlightTitle}>Prestige Address</h3>
                <p className={styles.highlightText}>Same building as<br/>Lamborghini Delhi</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <section className={styles.footerSection}>
        <div className={styles.footerContent}>
          <div className={styles.footerLogo}>space<span>time</span></div>
          <p className={styles.footerDescription}>
            Premium coworking and managed offices designed as curated sanctuaries for builders. 
            Tell us your team size and vision. We will create a fully bespoke proposal within 48 hours.
          </p>
          <div className={styles.yellowDivider}></div>
          <div className={styles.contactGrid}>
            <div className={styles.contactItem}>
              <span className={styles.contactLabel}>Website</span>
              <span className={styles.contactValue}>www.myspacetime.in</span>
            </div>
            <div className={styles.contactItem}>
              <span className={styles.contactLabel}>Email</span>
              <span className={styles.contactValue}>amit@myspacetime.in</span>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
}
