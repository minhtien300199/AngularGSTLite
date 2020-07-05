import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from './model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class ProductService {
    public  listProduct:Product[] = new Array()
    private urlAPI = 'http://localhost:8080/RESTful-API-using-Spring-Boot';
    constructor(private http: HttpClient) {

    }

    public getListProduct = () => {

        const getListProductUrl = `${this.urlAPI}/api/v1/product/list`;
        console.log(getListProductUrl);

        return this.http
            .get<any>(getListProductUrl)
            .pipe(
                map((listProduct) => {
                    console.log(listProduct);
                    if (listProduct != null) {
                        listProduct.forEach(element => {
                            const product = {} as Product;
                            product.id = element.id;
                            product.productName = element.productName;
                            product.price = element.price;
                            console.log(product)
                            this.listProduct.push(product);
                        });
                        return this.listProduct;
                    } else {
                        return null;
                    }
                })
            );
    }

}
