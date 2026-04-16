import styles from "./UserHeaderSection.module.css";

const UserHeaderSection = function ({ title, description }) {
  return (
    <div className={styles.welcome}>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default UserHeaderSection;
