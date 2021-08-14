import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';
import { products } from '../products';

@Component({
  selector: 'app-prodact-details',
  templateUrl: './prodact-details.component.html',
  styleUrls: ['./prodact-details.component.css']
})
export class ProdactDetailsComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private cartservice: CartService
  ) {}
  product: any;
  ngOnInit() {
    this.route.paramMap.subscribe(param => {
      const index: any = param.get('prodactId');
      console.log(index);
      this.product = products[index];
    });
  }
  addToCart(product: any) {
    window.alert(product.name);
    this.cartservice.addToCart(product);
  }
}
