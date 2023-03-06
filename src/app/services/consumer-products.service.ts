import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../Core/Model/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsumerProductsService {
  //injecter le service httpClient 
  constructor(private http : HttpClient) { }

  getProduct(){
    return this.http.get<Product[]>('http://localhost:3000/products')
  }
  addProduct(product: Product): Observable<Product> {
    return this.http.post<Product>('http://localhost:3000/products', product);
  }
}
