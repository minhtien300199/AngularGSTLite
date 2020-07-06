import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from './model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class ListProductService {
    public  listProduct: Product[] = new Array();
    private urlAPI = 'http://demo4279480.mockable.io';
    constructor(private http: HttpClient) {

    }


    public getListProduct = () => {
        const getListProductUrl = `${this.urlAPI}/products`;
        console.log(getListProductUrl);
        this.listProduct = new Array();
        return this.http
            .get<any>(getListProductUrl)
            .pipe(
                map((listProduct) => {
                    console.log(listProduct);
                    if (listProduct != null) {
                        listProduct.forEach(item => {
                            const product = {} as Product;
                            product.id = item.id;
                            product.productName = item.product_name;
                            product.unitPrice = item.unit_price;
                            product.unitInStock = item.unit_in_stock;
                            //product.description = item.description;
                            product.manufacturer = item.manufacturer;
                            product.isDisable = item.isDisable;
                            product.productCondition = item.productCondition;
                            product.productGroupId = item.productGroupId;
                            product.userId = item.userId;
                            product.createAt = item.createAt;
                            //product.imgPath = item.imgPath;
                            console.log(product);   
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
