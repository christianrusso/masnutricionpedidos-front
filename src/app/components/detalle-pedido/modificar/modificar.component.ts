import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PedidoData } from 'src/app/models/PedidoData';
import { PedidoService } from 'src/app/services/pedido.service';
import { DetallePedidoService } from 'src/app/services/detalle-pedido.service';
import { DetallePedidoEdit } from 'src/app/models/detallePedido-edit';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.scss'],
})
export class ModificarComponent implements OnInit {
  id: number = 0;
  constructor(
    private route: ActivatedRoute,
    private readonly pedidoService: PedidoService,
    private readonly detallePedidoService: DetallePedidoService,
    private readonly router: Router
  ) {}
  creado: boolean = false;
  idPedido: number = 0;
  cantidad!: number;
  detalle: string = '';
  porcDescuentoItem!: number;
  precioUnitario!: number;
  importe!: number;
  isEntregadoItem!: number;
  pedidosLista: PedidoData[] = [];
  usuarioModifica: any = localStorage.getItem('NickName');

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getidPedido();
    this.detallePedidoService.getDetallePedido(this.id).subscribe((response: any) => {
      this.idPedido = response[0].idPedido;
      this.cantidad = response[0].cantidad;
      this.detalle = response[0].detalle;
      this.porcDescuentoItem = response[0].porcDescuentoItem;
      this.precioUnitario = response[0].precioUnitario;
      this.importe = response[0].importe;
      this.isEntregadoItem = response[0].isEntregadoItem;
      this.creado = false;
    });
  }

  getidPedido(){
    this.pedidoService.getPedidos().subscribe((response: any) => {
      const pedidos = response as PedidoData[];
      pedidos.forEach(element => {
        this.pedidosLista.push(element);
      });
    });
  }

  onEdit() {
    const pedido = new DetallePedidoEdit({
      idPedido: this.idPedido,
      cantidad: this.cantidad,
      detalle: this.detalle,
      porcDescuentoItem: this.porcDescuentoItem,
      precioUnitario: this.precioUnitario,
      importe: this.importe,
      isEntregadoItem: this.isEntregadoItem,
      usuarioModifica: this.usuarioModifica
    });
    this.detallePedidoService
      .editDetallePedido(pedido, this.id)
      .subscribe((response) => {
        return response;
      });
    this.creado = true;
    setTimeout(() => {
      this.router.navigateByUrl('home/detallePedido/listar');
    }, 1000);
  }

  goToListarDetallePedidoPage(){
    this.router.navigateByUrl(`home/detallePedido/listar`);
  }
}
