import React from "react";
import styles from "./Registration.module.css";
import useFormHandler from "../hooks/useFormHandler";
import FormInput from "../shared/FormInput";
import { useNavigate } from "react-router";

const Registration = () => {
  const navigate = useNavigate();

  const { formData, handleChange, handleSubmit, fieldErrors } =
    useFormHandler(onSuccess);

  function onSuccess() {
    navigate("/user");
  }
  console.log(fieldErrors);

  return (
    <section id="register" className={styles.section}>
      <div className={styles.formContainer}>
        <h2>Register yourself</h2>
        <form onSubmit={handleSubmit} className={styles.form}>
          <FormInput
            label="Name"
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Enter your full name"
            error={fieldErrors.fullName}
          />
          <FormInput
            label="Email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email address"
            error={fieldErrors.email}
          />
          <FormInput
            label="Password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Create a secure password"
            error={fieldErrors.password}
          />
          <FormInput
            label="Confirm password"
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm the password"
            error={fieldErrors.confirmPassword}
          />

          <button type="submit" className={styles.submitButton}>
            Register
          </button>
        </form>
        <div className={styles.securityNote}>
          Your registration and payment are processed together securely.
        </div>
      </div>
    </section>
  );
};

export default Registration;
