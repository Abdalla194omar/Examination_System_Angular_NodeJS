const express = require('express');
const router = express.Router();
const { auth,restrictTo } = require('../middleware/auth');
const { validation } = require('../middleware/validation');
<<<<<<< HEAD
const { getQuestions, save, update, deleteQuestion} = require('../controller/questions');
=======
const { getQuestions, save, update, deleteQuestion ,aya} = require('../controller/questions');
>>>>>>> 0a7a7322cda4d7659743b828b581daeebe7abcfc
const { createQuestionSchema, updateQuestionSchema } = require('../validation/questions.validation');


// GET / - Fetch all questions
<<<<<<< HEAD
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
=======
router.get('/:examId/questions',auth,restrictTo('admin'),getQuestions);
router.get('/quest',auth,restrictTo('admin'),aya);


// POST /admin/exams/:examId/question
router.post('/:examId/question',auth,restrictTo('admin'),validation(createQuestionSchema),save);

// PATCH  admin/exams/:examId/question/:id - Update a question 
router.patch('/:examId/question/:id',auth,restrictTo('admin'),validation(updateQuestionSchema),update);

// DELETE admin/exams/:examId/question/:id - Delete a question
router.delete('/:examId/question/:id',auth,restrictTo('admin'),deleteQuestion);
>>>>>>> 0a7a7322cda4d7659743b828b581daeebe7abcfc


// // GET / - Fetch all questions
// router.get('/exams/:examId/questions',getQuestions);

// // POST /admin/exams/:examId/question
// router.post('/admin/exams/:examId/question', save);

// // PATCH  admin/exams/:examId/question/:id - Update a question 
// router.patch('/admin/exams/:examId/question/:id', update);

// // DELETE admin/exams/:examId/question/:id - Delete a question
// router.delete('/admin/exams/:examId/question/:id', deleteQuestion);
module.exports = router;