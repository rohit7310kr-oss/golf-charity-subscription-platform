import { useState } from "react";
import { loginUserAPI } from "../services/users";
import { useNavigate } from "react-router";

const useLoginFormHandler = function () {
  const [loading, setLoading] = useState(false);
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const onRetry = function () {
    setError("");
    setFormValues({
      email: "",
      password: "",
    });
  };

  const handleLoginRequest = async function () {
    try {
      setLoading(true);
      const user = await loginUserAPI(formValues);

      localStorage.setItem("token", user.data.token);
      localStorage.setItem("user", JSON.stringify(user.data.data));

      navigate("/app/user");
    } catch (err) {
      setError(err.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleLoginRequest();
  };

  return { handleSubmit, handleChange, formValues, loading, error, onRetry };
};

export default useLoginFormHandler;
