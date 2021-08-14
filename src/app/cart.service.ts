import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CartService {
constructor(private http: HttpClient){}

  items: any[] = [];
  addToCart(product: any) {
    this.items.push(product);
  }
  getCart(): any[] {
    return this.items;
  }
  getShippingPrices() {
    return this.http.get('/assets/shipping.json');
  }

}
