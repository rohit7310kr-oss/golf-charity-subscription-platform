import React from "react";
import styles from "./Registration.module.css";
import useRegistrationFormHandler from "../hooks/useRegistrationFormHandler";
import FormInput from "../shared/FormInput";
import { useNavigate } from "react-router";
import Loading from "../shared/Loading";
import Error from "../shared/Error";

const Registration = () => {
  const navigate = useNavigate();

  const {
    isLoading: userRegistrationLoading,
    formData,
    handleChange,
    handleSubmit,
    fieldErrors,
    error: userRegistrationError,
    retry: userRegistrationErrorRetry,
  } = useRegistrationFormHandler(onSuccess);

  function onSuccess() {
    navigate("/app/user");
  }

  if (userRegistrationLoading)
    return (
      <section className={styles.section}>
        <Loading message="Creating account, please wait..." />
      </section>
    );

  if (userRegistrationError)
    return (
      <section className={styles.section}>
        <Error
          onRetry={userRegistrationErrorRetry}
          message={userRegistrationError}
        />
      </section>
    );

  return (
    <>
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
          label="Phone"
          type="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Enter your phone"
          error={fieldErrors.phone}
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
    </>
  );
};

export default Registration;
