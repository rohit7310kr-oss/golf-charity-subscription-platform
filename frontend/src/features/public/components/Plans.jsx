import React from "react";
import styles from "./Plans.module.css";

const Plans = () => {
  // Placeholder data
  const plans = [
    {
      id: 1,
      name: "Basic Plan",
      price: "$10/month",
      features: ["Feature 1", "Feature 2"],
    },
    {
      id: 2,
      name: "Premium Plan",
      price: "$20/month",
      features: ["Feature 1", "Feature 2", "Feature 3"],
    },
    {
      id: 3,
      name: "Gold Plan",
      price: "$30/month",
      features: ["All features"],
    },
  ];

  return (
    <section id="plans" className={styles.section}>
      <h2>Subscription Plans</h2>
      <div className={styles.plansGrid}>
        {plans.map((plan) => (
          <div key={plan.id} className={styles.planCard}>
            <h3>{plan.name}</h3>
            <span className={styles.planPrice}>{plan.price}</span>
            <ul className={styles.planFeatures}>
              {plan.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            <button className={styles.chooseButton}>Choose Plan</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Plans;
