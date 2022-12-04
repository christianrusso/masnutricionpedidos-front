import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PedidoData } from 'src/app/models/PedidoData';
import { PedidoService } from 'src/app/services/pedido.service';
import { DetallePedidoService } from 'src/app/services/detalle-pedido.service';
import { OperacionEdit } from 'src/app/models/detalleOperacion-edit';
import { DetalleOperacionService } from 'src/app/services/detalle-operacion.service';
import { DetallePedidoData } from 'src/app/models/DetallePedidoData';

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
    private readonly operacionService: DetalleOperacionService,
    private readonly router: Router
  ) {}
  creado: boolean = false;
  idPedido: number = 0;
  idDetallePedido: number = 0;
  cantidad: number = 0;
  detalle: string = '';
  porcDescuentoItem: number = 0;
  precioUnitario: number = 0;
  importe: number = 0;
  isEntregadoItem: number = 0;
  pedidosLista: PedidoData[] = [];
  detallePedidosLista: DetallePedidoData[] = [];
  usuarioModifica: any = localStorage.getItem('NickName');

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getidPedido();
    this.getidDetallePedido();
    this.operacionService.getOperacion(this.id).subscribe((response: any) => {
      this.idPedido = response[0].idPedido;
      this.idDetallePedido = response[0].idDetallePedido;
      this.cantidad = response[0].cantidad;
      this.detalle = response[0].detalle;
      this.porcDescuentoItem = response[0].porcDescuentoItem;
      this.precioUnitario = response[0].precioUnitario;
      this.importe = response[0].importe;
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

  getidDetallePedido(){
    this.detallePedidoService.getDetallePedidos().subscribe((response: any) => {
      const pedidos = response as DetallePedidoData[];
      pedidos.forEach(element => {
        this.detallePedidosLista.push(element);
      });
    });
  }

  onEdit() {
    const operacion = new OperacionEdit({
      idPedido: this.idPedido,
      idDetallePedido: this.idDetallePedido,
      cantidad: this.cantidad,
      detalle: this.detalle,
      porcDescuentoItem: this.porcDescuentoItem,
      precioUnitario: this.precioUnitario,
      importe: this.importe,
      usuarioModifica: this.usuarioModifica
    });
    this.operacionService
      .editOperacion(operacion, this.id)
      .subscribe((response) => {
        return response;
      });
    this.creado = true;
    setTimeout(() => {
      this.router.navigateByUrl('home/operacion/listar');
    }, 1000);
  }

  goToListarOperacionPage(){
    this.router.navigateByUrl(`home/operacion/listar`);
  }
}
