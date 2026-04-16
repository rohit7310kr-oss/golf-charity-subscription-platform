import React from "react";
import styles from "./CharityList.module.css";

const CharityList = () => {
  // Placeholder data
  const charities = [
    { id: 1, name: "Charity A", description: "Helping kids in need. " },
    { id: 2, name: "Charity B", description: "Environmental protection." },
    { id: 3, name: "Charity C", description: "Education for all." },
  ];

  return (
    <section id="charities" className={styles.section}>
      <h2>List of Charities</h2>
      <div className={styles.charityGrid}>
        {charities.map((charity) => (
          <div key={charity.id} className={styles.charityCard}>
            <h3>{charity.name}</h3>
            <p>{charity.description}</p>
            <button className={styles.selectButton}>Select</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CharityList;
