import React from "react";
import styles from "./EnterScore.module.css";
import UserHeaderSection from "../../shared/UserHeaderSection";
import SecondaryButton from "../../shared/SecondaryButtton";
import useScoreFormHandler from "./useScoreFormHandler";
import { createScoreAPI } from "../../services/userAPI";
import { toast } from "react-toastify";
import { useUser } from "../../../context/userContext";

const EnterScore = () => {
  const { user } = useUser();
  const {
    formData,
    handleInputChange,
    handleSubmit,
    calculateTotal,
    handleScoreChange,
    resetForm,
    handleFormCancle,
  } = useScoreFormHandler(handleRequest);

  async function handleRequest(formData) {
    const requestData = {
      user: user.publicId,
      courseName: formData.courseName,
      date: formData.date,
      notes: formData.notes,
      weather: formData.weather,
      totalScore: calculateTotal(),
    };
    console.log(requestData);
    const response = await createScoreAPI(requestData);

    if (response.data.status === "success") {
      resetForm();
      toast.success("Score is successfully registered");
    }
  }

  return (
    <div className={styles.enterScore}>
      <UserHeaderSection
        title="Enter Your Golf Score"
        description="Record your round details and scores for each hole."
      />

      <form onSubmit={handleSubmit} className={styles.scoreForm}>
        <div className={styles.formSection}>
          <h3>Round Information</h3>
          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label htmlFor="courseName">Course Name</label>
              <input
                type="text"
                id="courseName"
                name="courseName"
                value={formData.courseName}
                onChange={handleInputChange}
                placeholder="Enter course name"
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="weather">weather</label>
              <input
                type="text"
                id="weather"
                name="weather"
                value={formData.weather}
                onChange={handleInputChange}
                placeholder="How was the weather"
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="date">Date</label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
        </div>

        <div className={styles.formSection}>
          <h3>Hole Scores</h3>
          <div className={styles.scoresGrid}>
            {formData.scores.map((score, index) => (
              <div key={index} className={styles.scoreInput}>
                <label>Hole {index + 1}</label>
                <input
                  type="number"
                  min="1"
                  max="12"
                  value={score}
                  onChange={(e) => handleScoreChange(index, e.target.value)}
                  placeholder="Score"
                />
              </div>
            ))}
          </div>
          <div className={styles.totalScore}>
            <strong>Total Score: {calculateTotal()}</strong>
          </div>
        </div>

        <div className={styles.formSection}>
          <h3>Additional Notes</h3>
          <textarea
            name="notes"
            value={formData.notes}
            onChange={handleInputChange}
            placeholder="Any notes about your round..."
            rows="4"
          />
        </div>

        <div className={styles.formActions}>
          <SecondaryButton variant="simple" onClick={handleFormCancle}>
            Cancle
          </SecondaryButton>
          <SecondaryButton onClick={handleSubmit}>Submit Score</SecondaryButton>
        </div>
      </form>
    </div>
  );
};

export default EnterScore;
