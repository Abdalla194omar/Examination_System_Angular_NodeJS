import { User } from "./user.model";
import { Exam } from "./exam.model";

export interface Result {
  
<<<<<<< HEAD
  // examId?: Exam;
  // // userId: User;
  // _id:string,
  // answers: { questionId: string; answer: string | string[] }[];
  // score: number;
  // createdAt?: string;
  // updatedAt?: string;
  _id: string;
  userId:User;
  examId: {
    _id: string;
    title?: string; // Populated from Exam model
    // Add other fields as needed based on your Exam schema
  };
  answers: Answer[];
  score: number;
  submittedAt: string; // Date converted to ISO string by Angular
  createdAt?: string; // From timestamps
  updatedAt?: string; // From timestamps

}
export interface Answer {
  questionId: {
    _id: string;
    questionDesc: string; // Populated from Question model
    answer: string[]; // Populated correct answer from Question model
  };
  userAnswer: string;
=======
  examId?: Exam;
  // userId: User;
  answers: { questionId: string; answer: string | string[] }[];
  score: number;
  createdAt?: string;
  updatedAt?: string;
>>>>>>> 0a7a7322cda4d7659743b828b581daeebe7abcfc
}

