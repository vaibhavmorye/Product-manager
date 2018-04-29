import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { IProduct } from "./product";
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import { Product } from "./Product.model";


@Injectable()
export class ProductService {

  
   // private url = 'http://localhost:8080/';
    private url = 'https://desolate-caverns-84270.herokuapp.com/';
    // private _produtURL = 'http://localhost:8080/products';
    // private _postProdutURL = 'http://localhost:8080/addProduct';
    //localhost:8080/products
    //  https://desolate-caverns-84270.herokuapp.com
    // private _produtURL = 'http://desolate-caverns-84270.herokuapp.com/products';
    // private _postProdutURL = 'http://desolate-caverns-84270.herokuapp.com/products';

    constructor(private _http: HttpClient) {
    }

    getProducts(): Observable<IProduct[]> {
        let getUrl = this.url+'products';
        console.log(getUrl);
        return this._http.get<IProduct[]>(getUrl)
            .do(data => console.log('All' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    createProducts(data: Product): Observable<Product> {
        let result ;
        let postUrl = this.url+'addProduct';
        console.log(data.description);
         return this._http.post(postUrl,
            JSON.stringify(data),
            { headers: { 'Content-Type': 'application/json' } })
            .map(res=>{result= res})
            .catch(this.handleError);
    }

    getProductById(id:number):Observable<Product>{
        let getUrl = this.url+'findproduct/'+id;
        console.log(getUrl);
        return this._http.get<Product>(getUrl)
        .do(data=>{console.log(data)})
        .catch(this.handleError);

    }

    deleteProductById(id:number):Observable<Product>{
        let getUrl = this.url+'deleteproduct/'+id;
        console.log(getUrl);
        return this._http.get<Product>(getUrl)
        .do(data=>{console.log(data)})
        .catch(this.handleError);
    }

    private handleError(err: HttpErrorResponse) {
        console.log(err.message);
        return Observable.throw(err.message);
    }


}