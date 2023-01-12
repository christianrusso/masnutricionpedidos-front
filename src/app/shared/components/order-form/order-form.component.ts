import { Component, ElementRef, OnInit, AfterViewInit, ViewChild, Output, EventEmitter, Input, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DateAdapter } from '@angular/material/core';
import { Router } from '@angular/router';
import { Pedido } from 'src/app/models/pedido';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.scss']
})
export class OrderFormComponent implements OnInit, AfterViewInit {

  @ViewChild('firstInput') firstInput: ElementRef;
  @Output() order: any = new EventEmitter<any>();
  @Input() id: number = -1;
  @Input() test: any;
  today: Date = new Date();
  orderForm: FormGroup = this.fb.group({
    date: [this.today, Validators.required],
    internNumber: ['', [Validators.required, Validators.pattern(/^[0-9]\d*$/), Validators.maxLength(100)]],
    agent: ['', [Validators.required, Validators.maxLength(100)]],
    cod: ['', [Validators.required, Validators.maxLength(100)]],
    cuit: ['', [Validators.required, Validators.pattern(/^[0-9]\d*$/), Validators.maxLength(100)]],
    address: ['', [Validators.required, Validators.maxLength(100)]],
    phone: ['' ,[Validators.required, Validators.pattern(/^[0-9]\d*$/), Validators.maxLength(100)]],
    transport: ['' ,[Validators.required, Validators.maxLength(100)]],
    observation: ['', Validators.maxLength(100)]
  });

  constructor(
    private fb: FormBuilder,
    private dateAdapter: DateAdapter<Date>,
    private router: Router) {}

  ngOnInit(): void {
    this.dateAdapter.setLocale('es');
    console.log(this.test)
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes['test'].currentValue)
    console.log(changes['test'].previousValue)
    console.log(this.test)
    if(changes['test'].currentValue !== changes['test'].previousValue){
      this.orderForm.setValue({
        date: changes['test'].currentValue.fe,
        internNumber: changes['test'].currentValue.num_interno,
        agent: changes['test'].currentValue.representante,
        cod: changes['test'].currentValue.cod,
        cuit: changes['test'].currentValue.cuit,
        address: changes['test'].currentValue.domicilio,
        phone: changes['test'].currentValue.telefono,
        transport: changes['test'].currentValue.transporte,
        observation: changes['test'].currentValue.observaciones
      });
    }
  };

  ngAfterViewInit(): void {
    this.firstInput.nativeElement.focus();
  };

  cancelOrder(): void {
    this.router.navigateByUrl(`home/pedido/listar`);
  };

  saveOrder(): void {
    this.order.emit(this.orderForm.value);
  };

  get date() { return this.orderForm.get('date'); }
  get internNumber() { return this.orderForm.get('internNumber'); }
  get agent() { return this.orderForm.get('agent'); }
  get cod() { return this.orderForm.get('cod'); }
  get cuit() { return this.orderForm.get('cuit'); }
  get address() { return this.orderForm.get('address'); }
  get phone() { return this.orderForm.get('phone'); }
  get transport() { return this.orderForm.get('transport'); }
  get observation() { return this.orderForm.get('observation'); }
}
