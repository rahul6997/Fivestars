const jwt = require("jsonwebtoken");
require("dotenv").config();

const authverify = (req, res, next) => {
  const auth_header = req.headers["authorization"];
  if (!auth_header) return res.status(401).json({
    message: 'Authorization failed'
  });
  const token = auth_header.split(" ")[1];
  jwt.verify(token, process.env.JWT_ACCESS_KEY, (err, decoded) => {
    if (err) return res.status(403);  //invalid token
    req.userData = decoded;
    next();
  });
};


module.exports = authverify;
