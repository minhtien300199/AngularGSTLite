import { ProductsComponent } from './../products/products.component';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})

export class AddProductService {

    //public urlAPI = 'http://mobilestore-server.herokuapp.com/product/add'
    public urlAPI = 'http://localhost:8080/mobilestore/api/v1/product/add'
    constructor(private http: HttpClient) { }

    addProduct = (  productName : String,
    unitPrice : String,
    unitInStock: String,
    description:String,
    manufacturer: String,
    productCondition :String,
    productGroupId: String,
    userId : String ) =>
    {
        return this.http.post<any>(this.urlAPI, {
            productName,
            unitPrice,
            unitInStock,
            description,
            manufacturer,
            productCondition,
            productGroupId,
            userId
            
            
        })
    }
    
}