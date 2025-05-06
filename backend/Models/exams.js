
const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const examSchema = new Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
<<<<<<< HEAD
    createdBy:{type:Schema.Types.ObjectId,requird:false,ref:'User'},
=======
    createdBy:{type:Schema.Types.ObjectId,requird:true,ref:'User'},
>>>>>>> 0a7a7322cda4d7659743b828b581daeebe7abcfc
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