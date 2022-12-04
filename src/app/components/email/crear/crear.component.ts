import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClienteData } from 'src/app/models/ClienteData';
import { Email } from 'src/app/models/email';
import { ClienteService } from 'src/app/services/cliente.service';
import { EmailService } from 'src/app/services/email.service';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.scss'],
})
export class CrearComponent implements OnInit {
  creado: boolean;
  constructor(
    private readonly clienteService: ClienteService,
    private emailService: EmailService,
    private readonly router: Router
  ) {
    this.creado = false;
  }

  descripcion: string = '';
  idCliente: number = 0;
  usuarioGraba: any = localStorage.getItem('NickName');
  clienteLista: ClienteData[] = [];

  ngOnInit(): void {
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

  onSend() {
    const email = new Email({
      idCliente: this.idCliente,
      descripcion: this.descripcion,
      usuarioGraba: this.usuarioGraba
    });
    this.emailService.postEmail(email).subscribe((response) => {
      console.log(response);
    });
    this.creado = true;
    setTimeout(() => {
      this.router.navigateByUrl(`home/email/listar`);
    }, 1000);
  }

  goToListarEmailsPage(){
    this.router.navigateByUrl(`home/email/listar`);
  }
}
