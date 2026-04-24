import React from "react";

import styles from "./InputField.module.css";

const InputField = ({
  label,
  disabled,
  onChange,
  value,
  htmlId,
  name,
  type,
  error,
}) => {
  if (
    type === "text" ||
    type === "number" ||
    type === "tel" ||
    type === "email"
  )
    return (
      <div className={styles.formGroup}>
        <span>{error}</span>
        <label htmlFor={htmlId}>{label}</label>
        <input
          type={type}
          id={htmlId}
          name={name}
          value={value}
          onChange={onChange}
          disabled={disabled}
        />
      </div>
    );

  if (type === "select")
    return (
      <div className={styles.formGroup}>
        <span>{error}</span>
        <label htmlFor={htmlId}>{label}</label>
        <select
          id={htmlId}
          name={name}
          value={value}
          onChange={onChange}
          disabled={disabled}
        >
          <option value="beginner">Beginner</option>
          <option value="intermediate">Intermediate</option>
          <option value="advanced">Advanced</option>
          <option value="professional">Professional</option>
        </select>
      </div>
    );
};

export default InputField;
