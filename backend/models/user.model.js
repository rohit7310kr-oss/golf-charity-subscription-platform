// User model
const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");
const { nanoid: nanoId } = require("nanoid");

const userSchema = new mongoose.Schema({
  publicId: {
    type: String,
    default: () => nanoId(8),
  },
  fullName: {
    type: String,
    required: [true, "name is required"],
  },
  email: {
    type: String,
    required: [true, "email is required"],
    unique: true,
    lowercase: true,
    match: [
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      "Please provide a valid email address",
    ],
  },
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },
  password: {
    type: String,
    required: [true, "password is required"],
    minlength: [6, "password must be at least 6 characters long"],
    select: false,
  },
  confirmPassword: {
    type: String,
    required: [true, "Please confirm the password"],
    validate: {
      validator: function (el) {
        return el === this.password;
      },
      message: "Passwords do not match",
    },
  },
});

userSchema.pre("save", async function () {
  if (!this.isModified("password")) return; // If password is not updating?

  this.confirmPassword = undefined;
  this.password = await bcrypt.hash(this.password, 10);
});

module.exports = mongoose.model("user", userSchema);
