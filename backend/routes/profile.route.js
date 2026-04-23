const express = require("express");
const {
  getProfile,
  createProfile,
  updateProfile,
} = require("../controllers/profile.controller");

const router = express.Router();

router.route("/:id").get(getProfile).patch(updateProfile);
router.route("/").post(createProfile);

module.exports = router;
