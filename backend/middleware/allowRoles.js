module.exports = function (...roles) {
  return (req, res, next) => {
    console.log(req.user);
    if (!roles.includes(req.user.role))
      return res.status(401).json({ status: "fail", message: "forbiden" });

    next();
  };
};
