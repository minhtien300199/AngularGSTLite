import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from './model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class ProductService {
    public  listProduct: Product[] = new Array();
    private urlAPI = 'http://demo4279480.mockable.io';
    constructor(private http: HttpClient) {

    }
    public getCartNum = () => {
        const cart = JSON.parse(localStorage.getItem('cart') || '[]');
        return cart.length;
    }
    public getListProduct = () => {

        const getListProductUrl = `${this.urlAPI}/product`;
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
                            product.description = item.description;
                            product.unitInStock = item.unitInStock;
                            product.productCondition = item.productCondition;
                            product.manufacturer = item.manufacturer;
                            product.imgPath = item.imgPath;
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
