import { Component, OnChanges, Input, Output, EventEmitter, SimpleChanges, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoriaProductoData } from 'src/app/models/categoriaProductoData';
import { ProductoPedidoData } from 'src/app/models/ProductosPedidoData';

@Component({
  selector: 'app-detail-order-form',
  templateUrl: './detail-order-form.component.html',
  styleUrls: ['./detail-order-form.component.scss']
})
export class DetailOrderFormComponent implements OnChanges {

  @Input() categories: CategoriaProductoData[] = [];
  @Input() products: ProductoPedidoData[] = [];
  @Input() editProduct: ProductoPedidoData;
  @Output() newProduct = new EventEmitter<ProductoPedidoData>();
  @ViewChild('categorySelect') categorySelect: ElementRef;

  detailOrderForm: FormGroup = this.fb.group({
    category: ['', Validators.required],
    product: ['', Validators.required],
    amount: [ , [Validators.required, Validators.pattern(/^[0-9]\d*$/), Validators.maxLength(100)]],
    condition: ['', [Validators.required, Validators.maxLength(100)]]
  });

  constructor(private fb: FormBuilder) {}

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['editProduct'].currentValue !== changes['editProduct'].previousValue){
      this.detailOrderForm.setValue({
        category: changes['editProduct'].currentValue.categoria,
        product: changes['editProduct'].currentValue.id_producto,
        amount: changes['editProduct'].currentValue.cantidad,
        condition: changes['editProduct'].currentValue.condicion
      });
    }
  }

  addNewProduct(): void {
    const productInfo: any = this.products.find(e => e.id_producto === this.detailOrderForm.value.product);
    const product: ProductoPedidoData = {
      id_producto: this.detailOrderForm.value.product,
      descripcion: productInfo.descripcion,
      precioReferencia: productInfo.precioReferencia,
      cantidad:  Number.parseInt(this.detailOrderForm.value.amount),
      porcRelacionPallet: productInfo.porcRelacionPallet,
      unidadesFijasPallet: productInfo.unidadesFijasPallet,
      condicion: this.detailOrderForm.value.condition,
      codigo: productInfo.codigo,
      total: Number(this.detailOrderForm.value.amount) * Number(productInfo.precioReferencia),
      categoria: this.detailOrderForm.value.category
    };
    this.newProduct.emit(product);
    this.detailOrderForm.reset();
    Object.keys(this.detailOrderForm.controls).forEach(key =>{
      this.detailOrderForm.controls[key].setErrors(null);
    });
  };

  get category() { return this.detailOrderForm.get('category'); }
  get product() { return this.detailOrderForm.get('product'); }
  get amount() { return this.detailOrderForm.get('amount'); }
  get condition() { return this.detailOrderForm.get('condition'); }
}
