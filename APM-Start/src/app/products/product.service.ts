import { IProduct } from './product';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable()
export class ProductService {
	private _productsUrl = 'http://localhost:3000/products'

	constructor(private _http: HttpClient){}

    getProducts(): Observable<IProduct[]> {
	   return this._http.get<IProduct[]>(this._productsUrl)
		.do(data => console.log(JSON.stringify(data)))
		.catch(this.handleError);
	}
	
	private handleError(err: HttpErrorResponse) {
	  console.log(err.message);
	  return Observable.throw(err.message);
	}
}