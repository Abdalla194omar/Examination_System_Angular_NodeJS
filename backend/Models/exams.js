
const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const examSchema = new Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    createdBy:{type:Schema.Types.ObjectId,requird:false,ref:'User'},
    // deadline: { type: Date },
    createdAt: {
        type: Date,
        default: Date.now,
    },
},{
    timestamps: true, 
});

const examsModel = model('Exam', examSchema);
module.exports = examsModel;