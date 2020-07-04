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
    private urlAPI = 'https://5eff224edfd1400016ae0db5.mockapi.io/RESTfulAPIusingSpringBoot';
    constructor(private http: HttpClient) {

    }

    public getListProduct = () => {

        const getListProductUrl = `${this.urlAPI}/product`;
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
                            product.productName = element.product_name;
                            product.price = element.unit_price;
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
