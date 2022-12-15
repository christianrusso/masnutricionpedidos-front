import { Component, OnInit } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteData } from 'src/app/models/ClienteData';
import { Rol } from 'src/app/models/rol';
import { ClienteService } from 'src/app/services/cliente.service';
import { RolService } from 'src/app/services/rol.service';

@Component({
  selector: 'app-rol',
  templateUrl: './rol.component.html',
  styleUrls: ['./rol.component.scss'],
})
export class RolComponent implements OnInit {
  id: number = 0;
  creado: boolean;
  constructor(
    private readonly clienteService: ClienteService,
    private rolService: RolService,
    private readonly router: Router,
    private route: ActivatedRoute,
  ) {
    this.creado = false;
  }

  isCliente: number = 0;
  isDetalleOperacion: number = 0;
  isDetallePedido: number = 0;
  isEmail: number = 0;
  isEmpresa: number = 0;
  isGrupoAcceso: number = 0;
  isGrupoAccesoPermiso: number = 0;
  isLocalidad: number = 0;
  isPedido: number = 0;
  isProducto: number = 0;
  isProvincia: number = 0;
  isTelefono: number = 0;
  isVendedor: number = 0;
  usuarioGraba: any = localStorage.getItem('NickName');
  clienteLista: ClienteData[] = [];

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getidCliente();
  }

  getidCliente(){
    this.clienteService.getClientes().subscribe((response: any) => {
      const clientes = response as ClienteData[];
      clientes.forEach(element => {
        this.clienteLista.push(element);
      });
    });
  }

  marcarClientes(ob: MatCheckboxChange){
    if (ob.checked) {
      this.isCliente = 1;
    } else {
      this.isCliente = 0;
    }
  }
  marcarDetalleOperaciones(ob: MatCheckboxChange){
    if (ob.checked) {
      this.isDetalleOperacion = 1;
    } else {
      this.isDetalleOperacion = 0;
    }
  }
  marcarDetallePedidos(ob: MatCheckboxChange){
    if (ob.checked) {
      this.isDetallePedido = 1;
    } else {
      this.isDetallePedido = 0;
    }
  }
  marcarEmails(ob: MatCheckboxChange){
    if (ob.checked) {
      this.isEmail = 1;
    } else {
      this.isEmail = 0;
    }
  }
  marcarEmpresas(ob: MatCheckboxChange){
    if (ob.checked) {
      this.isEmpresa = 1;
    } else {
      this.isEmpresa = 0;
    }
  }
  marcarGrupoAcceso(ob: MatCheckboxChange){
    if (ob.checked) {
      this.isGrupoAcceso = 1;
    } else {
      this.isGrupoAcceso = 0;
    }
  }
  marcarGrupoAccesoPermiso(ob: MatCheckboxChange){
    if (ob.checked) {
      this.isGrupoAccesoPermiso = 1;
    } else {
      this.isGrupoAccesoPermiso = 0;
    }
  }
  marcarLocalidades(ob: MatCheckboxChange){
    if (ob.checked) {
      this.isLocalidad = 1;
    } else {
      this.isLocalidad = 0;
    }
  }
  marcarPedidos(ob: MatCheckboxChange){
    if (ob.checked) {
      this.isPedido = 1;
    } else {
      this.isPedido = 0;
    }
  }
  marcarProductos(ob: MatCheckboxChange){
    if (ob.checked) {
      this.isProducto = 1;
    } else {
      this.isProducto = 0;
    }
  }
  marcarProvincias(ob: MatCheckboxChange){
    if (ob.checked) {
      this.isProvincia = 1;
    } else {
      this.isProvincia = 0;
    }
  }
  marcarTelefonos(ob: MatCheckboxChange){
    if (ob.checked) {
      this.isTelefono = 1;
    } else {
      this.isTelefono = 0;
    }
  }
  marcarVendedores(ob: MatCheckboxChange){
    if (ob.checked) {
      this.isVendedor = 1;
    } else {
      this.isVendedor = 0;
    }
  }



  onSend() {
    const rol = new Rol({
      isCliente: this.isCliente,
      isDetalleOperacion: this.isDetalleOperacion,
      isDetallePedido: this.isDetallePedido,
      isEmail: this.isEmail,
      isEmpresa: this.isEmpresa,
      isGrupoAcceso: this.isGrupoAcceso,
      isGrupoAccesoPermiso: this.isGrupoAccesoPermiso,
      isLocalidad: this.isLocalidad,
      isPedido: this.isPedido,
      isProducto: this.isProducto,
      isProvincia: this.isProvincia,
      isTelefono: this.isTelefono,
      isVendedor: this.isVendedor,
      usuarioGraba: this.usuarioGraba
    });
    this.rolService.editRol(rol, this.id).subscribe((response) => {
      console.log(response);
    });
    this.creado = true;
    setTimeout(() => {
      this.router.navigateByUrl(`home/usuario/listar`);
    }, 1000);
  }

  goToListarUsuariosPage(){
    this.router.navigateByUrl(`home/usuario/listar`);
  }
}
