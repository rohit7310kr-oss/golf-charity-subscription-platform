import React, { Children } from "react";

import styles from "./PrimaryButton.module.css";

const PrimaryButton = ({ children }) => {
  return <button className={styles.primaryButton}>{children}</button>;
};

export default PrimaryButton;
