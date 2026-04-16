import styles from "./AdminBulkActionSection.module.css";

const AdminBulkActionSection = function ({ data }) {
  console.log(data);

  return (
    <>
      {data.length > 0 && (
        <div className={styles.bulkActions}>
          <span className={styles.selectedCount}>{data.length} selected</span>
          <button className={styles.bulkButton}>🚫 Suspend</button>
          <button className={styles.bulkButton}>🗑️ Delete</button>
        </div>
      )}
    </>
  );
};

export default AdminBulkActionSection;
