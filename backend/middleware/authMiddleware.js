const jwt = require("jsonwebtoken");

const authMiddleware = function (req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader)
    return res
      .status(401)
      .json({ status: "fail", message: "Access prohibited" });

  const token = authHeader.split(" ")[1];

  try {
    const decode = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decode;
    next();
  } catch (err) {
    res.status(401).json({ status: "fail", message: "access prohibited" });
  }
};

module.exports = authMiddleware;
