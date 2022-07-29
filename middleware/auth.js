const jwt = require("jsonwebtoken");
const dotenv = require('dotenv');
dotenv.config();

const config = process.env;

const verifyToken = (req, res, next) => {
  const token = req.body.token || req.query.token || req.headers["x-access-token"];

  if (!token) {
    return res.status(403).send("A token is required for authentication");
  }
  try {
    const decoded = jwt.verify(token, config.TOKEN_KEY);
    // console.log(decoded);
    req.user = decoded;
  } catch (err) {
    return res.status(401).send("Invalid Token");
  }
  return next();
};

function parseJwt(token) {
  var base64Url = token.split('.')[1];
  var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  return JSON.parse((atob(base64)))
};

module.exports = verifyToken;