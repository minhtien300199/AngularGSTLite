import { Component, OnInit, AfterViewInit } from '@angular/core';
import { faShoppingCart, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { ProductService} from './product.service';
import { Router } from '@angular/router';
import { Product } from './model';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, AfterViewInit {
  public productsArr = [];
  constructor(
    private productService: ProductService,
    private router: Router
  ) { }
  ngAfterViewInit(): void {
    this.getListProduct()
  }

  listProduct:Product[] = new Array()

  getListProduct = () =>{
    this.productService.getListProduct().subscribe(
      (data) =>{
        console.log(data)
        this.listProduct = data;
      }
      )
  }

  ngOnInit(): void {
  }
  faShoppingCart = faShoppingCart;
  faInfoCircle = faInfoCircle;
}
