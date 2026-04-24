module.exports = function (err, req, res, next) {
  console.log(err);
  // validation error handling
  if (err.name === "ValidationError") {
    const errorMessages = Object.values(err.errors).map((el) => el.message);
    return res.status(400).json({ status: "fail", message: errorMessages });
  }

  if (err.code === 11000)
    return res.status(400).json({
      status: "fail",
      message: `User with credentials ${Object.keys(err.keyValue).map((el) => {
        return `${el}: ${err.keyValue[el]}`;
      })} already exist`,
    });

  // fallback
  res
    .status(400)
    .json({ status: "fail", message: "internal server error", err });
};
