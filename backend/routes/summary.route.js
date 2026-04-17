const express = require("express");
const { getStats } = require("../controllers/summary.controller");

const router = express.Router();

router.route("/").get(getStats);

module.exports = router;
