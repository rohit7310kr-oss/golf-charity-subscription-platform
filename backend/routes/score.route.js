const express = require("express");
const { createScore } = require("../controllers/score.controller");

const router = express.Router();

router.route("/score").post(createScore);

module.exports = router;
