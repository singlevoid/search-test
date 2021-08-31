import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SuggestionsByTerm, SuggestionsService } from '../services/suggestions.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public searchForm: FormGroup
  public suggestions: SuggestionsByTerm | null = null
  public term: string | null = null

  constructor(searchFormBuilder: FormBuilder,
              private suggestionsService: SuggestionsService) {
    this.searchForm = searchFormBuilder.group({term: ""})
  }

  ngOnInit(): void {
  }

  public get searchedTerm(){
    return this.searchForm.controls["term"].value
  }

  public set inputTerm(term: string){
    this.searchForm.controls["term"].setValue(term)
  }

  public searchTerm(term: string){
    this.inputTerm = term
    this.suggestions = null
    this.term = term
    alert(`Searching for ${term}`);
  }

  public hasAnySuggestions(): boolean{
    return !!(this.suggestions?.suggestions?.length)
  }

  public getSearchSuggestions(): void {
    this.suggestionsService.getSuggestionsByTerm(this.searchedTerm).subscribe(
      suggestions => {
        this.suggestions = suggestions
      },
      error => {
        this.suggestions = null
      }
    )
  }

}
