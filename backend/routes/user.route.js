const express = require("express");
const {
  getAllUser,
  createUser,
  updateUser,
  getUser,
} = require("../controllers/user.controller");
const authMiddleware = require("../middleware/authMiddleware");
const allowRoles = require("../middleware/allowRoles");

const router = express.Router();

router.use(authMiddleware, allowRoles("user"));
router.route("/").get(getAllUser);
router.route("/:id").get(getUser);

router.route("/:id").get(getUser).patch(updateUser);

module.exports = router;
