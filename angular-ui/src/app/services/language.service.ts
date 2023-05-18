import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { LanguageModel } from '../models/language.model';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private apiUrl = `${environment.apiUrl}`;

  constructor(private http: HttpClient) { }

  getLanguages(): Observable<LanguageModel[]> {
    return this.http.get<LanguageModel[]>(`${this.apiUrl}/languages`);
  }
}
