
const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const questionSchema = new Schema({
<<<<<<< HEAD
    userId: {type:Schema.Types.ObjectId,required:false,ref:'User'},
    examId: {type:Schema.Types.ObjectId,required:false,ref:'Exam'},
    questionDesc: {type: String, required: true, unique:true},
    choices: {type: [String], required: true},
    answer: {type: String, required: true},
    score: {type: Number, required: true},
    // isMultiple:{ type: Boolean, required: true, default: false }
=======
    userId: {type:Schema.Types.ObjectId,required:true,ref:'User'},
    examId: {type:Schema.Types.ObjectId,required:true,ref:'Exam'},
    questionDesc: {type: String, required: true},
    choices: {type: [String], required: true},
    answer: {type: String, required: true},
    score: {type: Number, required: true}
>>>>>>> 0a7a7322cda4d7659743b828b581daeebe7abcfc
},{
    timestamps: true, 
});

const questionsModel = model('Question', questionSchema);
module.exports = questionsModel;