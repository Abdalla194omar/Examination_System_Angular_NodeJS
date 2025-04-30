
const mongoose = require('mongoose');
const examsModel = require('../Models/exams');
const questionsModel = require('../Models/questions');
const usersModel = require('../Models/users');
const {catchAsync} = require('../utlis/catchAsync');
const AppError = require('../utlis/AppError');


//Get /admin/exams/examId/questions
exports.getQuestions = catchAsync(async (req,res,next)=>{
    const{examId} = req.params;
    if (!mongoose.Types.ObjectId.isValid(examId)) {
        return next(new AppError(400, 'Invalid exam ID format'));
    }
    let exam = await examsModel.findById(examId);
    if(!exam){
        return next(new AppError(404, 'Exam is not found'));
    }
    let questions = await questionsModel.find({ examId }).populate('examId').populate('userId');
    res.status(200).json({ message: 'Success fetching questions', data: questions });

})

exports.aya = catchAsync(async (req,res,next)=>{
    res.status(200).json({ message: 'Success fetching questions'});
})


// POST /admin/exams/examId/question
exports.save = catchAsync(async (req, res, next) => {
    const {examId} = req.params;
    const {questionDesc,choices, answer,score} = req.body;
    const userId = req.id; 

    // Check if user exists
    const userExists = await usersModel.findById(userId);
    if (!userExists) {
        return next(new AppError(404, 'User not found'));
    }
    // Validate examId
    if (!mongoose.Types.ObjectId.isValid(examId)) {
        return next(new AppError(400, 'Invalid Exam ID format'));
    }
    let exam = await examsModel.findById(examId);
    if (!exam) {
        return next(new AppError(404, 'This is exam not found'));
    }

    let question = await questionsModel.create({examId,userId,questionDesc:questionDesc.trim(),choices, answer,score });
    res.status(201).json({ message: 'Success create question', data: question });
});

// DELETE /admin/exams/examId/question/:id
exports.deleteQuestion = catchAsync(async (req, res, next) => {
    const { examId,id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return next(new AppError(400, 'Invalid question ID format'));
    }
    if (!mongoose.Types.ObjectId.isValid(examId)) {
        return next(new AppError(400, 'Invalid exam ID format'));
    }

    let question = await questionsModel.findByIdAndDelete({ _id: id, examId },);
    if (!question) {
        return next(new AppError(404, 'This is id of question not found'));
    }
    res.status(200).json({ message: 'Success delete question', data: null });
});

// UPDATE /admin/exams/examId/question/:id
exports.update = catchAsync(async (req, res, next) => {
    const { examId,id } = req.params;
    const {  questionDesc,choices, answer,score } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return next(new AppError(400, 'Invalid question ID format'));
    }
    if (!mongoose.Types.ObjectId.isValid(examId)) {
        return next(new AppError(400, 'Invalid exam ID format'));
    }

    let question = await questionsModel.findByIdAndUpdate({ _id: id, examId }, { examId,questionDesc:questionDesc.trim(),choices,answer,score }, { new: true });
    if (!question) {
        return next(new AppError(404, 'This is id not found'));
    }
    
    res.status(200).json({ message: 'Success update question', data: question });
});