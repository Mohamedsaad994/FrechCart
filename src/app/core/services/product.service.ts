import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private _HttpClient:HttpClient) { }

  getProduct(numPage:number=1):Observable<any>{
    return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/products?page=${numPage}`)
  }
  getCategories():Observable<any>{
    return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/categories`)
  }
  getCategoryDetails(id:string|null):Observable<any>{
    return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/categories/${id}`)
  }
  getProdDetails(id:string|null):Observable<any>{
    return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
  }
}
