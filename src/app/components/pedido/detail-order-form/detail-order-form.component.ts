import { Component, OnInit, OnChanges, Input, Output, EventEmitter, SimpleChanges, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoriaProductoData } from 'src/app/models/categoriaProductoData';
import { ProductoPedidoData } from 'src/app/models/ProductosPedidoData';

@Component({
  selector: 'app-detail-order-form',
  templateUrl: './detail-order-form.component.html',
  styleUrls: ['./detail-order-form.component.scss']
})
export class DetailOrderFormComponent implements OnInit, OnChanges {

  @Input() categories: CategoriaProductoData[] = [];
  @Input() products: ProductoPedidoData[] = [];
  @Input() editProduct: ProductoPedidoData;
  @Output() newProduct = new EventEmitter<ProductoPedidoData>();
  @ViewChild('test') test: ElementRef;

  detailOrderForm: FormGroup = this.fb.group({
    category: ['', Validators.required],
    product: ['', Validators.required],
    total: [0, [Validators.required, Validators.pattern(/^[0-9]\d*$/), Validators.maxLength(100)]],
    condition: ['', [Validators.required, Validators.maxLength(100)]]
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    if(changes['editProduct'].currentValue !== changes['editProduct'].previousValue){
      this.detailOrderForm.setValue({
        category: changes['editProduct'].currentValue.categoria,
        product: changes['editProduct'].currentValue.id_producto,
        total: changes['editProduct'].currentValue.total,
        condition: changes['editProduct'].currentValue.condicion
      })
      this.test.nativeElement.open()
    }
  }

  addNewProduct() {
    const productInfo: any = this.products.find(e => e.id_producto === this.detailOrderForm.value.product);
    const product: ProductoPedidoData = {
      id_producto: this.detailOrderForm.value.product,
      descripcion: productInfo.descripcion,
      precioReferencia: productInfo.precioReferencia,
      cantidad:  Number.parseInt(this.detailOrderForm.value.total),
      porcRelacionPallet: productInfo.porcRelacionPallet,
      unidadesFijasPallet: productInfo.unidadesFijasPallet,
      condicion: this.detailOrderForm.value.condition,
      codigo: productInfo.codigo,
      total: this.detailOrderForm.value.total * productInfo.precioReferencia,
      categoria: this.detailOrderForm.value.category
    }
    this.newProduct.emit(product);
    this.detailOrderForm.reset();
  };

  get category() { return this.detailOrderForm.get('category'); }
  get product() { return this.detailOrderForm.get('product'); }
  get total() { return this.detailOrderForm.get('total'); }
  get condition() { return this.detailOrderForm.get('condition'); }
}
