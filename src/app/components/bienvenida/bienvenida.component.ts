import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.component.html',
  styleUrls: ['./bienvenida.component.scss']
})
export class BienvenidaComponent implements OnInit {

  nickname: any;

  constructor() { }

  ngOnInit(): void {
    console.log('asdasf');

    this.nickname = localStorage.getItem('NickName')
  }

}
