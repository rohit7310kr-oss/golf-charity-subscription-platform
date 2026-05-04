const express = require("express");
const {
  getProfile,
  createProfile,
  updateProfile,
} = require("../controllers/profile.controller");
const authMiddleware = require("../middleware/authMiddleware");
const allowRoles = require("../middleware/allowRoles");

const router = express.Router();

router.route("/:id").get(getProfile);

router.use(authMiddleware, allowRoles("user"));

router.route("/:id").patch(updateProfile);
router.route("/").post(createProfile);

module.exports = router;
