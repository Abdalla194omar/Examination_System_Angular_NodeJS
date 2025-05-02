const jwt = require("jsonwebtoken");
const AppError = require("../utils/AppError");
const { catchAsync } = require("../utils/catchAsync");

exports.auth = catchAsync((req, res, next) => {
  let { authorization } = req.headers;
  if (!authorization) {
    return next(new AppError(401, "please login first", "fail"));
  }

  let decoded = jwt.verify(authorization, process.env.JWT_SECRET);
  req.id = decoded.id;
  req.role = decoded.role;
  next();
});

exports.restrictTo = (...roles) => {
  return catchAsync(async (req, res, next) => {
    if (!roles.includes(req.role)) {
      return next(
        new AppError(403, "No permission to perform this action", "fail")
      );
    }
    next();
  });
};
