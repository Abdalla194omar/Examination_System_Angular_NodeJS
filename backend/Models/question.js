
const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const questionSchema = new Schema({
    examId: {type:Schema.Types.ObjectId,required:true,ref:'Exam'},
    description: {type: String, required: true},
    choices: {type: [String], required: true},
    answer: {type: String, required: true},
    points: {type: Number, required: true}
},{
    timestamps: true, 
});

const questionModel = model('Question', questionSchema);
module.exports = questionModel;