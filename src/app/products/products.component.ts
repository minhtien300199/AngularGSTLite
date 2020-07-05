import { Component, OnInit, AfterViewInit } from '@angular/core';
import { faShoppingCart, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { ProductService} from './product.service';
import {CartService} from '../cart/cart.service';
import { Router } from '@angular/router';
import { Product } from './model';
import { DetailsProductService } from '../details-product/detailsProduct.service';
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
    private detailsProductService: DetailsProductService
  ) { }
  ngAfterViewInit(): void {
    this.getListProduct();
    this.totalProducts = this.productService.getCartNum();
  }
  countProducts = () => {
    this.totalProducts = this.productService.getCartNum();
  }
  addProductToCart = (obj: object) => {
    this.cart.addCart(obj);
    this.totalProducts = this.productService.getCartNum();
  }

  detailsProduct = (obj: object) => {
    console.log(obj);
    this.detailsProductService.showDetailsProduct(obj);

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
