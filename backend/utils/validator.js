const { nanoid } = require("nanoid");

exports.publicIdValidator = {
  type: String,
  default: () => nanoid(8),
};
