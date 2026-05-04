const jwt = require("jsonwebtoken");
const User = require("../models/user.model");
const catchAsyncHandler = require("../middleware/catchAsyncHandler");
const bcrypt = require("bcryptjs");
const client = require("../config/redis");

const createToken = function (publicId, role) {
  const token = jwt.sign({ publicId, role }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });

  return token;
};

exports.getMe = catchAsyncHandler(async function (req, res) {
  const user = await User.findOne({ publicId: req.user.publicId });

  res.status(200).json({ data: user, status: "success" });
});

exports.createUser = catchAsyncHandler(async function (req, res) {
  const user = await User.create(req.body);

  const token = createToken(user.publicId, user.role);

  const userObj = user.toObject();

  const { _id, password, ...rest } = userObj;
  const data = { ...rest };

  res.status(200).json({
    status: "success",
    data,
    token,
  });
});

exports.loginUser = catchAsyncHandler(async function (req, res) {
  const user = await User.findOne({ email: req.body.email });

  if (!user)
    return res.status(400).json({
      status: "fail",
      message: "User not found, please register yourself first!",
    });

  const isMatch = await bcrypt.compare(req.body.password, user.password);

  if (!isMatch)
    return res.status(400).json({
      status: "fail",
      message: "Incorrect credentials, please try again!",
    });

  const { _id, ...data } = user.toObject();

  const token = createToken(user.publicId, user.role);

  res.status(200).json({
    status: "success",
    data,
    token,
  });
});

exports.logoutUser = catchAsyncHandler(async function (req, res) {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.decode(token);

    const ttl = decoded.exp - Math.floor(Date.now() / 1000);
    await client.set(`blacklist:${token}`, "true", { ex: ttl });

    res.json({ message: "Logged out successfully" });
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: "failed to logout", err });
  }
});

exports.updateUser = catchAsyncHandler(async function (req, res) {
  const user = await User.findOneAndUpdate(
    { publicId: req.params.id },
    req.body,
  );

  res.status(200).json({ status: "success", user });
});
