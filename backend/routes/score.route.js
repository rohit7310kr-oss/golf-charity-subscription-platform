const express = require("express");
const {
  createScore,
  getUserScores,
} = require("../controllers/score.controller");

const router = express.Router();

router.route("/").post(createScore);

router.route("/:id").get(getUserScores);

module.exports = router;
