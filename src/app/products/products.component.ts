import { Component, OnInit, AfterViewInit, ChangeDetectorRef } from '@angular/core';
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
  totalProducts = 0;
  listProduct: Product[] = new Array();
  private cart = new CartService();
  faShoppingCart = faShoppingCart;
  faInfoCircle = faInfoCircle;
  constructor(
    private productService: ProductService,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) { }
  ngAfterViewInit(): void {
    this.getListProduct();
    this.totalProducts = this.productService.getCartNum();
    this.cdr.detectChanges();
  }
  countProducts = () => {
    this.totalProducts = this.productService.getCartNum();
  }
  addProductToCart = (obj: object) => {
    this.cart.addCart(obj);
    this.totalProducts = this.productService.getCartNum();
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
