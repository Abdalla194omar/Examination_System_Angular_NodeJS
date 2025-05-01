const express = require("express");
const {
  createExam,
  listAllExams,
  updateExam,
  deleteExam,
  getExamById,
} = require("../controllers/exams");
const { restrictTo, auth } = require("../middleware/auth");
const router = express.Router();

router.post("/createexam", auth, restrictTo("admin"), createExam);
router.get("/", auth, listAllExams);
router.get("/getexam/:id", auth, restrictTo("admin"), getExamById);
router.patch("/updateexam/:id", auth, restrictTo("admin"), updateExam);
router.delete("/deleteexam/:id", auth, restrictTo("admin"), deleteExam);

module.exports = router;
