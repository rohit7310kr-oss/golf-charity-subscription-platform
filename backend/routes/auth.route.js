const express = require("express");
const {
  createUser,
  updateUser,
  loginUser,
} = require("../controllers/auth.controller");

const router = express.Router();

router.route("/register").post(createUser);

router.route("/login").post(loginUser);

router.route("/:id").patch(updateUser);

module.exports = router;
