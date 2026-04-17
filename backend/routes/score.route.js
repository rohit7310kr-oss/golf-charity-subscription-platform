const express = require("express");
const {
  createScore,
  getAllScores,
} = require("../controllers/score.controller");

const router = express.Router();

router.route("/score").post(createScore).get(getAllScores);

module.exports = router;
