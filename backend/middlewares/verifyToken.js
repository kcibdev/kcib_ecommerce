const jwt = require("jsonwebtoken");
const Customer = require("../models/customer.model");
const asyncHandler = require("express-async-handler");

const authorizedUser = asyncHandler(async (req, res, next) => {
  let token;
  const headerAuth = req.headers.authorization;
  if (headerAuth && headerAuth.startsWith("Bearer")) {
    
    token = headerAuth.split(" ")[1];
    const decodeToken = jwt.verify(token, process.env.JWT_SECRET);
    
    if(req.user && req.user._id === decodeToken) {
      next();
    } else {
      req.user = await Customer.findById(decodeToken.id).select("-password");
      next();
    }

  } else {
    res.status(401);
    throw new Error("Not authorized");
  }

  if (!token) {
    res.status(401);
    throw new Error("Not authorized, Token not found");
  }
});

module.exports = {
  authorizedUser,
};
