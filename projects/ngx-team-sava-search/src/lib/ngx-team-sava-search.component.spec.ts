import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxTeamSavaSearchComponent } from './ngx-team-sava-search.component';

describe('NgxTeamSavaSearchComponent', () => {
  let component: NgxTeamSavaSearchComponent;
  let fixture: ComponentFixture<NgxTeamSavaSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxTeamSavaSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxTeamSavaSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
