const catchAsyncHandler = require("../middleware/catchAsyncHandler");
const Score = require("../models/score.model");

exports.createScore = catchAsyncHandler(async function (req, res) {
  const score = await Score.create(req.body);
  const { _id, ...rest } = score.toObject();

  res.status(200).json({
    status: "success",
    data: rest,
    message: "successfully created scores",
  });
});

exports.getAllScores = catchAsyncHandler(async function (req, res) {
  const scores = await Score.find();
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
