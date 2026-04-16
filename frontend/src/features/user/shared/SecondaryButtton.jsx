import React from "react";

import styles from "./SecondaryButton.module.css";

const SecondaryButton = ({ variant = "", onClick, children }) => {
  const style =
    variant === "simple"
      ? {
          background: "#fff",
          color: "#666",
          border: "1px solid #ddd",
          transition: "background-color 0.3s ease",
          boxShadow: "0px",
        }
      : variant === "blue"
        ? {
            background: "linear-gradient(135deg, #2196f3, #42a5f5)",
          }
        : {};

  return (
    <button
      type="button"
      style={style}
      onClick={onClick}
      className={styles.secondaryButton}
    >
      {children}
    </button>
  );
};

export default SecondaryButton;
