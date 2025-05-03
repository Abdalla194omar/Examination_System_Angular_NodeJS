import { Component, signal } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { HttpClient } from '@angular/common/http';
// import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'add-exam',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './add-exam.component.html',
  styleUrls: ['./add-exam.component.css'],
})
export class AddExamComponent {

}