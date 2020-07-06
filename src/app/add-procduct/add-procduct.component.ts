import { Component, OnInit } from '@angular/core';
import { AddProductService } from './addProduct.service';
import { Router } from '@angular/router';
import { Product} from './model'
import { faShoppingCart, faInfoCircle, faPlus, faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { HttpErrorResponse } from '@angular/common/http';
import {  RouterModule , Navigation } from '@angular/router';
import { HttpClient } from '@angular/common/http';

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

  //
  public selectedFile;
  public event1;
  imgURL: any;
  receivedImage: any;
  base64Data: any;
  convertedImage: any;
  receiveProduct: any;
  public  onFileChanged(event){
    console.log(event);
    this.selectedFile = event.target.files[0];

    let reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (event2) =>{
      this.imgURL = reader.result;
    }

  }

  onUpload(){

    const uploadData = new FormData();
    uploadData.append('myFile', this.selectedFile, this.selectedFile.name);
    console.log(this.selectedFile.name);
    this.HttpClient.post<any>('http://localhost:8080/mobilestore/api/v1/image/upload/', uploadData)
      .subscribe(
        res =>{
          console.log(res);
          this.receivedImage = res;
          this.base64Data = this.receivedImage.pic;
          this.convertedImage = 'data:image/jpeg;base64,' + this.base64Data;
          //console.log(this.convertedImage);
        },

        err =>{
          console.log("Không upload ảnh được!");
          console.log(err);
        }
      )
  }

  //

  constructor(
    private addProductService: AddProductService,
    private router: Router,
    private HttpClient: HttpClient
  ) { }

  clickSubmit () {
    console.log(this.productName);
    this.addProductService.addProduct(this.productName, this.unitPrice,this.unitInStock,
       this.description, this.manufacturer, 
       this.productCondition, String(this.productGroupId), "2").subscribe(
        res =>{
          console.log(res);
          this.receiveProduct = res;
          console.log(this.receiveProduct.id);
          this.onUpload()
          this.router.navigateByUrl('/')
        },

        err =>{
          console.log(err);
        }
       );
  
  }

  ngOnInit(): void {
  }

  faPlus = faPlus;
  faArrowCircleLeft = faArrowCircleLeft;

}
