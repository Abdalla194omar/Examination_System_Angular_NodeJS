const express = require('express');
const router = express.Router();
const { auth,restrictTo } = require('../middleware/auth');
const { validation } = require('../middleware/validation');
const {getAllResults,getUserResults} = require('../controller/results');

<<<<<<< HEAD
// router.get('/admin/results',auth,restrictTo('admin'),getAllResults);
router.get('/admin/results',getAllResults);
router.get('/student/results',getUserResults);
// router.get('/student/results',auth,restrictTo('student'),getUserResults);
=======
router.get('/admin/results',auth,restrictTo('admin'),getAllResults);
router.get('/student/results',auth,restrictTo('student'),getUserResults);
>>>>>>> 0a7a7322cda4d7659743b828b581daeebe7abcfc

module.exports = router;