import { Component, OnInit } from '@angular/core'
import { IProduct } from './product'
import { ProductService } from './product.service';

@Component({
	templateUrl: './product-list.component.html',
	styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
  productListTitle: string = 'Product List'
  imageWidth: number = 50;
  imageMargin: number = 2;
	showImage: boolean = false;
	errorMessage: string;
  _listFilter: string;
  get listFilter(): string {
	  return this._listFilter;
  }
  set listFilter(value: string) {
	  this._listFilter = value;
	  this.filteredProducts = this._listFilter ? this.performListFilter(this.listFilter) : this.products;
  }
  filteredProducts: IProduct[];
  products: IProduct[] = [];

	constructor(private _productService: ProductService) {
		this.listFilter = '';
	}

	toggleImage(): void {
		this.showImage = !this.showImage;
	}

	ngOnInit(): void {
		this._productService.getProducts()
												.subscribe(products => {
																		 this.products = products,
																		 this.filteredProducts = this.products;
																	 },
												           error => this.errorMessage = <any>error);
	}

	onRatingClicked(message: string): void {
		this.productListTitle = `Product List: ${message}`;
	}

	performListFilter(filterBy: string): IProduct[] {
	  filterBy = filterBy.toLocaleLowerCase();
	  return this.products.filter((product: IProduct) =>
	    product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1
	  );
	}
}
