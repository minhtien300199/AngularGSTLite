import { Component, OnInit, AfterViewInit,ChangeDetectorRef, Input } from '@angular/core';
import { Router } from '@angular/router';
import { DetailsProductService } from './detailsProduct.service'
import { ProductService} from '../products/product.service';
import {CartService} from '../cart/cart.service';
import { Product } from '../products/model';
import { EventEmitterService } from '../event-emitter.service';  
@Component({
  selector: 'app-details-product',
  templateUrl: './details-product.component.html',
  styleUrls: ['./details-product.component.css']
})
export class DetailsProductComponent
implements OnInit  {
  
  productName = localStorage.getItem('currentDetailsProductName');
  description = localStorage.getItem('currentDetailsProductDescription');
  id = localStorage.getItem('currentDetailsProductId');
  manufacturer = localStorage.getItem('currentDetailsProductManufacturer');
  unitInStock = localStorage.getItem('currentDetailsProductUnitInStock');
  unitPrice = localStorage.getItem('currentDetailsProductUnitPrice');
  //private cart = new CartService();
  //totalProducts = 0;

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
  }
  ngOnInit(): void {
   
  }
}
