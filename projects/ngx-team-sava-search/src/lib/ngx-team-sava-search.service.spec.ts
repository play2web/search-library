import { TestBed } from '@angular/core/testing';

import { NgxTeamSavaSearchService } from './ngx-team-sava-search.service';

describe('NgxTeamSavaSearchService', () => {
  let service: NgxTeamSavaSearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxTeamSavaSearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
