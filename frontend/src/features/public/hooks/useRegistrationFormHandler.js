import { useState } from "react";
import { createUserAPI } from "../services/users";

const useFormHandler = function (onSuccess) {
  const formInputs = {
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  };

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const [fieldErrors, setFieldErrors] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState(null);

  const retry = function () {
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
    });
    setError(null);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const createUserHandler = async function () {
    try {
      setFieldErrors({
        fullName: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
      });
      if (formData.password !== formData.confirmPassword)
        return setFieldErrors((errors) => {
          return {
            ...errors,
            confirmPassword: "Password not matching, please match the password",
          };
        });

      if (formData.fullName.length < 2)
        return setFieldErrors((errors) => {
          return { ...errors, fullName: "Please write correct name" };
        });

      setIsLoading(true);

      const response = await createUserAPI(formData);

      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.data));

      setFormData({
        fullName: "",
        email: "",
        password: "",
        phone: "",
        confirmPassword: "",
      });
      onSuccess();
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createUserHandler(formData);
  };

  return {
    isLoading,
    formData,
    setFormData,
    handleChange,
    handleSubmit,
    fieldErrors,
    error,
    retry,
  };
};

export default useFormHandler;
