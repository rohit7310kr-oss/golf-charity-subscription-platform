const catchAsyncHandler = require("../middleware/catchAsyncHandler");
const Profile = require("../models/profile.model");
const User = require("../models/user.model");
const { getIdFromPublicId } = require("../utils/getIdFromPublicId");

exports.createProfile = catchAsyncHandler(async function (req, res) {
  const userId = await getIdFromPublicId(User, req.body.user);

  req.body.user = userId;

  const profile = await Profile.create(req.body);

  const { _id, ...data } = profile.toObject();

  res.status(200).json({ status: "success", data });
});

exports.getProfile = catchAsyncHandler(async function (req, res) {
  req.params.id = await getIdFromPublicId(User, req.params.id);
  const profile = await Profile.findOne({ user: req.params.id });

  if (!profile) return res.status(200).json({ status: "success", data: null });

  const { _id, user, ...data } = profile.toObject();

  res.status(200).json({ status: "success", data });
});

exports.getAllProfile = catchAsyncHandler(async function (req, res) {
  const profiles = await Profile.find();
  const data = profiles.map((el) => {
    const { _id, ...rest } = el.toObject();
    return rest;
  });

  res.status(200).json({ status: "success", data });
});

exports.updateProfile = catchAsyncHandler(async function (req, res) {
  const profile = await Profile.findOneAndUpdate(
    { publicId: req.params.id },
    req.body,
  );

  if (!profile)
    return res
      .status(400)
      .json({ status: "fail", message: "Profile not found" });

  const { _id, ...data } = profile.toObject();

  res.status(200).json({ status: "success", data });
});
