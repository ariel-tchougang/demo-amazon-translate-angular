import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { LanguageService } from '../services/language.service';
import {LanguageModel} from "../models/language.model";

@Component({
  selector: 'app-language-select',
  templateUrl: './language-select.component.html',
  styleUrls: ['./language-select.component.css']
})
export class LanguageSelectComponent implements OnInit {
  languages: LanguageModel[] = [];
  selectedIso2 = '';
  selectedLanguage: LanguageModel | undefined;

  @Input() placeholder = '';
  @Output() languageSelected: EventEmitter<LanguageModel> = new EventEmitter<LanguageModel>();

  constructor(private languageService: LanguageService) { }

  ngOnInit(): void {
    this.languageService.getLanguages().subscribe(languages => {
      this.languages = languages;
    });
  }

  onLanguageChange() {
    this.selectedLanguage = this.languages.find(language => language.iso2 === this.selectedIso2);
    if (this.selectedLanguage) {
      this.languageSelected.emit(this.selectedLanguage);
    }
  }
}
