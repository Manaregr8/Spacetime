"use client";
import React, { useState } from 'react';
import styles from './FAQSection.module.css';

const faqData = {
  "Pricing": [
    {
      q: "How does Managed Office pricing work?",
      a: "Custom quote based on team size and floor requirements. All-inclusive — furniture, hospitality, internet, maintenance. No hidden charges."
    },
    {
      q: "Can I start with just a few desks and scale?",
      a: "Yes. Our model is built for seamless growth — from 1 seat to 100+ without moving spaces or disrupting your team."
    },
  ],
  "Day Pass": [
    {
      q: "What's included in the Free Day Pass?",
      a: "Full access to all amenities, high-speed internet, complimentary beverages, and the complete Spacetime experience for one full day. No commitment required."
    },
    {
      q: "Is there a long-term commitment?",
      a: "No. Flexible month-to-month options are available alongside longer-term plans. We work to your timeline, not ours."
    },
  ],
  "Locations": [
    {
      q: "What are your locations?",
      a: "All premium South & Central Delhi locations — Greater Kailash II, Saket (Westend Marg), Connaught Place, NSIC Okhla, Panchsheel Enclave and Sarita Vihar."
    },
  ],
  "Virtual Office": [
    {
      q: "How does a Virtual Office work for my needs?",
      a: "Our virtual office gives you a prestigious Delhi-NCR address for GST registration, mail handling and professional correspondence — all managed by our hospitality team. You can also access meeting rooms at member rates."
    },
  ],
};

const PlusIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="5" x2="12" y2="19" />
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);

const CloseIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const ChevronRight = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

export default function FAQSection() {
  const [activeCategory, setActiveCategory] = useState("Pricing");
  const [openIndex, setOpenIndex] = useState(0);

  const categories = Object.keys(faqData);
  const activeQuestions = faqData[activeCategory];

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    setOpenIndex(0);
  };

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <h2 className={styles.heading}>Frequently Asked Questions</h2>
          <p className={styles.subheading}>
            Everything you need to know about joining the Spacetime community.
          </p>
        </div>

        <div className={styles.content}>
          <div className={styles.tabs}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategoryClick(cat)}
                className={`${styles.tab} ${activeCategory === cat ? styles.tabActive : ''}`}
              >
                <span>{cat}</span>
                <ChevronRight />
              </button>
            ))}
          </div>

          <div className={styles.accordion}>
            {activeQuestions.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={index} className={`${styles.item} ${isOpen ? styles.itemActive : ''}`}>
                  <div className={styles.question} onClick={() => toggleAccordion(index)}>
                    <span>{item.q}</span>
                    <div className={styles.icon}>
                      {isOpen ? <CloseIcon /> : <PlusIcon />}
                    </div>
                  </div>
                  {isOpen && (
                    <div className={styles.answer}>
                      <p>{item.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
