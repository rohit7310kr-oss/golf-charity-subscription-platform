const catchAsyncHandler = require("../middleware/catchAsyncHandler");
const Score = require("../models/score.model");
const User = require("../models/user.model");
const { getIdFromPublicId } = require("../utils/getIdFromPublicId");

exports.createScore = catchAsyncHandler(async function (req, res) {
  req.body.user = await getIdFromPublicId(User, req.body.user);
  const score = await Score.create(req.body);
  const { _id, ...rest } = score.toObject();

  res.status(200).json({
    status: "success",
    data: rest,
    message: "successfully created scores",
  });
});

exports.getUserScores = catchAsyncHandler(async function (req, res) {
  const userId = await getIdFromPublicId(User, req.params.id);
  const scores = await Score.find({ user: userId });

  if (!scores.length)
    return res
      .status(200)
      .json({ status: "success", data: null, message: "no scores found" });

  const data = scores.map((el) => {
    const { _id, ...rest } = el.toObject();
    return rest;
  });

  res.status(200).json({
    status: "success",
    data,
    message: "successfully fetched scores",
  });
});
