import { Component, OnInit } from '@angular/core';
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  public productsArr = [];
  constructor() { }

  ngOnInit(): void {
  }
  faCoffee = faCoffee;
  faShoppingCart = faShoppingCart;
}
