import { Component, OnInit } from '@angular/core';
import { faShoppingCart, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public cart: [];
  constructor() { }

  ngOnInit(): void {
  }
  faTrashAlt = faTrashAlt;
  faShoppingCart = faShoppingCart;
}
