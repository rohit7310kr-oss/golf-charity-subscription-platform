import { useEffect, useState } from "react";
import { fetchSummeryAPI } from "../../services/userAPI";

const useFetchSummary = function () {
  const [stats, setStats] = useState({});
  const [recentRounds, setRecentRounds] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    handleRequest();
  }, []);

  const handleRequest = async function () {
    try {
      setLoading(true);
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
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return { stats, recentRounds, loading };
};

export default useFetchSummary;
