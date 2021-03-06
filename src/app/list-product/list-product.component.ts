import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ListProductService } from './listProduct.service';
import { faShoppingCart, faInfoCircle, faTrashAlt, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { Product } from './model';
@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit, AfterViewInit {

  public productArr = [];
  listProduct: Product[] = new Array();
  faInfoCircle = faInfoCircle;
  faTrashAlt = faTrashAlt;
  faPlus = faPlus;
  constructor(
    private listProductService: ListProductService,
    public router: Router
  ) { }

  getListProduct = () => {
    this.listProductService.getListProduct().subscribe(
      (data) => {
        console.log(data);

        this.listProduct = data;
        this.productArr = data;
      });
    }
  
  ngOnInit(): void {
  }

  ngAfterViewInit(): void{
    this.getListProduct();
  }

}
