<<<<<<< HEAD
exports.validation = (schema) => {
  return (req, res, next) => {
    const { error } = schema.validate(req.body);
    console.log(req.body);
    if (error) {
      return res.status(400).json({
        status: "fail",
        message: error.details[0].message,
      });
    }
    next();
  };
};
=======



exports.validation = (schema) => {
    return (req, res, next) => {
      console.log('Before validation - req.body:', req.body);
      let validData = schema.validate({ ...req.body }, { abortEarly: false, convert: true });
      if (validData.error) {
        return res.status(400).json({ error: validData.error.details });
      } else {
        // Ensure answer is always an array
        if (req.body.answer && !Array.isArray(req.body.answer)) {
          try {
            req.body.answer = JSON.parse(req.body.answer);
          } catch (e) {
            return next(new AppError(400, 'Invalid answer format, must be an array'));
          }
        }
        req.body = validData.value;
        console.log('After validation - req.body:', req.body);
        next();
      }
    };
  };


// exports.validation =(schema)=>{
//     return (req,res,next)=>{
//         let validData = schema.validate({...req.body},{abortEarly:false})
//         if (validData.error) {
//             return res.status(400).json({ error: validData.error.details });
//             } else {
//                 req.body = validData.value;
//                 // req.validatedBody = validData.value;
//                 next();
//             };
//     }
// }
// Validation schema for exam submission
// exports.submitExamValidation = Joi.object({
//     answers: Joi.array()
//       .items(
//         Joi.object({
//           questionId: Joi.string().required(),
//           answer: Joi.string().required()
//         })
//       )
//       .min(1)
//       .required()
// });

exports.validation =(schema)=>{
    return (req,res,next)=>{
        let validData = schema.validate({...req.body},{abortEarly:false})
        if (validData.error) {
            return res.status(400).json({ error: validData.error.details });
            } else {
                req.body = validData.value;
                // req.validatedBody = validData.value;
                next();
            };
    }
}

>>>>>>> ayaayman
