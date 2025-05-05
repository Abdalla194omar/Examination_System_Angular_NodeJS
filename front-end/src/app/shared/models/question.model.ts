import { User } from "./user.model";
import { Exam } from "./exam.model";
export interface Question{
  id: string;
  userId?:User,
  examId: Exam;
  questionDesc: string;
  choices: string[];
  answer: string[];
  isMultiple: boolean;
  createdAt?: string;
  updatedAt?: string;
}