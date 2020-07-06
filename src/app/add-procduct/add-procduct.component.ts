import { Component, OnInit, ɵɵresolveBody } from '@angular/core';
import { AddProductService } from './addProduct.service';
import { Router } from '@angular/router';
import { Product} from './model'
import { faShoppingCart, faInfoCircle, faPlus, faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { HttpErrorResponse } from '@angular/common/http';



@Component({
  selector: 'app-add-procduct',
  templateUrl: './add-procduct.component.html',
  styleUrls: ['./add-procduct.component.css']
})
export class AddProcductComponent implements OnInit {

  public product: Product;
  productName = '';
  unitPrice= '';
  unitInStock ='';
  productCondition = '';
  description = '';
  manufacturer = '';
  productGroupId = '';
  constructor(
    private addProductService: AddProductService
  ) { }

  clickSubmit () {
    console.log(this.productName);
    this.addProductService.addProduct(this.productName, this.unitPrice,this.unitInStock,
       this.description, this.manufacturer, 
       this.productCondition, String(this.productGroupId), "1").subscribe();
  
  }

  ngOnInit(): void {
  }

  faPlus = faPlus;
  faArrowCircleLeft = faArrowCircleLeft;

}
