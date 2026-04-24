const catchAsyncHandler = require("../middleware/catchAsyncHandler");
const User = require("../models/user.model");
const jwt = require("jsonwebtoken");

exports.getAllUser = catchAsyncHandler(async function (req, res) {
  const data = await User.find();

  res.status(200).json({ status: "success", data });
});

exports.getUser = catchAsyncHandler(async function (req, res) {
  const user = await User.findOne({ publicId: req.params.id });

  if (!user)
    res.status(400).json({ status: "fail", message: "user not found" });

  const { _id, password, ...data } = user.toObject();

  res.status(200).json({ status: "success", data });
});

exports.updateUser = catchAsyncHandler(async function (req, res) {
  const user = await User.findOneAndUpdate(
    { publicId: req.params.id },
    req.body,
  );

  if (!user)
    return res.status(400).json({ status: "fail", message: "User not found" });

  const { _id, ...data } = user.toObject();

  res.status(200).json({ status: "success", data });
});
