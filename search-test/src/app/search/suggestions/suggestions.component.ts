import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SuggestionsByTerm } from 'src/app/services/suggestions.service';

@Component({
  selector: 'app-suggestions',
  templateUrl: './suggestions.component.html',
  styleUrls: ['./suggestions.component.css']
})
export class SuggestionsComponent{

  @Input('suggestions')  suggestions!: SuggestionsByTerm
  @Input('term')  term!: string
  @Output() suggestionClicked = new EventEmitter<string>();

  constructor() { }

  public hasAnySuggestion(){
    return this.suggestions.suggestions.length
  }

  public searchTerm(term: string){
    this.suggestionClicked.emit(term)
  }

}
