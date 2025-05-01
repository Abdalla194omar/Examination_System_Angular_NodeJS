import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from './shared/components/header/header/header.component'
// import  {AddExamComponent} from './features/admin/exam-management/add-exam/add-exam.component'
@Component({
  selector: 'app-root',
  imports: [HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'exam-system';
}
