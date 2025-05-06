// const express = require('express');
// const router = express.Router();
// const { auth,restrictTo } = require('../middleware/auth');
// // const { validation } = require('../middleware/validation');
// const {save,getAllExams,submit} = require('../controller/exams');
// // const { createQuestionSchema, updateQuestionSchema } = require('../validation/questions.validation');

// router.get('/exams/all',getAllExams);
// // router.get('/exams/all',auth,restrictTo('admin'),getAllExams);
// router.post('/addexam',auth,restrictTo('admin'),save);
// router.post('/:id/submit',auth,restrictTo('student'),submit);
// module.exports = router;

const express = require('express');
const router = express.Router();
const { auth, restrictTo } = require('../middleware/auth');
const { validation } = require('../middleware/validation');
const { save, getAllExams, submit } = require('../controller/exams');
const { answerSubmitSchema } = require('../validation/results.validation');

router.get('/exams/all', getAllExams);
router.post('/addexam', auth, restrictTo('admin'), save);
// router.post('/exams/:id/submit', auth, restrictTo('student'), validation(answerSubmitSchema), submit);
router.post('/exams/:id/submit',submit);
module.exports = router;