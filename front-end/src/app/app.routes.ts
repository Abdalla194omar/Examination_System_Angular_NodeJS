import { AddQuestionsComponent } from './features/admin/add-questions/add-questions.component';
import { Routes } from '@angular/router';
import { TakeExamComponent } from './features/student/take-exam/take-exam.component';
import { ResultsComponent } from './features/student/results/results.component';
export const routes: Routes = [
  { path: 'exams/:examId/question', component: AddQuestionsComponent },
  { path: 'exams/:examId/allquestions', component: TakeExamComponent },
  { path: 'results', component: ResultsComponent },

];
