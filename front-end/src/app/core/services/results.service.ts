import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../enviroments/environment';
import { Result } from '../../shared/models/results.model';

@Injectable({
  providedIn: 'root'
})
export class ResultsService {

  constructor(private http: HttpClient) {}

  getResults(): Observable<{ data: Result[] }> {
    return this.http.get<{ data: any[] }>(`${environment.apiUrl}/admin/results`).pipe(
      map(response => ({
        data: response.data.map(r => ({
          id: r._id,
          examId: r.examId,
          userId: r.userId,
          answers: r.answers,
          score: r.score,
          createdAt: r.createdAt,
          updatedAt: r.updatedAt,
        }) as Result),
      }))
    );
  }
  getStudentResults(): Observable<{ data: Result[] }> {
    return this.http.get<{ data: any[] }>(`${environment.apiUrl}/student/results`).pipe(
      map(response => ({
        data: response.data.map(r => ({
          id: r._id,
          examId: r.examId,
          userId: r.userId,
          answers: r.answers,
          score: r.score,
          createdAt: r.createdAt,
          updatedAt: r.updatedAt,
        }) as Result),
      }))
    );
  }
}
