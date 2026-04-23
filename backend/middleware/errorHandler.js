module.exports = function (err, req, res, next) {
  // validation error handling
  if (err.name === "ValidationError") {
    const errorMessages = Object.values(err.errors).map((el) => el.message);
    return res.status(400).json({ status: "fail", message: errorMessages });
  }

  console.log(err.message);

  // fallback
  res
    .status(400)
    .json({ status: "fail", message: "internal server error", err });
};
