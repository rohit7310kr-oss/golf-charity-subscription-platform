const express = require("express");
const {
  createScore,
  getUserScores,
} = require("../controllers/score.controller");
const authMiddleware = require("../middleware/authMiddleware");
const allowRoles = require("../middleware/allowRoles");

const router = express.Router();

router.use(authMiddleware, allowRoles("user"));

router.route("/").post(createScore);

router.route("/:id").get(getUserScores);

module.exports = router;
