const mongoose = require('mongoose');
const examsModel = require('../Models/exams');
const questionsModel = require('../Models/questions');
const usersModel = require('../Models/users');
const resultsModel = require('../Models/results');
const { catchAsync } = require('../utils/catchAsync');
const AppError = require('../utils/AppError');


// POST /:id/submit
exports.submit = catchAsync(async (req, res, next) => {
  
  const { answers,examId } = req.body;
  const userId = req.id;
  
  console.log(examId)
  // Validate user
  const user = await usersModel.findById(userId);
  if (!user) {
    return next(new AppError(404, 'User not found'));
  }

  // Validate exam
  if (!mongoose.Types.ObjectId.isValid(examId)) {
    return next(new AppError(400, 'Invalid exam ID')); 
  }
  const exam = await examsModel.findById(examId);
  if (!exam) {
    return next(new AppError(404, 'Exam not found'));
  }
  if (exam.deadline && new Date() > exam.deadline) {
    return next(new AppError(400, 'Exam submission deadline has passed'));
  }

  // Fetch questions for exam
  const questions = await questionsModel.find({ examId });
  if (!questions.length) {
    return next(new AppError(404, 'No questions found for this exam!'));
  }

  // Validate answers
  if (!answers || !Array.isArray(answers)) {
    return next(new AppError(400, 'Answers must be an array'));
  }
  if (answers.length !== questions.length) {
    return next(new AppError(400, `Please answer all ${questions.length} questions. Only ${answers.length} answers provided.`));
  }
  // Prevent duplicate submissions
  const existingResult = await resultsModel.findOne({ examId, userId }); 
  if (existingResult) {
      return next(new AppError(400, 'You have already submitted this exam'));
  }
  // Calculate score
  let totalScore = 0;
  const questionScore = 10;
  const validAnswers = answers.map(answer => {
    const validQuestion = questions.find(
      question => question._id.toString() === answer.questionId
    );
    if (!validQuestion) {
      throw new AppError(400, `Question ID ${answer.questionId} not found in this exam`);
    }
    if (validQuestion.answer === answer.answer) {
      totalScore += questionScore; 
    }
    return { questionId: answer.questionId, answer: answer.answer };
  });

  // Save results
  const result = new resultsModel({
    examId,
    // userId,
    answers: validAnswers,
    score: totalScore
  });
  await result.save();

  res.status(201).json({ message: 'Exam submitted successfully!', result });
});















