import { Component, OnInit, AfterViewInit } from '@angular/core';
import { faShoppingCart, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { ProductService} from './product.service';
import {CartService} from '../cart/cart.service';
import { Router } from '@angular/router';
import { Product } from './model';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, AfterViewInit {
  public productsArr = [];
  listProduct: Product[] = new Array();
  private cart = new CartService();
  faShoppingCart = faShoppingCart;
  faInfoCircle = faInfoCircle;
  constructor(
    private productService: ProductService,
    private router: Router
  ) { }
  ngAfterViewInit(): void {
    this.getListProduct();
  }
  addProductToCart = (obj: object) => {
    this.cart.addCart(obj);
  }

  getListProduct = () => {
    this.productService.getListProduct().subscribe(
      (data) => {
        console.log(data);
        this.listProduct = data;
        this.productsArr = data;
      });
  }

  ngOnInit(): void {
  }

}
