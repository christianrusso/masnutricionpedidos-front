import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DateAdapter } from '@angular/material/core';

@Component({
  selector: 'app-search-order-form',
  templateUrl: './search-order-form.component.html',
  styleUrls: ['./search-order-form.component.scss']
})
export class SearchOrderFormComponent implements OnInit {

  @Output() sendSearch: any = new EventEmitter<any>();
  searchFilter: any = {
    searchDate: '',
    searchAgent: '',
    searchCondition: '',
    searchInternNumber: ''
  };

  constructor(private dateAdapter: DateAdapter<Date>) { }

  ngOnInit(): void {
    this.dateAdapter.setLocale('es');
  }

  searchTest(): void {
    this.sendSearch.emit(this.searchFilter);
  }

  cleanSearch(): void {
    this.searchFilter = {
      searchDate: '',
      searchAgent: '',
      searchCondition: '',
      searchInternNumber: ''
    }
    this.searchTest();
  }
}
