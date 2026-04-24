const express = require("express");
const { getUserStats } = require("../controllers/summary.controller");

const router = express.Router();

router.route("/:id").get(getUserStats);

module.exports = router;
