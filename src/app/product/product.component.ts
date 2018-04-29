import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from '../services/product';
import { Product } from '../services/Product.model';
import { ProductService } from '../services/product.service';

@Component({
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {


  pageTitle: string = 'Product details';
  product: Product;

  constructor(private _route: ActivatedRoute,
    private _router: Router,
    private _productService: ProductService) { }

  onBack(): void {
    this._router.navigate(['/product']);
  }

  ngOnInit() {
    let id = +this._route.snapshot.paramMap.get('id');
    this.pageTitle += `${id}`;
    this.getProductById(id);

  }

  getProductById(id: number): void {
    this._productService.getProductById(id)
      .subscribe(data => { this.product = <Product>data });
  }

  deleteById(id: number): void {
    console.log(id);
    this._productService.deleteProductById(id)
                        .subscribe(data => { alert("product is deleted" + data.productName) });
    this.onBack();
  }

}
