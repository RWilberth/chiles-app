import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products: Array<Product>;

  constructor() { }

  add(product: Product): Observable<number> {
    this.products.push(product);
    return of<number>(product.id);
  }

  edit(id: number, product: Product): Observable<number> {
    const index = this.products.findIndex(p => p.id === id);
    this.products[index] = product;
    return of<number>(product.id);
  }

  getAll(): Observable<Array<Product>> {
    return of(this.products);
  }

  getById(id: number): Observable<Product> {
    return of(this.products.find(p => p.id === id));
  }

  delete(id: number): Observable<boolean> {
    const index = this.products.findIndex(p => p.id === id);
    if (index) {
      this.products.splice(index, 1);
      return of(true);
    }
    return of(false);
  }

}
