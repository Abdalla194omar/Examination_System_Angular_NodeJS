
const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const examSchema = new Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    createdBy:{type:Schema.Types.ObjectId,requird:true,ref:'User'}
},{
    timestamps: true, 
});

const examModel = model('Exam', examSchema);
module.exports = examModel;