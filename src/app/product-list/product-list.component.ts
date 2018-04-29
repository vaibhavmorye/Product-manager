import { Component, OnInit } from '@angular/core';
import { IProduct } from '../services/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'pm-product-list',
  templateUrl: './product-list.component.html'
})
export class ProductListComponent implements OnInit {

  pageTitle: String = 'Product List';
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;
  _listFilter: string;
  filteredProducts: IProduct[];
  errorMassage: string;
  products: IProduct[];

  constructor(private _productService: ProductService) {
    this.listFilter = '';
  }

  ngOnInit(): void {
    this._productService.getProducts()
      .subscribe(products => {
        this.products = products;
        this.filteredProducts = this.products;
      },
        error => this.errorMassage = <any>error);
  }

  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this._listFilter ? this.performFilter(this.listFilter) : this.products;
  }

  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    console.log(this.products.filter((product: IProduct) => product.productName.toLocaleLowerCase().indexOf(filterBy) != -1));
    return this.products.filter((product: IProduct) => product.productName.toLocaleLowerCase().indexOf(filterBy) != -1);

  }

  OnratingClick(massage: string): void {
    this.pageTitle = massage;
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

}
