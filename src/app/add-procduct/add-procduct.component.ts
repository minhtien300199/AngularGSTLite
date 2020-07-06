import { Component, OnInit } from '@angular/core';
import { AddProductService } from './addProduct.service';
import { Router } from '@angular/router';
import { Product} from './model'
import { faShoppingCart, faInfoCircle, faPlus, faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-add-procduct',
  templateUrl: './add-procduct.component.html',
  styleUrls: ['./add-procduct.component.css']
})
export class AddProcductComponent implements OnInit {

  product: Product;
  constructor(
    private addProductService: AddProductService
  ) { }

  clickSubmit () {
    this.product.productName = (<HTMLInputElement>document.getElementById('productName')).value;
    console.log(this.product.productName);
  }

  ngOnInit(): void {
  }

  faPlus = faPlus;
  faArrowCircleLeft = faArrowCircleLeft;

}
