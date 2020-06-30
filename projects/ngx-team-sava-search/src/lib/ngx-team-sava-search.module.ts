import { NgModule, ModuleWithProviders } from '@angular/core';
import { NgxTeamSavaSearchComponent } from './ngx-team-sava-search.component';
import { NgxTeamSavaSearchService } from './ngx-team-sava-search.service';
import { SearchConfig, SearchConfigToken } from './search.config';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [NgxTeamSavaSearchComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [NgxTeamSavaSearchComponent],
  providers: [NgxTeamSavaSearchService]
})
export class NgxTeamSavaSearchModule {
  static forRoot(searchConfig: SearchConfig): ModuleWithProviders {
    return {
      ngModule: NgxTeamSavaSearchModule,
      providers: [
        { provide: SearchConfigToken, useValue: searchConfig }
      ]
    };
  }
}
