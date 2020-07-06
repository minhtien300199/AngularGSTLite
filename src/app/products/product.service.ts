import { Injectable } from '@angular/core';
import { Product } from './model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class ProductService {
    public  listProduct: Product[] = new Array();
    private urlAPI = 'http://localhost:8080/mobilestore';
    constructor(private http: HttpClient) {

    }
    public getCartNum = () => {
        const cart = JSON.parse(localStorage.getItem('cart') || '[]');
        return cart.length;
    }
    public getListProduct = () => {

        const getListProductUrl = `${this.urlAPI}/api/v1/image/list`;
        console.log(getListProductUrl);
        this.listProduct = new Array();
        return this.http
            .get<any>(getListProductUrl)
            .pipe(
                map((lst) => {
                    console.log(lst);
                    if (lst != null) {
                        lst.forEach(item => {
                            const product = {} as Product;

                            try {
                                product.id = item.product.id;
                                product.productName = item.product.productName;
                                product.unitPrice = item.product.unitPrice;
                                product.description = item.product.description;
                                product.unitInStock = item.product.unitInStock;
                                product.productCondition = item.product.productCondition;
                                product.manufacturer = item.product.manufacturer;
                                product.imgCode = item.picByte;
                                
                                console.log(product);
                                this.listProduct.push(product);

                            } catch (err) {
                                console.log(err);
                            }
                        });
                        return this.listProduct;
                    } else {
                        return null;
                    }
                })
            );
    }

}
