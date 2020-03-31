import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  @Input()
  products: Array<Product>;

  constructor() { }

  ngOnInit(): void {
  }


  areProductsEmpty() {
    return this.products === undefined || this.products === null || this.products.length === 0;
  }

}
