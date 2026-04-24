import styles from "./Loading.module.css";

const Loading = ({ message }) => {
  return (
    <div className={styles.loadingContainer}>
      <div className={styles.spinner}></div>
      <p className={styles.loadingText}>{message}</p>
    </div>
  );
};

export default Loading;
