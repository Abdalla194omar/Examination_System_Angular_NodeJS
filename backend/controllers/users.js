const User = require("../models/user");
const AppError = require("../utils/AppError");
const bcryptjs = require("bcryptjs");
const { catchAsync } = require("../utils/catchAsync");
const jwt = require("jsonwebtoken");

exports.register = catchAsync(async (req, res, next) => {
  let user = await User.create(req.body);
  if (!user) {
    return next(new AppError("Failed to create user", 400));
  }

  res.status(201).json({
    status: "success",
    data: user,
  });
});

exports.login = catchAsync(async (req, res, next) => {
  let { email, password } = req.body;
  if (!email || !password) {
    return next(
      new AppError(400, "you must provide email and password for login", "fail")
    );
  }
  let user = await User.findOne({ email });
  if (!user) {
    return next(new AppError(401, "invalid email or password", "fail"));
  }
  let isValid = await bcryptjs.compare(password, user.password);
  if (!isValid) {
    return next(new AppError(401, "invalid email or password", "fail"));
  }
  let token = jwt.sign(
    { id: user._id, email: user.email, role: user.role },
    process.env.JWT_SECRET
  );
  res.status(200).json({ status: "success", data: token });
});
