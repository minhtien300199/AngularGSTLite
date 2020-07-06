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
    private urlAPI = 'http://localhost:8080/mobilestore';
    constructor(private http: HttpClient) {

    }


    public getListProduct = () => {
        const getListProductUrl = `${this.urlAPI}/api/v1/product/list`;
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
                            product.productName = item.productName;
                            product.unitPrice = item.unitPrice;
                            product.unitInStock = item.unitInStock;
                            product.manufacturer = item.manufacturer;
                            product.isDisable = item.isDisabled;
                            product.productCondition = item.productCondition;
                            product.productGroupId = item.productGroupId;
                            product.userId = item.userId;
                            product.createAt = item.createdAt;
                            product.groupName = item.productGroup.groupName;
                            product.userName = item.users.fullname;
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
