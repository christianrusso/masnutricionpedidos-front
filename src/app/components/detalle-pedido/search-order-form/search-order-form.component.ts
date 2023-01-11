import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DateAdapter } from '@angular/material/core';

@Component({
  selector: 'app-search-order-form',
  templateUrl: './search-order-form.component.html',
  styleUrls: ['./search-order-form.component.scss']
})
export class SearchOrderFormComponent implements OnInit {

  @Output() sendSearch: any = new EventEmitter<any>();
  searchDate: any
  searchAgent: any
  searchCondition: any
  searchInternNumber: any

  constructor(private dateAdapter: DateAdapter<Date>) { }

  ngOnInit(): void {
    this.dateAdapter.setLocale('es');
  }

  searchTest(): void {
    this.sendSearch.emit(this.searchAgent);
  }

  cleanSearch(): void {
    this.searchDate= '';
    this.searchAgent= '';
    this.searchCondition= '';
    this.searchInternNumber= '';
  }
}
