import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../enviroments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Result } from '../../shared/models/results.model';

@Injectable({
  providedIn: 'root',
})
export class ExamService {
  private apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) {}
  getExams(): Observable<any> {
    return this.http.get(`${this.apiUrl}/exams/all`);
  }

}