import { Component, OnInit } from '@angular/core';

import { CanalService } from '../../services/canal.service';
@Component({
  selector: 'app-canal',
  templateUrl: './canal.component.html',
  styleUrls: ['./canal.component.scss']
})
export class CanalComponent implements OnInit {

  constructor(  private readonly canalService: CanalService) {
    this.getClientes();
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
