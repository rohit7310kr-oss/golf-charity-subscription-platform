import styles from "./AdminPageHeader.module.css";

const AdminPageHeader = function ({ title, description, actions = [] }) {
  return (
    <div className={styles.pageHeader}>
      <div className={styles.headerContent}>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div className={styles.headerActions}>
        {actions.map((el) => (
          <button
            className={
              el.type === "primary"
                ? styles.primaryButton
                : styles.secondaryButton
            }
            onClick={el.onClick}
          >
            {el.title}
          </button>
        ))}
      </div>
    </div>
  );
};

export default AdminPageHeader;
