import { useState } from "react";

const useScoreFormHandler = function (handleRequest) {
  const [formData, setFormData] = useState({
    courseName: "",
    date: new Date().toISOString().split("T")[0],
    scores: Array(18).fill(""),
    notes: "",
    weather: "",
  });

  function resetForm() {
    setFormData({
      courseName: "",
      date: new Date().toISOString().split("T")[0],
      scores: Array(18).fill(""),
      notes: "",
      weather: "",
    });
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleScoreChange = (holeIndex, value) => {
    const newScores = [...formData.scores];
    newScores[holeIndex] = value;
    setFormData((prev) => ({
      ...prev,
      scores: newScores,
    }));
  };

  const calculateTotal = () => {
    return formData.scores.reduce((total, score) => {
      const num = parseInt(score) || 0;
      return total + num;
    }, 0);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleRequest(formData);
    // TODO: Submit to API
  };

  const handleFormCancle = function () {
    resetForm();
  };

  return {
    formData,
    handleInputChange,
    handleSubmit,
    calculateTotal,
    handleScoreChange,
    resetForm,
    handleFormCancle,
  };
};

export default useScoreFormHandler;
