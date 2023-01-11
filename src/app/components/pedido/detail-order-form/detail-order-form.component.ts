import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoriaProductoData } from 'src/app/models/categoriaProductoData';
import { ProductoPedidoData } from 'src/app/models/ProductosPedidoData';

@Component({
  selector: 'app-detail-order-form',
  templateUrl: './detail-order-form.component.html',
  styleUrls: ['./detail-order-form.component.scss']
})
export class DetailOrderFormComponent implements OnInit {

  @Input() categories: CategoriaProductoData[] = [];
  @Input() products: ProductoPedidoData[] = [];
  @Output() newProduct = new EventEmitter<ProductoPedidoData>();

  detailOrderForm: FormGroup = this.fb.group({
    category: ['', Validators.required],
    product: ['', Validators.required],
    total: ['', [Validators.required, Validators.pattern(/^[0-9]\d*$/), Validators.maxLength(100)]],
    condition: ['', [Validators.required, Validators.maxLength(100)]]
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  addNewProduct() {
    const productInfo: any = this.products.find(e => e.id_producto === this.detailOrderForm.value.product);
    const product: ProductoPedidoData = {
      id_producto: this.detailOrderForm.value.product,
      descripcion: productInfo.descripcion,
      precioReferencia: productInfo.precioReferencia,
      cantidad: this.detailOrderForm.value.total,
      porcRelacionPallet: productInfo.porcRelacionPallet,
      unidadesFijasPallet: productInfo.unidadesFijasPallet,
      condicion: this.detailOrderForm.value.condition,
      codigo: productInfo.codigo,
      total: this.detailOrderForm.value.total * productInfo.precioReferencia
    }
    this.newProduct.emit(product);
  };

  get category() { return this.detailOrderForm.get('category'); }
  get product() { return this.detailOrderForm.get('product'); }
  get total() { return this.detailOrderForm.get('total'); }
  get condition() { return this.detailOrderForm.get('condition'); }
}
