import { InjectionToken } from '@angular/core';

export class SearchRequest {
  searchText: string;
}

export interface SearchConfig {
  apiUrlSearch: string;
}

export const Config: SearchConfig = {
  apiUrlSearch: ''
};

export const SearchConfigToken: InjectionToken<SearchConfig> = new InjectionToken('config');
