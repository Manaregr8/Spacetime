"use client";
import React, { useState } from 'react';
import styles from './FAQSection.module.css';

const faqData = {
  "Membership & Workspaces": [
    {
      q: "What workspace solutions does Spacetime offer?",
      a: "Spacetime offers flexible desks, dedicated desks, private cabins, managed offices, meeting rooms, event spaces, and virtual offices. Whether you're an individual professional or an enterprise, we have workspace solutions that grow with your business."
    },
    {
      q: "Who is Spacetime designed for?",
      a: "Our workspaces are ideal for freelancers, startups, SMEs, growing businesses, and enterprise teams looking for flexible, professionally managed office spaces."
    },
    {
      q: "Can I upgrade my workspace as my team grows?",
      a: "Absolutely. Many of our members begin with coworking or a private cabin and seamlessly upgrade to larger managed office solutions as their business expands."
    },
  ],
  "Facilities & Amenities": [
    {
      q: "What amenities are included?",
      a: "Members enjoy high-speed internet, meeting rooms, reception services, housekeeping, pantry access, tea and coffee, printing facilities, breakout spaces, and professionally managed common areas."
    },
    {
      q: "Are meeting rooms available for non-members?",
      a: "Yes. Our meeting and conference rooms can be booked by both members and external guests, subject to availability."
    },
    {
      q: "Are the workspaces fully furnished?",
      a: "Yes. Every workspace is move-in ready with ergonomic furniture, enterprise-grade internet, power backup, and essential business infrastructure."
    },
  ],
  "Locations & Access": [
    {
      q: "Where are Spacetime centres located?",
      a: "Spacetime operates premium workspace centres across key commercial locations in Delhi NCR, offering excellent connectivity and business infrastructure."
    },
    {
      q: "Can I visit a centre before signing up?",
      a: "Absolutely. We encourage prospective members to schedule a tour and experience the workspace before making a decision."
    },
    {
      q: "What are your operating hours?",
      a: "Our centres are open during business hours, while member access may vary depending on the workspace plan and location."
    },
  ],
  "Managed Offices & Enterprise Solutions": [
    {
      q: "What is a managed office?",
      a: "A managed office is a fully furnished, customised workspace exclusively designed for your team. Spacetime takes care of fit-outs, operations, and day-to-day management so you can focus on your business."
    },
    {
      q: "Can you customise office layouts?",
      a: "Yes. We work with businesses to create office spaces tailored to their branding, team size, and operational requirements."
    },
    {
      q: "How quickly can my team move in?",
      a: "Depending on the size and level of customisation, many offices can be made ready within a short turnaround period."
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

export default function FAQSection({ customFaqs, heading, subheading }) {
  // Use custom FAQs if provided, otherwise fallback to the default static data
  const dataToUse = customFaqs || faqData;
  const defaultHeading = heading || null;
  const defaultSubheading = subheading || null;
  const [activeCategory, setActiveCategory] = useState(Object.keys(dataToUse)[0]);
  const [openIndex, setOpenIndex] = useState(0);

  const categories = Object.keys(dataToUse);
  const activeQuestions = dataToUse[activeCategory];

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
          {defaultHeading ? (
            <h2 className={styles.heading}>{defaultHeading}</h2>
          ) : (
            <h2 className={styles.heading}>Questions? We&apos;ve got you <span style={{ color: "#b89257ff ", fontWeight: 800, letterSpacing: "-1px" }}>covered.</span></h2>
          )}
          <p className={styles.subheading}>
            {defaultSubheading || "Whether you\u2019re looking for a coworking desk, a managed office, or a meeting room, here are answers to the questions we hear most often."}
          </p>
        </div>

        <div className={styles.content}>
          <div className={styles.accordion}>
            {Object.entries(dataToUse).map(([category, questions]) => (
              <div key={category} className={styles.categoryGroup}>
                <h3 className={styles.categoryTitle}>{category}</h3>
                {questions.map((item, index) => {
                  const globalIndex = `${category}-${index}`;
                  const isOpen = openIndex === globalIndex;
                  return (
                    <div key={index} className={`${styles.item} ${isOpen ? styles.itemActive : ''}`}>
                      <div className={styles.question} onClick={() => setOpenIndex(isOpen ? null : globalIndex)}>
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
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
