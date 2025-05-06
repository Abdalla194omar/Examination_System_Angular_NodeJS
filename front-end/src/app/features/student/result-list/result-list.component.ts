import { Component,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ResultsService } from '../../../core/services/results.service';
import { Result } from '../../../shared/models/results.model';
@Component({
  selector: 'app-result-list',
  imports: [RouterLink,CommonModule],
  templateUrl: './result-list.component.html',
  styleUrl: './result-list.component.css'
})
export class ResultListComponent implements OnInit{
  results: Result[] = [];
  errorMessage: string | null = null;
  userRole: string = 'admin';
  userId: string = '68101b7e52c96a2144a55800';
  expandedResultId: string | null = null; 
  successMessage: string | null = null;
  constructor(
    private resultsService: ResultsService,
    // private authService: AuthService
  ) {}

  ngOnInit(): void {
    // Get user role and ID
    // this.userRole = this.authService.getCurrentUserRole();
    // this.userId = this.authService.getCurrentUserId();

    // if (!this.authService.isLoggedIn()) {
    //   this.errorMessage = 'Please log in to view results.';
    //   return;
    // }

    // Fetch results based on role
    
    if (this.userRole === 'admin') {
      this.fetchAllResults();
    } else if (this.userRole === 'student') {
      this.fetchUserResults();
    } else {
      this.errorMessage = 'Unauthorized: Invalid user role.';
    }
  }

  fetchAllResults(): void {
    this.resultsService.getAllResults().subscribe({
      next: (results) => {
        console.log('All Results:', results);
        this.results = results.data;
        this.errorMessage = null;
      },
      error: (error) => {
        this.errorMessage = 'Failed to load results: ' + (error.error?.message || error.message);
        console.error('Error fetching all results:', error);
      },
    });
  }

  fetchUserResults(): void {
    this.resultsService.getUserResults(this.userId).subscribe({
      next: (results) => {
        this.results = results.data;
        this.errorMessage = null;
      },
      error: (error) => {
        this.errorMessage = 'Failed to load your results: ' + (error.error?.message || error.message);
        console.error('Error fetching user results:', error);
      },
    });
  }
  toggleAnswers(resultId: string): void {
    this.expandedResultId = this.expandedResultId === resultId ? null : resultId;
  }
}

