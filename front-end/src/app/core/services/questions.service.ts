import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../enviroments/environment';
import { Question } from '../../shared/models/question.model';
@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  constructor(
    private http:HttpClient
  ) { }
  
  getQuestions(examId: string): Observable<{ data: Question[] }> {
    return this.http.get<{ data: any[] }>(`${environment.apiUrl}/exams/${examId}/questions`).pipe(
      map(response => ({
        data: response.data.map(question => ({
          id: question._id,
          examId: question.examId,
          questionDesc: question.questionDesc,
          choices: question.choices,
          answer: question.answer,
          isMultiple: question.isMultiple,
          createdAt: question.createdAt,
          updatedAt: question.updatedAt,
        }) as Question),
      }))
    );
  }
  createQuestion(examId: string, questionData: any): Observable<{ data: Question }> {
    return this.http.post<{ data: any }>(`${environment.apiUrl}/exams/${examId}/questions`, questionData).pipe(
      map(response => ({
        data: {
          id: response.data._id,
          examId: response.data.examId,
          questionDesc: response.data.questionDesc,
          choices: response.data.choices,
          answer: response.data.answer,
          isMultiple: response.data.isMultiple,
          createdAt: response.data.createdAt,
          updatedAt: response.data.updatedAt,
        } as Question,
      }))
    );
  };
  deleteQuestion(examId: string, questionId: string): Observable<any> {
    return this.http.delete(`${environment.apiUrl}/exams/${examId}/questions/${questionId}`);
  };

  updateQuestion(examId: string, questionId: string, questionData: any): Observable<{ data: Question }> {
    return this.http.patch<{ data: any }>(`${environment.apiUrl}/exams/${examId}/questions/${questionId}`, questionData).pipe(
      map(response => ({
        data: {
          id: response.data._id,
          examId: response.data.examId,
          questionDesc: response.data.questionDesc,
          choices: response.data.choices,
          answer: response.data.answer,
          isMultiple: response.data.isMultiple,
          createdAt: response.data.createdAt,
          updatedAt: response.data.updatedAt,
        } as Question,
      }))
    );
  }
}
