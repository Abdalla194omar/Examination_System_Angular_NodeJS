// controller/todos.js
const mongoose = require('mongoose');
const resultsModel = require('../Models/results');
const usersModel = require('../Models/users');
// const examsModel = require('../Models/exams');
const {catchAsync} = require('../utlis/catchAsync');
const AppError = require('../utlis/AppError');
// const questionsModel = require('../Models/questions');


// get  admin/allResults ->admin
exports.getAllResults=catchAsync(async (req,res,next)=>{
    const userId = req.id
    if (!mongoose.Types.ObjectId.isValid(userId)) {
            return next(new AppError(400, 'Invalid User ID format'));
    }
    const userExists = await usersModel.findById(userId);
    if (!userExists) {
        return next(new AppError(404, 'User not found'));
    }
    if (userExists.role !== 'admin') {
        return next(new AppError(403, 'Only admins can view all results'));
      }
    const results = await resultsModel.find().populate('examId');
    res.status(200).json({ message: 'Success get all results', data: results });
});
// get  allresults/:userId ->user
exports.getUserResults = catchAsync(async (req, res, next) => {
    const userId = req.id;
  
    if (!mongoose.Types.ObjectId.isValid(userId)) {
      return next(new AppError(400, 'Invalid User ID format'));
    }
  
    const userExists = await usersModel.findById(userId);
    if (!userExists) {
      return next(new AppError(404, 'User not found'));
    }
  
    if (userExists.role !== 'student') {
      return next(new AppError(403, 'Only students can view their own results'));
    }
  
    if (userId !== userExists._id.toString()) {
      return next(new AppError(403, 'Unauthorized to view these results'));
    }
    
    const results = await resultsModel
      .find({ userId:userId })
      .populate('userId','examId')
      .populate('answers.questionId')
      .sort({ submittedAt: -1 });
      console.log(results)
    // Filter out results where the examId reference is null
    const filteredResults = results
      .filter(result => result.examId)
      .map(result => {
        // Add feedback for each answer
        const answersWithFeedback = result.answers.map(answer => ({
          questionId: answer.questionId._id,
          questionDesc: answer.questionId.questionDesc,
          studentAnswer: answer.answer,
          correctAnswer: answer.questionId.answer,
          isCorrect: answer.answer === answer.questionId.answer
        }));
  
        return {
          ...result.toObject(),
          answers: answersWithFeedback
        };
      });
  
    res.status(200).json({ message: 'Success get user his results', data: filteredResults });
  });