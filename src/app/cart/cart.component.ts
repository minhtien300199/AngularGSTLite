import { Component, OnInit, AfterViewInit } from '@angular/core';
import { faShoppingCart, faTrashAlt, faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';
import {CartService} from './cart.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit, AfterViewInit {
  private cartService = new CartService();
  carts = [];
  total = 0;
  tableShow = false;
  faTrashAlt = faTrashAlt;
  faShoppingCart = faShoppingCart;
  faArrowCircleLeft = faArrowCircleLeft;
  constructor() {
  }
  ngAfterViewInit(): void {

  }
  ngOnInit(): void {
    this.showCart();
    this.total = this.cartService.sumCart();
    if (this.carts.length !== 0) {
      this.tableShow = true;
    }
  }
  showCart = () => {
    this.carts = this.cartService.showCart();
  }
  removeOneProduct = (id) => {
    this.carts = this.cartService.removeOne(id);
  }
}
