import { IProduct } from './product'
import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs/Observable'

@Injectable()
export class ProductService {
	private _productsUrl = '.api/products/products.json'
	constructor(private _http: HttpClient){}
    getProducts(): Observable<IProduct[]> {
       return this._http.get<IProduct[]>(this._productsUrl);
    }
}