import styles from "./AdminStatsCardsSection.module.css";

const AdminStatsCardsSection = function ({ data }) {
  return (
    <div className={styles.statsSection}>
      {data.map((el) => (
        <div className={styles.statCard}>
          <div className={styles.statIcon}>{el.icon}</div>
          <div className={styles.statContent}>
            <h3>{el.value}</h3>
            <p>{el.title}</p>
            <span className={styles.statChange}>{el.extras}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AdminStatsCardsSection;
