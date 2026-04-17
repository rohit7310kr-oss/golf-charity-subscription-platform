import { useEffect, useState } from "react";
import { fetchSummeryAPI } from "../../services/scoreAPI";

const useFetchSummary = function () {
  const [stats, setStats] = useState({});
  const [recentRounds, setRecentRounds] = useState([]);

  useEffect(() => {
    handleRequest();
  }, []);

  const handleRequest = async function () {
    const response = await fetchSummeryAPI();
    const data = response.data.data;

    setStats({
      totalRounds: data.numRounds,
      averageScore: data.averageScore,
      bestScore: data.bestScore,
      handicap: data.handicap,
    });

    setRecentRounds(
      data.recentRound.map((round) => {
        return {
          date: new Date(round.date).toLocaleDateString(),
          course: round.courseName,
          score: round.totalScore,
          par: round.coursePar,
        };
      }),
    );
  };

  return { stats, recentRounds };
};

export default useFetchSummary;
