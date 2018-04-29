import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Product } from '../services/Product.model';
import { ProductService } from '../services/product.service';

/*    "productId": Number,
    "productName": String,
    "productCode": String,
    "releaseDate": String,
    "description": String,
    "price": Number,
    "starRating": Number,
    "imageUrl":String;
     */
@Component({
  selector: 'pm-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  productFormGroup: FormGroup;
  errorMessage: string;

  constructor(private _productService: ProductService) { }

  ngOnInit() {
    this.productFormGroup = new FormGroup({
      productId: new FormControl('', Validators.required),
      productName: new FormControl('', Validators.required),
      productCode: new FormControl('', Validators.required),
      releaseDate: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),
      starRating: new FormControl('', Validators.required),
      imageUrl: new FormControl('', Validators.required)
    });
  }

  onSubmit() {
    let product = new Product();
    product = this.productFormGroup.value;
    this._productService.createProducts(product)
                        .subscribe(data => { alert("Product is created successfully."); },
                        error => this.errorMessage = <any>error);
    this.productFormGroup.reset();
  }


}
