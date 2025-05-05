import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../enviroments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Exam } from '../../shared/models/exam.model';

@Injectable({
  providedIn: 'root',
})
export class ExamService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getExams(): Observable<any> {
    console.log('Fetching exams from API...');
    return this.http.get(`${this.apiUrl}/exam/`).pipe(
      map((response) => {
        console.log('Raw API response:', response);
        return response;
      })
    );
  }

  addExam(examData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/exam/createexam`, examData);
  }

  deleteExam(examId: string): Observable<any> {
    console.log(`Deleting exam with ID ${examId}...`);
    return this.http.delete(`${this.apiUrl}/exam/deleteexam/${examId}`).pipe(
      map((response) => {
        console.log('Delete response:', response);
        return response;
      })
    );
  }
  updateExam(exam: any): Observable<any> {
    return this.http.patch(`${this.apiUrl}/exam/updateexam/${exam.id}`, exam);
  }
  getExamById(examId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/exam/getexam/${examId}`).pipe(
      map((response) => {
        console.log('Exam details:', response);
        return response;
      })
    );
  }
}
