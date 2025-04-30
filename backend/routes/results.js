const express = require('express');
const router = express.Router();
const { auth,restrictTo } = require('../middleware/auth');
const { validation } = require('../middleware/validation');
const {getAllResults,getUserResults} = require('../controller/results');

router.get('/admin/results',auth,restrictTo('admin'),getAllResults);
router.get('/student/results',auth,restrictTo('student'),getUserResults);

module.exports = router;