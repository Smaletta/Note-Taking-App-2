const jwt = require("jsonwebtoken");

const isAuthenticated = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    const error = new Error("Unauthorized: No token provided");
    error.statuscode = 401;
    return next(error);
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    error.message = "Invalid token";
    error.statuscode = 403;
    return next(error);
  }
};

module.exports = { isAuthenticated };