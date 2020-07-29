import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Product } from '../product.model';
import { ProductRowComponent } from '../product-row/product-row.component';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  private currentProduct: Product;

  @Input()
  productList: Product[];

  @Output()
  onProductSelected: EventEmitter<Product>;

  constructor() {
    this.onProductSelected = new EventEmitter<Product>();
  }

  clicked(product: Product): void {
    this.currentProduct = product;
    this.onProductSelected.emit(product);
  }

  isSelected(product: Product): boolean {
    if (!product || !this.currentProduct) {
      return false;
    }
    return product.sku === this.currentProduct.sku;
  }

  ngOnInit(): void {}
}
