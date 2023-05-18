import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TranslationFormComponent } from './translation-form/translation-form.component';
import { LanguageSelectComponent } from './language-select/language-select.component';

@NgModule({
  declarations: [
    AppComponent,
    TranslationFormComponent,
    LanguageSelectComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
