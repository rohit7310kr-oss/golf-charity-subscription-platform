import React, { useState } from "react";
import styles from "./EnterScore.module.css";
import UserHeaderSection from "../../shared/UserHeaderSection";
import SecondaryButton from "../../shared/SecondaryButtton";

const EnterScore = () => {
  const [formData, setFormData] = useState({
    courseName: "",
    date: new Date().toISOString().split("T")[0],
    scores: Array(18).fill(""),
    notes: "",
  });

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
    // TODO: Submit to API
    console.log("Submitting score:", formData);
    alert("Score submitted successfully!");
  };

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
          <SecondaryButton variant="simple">Cancle</SecondaryButton>
          <SecondaryButton>Submit Score</SecondaryButton>
        </div>
      </form>
    </div>
  );
};

export default EnterScore;
