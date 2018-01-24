import { Component, OnInit } from '@angular/core'
import { IProduct } from './product'
import { ProductService } from './product.service';

@Component({
	selector: 'pm-products',
	templateUrl: './product-list.component.html',
	styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
  productListTitle: string = 'Product List'
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;
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
		this.products = this._productService.getProducts();
		this.filteredProducts = this.products;
	}

	onRatingClicked(message: string): void {
		this.productListTitle = `Product List: ${message}`
	}

	performListFilter(filterBy: string): IProduct[] {
	  filterBy = filterBy.toLocaleLowerCase();
	  return this.products.filter((product: IProduct) =>
	    product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1
	  );
	}
}
