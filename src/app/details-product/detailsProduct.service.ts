import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Product } from '../products/model';

@Injectable({
    providedIn: 'root',
})
export class DetailsProductService {
    public product: Product
    private urlAPI = 'http://demo4279480.mockable.io';
    constructor(
        private http: HttpClient,
        private router: Router,
        ) {}

    public showDetailsProduct = (item) => {
        if (this.checkLocalStorage() == true)
        {
            localStorage.removeItem('currentDetailsProductName');
            localStorage.removeItem('currentDetailsProductDescription');
            localStorage.removeItem('currentDetailsProductId');
            localStorage.removeItem('currentDetailsProductManufacturer');
            localStorage.removeItem('currentDetailsProductUnitInStock');
            localStorage.removeItem('currentDetailsProductName');
            localStorage.removeItem('currentDetailsProductUnitPrice');
        }
        
        this.router.navigateByUrl('/detailsProduct');
        console.log(item.id)
        // this.product = item;
        localStorage.setItem('currentDetailsProductName', item.productName);
        localStorage.setItem('currentDetailsProductDescription', item.description);
        localStorage.setItem('currentDetailsProductId', item.id);
        localStorage.setItem('currentDetailsProductManufacturer', item.manufacturer);
        localStorage.setItem('currentDetailsProductUnitInStock', item.unitInStock);
        localStorage.setItem('currentDetailsProductUnitPrice', item.unitPrice);
      }


    public checkLocalStorage = () => {
        if (
            localStorage.getItem('currentDetailsProductName') != null ||
            localStorage.getItem('currentDetailsProductDescription') != null ||
            localStorage.getItem('currentDetailsProductId') != null ||
            localStorage.getItem('currentDetailsProductManufacturer') != null ||
            localStorage.getItem('currentDetailsProductUnitInStock') != null ||
            localStorage.getItem('currentDetailsProductUnitPrice') != null
        ){
            return true;
        }
        else {
            return false;
        }
    }

}
