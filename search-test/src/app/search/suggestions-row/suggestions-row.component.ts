import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-suggestions-row',
  templateUrl: './suggestions-row.component.html',
  styleUrls: ['./suggestions-row.component.css']
})
export class SuggestionsRowComponent implements OnInit {

  @Input('suggestion')  suggestion!: string
  @Input('term')  term!: string
  @Output() suggestionClicked = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  public suggestionButtonClicked(): void{
    this.suggestionClicked.emit(this.suggestion)
  }

  public get formattedSuggestion(): string {
    return this.suggestion.replace(this.term.trim(),
                                  `<span class="term">${this.term.trim()}</span>`)
  }

}
