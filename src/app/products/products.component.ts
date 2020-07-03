import { Component, OnInit } from '@angular/core';
import { faShoppingCart, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
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
  faShoppingCart = faShoppingCart;
  faInfoCircle = faInfoCircle;
}
