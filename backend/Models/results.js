<<<<<<< HEAD
=======

>>>>>>> 0a7a7322cda4d7659743b828b581daeebe7abcfc
const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const resultsSchema = new Schema({
<<<<<<< HEAD
  userId: { type: Schema.Types.ObjectId, required: false, ref: 'User' },
  examId: { type: Schema.Types.ObjectId, required: false, ref: 'Exam' },
  answers: {
    type: [{
      questionId: { type: Schema.Types.ObjectId, required: true, ref: 'Question' },
      userAnswer: { type: String, default: '' }
    }]
  },
  score: { type: Number, required: true },
  submittedAt: { type: Date, default: Date.now }
}, {
  timestamps: true,
});

const resultsModel = model('Results', resultsSchema);
module.exports = resultsModel;
// const mongoose = require('mongoose');
// const { Schema, model } = mongoose;

// const resultsSchema = new Schema({
//     userId:{type:Schema.Types.ObjectId,requird:false,ref:'User'},
//     examId:{type:Schema.Types.ObjectId,requird:false,ref:'Exam'},
//     answers:{type:[{
//         questionId:{type:Schema.Types.ObjectId,requird:true,ref:'Question'},
//         userAnswer:{type:String,default:''}
//     }
//     ]},
//     score:{type:Number,required:true},
//     submittedAt: { type: Date, default: Date.now }
// },{
//     timestamps: true, 
// });

// const resultsModel = model('Results', resultsSchema);
// module.exports = resultsModel;
=======
    userId:{type:Schema.Types.ObjectId,requird:true,ref:'User'},
    examId:{type:Schema.Types.ObjectId,requird:true,ref:'Exam'},
    answers:{type:[{
        questionId:{type:Schema.Types.ObjectId,requird:true,ref:'Question'},
        userAnswer:{type:String,default:''}
    }
    ]},
    score:{type:Number,required:true},
    submittedAt: { type: Date, default: Date.now }
},{
    timestamps: true, 
});

const resultsModel = model('Results', resultsSchema);
module.exports = resultsModel;
>>>>>>> 0a7a7322cda4d7659743b828b581daeebe7abcfc
