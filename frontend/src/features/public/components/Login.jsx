import React, { useState } from "react";
import styles from "./Login.module.css";
import FormInput from "../shared/FormInput";
import useLoginFormHandler from "../hooks/useLoginFormHandler";
import Loading from "../shared/Loading";
import Error from "../shared/Error";

const Login = ({ onLogin }) => {
  const {
    handleSubmit,
    handleChange,
    formValues,
    loading: loginLoading,
    error,
    onRetry,
  } = useLoginFormHandler();

  if (error) return <Error message={error} onRetry={onRetry} />;

  if (loginLoading)
    return <Loading message="we are logging you, please wait..." />;

  return (
    <>
      <h2>Login to your account</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <FormInput
          label="Email"
          type="email"
          name="email"
          value={formValues.email}
          onChange={handleChange}
          placeholder="Enter your registered email"
        />
        <FormInput
          label="Password"
          type="password"
          name="password"
          value={formValues.password}
          onChange={handleChange}
          placeholder="Enter your password"
        />

        <button type="submit" className={styles.submitButton}>
          Login
        </button>
      </form>
    </>
  );
};

export default Login;
