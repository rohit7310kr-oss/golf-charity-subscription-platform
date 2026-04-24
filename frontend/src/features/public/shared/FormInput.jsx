import React from "react";
import styles from "./FormInput.module.css";

const FormInput = ({
  label,
  value,
  onChange,
  placeholder,
  name,
  type,
  error,
}) => {
  return (
    <div className={styles.formGroup}>
      <label className={styles.formLabel}>{label}:</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className={styles.formInput}
        placeholder={placeholder}
        required
      />
      {error && <p className={styles.formError}>{error}</p>}
    </div>
  );
};

export default FormInput;
