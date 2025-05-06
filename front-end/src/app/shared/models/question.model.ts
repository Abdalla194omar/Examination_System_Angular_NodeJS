// import { User } from "./user.model";
// import { Exam } from "./exam.model";
export interface Question{
  _id: string;
  // userId?:User,
  // examId: Exam;
  // userId?:string,
  examId: string;
  questionDesc: string;
  choices: string[];
  answer: string ;
  score:number,
  // isMultiple: boolean;
  createdAt?: string;
  updatedAt?: string;
}