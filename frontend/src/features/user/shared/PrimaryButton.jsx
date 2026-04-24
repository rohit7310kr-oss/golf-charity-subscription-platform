import React, { Children } from "react";

import styles from "./PrimaryButton.module.css";

const PrimaryButton = ({ children, onClick }) => {
  return (
    <button onClick={onClick} className={styles.primaryButton}>
      {children}
    </button>
  );
};

export default PrimaryButton;
