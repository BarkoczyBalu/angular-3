import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  constructor(private cart: CartService) {}
  items : any;
  ngOnInit() {
    this.items = this.cart.getCart();
  }
  getcard() {
    return this.cart.getCart();
  }
}
