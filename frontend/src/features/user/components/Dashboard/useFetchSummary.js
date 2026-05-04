import { useEffect, useState } from "react";
import { fetchSummeryAPI } from "../../services/userAPI";
import { useUser } from "../../../context/userContext";

const useFetchSummary = function () {
  const [stats, setStats] = useState({
    totalRounds: 0,
    averageScore: 0,
    bestScore: 0,
    handicap: 0,
  });
  const [recentRounds, setRecentRounds] = useState([]);
  const [loading, setLoading] = useState(false);

  const { user } = useUser();

  useEffect(() => {
    handleRequest();
  }, []);

  const handleRequest = async function () {
    try {
      setLoading(true);
      if (!user) throw new Error("Please login");
      const response = await fetchSummeryAPI(user?.publicId);

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
