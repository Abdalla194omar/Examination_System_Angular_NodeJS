const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const multer  = require('multer');
const cors = require('cors');
const questionRoutes = require('./routes/questions');
const resultRoutes = require('./routes/results');
const AppError = require('./utils/AppError');

const PORT = process.env.PORT || 3000;

dotenv.config();

app.use(cors({ origin: 'http://localhost:4200' }));

// Middleware
app.use(express.json());


// Routes

app.use('/api/question', questionRoutes);
app.use('/api/result', resultRoutes);



// Custom 404 Middleware 
app.use((req, res, next) => {
  next(new AppError(404,'Route not found'))
  res.status(404).json({ status: "fail", message: "Route not found" });
});



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