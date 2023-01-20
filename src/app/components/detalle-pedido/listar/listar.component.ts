import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { DetallePedidoData } from 'src/app/models/DetallePedidoData';
import { PedidoData } from 'src/app/models/PedidoData';
import { DetallePedidoService } from 'src/app/services/detalle-pedido.service';
import { PedidoService } from 'src/app/services/pedido.service';
import { ModalEliminarComponent } from '../modal-eliminar/modal-eliminar.component';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss'],
})
export class ListarComponent implements OnInit, AfterViewInit {

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  delete!: boolean;
  displayedColumnsDetallePedidos: string[] = [
    'idPedido',
    'fechaGraba',
    'representante',
    'num_interno',
    'condicion',
    'observaciones',
    'total',
    'acction'
  ];
  dataSource = new MatTableDataSource<PedidoData>();
  dataSourceFilters = new MatTableDataSource<PedidoData>();
  filterDictionary= new Map<string,string>();

  constructor(
    private detallePedidoService: DetallePedidoService,
    private pedidoService: PedidoService,
    private readonly router: Router,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getPedidos();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  getPedidos(): void {
    this.pedidoService.getPedidos().subscribe((response: any) => {
      const pedidos = response as PedidoData[];
      this.dataSource.data = pedidos;
      this.dataSourceFilters.data = pedidos;
      this.applyFilter()
    });
  };

  applyFilter() {
    this.dataSourceFilters.filterPredicate = ((record: PedidoData,filter: string) => {
      let isMatch = false;
      const map = new Map(JSON.parse(filter));
      for (let [key, value] of map) {
        switch(key){
          case 'representante': {
            if(record[key as keyof PedidoData] !== null)
              isMatch = record[key as keyof PedidoData].trim().toLowerCase().startsWith(String(value).toLowerCase());
            break;
          };
          case 'descripcion': {
            if(record[key as keyof PedidoData] !== null)
              isMatch = record[key as keyof PedidoData].trim().toLowerCase().includes(String(value).toLowerCase());
            break;
          };
          case 'num_interno': {
            if(record[key as keyof PedidoData] !== null)
              isMatch = String(record[key as keyof PedidoData]).trim().toLowerCase().includes(String(value));
            break;
          };
          case 'fechaGraba': {
            if(record[key as keyof PedidoData] !== null)
              isMatch = moment(record[key as keyof PedidoData]).format('D/MM/YYYY') === moment(String(value)).format('D/MM/YYYY');
            break;
          };
          default: {
            break;
          }
        };
      };
      return isMatch;
    });
  };

  applyEmpFilter(value: any): void {
    if(value){
      let prop: any;
      let val: any;
      for (const [key, propValue] of Object.entries(value)) {
        prop = key,
        val = propValue
      };
      this.filterDictionary.set(prop,val);
      const jsonString = JSON.stringify(Array.from(this.filterDictionary.entries()));
      this.dataSourceFilters.filter = jsonString;
    } else 
      this.dataSourceFilters.filter = '';
  };
  
  goToPrint(id: number): void {
    this.router.navigateByUrl(`home/detallePedido/detalles/${id}`);
  };

  goToPedidoCrearPage(): void {
    this.router.navigateByUrl('home/pedido/crear');
  };

  goToEditPage(idDetallePedido: number): void {
    console.log(idDetallePedido)
    this.router.navigateByUrl(`home/detallePedido/modificar/${idDetallePedido}`);
  };

  openDialog(id: number): void {
    console.log(id);
    const dialogRef = this.dialog.open(ModalEliminarComponent, {
      width: '300px',
      data: { delete: this.delete },
    });

    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (result) {
        this.pedidoService.deletePedido(id).subscribe((response) => {
          setTimeout(() => {
            location.reload();
          }, 100);
        });
      }
    });
  };
}
