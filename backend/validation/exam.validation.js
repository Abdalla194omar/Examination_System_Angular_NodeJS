const Joi = require("joi");

exports.createExamSchema = Joi.object({
  title: Joi.string().trim().required().min(1).messages({
    "any.required": "Title is required",
    "string.empty": "Title cannot be empty",
  }),

  description: Joi.string().allow("").optional(),

  duration: Joi.number().integer().min(1).required().messages({
    "any.required": "Duration is required",
    "number.base": "Duration must be a number in minutes",
    "number.min": "Duration must be at least 1 minute",
  }),
});
