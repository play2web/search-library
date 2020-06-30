import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgxTeamSavaSearchService } from './ngx-team-sava-search.service';
import { SearchRequest } from './search.config';
import { Product } from './product';

@Component({
  selector: 'ngx-team-sava-search',
  templateUrl: './ngx-team-sava-search.component.html',
  styleUrls: ['./ngx-team-sava-search.component.scss']
})

export class NgxTeamSavaSearchComponent {
  searchRequest = new SearchRequest();
  searchForm: FormGroup;
  products: Product[];
  submitted = false;

  constructor(
    private searchService: NgxTeamSavaSearchService,
    private formBuilder: FormBuilder) {
    this.buildForm();
    this.onChanges();
  }

  searchProducts(): void {
    if (this.searchForm.invalid) {
      alert('Please enter some value');
      return;
    }
    this.submitted = true;
    this.searchRequest.searchText = this.searchForm.get('search').value;
    this.searchService.search(this.searchRequest).subscribe((data) => {
      this.products = data;
      this.submitted = false;
    });
  }

  searchReset(): void {
    this.products = null;
  }

  private onChanges(): void {
    this.searchForm.valueChanges.subscribe(val => {
      if (!val.search){
        this.products = null;
      }
    });
  }
  private buildForm(): void {
    this.searchForm = this.formBuilder.group({
      search: [null, Validators.required]
    });
  }
}
