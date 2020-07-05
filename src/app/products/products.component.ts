import { Component, OnInit, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { faShoppingCart, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { ProductService } from './product.service';
import { CartService } from '../cart/cart.service';
import { Router } from '@angular/router';
import { Product } from './model';
import { DetailsProductService } from '../details-product/detailsProduct.service';
import { Observable } from 'rxjs';
import { EventEmitterService } from '../event-emitter.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit, AfterViewInit {
  public productsArr = [];
  totalProducts = 0;
  listProduct: Product[] = new Array();
  public cart = new CartService();
  faShoppingCart = faShoppingCart;
  faInfoCircle = faInfoCircle;


  constructor(
    private eventEmitterService: EventEmitterService,
    public productService: ProductService,
    public router: Router,
    public detailsProductService: DetailsProductService,
    public cdr: ChangeDetectorRef) {

  }
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
    if (this.eventEmitterService.subsVar == undefined) {
      this.eventEmitterService.subsVar = this.eventEmitterService.
        invokeFirstComponentFunction.subscribe((obj: object) => {
          this.addProductToCart(obj);
        });
    }
  }
}
