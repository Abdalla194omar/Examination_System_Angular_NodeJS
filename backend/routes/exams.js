const express = require("express");
const {
  createExam,
  listAllExams,
  updateExam,
  deleteExam,
  getExamById,
} = require("../controllers/exams");
const { restrictTo, auth } = require("../middleware/auth");
const {
  createExamSchema,
  updateExamSchema,
} = require("../validation/exam.validation");
const { validation } = require("../middleware/validation");
const router = express.Router();

router.post(
  "/createexam",
  auth,
  restrictTo("admin"),
  validation(createExamSchema),
  createExam
);
router.get("/", auth, listAllExams);
router.get("/getexam/:id", auth, restrictTo("admin"), getExamById);
router.patch(
  "/updateexam/:id",
  auth,
  restrictTo("admin"),
  validation(updateExamSchema),
  updateExam
);
router.delete("/deleteexam/:id", auth, restrictTo("admin"), deleteExam);

module.exports = router;
