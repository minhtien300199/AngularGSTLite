import { Component, OnInit, AfterViewInit,ChangeDetectorRef, Input } from '@angular/core';
import { Router } from '@angular/router';
import { DetailsProductService } from './detailsProduct.service'
import { ProductService} from '../products/product.service';
import {CartService} from '../cart/cart.service';
import { Product } from '../products/model';
import { EventEmitterService } from '../event-emitter.service';  
import { faShoppingCart, faInfoCircle, faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-details-product',
  templateUrl: './details-product.component.html',
  styleUrls: ['./details-product.component.css']
})
export class DetailsProductComponent
implements OnInit  {
  imgCode = localStorage.getItem('currentDetailsImgCode');
  productName = localStorage.getItem('currentDetailsProductName');
  description = localStorage.getItem('currentDetailsProductDescription');
  id = localStorage.getItem('currentDetailsProductId');
  manufacturer = localStorage.getItem('currentDetailsProductManufacturer');
  unitInStock = localStorage.getItem('currentDetailsProductUnitInStock');
  unitPrice = localStorage.getItem('currentDetailsProductUnitPrice');
  totalProducts = this.productService.getCartNum();
  faShoppingCart = faShoppingCart;
  faArrowCircleLeft = faArrowCircleLeft;
  constructor(
    private eventEmitterService: EventEmitterService,
    public router: Router,
    public detailsProductService: DetailsProductService,
    public productService: ProductService,
    public cdr: ChangeDetectorRef,
    //public productsComponent: ProductsComponent
  ) {}

  
  addToCartFromProduct(){    
    this.eventEmitterService.onFirstComponentButtonClick(this.detailsProductService.product);
    this.totalProducts = this.productService.getCartNum();
  }
  ngOnInit(): void {
   
  }

}
