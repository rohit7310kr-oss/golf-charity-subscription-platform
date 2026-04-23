const express = require("express");
const {
  getAllUser,
  createUser,
  updateUser,
  getUser,
} = require("../controllers/user.controller");

const router = express.Router();

router.route("/").get(getAllUser).post(createUser);

router.route("/:id").get(getUser).patch(updateUser);

module.exports = router;
