"use client";

import { useState } from "react";
import JobApplicationModal from "./JobApplicationModal";
import styles from "./CareersPositions.module.css";

const positions = [
  {
    title: "Community Manager",
    location: "On-site, Delhi",
  },
  {
    title: "Community Manager Intern",
    location: "On-site, Delhi",
  },
  {
    title: "Marketing Intern",
    location: "Hybrid, Delhi",
  },
  {
    title: "Operations Intern",
    location: "On-site, Delhi",
  },
  {
    title: "Sales Executive",
    location: "On-site, Delhi",
  }
];

export default function CareersPositions() {
  const [selectedRole, setSelectedRole] = useState(null);

  return (
    <section id="positions" className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.heading}>Open positions</h2>
        
        <div className={styles.list}>
          {positions.map((pos, index) => (
            <div key={index} className={styles.item}>
              <div className={styles.info}>
                <h3 className={styles.title}>{pos.title}</h3>
                <p className={styles.location}>{pos.location}</p>
              </div>
              <button 
                className={styles.applyBtn}
                onClick={() => setSelectedRole(pos.title)}
              >
                Apply
              </button>
            </div>
          ))}
        </div>
      </div>

      <JobApplicationModal 
        isOpen={!!selectedRole} 
        onClose={() => setSelectedRole(null)} 
        role={selectedRole}
      />
    </section>
  );
}
