import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layout/main-layout/main-layout/main-layout.component';
import { LoginComponent } from './features/auth/login/login.component';
import { AuthGuard } from './core/guards/auth.guard';
import { AddExamComponent } from './features/admin/add-exam/add-exam.component';
import { RegisterComponent } from './features/auth/register/register.component';
import { ExamsComponent } from './features/exams/exams.component';
import { EditExamComponent } from './features/admin/edit-exam/edit-exam.component';
import { UserProfileComponent } from './users/components/user-profile/user-profile/user-profile.component';
import { EditProfileComponent } from './users/components/user-profile/edit-profile/edit-profile.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: RegisterComponent },
  {
    path: '',
    component: MainLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'add-exam',
        component: AddExamComponent,
        runGuardsAndResolvers: 'always',
      },
      {
        path: 'exams',
        component: ExamsComponent,
        runGuardsAndResolvers: 'always',
      },
      {
        path: 'edit-exam/:id',
        component: EditExamComponent,
        runGuardsAndResolvers: 'always',
      },
      {
        path: 'profile',
        component: UserProfileComponent,
        runGuardsAndResolvers: 'always',
      },
      {
        path: 'edit-profile',
        component: EditProfileComponent,
        runGuardsAndResolvers: 'always',
      },
    ],
  },
  { path: '**', redirectTo: '/login' },
];
