import React from "react";
import styles from "./Dashboard.module.css";
import UserHeaderSection from "../../shared/UserHeaderSection";
import PrimaryButton from "../../shared/PrimaryButton";

const Dashboard = () => {
  // Mock data - in real app, this would come from API
  const stats = {
    totalRounds: 24,
    averageScore: 78,
    bestScore: 72,
    handicap: 12.5,
  };

  const recentRounds = [
    { date: "2024-04-10", course: "Pine Valley", score: 76, par: 72 },
    { date: "2024-04-08", course: "Augusta National", score: 82, par: 72 },
    { date: "2024-04-05", course: "Pebble Beach", score: 79, par: 72 },
  ];

  return (
    <div className={styles.dashboard}>
      <UserHeaderSection
        title="Welcome back, Golfer!"
        description="Here's your golf performance overview."
      />
      <div className={styles.statsGrid}>
        <div className={styles.statCard}>
          <div className={styles.statIcon}>🎯</div>
          <div className={styles.statContent}>
            <h3>{stats.totalRounds}</h3>
            <p>Total Rounds</p>
          </div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statIcon}>📊</div>
          <div className={styles.statContent}>
            <h3>{stats.averageScore}</h3>
            <p>Average Score</p>
          </div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statIcon}>🏆</div>
          <div className={styles.statContent}>
            <h3>{stats.bestScore}</h3>
            <p>Best Score</p>
          </div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statIcon}>📈</div>
          <div className={styles.statContent}>
            <h3>{stats.handicap}</h3>
            <p>Handicap</p>
          </div>
        </div>
      </div>

      <div className={styles.recentRounds}>
        <h3>Recent Rounds</h3>
        <div className={styles.roundsTable}>
          <div className={styles.tableHeader}>
            <span>Date</span>
            <span>Course</span>
            <span>Score</span>
            <span>Over Par</span>
          </div>
          {recentRounds.map((round, index) => (
            <div key={index} className={styles.tableRow}>
              <span>{round.date}</span>
              <span>{round.course}</span>
              <span>{round.score}</span>
              <span
                className={
                  round.score - round.par > 0 ? styles.overPar : styles.underPar
                }
              >
                {round.score - round.par > 0 ? "+" : ""}
                {round.score - round.par}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.quickActions}>
        <h3>Quick Actions</h3>
        <div className={styles.actionsGrid}>
          <PrimaryButton>📝 Enter New Score</PrimaryButton>
          <PrimaryButton>📊 View All Scores</PrimaryButton>
          <PrimaryButton>🏌️‍♂️ Find Courses</PrimaryButton>
          <PrimaryButton>👥 Join Tournament</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
