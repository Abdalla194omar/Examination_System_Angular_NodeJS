import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExamService } from '../../core/services/exam.service';
import { Exam } from '../../shared/models/exam.model';
import { Router, RouterLink } from '@angular/router';
@Component({
  selector: 'app-exams',
  imports: [CommonModule],
  templateUrl: './exams.component.html',
  styleUrl: './exams.component.css'
})
export class ExamsComponent implements OnInit {
  exams : Exam[] = [];
  errorMessage: string | null = null;
  // successMessage: string | null = null;
  // selectedFile: File | null = null;
  
  constructor(
    private examService:ExamService,
    
  ){}
  ngOnInit(): void {
    this.loadExams();
  }

  loadExams() {
    this.examService.getExams().subscribe({
      next: (response) => {
        console.log("Exams", response);
        this.exams = response.data; // Updated to use `response.data`
      },
      error: (error) => {
        this.errorMessage =
          'Failed to load projects: ' + (error.message || 'Unknown error');
        console.error('Error loading projects:', error);
      },
    });
  }
}
