const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const userRoutes = require("./routes/users");
const examRoutes = require("./routes/exams");
const app = express();
const PORT = process.env.PORT || 3000;

dotenv.config(); // Load environment variables

// Middleware
app.use(express.json()); // To parse incoming JSON requests
app.use(cors());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () =>
      console.log(`Server running on http://localhost:${PORT}`)
    );
  })
  .catch((error) => {
    console.log(error);
  });

// routes
app.use("/api/user", userRoutes);
app.use("/api/exam", examRoutes);

// not found page
app.use((req, res, next) => {
  next(new AppError(404, "route not found"));
});

//error handling
app.use((err, req, res, next) => {
  if (err.name === "CastError") {
    return res
      .status(400)
      .json({ status: "fail", message: err.message, stack: err.stack });
  } else if (err.name === "ValidationError") {
    return res
      .status(400)
      .json({ status: "fail", message: err.message, stack: err.stack });
  } else if (err.name === "JsonWebTokenError") {
    return res
      .status(401)
      .json({ status: "fail", message: err.message, stack: err.stack });
  } else if (err.name === "TokenExpiredError") {
    return res
      .status(401)
      .json({ status: "fail", message: err.message, stack: err.stack });
  }
  res.status(err.statusCode || 500).json({
    status: "failed",
    message: err.message,
    stack: err.stack || "try again later",
  });
});
