const jwt = require("jsonwebtoken");
const client = require("../config/redis");

const authMiddleware = async function (req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader)
    return res
      .status(401)
      .json({ status: "fail", message: "Access prohibited" });

  const token = authHeader.split(" ")[1];

  try {
    const decode = jwt.verify(token, process.env.JWT_SECRET);
    // Check blacklist
    const isBlacklisted = await client.get(`blacklist:${token}`);
    if (isBlacklisted)
      return res.status(401).json({ message: "Token invalidated" });

    req.user = decode;
    next();
  } catch (err) {
    if (err.name === "TokenExpiredError") {
      return res.status(401).json({ message: "Token expired" });
    }
    res.status(401).json({ status: "fail", message: "access prohibited" });
  }
};

module.exports = authMiddleware;
