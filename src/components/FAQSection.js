"use client";
import React, { useState } from 'react';
import styles from './FAQSection.module.css';

const faqData = {
  "General Questions": [
    {
      q: "Presented own highly to is offers surprise of ear chair?",
      a: "Create text automations and flows based on custom prebuilt audiences. Capture abandon carts. You cannot spend 2 months."
    },
    {
      q: "The even a the man, used to and surprised that at incentive?",
      a: "Our spaces provide everything you need to hit the ground running with premium amenities."
    },
    {
      q: "Dishonourable mellower and we their visuals theoretically produce?",
      a: "Yes, you can upgrade or downgrade your membership plan anytime to suit your evolving business needs."
    },
    {
      q: "For structure seeing to a room as his right in?",
      a: "Our community managers are always visible and ready to help you out through our normal channels."
    },
    {
      q: "The clear my a of from the rosy time how new times because that?",
      a: "Absolutely, we encourage community engagement and host weekly events."
    }
  ],
  "Support team": [
    {
      q: "How can I reach the support team?",
      a: "You can reach us directly via the member portal or email us anytime for rapid responses."
    },
    {
      q: "What are the standard support hours?",
      a: "We offer 24/7 support for all our members via the dedicated helpline."
    }
  ],
  "Miscellaneous": [
    {
      q: "Are pets allowed in the coworking space?",
      a: "Yes, our locations are fully pet-friendly! Keep them leashed in common spots."
    }
  ],
  "Consectetur": [
    {
      q: "Lorem ipsum dolor sit amet consectetur?",
      a: "Adipiscing elit pellentesque habitant morbi tristique senectus."
    }
  ],
  "Gabitasse": [
    {
      q: "Habitasse platea dictumst quisque sagittis?",
      a: "Purus in massa tempor nec feugiat nisl pretium fusce id."
    }
  ]
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
  const [activeCategory, setActiveCategory] = useState("General Questions");
  const [openIndex, setOpenIndex] = useState(0);

  const categories = Object.keys(faqData);
  const activeQuestions = faqData[activeCategory];

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    setOpenIndex(0); // reset open accordion when changing category
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
            Our platform is built to help you work smarter, not harder. It adapts to your needs
            and supports your goals. Make the most of every feature.
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
