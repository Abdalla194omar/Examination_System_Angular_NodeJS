import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { map } from 'rxjs/operators';
import { environment } from '../../enviroments/environment'; // Fixed typo: enviroments -> environments
import { Question } from '../../shared/models/question.model';

@Injectable({
  providedIn: 'root',
})
export class QuestionsService {
  constructor(private http: HttpClient) {}

  // Question APIs
  getAllQuestions(examId: string): Observable<any> {
    return this.http.get(`${environment.apiUrl}/exams/${examId}/allquestions`);
  }
  createQuestions(examId: string, question: Question): Observable<any> {
    return this.http.post(`${environment.apiUrl}/exams/${examId}/question`, question);
  }

  updateQuestion(examId: string, questionId: string, question: Question): Observable<any> {
    return this.http.put(`${environment.apiUrl}/exams/${examId}/question/${questionId}`, question);
  }

  deleteQuestion(examId: string, questionId: string): Observable<any> {
    return this.http.delete(`${environment.apiUrl}/exams/${examId}/question/${questionId}`);
  }
}
