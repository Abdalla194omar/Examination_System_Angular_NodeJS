import { User } from "./user.model";
import { Exam } from "./exam.model";
export interface Question{
<<<<<<< HEAD
  _id: string;
  // userId?:User,
  // examId: Exam;
  // userId?:string,
=======
  // id: string;
  // userId?:User,
  // examId: Exam;
  userId?:string,
>>>>>>> 0a7a7322cda4d7659743b828b581daeebe7abcfc
  examId: string;
  questionDesc: string;
  choices: string[];
  answer: string ;
  score:number,
  // isMultiple: boolean;
  createdAt?: string;
  updatedAt?: string;
}