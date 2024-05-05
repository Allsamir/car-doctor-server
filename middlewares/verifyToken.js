const jwt = require("jsonwebtoken");

const verifyToken = async (req, res, next) => {
  const accessToken = req.cookies?.accessToken;
  console.log("Token value", accessToken);
  if (!accessToken) {
    return res.status(401).send({ message: "Unauthorized" });
  }
  next();
};

module.exports = verifyToken;
