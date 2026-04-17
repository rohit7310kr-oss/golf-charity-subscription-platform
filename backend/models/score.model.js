const { publicIdValidator } = require("../utils/validator");

const mongoose = require("mongoose");

const scoreSchema = new mongoose.Schema({
  publicId: publicIdValidator,
  courseName: {
    type: String,
    required: [true, "course name is required"],
  },
  whether: {
    type: String,
    required: false,
  },
  date: {
    type: Date,
    required: [true, "Date of the game played is required"],
  },
  totalScore: {
    type: Number,
    required: [true, "total score is required"],
  },
  coursePar: {
    type: Number,
    default: 72,
    required: [true, "course par is required"],
  },
  notes: {
    type: String,
    required: false,
  },
  overOrUnder: {
    type: String,
    default: `${this.totalScore - this.coursePar}`,
    required: true,
  },
});

module.exports = mongoose.model("score", scoreSchema);
