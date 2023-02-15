import { Component, ElementRef, OnInit, AfterViewInit, ViewChild, Output, EventEmitter, Input, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DateAdapter } from '@angular/material/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.scss']
})
export class OrderFormComponent implements OnInit, AfterViewInit {

  @ViewChild('firstInput') firstInput: ElementRef;
  @Output() order: any = new EventEmitter<any>();
  @Input() id: number = -1;
  today: Date = new Date();
  orderForm: FormGroup = this.fb.group({
    date: [this.today, Validators.required],
    internNumber: ['', [Validators.required, Validators.pattern(/^[0-9]\d*$/), Validators.maxLength(100)]],
    agent: ['', [Validators.required, Validators.maxLength(100)]],
    codigo: ['', [Validators.required, Validators.pattern(/^[0-9]\d*$/), Validators.maxLength(100)]],
    cuit: ['', [Validators.required, Validators.pattern(/[0-9]/), Validators.maxLength(100)]],
    address: ['', [Validators.required, Validators.maxLength(100)]],
    phone: ['' ,[Validators.required, Validators.pattern(/^[0-9]\d*$/), Validators.maxLength(100)]],
    transport: ['' ,[Validators.required, Validators.maxLength(100)]],
    observation: ['', Validators.maxLength(100)]
  });

  constructor(
    private fb: FormBuilder,
    private dateAdapter: DateAdapter<Date>,
    private router: Router,
    private cd: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.dateAdapter.setLocale('es');
  };

  ngAfterViewInit(): void {
    this.firstInput.nativeElement.focus();
    this.cd.detectChanges();
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
  get codigo() { return this.orderForm.get('codigo'); }
  get cuit() { return this.orderForm.get('cuit'); }
  get address() { return this.orderForm.get('address'); }
  get phone() { return this.orderForm.get('phone'); }
  get transport() { return this.orderForm.get('transport'); }
  get observation() { return this.orderForm.get('observation'); }
}
