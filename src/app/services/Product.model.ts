export class Product{
    "productId": Number;
    "productName": String;
    "productCode": String;
    "releaseDate": String;
    "description": String;
    "price": Number;
    "starRating": Number;
    "imageUrl": String;

    constructor(){

    }
    /* constructor(productId: Number, productName: String, productCode: String, releaseDate: String, description: String, price: Number, starRating: Number, imageUrl: String) {
    this.productId = productId;
    this.productName = productName;
    this.productCode = productCode;
    this.releaseDate = releaseDate;
    this.description = description;
    this.starRating = starRating;
    this.imageUrl   = imageUrl || 'url';
    }
 */
}