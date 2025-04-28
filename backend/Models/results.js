
const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const resultsSchema = new Schema({
    userId:{type:Schema.Types.ObjectId,requird:true,ref:'User'},
    examId:{type:Schema.Types.ObjectId,requird:true,ref:'Exam'},
    answers:{type:[{
        questionId:{type:Schema.Types.ObjectId,requird:true,ref:'Question'},
        userAnswer:{type:String,default:''}
    }
    ]},
    score:{type:Number,required:true}
},{
    timestamps: true, 
});

const resultsModel = model('Results', resultsSchema);
module.exports = resultsModel;