import { useEffect, useState } from "react";
import { fetchScoresAPI } from "../../services/scoreAPI";

const useFetchScores = function () {
  const [scores, setScores] = useState([]);

  useEffect(() => {
    handleFetchRequest();
  }, []);

  async function handleFetchRequest() {
    const response = await fetchScoresAPI();
    const scoresData = response.data.data.map((score) => {
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

    setScores(scoresData);
  }

  return { scores };
};

export default useFetchScores;
