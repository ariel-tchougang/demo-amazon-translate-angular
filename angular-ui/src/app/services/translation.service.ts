import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { TranslationModel } from '../models/translation.model';
import {LanguageModel} from "../models/language.model";

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private apiUrl = `${environment.apiUrl}`;

  constructor(private http: HttpClient) { }

  translate(source: LanguageModel, target: LanguageModel, text: string): Observable<TranslationModel> {
    return this.http.post<TranslationModel>(`${this.apiUrl}/translate`,
      { source: source.iso2, target: target.iso2, text });
  }
}
