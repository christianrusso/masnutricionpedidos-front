import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmailEdit } from 'src/app/models/email-edit';
import { ClienteData } from 'src/app/models/ClienteData';
import { ClienteService } from 'src/app/services/cliente.service';
import { EmailService } from 'src/app/services/email.service';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.scss'],
})
export class ModificarComponent implements OnInit {
  id: number = 0;
  constructor(
    private route: ActivatedRoute,
    private readonly clienteService: ClienteService,
    private emailService: EmailService,
    private readonly router: Router
  ) {}
  creado: boolean = false;
  descripcion: string = '';
  idCliente: number = 0;
  clientesLista: ClienteData[] = [];
  usuarioModifica: any = localStorage.getItem('NickName');

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getidCliente();
    this.emailService.getEmail(this.id).subscribe((response: any) => {
      this.idCliente = response[0].idCliente;
      this.descripcion = response[0].descripcion;
      this.creado = false;
    });
  }

  getidCliente() {
    this.clienteService.getClientes().subscribe((response: any) => {
      const clientes = response as ClienteData[];
      clientes.forEach((element) => {
        this.clientesLista.push(element);
      });
    });
  }

  onEdit() {
    const email = new EmailEdit({
      idCliente: this.idCliente,
      descripcion: this.descripcion,
      usuarioModifica: this.usuarioModifica
    });
    this.emailService
      .editEmail(email, this.id)
      .subscribe((response) => {
        return response;
      });
    this.creado = true;
    setTimeout(() => {
      this.router.navigateByUrl('home/email/listar');
    }, 1000);
  }

  goToListarEmailsPage(){
    this.router.navigateByUrl(`home/email/listar`);
  }
}
