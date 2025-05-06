const express = require('express');
const router = express.Router();
const { auth,restrictTo } = require('../middleware/auth');
const { validation } = require('../middleware/validation');
const { getQuestions, save, update, deleteQuestion} = require('../controller/questions');
const { createQuestionSchema, updateQuestionSchema } = require('../validation/questions.validation');


// GET / - Fetch all questions
// router.get('/exams/:examId/allquestions',auth,restrictTo('admin'),getQuestions);
router.get('/exams/:examId/allquestions',getQuestions);
// POST /admin/exams/:examId/question
// router.post('/exams/:examId/question',auth,restrictTo('admin'),validation(createQuestionSchema),save);
router.post('/exams/:examId/question',save);

// PATCH  admin/exams/:examId/question/:id - Update a question 
// router.patch('/exams/:examId/question/:id',auth,restrictTo('admin'),validation(updateQuestionSchema),update);
router.patch('/exams/:examId/question/:id',validation(updateQuestionSchema),update);

// DELETE admin/exams/:examId/question/:id - Delete a question
router.delete('/exams/:examId/question/:id',deleteQuestion);
// router.delete('/exams/:examId/question/:id',auth,restrictTo('admin'),deleteQuestion);


// // GET / - Fetch all questions
// router.get('/exams/:examId/questions',getQuestions);

// // POST /admin/exams/:examId/question
// router.post('/admin/exams/:examId/question', save);

// // PATCH  admin/exams/:examId/question/:id - Update a question 
// router.patch('/admin/exams/:examId/question/:id', update);

// // DELETE admin/exams/:examId/question/:id - Delete a question
// router.delete('/admin/exams/:examId/question/:id', deleteQuestion);
module.exports = router;