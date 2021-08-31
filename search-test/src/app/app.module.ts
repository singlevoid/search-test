import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { SuggestionsComponent } from './search/suggestions/suggestions.component';
import { SuggestionsRowComponent } from './search/suggestions-row/suggestions-row.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    SuggestionsComponent,
    SuggestionsRowComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
