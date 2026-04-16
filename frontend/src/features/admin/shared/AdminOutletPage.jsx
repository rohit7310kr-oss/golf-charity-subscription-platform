import styles from "./AdminOutletPage.module.css";

const AdminOutletPage = function ({ children }) {
  return <div className={styles.outletPage}>{children}</div>;
};

export default AdminOutletPage;
