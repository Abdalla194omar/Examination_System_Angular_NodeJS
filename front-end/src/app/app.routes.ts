import { AddQuestionsComponent } from './features/admin/add-questions/add-questions.component';
import { Routes } from '@angular/router';
import { TakeExamComponent } from './features/student/take-exam/take-exam.component';
import { ResultsComponent } from './features/student/results/results.component';
<<<<<<< HEAD
import { ResultListComponent } from './features/student/result-list/result-list.component';
import { ExamsComponent } from './features/exams/exams.component';
import { EditQuestionComponent } from './features/admin/edit-question/edit-question.component';
export const routes: Routes = [
  
    { path: '', component: ExamsComponent },
    { path: 'exams', component: ExamsComponent },
    { path: 'results', component: ResultsComponent },
    { path: 'result-list', component: ResultListComponent },
    { path: 'exams/:examId/question', component: AddQuestionsComponent },
    { path: 'exams/:examId/allquestions', component: TakeExamComponent },
    { path: 'exams/:examId/question/:id', component: EditQuestionComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' },
=======
export const routes: Routes = [
  { path: 'exams/:examId/question', component: AddQuestionsComponent },
  { path: 'exams/:examId/allquestions', component: TakeExamComponent },
  { path: 'results', component: ResultsComponent },
>>>>>>> 0a7a7322cda4d7659743b828b581daeebe7abcfc

];
