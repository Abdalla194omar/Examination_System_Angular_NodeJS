const Exam = require("../models/exam");
const AppError = require("../utils/AppError");
const { catchAsync } = require("../utils/catchAsync");

exports.createExam = catchAsync(async (req, res, next) => {
  const { title, description, duration } = req.body;
  if (!title || !duration) {
    return next(new AppError(400, "Title and duration are required", "fail"));
  }
  const exam = await Exam.create({
    title,
    description,
    duration,
    createdBy: req.id,
  });
  if (!exam) {
    return next(new AppError(400, "Failed to create exam", "fail"));
  }
  res.status(201).json({
    status: "success",
    data: exam,
  });
});

exports.listAllExams = async (req, res, next) => {
  let exams = [];
  if (req.role === "admin") {
    exams = await Exam.find({ createdBy: req.id });
  } else {
    exams = await Exam.find();
  }
  if (!exams || exams.length === 0) {
    return next(new AppError(404, "No exams found", "fail"));
  }
  res.status(200).json({
    status: "success",
    data: exams,
  });
};

exports.updateExam = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const { title, description, duration } = req.body;
  if (!title || !duration) {
    return next(new AppError(400, "Title and duration are required", "fail"));
  }
  const exam = await Exam.findByIdAndUpdate(id, {
    title,
    description,
    duration,
  });
  if (!exam) {
    return next(new AppError(404, "Exam not found", "fail"));
  }
  res.status(200).json({
    status: "success",
    data: exam,
  });
});

exports.deleteExam = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const exam = await Exam.findByIdAndDelete(id);
  if (!exam) {
    return next(new AppError(404, "Exam not found", "fail"));
  }
  res.status(204).json({
    status: "success",
    data: null,
  });
});

exports.getExamById = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const exam = await Exam.findById(id);
  if (!exam) {
    return next(new AppError(404, "Exam not found", "fail"));
  }
  res.status(200).json({
    status: "success",
    data: exam,
  });
});
