import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { environment } from '../../enviroments/environment';
import { Observable , throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Result} from '../../shared/models/results.model';

@Injectable({
  providedIn: 'root',
})
export class ExamService {
  private apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) {}
  
  submitAnswers(examId: string, answers:{ questionId: string; answer: string}[]): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    const payload = { examId, answers };
    return this.http.post<any>(`${this.apiUrl}/exam/${examId}/submit`, payload,{headers})
  }



}
