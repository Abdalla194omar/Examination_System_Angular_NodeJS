
const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const questionSchema = new Schema({
    userId: {type:Schema.Types.ObjectId,required:true,ref:'User'},
    examId: {type:Schema.Types.ObjectId,required:true,ref:'Exam'},
    questionDesc: {type: String, required: true},
    choices: {type: [String], required: true},
    answer: {type: String, required: true},
    score: {type: Number, required: true}
},{
    timestamps: true, 
});

const questionsModel = model('Question', questionSchema);
module.exports = questionsModel;