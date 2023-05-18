import { Component } from '@angular/core';
import { TranslationService } from '../services/translation.service';
import {LanguageModel} from "../models/language.model";

@Component({
  selector: 'app-translation-form',
  templateUrl: './translation-form.component.html',
  styleUrls: ['./translation-form.component.css']
})
export class TranslationFormComponent {
  sourceLanguage: LanguageModel | undefined;
  targetLanguage: LanguageModel | undefined;
  textToTranslate = '';
  translatedText: String = '';

  constructor(private translationService: TranslationService) { }

  onSourceLanguageSelected(language: LanguageModel) {
    this.sourceLanguage = language;
  }

  onTargetLanguageSelected(language: LanguageModel) {
    this.targetLanguage = language;
  }

  onTranslate() {

    if (!this.sourceLanguage || !this.targetLanguage) {
      return;
    }

    if (this.sourceLanguage.iso2 === this.targetLanguage.iso2) {
      this.translatedText = this.textToTranslate;
      return;
    }

    this.translationService.translate(this.sourceLanguage, this.targetLanguage, this.textToTranslate)
      .subscribe(response => {
        this.translatedText = response.translatedText;
      });
  }

  onInvalidParameters() : boolean {
    return !this.sourceLanguage
      || !this.targetLanguage
      || this.textToTranslate.trim().length === 0;
  }
}
