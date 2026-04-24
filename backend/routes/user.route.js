const express = require("express");
const {
  getAllUser,
  createUser,
  updateUser,
  getUser,
} = require("../controllers/user.controller");

const router = express.Router();

router.route("/").get(getAllUser);

router.route("/:id").get(getUser);

module.exports = router;
