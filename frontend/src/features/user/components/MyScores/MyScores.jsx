import React, { useState } from "react";
import styles from "./MyScores.module.css";
import UserHeaderSection from "../../shared/UserHeaderSection";
import SecondaryButton from "../../shared/SecondaryButtton";
import useSortScores from "./useSortScores";
import useFetchData from "./../../hook/useFetchData";
import { fetchScoresAPI } from "../../services/userAPI";
import Loader from "../../../shared/Loader";

const MyScores = () => {
  // Mock data - in real app, this would come from API

  const { loading, data: scoresData } = useFetchData(fetchScoresAPI);

  const scores = !scoresData.data
    ? []
    : scoresData.data.map((score) => {
        const diffOverUnder = score.coursePar - score.totalScore;
        return {
          id: score.publicId,
          date: new Date(score.date).toLocaleDateString(),
          course: score.courseName,
          score: score.totalScore,
          par: score.coursePar,
          weather: score.weather,
          notes: score.notes,
          overUnder:
            diffOverUnder > 0
              ? `+${Math.abs(diffOverUnder)}`
              : `-${Math.abs(diffOverUnder)}`,
        };
      });

  const { sortOrder, sortBy, handleSort, sortedScores } = useSortScores(scores);

  const getScoreClass = (score, par) => {
    const diff = score - par;
    if (diff <= -2) return styles.excellent;
    if (diff === -1) return styles.good;
    if (diff === 0) return styles.par;
    if (diff <= 2) return styles.over;
    return styles.poor;
  };

  return (
    <div className={styles.myScores}>
      {loading ? (
        <Loader />
      ) : (
        <>
          <UserHeaderSection
            title="My Golf Scores"
            description="View and analyze your golf performance history."
          />

          <div className={styles.statsSummary}>
            <div className={styles.stat}>
              <span className={styles.statLabel}>Total Rounds:</span>
              <span className={styles.statValue}>{scores.length}</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statLabel}>Average Score:</span>
              <span className={styles.statValue}>
                {scores &&
                  Math.round(
                    scores?.reduce((sum, s) => sum + s.score, 0) /
                      scores?.length,
                  )}
              </span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statLabel}>Best Score:</span>
              <span className={styles.statValue}>
                {Math.min(...scores.map((s) => s.score))}
              </span>
            </div>
          </div>

          <div className={styles.scoresTable}>
            <div className={styles.tableHeader}>
              <button
                className={`${styles.headerCell} ${sortBy === "date" ? styles.sorted : ""}`}
                onClick={() => handleSort("date")}
              >
                Date {sortBy === "date" && (sortOrder === "asc" ? "↑" : "↓")}
              </button>
              <div className={styles.headerCell}>Course</div>
              <button
                className={`${styles.headerCell} ${sortBy === "score" ? styles.sorted : ""}`}
                onClick={() => handleSort("score")}
              >
                Score {sortBy === "score" && (sortOrder === "asc" ? "↑" : "↓")}
              </button>
              <div className={styles.headerCell}>Par</div>
              <div className={styles.headerCell}>Over/Under</div>
              <div className={styles.headerCell}>Weather</div>
              <div className={styles.headerCell}>Notes</div>
            </div>

            {sortedScores.map((score) => (
              <div key={score.id} className={styles.tableRow}>
                <div className={styles.cell}>{score.date}</div>
                <div className={styles.cell}>{score.course}</div>
                <div
                  className={`${styles.cell} ${getScoreClass(score.score, score.par)}`}
                >
                  {score.score}
                </div>
                <div className={styles.cell}>{score.par}</div>
                <div
                  className={`${styles.cell} ${score.score - score.par > 0 ? styles.positive : styles.negative}`}
                >
                  {score.score - score.par > 0 ? "+" : ""}
                  {score.score - score.par}
                </div>
                <div className={styles.cell}>{score.weather}</div>
                <div className={styles.cell}>{score.notes}</div>
              </div>
            ))}
          </div>

          <div className={styles.actions}>
            <SecondaryButton variant="blue">📊 Export Scores</SecondaryButton>
            <SecondaryButton>➕ Enter New Score</SecondaryButton>
          </div>
        </>
      )}
    </div>
  );
};

export default MyScores;
