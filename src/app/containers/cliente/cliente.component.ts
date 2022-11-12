import { Component, OnInit } from '@angular/core';
import { CanalService } from 'src/app/services/canal.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent implements OnInit {

  constructor( private readonly canalService: CanalService) { 
    this.getClientes()
  }

  ngOnInit(): void {
  }
  getClientes() {
    this.canalService.getCanales().subscribe(response => {
     // const canal = response as ClientData[];
     // this.dataSource.data = canal;
    });
  }
}
