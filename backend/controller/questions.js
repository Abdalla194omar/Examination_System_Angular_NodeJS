<<<<<<< HEAD
=======

>>>>>>> 0a7a7322cda4d7659743b828b581daeebe7abcfc
const mongoose = require('mongoose');
const examsModel = require('../Models/exams');
const questionsModel = require('../Models/questions');
const usersModel = require('../Models/users');
<<<<<<< HEAD
const { catchAsync } = require('../utlis/catchAsync');
const AppError = require('../utlis/AppError');

exports.getQuestions = catchAsync(async (req, res, next) => {
  const { examId } = req.params;
  if (!mongoose.Types.ObjectId.isValid(examId)) {
    return next(new AppError(400, 'Invalid exam ID format'));
  }
  let exam = await examsModel.findById(examId);
  if (!exam) {
    return next(new AppError(404, 'Exam is not found'));
  }
  let questions = await questionsModel.find({ examId }).populate('examId').populate('userId');
  res.status(200).json({ message: 'Success fetching questions', data: questions });
});

exports.save = catchAsync(async (req, res, next) => {
const { examId } = req.params;
  const { questionDesc, choices, answer, score } = req.body;

  if (!mongoose.Types.ObjectId.isValid(examId)) {
    return next(new AppError(400, 'Invalid exam ID'));
  }

  const exam = await examsModel.findById(examId);
  if (!exam) {
    return next(new AppError(404, 'Exam not found'));
  }

  if (!questionDesc || !choices || !answer || !score) {
    return next(new AppError(400, 'Question description, choices, answer, and score are required'));
  }

  if (!Array.isArray(choices) || choices.length < 2) {
    return next(new AppError(400, 'At least two choices are required'));
  }

  // Validate answer: must be an array with exactly one element
//   if (!Array.isArray(answer) || answer.length !== 1) {
//     return next(new AppError(400, 'Answer must be an array with exactly one element'));
//   }

  const question = new questionsModel({
    examId,
    questionDesc,
    choices,
    answer, // Already an array with one element
    score,
  });

  await question.save();
  res.status(201).json({ message: 'Question created successfully', data: question });
});

exports.update = catchAsync(async (req, res, next) => {
  const { examId, id } = req.params;
  const { questionDesc, choices, answer, score } = req.body;

  console.log('Request params:', { examId, id });
  console.log('Request body:', req.body);

  if (!mongoose.Types.ObjectId.isValid(examId)) {
    return next(new AppError(400, 'Invalid exam ID'));
  }
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return next(new AppError(400, 'Invalid question ID'));
  }

  const exam = await examsModel.findById(examId);
  if (!exam) {
    return next(new AppError(404, 'Exam not found'));
  }

  const question = await questionsModel.findById(id);
  if (!question) {
    return next(new AppError(404, 'Question not found'));
  }

  if (questionDesc) question.questionDesc = questionDesc;
  if (choices) {
    if (!Array.isArray(choices) || choices.length < 2) {
      return next(new AppError(400, 'At least two choices are required'));
    }
    question.choices = choices;
  }
  if (answer) {
    if (typeof answer !== 'string') {
      return next(new AppError(400, 'Answer must be a string'));
    }
    question.answer = answer;
  }
  if (score !== undefined) question.score = score;

  await question.save();
  res.status(200).json({ message: 'Question updated successfully', data: question });
});

exports.deleteQuestion = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid({id})) {
    return next(new AppError(400, 'Invalid question ID'));
  }

  const question = await questionsModel.findByIdAndDelete(id);
  if (!question) {
    return next(new AppError(404, 'Question not found'));
  }

  res.status(200).json({ message: 'Question deleted successfully' });
});












// const mongoose = require('mongoose');
// const examsModel = require('../Models/exams');
// const questionsModel = require('../Models/questions');
// const usersModel = require('../Models/users');
// const {catchAsync} = require('../utlis/catchAsync');
// const AppError = require('../utlis/AppError');


// //Get /admin/exams/examId/questions
// exports.getQuestions = catchAsync(async (req,res,next)=>{
//     const{examId} = req.params;
//     if (!mongoose.Types.ObjectId.isValid(examId)) {
//         return next(new AppError(400, 'Invalid exam ID format'));
//     }
//     let exam = await examsModel.findById(examId);
//     if(!exam){
//         return next(new AppError(404, 'Exam is not found'));
//     }
//     let questions = await questionsModel.find({ examId }).populate('examId').populate('userId');
//     res.status(200).json({ message: 'Success fetching questions', data: questions });

// })

// exports.aya = catchAsync(async (req,res,next)=>{
//     res.status(200).json({ message: 'Success fetching questions'});
// })


// // POST /admin/exams/examId/question
// exports.save = catchAsync(async (req, res, next) => {
//     const {examId} = req.params;
//     const {questionDesc,choices, answer,score} = req.body;
//     // const userId = req.id; 

//     // Check if user exists
//     // const userExists = await usersModel.findById(userId);
//     if (!userExists) {
//         return next(new AppError(404, 'User not found'));
//     }
//     // Validate examId
//     if (!mongoose.Types.ObjectId.isValid(examId)) {
//         return next(new AppError(400, 'Invalid Exam ID format'));
//     }
//     // let exam = await examsModel.findById(examId);
//     // if (!exam) {
//     //     return next(new AppError(404, 'This is exam not found'));
//     // }

//     let question = await questionsModel.create({examId,questionDesc:questionDesc.trim(),choices, answer,score });
//     res.status(201).json({ message: 'Success create question', data: question });
// });

// // DELETE /admin/exams/examId/question/:id
// exports.deleteQuestion = catchAsync(async (req, res, next) => {
//     const { examId,id } = req.params;

//     if (!mongoose.Types.ObjectId.isValid(id)) {
//         return next(new AppError(400, 'Invalid question ID format'));
//     }
//     if (!mongoose.Types.ObjectId.isValid(examId)) {
//         return next(new AppError(400, 'Invalid exam ID format'));
//     }

//     let question = await questionsModel.findByIdAndDelete({ _id: id, examId },);
//     if (!question) {
//         return next(new AppError(404, 'This is id of question not found'));
//     }
//     res.status(200).json({ message: 'Success delete question', data: null });
// });

// // UPDATE /admin/exams/examId/question/:id
// exports.update = catchAsync(async (req, res, next) => {
//     const { examId,id } = req.params;
//     const {  questionDesc,choices, answer,score } = req.body;

//     if (!mongoose.Types.ObjectId.isValid(id)) {
//         return next(new AppError(400, 'Invalid question ID format'));
//     }
//     if (!mongoose.Types.ObjectId.isValid(examId)) {
//         return next(new AppError(400, 'Invalid exam ID format'));
//     }

//     let question = await questionsModel.findByIdAndUpdate({ _id: id, examId }, { examId,questionDesc:questionDesc.trim(),choices,answer,score }, { new: true });
//     if (!question) {
//         return next(new AppError(404, 'This is id not found'));
//     }
    
//     res.status(200).json({ message: 'Success update question', data: question });
// });
=======
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
>>>>>>> 0a7a7322cda4d7659743b828b581daeebe7abcfc
