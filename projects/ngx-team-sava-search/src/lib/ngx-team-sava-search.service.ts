import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product';

import {
  SearchConfig,
  SearchConfigToken,
  SearchRequest
} from './search.config';

@Injectable({
  providedIn: 'root'
})
export class NgxTeamSavaSearchService {
  constructor(
    private http: HttpClient,
    @Inject(SearchConfigToken) public searchConfig: SearchConfig) { }

    search(searchRequest: SearchRequest): Observable<Product[]> {
    const currentSearchUrl = `${this.searchConfig.apiUrlSearch}/products/search?query=${searchRequest.searchText}`;
    return this.http.get<Product[]>(currentSearchUrl);
  }
}




