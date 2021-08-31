import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SuggestionsService {

  private BASE_URL: string = "http://s875393884.mialojamiento.es/test/fakeapi/suggestions.php"

  constructor(private client: HttpClient) { }

  public getSuggestionsByTerm(term: string): Observable<SuggestionsByTerm> {
    return this.client.get<SuggestionsByTerm>(`${this.BASE_URL}?term=${term}`)
  }
}

export class SuggestionsByTerm{

  constructor(public count: number,
              public suggestions: string[]){}
}
