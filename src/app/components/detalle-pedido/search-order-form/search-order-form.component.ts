import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DateAdapter } from '@angular/material/core';

@Component({
  selector: 'app-search-order-form',
  templateUrl: './search-order-form.component.html',
  styleUrls: ['./search-order-form.component.scss']
})
export class SearchOrderFormComponent implements OnInit {

  @Output() sendSearch = new EventEmitter<string>();
  searchDate = {
    fechaGraba:''
  };
  searchAgent = {
    representante:''
  };
  searchCondition = {
    descripcion:''
  };
  searchInternNumber = {
    num_interno:''
  };
  constructor(private dateAdapter: DateAdapter<Date>) { }

  ngOnInit(): void {
    this.dateAdapter.setLocale('es');
  }

  searchTest(value: any): void {
    this.sendSearch.emit(value);
  }

  cleanSearch(): void {
    this.searchDate.fechaGraba ='';
    this.searchAgent.representante='';
    this.searchCondition.descripcion='';
    this.searchInternNumber.num_interno='';
    this.searchTest('');
  }
}
