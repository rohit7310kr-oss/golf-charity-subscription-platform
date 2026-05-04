const express = require("express");
const {
  createUser,
  updateUser,
  loginUser,
} = require("../controllers/auth.controller");
const authMiddleware = require("../middleware/authMiddleware");
const allowRoles = require("../middleware/allowRoles");

const router = express.Router();

router.route("/register").post(createUser);

router.route("/login").post(loginUser);

router.use(authMiddleware, allowRoles("user"));

router.route("/:id").patch(updateUser);

module.exports = router;
