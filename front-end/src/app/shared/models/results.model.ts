import { User } from "./user.model";
import { Exam } from "./exam.model";

export interface Result {
  
  examId?: Exam;
  // userId: User;
  answers: { questionId: string; answer: string | string[] }[];
  score: number;
  createdAt?: string;
  updatedAt?: string;
}

