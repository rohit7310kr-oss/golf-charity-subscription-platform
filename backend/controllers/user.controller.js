const catchAsyncHandler = require("../middleware/catchAsyncHandler");
const User = require("../models/user.model");
const jwt = require("jsonwebtoken");

exports.getAllUser = catchAsyncHandler(async function (req, res) {
  const data = await User.find();

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

  const { _id, ...rest } = userObj;
  const data = { ...rest };

  res.status(200).json({
    status: "success",
    data,
    token,
  });
});
