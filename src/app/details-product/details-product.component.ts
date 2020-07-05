import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { DetailsProductService } from './detailsProduct.service'

@Component({
  selector: 'app-details-product',
  templateUrl: './details-product.component.html',
  styleUrls: ['./details-product.component.css']
})
export class DetailsProductComponent implements OnInit {
    
  productName = localStorage.getItem('currentDetailsProductName');
  description = localStorage.getItem('currentDetailsProductDescription');
  id = localStorage.getItem('currentDetailsProductId');
  manufacturer = localStorage.getItem('currentDetailsProductManufacturer');
  unitInStock = localStorage.getItem('currentDetailsProductUnitInStock');
  unitPrice = localStorage.getItem('currentDetailsProductUnitPrice');
  
  constructor(
    private router: Router,
    private detailsProductService: DetailsProductService
  ) { }


  

  ngOnInit(): void {
  }

  
}
