import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DetallePedido } from 'src/app/models/detallePedido';
import { PedidoData } from 'src/app/models/PedidoData';
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
    private readonly router: Router
  ) {
    this.creado = false;
  }

  idPedido: number = 0;
  cantidad!: number;
  detalle: string = '';
  porcDescuentoItem!: number;
  precioUnitario!: number;
  importe!: number;
  isEntregadoItem!: number;
  usuarioGraba: any = localStorage.getItem('NickName');
  pedidosLista: PedidoData[] = [];

  ngOnInit(): void {
    this.getidPedido();
  }

  getidPedido(){
    this.pedidoService.getPedidos().subscribe((response: any) => {
      const pedidos = response as PedidoData[];
      pedidos.forEach(element => {
        this.pedidosLista.push(element);
      });
    });
  }

  onSend() {
    const pedido = new DetallePedido({
      idPedido: this.idPedido,
      cantidad: this.cantidad,
      detalle: this.detalle,
      porcDescuentoItem: this.porcDescuentoItem,
      precioUnitario: this.precioUnitario,
      importe: this.importe,
      isEntregadoItem: this.isEntregadoItem,
      usuarioGraba: this.usuarioGraba
    });
    this.detallePedidoService.postDetallePedido(pedido).subscribe((response) => {
      console.log(response);
    });
    this.creado = true;
    setTimeout(() => {
      this.router.navigateByUrl(`home/detallePedido/listar`);
    }, 1000);
  }

  goToListarDetallePedidoPage(){
    this.router.navigateByUrl(`home/detallePedido/listar`);
  }
}
