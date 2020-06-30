import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { CommonModule } from '@angular/common';
import { SearchConfigToken, SearchConfig, NgxTeamSavaSearchModule } from 'ngx-team-sava-search';

const searchConf: SearchConfig = {
  apiUrlSearch: environment.apiUrlSearch
};
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    NgxTeamSavaSearchModule.forRoot(searchConf)
  ],
  providers: [
    { provide: SearchConfigToken, useValue: searchConf }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
