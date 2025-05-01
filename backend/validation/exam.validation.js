const Joi = require("joi");

exports.createExamSchema = Joi.object({
  title: Joi.string().trim().required().messages({
    "any.required": "Title is required",
    "string.empty": "Title cannot be empty",
  }),

  description: Joi.string().allow("").optional(),

  duration: Joi.number().integer().min(1).required().messages({
    "any.required": "Duration is required",
    "number.base": "Duration must be a number in minutes",
    "number.min": "Duration must be at least 1 minute",
  }),

  createdBy: Joi.string()
    .regex(/^[0-9a-fA-F]{24}$/)
    .required()
    .messages({
      "any.required": "CreatedBy is required",
      "string.pattern.base": "CreatedBy must be a valid MongoDB ObjectId",
    }),
});
