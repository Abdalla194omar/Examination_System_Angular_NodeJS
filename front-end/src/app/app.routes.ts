// import { AddQuestionsComponent } from './features/admin/add-questions/add-questions.component';
import { Routes } from '@angular/router';
import { AddExamComponent } from './features/admin/add-exam/add-exam.component';
import { TakeExamComponent } from './features/student/take-exam/take-exam.component';
export const routes: Routes = [
  // {path:'add-exam',component:AddExamComponent}
  { path: 'add-exam', component: AddExamComponent },
  // { path: 'add-questions/:examId', component: AddQuestionsComponent },
  { path: 'take-exam', component: TakeExamComponent }

];
