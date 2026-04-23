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
  const { _id, ...data } = user.toObject();
  res.status(200).json({ status: "success", data });
});

exports.createUser = catchAsyncHandler(async function (req, res) {
  const user = await User.create(req.body);
  const token = jwt.sign(
    { publicId: user.publicId, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRES_IN },
  );

  const userObj = user.toObject();

  const { _id, password, ...rest } = userObj;
  const data = { ...rest };

  res.status(200).json({
    status: "success",
    data,
    token,
  });
});

exports.updateUser = catchAsyncHandler(async function (req, res) {
  const user = await User.findOneAndUpdate(
    { publicId: req.params.id },
    req.body,
  );

  res.status(200).json({ status: "success", user });
});
