import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Operacion } from 'src/app/models/detalleOperacion';
import { DetallePedidoData } from 'src/app/models/DetallePedidoData';
import { PedidoData } from 'src/app/models/PedidoData';
import { DetalleOperacionService } from 'src/app/services/detalle-operacion.service';
import { DetallePedidoService } from 'src/app/services/detalle-pedido.service';
import { PedidoService } from 'src/app/services/pedido.service';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.scss'],
})
export class CrearComponent implements OnInit {
  creado: boolean;
  constructor(
    private readonly pedidoService: PedidoService,
    private detallePedidoService: DetallePedidoService,
    private operacionService: DetalleOperacionService,
    private readonly router: Router
  ) {
    this.creado = false;
  }

  idPedido: number = 0;
  idDetallePedido: number = 0;
  cantidad!: number;
  detalle: string = '';
  porcDescuentoItem: number = 0;
  precioUnitario: number = 0;
  importe: number = 0;
  isEntregadoItem: number = 0;
  usuarioGraba: any = localStorage.getItem('NickName');
  pedidosLista: PedidoData[] = [];
  detallePedidosLista: DetallePedidoData[] = [];

  ngOnInit(): void {
    this.getidPedido();
    this.getidDetallePedido();
  }

  getidPedido(){
    this.pedidoService.getPedidos().subscribe((response: any) => {
      const pedidos = response as PedidoData[];
      pedidos.forEach(element => {
        this.pedidosLista.push(element);
      });
    });
  }

  getidDetallePedido(){
    this.detallePedidoService.getDetallePedidos().subscribe((response: any) => {
      const pedidos = response as DetallePedidoData[];
      pedidos.forEach(element => {
        this.detallePedidosLista.push(element);
      });
    });
  }


  onSend() {
    const operacion = new Operacion({
      idPedido: this.idPedido,
      idDetallePedido: this.idDetallePedido,
      cantidad: this.cantidad,
      detalle: this.detalle,
      porcDescuentoItem: this.porcDescuentoItem,
      precioUnitario: this.precioUnitario,
      importe: this.importe,
      usuarioGraba: this.usuarioGraba
    });
    this.operacionService.postOperacion(operacion).subscribe((response) => {
      console.log(response);
    });
    this.creado = true;
    setTimeout(() => {
      this.router.navigateByUrl(`home/operacion/listar`);
    }, 1000);
  }

  goToListarOperacionPage(){
    this.router.navigateByUrl(`home/operacion/listar`);
  }
}
