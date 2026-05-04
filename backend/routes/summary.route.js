const express = require("express");
const { getUserStats } = require("../controllers/summary.controller");
const authMiddleware = require("../middleware/authMiddleware");
const allowRoles = require("../middleware/allowRoles");

const router = express.Router();

router.use(authMiddleware, allowRoles("user"));
router.route("/:id").get(getUserStats);

module.exports = router;
