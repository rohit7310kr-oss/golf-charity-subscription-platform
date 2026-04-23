const { publicIdValidator } = require("./../utils/validator");

const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
  publicId: publicIdValidator,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  handicap: {
    type: String,
    default: 20,
  },
  homeCourse: {
    type: String,
    required: [true, "What is you Home course"],
  },
  experienceLevel: {
    type: String,
    enum: ["beginner", "intermediate", "advanced", "professional"],
  },
  bio: {
    type: String,
  },
});

module.exports = mongoose.model("profile", profileSchema);
