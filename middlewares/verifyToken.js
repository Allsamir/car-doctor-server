const jwt = require("jsonwebtoken");

const verifyToken = async (req, res, next) => {
  const accessToken = req.cookies?.accessToken;
  if (!accessToken) {
    return res.status(401).send({ message: "Unauthorized" });
  }
  // verify a token symmetric
  jwt.verify(
    accessToken,
    process.env.ACCESS_TOKEN_SECRET,
    function (err, decoded) {
      if (err) {
        return res.status(401).send({ message: "Unauthorized" });
      }
      req.user = decoded;
      next();
    },
  );
};

module.exports = verifyToken;
