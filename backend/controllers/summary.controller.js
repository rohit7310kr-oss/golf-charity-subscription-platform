const catchAsyncHandler = require("../middleware/catchAsyncHandler");
const Score = require("../models/score.model");
const User = require("../models/user.model");
const { getIdFromPublicId } = require("../utils/getIdFromPublicId");

exports.getUserStats = catchAsyncHandler(async function (req, res) {
  const userId = await getIdFromPublicId(User, req.params.id);
  const scores = await Score.find({ user: userId });

  if (!scores.length)
    return res
      .status(200)
      .json({ status: "success", data: null, message: "No scores found" });

  const numRounds = scores.length;
  const averageScore = Math.round(
    scores.reduce((acc, cur) => cur.totalScore + acc, 0) / numRounds,
  );

  let bestScore = scores[0].totalScore;
  scores.forEach(
    (el) => (bestScore = el.totalScore < bestScore ? el.totalScore : bestScore),
  );

  const handicap = Math.round((averageScore - 72) * 0.8);

  const recentRound = [...scores]
    .sort((a, b) => {
      const aVal = new Date(a.date);
      const bVal = new Date(b.date);

      return aVal < bVal ? 1 : -1;
    })
    .slice(0, 3);

  res.status(200).json({
    status: "success",
    data: { numRounds, averageScore, bestScore, handicap, recentRound },
  });
});
